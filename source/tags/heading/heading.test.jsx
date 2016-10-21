module.exports = [{
	name: "Heading (Default)",
	component: (
		<Heading>Hello</Heading>
	),
	tests: (test, component) => {
		test.plan(4);
		test.equal(component.is('h1'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--h1'), true);
		test.equal(button.text(), 'Hello');
	}
}, {
	name: "Heading (tagName)",
	component: (
		<Heading level="3">Wowie Zowie</Heading>
	),
	tests: (test, component) => {
		test.plan(4);
		test.equal(component.is('h3'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--h3'), true);
		test.equal(button.text(), 'Wowie Zowie');
	}
}, {
	name: "Heading (className)",
	component: (
		<Heading className="super">Leg Shaking</Heading>
	),
	tests: (test, component) => {
		test.plan(4);
		test.equal(component.is('h1'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--h1'), true);
		test.equal(component.is('.super'), true);
		test.equal(button.text(), 'Leg Shaking');
	}
}, {
	name: "Heading (tagName/className)",
	component: (
		<Heading tagName="div" className="duper">Back Breaking</Heading>
	),
	tests: (test, component) => {
		test.plan(4);
		test.equal(component.is('div'), true);
		test.equal(component.is('.heading'), true);
		test.equal(component.is('.heading--default'), true);
		test.equal(component.is('.super'), true);
		test.equal(button.text(), 'Back Breaking');
	}
}];



module.exports = [{
	name: "Default",
	data: {
		children: "Hello World"
	}
}, {
	name: "Level 1",
	data: {
		tagName: "h1",
		children: "Hello World"
	}
},  {
	name: "Level 2 w/ added class",
	data: {
		tagName: "h2",
		className: "heading--underline",
		children: "Hello World"
	}
}];