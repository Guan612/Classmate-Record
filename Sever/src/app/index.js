const path = require('path');
const Koa  = require('koa');
const cros = require('@koa/cors');
const router = require('../router');
const {koaBody} = require('koa-body');
const KoaStatic = require('koa-static')
const parameter = require('koa-parameter');
const errHandler = require('./errHandler')


const app = new Koa();

app.use(
    koaBody({
        multipart: true,
        formidable: {
            maxFileSize: 2000*1024*1024,   // 设置上传文件大小最大限制，默认20M
            uploadDir: path.join(__dirname, '../uploads/img'),  // 设置文件上传目录
            keepExtensions: true    // 保持文件的后缀
        },
        parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    })
)

app.use(KoaStatic(path.join(__dirname, '../uploads')));

app.use(cros());
app.use(parameter(app));
// app.use(koaBody());

app.use(router.routes());
app.on('error', errHandler);

module.exports = app;

