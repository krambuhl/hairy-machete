import React from 'react';
import Dom from 'react-dom/server';	

import PageRoot from '../tags/page-root/page-root.jsx';
import Heading from '../tags/heading/heading.jsx';

import { prettyPrint } from 'html';

export default ({ 
	name = "Generic Component",
	tag, 
	style, 
	readme, 
	pkg = {},
}) => {
	const { modifiers, examples } = pkg;
	const Tag = tag;
	let res;

	const niceTitle = 
		name
			.split('-')
			.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
			.join(' ')

	if (examples) {
		res = <Tag {...examples[0].data} />
	} else {
		res = <Tag />
	}


	return (
		<PageRoot>
			<Heading tagName="h1">{niceTitle}</Heading>

			<div className={"styleguide__section styleguide__section--readme" + (readme ? " is-defined" : "")}>
				<Heading tagName="h2">Readme</Heading>
				{ 
					readme 
						? <div className="readme" dangerouslySetInnerHTML={{ __html: readme }}></div> 
						: <div>No Readme</div>
				}
			</div>

			<div className="styleguide__section styleguide__section--html is-defined">
				<Heading tagName="h2">HTML</Heading>
				<pre><code>
					 {prettyPrint(Dom.renderToStaticMarkup(res)) }
				</code></pre>
			</div>

			<div className={"styleguide__section styleguide__section--css" + (style ? " is-defined" : "")}>
				<Heading tagName="h2">CSS</Heading>
				{
					style
						? <pre><code>{style}</code></pre>
						: <div>No CSS file defined</div>
				}
			</div>

			{ modifiers ? (
				<div className="styleguide__section styleguide__section--modifiers">
					<Heading tagName="h2">Modifiers</Heading>
					<ul>
						{modifiers.map(m => <li>{name + '--' + m}</li>)}
					</ul>
				</div>
			) : undefined }

			<script src="/assets/styleguide.js"></script>
		</PageRoot>
	)
};