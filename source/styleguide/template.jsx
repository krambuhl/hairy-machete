import React from 'react';

import Heading from '../tags/heading/heading.jsx';

import StyleguidePage from './page.jsx';
import StyleguideExample from './example.jsx';

export const StyleguideSection = ({
	type,
	isDefined,
	title,
	children
}) => (
	<div className={"styleguide__section styleguide__section--" + type + (isDefined ? " is-defined" : "")}>
		<Heading level="2">{title}</Heading>
		{children}
	</div>
);


export default ({ 
	name = "Generic Component",
	tag, 
	style, 
	readme,   
	examples,
	locals = {}
}) => {
	const niceTitle = 
		name
			.split('-')
			.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
			.join(' ');

	return (
		<StyleguidePage title={`${niceTitle} – Bandish Styleguide`} locals={locals}>
			<Heading level="1">{niceTitle}</Heading>
			
			{ readme
				? <StyleguideSection type="readme" title="Readme" isDefined={!!readme}>
					 	<div className="readme" dangerouslySetInnerHTML={{ __html: readme }}></div> 
					</StyleguideSection>
				: undefined }

			{ examples 
				? <div className="styleguide__section styleguide__section--examples">
						<Heading level="2">Examples</Heading>
						{ examples.map(e => 
								<StyleguideExample 
									tag={tag} 
									name={e.name} 
									data={e.data} 
									niceTitle={niceTitle} />) }
					</div>
				: undefined }
		</StyleguidePage>
	)
};