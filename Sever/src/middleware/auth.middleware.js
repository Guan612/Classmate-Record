const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config.default')

const {
    tokenExpiredError,
    invalidToken,
} = require('../constant/err.type');

const auth = async (ctx, next) => {
  const { authorization = ''} = ctx.request.header;
  const token = authorization.replace('Bearer ', '');

  await next();
}

module.exports = {
  auth,
}