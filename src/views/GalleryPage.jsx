const React = require("react");
const Layout = require("./Layout");

function Gallery({
  userSession,
  title,
  time,
  findAllCosmos,
  nextPage,
  prevPage,
  currentPage,
  totalPages,
}) {
  return (
    <Layout userSession={userSession} title={title} time={time}>
      <link rel="stylesheet" href="/style/gallery.css" />
      <div className="wrapper d-flex flex-column">
        <ul className="d-flex flex-wrap gap-3 row">
          {findAllCosmos.map((cosmo) => (
            <li key={cosmo.id} style={{ width: "18rem" }}>
              <div className="card mt-3 p-2" style={{ height: "300px" }}>
                <img
                  className="card-img-top"
                  style={{ height: "10rem" }}
                  src={cosmo.url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">{cosmo.title}</p>
                </div>
                <a
                  className="btn btn-info mb-2 nasa-btn"
                  href={`/nasa/card/${cosmo.date}`}
                  id="findInfo"
                >
                  Больше
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="pagination">
          {prevPage && (
            <a href={`?page=${prevPage}`} className="page-link">
              Previous
            </a>
          )}
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;
            const activeClass = pageNumber === currentPage ? "active" : "";
            return (
              <a
                key={i}
                href={`?page=${pageNumber}`}
                className={`page-link ${activeClass}`}
              >
                {pageNumber}
              </a>
            );
          })}
          {nextPage && (
            <a href={`?page=${nextPage}`} className="page-link">
              Next
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
}

module.exports = Gallery;
