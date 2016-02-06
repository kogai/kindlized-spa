const gulp = require('gulp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const connect = require('gulp-connect');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const config = require('tasks/config');
const srcPath = config.srcPath;
const destPath = config.destPath;

function handleErrors() {
  const args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error %>',
  }).apply(this, args);
  this.emit('end');
}

function javascript() {
  const b = browserify({
    entries: srcPath.app,
    extensions: ['.js'],
  });

  return b
    .transform('babelify')
    .bundle()
    .on('error', handleErrors)
    .pipe(plumber())
    .pipe(source('bundle.min.js'))
    .pipe(gulp.dest(destPath.app))
    .pipe(connect.reload());
}

module.exports = javascript;
