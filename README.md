1) Инициализация проекта.
1. npm init -y
2. npx create-gitignore node
3. npm i express
4. npm i -D nodemon morgan
5. npm i @babel/core @babel/preset-env @babel/preset-react @babel/register react react-dom
6. npm i pg pg-hstore sequelize
7. npm i --save-dev sequelize-cli
8. npm i express-session session-file-store bcrypt
9. npm i dotenv
10. npx eslint --init           НЕ ДЕЛАЛ

2) Меняю скрипты.
1. Добавляю: "dev": "nodemon app.js --ignore sessions --ext js,jsx"
2. Добавляю: "start": "node app.js"

3) Работаю над структурой.
1. В корне добавил основной файл app.
2. В корне добавил папку src.
3. В src добавил папки: lib, middlewares, routes, views.
4. В корне добавил папку public.
5. В public добавил папку: js, style.

4) ENV
1. Создал файлы: .env и .env_example
2. Записал в них:
PORT=3000
DB=postgres://postgres:postgres@localhost:5432/flashcard
SESSION_SECRET=secret_code

5) Работаю над основным файлом app.
const express = require('express');