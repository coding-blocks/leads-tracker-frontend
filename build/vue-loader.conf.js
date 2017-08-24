var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

var styleLoader = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
})

var scriptLoader = {
  ts: 'ts-loader!tslint-loader',
  js: 'babel-loader!eslint-loader'
}

module.exports = {
  loaders: Object.assign({}, styleLoader, scriptLoader),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  esModule: true
}
