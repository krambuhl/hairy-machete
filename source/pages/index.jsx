import React from 'react';

import PageRoot from '../tags/page-root/page-root.jsx';
import Heading from '../tags/heading/heading.jsx';

const getName = name => 
	name
		.split('-')
		.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
		.join(' ');

export const ComponentList = ({ baseUrl, components }) => {
	const Items = components.map(item => {
		const name = getName(item);
		return <li><a href={`${baseUrl}/${item}.html`}>{name}</a></li>
	});

	return <ul>
		{Items}
	</ul>
}

export default ({ locals }) => (
	<PageRoot title="Hello World">
		<Heading tagName="h1">Hello World</Heading>
		
		<Heading tagName="h2">Components</Heading>
		<ComponentList baseUrl="/components" components={locals.components} />
		
		<Heading tagName="h2">Styleguide</Heading>

		<Heading tagName="h3">Components</Heading>
		<ComponentList baseUrl="/styleguide/components" components={locals.components} />
		
		<Heading tagName="h3">Tags</Heading>
		<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
	</PageRoot>
)