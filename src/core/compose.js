'use strict'

module.exports = function compose (...fns) {
  return function (result) {
    for (let i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result)
    }
    return result
  }
}
