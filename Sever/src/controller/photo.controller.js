const path = require('path');
const {createPhotoCard, getAllPhotoCard,getUserPhotoCard} = require('../service/photo.service');
const {uploadFileError,unSupportedFileType,createPhotoCardError} = require("../constant/err.type");

const {tokeninfo} = require("../middleware/tokenInfo.middleware")

class PhotoController{

    //首页获取所有照片
    async show(ctx, next){
        const {pageNum = 1,pageSize = 10} = ctx.request.query;
        try {
            const res = await getAllPhotoCard(pageNum,pageSize);
            ctx.body = {
                code:0,
                message:'获取照片列表成功',
                result:res
            }
        } catch (err) {
            console.error(err);
        }
        
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

    //查找指定用户的照片
    async findUserPhoto(ctx,next){
        const user = await tokeninfo(ctx);
        const user_id = user.id
        try {
            const res = await getUserPhotoCard(user_id*1);
            if(res.length === 0){
                ctx.body = {
                    code:0,
                    message:"该用户没有上传照片",
                    result:[]
                }
                return;
            } else {
                ctx.body = {
                    code:0,
                    message:"查找照片成功",
                    result:res
                };
            }
        } catch (err) {
            console.log(err);
        }
    }


    //测试是否能通过token获取到用户id自动查询
    async test(ctx,next){
        ctx.body="测试成功";
    }

}

module.exports = new PhotoController();