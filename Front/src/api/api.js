import axios from 'axios';
import qs from 'qs';

const requrl = axios.create({
    //基本url
    baseURL:'http://127.0.0.1:8000/',
    timeout:2000,
})
//注册api
export const register = (user_name,password) =>{
    
}

//获取照片api
export const getPhoto = () =>{
    return requrl.get('/photos/show')
}