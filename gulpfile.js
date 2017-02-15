const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const electron = require('electron-connect').server.create();

gulp.task('sass', function () {
  return gulp.src('./app/assets/sass/index.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('serve', function () {

  // Start browser process
  // electron.start();

  // Restart browser process
  // gulp.watch('main.js', electron.restart);
  gulp.watch('./app/assets/sass/**/*.scss', ['sass']).on('change', electron.reload);
  // gulp.watch('./app/assets/sass/**/*.scss', electron.restart);

  // Reload renderer process
  // gulp.watch(['index.js', 'index.html'], electron.reload);
});

gulp.task('default', ['serve']);