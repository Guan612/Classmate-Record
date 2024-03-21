const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config/config.default');

const tokeninfo = async (ctx,next) =>{
    const { authorization = '' } = ctx.request.header;
    const token = authorization.replace('Bearer ', '');
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
    //console.log(user);
    return user
}


module.exports = {
    tokeninfo
}
