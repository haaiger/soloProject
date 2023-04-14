const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const CardPage = require("../views/CardPage");
const { Cosmos } = require("../../db/models");

router.get("/:time", async (request, response) => {
  try {
    const { time } = request.params;
    const findCosmos = await Cosmos.findOne({
      where: { date: time },
      raw: true,
    });
    const { copyright, title, explanation, date, hdurl } = findCosmos;
    console.log();
    renderTemplate(
      CardPage,
      { copyright, title, explanation, date, hdurl },
      response,
      request
    );
  } catch (error) {
    console.log("Ошибка GET запроса /nasa/card/:date", error);
  }
});

module.exports = router;
