const User = require('../model/user.model')
const prisma = require('../db/prisma');
class UserService {
    async createUser(user_name, password) {
        // 插入数据
        // await表达式: promise对象的值
        const res = await prisma.classmeet_users.create({
            data: {
                user_name: user_name,
                password: password,
            }
        })
        // console.log(res)
        return res
    };
    async getUerInfo({ id, user_name, password, is_admin }) {
        const whereOpt = {}
    
        id && Object.assign(whereOpt, { id })
        user_name && Object.assign(whereOpt, { user_name })
        password && Object.assign(whereOpt, { password })
        is_admin && Object.assign(whereOpt, { is_admin })
    
        const res = await User.findOne({
          attributes: ['id', 'user_name', 'password', 'is_admin'],
          where: whereOpt,
        })
    
        return res ? res.dataValues : null
    };
    
}

module.exports = new UserService;