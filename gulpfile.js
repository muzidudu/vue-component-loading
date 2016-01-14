var gulp = require('gulp');
var browserify = require('gulp-browserify');
var eslint = require('gulp-eslint');

gulp.task('eslint', function () {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['eslint'], function () {
    gulp.src(['./src/standalone.js', './examples/browserify.js'])
        .pipe(browserify({
            insertGlobals: true,
            transform: ['vueify']
        }))
        .pipe(gulp.dest('./build/'));

    gulp.src('./src/vue.min.js')
        .pipe(gulp.dest('./build/'));
});
