import React from 'react';
import Dom from 'react-dom/server';

import StyleguideWrapper from './styleguide/wrapper.jsx';

const requireOrFail = (path) => {
	try {
		return require(path);
	} catch(e) {
		return;
	}
}

module.exports = function renderStyleguide(locals, callback) {
	const name = locals.path.substr('styleguide/'.length)
	const fname = name.substr(0, name.length - 5);
	const basePath = './tags/' + fname + '/';
	const path = basePath + fname;

	const style = requireOrFail(path + '.css')
	const readme = requireOrFail(basePath + 'README.md');
	const pkg = requireOrFail(basePath + 'package.json');


	const res = 
		<StyleguideWrapper 
			tag={require(path + '.jsx').default} 
			style={requireOrFail(path + '.css')} 
			readme={requireOrFail(basePath + 'README.md')}
			pkg={requireOrFail(basePath + 'package.json')} />

  callback(null, Dom.renderToStaticMarkup(res, locals));
};
