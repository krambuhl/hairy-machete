const staticConfig = require('./webpack.static.js');

module.exports = ({
  devtool = 'eval',
  entry = '.js',
  outputPath ='dist',
  publicPath = './dist/',
  outputScript = 'bundle.js',
  outputStyle = 'bundle.css',
  paths = []
}) => {
  const build = staticConfig({ 
    devtool, entry, outputPath, publicPath,
    outputScript, outputStyle, paths
  });

  build.plugins.pop();
  build.module.loaders = [
    build.module.loaders[0],
    { test: /\.css$/, loader: 'raw-loader!postcss-loader' },
    ...build.module.loaders.slice(2)
  ];

  return build;
};