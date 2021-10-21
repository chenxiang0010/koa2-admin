const { User } = require('../models/user')

class UserService {
	async regUser(user) {
		return await User.create(user)
	}
}

module.exports = new UserService()
