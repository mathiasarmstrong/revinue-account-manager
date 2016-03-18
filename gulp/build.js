'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var git = require('gulp-git');
var $ = require('gulp-load-plugins')({ pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del'] });
var _ = require('lodash')

var events = require('events');
events.EventEmitter.defaultMaxListeners = 25;

gulp.task('html', ['inject'], function () {

  var jsFilter = $.filter('**/*.js', { restore: true });
  var cssFilter = $.filter('**/*.css', { restore: true });

  var replaceHtmlNames = function(files){
    var templatePaths = _.map($.filenames.get('templateUrls'), (name)=>{
      return {
        match:name,
        replacement:name + 'revinueaccountmanagement'
      }
    })
    files.pipe($.replace({patterns:templatePaths}));
    return files
  };

  var distFiles = gulp.src(path.join(conf.paths.tmp, '/index.html'))
    .pipe($.useref())
    .pipe(jsFilter)
    .pipe($.sourcemaps.init())
    .pipe($.sourcemaps.write('maps'))
    .pipe(jsFilter.restore)
    .pipe(cssFilter)
    .pipe($.sourcemaps.init())
    .pipe($.sourcemaps.write('maps'))
    .pipe(cssFilter.restore)

    replaceHtmlNames(distFiles)

    return distFiles.pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.size({ title: path.join(conf.paths.dist, '/'), showFiles: true }));
});



// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

gulp.task('other', function () {
  var fileFilter = $.filter(function (file) {
    return file.stat.isFile();
  });

  return gulp.src([
    path.join(conf.paths.src, '/**/*'),
    path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss,jade}')
  ])
    .pipe(fileFilter)
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('clean', function () {
  return $.del([
    path.join(conf.paths.docs, '/'),
    path.join(conf.paths.dist, '/'),
    path.join(conf.paths.tmp, '/')
  ]);
});

gulp.task('addCircleCi', function(){
  gulp.src('./circle.yml').pipe(gulp.dest(path.join(conf.paths.dist)))
})

gulp.task('add',['build'], function(){
  return gulp.src(conf.paths.dist)
  .pipe(git.add())
})


gulp.task('build', ['html', 'fonts', 'addCircleCi']);
