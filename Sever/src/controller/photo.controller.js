const path = require('path');
const uploadFile = require('../middleware/uploadFile.middleware');
const uploadFileError = require("../constant/err.type")
class PhotoController{

    async show(ctx, next){
        ctx.body = 'show';
    }

    //照片上传api
    async upload(ctx,next){
        const file = ctx.request.file;
        if(file){
            uploadFile(file);
            return path
        } else {
            return ctx.app.emit('error', uploadFileError,ctx);
        }
    }
}

module.exports = new PhotoController();