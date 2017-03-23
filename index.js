'use strict'

const memoize = require('./src/core/memoize')
const transformArgs = require('./src/core/transformArgs')
const curry = require('./src/core/curry')
const dispatch = require('./src/core/dispatch')
const flip = require('./src/core/flip')
const rightCurry = require('./src/core/rightCurry')
const compose = require('./src/core/compose')

module.exports = {
  memoize,
  transformArgs,
  curry,
  dispatch,
  flip,
  rightCurry,
  compose
}
