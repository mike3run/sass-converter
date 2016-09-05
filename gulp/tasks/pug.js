'use strict';
const gulp          = require('gulp');
const plugins       = require('gulp-load-plugins');
const $             = plugins();
const config        = require('../gulp.config');
const when          = require('gulp-if');
// Check if gulp pug --prod or --production has been added to the task
const argv          = require('yargs').argv;
const production    = argv.prod || argv.production;

gulp.task('pug', done => {
  return gulp.src('./src/pug/**/!(_)*.pug')
  .pipe( when( !production, $.pug({
    pretty : true,
    basedir : './src/pug'
  }) )).on('error', config.errorHandler)
  .pipe( when(production, $.pug({
    basedir : './src/pug'
  }) ) ).on('error', config.errorHandler)
  .pipe( gulp.dest(config.distFolder) );
  done();
});
