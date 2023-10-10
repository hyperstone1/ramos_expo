import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './js/components/header';
import './js/components/footer';
import './js/components/form';
import './js/components/modal';
import './js/pages/home';
import './js/pages/projects';
import './js/pages/detail';
import './js/pages/services';
import './js/pages/stands';
// import './js/utils/map';
import './index.scss';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';

const thumbs = document.querySelectorAll('.banner__thumbs-img');
const backSlide = document.querySelector('.banner__main-img--back');
const sliderBanner = document.querySelector('.banner__slider');
const sliderBannerBtn = document.querySelector('.banner__main-btn');

const swiper1 = new Swiper('.banner__thumbs', {
  slidesPerView: 'auto',
  modules: [EffectFade],
});

const swiper2 = new Swiper(sliderBanner, {
  modules: [Navigation, EffectFade, Thumbs],
  slidesPerView: 'auto',
  spaceBetween: 100,
  speed: 1000,
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    el: swiper1,
  },
  navigation: {
    nextEl: '.banner__main-btn',
  },
  on: {
    realIndexChange: function (swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const activeDataId = Number(activeSlide.dataset.swiperSlideIndex);
      console.log(activeDataId);
      //   thumbs.forEach((thumb) => {
      thumbs.forEach((thumb) => {
        thumb.classList.remove('swiper-slide-active');
      });
      console.log(swiper);
      // Получаем реальный индекс активного слайда
      //   const activeRealIndex = swiper.realIndex;
      sliderBannerBtn.disabled = true;
      // Получаем следующие два слайда после активного
      let nextSlide1, nextSlide2;

      if (activeDataId === swiper.slides.length - 1) {
        // Активный слайд - последний слайд
        nextSlide1 = thumbs[0];
        nextSlide2 = thumbs[1];
      } else if (activeDataId === swiper.slides.length - 2) {
        // Активный слайд - предпоследний слайд
        nextSlide1 = thumbs[activeDataId + 1];
        nextSlide2 = thumbs[0];
      } else {
        // Активный слайд не последний и не предпоследний
        nextSlide1 = thumbs[activeDataId + 1];
        nextSlide2 = thumbs[activeDataId + 2];
      }
      const lastSlideIndex = (swiper2.slides.length - 1 + activeDataId) % swiper2.slides.length;
      // Проверяем, существуют ли следующие слайды
      if (nextSlide1 && nextSlide2) {
        // Ваши действия с следующими слайдами
        thumbs.forEach((item) => {
          item.classList.remove('next_1', 'next_2', 'last');
        });
        nextSlide1.classList.add('next_1');
        nextSlide2.classList.add('next_2');
        thumbs[lastSlideIndex].classList.add('last');
        // thumbs[activeDataId].classList.add('swiper-slide-active');
      }
      backSlide.classList.add('anim');
      setTimeout(() => {
        backSlide.classList.remove('anim');
        sliderBannerBtn.disabled = false;
      }, 590);
      //   swiper1.slideTo(thumbs[active]);
      //   })
    },
  },
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
  },
});
const swiper3 = new Swiper('.news__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    769: {
      enabled: false,
    },
  },
});

// const projectsSlider = new Swiper('.our_projects__slider', {
//   slidesPerView: 1,
// });
