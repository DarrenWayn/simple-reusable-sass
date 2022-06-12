const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// one to compile our sass
function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

// this one to watch our sass files
function watchTask() {
    watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)