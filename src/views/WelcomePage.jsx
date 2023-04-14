const React = require("react");

function Welcome() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style/welcome.css" />
        <script defer src="/js/welcome.js" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
          crossOrigin="anonymous"
        />
        <title>Welcome Page</title>
      </head>
      <body>
        <div
          className="wrapper"
          style={{
            backgroundImage:
              "url(https://apod.nasa.gov/apod/image/0011/redspot_cassini.gif)",
          }}
        >
          <div className="container">
            <div>
              <button
                className="pulse-button pulse-button1"
                type="button"
                id="login"
              >
                Войти
              </button>
              <button
                type="button"
                className="pulse-button pulse-button2"
                id="registration"
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

module.exports = Welcome;
