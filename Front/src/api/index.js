import axios from 'axios';
import qs from 'qs';

const requrl =  axios.create({
    //基本url
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 2000,
})

export default requrl;


