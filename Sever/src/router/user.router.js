const Router = require('koa-router');

const userRouter = new Router();

const {userValidator,verifyUser} = require('../middleware/user.middleware');
const {
    login,
    register
} = require('../controller/user.controller');

userRouter.get('/', (ctx) => {
    ctx.body = 'usersModle';
})

userRouter.post('/register', userValidator, verifyUser, register);

userRouter.post('/login', login)

module.exports = userRouter;