var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass')

gulp.task('clean', function() {
    gulp.src(paths.lib, { read: false })
        .pipe(rimraf({ force: true }));
});

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./wwwroot/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('libs', function() {
    var bower = {
        'normalize': 'normalize.css/normalize.css',
        'font-awesome': 'font-awesome/**/*.{css,map,eot,svg,ttf,woff,woff2,otf}'
    };

    for (var destinationDir in bower) {
        gulp.src('./bower_components/' + bower[destinationDir])
            .pipe(gulp.dest('./wwwroot/lib/' + destinationDir));
    }
});
