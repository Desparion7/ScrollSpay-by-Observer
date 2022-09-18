const navigationTag = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');

const options = {
	threshold: 0.5,
};

if (document.body.classList.contains('main-body')) {
	const watchScroll = (entrys) => {
		entrys.forEach((entry) => {
			const navTag = document.querySelector(`a[href='#${entry.target.id}'`);
			navTag.classList.remove('active');

			if (entry.isIntersecting) {
				navTag.classList.add('active');
			}
		});
	};

	const scrollSpy = new IntersectionObserver(watchScroll, options);

	sections.forEach((section) => {
		scrollSpy.observe(section);
	});
}
