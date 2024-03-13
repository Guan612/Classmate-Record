const bcry = require('bcryptjs');

const { userFormateError,userAlreadyExited,userRegisterError } = require("../constant/err.type");
const {getUerInfo} = require("../service/user.service");

const userValidator = async (ctx, next) => {
    try {
        ctx.verifyParams({
            user_name: { type: 'string', required: true },
            password: { type: 'string', required: true },
        });
    } catch (err) {
        console.error(err);
        return ctx.app.emit('error', userFormateError, ctx);
    }

    await next();
};

const verifyUser = async (ctx, next) => {
    const { user_name } = ctx.request.body;
  
    try {
      const res = await getUerInfo({ user_name });
  
      if (res) {
          console.error('用户名已经存在', { user_name });
          ctx.app.emit('error', userAlreadyExited, ctx);
          return
      }
    } catch (err) {
        console.error('获取用户信息错误', err);
        ctx.app.emit('error', userRegisterError, ctx);
        return;
    }
  
    await next()
};

const crpytPassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    const salt = bcry.genSaltSync(10);
    // hash保存的是 密文
    const hash = bcry.hashSync(password, salt);
    ctx.request.body.password = hash;
    await next();
}

module.exports = { userValidator,verifyUser,crpytPassword };