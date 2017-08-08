var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var watch = require('gulp-watch');

gulp.task("compile", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('res', () => {
    return gulp.src([
            './src/**/*.png',
            './src/**/*.jpg',
            './src/**/*.gif',
            './src/**/*.ico',
            './src/**/*.wxml',
            './src/**/*.wxss',
            './src/**/*.json',
        ])
        .pipe(gulp.dest('./dist'));
});


gulp.task('watch-res', () => {
    return watch([
            './src/**/*.png',
            './src/**/*.jpg',
            './src/**/*.gif',
            './src/**/*.ico',
            './src/**/*.wxml',
            './src/**/*.wxss',
            './src/**/*.json',
        ])
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['watch-res']);
gulp.task('build', ['compile', 'res']);