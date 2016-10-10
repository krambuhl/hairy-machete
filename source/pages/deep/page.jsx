import React from 'react';

import PageRoot from '../../tags/page-root/page-root.jsx';
import Poster from '../../tags/poster/poster.jsx';
import Heading from '../../tags/heading/heading.jsx';

import macheteImg from './images/machete.jpg';

export default ({ path, children }) => (
	<PageRoot title="deep">
		<Heading tagName="h1">Machete</Heading>
		<Poster src={macheteImg} alt="Machete Poster" />
	</PageRoot>
)