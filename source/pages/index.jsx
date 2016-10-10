import React from 'react';

import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';

import macheteImg from './images/machete.jpg';
import hairImg from './images/hair.jpg';

export default ({ children }) => (
	<PageRoot title="index">
		<a href="machete.html"><Poster src={macheteImg} alt="Machete Poster" size="small" /></a>
		<a href="hair.html"><Poster src={hairImg} alt="Machete Poster" size="small" /></a>
	</PageRoot>
)