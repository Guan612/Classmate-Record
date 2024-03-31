const Photo = require('../model/photo.model');
const User = require('../model/user.model');
const prisma = require('../db/prisma');
class PhotoService {

    //创建照片卡
    async createPhotoCard(photo_name, photo_describe, photo_url, user_id) {
        const res = await Photo.create({
            photo_name,
            photo_describe,
            photo_url,
            user_id
        });

        return res.dataValues;
    };

    //获取所有照片(已经更新为prisma)
    async getAllPhotoCard(pageNum, pageSize) {
        const offset = (pageNum - 1) * pageSize
        // const { count, rows } = await Photo.findAndCountAll({
        //     offset: offset,
        //     limit: pageSize * 1,
        // })
        // return {
        //     pageNum,
        //     pageSize,
        //     total: count,
        //     list: rows,
        // }
        const res = await prisma.classmeet_photos.findMany({
            skip: offset,
            take: pageSize*1,
            select:{
                id: true,
                photo_name: true,
                photo_describe: true,
                photo_url: true,
            }
        })
        return {
            pageNum,
            pageSize,
            total: res.length,
            list: res,
        }
    }

    //获取详情
    async getDetailCard(id) {
        const res = await Photo.findOne({
            where: { id: id },
            attributes: ['id', 'photo_name', 'photo_describe', 'photo_url'],
            include: {
                model: User,
                attributes: ['user_name'],
            }
        })
        // const res = await prisma.classmeet_photos.findUnique({
        //     where: { id: id },
        //     include: {
        //         classmeet_users: {
        //             select: {
        //                 user_name: true,
        //             }
        //         }
        //     }
        // })

        //手动整理res数据
        const result = {
            id: res.id,
            photo_name: res.photo_name,
            photo_describe: res.photo_describe,
            photo_url: res.photo_url,
            user_name: res.classmeet_user.user_name
        };

        return result;
    }

    //获取指定用户的照片(已更新为prisma)
    async getUserPhotoCard(user_id) {
        // const res = await Photo.findAll({
        //     where: { user_id: user_id }
        // });
        const res = await prisma.classmeet_photos.findMany({
            where: { user_id: user_id },
        })

        return res;
    }

    //删除指定照片卡(更新为prisma)
    async deletePhotoCard(deleteid) {
        // const res = await Photo.destroy({
        //     where: { id: deleteid }
        // });
        const res = await prisma.classmeet_photos.delete({
            where: { id: deleteid },
        })

        return res;
    }
}

module.exports = new PhotoService();