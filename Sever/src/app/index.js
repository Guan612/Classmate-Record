const Koa  = require('koa');
const cros = require('@koa/cors');
const router = require('../router');
const {bodyParser} = require('koa-body');

const app = new Koa();

app.use(cros())

app.use(router.routes())

module.exports = app;

