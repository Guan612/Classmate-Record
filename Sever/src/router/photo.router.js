const Router = require('koa-router');
const {
    test,
    show,
    upload,
    describePhoto,
    findUserPhoto,
    deleteUserPhoto,
} = require('../controller/photo.controller');

const {auth} = require('../middleware/auth.middleware');

const photoRouter = new Router();

//首页展示所有照片卡
photoRouter.get('/', show)

//上传照片
photoRouter.post('/upload', auth, upload)

//编辑照片卡
photoRouter.post('/describe', auth, describePhoto)

//查找用户上传的照片
photoRouter.get('/userphoto', auth, findUserPhoto)

//删除用户照片
photoRouter.delete('/delete/:id', auth, deleteUserPhoto)

photoRouter.get('/test', auth, test)

module.exports = photoRouter;