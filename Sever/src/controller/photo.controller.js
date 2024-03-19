const path = require('path');
const {uploadFileError,unSupportedFileType} = require("../constant/err.type");
class PhotoController{

    async show(ctx, next){
        ctx.body = 'show';
    }

    //照片上传api
    async upload(ctx,next){
        // console.log(ctx.request.files.file.path)
        const {file,path} = ctx.request.files;
        const fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
        if(file){
            if(!fileTypes.includes(file.type)){
                return ctx.app.emit('error',unSupportedFileType,ctx);
            }
            ctx.body = {
                code:0,
                Message:'图片上传成功',
                result:{
                    goods_img:path.basename(file.path)
                }
            }
        } else {
            return ctx.app.emit('error', uploadFileError,ctx);
        }
    }
}

module.exports = new PhotoController();