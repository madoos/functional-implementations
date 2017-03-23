'use strict'

module.exports = function memoize (func) {
  var memo = {}

  return function (...args) {
    return (args in memo) ? memo[args] : (memo[args] = func.apply(this, args))
  }
}
