import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';
$(document).ready(function () {
	function remToPx(remValue) {
		// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
		var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

		// Переводим значение из rem в px
		var pxValue = remValue * htmlFontSize;

		// Округляем значение до целых пикселей (по желанию)
		return Math.round(pxValue) + 'px';
	}
	const detailSwiperThumb = new Swiper(".detail-slider-thumb", {
		spaceBetween: `${remToPx(3)}`,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
	});
	const detailSwiper = new Swiper(".detail-slider-main", {
		modules: [Navigation, Thumbs],
		slidesPerView: 'auto',
		spaceBetween: `${remToPx(3)}`,
		thumbs: {
			swiper: detailSwiperThumb,
		},

		breakpoints: {
			320: {
				spaceBetween: `${remToPx(2.4)}rem`,
			},
			// Медиа-запрос для ширины больше 768px
			769: {
				spaceBetween: `${remToPx(3)}`,
			},
		},
	});
})