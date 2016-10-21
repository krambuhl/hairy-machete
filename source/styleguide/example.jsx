import React from 'react';
import Dom from 'react-dom/server';	
import { prettyPrint } from 'html';

import Heading from '../tags/heading/heading.jsx';

const json2htmlAttrs = obj =>
	Object.keys(obj)
		.filter(key => key !== 'children')
		.map(key => `${key}="${obj[key]}"`)
		.join(' ');


const buildReactExample = (tagName, attrs, children) =>
	children && attrs
		? `<${tagName} ${attrs}>${children}</${tagName}>`
		: children && !attrs
			? `<${tagName}>${children}</${tagName}>`
			: `<${tagName} ${attrs} />`



export default ({
	tag,
	niceTitle,
	name,
	data
}) => {
	const Tag = tag;
	const res = data ? <Tag {...data} /> : <Tag />

	const tagName = niceTitle.split(' ').join('');
	const attrs = json2htmlAttrs(data);
	const reactExample = buildReactExample(tagName, attrs, data.children)

	return (
		<div className="styleguide__example">
			<Heading level="3">{name}</Heading>
				
			<div className="styleguide__example-section styleguide__example-section--react">
				<Heading level="4">JSX</Heading>
				<pre><code>
					{reactExample}
				</code></pre>
			</div>

			<div className="styleguide__example-section styleguide__example-section--html">
				<Heading level="4">HTML</Heading>
				<pre><code>
					{ prettyPrint(Dom.renderToStaticMarkup(res)) }
				</code></pre>
			</div>

			<div className="styleguide__example-section styleguide__example-section--example">
				<Heading level="4">Demo</Heading>
				<Tag {...data} />
			</div>
		</div>
	);
};