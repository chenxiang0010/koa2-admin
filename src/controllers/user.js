const { regUser } = require('../services/user')
const { getMd5 } = require('../utils/pwd')

class UserController {
	async register(ctx) {
		const userInfo = ctx.request.body
		const user = await regUser({
			username: userInfo.username,
			password: getMd5(userInfo.password),
			nickName: userInfo.nickName,
			email: userInfo.email,
			phone: userInfo.phone || null,
			status: true,
			avatar: userInfo.avatar,
		})

		if (user) {
			ctx.sendResult({ id: user.id, username: user.username }, 200, '注册成功')
		}
	}
}

module.exports = new UserController()
