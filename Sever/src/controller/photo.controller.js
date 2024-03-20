const path = require('path');

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.default')

const {createPhotoCard, getAllPhotoCard,getUserPhotoCard} = require('../service/photo.service');
const {uploadFileError,unSupportedFileType,createPhotoCardError} = require("../constant/err.type");
class PhotoController{

    //获取所有照片
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
        let user_id = ctx.query.user_id;
        //console.log(user_id)
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
        const { authorization = '' } = ctx.request.header
        const token = authorization.replace('Bearer ', '')
        try {
            // user中包含了payload的信息(id, user_name, is_admin)
            const user = jwt.verify(token, JWT_SECRET)
            console.log(user)
        } catch (err) {
            switch (err.name) {
              case 'TokenExpiredError':
                console.error('token已过期', err)
                // return ctx.app.emit('error', tokenExpiredError, ctx)
              case 'JsonWebTokenError':
                console.error('无效的token', err)
                // return ctx.app.emit('error', invalidToken, ctx)
            }
        }
    }

}

module.exports = new PhotoController();