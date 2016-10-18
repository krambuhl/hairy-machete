import React from 'react';

import PageRoot from '../tags/page-root/page-root.jsx';
import Heading from '../tags/heading/heading.jsx';

import { ComponentList } from '../styleguide/wrapper.jsx';

export default ({ locals }) => (
	<PageRoot title="Hello World">
		<Heading tagName="h1">Hello World</Heading>
		
		<Heading tagName="h2">Pages</Heading>
		<p>No Pages</p>
		
		<Heading tagName="h2"><a href="/styleguide">Styleguide</a></Heading>

		<Heading tagName="h3">Components</Heading>
		<ComponentList baseUrl="/styleguide/components" components={locals.components} />
		
		<Heading tagName="h3">Tags</Heading>
		<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
	</PageRoot>
)