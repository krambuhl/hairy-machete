import React from 'react';
import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';
import hairImg from './images/hair.jpg';

export default ({ children }) => (
	<PageRoot title="hair">
		<a href="./">Back</a>
		<Poster
			title="Hair"
			src={hairImg} 
			alt="Hair Poster" />
	</PageRoot>
)