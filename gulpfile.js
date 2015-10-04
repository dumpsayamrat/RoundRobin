var
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync');

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(['*.php','templates/*.php','public/*']).on('change',function (event) {
            livereload.changed(event.path);
        });
});


gulp.task('default',['watch']);
