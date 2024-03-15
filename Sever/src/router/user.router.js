const Router = require('koa-router');

const userRouter = new Router();

const {userValidator,verifyUser,crpytPassword,verifyLogin} = require('../middleware/user.middleware');
const {login, register, test} = require('../controller/user.controller');

userRouter.get('/', (ctx) => {
    ctx.body = 'usersModle';
})

userRouter.post('/register', userValidator, verifyUser, crpytPassword, register);

userRouter.post('/login', userValidator, verifyLogin, login);

module.exports = userRouter;