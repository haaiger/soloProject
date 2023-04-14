const React = require("react");
const Layout = require("./Layout");

function Office({ title, userSession, time }) {
  return (
    <Layout userSession={userSession} title={title} time={time}>
      <link rel="stylesheet" href="/style/office.css" />
      <script defer src="/js/office.js" />
      <form name="personalInformation">
        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="floatingLogin"
            placeholder="user"
            name="login"
          />
          <label htmlFor="floatingLogin">Логин</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingFirstName"
            placeholder="Artem"
            name="firstName"
          />
          <label htmlFor="floatingFirstName">Имя</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingLastName"
            placeholder="Shevchenko"
            name="lastName"
          />
          <label htmlFor="floatingLastName">Фамилия</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="123456789"
            name="password"
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>

        <button type="submit" className="btn btn-outline-success">
          Сохранить
        </button>
      </form>
    </Layout>
  );
}

module.exports = Office;
