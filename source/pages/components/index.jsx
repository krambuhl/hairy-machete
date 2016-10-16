import path from 'path';

import React from 'react';

import PageRoot from '../../tags/page-root/page-root.jsx';
import Heading from '../../tags/heading/heading.jsx';

export default ({ locals }) => (
	<PageRoot title="Components">
		<Heading tagName="h1">Components</Heading>
		{locals.components.join('  –  ')}
	</PageRoot>
);