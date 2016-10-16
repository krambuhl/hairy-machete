import path from 'path';

import React from 'react';

import { ComponentList } from '../index.jsx';
import BasicPage from '../../tags/basic-page/basic-page.jsx';
import Heading from '../../tags/heading/heading.jsx';

export default ({ locals }) => (
	<BasicPage title="Components">
		<Heading tagName="h1">Components</Heading>
		<ComponentList baseUrl="/components" components={locals.components} />
	</BasicPage>
);