const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const WelcomePage = require('../views/WelcomePage');

router.get('/welcome', (request, response) => {
  renderTemplate(WelcomePage, {}, response, request);
});

module.exports = router;
