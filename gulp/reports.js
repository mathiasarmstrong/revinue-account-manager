var gulp = require('gulp');
var ngGraph = require('gulp-angular-architecture-graph');
var gulpDocs = require('gulp-ngdocs');
var conf = require('./conf');

var sourceJS = [conf.paths.src + '/**/*.js', conf.paths.src + '/*.js'];

gulp.task('dep-graph', function(){
  gulp.src(sourceJS)
    .pipe(ngGraph({
        dest: conf.paths.docs + '/architecture'
    }));
});

gulp.task('ngdocs', [], function () {
  var options = {
    html5Mode: true
  }
  return gulp.src(sourceJS)
    .pipe(gulpDocs.process(options))
    .pipe(gulp.dest(conf.paths.docs + '/ngDocs'));
});


gulp.task('reports', ['clean', 'dep-graph', 'ngdocs', 'test']);
