import React from 'react';
import PageRoot from '../../tags/page-root/page-root.jsx';
import Poster from '../../tags/poster/poster.jsx';
import macheteImg from './images/machete.jpg';

export default ({ path, children }) => (
	<PageRoot title="deep">
		<a href="../">Very go Back</a>
		
		<Poster
			className="deep__poster"
			title="Deep Page"
			src={macheteImg} 
			alt="Machete Poster" />
	</PageRoot>
)