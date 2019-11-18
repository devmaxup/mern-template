const api = require('./api');
const db = require('./db');
const debug = require('./debug');
const passport = require('./passport');
const swagger = require('./swagger');

module.exports = (app) => {
  debug(app);
  api(app);
  db(app);
  passport(app);
  swagger(app);
};
