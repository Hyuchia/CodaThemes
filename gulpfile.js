'use strict';

var gulp = require('gulp');
var header = require('gulp-header');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');

var banner = ['/**',
  ' * ==============================',
  ' * Prism Coda Theme ',
  ' * <%= pkg.version %> | <%= pkg.license %> License',
  ' * ==============================',
  ' */',
  '',
  ''].join('\n');

var minBanner = '/* Prism Coda Theme <%= pkg.version %> | <%= pkg.license %> License */\n'

gulp.task('default', function() {
  return gulp.src('src/prism-coda.css')
    .pipe(header(banner, { pkg : pkg }))
    .pipe(gulp.dest('dist/'))
    .pipe(cssnano())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(header(minBanner, { pkg : pkg }))
    .pipe(gulp.dest('dist/'));
});