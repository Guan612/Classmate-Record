const Photo = require('../model/photo.model');
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

    //获取所有照片
    async getAllPhotoCard(pageNum, pageSize) {
        const offset = (pageNum - 1) * pageSize
        const { count, rows } = await Photo.findAndCountAll({
            attributes: ['id', 'number', 'selected'],
            offset: offset,
            limit: pageSize * 1,
            include: {
                model: Photo,
                as: 'photo_name',
                attributes: ['photo_name', 'photo_describe', 'photo_url'],
            },
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows,
        }
    }

    //获取指定用户的照片
    async getUserPhotoCard(user_id) {
        const res = await Photo.findAll({
            where:{user_id:user_id}
        });

        return res;
    }

    //删除指定照片卡
    async deletePhotoCard(deleteid) {
        const res = await Photo.destroy({
            where: {id:deleteid}
        });

        return res;
    }
}

module.exports = new PhotoService();