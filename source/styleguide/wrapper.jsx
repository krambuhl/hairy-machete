import React from 'react';
import Dom from 'react-dom/server';	

import PageRoot from '../tags/page-root/page-root.jsx';
import Heading from '../tags/heading/heading.jsx';

export default ({ tag, style, children }) => {
	const Tag = tag;
	const res = <Tag>{children}</Tag>;
	const html = Dom.renderToStaticMarkup(res);

	return (
		<PageRoot>
			<Heading tagName="h1">Example</Heading>
			<div className="component">{res}</div>

			<Heading tagName="h2">Example</Heading>
			<pre><code>{html}</code></pre>

			<Heading tagName="h2">CSS</Heading>
			<pre><code>{style}</code></pre>

			<script src="/assets/styleguide.js"></script>
		</PageRoot>
	)
};