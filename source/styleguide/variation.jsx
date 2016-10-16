import React from 'react';

import Variation from './variation.jsx';
import BasicPage from '../tags/basic-page/basic-page.jsx';
import Heading from '../tags/heading/heading.jsx';


export default ({
	tag,
	name,
	data
}) => {
	const Tag = tag;

	return (
		<div className="styleguide__example">
			<Heading tagName="h3">{name}</Heading>
			<div className="styleguide__example-container">
				<Tag {...data} />
			</div>
		</div>
	);
}