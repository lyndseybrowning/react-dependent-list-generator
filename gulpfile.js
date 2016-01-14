var paths = {
  build: 'build/',
  scss: 'css/scss/'
};

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cssminify = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    buffers = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    filter = require('gulp-filter');

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
    .pipe(sourcemaps.write('../build/maps'))
    .pipe(gulp.dest(paths.build))
    .pipe(filter('**/*.css'))
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
  gulp.watch(paths.scss + '**/*.scss', ['sass']);
  gulp.watch('*.html', ['bs-reload']);

  return build(true);
});
