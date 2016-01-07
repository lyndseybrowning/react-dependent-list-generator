var paths = {
  build: 'build/',
  scss: 'css/scss/'
};

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssminify = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
<<<<<<< HEAD
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var buffers = require('vinyl-buffer');
var source = require('vinyl-source-stream');
=======
var browserSync = require('browser-sync');
>>>>>>> 927880ce0b64fd08cd4e20b9e0823f65901268a1

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

function getBundle(debug) {
  return watchify(browserify({
    entries: [ './js/main.js' ],
    debug: debug || true,
    cache: {},
    packageCache: {}
  }));
}

gulp.task('browserify', function() {
  return getBundle()
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.error(err); })
    .pipe(source('main.js'))
    .pipe(gulp.dest(paths.build))
    .pipe(buffers())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(paths.scss + 'style.scss', ['sass']);
  gulp.watch('*.html', ['bs-reload']);
  gulp.watch('js/*.js', ['browserify']);
});
