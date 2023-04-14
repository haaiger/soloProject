const renderTemplate = require("../lib/renderTemplate");
const Home = require("../views/homePage");
const { User } = require("../../db/models");

const router = require("express").Router();

router.get("/", async (request, response) => {
  const getUser = await User.findOne({
    where: { email: request.session.email },
    raw: true,
  });
  const { login, firstName, lastName, role } = getUser;
  renderTemplate(Home, { login, firstName, lastName, role }, response, request);
});

module.exports = router;
