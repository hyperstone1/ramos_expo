$(document).ready(function () {
	let categoryBtn = $('.category-btn');
	let categoryMenu = $('.category-menu');
	categoryBtn.on('click', () => {
		if (categoryMenu.hasClass('show')) {
			categoryMenu.removeClass('show');
			categoryBtn.removeClass('show');
		} else {
			categoryMenu.addClass('show');
			categoryBtn.addClass('show');
		}
	});

	$(document).mouseup(function (e) {
		if (
			!categoryMenu.is(e.target) &&
			!categoryBtn.is(e.target) &&
			categoryMenu.has(e.target).length === 0 &&
			categoryBtn.has(e.target).length === 0
		) {
			categoryMenu.removeClass('show');
			categoryBtn.removeClass('show');
		}
	});
})