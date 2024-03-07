const Router = require('koa-router');
const userRouter = new Router();

userRouter.get('/', (ctx) => {
    ctx.body = 'usersModle';
})

userRouter.get('/login', (ctx)=>{
    ctx.body = 'login';
})

module.exports = userRouter;