import React from 'react';
import slug from 'slug';

import StyleguidePage from './page.jsx';
import StyleguideExample from './example.jsx';

import Heading from '../tags/heading/heading.jsx';

slug.charmap['/'] = '-';

export const StyleguideSection = ({
	type,
	isDefined,
	title,
	children
}) => (
	<div className={"sg-section sg-section--" + type + (isDefined ? " is-defined" : "")}>
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
	locals = {},
	tests
}) => {
	const niceTitle = 
		name
			.split('-')
			.map(n => n.substr(0, 1).toUpperCase() + n.substr(1))
			.join(' ');	

	const tagName = niceTitle.split(' ').join('');

	const slugy = name => slug(name);

	return (
		<StyleguidePage title={`${niceTitle} – Bandish Styleguide`} locals={locals}>
			<Heading level="1">{niceTitle}</Heading>
			
			{ readme
				? <StyleguideSection type="readme" title="Readme" isDefined={!!readme}>
					 	<div className="readme" dangerouslySetInnerHTML={{ __html: readme }}></div> 
					</StyleguideSection>
				: undefined }
	
			{ tests	
				? <div className="sg-section sg-section--tests sg-test">
						<div className="sg-test__header">
							<Heading level="2">Tests</Heading>
							
							<div className="sg-test__selector">
								{ tests.map(e => 
										<div><a
											href={'#' + slug(e.name)} 
											key={slug(e.name)} 
											value={slug(e.name)}>{e.name}</a></div>) }
							</div>
						</div>
							
						{ tests.map(e =>
								<StyleguideExample 
									key={slug(e.name)}
									slug={slug(e.name)}
									tagName={tagName} 
									exampleName={e.name}
									component={e.component} />) }
					</div>
				: undefined }
		</StyleguidePage>
	)
};