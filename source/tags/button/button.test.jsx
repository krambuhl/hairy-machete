module.exports = [{
	name: "Button (Default)",
	example: <Button>Hello World</Button>,
	tests: (test, component) => {
		test.plan(4);
		test.equal(component.is('button'), true);
		test.equal(component.is('.button'), true);
		test.equal(component.is('.button--default'), true);
		test.equal(button.text(), 'Hello World');
	}
}, {
	name: "Button (href)",
	example: <Button href="#/">Hello World</Button>,
	tests: (test, component) => {
		test.plan(5);
		test.equal(component.is('a'), true);
		test.equal(component.is('.button'), true);
		test.equal(component.is('.button--link'), true);
		test.equal(component.prop('href'), '#/');
		test.equal(button.text(), 'Hello World');
	}
}, {
	name: "Button (tagName)",
	example: <Button tagName="div">Hello World</Button>,
	tests: (test, component) => {
		test.plan(4);
		test.equal(component.is('div'), true);
		test.equal(component.is('.button'), true);
		test.equal(component.is('.button--default'), true);
		test.equal(button.text(), 'Hello World');
	}
}, {
	name: "Button (tagName/className)",
	example: <Button tagName="div" className="button--superduper">Hello World</Button>,
	tests: (test, component) => {
		test.plan(5);
		test.equal(component.is('div'), true);
		test.equal(component.is('.button'), true);
		test.equal(component.is('.button--default'), true);
		test.equal(component.is('.button--superduper'), true);
		test.equal(button.text(), 'Hello World');
	}
}, {
	name: "Button (type)",
	example: <Button type="cta">Hello World</Button>,
	tests: (test, component) => {
		test.plan(3);
		test.equal(component.is('div'), true);
		test.equal(component.is('.button'), true);
		test.equal(component.is('.button--cta'), true);
		test.equal(component.prop('href'), '#/');
		test.equal(button.text(), 'Hello World');
	}
}, {
	name: "Button (type/link)",
	example: <Button href="#/" type="cta">Hello World</Button>,
	tests: (test, component) => {
		test.plan(3);
		test.equal(component.is('a'), true);
		test.equal(component.is('.button'), true);
		test.equal(component.is('.button--link'), true);
		test.equal(component.is('.button--cta'), true);
		test.equal(component.prop('href'), '#/');
		test.equal(button.text(), 'Hello World');
	}
}];

