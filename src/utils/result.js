exports.routerResponse = () => {
	return async (ctx, next) => {
		ctx.sendResult = (data, code, message) => {
			ctx.body = {
				data,
				meta: { code, message },
			}
		}
		await next()
	}
}
