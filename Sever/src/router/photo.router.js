const Router = require('koa-router');
const {
    show,
    upload,
    describePhoto,
} = require('../controller/photo.controller');

const photoRouter = new Router();

photoRouter.get('/', show)

photoRouter.post('/upload', upload)

photoRouter.post('/describe', describePhoto)

module.exports = photoRouter;