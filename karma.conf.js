const webpackConfig = require('./webpack.config')

module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: ['src/tests/*.test.js', 'src/tests/client/**/*.test.js'],

    preprocessors: {
      'src/**/*.test.js': ['webpack', 'sourcemap'],
    },

    webpack: Object.assign(webpackConfig, {
      devtool: 'inline-source-map',
    }),
    webpackServer: {
      noInfo: true,
    },

    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
      },
    },

    reporters: ['progress', 'mocha'],

    port: 9876,

    colors: true,

    /**
     * level of logging
     * possible values:
     *
     * config.LOG_DISABLE ||
     * config.LOG_ERROR ||
     * config.LOG_WARN ||
     * config.LOG_INFO ||
     * config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [process.env.TRAVIS ? 'Chrome_travis_ci' : 'Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  })
}
