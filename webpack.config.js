const path = require('path');
const glob = require('glob');

const staticConfig = require('./build/webpack.static.js');
const browserConfig = require('./build/webpack.browser.js');

const getDeepName = source => blob => {
  const blobPath = path.resolve(__dirname, blob);
  const rootPath = path.resolve(__dirname, source);
  const name = blobPath.substr(rootPath.length + 1);
  return name.substr(0, name.length - path.extname(blob).length);
};

const getName = page => {
  const ext = path.extname(page);
  return path.basename(page, ext);
};

const components =
  glob.sync('./source/components/**/*.jsx')
    .map(getDeepName('source/components'))
    .map(page => page + '.html');

const tags =
  glob.sync('./source/tags/**/*.jsx')
    .map(getName)
    .map(page => 'styleguide/' + page + '.html');

const renderComponents = staticConfig({
	entry: './source/render-component.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
	outputScript: '/tmp/render-components.js',
	outputStyle: '/assets/bundle.css',
  paths: components
});

const renderStyleguide = staticConfig({
	entry: './source/render-styleguide.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
	outputScript: '/tmp/render-styleguide.js',
  paths: tags
});

renderStyleguide.plugins.pop();
renderStyleguide.module.loaders = [
  renderStyleguide.module.loaders[0],
  renderStyleguide.module.loaders[2],
  { test: /\.css$/, loader: 'raw-loader!postcss-loader' }
];

const browserBundle = browserConfig({
  entry: './source/main.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  publicPath: './dist',
  outputScript: '/assets/bundle.js',
  outputStyle: '/tmp/browser.css'
});

const styleguideBundle = browserConfig({
  entry: './source/styleguide.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  publicPath: './dist',
  outputScript: '/assets/styleguide.js',
  outputStyle: '/assets/styleguide.css'
});

module.exports = [
	renderStyleguide,
  renderComponents,
	browserBundle,
  styleguideBundle
];