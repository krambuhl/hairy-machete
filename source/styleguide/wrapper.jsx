import React from 'react';
import Dom from 'react-dom/server';	
import { prettyPrint } from 'html';

import Heading from '../tags/heading/heading.jsx';
import { 
	PageRoot__Wrapper,
	PageRoot__Head,
	PageRoot__Body
} from '../tags/page-root/page-root.jsx';


const getName = name => 
	name
		.split('-')
		.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
		.join(' ');

export const ComponentList = ({ baseUrl, components }) => {
	const Items = components.map(item => {
		const name = getName(item);
		return <li key={name} className="sg-nav__component-item">
			<a href={`${baseUrl}/${item}.html`}>{name}</a>
		</li>
	});

	return <ul className="sg-nav__component-list">
		{Items}
	</ul>
}

export const StyleguidePage = ({
	title,
	children
}) => (
	<PageRoot__Wrapper>
		<PageRoot__Head title={title}>
			<link rel="stylesheet" href="/assets/styleguide.css" />
		</PageRoot__Head>
		<PageRoot__Body className="page-styleguide">
			{children}
			<script src="/assets/styleguide.js"></script>
		</PageRoot__Body>
	</PageRoot__Wrapper>
);

export const StyleguideSection = ({
	type,
	isDefined,
	title,
	children
}) => (
	<div className={"styleguide__section styleguide__section--" + type + (isDefined ? " is-defined" : "")}>
		<Heading tagName="h2">{title}</Heading>
		{children}
	</div>
)

const json2htmlAttrs = obj => {
	return Object.keys(obj)
		.filter(key => key !== 'children')
		.map(key => `${key}="${obj[key]}"`)
		.join(' ');
}

export const StyleguideExample = ({
	tag,
	niceTitle,
	name,
	data
}) => {
	const Tag = tag;
	const res = data ? <Tag {...data} /> : <Tag />

	const tagName = niceTitle.split(' ').join('');
	const reactExample =
		data.children
			? `<${tagName} ${json2htmlAttrs(data)}>${data.children}</${tagName}>`
			: `<${tagName} ${json2htmlAttrs(data)}></${tagName}>`
	
	return (
		<div className="styleguide__example">
			<Heading tagName="h3">{name}</Heading>
			
			<div className="styleguide__example-section styleguide__example-section--example">
				<Heading tagName="h4">Example</Heading>
				<Tag {...data} />
			</div>

			<div className="styleguide__example-section styleguide__example-section--html">
				<Heading tagName="h4">HTML Output</Heading>
				<pre><code>
					{ prettyPrint(Dom.renderToStaticMarkup(res)) }
				</code></pre>
			</div>

			<div className="styleguide__example-section styleguide__example-section--react">
				<Heading tagName="h4">React JSX</Heading>
				<pre><code>
					{reactExample}
				</code></pre>
			</div>

			<div className="styleguide__example-section styleguide__example-section--json">
				<Heading tagName="h4">JSON Input</Heading>
				<pre><code>
					{ JSON.stringify(data, null, 4) }
				</code></pre>
			</div>
		</div>
	);
};

export default ({ 
	name = "Generic Component",
	tag, 
	style, 
	readme, 
	examples,
	locals = {}
}) => {
	const niceTitle = 
		name
			.split('-')
			.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
			.join(' ');

	return (
		<StyleguidePage title={`${niceTitle} – Bandish Styleguide`}>
			<div className="sg-nav">
				<Heading tagName="h2">Components</Heading>
				<ComponentList baseUrl="/styleguide/components" components={locals.components} />

				<Heading tagName="h2">Tags</Heading>
				<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
			</div>

			<div className="styleguide">
				<Heading tagName="h1">{niceTitle}</Heading>

				<StyleguideSection type="readme" title="Readme" isDefined={!!readme}>
					{ readme 
						? <div className="readme" dangerouslySetInnerHTML={{ __html: readme }}></div> 
						: <div>No Readme</div> }
				</StyleguideSection>

				{ examples 
					? <div className="styleguide__section styleguide__section--examples">
							<Heading tagName="h2">Examples</Heading>
							{ examples.map(e => <StyleguideExample tag={tag} name={e.name} data={e.data} niceTitle={niceTitle} />) }
						</div>
						: undefined }
				
				<StyleguideSection type="css" title="CSS" isDefined={!!style}>
					{ style
						? <pre><code>{style}</code></pre>
						: <div>No CSS file defined</div> }
				</StyleguideSection>
			</div>
		</StyleguidePage>
	)
};