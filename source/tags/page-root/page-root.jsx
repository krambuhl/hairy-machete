import React from 'react';
import styles from './page-root.css';

const PageRoot__Head = ({ children }) => (
	<head class="html__head">
		<meta charset="utf-8" />
		<title>{title}</title>
		<link rel="stylesheet" href="" />
		{children}
	</head>
);

const PageRoot__Foot = ({ children }) => (
	<div className="html__foot">
		<script src="/script" />
		{children}
	</div>
);

const PageRoot = ({ children }) => (
	<html>
	<PageRoot__Head />	
	<body>
		{children}
		<PageRoot__Foot />	
	</body>
	</html>
);

export default PageRoot;
export {
	PageRoot,
	PageRoot__Head,
	PageRoot__Foot
}