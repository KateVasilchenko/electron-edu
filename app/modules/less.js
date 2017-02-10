const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const resolve = require('path').resolve;

module.exports = function(path) {
  if (!path) return;
  //const outputFolder = document.querySelector('.output-path__text');
  const outputSplittedPath = path.split('/')
  const outputFolder =  outputSplittedPath.slice(0,outputSplittedPath.length-2).join('/')
  gulp.src(path)
    .pipe(less())
    .pipe(autoprefixer({ browsers: 'last 10 versions' }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(resolve(outputFolder,'css')));
};
