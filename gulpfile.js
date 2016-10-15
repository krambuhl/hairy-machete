const gulp = require('gulp');
const webpack = require('webpack');

const del = require('del')

const webpackConfig = require('./webpack.config');
const webpackProductionConfig = require('./webpack.production.config');

function clean() {
  return del('dist')
}

function buildWebpack(done) {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new Error(err);
    done();
  });
}

function buildProductionWebpack(done) {
	webpack(webpackProductionConfig, (err, stats) => {
    if (err) throw new Error(err);
    done();
  });
}

function postClean() {
  return del('dist/tmp');
}


gulp.task('build', gulp.series(clean, buildWebpack, postClean));
gulp.task('production', gulp.series(clean, buildProductionWebpack, postClean));