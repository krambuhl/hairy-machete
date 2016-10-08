import React from 'react';
import styles from './poster.css';

const Poster = ({ src, alt, size, children }) => {
	switch(size) {
		case "small": size = 220; break;
		default: size = 400; break;
	}
	
	return (
		<div className="poster">
			<img className="poster__img" src={src} alt={alt} width={size} />
		</div>
	)
};

export default Poster;
export {
	Poster
}