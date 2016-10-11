import React from 'react';
import Dom from 'react-dom/server';

export default ({ tag, style, children }) => {
	const Tag = tag;
	const res = <Tag>{children}</Tag>;
	const html = Dom.renderToStaticMarkup(res);

	return (
		<html>
			<body>
				<h1>Example</h1>
				<div className="component">{res}</div>

				<h2>HTML</h2>
				<pre><code>{html}</code></pre>

				<h2>CSS</h2>
				<pre><code>{style}</code></pre>
			</body>
		</html>
	)
}