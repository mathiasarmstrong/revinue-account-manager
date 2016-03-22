'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['build','scripts:watch', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/**/*.html'), path.join(conf.paths.src, '/**/*.jade'), 'bower.json'], ['inject']);

  gulp.watch([
    path.join(conf.paths.src, '/**/*.css'),
    path.join(conf.paths.src, '/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles');
    } else {
      gulp.start('inject');
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/**/*.html')
  ], function(event) {
    browserSync.reload(event.path);
  });
});
