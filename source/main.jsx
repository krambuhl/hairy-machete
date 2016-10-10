import React from 'react';
import Dom from 'react-dom/server';


console.log('HELLO_WOLRD')

module.exports = function render(locals, callback) {
	const path = locals.path.substr(0, locals.path.length - 5);
	const Page = require('./pages/' + path + '.jsx').default;
  callback(null, '<!DOCTYPE html>' + Dom.renderToString(<Page />, locals));
};
