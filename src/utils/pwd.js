const pwd = require('crypto')

exports.getMd5 = (password) => {
	return pwd.createHash('md5').update(password).digest('hex')
}
