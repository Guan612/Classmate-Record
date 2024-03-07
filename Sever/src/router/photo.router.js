const Router = require('koa-router');
const {
    show,
    upload,
} = require('../controller/photo.controller');

const photoRouter = new Router();

photoRouter.get('/', show)

photoRouter.post('/upload', upload)

module.exports = photoRouter;