module.exports = function () {
  $.gulp.task('allimg', function () {
    return $.gulp.src('images/freeandroid/**/*.{png,jpg,svg}')
        .pipe($.gulp.dest('build/images/freeandroid'));
  });
};