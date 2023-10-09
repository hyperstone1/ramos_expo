$(document).ready(function () {
	$('.burger-btn').on('click', () => {
		$('.burger-menu').addClass('active');
		$('body').addClass('lock');
	});

	$('.link-menu-btn').on('click', () => {
		if ($('.link-menu').hasClass('show')) {
			$('.link-menu').removeClass('show');
			$('.link-menu-btn').removeClass('show');
		} else {
			$('.link-menu').addClass('show');
			$('.link-menu-btn').addClass('show');
		}
	});

	$('.lang-radio').each(function (index, element) {
		$(element).find('input').change(() => {
			for (let el of $('.lang-radio')) {
				$(el).removeClass('active');
			}
			$(element).addClass('active');
		});
	});

	$(document).mouseup(function (e) {
		if ($('.link-menu').has(e.target).length === 0) {
			$('.link-menu').removeClass('show');
			$('.link-menu-btn').removeClass('show');
		}
	});

	$(window).resize(closeBurgerMenu);
	$(window).scroll(backgroundHeader);
	backgroundHeader();
	closeBurgerMenu();
	$('.burger-menu-overlay').on('click', closeBurgerMenu);
	$('.burger-close-btn').on('click', closeBurgerMenu);
})

function closeBurgerMenu() {
	$('.burger-menu').removeClass('active');
	$('body').removeClass('lock');
}

function backgroundHeader() {
	if ($(window).scrollTop() > 1) {
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}
}