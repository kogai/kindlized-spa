const gulp = require('gulp');
const connect = require('gulp-connect');
// const merge = require('merge-stream');

const config = require('tasks/config');
const srcPath = config.srcPath;
const destPath = config.destPath;

// const fontPath = 'node_modules/font-awesome/fonts/*';

module.exports = function copy() {
  // const font$ = gulp.src(fontPath).pipe(gulp.dest(destPath.font));
  // const html$ = gulp.src(`${srcPath.dir.app}/*.html`).pipe(gulp.dest(destPath.root));
  // return merge(font$, html$)
  //   .pipe(connect.reload());
  const html$ = gulp.src(`${srcPath.dir.app}/*.html`).pipe(gulp.dest(destPath.root));
  return html$.pipe(connect.reload());
};
