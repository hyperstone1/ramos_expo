$(document).ready(function () {
	$('.burger-btn').on('click', () => {
		$('.burger-menu').addClass('active');
		$('body').addClass('lock');
	})

	$('.burger-menu-overlay').on('click', closeBurgerMenu)
	$('.burger-close-btn').on('click', closeBurgerMenu)

	$('.lang-radio').each(function (index, element) {
		$(element).find('input').change(() => {
			for (let el of $('.lang-radio')) {
				$(el).removeClass('active');
			}
			$(element).addClass('active');
		})
	})
})

$(window).resize(closeBurgerMenu)
$(window).scroll(backgroundHeader)

function closeBurgerMenu() {
	$('.burger-menu').removeClass('active');
	$('body').removeClass('lock');
}

function backgroundHeader() {
	if ($(window).scrollTop() > 1) {
		$('.header').addClass('scroll')
	} else {
		$('.header').removeClass('scroll')
	}
}