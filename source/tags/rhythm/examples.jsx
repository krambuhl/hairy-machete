// const children = () => [
// 	<div>abc</div>,
// 	<div>123</div>,
// 	<div>
// 		<div>9990</div>
// 		<div>3758</div>
// 		<div>2389</div>
// 	</div>
// ];

const children = 'bunnies!';

module.exports = [{
	name: 'normal rhythm',
	data: { 
		children: children
	}
}, {
	name: 'small rhythm',
	data: { 
		size: 'small',
		children: children
	}
}, {
	name: 'large rhythm',
	data: { 
		size: 'large',
		children: children
	}
}, {
	name: 'deep normal rhythm',
	data: { 
		deep: true,
		children: children
	}
}, {
	name: 'deep large rhythm',
	data: { 
		deep: true,
		size: 'large',
		children: children
	}
}]