const router = require('koa-router')()
const { register } = require('../controllers/user')

router.prefix('/users')

router.post(
	'/register',
	(ctx) => {
		console.log('aaa')
	},
	register
)

module.exports = router
