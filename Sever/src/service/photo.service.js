const Photo = require('../model/photo.model');
class PhotoService{

    //创建
    async createPhotoCard(photo_name,photo_describe,photo_url,user_id){
        const res = await Photo.create({
            photo_name,
            photo_describe,
            photo_url,
            user_id
        });

        return res.dataValues;
    };

    //获取所有照片
    async getPhotoCard(pageNum,pageSize){
           
    }
}

module.exports = new PhotoService();