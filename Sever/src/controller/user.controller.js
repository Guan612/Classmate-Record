

class UserController{

    //注册函数
    async register(ctx, next){
        ctx.body = 'register';
    }

    //登录函数
    async login(ctx, next){
        ctx.body = 'login';
    }
    
}

module.exports = new UserController();