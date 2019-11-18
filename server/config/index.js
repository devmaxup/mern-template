const api = require('./api');
const db = require('./db');
const debug = require('./debug');

module.exports = (app) => {
  debug(app);
  api(app);
  db(app);
};
