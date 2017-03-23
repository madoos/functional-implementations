'use strict'

module.exports = function transformArgs (fn, ...transforms) {
  const _transform = function (args) {
    return args.map((arg, i) => {
      return transforms[i](arg)
    })
  }
  return function (...args) {
    const targs = args.slice(0, transforms.length)
    const remaining = args.slice(transforms.length)
    return fn.apply(this, _transform(targs).concat(remaining))
  }
}
