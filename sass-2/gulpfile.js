const gulp = require("gulp");
const sass = require("gulp-sass");

function scss() {
    return gulp.src(["./007_домашнє завдання сасс/**/*.scss", "./007_домашнє завдання сасс/**/*.sass"])
        .pipe(sass())
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./007_домашнє завдання сасс"));
}

gulp.task('watch', watch);

function watch() {
    gulp.watch(["./007_домашнє завдання сасс/**/*.scss", "./007_домашнє завдання сасс/**/*.sass"])
}