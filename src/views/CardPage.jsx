const React = require("react");
const Layout = require("./Layout");

function Card({
  copyright,
  title,
  explanation,
  date,
  hdurl,
  userSession,
  time,
}) {
  if (!copyright) {
    copyright = "Авторское право не было указано";
  }

  return (
    <Layout userSession={userSession} title={title} time={time}>
      <link rel="stylesheet" href="/style/card.css" />
      <main role="main" className="inner cover text-center main">
        <h1 className="cover-heading">{copyright}</h1>
        <img
          className="lead card-img"
          src={hdurl}
          alt="Картинка космоса отсутствует"
        />
        <p className="lead">
          <di className="card-text">Обьяснение: {explanation}</di>
          <div className="card-text">Дата: {date}</div>
        </p>
      </main>
    </Layout>
  );
}

module.exports = Card;
