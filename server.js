'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

app.get('/data', (req, res) => {
  res.send('The server is visible');
});

app.get('/bad', (req, res) => {
  throw new Error('Something went wrong');
});

app.use('*', notFoundHandler); 
app.use(errorHandler); 
function start(port) {
  app.listen(port, () => console.log(`Server is up on ${port}`));
}
module.exports = {
  app: app,
  start: start,
};