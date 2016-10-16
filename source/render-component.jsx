import React from 'react';
import Dom from 'react-dom/server';

import BasicPage from './tags/basic-page/basic-page.jsx';

module.exports = function renderComponent(locals, callback) {
	const path = locals.path.substr(0, locals.path.length - 5);
	const name = path.substr('components/'.length);
	const Page = require(`./components/${name}/${name}.jsx`).default;

	const RenderPage = (
		<BasicPage title={name}>
			<Page locals={locals} />
		</BasicPage>
	);

  callback(null, Dom.renderToStaticMarkup(RenderPage, locals));
};
