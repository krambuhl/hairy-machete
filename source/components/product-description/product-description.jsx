import React from 'react';

import Heading from '../../tags/heading/heading.jsx';

export default ({ 
	title,
	className,
	children
}) => (
	<div className={['product-description', className].join(' ')}>				
		<Heading tagName="h1">{title}</Heading>
	</div>
)