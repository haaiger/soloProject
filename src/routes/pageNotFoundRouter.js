const router = require("express").Router();
const renderTemplate = require("../lib/renderTemplate");
const ErrorPage = require("../views/ErrorPage");

router.get("*", (request, response) => {
  renderTemplate(ErrorPage, {}, response, request);
});

module.exports = router;
