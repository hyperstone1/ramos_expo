$(document).ready(function () {
	$('.category-btn').on('click', () => {
		if ($('.category-menu').hasClass('show')) {
			$('.category-menu').removeClass('show');
			$('.category-btn').removeClass('show');
		} else {
			$('.category-menu').addClass('show');
			$('.category-btn').addClass('show');
		}
	});

	$(document).mouseup(function (e) {
		if ($('.category-menu').has(e.target).length === 0) {
			$('.category-menu').removeClass('show');
			$('.category-btn').removeClass('show');
		}
	});
})