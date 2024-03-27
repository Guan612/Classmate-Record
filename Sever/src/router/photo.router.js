const Router = require('koa-router');
const {
    test,
    show,
    upload,
    describePhoto,
    photoDetail,
    findUserPhoto,
    deleteUserPhoto,
} = require('../controller/photo.controller');

const {auth} = require('../middleware/auth.middleware');
const {validator} = require('../middleware/photo.middleware');

const photoRouter = new Router();

//首页展示所有照片卡
photoRouter.get('/', show)

//上传照片
photoRouter.post('/file', auth, upload)

//编辑照片卡
photoRouter.post('/', auth, validator({
    photo_name: 'string',
    photo_describe: 'string',
    photo_url: 'string',
}),describePhoto)

//照片详情
photoRouter.get('/detail/:id',photoDetail)

//查找用户上传的照片
photoRouter.get('/userphoto', auth, findUserPhoto)
 
//删除用户照片
photoRouter.delete('/:id', auth, deleteUserPhoto)


photoRouter.get('/test', auth, validator({
    photo_name: 'string',
    photo_describe: 'string',
    photo_url: 'string',
}),test)

module.exports = photoRouter;