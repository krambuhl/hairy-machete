import React from 'react';
import Dom from 'react-dom/server';

import PageRoot from './tags/page-root/page-root.jsx';

module.exports = function renderComponent(locals, callback) {
	const path = locals.path.substr(0, locals.path.length - 5);
	const name = path.substr('components/'.length);
	const Page = require(`./components/${name}/${name}.jsx`).default;

	const RenderPage = (
		<PageRoot title={name}>
			<Page locals={locals} />
		</PageRoot>
	);

  callback(null, Dom.renderToStaticMarkup(RenderPage, locals));
};
