const Router = require('koa-router');
const userRouter = require('./user.router');
const photoRouter = require('./photo.router');

const router = new Router();

router.use('/users', userRouter.routes()).use('/photo', photoRouter.routes());

module.exports = router;