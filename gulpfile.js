"use strict";

  var gulp = require('gulp'),
      sync = require('browser-sync').create();

      // Watch & Serve Task
      gulp.task('watchFiles', function() {

          sync.init({
              server: "./",
              open: false
          });

          //gulp.watch(options.src + '/scss/**/*.scss', ['styles']);
          //gulp.watch(options.src + '**/*.html').on('change', sync.reload);
      });

      gulp.task('serve', ['watchFiles']);
