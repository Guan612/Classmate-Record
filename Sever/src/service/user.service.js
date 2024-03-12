const User = require('../model/user.model')
class UserService {
    async createUser(user_name, password) {
        // 插入数据
        // await表达式: promise对象的值
        const res = await User.create({ user_name, password })
        // console.log(res)
        return res.dataValues
    };

    async getUerInfo(id, user_name, password, is_admin) {
        const whereOpt = {}
        id && (whereOpt.id = id);
        user_name && (whereOpt.user_name = user_name);
        password && (whereOpt.password = password);
        is_admin && (whereOpt.is_admin = is_admin);

        const res = await User.findOne({
            attributes: ['id', 'user_name', 'password', 'is_admin'],
            where: whereOpt
        })

        return res ? res.dataValues : null
    };
}

module.exports = new UserService;