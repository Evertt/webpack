var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  var reporters = ['spec']

  if (config.withCoverage) {
    reporters.push('coverage')
  }

  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    files: [
      {{#vuex}}
      '../../node_modules/es6-promise/dist/es6-promise.auto.js',
      {{/vuex}}
      'specs/**/*.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'specs/**/*.ts': ['webpack']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    reporters: reporters,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity,
    coverageReporter: {
      dir: './coverage',
      reporters: [
        {
          type: 'lcov',
          subdir: '.'
        },
        {
          type: 'cobertura',
          subdir: '.',
          file: 'cobertura.txt'
        },
        {
          type: 'text-summary'
        }
      ]
    }
  })
}
