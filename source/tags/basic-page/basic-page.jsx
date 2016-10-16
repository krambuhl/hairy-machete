import React from 'react';

import PageRoot from '../page-root/page-root.jsx';
import Heading from '../heading/heading.jsx';

const BasicPage = ({
	title,
	children
}) => (
	<PageRoot title={title} bodyClass="basic-page">
		<a href="/">Home Page</a>
		<br/>
		<br/>
		{children}
	</PageRoot>
)

export default BasicPage;