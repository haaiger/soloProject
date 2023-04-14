const React = require("react");
const Layout = require("./Layout");

function Home({ title, userSession, time, login, firstName, lastName, role }) {
  if (!role) {
    role = "Простой обыватель";
  }
  if (!login) {
    login = "Нужно настроить в личном кабинете";
  }
  if (!firstName) {
    firstName = "Нужно настроить в личном кабинете";
  }
  if (!lastName) {
    lastName = "Нужно настроить в личном кабинете";
  }
  return (
    <Layout
      userSession={userSession}
      title={title}
      time={time}
      className="align-items-center"
    >
      <link rel="stylesheet" href="/style/home.css" />
      <div className="home-container">
        <label>Ваш логин: </label> <span>{login}</span>{" "}
        <label>Ваше имя: </label> <span>{firstName}</span>{" "}
        <label>Ваш фамилия: </label> <span>{lastName}</span>{" "}
        <label>Ваш роль: </label> <span>{role}</span>{" "}
      </div>
    </Layout>
  );
}

module.exports = Home;
