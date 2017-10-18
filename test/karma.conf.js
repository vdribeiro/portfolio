module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      // jQuery
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js',

      // lodash
      'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js',

      // Angular
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.1/angular-mocks.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-animate.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-aria.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-messages.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-sanitize.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-route.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-touch.min.js',

      // Angular Material
      'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc.5/angular-material.min.js',

      // Angular UI Grid
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-grid/3.2.6/ui-grid.min.js',

      // Angular Data Table
      'https://cdnjs.cloudflare.com/ajax/libs/angular-material-data-table/0.10.9/md-data-table.min.js',

      // Local Storage
      'https://cdnjs.cloudflare.com/ajax/libs/angular-local-storage/0.2.7/angular-local-storage.min.js',

      // Socket IO
      'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.8/socket.io.min.js',

      // Keypress
      'https://cdnjs.cloudflare.com/ajax/libs/keypress/2.1.4/keypress.min.js',

      // Clipboard
      'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.12/clipboard.min.js',

      // Papa Parse
      'https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.1.2/papaparse.min.js',

      // YAML parser
      'https://cdnjs.cloudflare.com/ajax/libs/js-yaml/3.6.1/js-yaml.min.js',

      // File uploader
      'https://cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/12.0.4/ng-file-upload.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/danialfarid-angular-file-upload/12.0.4/ng-file-upload-shim.min.js',

      // UI Mask
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-mask/1.8.7/mask.min.js',

      // JSON schema Validator
      'https://cdnjs.cloudflare.com/ajax/libs/ajv/4.0.5/ajv.min.js',

      // Chai
      'https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.min.js',

      // Bower
      'bower_components/angular-socket-io/socket.min.js',
      'bower_components/angular-socket.io-mock.js',
      'src/index.js',
      'tmp/templates.js',
      'src/**/*.js',
      'test/unit/**/*.js',
      process.env.MOCKS_URL
    ],

    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'spec', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    coverageReporter: {
      // specify a common output directory
      dir: 'coverage',
      reporters: [
        { type: 'lcov', subdir: '.' }
      ]
    }

  })
}
