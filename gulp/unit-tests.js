'use strict';

var path = require('path');
var gulp = require('gulp');
var karma = require('karma');

function runTests (singleRun, done) {
  var reporters = ['progress'];

  if (singleRun) { reporters.push('coverage', 'mocha', 'progress') }

  var localConfig = {
    configFile: path.join(__dirname, '/../karma.conf.js'),
    singleRun: singleRun,
    autoWatch: !singleRun,
    reporters: reporters
  };

  var server = new karma.Server(localConfig, function(failCount) {
    done(failCount ? new Error("Failed " + failCount + " tests.") : null);
  })
  server.start();
}

gulp.task('test', function(done) {
  runTests(true, done);
});

gulp.task('test:auto', function(done) {
  runTests(false, done);
});
