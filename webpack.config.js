const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const unwrapGlob = arr => arr.reduce((res, entry) => res.concat(glob.sync(entry)), []);

const getStaticPath = blob => {
  const blobExt = path.extname(blob);
  const blobPath = path.resolve(__dirname, blob);
  const rootPath = path.resolve(__dirname, 'source/pages');
  const name = blobPath.substr(rootPath.length + 1);

  return name.substr(0, name.length - blobExt.length);
}

const globs = [
  './source/pages/**/*.jsx'
];

const paths = 
  unwrapGlob(globs)
    .map(getStaticPath)
    .map(p => p + '.html');

module.exports = {
  entry: {
    main: './source/main.jsx'
  },
  output: {
    filename: '/assets/bundle.js',
    path: './dist',
    libraryTarget: 'umd'
  },
  publicPath: './dist/',
  module: {
    loaders: [
      {
        test: /\.jsx|js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?context=./source/pages&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths),
    new ExtractTextPlugin('/assets/bundle.css')
  ]
};