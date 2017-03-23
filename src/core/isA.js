'use strict'

module.exports = function isA (type, action) {
  return function (obj) {
    if (type === obj.type) {
      return action(obj)
    }
  }
}
