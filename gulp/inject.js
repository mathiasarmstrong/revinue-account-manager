'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var $ = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;
var _ = require('lodash');

function convertJade(src){
  var jadeFilter = $.filter(['**/*.jade'], {restore: true})
  return src.pipe(jadeFilter)
  .pipe($.jade())
  .pipe(jadeFilter.restore);
}

function injectFiles(source){
  var files = gulp.src([ path.join(conf.paths.tmp, source.name, '/**/*{.js,.css}')])
  var options = { addRootSlash: false, addPrefix: source.name };
  options.ignorePath = [conf.paths.src, path.join(conf.paths.tmp, source.name)]
  options.starttag = '<!-- inject:'+source.name+':{{ext}} -->',
  options.endtag = '<!-- end:'+source.name+':{{ext}} -->'
  return $.inject(files, options)
}

function createTemplateCache(src){
  var tempCache = gulp.src([
    path.join(conf.paths.src, src.uri,'**/*.html'),
    path.join(conf.paths.src, src.uri,'**/*.jade'),
    path.join('!'+conf.paths.src, src.uri,'/index.html'),
    path.join('!'+conf.paths.src, src.uri,'/index.jade')
  ])

  tempCache = convertJade(tempCache)

  tempCache.pipe($.filenames("templateUrls"))

  return tempCache.pipe($.angularTemplatecache('templateCacheHtml.js', {
    module: src.module,
    root: src.uri
  }))
  .pipe(gulp.dest(path.join(conf.paths.tmp, src.name)))
}

gulp.task('partials', function () {
  return _.map(conf.sources, createTemplateCache )
});

gulp.task('inject', ['scripts', 'styles', 'partials'], function () {

  var builtHtml = gulp.src([
    path.join(conf.paths.src, '/example/index.html'),
    path.join(conf.paths.src, '/example/index.jade'),
    path.join(conf.paths.src, '/lib/index.html'),
    path.join(conf.paths.src, '/lib/index.jade')
  ]);

  builtHtml = convertJade(builtHtml)

  _.each(conf.sources, function(source){
    builtHtml = builtHtml.pipe(injectFiles(source))
  })
  return builtHtml.pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/')));
});

