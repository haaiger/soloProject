const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const OfficePage = require("../views/OfficePage");
const { User } = require("../../db/models");

router.get("/", (request, response) => {
  renderTemplate(OfficePage, {}, response, request);
});

router.post("/info", async (request, response) => {
  try {
    const { login, firstName, lastName, password } = request.body;
    const id = request.session.userId;
    const findUser = await User.findByPk(id);

    if (!findUser) {
      return response.status(404).send({ message: "Пользователь не найден" });
    }

    const updatedUser = {};
    if (login) updatedUser.login = login;
    if (firstName) updatedUser.firstName = firstName;
    if (lastName) updatedUser.lastName = lastName;
    if (password) updatedUser.password = password;

    await findUser.update(updatedUser);

    response.send({
      message: "Персональная информация успешно обновлена!",
    });
  } catch (error) {
    console.log("Ошибка запроса POST /info", error);
    response.status(500).send({
      message: "Ошибка сервера",
      error,
    });
  }
});

module.exports = router;
