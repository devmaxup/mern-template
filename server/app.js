require('dotenv-flow').config();
const express = require('express');

const configure = require('./config');
const routes = require('./routes');
const defaultErrorHandler = require('./helpers/defaultErrorHandler');

const app = express();

configure(app);
app.use('/api', routes);
app.use(defaultErrorHandler);

const server = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`  Server Listening on port ${server.address().port}`);
});
