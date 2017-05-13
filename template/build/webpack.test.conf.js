// This is the webpack config used for unit tests.

var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var webpackConfig = merge(baseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option 
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    })
  ]
})

webpackConfig = merge(webpackConfig, {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: [resolve('src'), resolve('test')],
        options: {
          appendTsSuffixTo: [/\.vue$/],
          compilerOptions: {
            inlineSourceMap: true,
            sourceMap: false,
            noImplicitAny: false
          }
        }
      },
      // {
      //   test: /\.tsx?$/,
      //   enforce: "post",
      //   loader: 'istanbul-instrumenter-loader',
      //   exclude: [resolve('node_modules'), resolve('test')]
      // }
    ]
  }
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
