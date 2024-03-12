const Koa  = require('koa');
const cros = require('@koa/cors');
const router = require('../router');
const {koaBody} = require('koa-body');
const parameter = require('koa-parameter');
const errHandler = require('./errHandler')


const app = new Koa();

app.use(cros())
app.use(parameter(app));
app.use(koaBody());

app.use(router.routes());
app.on('error', errHandler);

module.exports = app;

