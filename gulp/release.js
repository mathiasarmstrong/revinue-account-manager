var gulp = require('gulp'),
    conventionalChangelog = require('gulp-conventional-changelog'),
    parseArgs = require('minimist'),
    bump = require('gulp-bump'),
    gutil = require('gulp-util'),
    git = require('gulp-git'),
    fs = require('fs'),
    runSequence = require('run-sequence'),
    _ = require('lodash');
    $ = require('gulp-load-plugins')(),


gulp.task('changelog', function () {

  return gulp.src('CHANGELOG.md', {
    buffer: false
  }).pipe(conventionalChangelog({
    preset: 'angular' // Or to any other commit message convention you use.
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('bump-version', function () {
  var releaseTypes = ['major', 'minor', 'patch', 'prerelease']
  var releaseTypeArg = parseArgs(process.argv.slice(2), opts={'--': true});
      releaseTypeArg = releaseTypeArg.t || releaseTypeArg.type

  if(_.isUndefined(releaseTypeArg) ){
    // if release type is undefined default to patch.
    console.warn('No release type specified defaulting to patch.')
    releaseTypeArg = releaseTypes[2];
  } else if (releaseTypeArg && (!_.includes(releaseTypes, releaseTypeArg))){
    // if release type is defined but invalid throw error
    throw new gutil.PluginError({
      plugin: 'bump-version',
      message: 'Can not bump version, invalid version type given: ' + releaseTypeArg
    });
  }

  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({type: releaseTypeArg}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});

gulp.task('commit-changes', function () {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('[Prerelease] Bumped version number.' ))
    .pipe($.shell('git subtree push --prefix dist origin gh-pages'))

});



gulp.task('create-new-tag', function (cb) {
  var version = getPackageJsonVersion();
  git.tag(version, 'Created Tag for version: ' + version, function (error) {
    if (error) {
      return cb(error);
    } else {
      git.push('origin', 'master', {args: '--tags'}, cb);
    }
  });

  function getPackageJsonVersion () {
    var packageVersion = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;

    if(!packageVersion){
      throw new gutil.PluginError({
        plugin: 'create-new-tags',
        message: 'Version mismatch in package.json and bower.json ' + '[' + packageVersion +', '+ bowerVersion + ']'
      });
    } else {
      return packageVersion;
    }

  }
});

module.exports = function(gulp, plugins){
  return releaseRunSequence;
}

gulp.task('release', ['add'],releaseRunSequence);

function releaseRunSequence(cb){
  runSequence(
    'bump-version',
    'changelog',
    'commit-changes',
    'create-new-tag',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      cb(error);
    });
}

