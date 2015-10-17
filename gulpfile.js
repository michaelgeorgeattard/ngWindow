var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(ts({
        typescript: require('typescript'),
        noImplicitAny: true,
        out: 'app.js'
      }));
  return tsResult.js.pipe(gulp.dest('build'));
});