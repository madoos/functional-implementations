'use strict'

const flip = require('./flip')
const curry = require('./curry')


module.exports = function rightCurry (fn, n) {
  return curry(flip(fn), n)
}
