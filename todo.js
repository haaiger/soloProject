// ! 1. Инициализация проекта.
// * 1. npm init -y
// * 2. npx create-gitignore node
// * 3. npm i express
// * 4. npm i -D nodemon morgan
// * 5. npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
// * 6. npm i pg pg-hstore sequelize
// * 7. npm i --save-dev sequelize-cli
// * 8. npm i express-session session-file-store bcrypt
// * 9. npm i dotenv
// * 10. npx eslint --init

// ! 2. Меняю скрипты.
// * 1. Добавляю: "dev": "nodemon app.js --ignore sessions --ext js,jsx"
// * 2. Добавляю: "start": "node app.js"

// ! 3. Работаю над структурой.
// * 1. В корне добавил основной файл app.
// * 2. В корне добавил папку src.
// * 3. В src добавил папки: lib, middlewares, routes, views.
// * 4. В корне добавил папку public.
// * 5. В public добавил папку: js, style.

// ! 4. Важные файлы.
// * 1. Создал файлы: .env и .env_example
// * 2. Записал в них:
/**
PORT=3000
DB=postgres://postgres:postgres@localhost:5432/flashcard // ? Поменять название БД.
SESSION_SECRET=secret_code
*/
// * 3. Добавил .babelrc.
// * 4. Записал в .babelrc:
/**
  {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
 */

// ! 5. Работаю над основным файлом app.
/**
require("@babel/register");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(process.cwd(), "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (request, res) => {
  res.send("check connect");
});

app.listen(PORT, () => {
  console.log(`Сервер успешно запущен! ${PORT}`);
});
*/

// ! Создал в папке lib компонент рендеринга страницы, renderTemplate.

// ! Создал компонент Layout.
