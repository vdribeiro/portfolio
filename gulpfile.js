var gulp = require('gulp')
var $ = require('gulp-load-plugins')({
  pattern: ["gulp-*", "rimraf", "karma"]
})
var plumber = require("gulp-plumber")
var empty = require("gulp-empty")

var paths = {
  js   : './src/**/*.js',
  jade : './src/**/*.jade',
  less : './src/**/*.less'
}

// CLEAN
gulp.task('clean', function() {
  $.rimraf.sync('./tmp')
  $.rimraf.sync('./dist')
})

// START
gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe($.webserver({
      host: '0.0.0.0',
      port: 3003,
      livereload: true,
    }))
})

gulp.task('watch', ['webserver'], function() {
  gulp.watch(paths.js,   ['concat', 'adapt-websockets-url'])
  gulp.watch(paths.jade, ['concat', 'adapt-websockets-url'])
  gulp.watch(paths.less, ['styles'])
  return gulp.src(['./dist/index.js'])
    // .pipe($.replace('<WS_SERVER>', process.env.WS_SERVER))
    .pipe(gulp.dest('./dist'))
})

gulp.task('start', ['webserver', 'watch'])

// BUILD
gulp.task('jade', function() {
  return gulp.src(paths.jade)
    .pipe(plumber())
    .pipe($.jade({
      pretty: true,
      locals: process.env,
      basedir: './src/templates'
    }))
    .pipe(gulp.dest('./tmp'))
})

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(plumber())
    .pipe($.less())
    .pipe(gulp.dest('./tmp'))
})

gulp.task('templates', ['jade'], function() {
  return gulp.src(['./tmp/templates/**/*.html', '!./tmp/templates/includes/**'])
    .pipe($.angularTemplatecache({ standalone: true }))
    .pipe(gulp.dest('./tmp')) // outputs templates.js
})

gulp.task('styles', ['less'], function() {
  return gulp.src('./tmp/**/*.css')
    .pipe($.concat('index.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('assets', function() {
  return gulp.src(['./src/assets/**', './src/assets/**/*'])
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('concat', ['templates'], function() {

  var assets = $.useref.assets({
    searchPath : [
      './bower_components',
      './tmp',
      './src'
    ]
  })

  return gulp.src('./tmp/index.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('./dist'))
})

gulp.task('build', ['jade', 'less', 'templates', 'styles', 'assets', 'concat'])

// POST PROCESS
gulp.task('prepend-static-url', ['concat', 'styles'], function() {

  return gulp.src(['./dist/index.html', './dist/index.js'])
    // .pipe($.replace('index.css', process.env.WEBCLIENT_URL + '/index.css'))
    // .pipe($.replace('index.js',  process.env.WEBCLIENT_URL + '/index.js'))
    .pipe($.replace('<GULP_BUILD_DATE>',  Date().toString()))
    .pipe(gulp.dest('./dist'))
})

gulp.task('adapt-websockets-url', ['prepend-static-url'], function() {
  return gulp.src(['./dist/index.js'])
    // .pipe($.replace('<WS_SERVER>', process.env.WS_SERVER))
    .pipe(gulp.dest('./dist'))
})

gulp.task('post-process', ['prepend-static-url', 'adapt-websockets-url'])

// MINIFY
gulp.task('minify', ['minify-html', 'minify-css', 'minify-js'])

gulp.task('minify-html', ['build'], function() {
  return gulp.src('./dist/**/*.html')
    .pipe($.htmlmin())
    .pipe(gulp.dest('./dist'))
})

gulp.task('minify-css', ['build'], function() {
  return gulp.src('./dist/**/*.css')
    .pipe($.csso())
    .pipe(gulp.dest('./dist'))
})

gulp.task('minify-js', ['build'], function() {
  return gulp.src('./dist/**/*.js')
    .pipe($.uglify().on('error', function(e) {
        console.log('Uglify', e)
     }))
    .pipe(gulp.dest('./dist'))
})

// TEST
gulp.task('test', ['lint', 'unit', 'tdd'])

gulp.task('lint', [], function() {
  gulp.watch(paths.js, ['jshint'])
})

gulp.task('jshint', function() {
  return gulp.src('./src/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'))
})

gulp.task('unit', function(done) {
  new $.karma.Server({
    configFile: __dirname + '/test/karma.conf.js',
    singleRun: true
  }, done).start()
})

gulp.task('tdd', function(done) {
  new $.karma.Server({
    configFile: __dirname + '/test/karma.conf.js'
  }, done).start()
})

// DEFAULT
gulp.task('default', ['start', 'build', 'post-process'])
