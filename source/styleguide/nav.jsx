import React from 'react';

import Heading from '../tags/heading/heading.jsx';
import ComponentList from './component-list.jsx';

export default ({
	locals
}) => (
	<div className="sg-nav">
		<div className="sg-nav__toggle">Menu</div>
		
		<div className="sg-nav__container">
			<Heading level="2">Components</Heading>
			<ComponentList baseUrl="/styleguide/components" components={locals.components} />
			<Heading level="2">Tags</Heading>
			<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
		</div>
	</div>
);