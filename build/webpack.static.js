const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const cssimport = require('postcss-import');
const discardEmpty = require('postcss-discard-empty');

module.exports = ({
  devtool = 'eval',
  entry = '.js',
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = '/tmp/bundle.js',
  outputStyle = '/tmp/bundle.css',
  paths = [],
  locals = {}
}) => ({
  devtool: 'eval',
  entry: {
    main: entry
  },
  output: {
    path: outputPath,
    filename: outputScript,
    libraryTarget: 'umd'
  },
  publicPath: './dist/',
  postcss: [
    cssimport(), // for importing global variables/custom-selectors
    cssnext({
      warnForDuplicates: false
    }),
    colorAlpha(),
    discardEmpty()
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.md$/,
        loader: 'html!markdown-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', paths, locals),
    new ExtractTextPlugin(outputStyle)
  ]
});