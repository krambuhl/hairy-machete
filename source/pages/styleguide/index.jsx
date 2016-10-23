import React from 'react';

import PageRoot from '../../tags/page-root/page-root.jsx';
import Rhythm from '../../tags/rhythm/rhythm.jsx';
import Heading from '../../tags/heading/heading.jsx';
import Wrapper from '../../tags/wrapper/wrapper.jsx';
import ComponentList from '../../styleguide/component-list.jsx';

export default ({ locals }) => (
	<PageRoot title="Styleguide">
		<Wrapper>
			<Rhythm size="small" deep="true">
				<Heading>Why, Hello!</Heading>
				<Heading tagName="h2">Styleguide</Heading>

				<Heading tagName="h3">Components</Heading>
				<ComponentList baseUrl="/styleguide/components" components={locals.components} />
				
				<Heading tagName="h3">Tags</Heading>
				<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
			</Rhythm>
	</Wrapper>
	</PageRoot>
);