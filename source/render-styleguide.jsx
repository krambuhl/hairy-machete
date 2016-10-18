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
	const fileName = locals.path.substr('styleguide/'.length)
	const type = fileName.split('/')[0];
	const first = fileName.substr(type.length + 1);
	const name = first.substr(0, first.length - 5);
	const basePath = `./${type}/${name}/`;
	const path = basePath + name;

	const res = 
		<StyleguideWrapper
			name={name}
			path={path}
			tag={require(path + '.jsx').default} 
			style={requireOrFail(path + '.css')} 
			readme={requireOrFail(basePath + 'README.md')}
			examples={requireOrFail(basePath + 'examples.jsx')}
			locals={locals} />

  callback(null, Dom.renderToStaticMarkup(res, locals));
};
