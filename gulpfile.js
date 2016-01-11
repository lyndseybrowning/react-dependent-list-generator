var paths = {
  build: 'build/',
  scss: 'css/scss/'
};

var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssminify = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var buffers = require('vinyl-buffer');
var source = require('vinyl-source-stream');
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

gulp.task('browserify', function(){
  build(false);
});

function build(watch) {
  var opts = {
    entries: [ './js/main.js' ],
    debug : true,
    cache: {},
    packageCache: {}
  };

  var bundler = watch ? watchify(browserify(opts)) : browserify(opts);

  function bundle() {
    bundler.transform(babelify);

    return bundler.bundle()
      .on('error', function(err) {
        console.log('Bundle Error: ' + err);
      })
      .pipe(source('main.js'))
      //.pipe(gulp.dest(paths.build))
      //.pipe(buffers())
      //.pipe(uglify())
      //.pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(paths.build))
      .pipe(browserSync.stream())
  }

  bundler.on('update', function() {
    bundle();
    gutil.log('Bundling...');
  });

  return bundle();
}

gulp.task('default', ['browserify', 'browser-sync'], function() {
  gulp.watch(paths.scss + 'style.scss', ['sass']);
  gulp.watch('*.html', ['bs-reload']);

  return build(true);
});
