'use strict'

module.exports = function curry (fn, n) {
  const arity = n || fn.length
  return function curried (...args) {
    const context = this

    return args.length >= arity ? fn.apply(context, args.slice(0, arity)) : function (...rest) {
      return curried.apply(this, args.concat(rest))
    }
  }
}
