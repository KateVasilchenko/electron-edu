
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

module.exports = function(path) {
  if (!path) return;
  const outputFolder = document.querySelector('.output-path__text');
  gulp.src(path)
    .pipe(sass())
    .pipe(autoprefixer({ browsers: 'last 10 versions' }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(outputFolder.innerHTML + '/test-css'));
};
