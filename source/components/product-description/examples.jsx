const content = () => [
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet a, doloribus, ea tempore corrupti atque, architecto modi eum quisquam totam, doloremque aut provident nisi excepturi quibusdam. Facilis laudantium unde, deserunt dolores quidem sint beatae numquam explicabo ab ea quod possimus odit quam, repudiandae enim. Quas quia nesciunt nisi quidem molestias?</p>,
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae asperiores corrupti, dolore harum illum aperiam.</p>
];

module.exports = [{
	name: "Default",
	data: {
		title: "Bundle No. AAAA",
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nemo nam sed rem nihil aperiam blanditiis itaque quia soluta velit mollitia iure vero tempora quis doloremque, dolorem, veniam et, a, dolore excepturi aspernatur! Quisquam error nisi maiores, nihil libero aliquam soluta sed iusto distinctio veritatis eligendi, tempora animi molestiae quia!',
		href: '#/'
	}
}, {
	name: "Narrow",
	data: {
		title: "Bundle No. B",
		className: "product-description--narrow",
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nemo nam sed rem nihil aperiam blanditiis itaque quia soluta velit mollitia iure vero tempora quis doloremque, dolorem, veniam et, a, dolore excepturi aspernatur! Quisquam error nisi maiores, nihil libero aliquam soluta sed iusto distinctio veritatis eligendi, tempora animi molestiae quia!',
		href: '#/'
	}
}, {
	name: "Wide",
	data: {
		title: "Bundle No. C",
		className: "product-description--wide",
		children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nemo nam sed rem nihil aperiam blanditiis itaque quia soluta velit mollitia iure vero tempora quis doloremque, dolorem, veniam et, a, dolore excepturi aspernatur! Quisquam error nisi maiores, nihil libero aliquam soluta sed iusto distinctio veritatis eligendi, tempora animi molestiae quia!',
		href: '#/'
	}
}]