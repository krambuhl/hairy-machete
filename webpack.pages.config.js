const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const cssnext = require('postcss-cssnext');
const colorAlpha = require('postcss-color-alpha');
const cssimport = require('postcss-import');
const discardEmpty = require('postcss-discard-empty');

const getStaticPath = dirRoot => blob => {
  const blobExt = path.extname(blob);
  const blobPath = path.resolve(__dirname, blob);
  const rootPath = path.resolve(__dirname, dirRoot);
  const name = blobPath.substr(rootPath.length + 1);

  return name.substr(0, name.length - blobExt.length);
};

const pages =
  glob.sync('./source/pages/**/*.jsx')
    .map(getStaticPath('source/pages'))
    .map(page => page + '.html');

module.exports = {
  devtool: 'eval',
  entry: {
    main: './source/main.jsx',
    pages: './source/render-page.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '/assets/[name].js',
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
        test: /\.jsx|js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
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
    new CleanPlugin(['dist']),
    new StaticSiteGeneratorPlugin('pages', pages),
    new ExtractTextPlugin('/assets/bundle.css')
  ]
};