import React from 'react';
import styles from './heading.css';

const Heading = ({
	tagName = 'h3',
	href,
	className,
	children
}) => {
	const Tag = tagName
	let mod = 'heading--';
	
	switch(tagName) {
		case 'h1': mod += 'h1'; break;
		case 'h2': mod += 'h2'; break;
		case 'h3': mod += 'h3'; break;
		case 'h4': mod += 'h4'; break;
		case 'h5': mod += 'h5'; break;
		case 'h6': mod += 'h6'; break;
	}

	return (
		<Tag className={['heading', mod, className].join(' ')}>{children}</Tag>
	)
};

export default Heading;
export {
	Heading
}