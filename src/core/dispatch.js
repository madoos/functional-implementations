'use strict'

const Existy = require('./existy')

module.exports = function dispatch (...functions) {
  return function (...args) {
    let ret
    for (const fun of functions) {
      ret = fun.apply(this, args)
      if (Existy(ret)) {
        return ret
      };
    }
    return ret
  }
}
