class PhotoController{

    async show(ctx, next){
        ctx.body = 'show';
    }

    //照片上传api
    async upload(ctx){
        ctx.body = 'upload sucess';
    }
}

module.exports = new PhotoController();