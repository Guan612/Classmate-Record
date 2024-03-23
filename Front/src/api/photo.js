import requrl from "./index"
//测试moke api
// import axios from 'axios';

// const requrl =  axios.create({
//     //基本url
//     baseURL: 'http://127.0.0.1:4523/m1/4124022-0-default/',
//     timeout: 2000,
// })

//获取照片api

export const getPhoto = () => {
    return requrl.get('/photo/')
}