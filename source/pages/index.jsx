import React from 'react';

import BasicPage from '../tags/basic-page/basic-page.jsx';
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
	<BasicPage title="Hello World">
		<Heading tagName="h1">Hello World</Heading>
		
		<Heading tagName="h2">Pages</Heading>
		<p>No Pages</p>
		
		<Heading tagName="h2"><a href="/styleguide">Styleguide</a></Heading>

		<Heading tagName="h3">Components</Heading>
		<ComponentList baseUrl="/styleguide/components" components={locals.components} />
		
		<Heading tagName="h3">Tags</Heading>
		<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
	</BasicPage>
)