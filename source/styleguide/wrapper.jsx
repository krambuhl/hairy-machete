import React from 'react';
import Dom from 'react-dom/server';	

import PageRoot from '../tags/page-root/page-root.jsx';
import Heading from '../tags/heading/heading.jsx';

import { prettyPrint } from 'html';

export default ({ 
	tag, 
	style, 
	readme, 
	pkg = {}
}) => {
	const { name, modifiers, demos } = pkg;
	const Tag = tag;
	let res;

	if (demos) {
		res = <Tag {...demos[0]} />
	} else {
		res = <Tag />
	}
	
	let output = [
		<Heading tagName="h2">Example</Heading>,
		<pre><code>{
			prettyPrint(Dom.renderToStaticMarkup(res))
		}</code></pre>
	];

	if (style) {
		output = output.concat([
			<Heading tagName="h2">CSS</Heading>,
			<pre><code>{style}</code></pre>
		]);
	}

	if (readme) {
		output = output.concat([
			<Heading tagName="h2">Readme</Heading>,
			<div className="readme" dangerouslySetInnerHTML={{ __html: readme }}></div>
		]);
	}
	
	if (modifiers) {
		output = output.concat([
			<Heading tagName="h2">Modifiers</Heading>,
			<ul>
				{modifiers.map(m => <li>{name + '--' + m}</li>)}
			</ul>
		]);
	}

	return (
		<PageRoot>
			<Heading tagName="h1">Example</Heading>
			<div className="component">{res}</div>

			{output}

			<script src="/assets/styleguide.js"></script>
		</PageRoot>
	)
};