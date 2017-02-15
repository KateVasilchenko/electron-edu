const gulp = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const resolve = require('path').resolve;

const fs =  require('fs');

const defaultPath = require('../../config.json').projectPath
const defaultOutputPath = require('../../config.json').outputPath
console.log(defaultPath);
console.log(defaultOutputPath);

module.exports = function(path) {
  if (!path) return;
  const outputSplittedPath = path.split('/')
  const outputFolder =  outputSplittedPath.slice(0,outputSplittedPath.length-1).join('/')
  var outputFolder2 = document.querySelector('.output-path__text').innerHTML;
  if (outputFolder2 == "Choose folder...") {
    outputFolder2 = outputFolder+'/css';
  } else {
    
  }

  const x = {
    projectPath: path,
    outputPath: outputFolder
  }

  const y = JSON.stringify(x);
  console.log(resolve(outputFolder,"config.json"))
  fs.writeFile(resolve(outputFolder,"config.json"),y,(err,res)=>console.log(res));


  console.log(outputFolder2)
  gulp.src(path+'/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({ browsers: 'last 10 versions' }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(resolve(outputFolder2)));
};