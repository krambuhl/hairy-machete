import React from 'react';
import PageRoot from '../tags/page-root/page-root.jsx';
import MountPoint from '../tags/mount-point/mount-point.jsx';
import Poster from '../tags/poster/poster.jsx';
import macheteImg from './images/machete.jpg';

export default ({ children }) => (
	<PageRoot title="machete">
		<MountPoint>THIS SHOULD BE REPLACED</MountPoint>
		
		<p><a href="./">Back</a></p>
		<Poster
			title="Machete"
			src={macheteImg} 
			alt="Machete Poster" />
	</PageRoot>
)