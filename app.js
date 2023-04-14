const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// Роуты
const galleryRouter = require("./src/routes/galleryRouter");
const authRouter = require("./src/routes/authRouter");
const welcomeRouter = require("./src/routes/welcomeRouter");
const officeRouter = require("./src/routes/officeRouter");
const pageNotFoundRouter = require("./src/routes/pageNotFoundRouter");
const nasaRouter = require("./src/routes/nasaRouter");
const nasaCardRouter = require("./src/routes/nasaCardRouter");
const homeRouter = require('./src/routes/homeRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.locals.title = "SoloProject";

// Мидлварки
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

// Конфиг сессии
const sessionConfig = {
  name: "solo",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "secret code",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: process.env.SESSION_MAX_AGE ?? 9999999,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

// Проверка авторизации, мидлварка
const checkAuth = (request, response, next) => {
  if (request.session.userId) {
    next();
  } else {
    response.redirect("/welcome");
  }
};

// Роуты
app.use("/home", checkAuth, homeRouter);
app.use("/gallery", checkAuth, galleryRouter);
app.use("/", authRouter, welcomeRouter);
app.use("/office", checkAuth, officeRouter);
app.use("/nasa", checkAuth, nasaRouter);
app.use("/nasa/card", checkAuth, nasaCardRouter);
app.use(checkAuth, pageNotFoundRouter);

// Старт сервера
app.listen(PORT, () => {
  app.locals.time = new Date();
  setInterval(() => {
    app.locals.time = new Date();
  }, 1000 * 60);
  console.log(`Сервер успешно запущен! ${PORT}`);
});
