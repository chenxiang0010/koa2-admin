const fs = require('fs')

exports.useRoutes = (app) => {
	fs.readdirSync(__dirname).forEach((file) => {
		if (file === 'index.js') return
		const router = require(`./${file}`)
		app.use(router.routes(), router.allowedMethods())
	})
}
