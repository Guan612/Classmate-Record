const { DataTypes } = require('sequelize')

const seq = require('../db/seq')

const Photo = seq.define('classmeet_photo', {
    photo_name:{
        type: DataTypes.STRING,
        allowNull: false,
        comment:'照片名字'
    },
    photo_shootime:{
        type: DataTypes.DATE,
        allowNull:true,
        comment:'照片拍摄时间'
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
        comment:'照片上传者id'
    },
    photo_describe:{
        type: DataTypes.TEXT,
        allowNull:true,
        comment:'照片故事'
    },
    photo_url:{
        type: DataTypes.STRING,
        allowNull: false,
        comment:'照片链接'
    }

},{paranoid: true});

//Photo.sync({ force: true })

module.exports = Photo;