import axios from 'axios';
import qs from 'qs';

const requrl = axios.create({
    //基本url
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 2000,
})

//注册api
export const register = async (user_name, password) => {
    try {
        const res = await requrl.post('/users/register', {
            "user_name": user_name,
            "password": password
        });
        return(res.data.result);
    } catch (error) {
        console.error(error);
    }
}

//登录api
export const login = async (user_name, password) => {
    try {
        const res = await requrl.post('/users/login', {
            "user_name": user_name,
            "password": password
        });

        return(res.data.result);
    } catch (error) {
        console.error(error);
    }
}

//获取照片api
export const getPhoto = () => {
    return requrl.get('/photos/')
}