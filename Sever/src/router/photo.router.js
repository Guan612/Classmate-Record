const Router = require('koa-router');
const {
    test,
    show,
    upload,
    describePhoto,
    findUserPhoto
} = require('../controller/photo.controller');

const {auth} = require('../middleware/auth.middleware');

const photoRouter = new Router();

photoRouter.get('/', show)

photoRouter.post('/upload', upload)

photoRouter.post('/describe', describePhoto)

photoRouter.get('/userphoto', findUserPhoto)

photoRouter.get('/test', auth, test)

module.exports = photoRouter;