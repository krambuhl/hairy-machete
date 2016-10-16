import React from 'react';

import { ComponentList } from '../index.jsx';
import PageRoot from '../../tags/page-root/page-root.jsx';
import Heading from '../../tags/heading/heading.jsx';

export default ({ locals }) => (
	<PageRoot title="Styleguide">
		<Heading tagName="h1">Styleguide</Heading>
		
		<Heading tagName="h2">Components</Heading>
		<ComponentList baseUrl="/styleguide/components" components={locals.components} />
		
		<Heading tagName="h2">Tags</Heading>
		<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
	</PageRoot>
);