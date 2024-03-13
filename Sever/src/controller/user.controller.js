const {createUser} = require('../service/user.service');
const {userRegisterError} = require("../constant/err.type");


class UserController{
    //注册函数
    async register(ctx, next){
        let {user_name, password} = ctx.request.body;
        try {
            const res = await createUser(user_name, password)
            // console.log(res)
            // 3. 返回结果
            ctx.body = {
              code: 0,
              message: '用户注册成功',
              result: {
                id: res.id,
                user_name: res.user_name,
              },
            }
        } catch (err) {
            console.log(err);
            ctx.app.emit('error', userRegisterError, ctx);
        }
    }

    //登录函数
    async login(ctx, next){
        ctx.body = 'login';
    };



    //测试函数
    async test(ctx, next){
        ctx.body = 'test';
    }
    
}

module.exports = new UserController();