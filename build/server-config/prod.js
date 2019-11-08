const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('../webpack.base')

process.env.BABEL_ENV = process.env.NODE_ENV = 'production'

const resolve = _path => path.join(__dirname, '../../', _path)

module.exports = merge(baseConfig, {
  mode: process.env.NODE_ENV,
  entry: resolve('src/entry/server.js'),
  output: {
    path: resolve('dist'),
    filename: 'entry-server.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  target: 'node',
  plugins: []
})
