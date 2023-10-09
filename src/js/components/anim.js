$(document).ready(function () {

	let options = {
		root: null,
		rootMargin: '5px',
		threshold: 0.5
	}

	$(window).on('scroll', function () {
		let callback = function (entries, observer) {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
					observer.unobserve(entry.target);
				}
			});
		}
		let observer = new IntersectionObserver(callback, options);

		let targets = document.querySelectorAll('.anim');
		targets.forEach(target => {
			observer.observe(target);
		});
	})
})