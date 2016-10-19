module.exports = [{
	name: "Default",
	data: {
		children: "Hello World"
	}
}, {
	name: "Linked",
	data: {
		href: '#/',
		children: "Hello World"
	}
},  {
	name: "Alternative tag w/ extra class",
	data: {
		tagName: 'div',
		className: 'button--superduper',
		children: "Hello World"
	}
},  {
	name: "CTA Button",
	data: {
		tagName: 'div',
		type: 'cta',
		children: "Hello World"
	}
}];