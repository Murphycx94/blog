const path = require('path')
const merge = require('webpack-merge')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const baseConfig = require('../webpack.base')

process.env.BABEL_ENV = process.env.NODE_ENV = 'production'

const resolve = _path => path.join(__dirname, '../../', _path)

module.exports = merge(baseConfig, {
  mode: process.env.NODE_ENV,
  entry: {
    app: resolve('src/entry/client.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '/dist/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.template.html',
      template: resolve('public/index.template.html'),
      templateParameters: {
        PATH: '/dist/'
      }
    }),
    new CopyPlugin([
      {
        from: resolve('public'),
        to: resolve('dist')
      }
    ])
  ]
})
