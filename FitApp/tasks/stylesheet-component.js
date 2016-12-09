let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');

module.exports = function (singleRun) {
  return function () {
    let gulpStream = gulp.src('./client/app/**/*.scss', { base: './' }).pipe(sass());

    if (singleRun) {
      gulpStream = gulpStream.pipe(cssnano());
    }

    return gulpStream.pipe(gulp.dest('.'));
  };
};
