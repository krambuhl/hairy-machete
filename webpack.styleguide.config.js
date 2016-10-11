const path = require('path');
const glob = require('glob');

const baseBuild = require('./webpack.pages.config');
const build = Object.assign({}, baseBuild);

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const tags =
  glob.sync('./source/tags/**/*.jsx')
    .map(page => {
      const ext = path.extname(page);
      return path.basename(page, ext);
    })
    .map(page => 'styleguide/' + page + '.html');

build.entry = {
  styleguide: ['./source/render-styleguide.jsx']
}

build.output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '/styleguide/assets/bundle.js',
  publicPath: '/dist/styleguide',
  libraryTarget: 'umd'
}

build.publicPath = './dist/styleguide';

build.module.loaders = [
  {
    test: /\.jsx|js?$/,
    loader: 'babel-loader',
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    loaders: [
      'raw-loader',
      'postcss-loader'
    ]
  },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
      'file?context=./source/pages&name=/styleguide/assets/images/[name]-[md5:hash:hex:8].[ext]',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
  }
];

build.plugins = [
  new CleanPlugin(['dist/styleguide']),
  new StaticSiteGeneratorPlugin('styleguide', tags)
];

module.exports = build;