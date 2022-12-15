const gulp = require('gulp')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const atImport = require('postcss-import')

gulp.task('postcss', function () {
  var postcss = require('gulp-postcss')
  // 输入文件
  return gulp.src('PostCss/src/plugins-main.css')
    // 加工厂
    .pipe(postcss([
      atImport,
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      cssnano
    ]))
    // 输出文件
    .pipe(gulp.dest('PostCss/build/'))
})