const router = require("express").Router();
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");

router.post("/registration", async (request, response) => {
  try {
    const { email, password } = request.body;
    const findUser = await User.findOne({ where: { email }, raw: true });
    if (!findUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, password: hashedPassword });
      request.session.userId = newUser.id;
      response.json({ message: "Вы успешно зарегистрировались!" });
    } else {
      response
        .status(400)
        .json({ message: "Ошибка, такой юзер уже зарегистрирован!" });
    }
  } catch (error) {
    console.log("Ошибка POST запроса /registration", error);
    response.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const findUser = await User.findOne({ where: { email }, raw: true });

    if (findUser) {
      const passwordMatch = await bcrypt.compare(password, findUser.password);
      if (passwordMatch) {
        request.session.userId = findUser.id;
        request.session.email = findUser.email;
        request.session.login = findUser.login;
        request.session.firstName = findUser.firstName;
        request.session.lastName = findUser.lastName;
        request.session.role = findUser.role;
        response.json({ message: "Вы успешно зашли!" });
      } else {
        response.status(401).json({ message: "Неверный пароль!" });
      }
    } else {
      response.status(401).json({ message: "Такой пользователь не найден!" });
    }
  } catch (error) {
    console.log("Ошибка POST запроса /login", error);
    response.status(500).json({ message: "Ошибка сервера" });
  }
});

router.get("/logout", (request, response) => {
  request.session.destroy(() => {
    response.clearCookie("solo");
    response.redirect("/welcome");
  });
});

module.exports = router;
