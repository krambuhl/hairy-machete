import React from 'react';
import styles from './poster.css';

const Poster = ({ src, alt, size, children }) => {
	switch(size) {
		case 'small': size = 360; break;
		case 'medium': size = 480; break;
		default: size = 720; break;
	}
	
	return (
		<div className="poster">
			<img className="poster__img" src={src} alt={alt} height={size} />
		</div>
	)
};

export default Poster;
export {
	Poster
}