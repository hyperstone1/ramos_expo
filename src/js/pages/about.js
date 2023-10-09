$(document).ready(function () {
	$('body').on('mousemove', (e) => {
		$('.about-intro__img').each(function (index, element) {
			let moving = $(element).data('set');
			let x = (e.clientX * moving) / 80;
			let y = (e.clientY * moving) / 50;

			$(element).css('transform', `translate(${x}px, ${y}px)`)
		});
	})
})