import React from 'react';
import style from './product-description.css';

import Heading from '../../tags/heading/heading.jsx';
import Poster from '../../tags/poster/poster.jsx';

export default ({ 
	title,
	className,
	children
}) => (
	<div className={['product-description', className].join(' ')}>				
		<Heading tagName="h1">{title}</Heading>
	</div>
)