const path = require('path');
const glob = require('glob');

const staticConfig = require('./build/webpack.static.js');
const styleguideConfig = require('./build/webpack.styleguide.js');
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

const components = glob.sync('./source/components/**/*.jsx').map(getName);
const tags = glob.sync('./source/tags/**/*.jsx').map(getName);

const prefix = pre => str => pre + str;
const styleguides = 
  tags.map(prefix('tags/')).concat(components.map(prefix('components/')))

const baseOutput = config => Object.assign({
  outputPath: path.resolve(__dirname, 'dist'),
}, config);

const renderPages = staticConfig(baseOutput({
  entry: './source/render-page.jsx',
  locals: { components, tags },
  paths: glob.sync('./source/pages/**/*.jsx')
    .map(getDeepName('source/pages'))
    .map(page => `${page}.html`),
}));

const renderStyleguide = styleguideConfig(baseOutput({
  entry: './source/render-styleguide.jsx',
  paths: styleguides.map(page => `styleguide/${page}.html`)
}));

const styleguideBundle = browserConfig(baseOutput({
  entry: './source/styleguide.jsx',
  outputScript: '/assets/styleguide.js',
  outputStyle: '/assets/styleguide.css'
}));

const browserScript = browserConfig(baseOutput({
  entry: './source/main.jsx',
  outputScript: '/assets/bundle.js'
}));

const browserStyle = browserConfig(baseOutput({
  entry: './source/style.jsx',
  outputStyle: '/assets/bundle.css'
}));

module.exports = [
  browserScript,
  browserStyle,
  renderStyleguide,
  styleguideBundle,
  renderPages
];