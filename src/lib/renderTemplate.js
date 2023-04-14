require('@babel/register');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const renderTemplate = (reactElement, properties, response, request) => {
  const reactEl = React.createElement(reactElement, {
    ...properties,
    ...response.app.locals,
    ...response.locals,
    userSession: request.session || {},
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  response.send(`<!DOCTYPE html>${html}`);
};

module.exports = renderTemplate;
