const router = require("express").Router();
const { Cosmos } = require("../../db/models");
const renderTemplate = require("../lib/renderTemplate");
const GalleryPage = require("../views/GalleryPage");

console.log(GalleryPage);

router.get("/", async (request, response, next) => {
  try {
    const resultsPerPage = 8;
    const currentPage = parseInt(request.query.page) || 1;

    const totalResults = await Cosmos.count();
    console.log("totalResults:", totalResults);

    const maxPage = Math.max(Math.ceil(totalResults / resultsPerPage), 1);
    console.log("maxPage:", maxPage);

    const nextPage =
      totalResults > resultsPerPage * currentPage
        ? currentPage + 1
        : currentPage;
    console.log("nextPage:", nextPage);

    const prevPage = currentPage > 1 ? currentPage - 1 : currentPage;
    console.log("prevPage:", prevPage);

    const offset = (currentPage - 1) * resultsPerPage;
    const findAllCosmos = await Cosmos.findAll({
      raw: true,
      limit: resultsPerPage,
      offset: offset,
    });

    renderTemplate(
      GalleryPage,
      { findAllCosmos, nextPage, prevPage },
      response,
      request
    );
  } catch (error) {
    console.log("Ошибка запроса /home", error);
  }
});

module.exports = router;
