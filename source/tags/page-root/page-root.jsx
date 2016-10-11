import React from 'react';
import styles from './page-root.css';

const Root__Wrapper = ({ title, children }) => (
	<html>
		{children}
	</html>
);

const Root__Head = ({ title, children }) => (
	<head>
		<meta charset="utf-8" />
		<title>{title}</title>
		<link rel="stylesheet" href="/assets/bundle.css" />
		{children}
	</head>
);

const Root__Foot = ({ children }) => (
	<div>
		<script src="/assets/bundle.js" />
		{children}
	</div>
);

const PageRoot = ({ title, children }) => (
	<Root__Wrapper>
		<Root__Head title={title} />	
		<body>
			{children}
			<Root__Foot />	
		</body>
	</Root__Wrapper>
);


export default PageRoot;
export {
	PageRoot,
	Root__Wrapper,
	Root__Head,
	Root__Foot
}