import React from 'react';
import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';
import macheteImg from './images/machete.jpg';
import hairImg from './images/hair.jpg';

export default ({ children }) => (
	<PageRoot title="index">
		<Poster
			title="Machete"
			href="machete.html" 
			src={macheteImg} 
			alt="Machete Poster" 
			type="small" />

		<Poster
			title="Hair"
			href="hair.html" 
			src={hairImg} 
			alt="Hair Poster" 
			type="small" />

		<Poster
			title="Deep Page"
			href="deep/page.html" 
			src={macheteImg} 
			alt="Machete Poster" 
			type="small" />
	</PageRoot>
)