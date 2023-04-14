const React = require("react");
const Layout = require("./Layout");

function Nasa({ title, userSession, time }) {
  return (
    <Layout userSession={userSession} title={title} time={time}>
      <script defer src="/js/nasa.js"></script>
      <link rel="stylesheet" href="/style/nasa.css" />
      <div className="nasa_container">
        <form action="" name="nasaInformation">
          <input
            type="date"
            name="date"
            className="date-input"
            style={{ marginRight: "16px" }}
            min="1996-01-01"
          ></input>
          <button type="button" id="findInfo" className="btn btn-warning">
            Check
          </button>
        </form>
        <div className="blockCards d-flex gap-2"></div>
        <button className="secretBtn">GOOOOO</button>
      </div>
    </Layout>
  );
}

module.exports = Nasa;
