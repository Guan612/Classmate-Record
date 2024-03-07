const Router = require('koa-router');
const userRouter = new Router();
const {
    login,
    register
} = require('../controller/user.controller');

userRouter.get('/', (ctx) => {
    ctx.body = 'usersModle';
})

userRouter.post('/register', register)

userRouter.post('/login', login)

module.exports = userRouter;