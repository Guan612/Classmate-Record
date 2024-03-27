const path = require('path');
const {APP_PORT,SEVER_URL} = require('../config/config.default');

const {
    createPhotoCard,
    getAllPhotoCard,
    getUserPhotoCard,
    deletePhotoCard,
    getDetailCard,
} = require('../service/photo.service');
const { uploadFileError, unSupportedFileType, createPhotoCardError } = require("../constant/err.type");

const { tokeninfo } = require("../middleware/tokenInfo.middleware")

class PhotoController {

    //首页获取所有照片
    async show(ctx, next) {
        const { pageNum = 1, pageSize = 10 } = ctx.request.query;
        try {
            const res = await getAllPhotoCard(pageNum, pageSize);
            ctx.body = {
                code: 0,
                message: '获取照片列表成功',
                result: res
            }
        } catch (err) {
            console.error(err);
        }
    }

    //照片上传api
    async upload(ctx, next) {
        //console.log(ctx.request.files.file)
        const { file, path } = ctx.request.files;
        let fileSize = file.size / 1024 / 1024;
        fileSize = fileSize.toFixed(2);

        const fileTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
        if (file) {
            if (!fileTypes.includes(file.mimetype)) {
                return ctx.app.emit('error', unSupportedFileType, ctx);
            }
            ctx.body = {
                code: 0,
                Message: '图片上传成功',
                result: {
                    photo_path: file.filepath,
                    photo_name: file.newFilename,
                    photo_size: fileSize + "MB",
                }
            }
        } else {
            return ctx.app.emit('error', uploadFileError, ctx);
        }
    }

    //添加照片描述
    async describePhoto(ctx, next) {
        let { photo_name, photo_describe, photo_url } = ctx.request.body;
        const user_id = ctx.state.user.id;
        photo_url = SEVER_URL+":"+APP_PORT+"/img/"+photo_url;
        //console.log(photo_name,photo_describe,photo_url,user_id)
        try {
            const res = await createPhotoCard(photo_name, photo_describe, photo_url, user_id * 1);
            ctx.body = {
                code: 0,
                Message: "添加照片描述成功",
                result: res
            };
        } catch (err) {
            console.log(err)
            return ctx.app.emit('error', createPhotoCardError, ctx);
        };
    }

    //照片详情
    async photoDetail(ctx, next) {
        const photo_id = ctx.params.id;
        const res = await getDetailCard(photo_id);
        ctx.body = {
            code: 0,
            message: "获取照片详情成功",
            result: res
        }
    }

    //查找指定用户的所有照片
    async findUserPhoto(ctx, next) {
        const user_id = ctx.state.user.id;
        try {
            const res = await getUserPhotoCard(user_id * 1);
            if (res.length === 0) {
                ctx.body = {
                    code: 0,
                    message: "该用户没有上传照片",
                    result: []
                }
                return;
            } else {
                ctx.body = {
                    code: 0,
                    message: "查找照片成功",
                    result: res
                };
            }
        } catch (err) {
            console.log(err);
        }
    }

    //删除指定照片
    async deleteUserPhoto(ctx, next) {
        const deleteid = ctx.params.id;
        // console.log(deleteid);
        let res = await deletePhotoCard(deleteid * 1);
        //console.log(res);
        if (res) {
            ctx.body = {
                code: 0,
                message: '删除成功',
                result: ""
            }
        } else {
            ctx.body = {
                code: 0,
                message: '删除失败',
                result: ""
            }
        }

    }


    //测试是否能通过token获取到用户id自动查询
    async test(ctx, next) {
        ctx.body = "测试成功";
    }

}

module.exports = new PhotoController();