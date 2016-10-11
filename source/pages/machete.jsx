import React from 'react';
import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';
import macheteImg from './images/machete.jpg';

export default ({ children }) => (
	<PageRoot title="machete">
		<a href="./">Back</a>
		<Poster
			title="Machete"
			src={macheteImg} 
			alt="Machete Poster" />
	</PageRoot>
)