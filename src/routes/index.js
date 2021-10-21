const fs = require('fs')

const useRoutes = function () {
	fs.readdirSync(__dirname).forEach((file) => {
		if (file === 'index.js') return
		const router = require(`./${file}`)
		router.use(router.routes(), router.allowedMethods())
	})
}

module.exports = useRoutes
