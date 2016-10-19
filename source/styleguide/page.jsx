import React from 'react';

import Heading from '../tags/heading/heading.jsx';
import { 
	PageRoot__Wrapper,
	PageRoot__Head,
	PageRoot__Body
} from '../tags/page-root/page-root.jsx';

import ComponentList from './component-list.jsx';

export default ({
	title,
	locals,
	children
}) => (
	<PageRoot__Wrapper>
		<PageRoot__Head title={title}>
			<link rel="stylesheet" href="/assets/styleguide.css" />
		</PageRoot__Head>
		<PageRoot__Body className="page-styleguide">
			<div className="sg-nav">
				<Heading tagName="h2">Components</Heading>
				<ComponentList baseUrl="/styleguide/components" components={locals.components} />
				<Heading tagName="h2">Tags</Heading>
				<ComponentList baseUrl="/styleguide/tags" components={locals.tags} />
			</div>

			<div className="styleguide">
				{children}
			</div>
			<script src="/assets/styleguide.js"></script>
		</PageRoot__Body>
	</PageRoot__Wrapper>
);