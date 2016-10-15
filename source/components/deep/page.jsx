import React from 'react';
import PageRoot from '../../tags/page-root/page-root.jsx';
import MountPoint from '../../tags/mount-point/mount-point.jsx';
import Poster from '../../tags/poster/poster.jsx';
import macheteImg from './images/machete.jpg';

export default ({ path, children }) => (
	<PageRoot title="deep">
		<MountPoint>THIS SHOULD BE REPLACED</MountPoint>
		
		<p><a href="../">Very go Back</a></p>
		
		<Poster
			className="deep__poster"
			title="Deep Page"
			src={macheteImg} 
			alt="Machete Poster" />
	</PageRoot>
)