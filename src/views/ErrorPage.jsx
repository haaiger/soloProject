const React = require("react");
const Layout = require("./Layout");

function Error({ title, userSession, time }) {
  return (
    <Layout
      userSession={userSession}
      title={title}
      time={time}
      className="align-items-center"
    >
      <div className="image">
        <div className="d-flex">
          <h1>404</h1>
          <span className="text">
            Космический объект, который вы ищете, исчез за горизонтом событий.
          </span>
        </div>
        <a href="/home">Вернуться обратно</a>
      </div>
    </Layout>
  );
}

module.exports = Error;
