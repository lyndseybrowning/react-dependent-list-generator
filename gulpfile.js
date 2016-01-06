var paths = {
  build: 'build/',
  scss: 'css/scss/'
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssminify = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('sass', function() {
  return gulp.src(paths.scss + 'style.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(cssminify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(paths.scss + 'style.scss', ['sass']);
  gulp.watch('*.html', ['bs-reload']);
});
