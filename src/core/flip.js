'use strict'

module.exports = function flip (fn) {
  return function (...args) {
    return fn.apply(this, args.reverse())
  }
}
