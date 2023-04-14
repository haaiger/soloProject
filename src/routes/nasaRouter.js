const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const CardPage = require("../views/CardPage");
const NasaPage = require("../views/NasaPage");
const { Cosmos } = require("../../db/models");

router.get("/", (request, response) => {
  renderTemplate(NasaPage, {}, response, request);
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const cosmosData = await Cosmos.findOne({ where: { id }, raw: true });
    if (cosmosData) {
      renderTemplate(CardPage, cosmosData, response, request);
    } else {
      response.status(404).send("Ошибка: Элемент NASA не найден.");
    }
  } catch (error) {
    console.log("Ошибка GET запроса /nasa/:id", error);
    response.status(500).send("Ошибка: Внутренняя ошибка сервера.");
  }
});

router.post("/match", async (request, response) => {
  const { date } = request.body;
  try {
    const findCosmos = await Cosmos.findOne({ where: { date }, raw: true });
    if (findCosmos) {
      response.status(200).json({
        message: "Был найден объект в Базе данных",
        data: findCosmos,
      });
    } else {
      response.json({
        message: "Такого объекта нет в Базе данных",
      });
    }
  } catch (error) {
    console.error("Ошибка POST запроса /match", error);
    response.status(500).json({
      message: "Ошибка сервера POST запрос /nasa/cosmos.",
      error,
    });
  }
});

router.post("/new-cosmos", async (request, response) => {
  try {
    const {
      copyright,
      date,
      explanation,
      url,
      hdurl,
      title,
      media_type,
      service_version,
    } = request.body;

    const createCosmos = await Cosmos.create({
      copyright,
      date,
      explanation,
      url,
      hdurl,
      title,
      media_type,
      service_version,
    });
    if (createCosmos) {
      response.status(201).json({
        message: "Был создан новый объект в Базе данных",
        data: createCosmos,
      });
    } else {
      response.json({
        message: "Такой объект уже был создан в Базе данных",
        data: createCosmos,
      });
    }
  } catch (error) {
    console.error("Ошибка сервера POST запрос /nasa/match.", error);
    response
      .status(500)
      .json({ message: "Ошибка сервера POST запрос /nasa/match.", error });
  }
});

router.post("/:id", (request, response) => {
  try {
    const { title, explanation, date, hdurl } = request.body;

    renderTemplate(
      CardPage,
      { title, explanation, date, hdurl },
      response,
      request
    );
  } catch (error) {
    console.error("Ошибка POST запроса /nasa/:id", error);
    response
      .status(500)
      .json({ message: "Ошибка сервера POST запрос /nasa/:id.", error });
  }
});

module.exports = router;
