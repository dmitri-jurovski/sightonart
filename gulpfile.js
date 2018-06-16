"use strict";

  var gulp = require('gulp'),
      sass = require('gulp-sass'),
      maps = require('gulp-sourcemaps'),
      sync = require('browser-sync').create();


      var options = {
        src: 'src',
        dist: 'dist'
      }

      // Sass compile to css
      gulp.task('styles', function() {
        return gulp.src(options.src + "/scss/app.scss")
            .pipe(maps.init())
            .pipe(sass())
            .pipe(maps.write('./'))
            .pipe(gulp.dest(options.src + '/css'))
            .pipe(sync.stream());
      })




      // Watch & Serve Task
      gulp.task('watchFiles', function() {

          sync.init({
              server: "./",
              open: false
          });

          //gulp.watch(options.src + '/scss/**/*.scss', ['styles']);
          gulp.watch(options.src + '**/*.js').on('change', sync.reload);
          gulp.watch('**/*.html').on('change', sync.reload);
      });

      gulp.task('serve', ['watchFiles']);
