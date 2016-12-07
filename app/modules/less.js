const gulp = require('gulp');
const less = require('gulp-less');

module.exports = function(path) {
  if (!path) return;
  gulp.src(path + '/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
};
