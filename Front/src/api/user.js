import requrl from './index'

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
export const login = async (userInfo) => {
    try {
        userInfo;
        const res = await requrl.post('/users/login', userInfo);
        return(res.data);
    } catch (error) {
        console.error(error);
    }
}