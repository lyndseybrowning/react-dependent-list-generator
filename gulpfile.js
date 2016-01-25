'use strict';

const paths = {
  build: 'build/',
  scss: 'css/scss/'
};

let gulp = require('gulp');
let gutil = require('gulp-util');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let cssminify = require('gulp-cssnano');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync');
let browserify = require('browserify');
let watchify = require('watchify');
let babelify = require('babelify');
let buffers = require('vinyl-buffer');
let source = require('vinyl-source-stream');
let filter = require('gulp-filter');

gulp.task('browser-sync', function() {
  return browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('sass', function() {
  return gulp.src(paths.scss + 'style.scss')
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: false
    }))
    .pipe(cssminify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('../css/maps'))
    .pipe(gulp.dest(paths.build))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.stream())
});

gulp.task('browserify', function(){
  build(false);
});

function build(watch) {

  let opts = {
    entries: [ './js/main.js' ],
    debug : true,
    cache: {},
    packageCache: {},
  };

  let bundler = watch ? watchify(browserify(opts)) : browserify(opts);

  function bundle() {
    bundler.transform(babelify);

    return bundler.bundle()
      .on('error', function(err) {
        console.log('Bundle Error: ' + err);
      })
      .pipe(source('main.js'))
      .pipe(buffers())
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.build))
      .pipe(browserSync.stream())
  }

  bundler.on('update', function() {
    bundle();
    gutil.log('Bundling Now...');
  });

  return bundle();
}

gulp.task('default', ['browserify', 'browser-sync'], function() {
  gulp.watch(paths.scss + '**/*.scss', ['sass']);
  gulp.watch('*.html', ['bs-reload']);

  return build(true);
});
