module.exports = [{
	name: 'Heading (default)',
	data: {
		children: 'Hello World'
	}
}, {
	name: 'Heading (level)',
	data: {
		level: '1',
		children: 'Hello World'
	}
},  {
	name: 'Heading (level/className)',
	data: {
		level: '2',
		className: 'heading--underline',
		children: 'Hello World'
	}
}, {
	name: 'Heading (level/type)',
	data: {
		level: '4',
		type: 'thin',
		children: 'Hello World'
	}
}, {
	name: 'Heading (level/type/tagName)',
	data: {
		tagName: 'div',
		level: '4',
		type: 'medium',
		children: 'Hello World'
	}
}];