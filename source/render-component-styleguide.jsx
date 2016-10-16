import React from 'react';
import Dom from 'react-dom/server';

import StyleguideWrapper from './styleguide/wrapper.jsx';

// this requires a file's contents, or returns 
// nothing if the file doesn't exist
const requireOrFail = (path) => {
	try {
		return require(path);
	} catch(e) {
		return;
	}
}

module.exports = function renderStyleguide(locals, callback) {
	const fileName = locals.path.substr('styleguide/components/'.length)
	const name = fileName.substr(0, fileName.length - 5);
	const basePath = './components/' + name + '/';
	const path = basePath + name;

	const res = 
		<StyleguideWrapper
			name={name}
			path={path}
			tag={require(path + '.jsx').default} 
			style={requireOrFail(path + '.css')} 
			readme={requireOrFail(basePath + 'README.md')}
			pkg={requireOrFail(basePath + 'package.json')} />

  callback(null, Dom.renderToStaticMarkup(res, locals));
};