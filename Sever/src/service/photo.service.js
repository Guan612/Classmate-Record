const Photo = require('../model/photo.model');
class PhotoService {

    //创建
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
        const { count, rows } = await Cart.findAndCountAll({
            attributes: ['id', 'number', 'selected'],
            offset: offset,
            limit: pageSize * 1,
            include: {
                model: Photo,
                as: 'photo_name',
                attributes: ['id', 'goods_name', 'goods_price', 'goods_img'],
            },
        })
        return {
            pageNum,
            pageSize,
            total: count,
            list: rows,
        }
    }
}

module.exports = new PhotoService();