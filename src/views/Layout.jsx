const React = require("react");

function Layout({ title, children, time }) {
  function getTime(time) {
    const year = time.getFullYear();
    const month = (time.getMonth() + 1).toString().padStart(2, "0");
    const day = time.getDate().toString().padStart(2, "0");
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return date;
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="style/error.css" />
        <link rel="stylesheet" href="/style/layout.css" />
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
        <title>{title}</title>
      </head>
      <body className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-auto">
            <div className="inner">
              <h3 className="masthead-brand">Nasa project</h3>
              <nav className="nav nav-masthead justify-content-center">
                <a className="nav-link active" href="/nasa">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
                    alt="NASA"
                  />
                </a>
                <a className="nav-link active" href="/home">
                  Домашняя страница
                </a>
                <a className="nav-link" href="/gallery">
                  Галлерея
                </a>
                <a className="nav-link" href="/office">
                  Личный кабинет
                </a>
                <div
                  style={{
                    color: "white",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {getTime(time)}
                </div>
              </nav>
            </div>
          </header>

          <main>{children}</main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>
                <a href="https://t.me/tm_sheva" target="_blank">
                  @tmsheva
                </a>
                .
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

module.exports = Layout;
