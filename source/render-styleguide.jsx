import React from 'react';
import Dom from 'react-dom/server';

import StyleguideWrapper from './styleguide/wrapper.jsx';

module.exports = function renderStyleguide(locals, callback) {
	const name = locals.path.substr('styleguide/'.length)
	const fname = name.substr(0, name.length - 5);
	const path = './tags/' + fname + '/' + fname;
	const Tag = require(path + '.jsx').default;
	const style = require(path + '.css');

  callback(null, Dom.renderToStaticMarkup(<StyleguideWrapper tag={Tag} style={style}>Hello</StyleguideWrapper>, locals));
};
