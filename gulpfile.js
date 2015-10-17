var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });
 
gulp.task('default', function () {
  var tsResult = tsProject.src()
        .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('build'));
});