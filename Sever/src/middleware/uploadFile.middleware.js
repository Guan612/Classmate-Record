const multer = require('@koa/multer');
const path = require('path');

// 配置 Multer 中间件
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // 上传的文件将保存在 uploads/ 目录中
  },
  filename: function (req, file, cb) {
    // 将文件名设置为原始名加上时间戳以确保唯一性
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// 自定义文件上传中间件
const fileUpload = (fieldName) => {
  return async (ctx, next) => {
    try {
      // 使用 Multer 中间件处理文件上传
      await upload.single(fieldName)(ctx, next);
    } catch (err) {
      ctx.status = 500;
      ctx.body = 'Error uploading file: ' + err.message;
    }
  };
};

module.exports = fileUpload;