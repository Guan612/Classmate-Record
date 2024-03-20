const path = require('path');

const {createPhotoCard} = require('../service/photo.service');
const {uploadFileError,unSupportedFileType,createPhotoCardError} = require("../constant/err.type");
class PhotoController{

    //获取所有照片
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

    //照片描述
    async describePhoto(ctx,next){
        let {photo_name,photo_describe,photo_url,user_id} = ctx.request.body;
        //console.log(photo_name,photo_describe,photo_url,user_id)
        try {
            const res = await createPhotoCard(photo_name,photo_describe,photo_url,user_id*1);
            ctx.body = {
                code:0,
                Message:"添加照片描述成功",
                result:res
            };
        } catch (err) {
            console.log(err)
            return ctx.app.emit('error',createPhotoCardError,ctx);
        };
    }


}

module.exports = new PhotoController();