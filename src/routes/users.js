const router = require('koa-router')()
const { register } = require('../controllers/user')

router.prefix('/users')

router.post(
  '/register',
  register
)

module.exports = router
