const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const electron = require('electron-connect').server.create();

// gulp.task('serve', ['sass'], function() {

//   browserSync.init({
//     server: {
//       baseDir: "."
//     }
//   });

//     gulp.watch('./app/assets/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
// });

gulp.task('sass', function () {
  return gulp.src('./app/assets/sass/index.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('watch', function () {
  gulp.watch('./app/assets/sass/index.scss', ['sass']);
});

gulp.task('default', ['serve']);


gulp.task('serve', function () {

  // Start browser process
  electron.start();

  // Restart browser process
  gulp.watch('main.js', electron.restart);
  gulp.watch(['./app/assets/sass/**/*.scss','index.html'], ['sass']).on('change', electron.reload);

  // Reload renderer process
  // gulp.watch(['index.js', 'index.html'], electron.reload);
});