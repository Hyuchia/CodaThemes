'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
  return gulp.src('prism-coda.css')
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/'));
});
