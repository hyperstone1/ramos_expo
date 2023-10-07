$(document).ready(function () {

	$(document).on('keyup', (evt) => {
		evt.keyCode === 27 ? closeModal() : null;
	})

	$('[data-modal="application"]').on('click', () => {
		$('.application-modal').addClass('active');
	});

	$('[data-modal]').on('click', () => {
		$('body').addClass('lock');
	})

	$('.modal-back').on('click', () => {
		closeModal()
	})

	$('.modal-exit').on('click', () => {
		closeModal()
	})

	$('.form').on('submit', (evt) => {
		evt.preventDefault();
		$(this).find('input').val('');
		$(this).find('textarea').val('');

		if ($('.modal').hasClass('active')) {
			switchModalContent()
		} else {
			$('.modal').addClass('active');
			$('body').addClass('lock');
			switchModalContent()
		}
	})

	function closeModal() {
		$('.modal').removeClass('active');
		$('body').removeClass('lock');
		$('.modal').find('.modal-content--first').addClass('active');
		$('.modal').find('.modal-content--second').removeClass('active');
	}

	function switchModalContent() {
		$('.modal').find('.modal-content--first').removeClass('active');
		$('.modal').find('.modal-content--second').addClass('active');
	}
})