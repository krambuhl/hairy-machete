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

const renderPages = staticConfig({
  entry: './source/render-page.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  outputScript: '/tmp/render-pages.js',
  outputStyle: '/tmp/render-pages.css',
  locals: { components, tags },
  paths: glob.sync('./source/pages/**/*.jsx')
    .map(getDeepName('source/pages'))
    .map(page => `${page}.html`),
});

const renderComponents = staticConfig({
  entry: './source/render-component.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  outputScript: '/tmp/render-components.js',
  outputStyle: '/assets/bundle.css',
  paths: components.map(page => `components/${page}.html`)
});

const renderTagStyleguide = styleguideConfig({
  entry: './source/render-tag-styleguide.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  outputScript: '/tmp/render-tag-styleguide.js',
  paths: tags.map(page => `styleguide/tags/${page}.html`)
});

const renderComponentStyleguide = styleguideConfig({
  entry: './source/render-component-styleguide.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  outputScript: '/tmp/render-component-styleguide.js',
  paths: components.map(page => `styleguide/components/${page}.html`)
});

const browserBundle = browserConfig({
  entry: './source/main.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  outputScript: '/assets/bundle.js',
  outputStyle: '/tmp/browser.css'
});

const styleguideBundle = browserConfig({
  entry: './source/styleguide.jsx',
  outputPath: path.resolve(__dirname, 'dist'),
  outputScript: '/assets/styleguide.js',
  outputStyle: '/assets/styleguide.css'
});


module.exports = [
  renderPages,
  renderComponents,
  renderComponentStyleguide,
  renderTagStyleguide,
	browserBundle,
  styleguideBundle
];