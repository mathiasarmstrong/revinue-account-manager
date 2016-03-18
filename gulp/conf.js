/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  docs: 'reports'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  directory: 'bower_components',
  ignorePath:'../',
  exclude: [
    // these are left as examples but are no longer needed
    // 'bower_components/bootstrap-sass/',
    // 'bower_components/font-awesome/'
  ],
  onFileUpdated: onFileUpdatedFn,
  onPathInjected: onPathInjectedFn
};

function onFileUpdatedFn(filePath){
  gutil.log(gutil.colors.yellow('updating' ), filePath);
}

function onPathInjectedFn(fileObject){
  gutil.log(gutil.colors.yellow(fileObject.block + ' updating - with'), fileObject.file + ' - ' + fileObject.path);
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

exports.sources = [
  {
    name:'main',
    uri:'lib',
    module:'revinue.account.management'
  },  {
    name:'example',
    uri:'example',
    module:'revinue.account.management.example'
  }
]
