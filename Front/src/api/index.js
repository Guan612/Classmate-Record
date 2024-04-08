import axios from 'axios';
import {useUserStore} from '@/stores/userStore'



const requrl =  axios.create({
    //基本url
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 2000,
})

//请求拦截器
requrl.interceptors.request.use(function (config) {
    const userStore = useUserStore()
    const token = userStore.userToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},e=>Promise.reject(e))

export default requrl;


