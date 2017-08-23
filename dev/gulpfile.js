var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uncss = require('gulp-uncss');


gulp.task('css', function() {
    return gulp.src('./style.scss')
        .pipe(sass().on('error', sass.logError)) // Turn scss file into css
        .pipe(autoprefixer({browsers: ['last 5 versions', '> 5%']}))
        .pipe(gulp.dest('../app/css'));
});

gulp.task('watch_scss', function() {
    gulp.watch('./*.scss', ['css']);
    gulp.watch('./_header.scss', ['css']);
    gulp.watch('./_login.scss', ['css']);
    gulp.watch('./_ticketList.scss', ['css']);
    gulp.watch('./_ticket.scss', ['css']);
});

gulp.task('default', ['css', 'watch_scss']);



gulp.task('comb', function() {
    gulp.src('./style.scss')
        .pipe(csscomb())
        .pipe(gulp.dest('./'))
        .pipe(notify('cssComb Success!'));
});

gulp.task('uncss', function () {
    return gulp.src('./style.scss')
        .pipe(uncss({
            html: ['../*.html']
        }))
        .pipe(gulp.dest('./'));
});