const path = require('path');
const glob = require('glob');

const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = ({
  devtool = 'eval',
  entry = '.js',
  outputPath = path.resolve(__dirname, 'dist'),
  publicPath = './dist/',
  outputScript = 'bundle.js',
  outputStyle = 'bundle.css',
}) => {
  return {
    devtool: 'source-map',
    entry: {
      main: entry
    },
    output: {
      path: outputPath,
      filename: outputScript,
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
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?context=./source/&name=/assets/images/[name]-[md5:hash:hex:8].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin(outputStyle)
    ]
  };
};