$(document).ready(function () {
	let targets = document.querySelectorAll('.anim');

	let options = {
		root: null,
		rootMargin: '5px',
		threshold: 0.4
	}

	let callback = function (entries, observer) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				observer.unobserve(entry.target);
			}
		});
	}
	let observer = new IntersectionObserver(callback, options);

	targets.forEach(target => {
		observer.observe(target);
	});

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

		targets.forEach(target => {
			observer.observe(target);
		});
	})
})