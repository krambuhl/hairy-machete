const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

const entries = [
  './source/pages/**/*.jsx'
]

const webpackEntries = 
  entries
    .reduce((res, entry) => {
      res = res.concat(glob.sync(entry));
      return res;
    }, [])
    .reduce((res, entry, i) => {
      const name = path.basename(entry, path.extname(entry));
      res[name] = entry;  
      return res;
    }, {});

module.exports = {
  entry: webpackEntries,
  output: {
    filename: '[name].js',
    path: './dist',
    libraryTarget: 'umd'
  },
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
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'),
    new ExtractTextPlugin('[name].css'),
    new StaticSiteGeneratorPlugin('index')
  ]
};