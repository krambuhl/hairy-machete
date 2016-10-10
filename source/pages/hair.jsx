import React from 'react';

import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';
import Heading from '../tags/heading/heading.jsx';

import hairImg from './images/hair.jpg';

export default ({ children }) => (
	<PageRoot title="hair">
		<Heading tagName="h1">Hair</Heading>
		<Poster src={hairImg} alt="Hair Poster" />
	</PageRoot>
)