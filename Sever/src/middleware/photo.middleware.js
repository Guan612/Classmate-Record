const { createPhotoCardError } = require('../constant/err.type')

const validator = (rules) => {
  return async (ctx, next) => {
    try {
      ctx.verifyParams(rules)
    } catch (err) {
      console.error(err)
      createPhotoCardError.result = err
      return ctx.app.emit('error', createPhotoCardError, ctx)
    }

    await next()
  }
}

module.exports = {
  validator,
}