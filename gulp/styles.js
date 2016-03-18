'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();
var sassOptions = { style: 'expanded' };
var _ = require('lodash');
var wiredep = require('wiredep').stream;

function style(src){
  return gulp.src([path.join(conf.paths.src, src.uri, '/'+src.name+'.scss')])
    .pipe($.inject(injectFiles(src), injectOptions(src)))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, src.name)))
    .pipe(browserSync.reload({ stream: true }));
}

function injectFiles(src){
  return gulp.src([
      path.join(conf.paths.src, src.uri, '/**/*.scss'),
      path.join('!', conf.paths.src,'**/'+src.name+'.scss')
    ])
}

function injectOptions(src){
  return  {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/'+src.uri+'/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };
}


gulp.task('styles', function () {
  return _.map(conf.sources, style);
});

