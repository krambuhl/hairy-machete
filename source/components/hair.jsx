import React from 'react';
import PageRoot from '../tags/page-root/page-root.jsx';
import MountPoint from '../tags/mount-point/mount-point.jsx';
import Poster from '../tags/poster/poster.jsx';
import hairImg from './images/hair.jpg';

export default ({ children }) => (
	<PageRoot title="hair">
		<MountPoint>THIS SHOULD BE REPLACED</MountPoint>
		
		<p><a href="./">Back</a></p>
		<Poster
			title="Hair"
			src={hairImg} 
			alt="Hair Poster" />
	</PageRoot>
)