var gulp = require('gulp');
var ts = require('gulp-typescript');
var bundle = require('gulp-bundle-assets');
var del = require('del');
var runSequence = require('run-sequence');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });
 
gulp.task('typescript', function () {
  var tsResult = tsProject.src()
        .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('temp'));
});

gulp.task('bundle', function() {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return del(['temp', 'dist']);
})

gulp.task('scripts', function (callback) {
   runSequence('clean',
              ['typescript'],
              'bundle',
              callback);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.ts', ['scripts']);
});