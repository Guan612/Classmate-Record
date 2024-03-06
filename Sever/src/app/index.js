const Koa  = require('koa');
const cros = require('@koa/cors');
const app = new Koa();

app.use(cros())

module.exports = app;

