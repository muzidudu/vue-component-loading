var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
 
gulp.task('default', function() {
    gulp.src(['./src/standalone.js', './examples/browserify.js'])
        .pipe(browserify({
            insertGlobals: true,
            transform: ['vueify']
        }))
        .pipe(gulp.dest('./build/'));

    gulp.src('./src/vue.min.js')
        .pipe(gulp.dest('./build/'));
});
