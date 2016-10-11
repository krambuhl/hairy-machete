const webpack = require('webpack');

const baseBuild = require('./webpack.pages.config');
const build = Object.assign({}, baseBuild);

const cssnano = require('cssnano');

// production specific configuration
build.devtool = 'source-map';

build.module.loaders[0].query.presets.pop()

build.plugins = build.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
]);

build.postcss = build.postcss.concat([
	cssnano()
]);

module.exports = build;