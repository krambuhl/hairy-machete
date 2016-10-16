const webpack = require('webpack');

const baseBuild = require('./webpack.config');
const build = Array.prototype.slice(baseBuild);

const cssnano = require('cssnano');

// production specific configuration
build.forEach((b, i) => {
	build[i].devtool = 'source-map'
});

build.forEach((b, i) => {
	build[i].plugins.unshift(
	  new webpack.DefinePlugin({
	    'process.env': {
	      'NODE_ENV': JSON.stringify('production')
	    }
	  })
	);
});

build.forEach((b, i) => {
	if (build[i].postcss !== undefined) {
		build[i].postcss = build[i].postcss.concat([
			cssnano()
		]);
	}
});

module.exports = build;