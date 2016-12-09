let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let cssnano = require('gulp-cssnano');
let config = require('./config').client;

module.exports = function (singleRun) {
  return function () {
    let gulpStream = gulp.src('client/boot.css').pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }));
    if (singleRun) {
      gulpStream = gulpStream.pipe(cssnano());
    }
    return gulpStream.pipe(gulp.dest(config.destination));
  };
};
