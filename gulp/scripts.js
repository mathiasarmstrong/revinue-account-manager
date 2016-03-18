'use strict';

var path = require('path');
var $ = require('gulp-load-plugins')();
var _ = require('lodash');
var gulp = require('gulp');
var conf = require('./conf');
var browserSync = require('browser-sync');
var webpack = require('webpack-stream');
var webpackConfigs = require('../webpack.conf')
var webpackOptions = webpackConfigs.build;

webpackOptions.entry = _.zipObject(_.map(conf.sources, (val)=>val.name),
  _.map(conf.sources, function(source){
    return './src/'+source.uri+'/'+source.name+'.module.js'
  })
);

function webpackWrapper(watch, callback) {
  if(watch) { webpackOptions.devtool = 'inline-source-map'; }
  webpackOptions.watch = watch;
  var webpackChangeHandler = function(err, stats) {
    if(err) { conf.errorHandler('Webpack')(err); }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) { watch = false; callback(); }
  };

  return gulp.src([path.join(conf.paths.src, '/**/*.js')])
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(conf.paths.tmp));
}

gulp.task('scripts', function () {
  return webpackWrapper(false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, callback);
});
