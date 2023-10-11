/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/anim.js":
/*!***********************************!*\
  !*** ./src/js/components/anim.js ***!
  \***********************************/
/***/ (() => {

$(document).ready(function () {
  let targets = document.querySelectorAll('.anim');
  let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.4
  };
  let callback = function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  };
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
    };
    let observer = new IntersectionObserver(callback, options);
    targets.forEach(target => {
      observer.observe(target);
    });
  });
});

/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/components/form.js":
/*!***********************************!*\
  !*** ./src/js/components/form.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");

$(document).ready(function () {
  const phone = document.querySelectorAll('[type="tel"]');
  const maskOptions = {
    mask: '+{7} (000) 000-00-00'
  };
  phone.forEach(function (element) {
    const mask = (0,imask__WEBPACK_IMPORTED_MODULE_0__["default"])(element, maskOptions);
  });
  $(".personal-data input").click(function () {
    if ($(this).prop("checked")) {
      $(".submit-btn").removeAttr("disabled");
    } else {
      $(".submit-btn").attr("disabled", "disabled");
    }
  });
  $('.form').on('submit', evt => {
    evt.preventDefault();
    if (validationForm($(evt.currentTarget)) === true) {
      if ($('.modal').hasClass('active')) {
        switchModalContent();
      } else {
        $('.modal').addClass('active');
        $('body').addClass('lock');
        switchModalContent();
      }
      $(evt.currentTarget).find('input').val('');
      $(evt.currentTarget).find('textarea').val('');
    }
    ;
  });
});
function switchModalContent() {
  $('.modal').find('.modal-content--first').removeClass('active');
  $('.modal').find('.modal-content--second').addClass('active');
}
function validationForm(form) {
  let result = true;
  form.find('input').each(function (index, element) {
    removeError($(element));
    if ($(element).data('minLength')) {
      if ($(element).val().length < 18) {
        removeError($(element));
        createError($(element), `Минимальное кол-во символов: ${$(element).data('minLength')}`);
        result = false;
      }
    }
    if ($(element).data('required')) {
      if ($(element).val().length == 0) {
        removeError($(element));
        createError($(element), 'Заполните поле');
        result = false;
      }
    }
  });
  function removeError(input) {
    const parent = input.parent();
    if (parent.hasClass('error')) {
      parent.find('.error-text').remove();
      parent.removeClass('error');
    }
  }
  function createError(input, text) {
    const errorText = $(`<p class="error-text">${text}</p>`);
    input.parent().addClass('error').append(errorText);
  }
  return result;
}

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

$(document).ready(function () {
  $('.burger-btn').on('click', () => {
    $('.burger-menu').addClass('active');
    $('body').addClass('lock');
  });
  $('.lang-radio').each(function (index, element) {
    $(element).find('input').change(() => {
      for (let el of $('.lang-radio')) {
        $(el).removeClass('active');
      }
      $(element).addClass('active');
    });
  });

  //   $(document).mouseup(function (e) {
  //     if ($('.link-menu').has(e.target).length === 0) {
  //       $('.link-menu').removeClass('show');
  //       $('.link-menu-btn').removeClass('show');
  //     }
  //   });

  //   $('.link-menu-btn').on('click', () => {
  //     if ($('.link-menu').hasClass('show')) {
  //     	$('.link-menu').removeClass('show');
  //     	$('.link-menu-btn').removeClass('show');
  //     } else {
  //     	$('.link-menu').addClass('show');
  //     	$('.link-menu-btn').addClass('show');
  //     }

  //   });
  var linkMenu = $('.link-menu');
  var linkMenuBtn = $('.link-menu-btn');
  linkMenuBtn.click(function () {
    if (linkMenu.hasClass('show')) {
      linkMenu.removeClass('show');
      linkMenuBtn.removeClass('show');
    } else {
      linkMenu.addClass('show');
      linkMenuBtn.addClass('show');
    }
  });

  // Закрыть меню, если пользователь кликнул вне меню
  $(document).mouseup(function (e) {
    if (!linkMenu.is(e.target) && !linkMenuBtn.is(e.target) && linkMenu.has(e.target).length === 0 && linkMenuBtn.has(e.target).length === 0) {
      linkMenu.removeClass('show');
      linkMenuBtn.removeClass('show');
    }
  });
  $(window).resize(closeBurgerMenu);
  $(window).scroll(backgroundHeader);
  backgroundHeader();
  closeBurgerMenu();
  $('.burger-menu-overlay').on('click', closeBurgerMenu);
  $('.burger-close-btn').on('click', closeBurgerMenu);
});
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

/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ (() => {

$(document).ready(function () {
  $(document).on('keyup', evt => {
    evt.keyCode === 27 ? closeModal() : null;
  });
  $('[data-modal="application"]').on('click', () => {
    $('.application-modal').addClass('active');
  });
  $('[data-modal]').on('click', () => {
    $('body').addClass('lock');
  });
  $('.modal-back').on('click', closeModal);
  $('.modal-exit').on('click', closeModal);
  function closeModal() {
    $('.modal').removeClass('active');
    $('body').removeClass('lock');
    $('.modal').find('.modal-content--first').addClass('active');
    $('.modal').find('.modal-content--second').removeClass('active');
  }
});

/***/ }),

/***/ "./src/js/pages/about.js":
/*!*******************************!*\
  !*** ./src/js/pages/about.js ***!
  \*******************************/
/***/ (() => {

$(document).ready(function () {
  $('body').on('mousemove', e => {
    $('.about-intro__img').each(function (index, element) {
      let moving = $(element).data('set');
      let x = e.clientX * moving / 80;
      let y = e.clientY * moving / 50;
      $(element).css('transform', `translate(${x}px, ${y}px)`);
    });
  });
});

/***/ }),

/***/ "./src/js/pages/detail.js":
/*!********************************!*\
  !*** ./src/js/pages/detail.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");



$(document).ready(function () {
  function remToPx(remValue) {
    // Получаем текущий базовый размер шрифта (font-size) из элемента <html>
    var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Переводим значение из rem в px
    var pxValue = remValue * htmlFontSize;

    // Округляем значение до целых пикселей (по желанию)
    return Math.round(pxValue) + 'px';
  }
  const detailSwiperThumb = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".detail-slider-thumb", {
    spaceBetween: `${remToPx(3)}`,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true
  });
  const detailSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".detail-slider-main", {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Thumbs],
    slidesPerView: 'auto',
    spaceBetween: `${remToPx(3)}`,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: detailSwiperThumb
    },
    breakpoints: {
      320: {
        spaceBetween: `${remToPx(2.4)}rem`
      },
      // Медиа-запрос для ширины больше 768px
      769: {
        spaceBetween: `${remToPx(3)}`
      }
    }
  });
});

/***/ }),

/***/ "./src/js/pages/home.js":
/*!******************************!*\
  !*** ./src/js/pages/home.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/pages/projects.js":
/*!**********************************!*\
  !*** ./src/js/pages/projects.js ***!
  \**********************************/
/***/ (() => {

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
});

/***/ }),

/***/ "./src/js/pages/services.js":
/*!**********************************!*\
  !*** ./src/js/pages/services.js ***!
  \**********************************/
/***/ (() => {

const taskShow = document.querySelectorAll('.tasks__content-show');
taskShow.forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.tasks__content');
    const info = container.querySelector('.tasks__content-info');
    const infoItems = container.querySelectorAll('.tasks__content-info--text');
    // const height = info.offsetHeight;
    infoItems.forEach(item => {
      item.style.display = 'flex';
    });
    btn.style.display = 'none';
    // console.log(height);
  });
});

/***/ }),

/***/ "./src/js/pages/stands.js":
/*!********************************!*\
  !*** ./src/js/pages/stands.js ***!
  \********************************/
/***/ (() => {

// $('.our_projects__list-item').accordion({
// 	heightStyle: 'content'
// });
document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.our_projects__list-item--description');
  const projects = document.querySelectorAll('.our_projects__list-item--title');
  const imagesProjects = document.querySelectorAll('.our_projects__list-img');
  const projectsBtns = document.querySelectorAll('.our_projects__list-item--btn');
  let isProcessingClick = false;
  const width = window.innerWidth;
  projects.forEach(project => {
    project.addEventListener('click', async e => {
      if (isProcessingClick) {
        return;
      }
      isProcessingClick = true;
      try {
        const container = e.target.closest('.our_projects__list--container');
        if (container) {
          const panel = container.querySelector('.our_projects__list-item--description');
          if (panel) {
            panels.forEach(item => {
              const isActivePanel = item === container.querySelector('.our_projects__list-item--description');
              const btn = container.querySelector('.our_projects__list-item--btn');
              if (isActivePanel) {
                const computedStyles = window.getComputedStyle(item);
                if (computedStyles.maxHeight === '0px' || computedStyles.maxHeight === '0') {
                  item.style.webkitLineClamp = '4';
                  item.style.maxHeight = item.scrollHeight + 'px';
                  if (width < 769) {
                    projectsBtns.forEach(item => {
                      item.style.display = 'none';
                    });
                    btn.style.display = 'block';
                    btn.addEventListener('click', () => {
                      console.log('btn clicj');
                      item.style.webkitLineClamp = 'inherit';
                      btn.style.display = 'none';
                    });
                  }
                } else {
                  item.style.maxHeight = 0;
                  if (width < 769) {
                    btn.style.display = 'none';
                  }
                }
              } else {
                item.style.maxHeight = 0;
              }
            });
          } else {
            console.error('Панель не найдена в контейнере');
          }
          projects.forEach(item => {
            console.log(item === project);
            const container = item.closest('.our_projects__list-item');
            const img = container.querySelector('.our_projects__list-img');
            const btn = container.querySelector('.our_projects__list-item--btn');
            console.log('img: ', img);
            console.log('container: ', container);
            if (item === project) {
              container.classList.toggle('active');
              img.classList.toggle('visible');
            } else {
              container.classList.remove('active');
              img.classList.remove('visible');
              btn.style.display = 'none';
            }
          });
        } else {
          console.error('Контейнер не найден для проекта');
        }
      } finally {
        isProcessingClick = false;
      }
    });
  });

  //   projects.forEach((project) => {
  //     project.addEventListener('click', (e) => {
  //       const container = e.target.closest('.our_projects__list--container');

  //       if (container) {
  //         const panel = container.querySelector('.our_projects__list-item--description');
  //         if (panel) {
  //           panels.forEach((item) => {
  //             const isActivePanel =
  //               item === container.querySelector('.our_projects__list-item--description');

  //             if (isActivePanel) {
  //               const computedStyles = window.getComputedStyle(item);
  //               if (computedStyles.maxHeight === '0px' || computedStyles.maxHeight === '0') {
  //                 item.style.maxHeight = item.scrollHeight + 'px';
  //               } else {
  //                 item.style.maxHeight = 0;
  //               }
  //             } else {
  //               item.style.maxHeight = 0;
  //             }
  //           });
  //         } else {
  //           console.error('Панель не найдена в контейнере');
  //         }
  //         projects.forEach((item) => {
  //           console.log(item === project);
  //           if (item === project) {
  //             item.classList.toggle('active');
  //           } else {
  //             item.classList.remove('active');
  //           }
  //         });
  //       } else {
  //         console.log()
  //         console.error('Контейнер не найден для проекта');
  //       }
  //     });
  //   });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./node_modules/swiper/modules/effect-fade.css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./node_modules/swiper/modules/effect-fade.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.swiper-fade.swiper-free-mode .swiper-slide {
  transition-timing-function: ease-out;
}

.swiper-fade .swiper-slide {
  pointer-events: none;
  transition-property: opacity;
}

.swiper-fade .swiper-slide .swiper-slide {
  pointer-events: none;
}

.swiper-fade .swiper-slide-active {
  pointer-events: auto;
}

.swiper-fade .swiper-slide-active .swiper-slide-active {
  pointer-events: auto;
}`, "",{"version":3,"sources":["webpack://./node_modules/swiper/modules/effect-fade.css","webpack://./../../%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/ramos_expo/node_modules/swiper/modules/effect-fade.css"],"names":[],"mappings":"AAAA;EACE,oCAAA;ACCF;;ADCA;EACE,oBAAA;EACA,4BAAA;ACEF;;ADAA;EACE,oBAAA;ACGF;;ADDA;EACE,oBAAA;ACIF;;ADFA;EACE,oBAAA;ACKF","sourcesContent":[".swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n",".swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./node_modules/swiper/swiper.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./node_modules/swiper/swiper.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:application/font-woff;charset=utf-8;base64, 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 */ "data:application/font-woff;charset=utf-8;base64, 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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/**
 * Swiper 10.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2023
 */
/* FONT_START */
@font-face {
  font-family: "swiper-icons";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}

:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  overflow: clip;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}

.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: ease;
  transition-timing-function: initial;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}

.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}

.swiper-horizontal {
  touch-action: pan-y;
}

.swiper-vertical {
  touch-action: pan-x;
}

.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}

.swiper-slide-invisible-blank {
  visibility: hidden;
}

/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}

.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}

.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}

.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}

.swiper-3d {
  perspective: 1200px;
}

.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}

/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}

.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}

.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}

.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}

.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}

.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: "";
  flex-shrink: 0;
  order: 9999;
}

.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-left: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-top: var(--swiper-centered-offset-before);
}

.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}

/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}

.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}

.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}

.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid #007aff;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}

.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}

.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}

.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}

@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */`, "",{"version":3,"sources":["webpack://./node_modules/swiper/swiper.css","webpack://./../../%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/ramos_expo/node_modules/swiper/swiper.css"],"names":[],"mappings":"AAAA;;;;;;;;;;EAAA;AAYA,eAAA;AACA;EACE,2BAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;ACAF;ADEA,aAAA;AACA;EACE,6BAAA;EACA;;;GAAA;ACGF;;ADEA;EACE,kBAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;ACCF;;ADCA;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,6BAAA;EACA,UAAA;EACA,cAAA;ACEF;;ADAA;EACE,sBAAA;ACGF;;ADDA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,aAAA;EACA,8BAAA;EACA,gCAAA;EAAA,mCAAA;EAAA,qFAAA;EACA,uBAAA;ACIF;;ADFA;;;EAGE,iCAAA;ACKF;;ADHA;EACE,mBAAA;ACMF;;ADJA;EACE,mBAAA;ACOF;;ADLA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,8BAAA;EACA,cAAA;ACQF;;ADNA;EACE,kBAAA;ACSF;;ADPA,gBAAA;AACA;;EAEE,YAAA;ACUF;;ADRA;EACE,uBAAA;EACA,sCAAA;ACWF;;ADTA;EACE,wBAAA;EAEQ,2BAAA;ACYV;;ADVA,eAAA;AACA;EACE,mBAAA;ACaF;;ADXA;EACE,4BAAA;ACcF;;ADZA;EACE,mBAAA;ACeF;;ADbA;;EAEE,4BAAA;ACgBF;;ADdA,aAAA;AACA;EACE,cAAA;EACA,qBAAA;EACA,gBAAA;EACA,wBAAA;EACA,mCAAA;ACiBF;;ADfA;EACE,aAAA;ACkBF;;ADhBA;EACE,8BAAA;ACmBF;;ADjBA;EACE,6BAAA;ACoBF;;ADlBA;EACE,6BAAA;ACqBF;;ADnBA;EACE,sBAAA;ACsBF;;ADpBA;EACE,uBAAA;ACuBF;;ADrBA;EACE,WAAA;EACA,cAAA;EACA,WAAA;ACwBF;;ADtBA;EACE,gCAAA;EACA,wBAAA;ACyBF;;ADvBA;EACE,iDAAA;AC0BF;;ADxBA;EACE,YAAA;EACA,eAAA;EACA,0CAAA;AC2BF;;ADzBA;EACE,gDAAA;AC4BF;;AD1BA;EACE,WAAA;EACA,cAAA;EACA,2CAAA;AC6BF;;AD3BA,uBAAA;AACA,eAAA;AACA;;;;;;;;;;EAUE,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;EACA,WAAA;AC8BF;;AD5BA;EACE,+BAAA;AC+BF;;AD7BA;EACE,gFAAA;ACgCF;;AD9BA;EACE,iFAAA;ACiCF;;AD/BA;EACE,+EAAA;ACkCF;;ADhCA;EACE,kFAAA;ACmCF;;ADjCA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,sBAAA;EACA,yBAAA;EAAA,0EAAA;EACA,kBAAA;EACA,6BAAA;ACoCF;;ADlCA;;EAEE,mDAAA;ACqCF;;ADnCA;EACE,8BAAA;ACsCF;;ADpCA;EACE,8BAAA;ACuCF;;ADrCA;EACE;IACE,uBAAA;ECwCF;EDtCA;IACE,yBAAA;ECwCF;AACF;ADtCA,qBAAA","sourcesContent":["/**\n * Swiper 10.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 28, 2023\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url('data:application/font-woff;charset=utf-8;base64, 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');\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  overflow: clip;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n","/**\n * Swiper 10.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 28, 2023\n */\n/* FONT_START */\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  overflow: clip;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n\n.swiper-vertical {\n  touch-action: pan-x;\n}\n\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n\n.swiper-3d {\n  perspective: 1200px;\n}\n\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: \"\";\n  flex-shrink: 0;\n  order: 9999;\n}\n\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./src/index.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./src/index.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/gilroy/Gilroy-Light.ttf */ "./src/assets/fonts/gilroy/Gilroy-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/gilroy/Gilroy-Regular.ttf */ "./src/assets/fonts/gilroy/Gilroy-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/gilroy/Gilroy-Medium.ttf */ "./src/assets/fonts/gilroy/Gilroy-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/gilroy/Gilroy-Bold.ttf */ "./src/assets/fonts/gilroy/Gilroy-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/akrobat/Akrobat-Light.ttf */ "./src/assets/fonts/akrobat/Akrobat-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/akrobat/Akrobat-Regular.ttf */ "./src/assets/fonts/akrobat/Akrobat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/akrobat/Akrobat-Bold.ttf */ "./src/assets/fonts/akrobat/Akrobat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/akrobat/Akrobat-ExtraBold.ttf */ "./src/assets/fonts/akrobat/Akrobat-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/avanti/avanti-4.ttf */ "./src/assets/fonts/avanti/avanti-4.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/checkbox-arrow.svg */ "./src/assets/images/checkbox-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/burger-bg.svg */ "./src/assets/images/burger-bg.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/f-button-bg.svg */ "./src/assets/images/f-button-bg.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Gilroy*/
@font-face {
  font-family: "Gilroy";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
@font-face {
  font-family: "Gilroy";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
}
@font-face {
  font-family: "Gilroy";
  font-weight: 500;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
}
@font-face {
  font-family: "Gilroy";
  font-weight: 700;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("truetype");
}
/*Akrobat*/
@font-face {
  font-family: "Akrobat";
  font-weight: 300;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("truetype");
}
@font-face {
  font-family: "Akrobat";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("truetype");
}
@font-face {
  font-family: "Akrobat";
  font-weight: 700;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("truetype");
}
@font-face {
  font-family: "Akrobat";
  font-weight: 800;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("truetype");
}
@font-face {
  font-family: "Avanti";
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("truetype");
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Gilroy";
  font-size: 0.5208335vw;
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
}

body {
  font-style: normal;
  font-weight: normal;
  -webkit-animation: bugfix infinite 1s;
  line-height: 1.2;
  margin: 0;
  padding: 0;
  color: #242424;
  background-color: #efefef;
}

input,
textarea {
  -webkit-animation: bugfix infinite 1s;
  line-height: inherit;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
}

a {
  color: inherit;
}

a,
a:hover {
  -webkit-text-decoration: none;
  text-decoration: none;
}

button,
input,
a,
textarea {
  outline: none;
  cursor: pointer;
  font: inherit;
}

button:focus,
input:focus,
a:focus,
textarea:focus {
  outline: none;
}

button:active,
input:active,
a:active,
textarea:active {
  outline: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font: inherit;
  margin: 0;
  padding: 0;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

button {
  border: none;
  color: inherit;
  font: inherit;
  text-align: inherit;
  padding: 0;
  background-color: transparent;
}

ul {
  padding: 0;
  margin: 0;
}

ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.container {
  width: 100%;
  padding: 0 15rem;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

section {
  margin-bottom: 18rem;
}

@media (max-width: 48em) {
  html {
    font-size: 5px;
    font-size: 1.5625vw;
    font-size: 1.3333333333vw;
    -webkit-text-size-adjust: none;
  }
  body {
    -webkit-text-size-adjust: none;
  }
  section {
    margin-bottom: 18rem;
  }
  .container {
    padding: 0 3rem;
    width: 100%;
  }
}
html {
  scroll-behavior: smooth;
}

.title {
  font-family: "Akrobat";
  color: #242424;
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 10rem;
}

stop {
  transition: 0.4s ease;
}

.btn {
  position: relative;
  display: flex;
  width: 16.6rem;
  height: 16.6rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.btn--text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.btn svg {
  width: 100%;
  height: 100%;
}
.btn svg path {
  -webkit-transition: fill 0.4s ease;
  -moz-transition: fill 0.4s ease;
  -o-transition: fill 0.4s ease;
}
.btn:hover svg path {
  transition: fill 0.4s ease-in-out;
}
.btn:hover svg stop {
  stop-color: #fccb17;
}

.text--opacity {
  color: transparent;
  -webkit-text-stroke: 1.2px #242424;
  text-stroke: 1.2px #242424;
}

.long-btn {
  color: #e84b0f;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem; /* 133.333% */
  transition: background 0.2s ease-out, color 0.2s ease-out;
  padding: 1.4rem 2.4rem;
  border-radius: 10rem;
  border: 0.1rem solid #fe921f;
  display: inline-flex;
  align-items: center;
  gap: 2.4rem;
}
.long-btn span {
  display: block;
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  transform: rotate(45deg);
}
.long-btn span::after {
  content: "";
  width: 1rem;
  height: 1rem;
  background-color: #e84b0f;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transition: background 0.2s ease-out;
  transform: translate(-50%, -50%);
}
.long-btn:hover, .long-btn:focus-visible {
  transition: background 0.2s ease-out, color 0.2s ease-out;
  background-color: #e84b0f;
  color: #fff;
}
.long-btn:hover span::after, .long-btn:focus-visible span::after {
  background-color: #fff;
  transition: background 0.2s ease-out;
}
.long-btn:disabled {
  cursor: default;
  background-color: #e6e6e6;
  color: #bebebe;
  border: 0.1rem solid #bebebe;
}
.long-btn:disabled span::after {
  background-color: #bebebe;
}

.content {
  width: 120.6rem;
}
.content_container {
  display: flex;
  justify-content: space-between;
}

.description {
  color: #9d9d9d;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
}

.section_name {
  margin-top: 3.6rem;
  flex: 1;
  color: #e7284a;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}

.subtitle {
  color: #242424;
  font-family: "Akrobat";
  font-size: 3.4rem;
  font-weight: 700;
  line-height: normal;
}

.anim.show .anim-el {
  transition: transform 1s ease-out, opacity 1s ease-in;
  transform: translateX(0);
  opacity: 1;
}
.anim-wrapper {
  overflow: hidden;
  flex: 1;
}

.anim-el {
  transform: translateX(-100%);
  opacity: 0;
}

.form__title {
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem; /* 133.333% */
  margin-bottom: 5rem;
}
.form__content {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.form__personal-data {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.form-item {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.form-item__label {
  width: 38.2rem;
}
.form-item--width--100 .form-item__label {
  width: 100%;
}

.label-input {
  cursor: pointer;
  position: relative;
}
.label-input.error input {
  border: 0.1rem solid #e7284a;
}
.label-input__placeholder {
  margin-bottom: 0.8rem;
  color: #9d9d9d;
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
}

.error-text {
  color: #e7284a;
  font-size: 1.4rem;
  margin-top: 0.5rem;
  position: absolute;
  right: 0;
}

.input {
  width: 100%;
  color: #242424;
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
  border: 0.1rem solid #9d9d9d;
  padding: 1.4rem 2rem;
}
.input:focus-visible {
  border: 0.1rem solid #242424;
}
.input::-moz-placeholder {
  color: #9d9d9d;
}
.input::placeholder {
  color: #9d9d9d;
}

.textarea {
  width: 100%;
  resize: none;
  height: 5rem;
  color: #242424;
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
  border: 0.1rem solid #9d9d9d;
  padding: 1.4rem 2rem 0 2rem;
}
.textarea:focus-visible {
  border: 0.1rem solid #242424;
}
.textarea::-moz-placeholder {
  color: #9d9d9d;
}
.textarea::placeholder {
  color: #9d9d9d;
}

.label-text {
  color: #1a1a1a;
  font-size: 1.8rem;
  line-height: normal;
}

.personal-data__text a {
  -webkit-text-decoration: underline;
  text-decoration: underline;
  color: #fe921f;
}

.label-checkbox input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  position: absolute;
}
.label-checkbox input:checked + .custom-checkbox {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) center/1.5rem no-repeat;
}

.custom-checkbox {
  width: 3rem;
  height: 3rem;
  display: block;
  cursor: pointer;
  border: 0.1rem solid #fe921f;
}

main {
  padding-top: 13.3rem;
  overflow: hidden;
}

body.lock {
  touch-action: none;
  overflow: hidden;
}

@media (max-width: 48em) {
  .title {
    margin-bottom: 6.4rem;
    color: #242424;
    font-size: 5.6rem;
    font-weight: 800;
    line-height: 1;
  }
  .btn {
    width: 24.4rem;
    height: 24.4rem;
    font-size: 2.8rem;
  }
  .long-btn {
    font-size: 3.2rem;
    line-height: normal; /* 133.333% */
    padding: 2rem 4.8rem;
    border-radius: 10rem;
    border: 0.2rem solid #fe921f;
    gap: 4.8rem;
  }
  .long-btn span {
    width: 4.8rem;
    height: 4.8rem;
  }
  .long-btn span::after {
    width: 2rem;
    height: 2rem;
  }
  .subtitle {
    font-size: 4.8rem;
  }
  .description {
    font-size: 3.2rem;
  }
  .content {
    width: 100%;
  }
  .section_name {
    margin-top: 0;
    flex: 1;
    font-size: 2.8rem;
  }
  .block_name {
    margin-bottom: 2.4rem;
  }
  .form__title {
    font-size: 3.2rem;
    margin-bottom: 4rem;
    line-height: normal;
  }
  .form__content {
    margin-bottom: 6.4rem;
    gap: 2.4rem;
  }
  .form__personal-data {
    gap: 2rem;
  }
  .form-item {
    align-items: flex-start;
    flex-direction: column;
    gap: 2.4rem;
  }
  .form-item__label {
    width: 100%;
  }
  .label-input__placeholder {
    margin-bottom: 0.8rem;
    font-size: 3.2rem;
  }
  .error-text {
    font-size: 2.4rem;
    margin-top: 0;
  }
  .input {
    font-size: 3.2rem;
    border: 0.2rem solid #9d9d9d;
    padding: 2.4rem 4rem;
  }
  .input:focus-visible {
    border: 0.2rem solid #242424;
  }
  .textarea {
    height: 22.6rem;
    font-size: 3.2rem;
    border: 0.2rem solid #9d9d9d;
    padding: 2.4rem 4rem;
  }
  .textarea:focus-visible {
    border: 0.2rem solid #242424;
  }
  .label-text {
    font-size: 3.2rem;
  }
  .personal-data__text a {
    display: flex;
  }
  .label-checkbox input:checked + .custom-checkbox {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) center/3rem no-repeat;
  }
  .custom-checkbox {
    width: 6rem;
    height: 6rem;
    border: 0.2rem solid #fe921f;
  }
  .content_container {
    flex-direction: column;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
}
.header.scroll {
  background-color: #efefef;
  border-bottom: 0.1rem solid #c7c7c7;
}
.header__inner {
  display: flex;
  padding: 3.1rem 0;
}
@media (max-width: 48em) {
  .header__inner.desktop {
    display: none;
  }
}
.header__inner.mobile {
  display: none;
}
@media (max-width: 48em) {
  .header__inner.mobile {
    display: flex;
  }
}
.header__left {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  gap: 3.2rem;
}
.header__logo {
  width: 15rem;
  height: 7.1rem;
}
.header__logo img {
  width: 100%;
  height: auto;
  -o-object-fit: contain;
     object-fit: contain;
}
.header__right {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-left: 20.3rem;
}

.nav__link {
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.nav__link a {
  transition: color 0.2s ease-out;
}
.nav__link a:hover, .nav__link a:focus-visible {
  transition: color 0.2s ease-out;
  color: #fe921f;
}

.header-right__nav {
  display: flex;
  align-items: center;
  gap: 3.2rem;
}

.link-menu {
  position: absolute;
  top: 2.1rem;
  left: -50%;
  width: 6.4rem;
  height: 9.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear, visibility 0.1s linear 0.2s;
}
.link-menu.show {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s linear;
}
.link-menu__inner {
  width: 100%;
  min-height: 8.4rem;
  box-shadow: inset 0 0 0 0.1rem #242424;
  background-color: #efefef;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.link-menu-btn {
  position: relative;
}
.link-menu-btn.show button {
  transition: color 0.2s ease-out;
  color: #fe921f;
}
.link-menu-btn.show button svg path {
  transition: fill 0.2s ease-out;
  fill: #fe921f;
}
.link-menu-btn.show span {
  transition: transform 0.2s ease-in;
  transform: rotate(-180deg);
}
.link-menu-btn button {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  transition: color 0.2s ease-out;
}
.link-menu-btn button span {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in;
}
.link-menu-btn button span svg {
  width: 1.2707rem;
  height: 0.7061rem;
}
.link-menu-btn button span svg path {
  transition: fill 0.2s ease-out;
}
.link-menu-btn button:hover, .link-menu-btn button:focus-visible {
  transition: color 0.2s ease-out;
  color: #fe921f;
}
.link-menu-btn button:hover svg path, .link-menu-btn button:focus-visible svg path {
  transition: fill 0.2s ease-out;
  fill: #fe921f;
}

.lang-radio {
  cursor: pointer;
}
.lang-radio input {
  visibility: hidden;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  position: absolute;
}
.lang-radio--desktop.active p {
  color: #fe921f;
}
.lang-radio--desktop p {
  color: #242424;
}
.lang-radio--desktop p:hover {
  color: #fe921f;
}

@media (max-width: 48em) {
  .header {
    background-color: #efefef;
  }
  .header__inner {
    padding: 2.4rem 0;
    justify-content: space-between;
  }
  .header__left {
    flex: 0;
  }
  .header__logo {
    width: 18.8rem;
    height: 8.8rem;
  }
  .header__right {
    margin-left: 0;
  }
  .header__burger-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: transform 0.5s ease-out 0.2s;
    transform: translate(-100%);
  }
  .header__burger-menu.active {
    transition: transform 0.5s ease-out;
    transform: translate(0);
  }
  .header__burger-menu.active .burger-menu__overlay {
    transition: opacity 0.3s linear 0.4s;
    opacity: 0.4;
  }
  .header-left__burger {
    gap: 0.7rem;
    width: 8.8rem;
    height: 8.8rem;
  }
  .burger-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_10___}) center/contain no-repeat;
  }
  .burger-btn span {
    display: block;
    width: 3.9rem;
    height: 0.3rem;
    background-color: #fff;
    border-radius: 10rem;
  }
  .burger-menu__inner {
    position: relative;
    z-index: 1002;
    height: 100%;
    width: 59rem;
    background: #efefef;
    padding: 6.4rem 4.8rem 6.4rem 3.2rem;
  }
  .burger-menu__close {
    position: absolute;
    top: 4.8rem;
    right: 4.8rem;
  }
  .burger-menu__nav {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    padding-bottom: 5.6rem;
    border-bottom: 0.2rem solid #9d9d9d;
  }
  .burger-menu__overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(335deg, #d61607 4.71%, #f87717 50.89%, #fece24 83.73%);
    transition: opacity 0.2s linear;
  }
  .burger-menu__info {
    padding: 5.6rem 0;
    border-bottom: 0.2rem solid #9d9d9d;
  }
  .burger-menu__info-content {
    margin-bottom: 5.6rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .burger-menu__info-item {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
  .burger-menu__info-item svg {
    width: 4.8rem;
    height: 4.8rem;
  }
  .burger-menu__info-item span {
    color: #242424;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .burger-menu__info-social {
    display: flex;
    align-items: center;
    gap: 3.2rem;
  }
  .burger-menu__social-item svg {
    width: 6rem;
    height: 6rem;
  }
  .burger-menu__lang {
    display: flex;
    align-items: center;
    padding-top: 5.6rem;
    gap: 3.2rem;
  }
  .burger-menu__lang-item {
    display: flex;
    align-items: center;
  }
  .header-right__call {
    width: 8.8rem;
    height: 8.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px #fe921f;
  }
  .header-right__call svg {
    width: 50%;
    height: 50%;
  }
  .header-right__call:hover {
    background-color: #e84b0f;
  }
  .header-right__call:hover svg path {
    fill: #fff;
  }
  .nav__link {
    font-size: 3.2rem;
  }
  .lang-radio.active p {
    color: #242424;
  }
  .lang-radio p {
    color: #9d9d9d;
    font-size: 3.2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
}
.footer__top {
  padding-bottom: 5rem;
  display: flex;
  align-items: flex-end;
  border-bottom: 0.1rem solid #9d9d9d;
  gap: 12.6rem;
}
.footer__bottom {
  padding: 5rem 0;
  display: flex;
  justify-content: space-between;
}

.footer-top__logo {
  width: 15rem;
  height: 7.1rem;
}
.footer-top__nav {
  display: flex;
  align-items: center;
  gap: 3.6rem;
  flex: 1 1 auto;
}
.footer-top__social {
  gap: 1.5rem;
}

.social {
  display: flex;
  align-items: center;
}
.social__item {
  display: block;
  width: 3rem;
  height: 3rem;
}
.social__item svg {
  width: 100%;
  height: 100%;
}

.footer-bottom__copyright {
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.footer-bottom__info {
  gap: 7rem;
}

.info {
  display: flex;
  align-items: center;
}
.info__item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.info__item span {
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.info__item svg {
  width: 2.4rem;
  height: 2.4rem;
}

@media (max-width: 48em) {
  .footer {
    overflow: hidden;
  }
  .footer__top {
    padding-bottom: 5.6rem;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 0.2rem solid #9d9d9d;
    gap: 5.6rem;
  }
  .footer__bottom {
    padding: 5.6rem 0;
  }
  .footer-top__logo {
    width: 18.8rem;
    height: 8.8rem;
  }
  .footer-top__nav {
    align-items: flex-start;
    flex-direction: column;
    gap: 3.2rem;
    flex: 0;
  }
  .footer-top__social {
    gap: 3.2rem;
  }
  .social__item {
    width: 6rem;
    height: 6rem;
  }
  .footer-bottom__copyright {
    font-size: 3.2rem;
    width: 53.6rem;
  }
  .footer-bottom__info {
    gap: 3.2rem;
  }
  .info.mobile {
    display: flex;
    flex-direction: column;
  }
  .info__item {
    gap: 2.4rem;
  }
  .info__item span {
    font-size: 3.6rem;
  }
  .info__item svg {
    width: 4.8rem;
    height: 4.8rem;
  }
}
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1010;
  width: 100%;
  height: 100vh;
}
.modal.active {
  display: block;
}
.modal-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(239, 239, 239, 0.1);
  -webkit-backdrop-filter: blur(1.75rem);
          backdrop-filter: blur(1.75rem);
}
.modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 0.1rem solid #242424;
  background: #efefef;
  padding: 10rem;
}
.modal-wrapper::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border: 0.1rem solid #242424;
  transform: rotate(-3.741deg);
}
.modal-exit {
  cursor: pointer;
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  width: 3.2rem;
  height: 3.2rem;
}
.modal-exit svg {
  width: 100%;
  height: 100%;
}
.modal-content {
  display: none;
  visibility: hidden;
}
.modal-content.active {
  display: block;
  visibility: visible;
}

.application-modal__content {
  width: 38.2rem;
}
.application-modal__content.modal-content--second {
  text-align: center;
}
.application-modal__content.modal-content--second .application-modal__header {
  margin: 0 auto;
  width: 31.3rem;
}
.application-modal__header {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 28.7rem;
  margin-bottom: 3.2rem;
}
.application-modal__form-item {
  margin-bottom: 3.2rem;
}
.application-modal__btn {
  position: absolute;
  bottom: -8.3rem;
  left: 50%;
  transform: translate(-50%);
}
.application-modal__btn .btn--text {
  text-wrap: nowrap;
}

@media (max-width: 48em) {
  .modal-wrapper {
    border: 0.2rem solid #242424;
    padding: 12rem 4.8rem;
    width: 66rem;
  }
  .modal-wrapper::after {
    border: 0.2rem solid #242424;
    transform: rotate(-1.914deg);
  }
  .modal-exit {
    top: 3.2rem;
    right: 3.2rem;
    width: 4rem;
    height: 4rem;
  }
  .application-modal__content {
    width: 100%;
  }
  .application-modal__content.modal-content--second .application-modal__header {
    margin: 0;
    width: 100%;
  }
  .application-modal__header {
    gap: 4rem;
    width: 100%;
    margin-bottom: 4.8rem;
  }
  .application-modal__form-item {
    margin-bottom: 4.8rem;
  }
  .application-modal__btn {
    bottom: -13.8rem;
  }
}
@keyframes animScroll1 {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  45% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(1.6);
  }
  75% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes animScroll2 {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.3);
  }
  50% {
    transform: scale(1.4);
  }
  75% {
    transform: scale(1.5);
  }
  80% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes appearSlide1 {
  0% {
    opacity: 0;
    transition-property: opacity;
  }
  100% {
    opacity: 1;
    transition-property: opacity;
  }
}
@keyframes appearSlide2 {
  0% {
    opacity: 0;
    transition-property: opacity;
  }
  100% {
    opacity: 1;
    transition-property: opacity;
  }
}
@keyframes appearSlide3 {
  0% {
    opacity: 0;
    transition-property: opacity;
  }
  100% {
    opacity: 1;
    transition-property: opacity;
  }
}
@keyframes hoverCard {
  0% {
    transform: rotate(20.921deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(20.921deg);
  }
}
.banner {
  position: relative;
  margin-top: 4.6rem;
}
.banner_container {
  position: relative;
  display: flex;
}
.banner__scroll {
  position: absolute;
  top: 43.4rem;
  left: 2.5rem;
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  z-index: 2;
}
.banner__scroll-text {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner__scroll-anim_1 {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transform-origin: center;
  animation: animScroll1 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;
}
.banner__scroll img {
  width: 100%;
  height: 100%;
}
.banner__scroll-anim_2 {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transform-origin: center;
  animation: animScroll2 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;
}
.banner__title {
  position: relative;
  margin-right: 7.5rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: normal;
}
.banner__title-img {
  position: absolute;
  top: 9.6rem;
  left: -15rem;
}
.banner__slider {
  margin-top: -5rem;
  padding-left: 8rem;
  padding: 7rem 8rem;
  width: 67.9rem;
  height: 89.2rem;
  overflow: hidden;
}
.banner__slider-wrapper {
  position: relative;
}
.banner__slider-item {
  height: 75.2rem;
}
.banner__main {
  position: relative;
  display: flex;
  z-index: 2;
}
.banner__main-photo {
  position: relative;
  width: 51.9rem;
  height: 75.2rem;
}
.banner__main-photo:hover .banner__main-img img {
  transform: scale(1.2);
}
.banner__main-photo:hover .banner__main-img--back {
  transform: rotate(0deg);
}
.banner__main-photo:hover .banner__main-img--back img {
  transform: scale(1);
}
.banner__main-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.banner__main-border img {
  height: 100%;
}
.banner__main-img {
  position: relative;
  width: 51.9rem;
  height: 75.2rem;
  -webkit-clip-path: polygon(0 0, 74.9% 0, 100% 19%, 100% 100%, 25% 100%, 0 85%);
          clip-path: polygon(0 0, 74.9% 0, 100% 19%, 100% 100%, 25% 100%, 0 85%);
  overflow: hidden;
}
.banner__main-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  transform: scale(1);
  transition: transform 0.4s ease-in-out;
}
.banner__main-img--back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(20.921deg);
  transition: transform 0.4s ease-in-out;
  z-index: 2;
}
.banner__main-img--back.anim {
  animation: hoverCard 0.6s ease-in-out;
}
.banner__main-img--back img {
  width: 100%;
  height: 100%;
}
.banner__main-thumb {
  margin-left: 8rem;
  align-self: end;
  width: 22.2rem;
  height: 25.4rem;
}
.banner__main-thumb img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.banner__main-btn {
  position: absolute;
  top: 17.1rem;
  left: 60rem;
  z-index: 2;
}
.banner__main-btn--text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.banner__main-text {
  z-index: 12;
}
.banner__main-text--title {
  display: flex;
  gap: 2rem;
  position: absolute;
  top: 59.2%;
  left: 15rem;
  transform: translate(0, -50%);
  font-family: "Akrobat";
  font-size: 15rem;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 2px #242424;
  text-stroke: 2px #242424;
}
.banner__main-text--title b {
  color: #242424;
  -webkit-text-stroke: 0;
  text-stroke: 0;
}
.banner__main-text--subtitle {
  position: absolute;
  top: 68%;
  right: 27.7rem;
  transform: translate(0, -50%);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.banner__thumbs {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.banner__thumbs-img {
  position: relative;
  display: none;
  width: 22.2rem;
  height: 25.4rem;
}
.banner__thumbs-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.banner__thumbs-img.next_1 {
  display: block;
  position: absolute;
  display: block;
  width: 21.2rem;
  height: 22.8rem;
  top: 23.8rem;
  right: 0rem;
  animation: appearSlide2 1s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.banner__thumbs-img.next_2 {
  display: block;
  position: absolute;
  display: block;
  width: 22.2rem;
  height: 25.4rem;
  top: 51.8rem;
  right: 50rem;
  animation: appearSlide1 1s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.banner__thumbs-img.last {
  display: block;
  position: absolute;
  top: 10rem;
  left: 0;
  position: absolute;
  display: block;
  width: 22.2rem;
  height: 25.4rem;
  animation: appearSlide3 1s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.banner__thumbs-img.swiper-slide-last {
  display: block;
  width: 21.2rem;
  height: 22.7rem;
}
.banner__aside {
  margin-left: auto;
}
.banner__aside-img {
  top: 30.6rem;
  position: absolute;
  right: -15rem;
  width: 21.2rem;
  height: 22.8rem;
}
.banner__links {
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
}
.banner__links-item {
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(36, 36, 36, 0.4);
  color: #242424;
  color: var(--Black, #242424);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
}

@keyframes aboutAnim1 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
@keyframes aboutAnim2 {
  0% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(450deg);
  }
}
@keyframes aboutAnim3 {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(-540deg);
  }
}
@keyframes aboutAnim4 {
  0% {
    transform: rotate(60deg);
  }
  100% {
    transform: rotate(420deg);
  }
}
@keyframes aboutAnim5 {
  0% {
    transform: rotate(130deg);
  }
  100% {
    transform: rotate(490deg);
  }
}
.about {
  position: relative;
}
.about__blocks {
  position: absolute;
  top: 20rem;
  left: -80rem;
}
.about__blocks-item {
  position: absolute;
  width: 95rem;
  height: 95rem;
  border: 1px solid #c7c7c7;
}
.about__blocks-item:nth-child(1) {
  animation: aboutAnim1 8s linear infinite;
  animation-duration: -1000;
}
.about__blocks-item:nth-child(2) {
  animation: aboutAnim2 9s linear infinite;
  animation-duration: -500;
}
.about__blocks-item:nth-child(3) {
  animation: aboutAnim3 9s cubic-bezier(0.77, 0.91, 0.71, 0.37) infinite;
}
.about__blocks-item:nth-child(4) {
  animation: aboutAnim4 7s linear infinite;
  animation-duration: -1000;
}
.about__content {
  display: flex;
  gap: 8rem;
}
.about__list {
  position: relative;
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.about__list-mark {
  position: absolute;
  top: -7.6rem;
  left: -8rem;
  width: 16.6rem;
  height: 16.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about__list-mark--text {
  position: absolute;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.about__info {
  width: 60.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.about__info-text {
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  overflow: hidden;
}
.about__info-text--description {
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;
}
.about__card {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 24.5rem;
}
.about__card-img {
  width: 100%;
  height: 32.6rem;
}
.about__card-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.about__card-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.about__card-text--title {
  color: #242424;
  font-family: "Akrobat";
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.about__card-text--subtitle {
  color: #e7284a;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;
}

.advantages_container {
  display: flex;
}
.advantages__list {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.advantages__list-mob {
  display: none;
}
.advantages__list-row {
  display: flex;
}
.advantages__list-row .advantages__main {
  margin-right: 16.8rem;
}
.advantages__info {
  display: flex;
  justify-content: space-between;
}
.advantages__info-mob {
  display: none;
}
.advantages__short {
  width: 41.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.advantages__short-number {
  color: #242424;
  font-size: 5rem;
  font-weight: 400;
  line-height: normal;
}
.advantages__short-text {
  color: #9d9d9d;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
}
.advantages__main {
  width: 24.4rem;
}
.advantages__main-icon {
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.advantages__main-icon svg {
  width: 100%;
  height: 100%;
}
.advantages__main-name {
  font-family: "Akrobat";
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.advantages__main-description {
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;
}

@keyframes newsBlock1 {
  0% {
    transform: translateY(0rem);
  }
  25% {
    transform: translateY(5rem);
  }
  50% {
    transform: translateY(15rem);
  }
  75% {
    transform: translateY(10rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
@keyframes newsBlock2 {
  0% {
    transform: translateY(0rem);
  }
  25% {
    transform: translateY(-5rem);
  }
  50% {
    transform: translateY(-15rem);
  }
  75% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
.news {
  position: relative;
}
.news__blocks {
  position: absolute;
  top: 0;
  width: 58.3rem;
  height: 58.3rem;
  right: -41rem;
  z-index: -1;
}
.news__blocks-item {
  position: absolute;
  width: 50rem;
  height: 50rem;
  border: 1px solid #9d9d9d;
}
.news__blocks-item:nth-child(1) {
  top: 0;
  right: 0;
  transform: translateX(0);
  animation: newsBlock1 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;
}
.news__blocks-item:nth-child(2) {
  top: 15rem;
  right: 10rem;
  animation: newsBlock2 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;
}
.news__text {
  display: flex;
  justify-content: space-between;
}
.news__text-title {
  width: 120.7rem;
}
.news__list {
  display: flex;
  justify-content: space-between;
}
.news__list-btn {
  margin-top: 8.6rem;
}
.news__list-item {
  width: 38.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.news__list-item:nth-child(1) .news__list-img {
  height: 28.5rem;
}
.news__list-item:nth-child(2) .news__list-img {
  height: 57.3rem;
}
.news__list-item:nth-child(3) .news__list-img {
  height: 28.5rem;
}
.news__list-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.news__list-text--date {
  color: #e7284a;
  font-family: "Akrobat";
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

@keyframes blockMove1 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10rem, 10rem);
  }
  50% {
    transform: translate(0rem, 0rem);
  }
  75% {
    transform: translate(10rem, 10rem);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes blockMove2 {
  0% {
    transform: translate(10rem, 10rem);
  }
  25% {
    transform: translate(6rem, 6rem);
  }
  50% {
    transform: translate(20rem, 20rem);
  }
  75% {
    transform: translate(17rem, 25rem);
  }
  100% {
    transform: translate(10rem, 10rem);
  }
}
@keyframes blockMove3 {
  0% {
    transform: translate(20rem, 20rem);
  }
  25% {
    transform: translate(15rem, 13rem);
  }
  50% {
    transform: translate(10rem, 10rem);
  }
  75% {
    transform: translate(15rem, 15rem);
  }
  100% {
    transform: translate(20rem, 20rem);
  }
}
.services {
  position: relative;
}
.services__blocks {
  position: absolute;
  top: 48rem;
  left: -30rem;
  width: 82.9rem;
  height: 97.8rem;
  z-index: -1;
}
.services__blocks-item {
  position: absolute;
  width: 50rem;
  height: 69.4rem;
  border: 1px solid #c7c7c7;
}
.services__blocks-item:nth-child(1) {
  animation: blockMove1 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;
}
.services__blocks-item:nth-child(2) {
  animation: blockMove2 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;
}
.services__blocks-item:nth-child(3) {
  animation: blockMove3 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;
}
.services__list {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}
.services__list-row {
  display: flex;
  justify-content: space-between;
}
.services__list-row--bottom {
  display: flex;
  gap: 3rem;
}
.services__list-btn {
  margin-bottom: 7rem;
}
.services__list-column {
  width: 100%;
}
.services__list-column--description {
  width: 38.3rem;
}
.services__list-item {
  width: 38.3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.services__list-item--column {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.services__list-img {
  width: 38.3rem;
  height: 52.8rem;
}
.services__list-img--border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-10deg);
  transition: transform 0.3s ease-in-out;
  z-index: 3;
}
.services__list-img--border img {
  height: 100%;
}
.services__list-img img {
  -o-object-fit: cover;
     object-fit: cover;
  height: 100%;
}
.services__list-img--column {
  position: relative;
  width: 79.5rem;
  height: 43.9rem;
  transition: transform 0.3s ease-in-out;
}
.services__list-img--column--back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.services__list-img--column--back img {
  -o-object-fit: cover;
     object-fit: cover;
  height: 100%;
}
.services__list-img--column--inner {
  width: 79.5rem;
  height: 43.9rem;
  -webkit-clip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);
          clip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);
  overflow: hidden;
  z-index: 1;
}
.services__list-img--column--inner img {
  -o-object-fit: cover;
     object-fit: cover;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}
.services__list-img--column:hover .services__list-img--column--inner img {
  transform: scale(1.2);
}
.services__list-img--column:hover .services__list-img--border {
  transform: rotate(0deg);
}
.services__list-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.services__content-bottom {
  padding-top: 16.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

@media (max-width: 48em) {
  .banner_container {
    flex-direction: column;
  }
  .banner__title {
    display: none;
  }
  .banner__scroll {
    display: none;
  }
  .banner__slider {
    width: 100%;
    height: 80rem;
    padding: 7rem 11rem;
  }
  .banner__slider-item {
    width: 46rem;
    height: 67rem;
  }
  .banner__main {
    margin-top: 4rem;
  }
  .banner__main-btn {
    top: 32.1rem;
    left: 50rem;
  }
  .banner__main-text--title {
    top: 62.2%;
    left: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 11.6rem;
    z-index: 12;
    line-height: 1;
    width: calc(100% - 7.2rem);
    -webkit-text-stroke: 1px #242424;
  }
  .banner__main-text--title b {
    align-self: flex-start;
    color: #242424;
    font-weight: 800;
    text-transform: uppercase;
  }
  .banner__main-text--subtitle {
    top: auto;
    right: 4rem;
    bottom: 27rem;
    color: #242424;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .banner__main-img {
    width: 100%;
    height: 100%;
  }
  .banner__main-photo {
    width: 100%;
    height: 100%;
  }
  .banner__main-photo:hover .banner__main-img img {
    transform: scale(1);
  }
  .banner__main-photo:hover .banner__main-img--back {
    transform: rotate(20.921deg);
  }
  .banner__main-photo:hover .banner__main-img--back img {
    transform: scale(1);
  }
  .banner__thumbs {
    position: relative;
    flex: 1;
  }
  .banner__thumbs-img {
    display: none;
    width: 24rem;
    height: 24rem;
  }
  .banner__thumbs-img.next_1 {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 24rem;
    height: 24rem;
  }
  .banner__thumbs-img.next_2 {
    display: none;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 24rem;
    height: 24rem;
  }
  .banner__thumbs-img.last {
    display: none;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 24rem;
    height: 24rem;
  }
  .banner__aside {
    margin: 0;
    margin-top: 16rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
  .banner__links {
    margin-top: 0;
    width: 39rem;
    row-gap: 0rem;
  }
  .banner__links-item {
    padding: 1.6rem 0;
    color: #242424;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  .about__blocks {
    top: 7rem;
    left: auto;
    right: 45rem;
    z-index: -1;
  }
  .about__blocks-item {
    width: 71rem;
    height: 71rem;
    border-color: #c7c7c7;
  }
  .about__content {
    flex-direction: column;
    gap: 5.6rem;
  }
  .about__card {
    width: 33.2rem;
  }
  .about__card-img {
    height: 48.6rem;
  }
  .about__card-text--title {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .about__card-text--subtitle {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
  }
  .about__list-mark {
    top: 36.4rem;
    left: -8rem;
    width: 20rem;
    height: 20rem;
    left: auto;
    right: 1rem;
  }
  .about__list-mark--text {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .about__info {
    width: 100%;
    gap: 7.2rem;
  }
  .about__info-text {
    gap: 3.2rem;
  }
  .about__info-text--description {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
  }
  .advantages_container {
    flex-direction: column;
  }
  .advantages__list {
    display: none;
  }
  .advantages__list-mob {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .advantages__list-info {
    display: flex;
    justify-content: space-between;
  }
  .advantages__list-row {
    width: 33rem;
    display: flex;
    flex-direction: column;
  }
  .advantages__list-row .advantages__main {
    margin-right: 0;
  }
  .advantages__main {
    width: 33rem;
  }
  .advantages__main-name {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .advantages__main-description {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
    text-transform: none;
  }
  .advantages__main-icon {
    width: 8rem;
    height: 8rem;
  }
  .advantages__info-mob {
    margin-top: 5.8rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .advantages__short {
    width: auto;
    gap: 2.4rem;
    flex: 1;
  }
  .advantages__short-number {
    font-size: 5.6rem;
    font-weight: 400;
    line-height: normal;
  }
  .advantages__short-text {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: normal;
  }
  .news__blocks {
    height: 110.8rem;
    width: 75.3rem;
    right: -16rem;
    top: auto;
    bottom: -84rem;
  }
  .news__blocks-item {
    height: 95rem;
    border-color: #c7c7c7;
  }
  .news__text {
    flex-direction: column;
  }
  .news__text-title {
    width: 100%;
  }
  .news__list-item {
    width: 44.8rem;
  }
  .news__list-item .news__list-img:nth-child(1) {
    height: auto;
  }
  .news__list-item .news__list-img:nth-child(2) {
    height: auto;
  }
  .news__list-item .news__list-img:nth-child(3) {
    height: auto;
  }
  .news__list-img {
    width: 100%;
  }
  .services__blocks {
    top: auto;
    bottom: 0;
    right: -81rem;
    left: auto;
  }
  .services__blocks-item:nth-child(1) {
    transform: translate(-30rem, 30rem);
    animation: none;
  }
  .services__blocks-item:nth-child(2) {
    animation: none;
    transform: translate(-15rem, 11rem);
  }
  .services__blocks-item:nth-child(3) {
    animation: none;
    transform: translate(0rem, 0rem);
  }
  .services__content-bottom {
    padding-top: 5.6rem;
    flex-direction: column;
  }
  .services__list {
    gap: 11.6rem;
  }
  .services__list-row {
    flex-direction: column;
    gap: 5.6rem;
  }
  .services__list-row--bottom {
    width: 100%;
    flex-direction: column;
    gap: 5.6rem;
  }
  .services__list-item {
    width: 100%;
    gap: 1.6rem;
  }
  .services__list-item--column {
    gap: 7.4rem;
    flex-direction: column-reverse;
  }
  .services__list-column--description {
    width: 100%;
  }
  .services__list-img {
    width: 100%;
  }
  .services__list-img--column {
    width: 100%;
    height: 38.2rem;
  }
  .services__list-img--column--inner {
    width: 100%;
    height: 100%;
  }
  .services__list-img--column--inner img {
    height: 100%;
    -o-object-fit: none;
       object-fit: none;
  }
  .services__list-text {
    gap: 0.4rem;
  }
}
@keyframes newsBlock1 {
  0% {
    transform: translateY(0rem);
  }
  25% {
    transform: translateY(5rem);
  }
  50% {
    transform: translateY(15rem);
  }
  75% {
    transform: translateY(10rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
@keyframes newsBlock2 {
  0% {
    transform: translateY(0rem);
  }
  25% {
    transform: translateY(-5rem);
  }
  50% {
    transform: translateY(-15rem);
  }
  75% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
.news {
  position: relative;
}
.news__blocks {
  position: absolute;
  top: 0;
  width: 58.3rem;
  height: 58.3rem;
  right: -41rem;
  z-index: -1;
}
.news__blocks-item {
  position: absolute;
  width: 50rem;
  height: 50rem;
  border: 1px solid #9d9d9d;
}
.news__blocks-item:nth-child(1) {
  top: 0;
  right: 0;
  transform: translateX(0);
  animation: newsBlock1 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;
}
.news__blocks-item:nth-child(2) {
  top: 15rem;
  right: 10rem;
  animation: newsBlock2 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;
}
.news__text {
  display: flex;
  justify-content: space-between;
}
.news__text-title {
  width: 120.7rem;
  overflow: hidden;
}
.news__list {
  display: flex;
  justify-content: space-between;
}
.news__list-btn {
  margin-top: 8.6rem;
}
.news__list-btn--mob {
  display: none;
}
.news__list-item {
  width: 38.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.news__list-item:nth-child(1) .news__list-img {
  height: 28.5rem;
}
.news__list-item:nth-child(2) .news__list-img {
  height: 57.3rem;
}
.news__list-item:nth-child(3) .news__list-img {
  height: 28.5rem;
}
.news__list-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@keyframes blockMove1 {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10rem, 10rem);
  }
  50% {
    transform: translate(0rem, 0rem);
  }
  75% {
    transform: translate(10rem, 10rem);
  }
  100% {
    transform: translate(0, 0);
  }
}
@keyframes blockMove2 {
  0% {
    transform: translate(10rem, 10rem);
  }
  25% {
    transform: translate(6rem, 6rem);
  }
  50% {
    transform: translate(20rem, 20rem);
  }
  75% {
    transform: translate(17rem, 25rem);
  }
  100% {
    transform: translate(10rem, 10rem);
  }
}
@keyframes blockMove3 {
  0% {
    transform: translate(20rem, 20rem);
  }
  25% {
    transform: translate(15rem, 13rem);
  }
  50% {
    transform: translate(10rem, 10rem);
  }
  75% {
    transform: translate(15rem, 15rem);
  }
  100% {
    transform: translate(20rem, 20rem);
  }
}
.services {
  position: relative;
}
.services__blocks {
  position: absolute;
  top: 48rem;
  left: -30rem;
  width: 82.9rem;
  height: 97.8rem;
  z-index: -1;
}
.services__blocks-item {
  position: absolute;
  width: 50rem;
  height: 69.4rem;
  border: 1px solid #c7c7c7;
}
.services__blocks-item:nth-child(1) {
  animation: blockMove1 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}
.services__blocks-item:nth-child(2) {
  animation: blockMove2 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}
.services__blocks-item:nth-child(3) {
  animation: blockMove3 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
}
.services__list {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}
.services__list-row {
  display: flex;
  justify-content: space-between;
}
.services__list-row--bottom {
  display: flex;
  gap: 3rem;
}
.services__list-btn {
  margin-bottom: 7rem;
}
.services__list-column {
  width: 100%;
}
.services__list-column--description {
  width: 38.3rem;
}
.services__list-item {
  width: 38.3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.services__list-item--column {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.services__list-img {
  width: 38.3rem;
  height: 52.8rem;
}
.services__list-img--border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-10deg);
  transition: transform 0.3s ease-in-out;
  z-index: 3;
}
.services__list-img--border img {
  height: 100%;
}
.services__list-img img {
  -o-object-fit: cover;
     object-fit: cover;
  height: 100%;
}
.services__list-img--column {
  position: relative;
  width: 79.5rem;
  height: 43.9rem;
  transition: transform 0.3s ease-in-out;
}
.services__list-img--column--back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
.services__list-img--column--back img {
  -o-object-fit: cover;
     object-fit: cover;
  height: 100%;
}
.services__list-img--column--inner {
  width: 79.5rem;
  height: 43.9rem;
  -webkit-clip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);
          clip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);
  overflow: hidden;
  z-index: 1;
}
.services__list-img--column--inner img {
  -o-object-fit: cover;
     object-fit: cover;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
}
.services__list-img--column:hover .services__list-img--column--inner img {
  transform: scale(1.2);
}
.services__list-img--column:hover .services__list-img--border {
  transform: rotate(0deg);
}
.services__list-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.services__content-bottom {
  padding-top: 16.6rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

@media (max-width: 48em) {
  .banner_container {
    flex-direction: column;
  }
  .banner__title {
    display: none;
  }
  .banner__scroll {
    display: none;
  }
  .banner__slider {
    width: 100%;
    height: 80rem;
    padding: 7rem 11rem;
  }
  .banner__slider-item {
    width: 46rem;
    height: 67rem;
  }
  .banner__main {
    margin-top: 4rem;
  }
  .banner__main-btn {
    top: 32.1rem;
    left: 50rem;
  }
  .banner__main-text--title {
    top: 62.2%;
    left: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 11.6rem;
    z-index: 12;
    line-height: 1;
    width: calc(100% - 7.2rem);
    -webkit-text-stroke: 1px #242424;
  }
  .banner__main-text--title b {
    align-self: flex-start;
    color: #242424;
    font-weight: 800;
    text-transform: uppercase;
  }
  .banner__main-text--subtitle {
    top: auto;
    right: 4rem;
    bottom: 27rem;
    color: #242424;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .banner__main-img {
    width: 100%;
    height: 100%;
  }
  .banner__main-photo {
    width: 100%;
    height: 100%;
  }
  .banner__main-photo:hover .banner__main-img img {
    transform: scale(1);
  }
  .banner__main-photo:hover .banner__main-img--back {
    transform: rotate(20.921deg);
  }
  .banner__main-photo:hover .banner__main-img--back img {
    transform: scale(1);
  }
  .banner__thumbs {
    position: relative;
    flex: 1;
  }
  .banner__thumbs-img {
    display: none;
    width: 24rem;
    height: 24rem;
  }
  .banner__thumbs-img.next_1 {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 24rem;
    height: 24rem;
  }
  .banner__thumbs-img.next_2 {
    display: none;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 24rem;
    height: 24rem;
  }
  .banner__thumbs-img.last {
    display: none;
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    width: 24rem;
    height: 24rem;
  }
  .banner__aside {
    margin: 0;
    margin-top: 16rem;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
  }
  .banner__links {
    margin-top: 0;
    width: 39rem;
    row-gap: 0rem;
  }
  .banner__links-item {
    padding: 1.6rem 0;
    color: #242424;
    font-size: 2.8rem;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  .about__blocks {
    top: 7rem;
    left: auto;
    right: 45rem;
    z-index: -1;
  }
  .about__blocks-item {
    width: 71rem;
    height: 71rem;
    border-color: #c7c7c7;
  }
  .about__content {
    flex-direction: column;
    gap: 5.6rem;
  }
  .about__card {
    width: 33.2rem;
  }
  .about__card-img {
    height: 48.6rem;
  }
  .about__card-text--title {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .about__card-text--subtitle {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
  }
  .about__list-mark {
    top: 36.4rem;
    left: -8rem;
    width: 20rem;
    height: 20rem;
    left: auto;
    right: 1rem;
  }
  .about__list-mark--text {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .about__info {
    width: 100%;
    gap: 7.2rem;
  }
  .about__info-text {
    gap: 3.2rem;
  }
  .about__info-text--description {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
  }
  .advantages_container {
    flex-direction: column;
  }
  .advantages__list {
    display: none;
  }
  .advantages__list-mob {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .advantages__list-info {
    display: flex;
    justify-content: space-between;
  }
  .advantages__list-row {
    width: 33rem;
    display: flex;
    flex-direction: column;
  }
  .advantages__list-row .advantages__main {
    margin-right: 0;
  }
  .advantages__main {
    width: 33rem;
  }
  .advantages__main-name {
    font-size: 3.6rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .advantages__main-description {
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
    text-transform: none;
  }
  .advantages__main-icon {
    width: 8rem;
    height: 8rem;
  }
  .advantages__info-mob {
    margin-top: 5.8rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .advantages__short {
    width: auto;
    gap: 2.4rem;
    flex: 1;
  }
  .advantages__short-number {
    font-size: 5.6rem;
    font-weight: 400;
    line-height: normal;
  }
  .advantages__short-text {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: normal;
  }
  .news_container {
    padding-bottom: 17rem;
  }
  .news__blocks {
    height: 110.8rem;
    width: 75.3rem;
    right: -16rem;
    top: auto;
    bottom: -84rem;
  }
  .news__blocks-item {
    height: 95rem;
    border-color: #c7c7c7;
  }
  .news__text {
    flex-direction: column;
  }
  .news__text-title {
    width: 100%;
  }
  .news__list-btn {
    display: none;
  }
  .news__list-btn--mob {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  .news__list-item {
    width: 44.8rem;
  }
  .news__list-item .news__list-img:nth-child(1) {
    height: auto;
  }
  .news__list-item .news__list-img:nth-child(2) {
    height: auto;
  }
  .news__list-item .news__list-img:nth-child(3) {
    height: auto;
  }
  .news__list-text--date {
    color: #e7284a;
    font-family: "Akrobat";
    font-size: 3.6rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .news__list-img {
    width: 100%;
  }
  @keyframes blockMoveMob1 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10rem, -10rem);
    }
    50% {
      transform: translate(0rem, 0rem);
    }
    75% {
      transform: translate(10rem, -10rem);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes blockMoveMob2 {
    0% {
      transform: translate(10rem, -10rem);
    }
    25% {
      transform: translate(6rem, -6rem);
    }
    50% {
      transform: translate(20rem, -20rem);
    }
    75% {
      transform: translate(17rem, -25rem);
    }
    100% {
      transform: translate(10rem, -10rem);
    }
  }
  @keyframes blockMoveMob3 {
    0% {
      transform: translate(20rem, -20rem);
    }
    25% {
      transform: translate(15rem, -13rem);
    }
    50% {
      transform: translate(10rem, -10rem);
    }
    75% {
      transform: translate(15rem, -15rem);
    }
    100% {
      transform: translate(20rem, -20rem);
    }
  }
  .services_container {
    padding-bottom: 17rem;
  }
  .services__blocks {
    top: auto;
    bottom: -45rem;
    right: -51rem;
    left: auto;
  }
  .services__blocks-item:nth-child(1) {
    transform: translate(30rem, -30rem);
    animation: blockMoveMob1 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  .services__blocks-item:nth-child(2) {
    transform: translate(15rem, -11rem);
    animation: blockMoveMob2 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  .services__blocks-item:nth-child(3) {
    transform: translate(0rem, 0rem);
    animation: blockMoveMob3 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  .services__content-bottom {
    padding-top: 5.6rem;
    flex-direction: column;
  }
  .services__list {
    gap: 11.6rem;
  }
  .services__list-row {
    flex-direction: column;
    gap: 5.6rem;
  }
  .services__list-row--bottom {
    width: 100%;
    flex-direction: column;
    gap: 5.6rem;
  }
  .services__list-item {
    width: 100%;
    gap: 1.6rem;
  }
  .services__list-item--last .services__list-text--description {
    width: 41rem;
  }
  .services__list-item--column {
    gap: 7.4rem;
    flex-direction: column-reverse;
  }
  .services__list-column--description {
    width: 100%;
  }
  .services__list-img {
    width: 100%;
  }
  .services__list-img--column {
    width: 100%;
    height: 38.2rem;
  }
  .services__list-img--column--inner {
    width: 100%;
    height: 100%;
  }
  .services__list-img--column--inner img {
    height: 100%;
    -o-object-fit: none;
       object-fit: none;
  }
  .services__list-btn {
    position: absolute;
    bottom: -12rem;
    margin: 0;
  }
  .services__list-text {
    gap: 0.4rem;
  }
  .services__list-text--description {
    width: 55.2rem;
  }
}
.about-intro {
  margin-top: 1.5rem;
  margin-bottom: 19.8rem;
}
.about-intro__inner {
  position: relative;
  height: 84.9rem;
}
.about-intro__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.about-intro__title {
  text-align: center;
  width: 92.5rem;
  margin-bottom: 8rem;
}
.about-intro__subtitle {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.about-intro__pictures {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
}
.about-intro__img {
  position: absolute;
  z-index: -1;
  animation-name: imageAnimation;
  animation-timing-function: ease-in-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
}
.about-intro__img img {
  transition: transform 0.5s ease-out;
}
.about-intro__img:hover img {
  transition: transform 0.5s ease-out;
  transform: scale(1.2);
}
.about-intro__img--1 {
  width: 18.2rem;
  height: 24.6rem;
  top: 0;
  left: 39.1rem;
  animation-delay: 0.2s;
}
.about-intro__img--2 {
  width: 32.5rem;
  height: 19.8rem;
  left: 64.8rem;
  bottom: 10.8rem;
  animation-delay: 0.4s;
}
.about-intro__img--3 {
  width: 22.6rem;
  height: 26.8rem;
  bottom: 0;
  left: 11.2rem;
  animation-delay: 1s;
}
.about-intro__img--4 {
  width: 35.6rem;
  height: 21.8rem;
  right: -20rem;
  top: 12.4rem;
  animation-delay: 1.5s;
}
.about-intro__img--5 {
  width: 32rem;
  height: 21.6rem;
  left: -18.1rem;
  top: 17.5rem;
  animation-delay: 0.8s;
  -webkit-clip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);
          clip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);
}
.about-intro__img--6 {
  width: 20.6rem;
  height: 29.8rem;
  bottom: 6.2rem;
  right: 5.5rem;
  animation-delay: 0.2s;
  -webkit-clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);
          clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);
}
.about-intro__img--7 {
  width: 35.2rem;
  height: 18.6rem;
  top: 4.8rem;
  right: 35.6rem;
  animation-delay: 0.4s;
  -webkit-clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);
          clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);
}

.about-business {
  margin-bottom: 20rem;
}
.about-business__inner {
  display: flex;
  overflow: hidden;
}
.about-business__main {
  overflow: hidden;
}
.about-business__content {
  display: flex;
  justify-content: space-between;
}
.about-business__item {
  width: 52rem;
  overflow: hidden;
}
.about-business__text {
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5rem;
  min-height: 10.7rem;
}
.about-business__text span {
  color: #e7284a;
  font-weight: 600;
}

.about-advantages {
  margin-bottom: 20rem;
  position: relative;
}
.about-advantages__inner {
  display: flex;
  overflow: hidden;
}
.about-advantages__container {
  position: relative;
}
.about-advantages__main {
  overflow: hidden;
}
.about-advantages__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 0;
  border-bottom: 0.1rem solid rgba(36, 36, 36, 0.4);
}
.about-advantages__item:first-child {
  padding: 0 0 2.4rem 0;
}
.about-advantages__item:last-child {
  padding: 2.4rem 0 0 0;
  border-bottom: none;
  justify-content: center;
  gap: 14rem;
}
.about-advantages__item-wrapper {
  display: flex;
  align-items: center;
  gap: 12.4rem;
}
.about-advantages__img {
  width: 15rem;
  height: 7.2rem;
}
.about-advantages__text {
  color: #242424;
  font-family: "Akrobat";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.about-advantages__text span {
  color: #e7284a;
}
.about-advantages__btn {
  position: absolute;
  top: 16.1rem;
  left: 43.9rem;
}

.about-feedback__inner {
  display: flex;
}
.about-feedback__main {
  display: flex;
  gap: 3.1rem;
}
.about-feedback__left {
  width: 38.2rem;
  height: 22.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.about-feedback__description {
  width: 75%;
}
.about-feedback__right {
  flex: 1 1 auto;
}
.about-feedback__form {
  margin-top: 7.5rem;
}

.about-intro-animation {
  top: 21rem;
  left: 28%;
  z-index: -1;
}
.about-intro-animation .about__blocks-item {
  width: 78.2164rem;
  height: 78.2164rem;
}

.about-advantages-animation {
  transform: rotate(45deg) scale(1.2);
  top: 40rem;
  left: -80rem;
  width: 110.941rem;
  height: 130.8809rem;
}
.about-advantages-animation .services__blocks-item {
  width: 67.089rem;
  height: 92.7639rem;
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    transition: opacity 0.2s linear;
  }
  100% {
    opacity: 1;
    transition: opacity 0.2s linear;
  }
}
@media (max-width: 48em) {
  .about-intro {
    margin-top: 3.4rem;
    margin-bottom: 8.2rem;
  }
  .about-intro__inner {
    height: 116.6rem;
  }
  .about-intro__title {
    text-align: center;
    width: 61.8rem;
    margin-bottom: 4rem;
  }
  .about-intro__subtitle {
    text-align: center;
    position: static;
    font-size: 2.8rem;
    transform: none;
  }
  .about-intro__img--1 {
    width: 19.8rem;
    height: 26.2rem;
    top: 8.6rem;
    left: auto;
    left: initial;
    right: 0;
  }
  .about-intro__img--2 {
    width: 26.8rem;
    height: 16.2rem;
    left: 17.6rem;
    bottom: 0;
    transform: none;
  }
  .about-intro__img--3 {
    width: 19.2rem;
    height: 22.8rem;
    bottom: 19.6rem;
    left: -2.8rem;
  }
  .about-intro__img--6 {
    width: 17.2rem;
    height: 24.8rem;
    bottom: 10.6rem;
    right: -3.2rem;
    -webkit-clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);
            clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);
  }
  .about-intro__img--7 {
    width: 38.2rem;
    height: 20rem;
    top: 0;
    right: auto;
    right: initial;
    left: 0;
    -webkit-clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);
            clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);
  }
  .about-business {
    margin-bottom: 18rem;
  }
  .about-business__inner {
    flex-direction: column;
    gap: 2.4rem;
  }
  .about-business__content {
    flex-direction: column;
    gap: 5.6rem;
  }
  .about-business__item {
    width: 100%;
  }
  .about-business__text {
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
    width: 65rem;
    min-height: 0;
    min-height: initial;
  }
  .about-advantages {
    margin-bottom: 31.8rem;
  }
  .about-advantages__inner {
    flex-direction: column;
    gap: 2.4rem;
  }
  .about-advantages__item {
    justify-content: flex-start;
    padding: 3.2rem 0;
    border-bottom: 0.2rem solid rgba(36, 36, 36, 0.4);
  }
  .about-advantages__item:first-child {
    padding: 0 0 3.2rem 0;
    gap: 7.2rem;
  }
  .about-advantages__item:first-child .about-advantages__text {
    width: 19.4rem;
  }
  .about-advantages__item:nth-child(2) {
    justify-content: flex-end;
    gap: 4.8rem;
  }
  .about-advantages__item:nth-child(2) .about-advantages__text {
    width: 25.6rem;
  }
  .about-advantages__item:nth-child(3) {
    justify-content: flex-start;
    gap: 4.8rem;
  }
  .about-advantages__item:nth-child(3) .about-advantages__text {
    width: 22.2rem;
  }
  .about-advantages__item:nth-child(4) {
    justify-content: center;
    gap: initial;
  }
  .about-advantages__item:nth-child(4) .about-advantages__text {
    width: 22.8rem;
  }
  .about-advantages__item:nth-child(5) {
    justify-content: flex-end;
    gap: 7.2rem;
  }
  .about-advantages__item:nth-child(5) .about-advantages__text {
    width: 23.8rem;
  }
  .about-advantages__item:last-child {
    padding: 3.2rem 0 0 0;
    border-bottom: none;
    justify-content: flex-start;
    width: 25.8rem;
  }
  .about-advantages__img {
    width: 24rem;
    height: 11.6rem;
  }
  .about-advantages__text {
    font-size: 3.6rem;
  }
  .about-advantages__btn {
    position: absolute;
    top: auto;
    top: initial;
    left: auto;
    left: initial;
    bottom: -10.4rem;
    right: 9.8rem;
  }
  .about-feedback {
    margin-bottom: 18rem;
  }
  .about-feedback__inner {
    flex-direction: column;
  }
  .about-feedback__title {
    font-weight: 800;
    width: 85%;
    line-height: 100%;
  }
  .about-feedback__main {
    flex-direction: column;
    gap: 6.4rem;
  }
  .about-feedback__left {
    width: 100%;
    height: auto;
    height: initial;
    flex-direction: column;
    gap: 2.4rem;
  }
  .about-feedback__description {
    width: 80%;
  }
  .about-feedback__right {
    flex: 0;
  }
  .about-feedback__form {
    margin-top: 0;
  }
  .about-intro-animation {
    top: 45rem;
    left: 15%;
    z-index: -1;
  }
  .about-intro-animation .about__blocks-item {
    width: 52.191rem;
    height: 52.191rem;
  }
  .about-advantages-animation {
    transform: rotate(-135deg) scale(1);
    top: 95rem;
    left: 60rem;
    width: 82.14rem;
    height: 96.9034rem;
  }
  .about-advantages-animation .services__blocks-item {
    width: 67.089rem;
    height: 92.7639rem;
  }
  .about-advantages-animation .services__blocks-item:nth-child(1) {
    animation: blockMove1 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  .about-advantages-animation .services__blocks-item:nth-child(2) {
    animation: blockMove2 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  .about-advantages-animation .services__blocks-item:nth-child(3) {
    animation: blockMove3 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
}
.projects {
  margin-top: 5rem;
  margin-bottom: 20rem;
}
.projects__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 10rem;
}
.projects__main {
  -moz-column-gap: 3rem;
       column-gap: 3rem;
  row-gap: 10.3rem;
}

.projects-header__title {
  color: #242424;
  font-family: "Akrobat";
  font-size: 8rem;
  font-style: normal;
  font-weight: 800;
  line-height: 100%; /* 80px */
  width: 92.5rem;
}

.category-btn {
  color: #242424;
  font-family: "Akrobat";
  font-size: 2rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  transition: color 0.2s ease-out;
}
.category-btn.show {
  transition: color 0.2s ease-out;
  color: #fe921f;
}
.category-btn.show svg path {
  transition: fill 0.2s ease-out;
  fill: #fe921f;
}
.category-btn.show span {
  transition: transform 0.2s ease-in;
  transform: rotate(-180deg);
}
.category-btn:hover, .category-btn:focus-visible {
  transition: color 0.2s ease-out;
  color: #fe921f;
}
.category-btn:hover svg path, .category-btn:focus-visible svg path {
  transition: fill 0.2s ease-out;
  fill: #fe921f;
}
.category-menu {
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  border: 0.1rem solid #242424;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s linear, visibility 0.1s linear 0.2s;
}
.category-menu.show {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.2s linear;
}
.category-menu__item {
  display: flex;
  align-items: center;
}
.category-menu__text {
  margin-left: 1rem;
}

.projects-category {
  position: relative;
}
.projects-category__btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.projects-category__btn span {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in;
}
.projects-category__btn span svg {
  width: 1.2707rem;
  height: 0.7061rem;
}
.projects-category__menu {
  position: absolute;
  right: 0;
  top: 3.2rem;
  z-index: 1;
  padding: 1.6rem;
  width: 24.8rem;
  gap: 0.8rem;
}

.projects-main {
  display: grid;
  grid-template-columns: repeat(4, 38.3rem);
}

.projects-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.projects-item:hover img {
  transition: transform 0.5s linear;
  transform: scale(105%);
}
.projects-item--element {
  position: relative;
  justify-content: center;
  align-items: center;
}
.projects-item--element .about__blocks {
  position: relative;
  top: -5.25rem;
  left: -5.25rem;
}
.projects-item--element .about__blocks-item {
  width: 10.5rem;
  height: 10.5rem;
}
.projects-item__img {
  overflow: hidden;
  height: 53rem;
  margin-bottom: 2rem;
}
.projects-item__img img {
  transition: transform 0.5s linear;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.projects-item__info {
  gap: 1rem;
  margin-bottom: 0.8rem;
}
.projects-item__description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 7.2rem;
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem; /* 133.333% */
}

.project-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Gilroy";
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.project-info__name {
  color: #e7284a;
}
.project-info__date {
  color: #242424;
}

.projects-item-animation {
  width: 13.0548rem;
  height: 12.9817rem;
  transform: rotate(30deg) scale(0.2);
  top: 15rem;
  left: 10rem;
}
.projects-item-animation .services__blocks-item {
  height: 50rem;
  border: 0.5rem solid #c7c7c7;
}

@media (max-width: 48em) {
  .projects {
    margin-top: 4rem;
    margin-bottom: 37.2rem;
  }
  .projects__header {
    align-items: flex-start;
    flex-direction: column;
    justify-content: initial;
    gap: 6.4rem;
    margin-bottom: 4.4rem;
  }
  .projects__main {
    -moz-column-gap: normal;
         column-gap: normal;
    -moz-column-gap: initial;
         column-gap: initial;
    row-gap: 5.6rem;
  }
  .projects-header__title {
    font-size: 5.6rem;
    width: 100%;
  }
  .category-btn {
    font-size: 3.6rem;
  }
  .category-menu {
    border: none;
    border-top: 0.2rem solid #c7c7c7;
  }
  .category-menu__text {
    margin-left: 2rem;
  }
  .projects-category {
    position: static;
  }
  .projects-category__btn {
    gap: 1.6rem;
  }
  .projects-category__btn span svg {
    width: 2.4rem;
    height: 1.2rem;
  }
  .projects-category__menu {
    position: fixed;
    top: auto;
    top: initial;
    bottom: 0;
    z-index: 1;
    padding: 6.4rem 3.2rem;
    width: 100%;
    height: auto;
    height: initial;
    gap: 1.6rem;
  }
  .projects-main {
    grid-template-columns: 100%;
  }
  .projects-item__img {
    height: 63.4rem;
    margin-bottom: 4rem;
  }
  .projects-item__info {
    gap: 2rem;
    margin-bottom: 1.6rem;
  }
  .projects-item__description {
    height: auto;
    height: initial;
    font-size: 3.2rem;
    line-height: normal; /* 133.333% */
  }
  .project-info {
    font-size: 3.2rem;
  }
}
.contacts {
  margin-top: 5rem;
  margin-bottom: 20rem;
  position: relative;
}
.contacts__inner {
  position: relative;
}
.contacts__title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.contacts__main {
  display: flex;
  flex-direction: column;
  gap: 20rem;
}
.contacts__item {
  height: 70.7rem;
}

.contacts-item {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
}
.contacts-item:nth-child(even) {
  justify-content: flex-end;
}
.contacts-item:nth-child(even) .contacts-item__info {
  text-align: right;
  align-items: flex-end;
}
.contacts-item:nth-child(even) .contacts-item__img {
  left: -15rem;
}
.contacts-item:nth-child(even) .contacts-item__btn {
  margin-left: auto;
}
.contacts-item__info {
  width: 41.3rem;
  color: #242424;
  font-family: "Akrobat";
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.contacts-item__address {
  margin-bottom: 2rem;
}
.contacts-item__phone {
  margin-bottom: 2rem;
}
.contacts-item__phone:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.contacts-item__mail {
  margin-bottom: 4.8rem;
}
.contacts-item__mail:hover {
  -webkit-text-decoration: underline;
  text-decoration: underline;
}
.contacts-item__img {
  width: 108.3rem;
  height: 70.7rem;
  position: absolute;
  right: -15rem;
  top: 0;
}
.contacts-item__img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.contacts-feedback {
  margin-bottom: 20rem;
  position: relative;
}
.contacts-feedback__inner {
  display: flex;
  justify-content: space-between;
}
.contacts-feedback__section {
  width: 55.3rem;
}
.contacts-feedback__description {
  width: 29.4rem;
}
.contacts-feedback__form {
  width: 79.4rem;
  margin-top: 13rem;
}

.contacts-feedback-animation {
  left: -30rem;
  top: 25rem;
  z-index: -1;
}
.contacts-feedback-animation .about__blocks-item {
  width: 48.4731rem;
  height: 48.4731rem;
}
@media (max-width: 48em) {
  .contacts-feedback-animation {
    display: none;
  }
}

.contacts-block {
  width: 77.746rem;
  height: 77.31rem;
  left: 150rem;
  top: 50rem;
  transform: rotate(30deg) scale(0.8);
}
.contacts-block .services__blocks-item {
  width: 66.8026rem;
  height: 66.5259rem;
}
@media (max-width: 48em) {
  .contacts-block {
    display: none;
  }
}

@media (max-width: 48em) {
  .contacts {
    margin-top: 4rem;
    margin-bottom: 18rem;
  }
  .contacts__title {
    position: static;
  }
  .contacts__main {
    gap: 5.6rem;
  }
  .contacts__item {
    height: auto;
    height: initial;
    gap: 4rem;
  }
  .contacts-block {
    display: none;
  }
  .contacts-item {
    flex-direction: column;
    align-items: flex-start;
  }
  .contacts-item:nth-child(even) {
    justify-content: flex-start;
  }
  .contacts-item:nth-child(even) .contacts-item__info {
    text-align: left;
    align-items: flex-start;
  }
  .contacts-item:nth-child(even) .contacts-item__img {
    left: auto;
    left: initial;
  }
  .contacts-item:nth-child(even) .contacts-item__btn {
    margin-left: 0;
  }
  .contacts-item__info {
    width: 100%;
    font-size: 4.8rem;
    order: 2;
  }
  .contacts-item__title {
    margin-bottom: 2.4rem;
  }
  .contacts-item__address {
    margin-bottom: 3.2rem;
  }
  .contacts-item__phone {
    margin-bottom: 3.2rem;
  }
  .contacts-item__img {
    width: 100%;
    height: 43rem;
    position: static;
    order: 1;
  }
  .contacts-feedback {
    margin-bottom: 18rem;
  }
  .contacts-feedback__inner {
    flex-direction: column;
    gap: 5.6rem;
  }
  .contacts-feedback__mail {
    margin-bottom: 7.2rem;
  }
  .contacts-feedback__section {
    width: 100%;
  }
  .contacts-feedback__description {
    width: 58.8rem;
  }
  .contacts-feedback__form {
    width: 100%;
    margin-top: 0;
  }
}
@keyframes detailBlock {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.27);
  }
}
.detail {
  margin-top: 5rem;
  margin-bottom: 20rem;
}
.detail__inner {
  margin-bottom: 10rem;
}
.detail__main {
  gap: 3rem;
}
.detail__btn {
  margin: 0 auto;
}

.detail-main {
  display: flex;
  justify-content: space-between;
}
.detail-main__info {
  width: 38.3rem;
}
.detail-main__slider {
  width: 120.7rem;
}

.detail-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.detail-info__main {
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
  color: #242424;
}
.detail-info__date {
  display: block;
  margin-bottom: 1.6rem;
}
.detail-info__type {
  color: #e7284a;
  margin-bottom: 2rem;
}
.detail-info__city {
  font-size: 3.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  font-family: "Akrobat";
}
.detail-info__volume {
  font-weight: 500;
}
.detail-block {
  width: 38.3rem;
  height: 40.4rem;
  border: 0.1rem solid #242424;
  position: relative;
}
.detail-block__item {
  border: 0.1rem solid #c7c7c7;
  position: absolute;
  width: 100%;
  height: 100%;
}
.detail-block__item:nth-child(1) {
  transform: scale(0.9);
}
.detail-block__item:nth-child(2) {
  transform: scale(0.9);
  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 3s infinite;
}
.detail-block__item:nth-child(3) {
  transform: scale(0.9);
  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 2s infinite;
}
.detail-block__item:nth-child(4) {
  transform: scale(0.9);
  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 1s infinite;
}
.detail-block__item:nth-child(5) {
  transform: scale(0.9);
  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 0s infinite;
}
.detail-block__item:nth-child(6) {
  transform: scale(0.27);
}

.detail-slider__main {
  width: 100%;
  margin-bottom: 10rem;
}
.detail-slider__thumb {
  width: 100%;
}

.detail-slider-main__slide {
  cursor: pointer;
  width: 100%;
  height: 74.1rem;
}
.detail-slider-main__slide img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.detail-slider-thumb__slide {
  cursor: pointer;
  width: 38.3rem;
  height: 40.4rem;
}
.detail-slider-thumb__slide img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.fancybox__toolbar {
  display: none;
}

.fancybox__footer {
  display: none;
}

.fancybox__backdrop {
  background: rgba(239, 239, 239, 0.1);
  -webkit-backdrop-filter: blur(1.75rem);
          backdrop-filter: blur(1.75rem);
}

.fancybox__content {
  width: 120.7rem !important;
  height: 74.1rem !important;
}
.fancybox__content img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
}

.f-button {
  width: 6.4rem;
  height: 6.4rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_11___}) center/contain no-repeat;
  box-shadow: none;
}
.f-button svg {
  stroke-width: 0.1rem;
  width: 3.2rem;
  height: 3.2rem;
}
.f-button.is-close-btn svg {
  width: 2rem;
  height: 2rem;
}

.fancybox__nav {
  --f-button-width: 5rem;
  --f-button-height: 5rem;
  --f-button-color: #242424;
  --f-button-hover-color: #242424;
  --f-button-hover-bg: none;
  --f-button-active-bg: none;
  --f-button-svg-width: 2.6rem;
  --f-button-svg-height: 2.6rem;
  --f-button-svg-filter: none;
  opacity: 1;
}

.is-horizontal .f-carousel__nav .f-button.is-next,
.is-horizontal .fancybox__nav .f-button.is-next {
  right: 25.2rem;
}

.is-horizontal .f-carousel__nav .f-button.is-next,
.is-horizontal .fancybox__nav .f-button.is-prev {
  left: 25.2rem;
}

.fancybox__content > .f-button.is-close-btn {
  --f-button-width: 6.4rem;
  --f-button-height: 6.4rem;
  --f-button-border-radius: 0;
  --f-button-color: #242424;
  --f-button-hover-color: #242424;
  --f-button-svg-width: 2rem;
  --f-button-svg-height: 2rem;
  top: -13rem;
  right: -25.2rem;
  opacity: 1;
}

@media (max-width: 48em) {
  .detail {
    margin-top: 4rem;
    margin-bottom: 18rem;
  }
  .detail__inner {
    margin-bottom: 7.2rem;
  }
  .detail__main {
    gap: 3.2rem;
  }
  .detail-main {
    flex-direction: column;
  }
  .detail-main__info {
    width: 100%;
  }
  .detail-main__slider {
    width: 100%;
  }
  .detail-info {
    flex-direction: column;
  }
  .detail-info__main {
    font-size: 3.2rem;
  }
  .detail-info__date {
    margin-bottom: 0;
    font-size: 3.2rem;
  }
  .detail-info__type {
    color: #e7284a;
    font-size: 3.2rem;
    margin-bottom: 1.6rem;
  }
  .detail-info__city {
    font-size: 4.8rem;
    margin-bottom: 1.6rem;
  }
  .detail-info__block {
    display: none;
  }
  .detail-slider__main {
    margin-bottom: 0;
  }
  .detail-slider-main__slide {
    width: 62rem;
    height: 42.2rem;
  }
  .fancybox__content {
    width: 100% !important;
    height: 97.8rem !important;
  }
  .fancybox__content img {
    -o-object-fit: cover;
       object-fit: cover;
  }
  .f-button {
    width: 9.6rem;
    height: 9.6rem;
  }
  .f-button svg {
    stroke-width: 0.2rem;
    width: 4.8rem;
    height: 4.8rem;
  }
  .f-button.is-close-btn svg {
    width: 4rem;
    height: 4rem;
  }
  .fancybox__nav {
    --f-button-width: 5rem;
    --f-button-height: 5rem;
    --f-button-color: #242424;
    --f-button-hover-color: #242424;
    --f-button-hover-bg: none;
    --f-button-active-bg: none;
    --f-button-svg-width: 2.6rem;
    --f-button-svg-height: 2.6rem;
    --f-button-svg-filter: none;
    opacity: 1;
  }
  .is-horizontal .f-carousel__nav .f-button.is-next,
  .is-horizontal .fancybox__nav .f-button.is-next {
    right: 0;
  }
  .is-horizontal .f-carousel__nav .f-button.is-next,
  .is-horizontal .fancybox__nav .f-button.is-prev {
    left: 0;
  }
  .is-compact .fancybox__content > .f-button.is-close-btn {
    --f-button-border-radius: 50%;
    --f-button-color: #242424;
    --f-button-hover-color: #242424;
    --f-button-outline-color: #242424;
    --f-button-bg: none;
    --f-button-active-bg: none;
    --f-button-hover-bg: none;
    --f-button-svg-width: 3.6rem;
    --f-button-svg-height: 3.6rem;
    --f-button-svg-filter: none;
    top: -29rem;
    right: 0;
  }
}
.our_services {
  padding-top: 5rem;
}
.our_services__title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: #242424;
  font-family: "Akrobat";
  font-size: 15rem;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}
.our_services__title-img {
  width: 15rem;
  height: 13rem;
}
.our_services__title-img--mob {
  display: none;
}
.our_services__title-img img {
  width: 100%;
  height: 100%;
}
.our_services__title-text.title--opacity {
  -webkit-text-stroke: 1px #242424;
  text-stroke: 1px #242424;
  color: transparent;
}
.our_services__title-subtitle {
  color: #242424;
  font-family: "Gilroy";
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
}

.tasks__content {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.tasks__content-img {
  width: 66rem;
  height: 66rem;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 14% 100%, 0 84%);
          clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 14% 100%, 0 84%);
  overflow: hidden;
}
.tasks__content-img img {
  width: 100%;
  height: 100%;
}
.tasks__content-info {
  width: 51.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
}
.tasks__content-info--text {
  display: flex;
  gap: 0.8rem;
}
.tasks__content-info--text img {
  width: 0.4rem;
  height: 2.4rem;
}
.tasks__content-bottom {
  align-self: flex-end;
  width: 38.2rem;
  height: 36rem;
}
.tasks__content-bottom--mob {
  display: none;
}
.tasks__content-bottom img {
  width: 100%;
  height: 100%;
}
.tasks__content-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -5rem;
  bottom: 29rem;
}
.tasks__content-show {
  display: none;
}

@media (max-width: 48em) {
  .our_services__title {
    font-size: 11.6rem;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    gap: 1rem;
    text-align: center;
  }
  .our_services__title-img {
    width: 26.4rem;
    height: 12rem;
  }
  .our_services__title-img.mob--invisible {
    display: none;
  }
  .our_services__title-img--mob {
    display: block;
    width: 26.4rem;
    height: 12rem;
  }
  .our_services__title-img--mob img {
    width: 100%;
    height: 100%;
  }
  .our_services__title-subtitle {
    margin-top: 5.2rem;
  }
  .tasks__content {
    flex-direction: column;
    gap: 1.6rem;
  }
  .tasks__content-img {
    width: 33.2rem;
    height: 35.4rem;
  }
  .tasks__content-top {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .tasks__content-info {
    width: 100%;
    font-size: 3.2rem;
  }
  .tasks__content-info img {
    width: 0.8rem;
    height: 4.8rem;
  }
  .tasks__content-info--text {
    gap: 1.6rem;
  }
  .tasks__content-info--text:nth-child(n+7) {
    display: none;
  }
  .tasks__content-bottom {
    display: none;
  }
  .tasks__content-bottom--mob {
    display: block;
    width: 33rem;
    height: 26.2rem;
  }
  .tasks__content-bottom--mob img {
    width: 100%;
    height: 100%;
  }
  .tasks__content-show {
    display: block;
    color: #e84b0f;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: normal;
  }
  .tasks__content-btn {
    right: 0.3rem;
    bottom: auto;
    top: 0rem;
  }
}
.stands_container {
  padding: 0 14.7rem;
}
.stands__banner {
  position: relative;
  padding-top: 14rem;
}
.stands__banner-title {
  position: absolute;
  top: 6rem;
  display: flex;
  flex-direction: column;
  font-family: "Akrobat";
  font-size: 15rem;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
}
.stands__banner-scroll {
  top: 53rem;
  left: 35rem;
}
.stands__banner-info {
  margin-top: 18.1rem;
  font-size: 3.98rem;
  font-weight: 700;
  line-height: normal;
}
.stands__banner-img {
  margin-left: auto;
  width: 120.6rem;
  height: 47rem;
}
.stands__banner-img img {
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

@keyframes appearText {
  0% {
    opacity: 1;
    height: 0;
    padding-top: 0;
  }
  100% {
    opacity: 1;
    height: 100%;
    padding-top: 3.2rem;
  }
}
.our_projects {
  position: relative;
}
.our_projects__top {
  display: flex;
  margin-bottom: 10rem;
}
.our_projects__top-title {
  width: 120.6rem;
}
.our_projects__stands {
  display: flex;
  flex-direction: column;
  gap: 9.5rem;
}
.our_projects__stands-chapter {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.our_projects__list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(36, 36, 36, 0.4);
  border-bottom: 1px solid rgba(36, 36, 36, 0.4);
}
.our_projects__list-img {
  opacity: 0;
  position: absolute;
  top: 37rem;
  right: 27rem;
  width: 65.8rem;
  height: 94.8rem;
  overflow: hidden;
  pointer-events: none;
  z-index: 2;
  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.our_projects__list-img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.our_projects__list-img.visible {
  opacity: 1;
}
.our_projects__list-link {
  position: absolute;
  bottom: -10rem;
  left: 75rem;
}
.our_projects__list-item {
  display: flex;
  gap: 2rem;
  padding: 2.4rem 82.4rem 2.4rem 0;
  border-bottom: 1px solid rgba(36, 36, 36, 0.4);
  cursor: pointer;
}
.our_projects__list-item--btn {
  display: none;
}
.our_projects__list-item:nth-last-child(1) {
  border: none;
}
.our_projects__list-item.active .our_projects__list-item--name {
  color: #fe921f;
  margin-bottom: 3.2rem;
}
.our_projects__list-item.active .our_projects__list-item--arrow {
  transform: rotateX(180deg);
}
.our_projects__list-item--info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.our_projects__list-item--arrow {
  width: 3.2rem;
  height: 3.2rem;
  margin-bottom: 0.4rem;
  transform: rotateX(0deg);
  transition: transform 0.25s ease-in-out;
}
.our_projects__list-item--arrow img {
  width: 100%;
  height: 100%;
}
.our_projects__list-item--name {
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 0;
  font-family: "Akrobat";
  font-size: 3.4rem;
  font-weight: 700;
  line-height: normal;
  transition: margin-bottom 0.2s ease-in-out, color 0.25s ease;
}
.our_projects__list-item--title {
  width: 74.4rem;
}
.our_projects__list-item--date {
  color: #9d9d9d;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
}
.our_projects__list-item--description {
  width: 74.4rem;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: normal;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.stages {
  position: relative;
}
.stages__blocks {
  position: absolute;
  width: 67rem;
  top: 113rem;
  left: 10rem;
  transform: rotate(136.569deg);
}
.stages__blocks-item {
  position: absolute;
  width: 67rem;
  height: 92.7rem;
  border: 1px solid #c7c7c7;
}
.stages__blocks-item:nth-child(1) {
  transform: translate(0rem, 32rem);
}
.stages__blocks-item:nth-child(2) {
  transform: translate(14rem, 16rem);
}
.stages__blocks-item:nth-child(3) {
  transform: translate(28rem, 0rem);
}
.stages__title {
  display: flex;
}
.stages__title-title {
  width: 120.7rem;
}
.stages__list {
  width: 120.7rem;
  display: flex;
  gap: 17.3rem;
  flex-wrap: wrap;
  margin-left: auto;
}
.stages__list-item {
  position: relative;
  width: 17.1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.4rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.33;
}
.stages__list-item-download {
  position: absolute;
  top: -3rem;
  left: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7rem;
  height: 7rem;
}
.stages__list-item-download--back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.stages__list-item-download--back svg {
  width: 100%;
  height: 100%;
}
.stages__list-item-download--icon {
  z-index: 2;
}
.stages__list-item--photo {
  position: relative;
  width: 14rem;
  height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #242424;
  font-size: 4rem;
  font-weight: 700;
  line-height: normal;
}
.stages__list-item--photo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(15deg);
  border: 1px solid #242424;
}
.stages__contacts {
  margin-top: 20rem;
  gap: 10rem;
  justify-content: flex-end;
}
.stages__contacts .contacts-feedback__title {
  font-size: 3.4rem;
  font-weight: 700;
  line-height: normal;
}
.stages__contacts .contacts-feedback__section {
  width: 31.3rem;
}
.stages__contacts .contacts-feedback__form {
  margin-top: 7.5rem;
}

@media (max-width: 48em) {
  .stands_container {
    padding: 0 3rem;
  }
  .stands__banner {
    padding-top: 7.2rem;
  }
  .stands__banner-title {
    position: relative;
    top: auto;
    font-size: 11.6rem;
  }
  .stands__banner-img {
    width: 59.6rem;
    height: 32.4rem;
    margin-top: -4.6rem;
    margin-right: -3rem;
  }
  .stands__banner-info {
    margin-top: 8rem;
    font-size: 4rem;
    font-weight: 700;
  }
  .our_projects__top {
    flex-direction: column;
    gap: 2.4rem;
    margin-bottom: 6.4rem;
  }
  .our_projects__top-title {
    width: 98%;
    margin-bottom: 0;
  }
  .our_projects__stands-chapter {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .our_projects__list--container {
    width: 100%;
  }
  .our_projects__list-link {
    left: auto;
    right: 0;
    bottom: -20.6rem;
  }
  .our_projects__list-img {
    display: none;
    position: relative;
    width: 35.6rem;
    height: 51.6rem;
    margin: 0 auto;
    margin-top: 4rem;
    top: auto;
    right: auto;
  }
  .our_projects__list-img.visible {
    display: block;
  }
  .our_projects__list-item {
    position: relative;
    display: block;
    padding: 3.2rem 0;
  }
  .our_projects__list-item.active .our_projects__list-item--name {
    margin-bottom: 4rem;
  }
  .our_projects__list-item--btn {
    display: none;
    color: #e84b0f;
    font-size: 3.2rem;
    font-weight: 600;
    line-height: normal;
  }
  .our_projects__list-item--arrow {
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 4.8rem;
    height: 4.8rem;
  }
  .our_projects__list-item--info {
    gap: 2rem;
  }
  .our_projects__list-item--date {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: normal;
  }
  .our_projects__list-item--name {
    align-items: flex-start;
    font-family: "Akrobat";
    font-size: 4.8rem;
    font-weight: 700;
    line-height: normal;
  }
  .our_projects__list-item--description {
    display: -webkit-box;
    width: 100%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 3.2rem;
    font-weight: 400;
    line-height: normal;
  }
  .stages__blocks {
    position: absolute;
    width: 67rem;
    bottom: 78rem;
    left: auto;
    right: -61rem;
    transform: rotate(136.569deg);
  }
  .stages__blocks-item {
    position: absolute;
    width: 49.6rem;
    height: 68.6rem;
    border: 1px solid #c7c7c7;
  }
  .stages__blocks-item:nth-child(1) {
    transform: translate(0rem, 28rem);
  }
  .stages__blocks-item:nth-child(2) {
    transform: translate(15rem, 14rem);
  }
  .stages__blocks-item:nth-child(3) {
    transform: translate(28rem, 0rem);
  }
  .stages__title {
    flex-direction: column;
    gap: 2.4rem;
  }
  .stages__list {
    width: 100%;
    -moz-column-gap: 2.8rem;
         column-gap: 2.8rem;
    row-gap: 6rem;
  }
  .stages__list-item {
    width: 32.8rem;
    gap: 2.4rem;
  }
  .stages__list-item--number {
    font-size: 4rem;
    font-weight: 700;
    line-height: normal;
  }
  .stages__list-item--photo {
    width: 17.2rem;
    height: 17.2rem;
  }
  .stages__list-item--name {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: normal;
  }
  .stages__list .btn {
    flex: 1;
  }
  .stages__contacts {
    gap: 6.4rem;
  }
  .stages__contacts .contacts-feedback__section {
    width: 100%;
  }
  .stages__contacts .contacts-feedback__form {
    margin-top: 0;
  }
  .stages__contacts .form__title {
    display: none;
  }
  .stages__contacts .contacts-feedback__title {
    font-family: "Akrobat";
    font-size: 5.6rem;
    font-weight: 800;
    line-height: 1;
  }
}
.mobile {
  display: none;
}

@media (max-width: 48em) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./../../%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/ramos_expo/src/index.scss","webpack://./src/style/libs/_set.scss","webpack://./src/style/_style.scss","webpack://./src/style/components/_header.scss","webpack://./src/style/components/_footer.scss","webpack://./src/style/components/_modal.scss","webpack://./src/style/pages/_home.scss","webpack://./src/style/pages/_about.scss","webpack://./src/style/pages/_projects.scss","webpack://./src/style/pages/_contacts.scss","webpack://./src/style/pages/_detail.scss","webpack://./src/style/pages/_services.scss","webpack://./src/style/pages/_stands.scss","webpack://./src/index.scss"],"names":[],"mappings":"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","sourcesContent":["/*Gilroy*/\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 300;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Light.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 400;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 500;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 700;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Bold.ttf') format('truetype');\r\n}\r\n\r\n/*Akrobat*/\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 300;\r\n  src: url('../assets/fonts/akrobat/Akrobat-Light.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 400;\r\n  src: url('../assets/fonts/akrobat/Akrobat-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 700;\r\n  src: url('../assets/fonts/akrobat/Akrobat-Bold.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 800;\r\n  src: url('../assets/fonts/akrobat/Akrobat-ExtraBold.ttf') format('truetype');\r\n}\r\n\r\n//test\r\n@font-face {\r\n  font-family: 'Avanti';\r\n  font-weight: 400;\r\n  src: url('../assets/fonts/avanti/avanti-4.ttf') format('truetype');\r\n}\r\n// @font-face {\r\n//   font-family: 'Avanti';\r\n//   font-weight: 400;\r\n//   src: url('../assets/fonts/avanti/Akrobat-Regular.ttf') format('truetype');\r\n// }\r\n","/*Gilroy*/\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 300;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Light.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 400;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 500;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Medium.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 700;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Bold.ttf\") format(\"truetype\");\n}\n/*Akrobat*/\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 300;\n  src: url(\"../assets/fonts/akrobat/Akrobat-Light.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 400;\n  src: url(\"../assets/fonts/akrobat/Akrobat-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 700;\n  src: url(\"../assets/fonts/akrobat/Akrobat-Bold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 800;\n  src: url(\"../assets/fonts/akrobat/Akrobat-ExtraBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Avanti\";\n  font-weight: 400;\n  src: url(\"../assets/fonts/avanti/avanti-4.ttf\") format(\"truetype\");\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: \"Gilroy\";\n  font-size: 0.5208335vw;\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  color: #242424;\n  background-color: #efefef;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  color: inherit;\n}\n\na {\n  color: unset;\n}\n\na,\na:hover {\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n}\n\nbutton:focus,\ninput:focus,\na:focus,\ntextarea:focus {\n  outline: none;\n}\n\nbutton:active,\ninput:active,\na:active,\ntextarea:active {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: transparent;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.container {\n  width: 100%;\n  padding: 0 15rem;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\nsection {\n  margin-bottom: 18rem;\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: 1.3333333333vw;\n    -webkit-text-size-adjust: none;\n  }\n  body {\n    -webkit-text-size-adjust: none;\n  }\n  section {\n    margin-bottom: 18rem;\n  }\n  .container {\n    padding: 0 3rem;\n    width: 100%;\n  }\n}\nhtml {\n  scroll-behavior: smooth;\n}\n\n.title {\n  font-family: \"Akrobat\";\n  color: #242424;\n  font-size: 8rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 10rem;\n}\n\nstop {\n  transition: 0.4s ease;\n}\n\n.btn {\n  position: relative;\n  display: flex;\n  width: 16.6rem;\n  height: 16.6rem;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.btn--text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.btn svg {\n  width: 100%;\n  height: 100%;\n}\n.btn svg path {\n  -webkit-transition: fill 0.4s ease;\n  -moz-transition: fill 0.4s ease;\n  -o-transition: fill 0.4s ease;\n}\n.btn:hover svg path {\n  transition: fill 0.4s ease-in-out;\n}\n.btn:hover svg stop {\n  stop-color: #fccb17;\n}\n\n.text--opacity {\n  color: transparent;\n  -webkit-text-stroke: 1.2px #242424;\n  text-stroke: 1.2px #242424;\n}\n\n.long-btn {\n  color: #e84b0f;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2.4rem; /* 133.333% */\n  transition: background 0.2s ease-out, color 0.2s ease-out;\n  padding: 1.4rem 2.4rem;\n  border-radius: 10rem;\n  border: 0.1rem solid #fe921f;\n  display: inline-flex;\n  align-items: center;\n  gap: 2.4rem;\n}\n.long-btn span {\n  display: block;\n  position: relative;\n  width: 2.4rem;\n  height: 2.4rem;\n  transform: rotate(45deg);\n}\n.long-btn span::after {\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: #e84b0f;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  transition: background 0.2s ease-out;\n  transform: translate(-50%, -50%);\n}\n.long-btn:hover, .long-btn:focus-visible {\n  transition: background 0.2s ease-out, color 0.2s ease-out;\n  background-color: #e84b0f;\n  color: #fff;\n}\n.long-btn:hover span::after, .long-btn:focus-visible span::after {\n  background-color: #fff;\n  transition: background 0.2s ease-out;\n}\n.long-btn:disabled {\n  cursor: default;\n  background-color: #e6e6e6;\n  color: #bebebe;\n  border: 0.1rem solid #bebebe;\n}\n.long-btn:disabled span::after {\n  background-color: #bebebe;\n}\n\n.content {\n  width: 120.6rem;\n}\n.content_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.description {\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.section_name {\n  margin-top: 3.6rem;\n  flex: 1;\n  color: #e7284a;\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n.subtitle {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 3.4rem;\n  font-weight: 700;\n  line-height: normal;\n}\n\n.anim.show .anim-el {\n  transition: transform 1s ease-out, opacity 1s ease-in;\n  transform: translateX(0);\n  opacity: 1;\n}\n.anim-wrapper {\n  overflow: hidden;\n  flex: 1;\n}\n\n.anim-el {\n  transform: translateX(-100%);\n  opacity: 0;\n}\n\n.form__title {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2.4rem; /* 133.333% */\n  margin-bottom: 5rem;\n}\n.form__content {\n  margin-bottom: 5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form__personal-data {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.form-item {\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n}\n.form-item__label {\n  width: 38.2rem;\n}\n.form-item--width--100 .form-item__label {\n  width: 100%;\n}\n\n.label-input {\n  cursor: pointer;\n  position: relative;\n}\n.label-input.error input {\n  border: 0.1rem solid #e7284a;\n}\n.label-input__placeholder {\n  margin-bottom: 0.8rem;\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n}\n\n.error-text {\n  color: #e7284a;\n  font-size: 1.4rem;\n  margin-top: 0.5rem;\n  position: absolute;\n  right: 0;\n}\n\n.input {\n  width: 100%;\n  color: #242424;\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n  border: 0.1rem solid #9d9d9d;\n  padding: 1.4rem 2rem;\n}\n.input:focus-visible {\n  border: 0.1rem solid #242424;\n}\n.input::placeholder {\n  color: #9d9d9d;\n}\n\n.textarea {\n  width: 100%;\n  resize: none;\n  height: 5rem;\n  color: #242424;\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n  border: 0.1rem solid #9d9d9d;\n  padding: 1.4rem 2rem 0 2rem;\n}\n.textarea:focus-visible {\n  border: 0.1rem solid #242424;\n}\n.textarea::placeholder {\n  color: #9d9d9d;\n}\n\n.label-text {\n  color: #1a1a1a;\n  font-size: 1.8rem;\n  line-height: normal;\n}\n\n.personal-data__text a {\n  text-decoration: underline;\n  color: #fe921f;\n}\n\n.label-checkbox input {\n  appearance: none;\n  position: absolute;\n}\n.label-checkbox input:checked + .custom-checkbox {\n  background: url(../assets/images/checkbox-arrow.svg) center/1.5rem no-repeat;\n}\n\n.custom-checkbox {\n  width: 3rem;\n  height: 3rem;\n  display: block;\n  cursor: pointer;\n  border: 0.1rem solid #fe921f;\n}\n\nmain {\n  padding-top: 13.3rem;\n  overflow: hidden;\n}\n\nbody.lock {\n  touch-action: none;\n  overflow: hidden;\n}\n\n@media (max-width: 48em) {\n  .title {\n    margin-bottom: 6.4rem;\n    color: #242424;\n    font-size: 5.6rem;\n    font-weight: 800;\n    line-height: 1;\n  }\n  .btn {\n    width: 24.4rem;\n    height: 24.4rem;\n    font-size: 2.8rem;\n  }\n  .long-btn {\n    font-size: 3.2rem;\n    line-height: normal; /* 133.333% */\n    padding: 2rem 4.8rem;\n    border-radius: 10rem;\n    border: 0.2rem solid #fe921f;\n    gap: 4.8rem;\n  }\n  .long-btn span {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .long-btn span::after {\n    width: 2rem;\n    height: 2rem;\n  }\n  .subtitle {\n    font-size: 4.8rem;\n  }\n  .description {\n    font-size: 3.2rem;\n  }\n  .content {\n    width: 100%;\n  }\n  .section_name {\n    margin-top: 0;\n    flex: 1;\n    font-size: 2.8rem;\n  }\n  .block_name {\n    margin-bottom: 2.4rem;\n  }\n  .form__title {\n    font-size: 3.2rem;\n    margin-bottom: 4rem;\n    line-height: normal;\n  }\n  .form__content {\n    margin-bottom: 6.4rem;\n    gap: 2.4rem;\n  }\n  .form__personal-data {\n    gap: 2rem;\n  }\n  .form-item {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .form-item__label {\n    width: 100%;\n  }\n  .label-input__placeholder {\n    margin-bottom: 0.8rem;\n    font-size: 3.2rem;\n  }\n  .error-text {\n    font-size: 2.4rem;\n    margin-top: 0;\n  }\n  .input {\n    font-size: 3.2rem;\n    border: 0.2rem solid #9d9d9d;\n    padding: 2.4rem 4rem;\n  }\n  .input:focus-visible {\n    border: 0.2rem solid #242424;\n  }\n  .textarea {\n    height: 22.6rem;\n    font-size: 3.2rem;\n    border: 0.2rem solid #9d9d9d;\n    padding: 2.4rem 4rem;\n  }\n  .textarea:focus-visible {\n    border: 0.2rem solid #242424;\n  }\n  .label-text {\n    font-size: 3.2rem;\n  }\n  .personal-data__text a {\n    display: flex;\n  }\n  .label-checkbox input:checked + .custom-checkbox {\n    background: url(../assets/images/checkbox-arrow.svg) center/3rem no-repeat;\n  }\n  .custom-checkbox {\n    width: 6rem;\n    height: 6rem;\n    border: 0.2rem solid #fe921f;\n  }\n  .content_container {\n    flex-direction: column;\n  }\n}\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n}\n.header.scroll {\n  background-color: #efefef;\n  border-bottom: 0.1rem solid #c7c7c7;\n}\n.header__inner {\n  display: flex;\n  padding: 3.1rem 0;\n}\n@media (max-width: 48em) {\n  .header__inner.desktop {\n    display: none;\n  }\n}\n.header__inner.mobile {\n  display: none;\n}\n@media (max-width: 48em) {\n  .header__inner.mobile {\n    display: flex;\n  }\n}\n.header__left {\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  gap: 3.2rem;\n}\n.header__logo {\n  width: 15rem;\n  height: 7.1rem;\n}\n.header__logo img {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n}\n.header__right {\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n  margin-left: 20.3rem;\n}\n\n.nav__link {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.nav__link a {\n  transition: color 0.2s ease-out;\n}\n.nav__link a:hover, .nav__link a:focus-visible {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n\n.header-right__nav {\n  display: flex;\n  align-items: center;\n  gap: 3.2rem;\n}\n\n.link-menu {\n  position: absolute;\n  top: 2.1rem;\n  left: -50%;\n  width: 6.4rem;\n  height: 9.6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s linear, visibility 0.1s linear 0.2s;\n}\n.link-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.link-menu__inner {\n  width: 100%;\n  min-height: 8.4rem;\n  box-shadow: inset 0 0 0 0.1rem #242424;\n  background-color: #efefef;\n  padding: 1.6rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.link-menu-btn {\n  position: relative;\n}\n.link-menu-btn.show button {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.link-menu-btn.show button svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n.link-menu-btn.show span {\n  transition: transform 0.2s ease-in;\n  transform: rotate(-180deg);\n}\n.link-menu-btn button {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  transition: color 0.2s ease-out;\n}\n.link-menu-btn button span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease-in;\n}\n.link-menu-btn button span svg {\n  width: 1.2707rem;\n  height: 0.7061rem;\n}\n.link-menu-btn button span svg path {\n  transition: fill 0.2s ease-out;\n}\n.link-menu-btn button:hover, .link-menu-btn button:focus-visible {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.link-menu-btn button:hover svg path, .link-menu-btn button:focus-visible svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n\n.lang-radio {\n  cursor: pointer;\n}\n.lang-radio input {\n  visibility: hidden;\n  appearance: none;\n  position: absolute;\n}\n.lang-radio--desktop.active p {\n  color: #fe921f;\n}\n.lang-radio--desktop p {\n  color: #242424;\n}\n.lang-radio--desktop p:hover {\n  color: #fe921f;\n}\n\n@media (max-width: 48em) {\n  .header {\n    background-color: #efefef;\n  }\n  .header__inner {\n    padding: 2.4rem 0;\n    justify-content: space-between;\n  }\n  .header__left {\n    flex: 0;\n  }\n  .header__logo {\n    width: 18.8rem;\n    height: 8.8rem;\n  }\n  .header__right {\n    margin-left: 0;\n  }\n  .header__burger-menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    transition: transform 0.5s ease-out 0.2s;\n    transform: translate(-100%);\n  }\n  .header__burger-menu.active {\n    transition: transform 0.5s ease-out;\n    transform: translate(0);\n  }\n  .header__burger-menu.active .burger-menu__overlay {\n    transition: opacity 0.3s linear 0.4s;\n    opacity: 0.4;\n  }\n  .header-left__burger {\n    gap: 0.7rem;\n    width: 8.8rem;\n    height: 8.8rem;\n  }\n  .burger-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background: url(../../assets/images/burger-bg.svg) center/contain no-repeat;\n  }\n  .burger-btn span {\n    display: block;\n    width: 3.9rem;\n    height: 0.3rem;\n    background-color: #fff;\n    border-radius: 10rem;\n  }\n  .burger-menu__inner {\n    position: relative;\n    z-index: 1002;\n    height: 100%;\n    width: 59rem;\n    background: #efefef;\n    padding: 6.4rem 4.8rem 6.4rem 3.2rem;\n  }\n  .burger-menu__close {\n    position: absolute;\n    top: 4.8rem;\n    right: 4.8rem;\n  }\n  .burger-menu__nav {\n    display: flex;\n    flex-direction: column;\n    gap: 3.2rem;\n    padding-bottom: 5.6rem;\n    border-bottom: 0.2rem solid #9d9d9d;\n  }\n  .burger-menu__overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1001;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    background: linear-gradient(335deg, #d61607 4.71%, #f87717 50.89%, #fece24 83.73%);\n    transition: opacity 0.2s linear;\n  }\n  .burger-menu__info {\n    padding: 5.6rem 0;\n    border-bottom: 0.2rem solid #9d9d9d;\n  }\n  .burger-menu__info-content {\n    margin-bottom: 5.6rem;\n    display: flex;\n    flex-direction: column;\n    gap: 3.2rem;\n  }\n  .burger-menu__info-item {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem;\n  }\n  .burger-menu__info-item svg {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .burger-menu__info-item span {\n    color: #242424;\n    font-size: 3.6rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n  .burger-menu__info-social {\n    display: flex;\n    align-items: center;\n    gap: 3.2rem;\n  }\n  .burger-menu__social-item svg {\n    width: 6rem;\n    height: 6rem;\n  }\n  .burger-menu__lang {\n    display: flex;\n    align-items: center;\n    padding-top: 5.6rem;\n    gap: 3.2rem;\n  }\n  .burger-menu__lang-item {\n    display: flex;\n    align-items: center;\n  }\n  .header-right__call {\n    width: 8.8rem;\n    height: 8.8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    box-shadow: inset 0 0 0 1px #fe921f;\n  }\n  .header-right__call svg {\n    width: 50%;\n    height: 50%;\n  }\n  .header-right__call:hover {\n    background-color: #e84b0f;\n  }\n  .header-right__call:hover svg path {\n    fill: #fff;\n  }\n  .nav__link {\n    font-size: 3.2rem;\n  }\n  .lang-radio.active p {\n    color: #242424;\n  }\n  .lang-radio p {\n    color: #9d9d9d;\n    font-size: 3.2rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n}\n.footer__top {\n  padding-bottom: 5rem;\n  display: flex;\n  align-items: flex-end;\n  border-bottom: 0.1rem solid #9d9d9d;\n  gap: 12.6rem;\n}\n.footer__bottom {\n  padding: 5rem 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-top__logo {\n  width: 15rem;\n  height: 7.1rem;\n}\n.footer-top__nav {\n  display: flex;\n  align-items: center;\n  gap: 3.6rem;\n  flex: 1 1 auto;\n}\n.footer-top__social {\n  gap: 1.5rem;\n}\n\n.social {\n  display: flex;\n  align-items: center;\n}\n.social__item {\n  display: block;\n  width: 3rem;\n  height: 3rem;\n}\n.social__item svg {\n  width: 100%;\n  height: 100%;\n}\n\n.footer-bottom__copyright {\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.footer-bottom__info {\n  gap: 7rem;\n}\n\n.info {\n  display: flex;\n  align-items: center;\n}\n.info__item {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n}\n.info__item span {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.info__item svg {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n\n@media (max-width: 48em) {\n  .footer {\n    overflow: hidden;\n  }\n  .footer__top {\n    padding-bottom: 5.6rem;\n    flex-direction: column;\n    align-items: flex-start;\n    border-bottom: 0.2rem solid #9d9d9d;\n    gap: 5.6rem;\n  }\n  .footer__bottom {\n    padding: 5.6rem 0;\n  }\n  .footer-top__logo {\n    width: 18.8rem;\n    height: 8.8rem;\n  }\n  .footer-top__nav {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 3.2rem;\n    flex: 0;\n  }\n  .footer-top__social {\n    gap: 3.2rem;\n  }\n  .social__item {\n    width: 6rem;\n    height: 6rem;\n  }\n  .footer-bottom__copyright {\n    font-size: 3.2rem;\n    width: 53.6rem;\n  }\n  .footer-bottom__info {\n    gap: 3.2rem;\n  }\n  .info.mobile {\n    display: flex;\n    flex-direction: column;\n  }\n  .info__item {\n    gap: 2.4rem;\n  }\n  .info__item span {\n    font-size: 3.6rem;\n  }\n  .info__item svg {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1010;\n  width: 100%;\n  height: 100vh;\n}\n.modal.active {\n  display: block;\n}\n.modal-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(239, 239, 239, 0.1);\n  backdrop-filter: blur(1.75rem);\n}\n.modal-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 0.1rem solid #242424;\n  background: #efefef;\n  padding: 10rem;\n}\n.modal-wrapper::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  border: 0.1rem solid #242424;\n  transform: rotate(-3.741deg);\n}\n.modal-exit {\n  cursor: pointer;\n  position: absolute;\n  top: 2.4rem;\n  right: 2.4rem;\n  width: 3.2rem;\n  height: 3.2rem;\n}\n.modal-exit svg {\n  width: 100%;\n  height: 100%;\n}\n.modal-content {\n  display: none;\n  visibility: hidden;\n}\n.modal-content.active {\n  display: block;\n  visibility: visible;\n}\n\n.application-modal__content {\n  width: 38.2rem;\n}\n.application-modal__content.modal-content--second {\n  text-align: center;\n}\n.application-modal__content.modal-content--second .application-modal__header {\n  margin: 0 auto;\n  width: 31.3rem;\n}\n.application-modal__header {\n  display: flex;\n  flex-direction: column;\n  gap: 3.2rem;\n  width: 28.7rem;\n  margin-bottom: 3.2rem;\n}\n.application-modal__form-item {\n  margin-bottom: 3.2rem;\n}\n.application-modal__btn {\n  position: absolute;\n  bottom: -8.3rem;\n  left: 50%;\n  transform: translate(-50%);\n}\n.application-modal__btn .btn--text {\n  text-wrap: nowrap;\n}\n\n@media (max-width: 48em) {\n  .modal-wrapper {\n    border: 0.2rem solid #242424;\n    padding: 12rem 4.8rem;\n    width: 66rem;\n  }\n  .modal-wrapper::after {\n    border: 0.2rem solid #242424;\n    transform: rotate(-1.914deg);\n  }\n  .modal-exit {\n    top: 3.2rem;\n    right: 3.2rem;\n    width: 4rem;\n    height: 4rem;\n  }\n  .application-modal__content {\n    width: 100%;\n  }\n  .application-modal__content.modal-content--second .application-modal__header {\n    margin: 0;\n    width: 100%;\n  }\n  .application-modal__header {\n    gap: 4rem;\n    width: 100%;\n    margin-bottom: 4.8rem;\n  }\n  .application-modal__form-item {\n    margin-bottom: 4.8rem;\n  }\n  .application-modal__btn {\n    bottom: -13.8rem;\n  }\n}\n@keyframes animScroll1 {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.2);\n  }\n  45% {\n    transform: scale(1.2);\n  }\n  60% {\n    transform: scale(1.6);\n  }\n  75% {\n    transform: scale(2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animScroll2 {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1);\n  }\n  35% {\n    transform: scale(1.3);\n  }\n  50% {\n    transform: scale(1.4);\n  }\n  75% {\n    transform: scale(1.5);\n  }\n  80% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes appearSlide1 {\n  0% {\n    opacity: 0;\n    transition-property: opacity;\n  }\n  100% {\n    opacity: 1;\n    transition-property: opacity;\n  }\n}\n@keyframes appearSlide2 {\n  0% {\n    opacity: 0;\n    transition-property: opacity;\n  }\n  100% {\n    opacity: 1;\n    transition-property: opacity;\n  }\n}\n@keyframes appearSlide3 {\n  0% {\n    opacity: 0;\n    transition-property: opacity;\n  }\n  100% {\n    opacity: 1;\n    transition-property: opacity;\n  }\n}\n@keyframes hoverCard {\n  0% {\n    transform: rotate(20.921deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(20.921deg);\n  }\n}\n.banner {\n  position: relative;\n  margin-top: 4.6rem;\n}\n.banner_container {\n  position: relative;\n  display: flex;\n}\n.banner__scroll {\n  position: absolute;\n  top: 43.4rem;\n  left: 2.5rem;\n  width: 12rem;\n  height: 12rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n  z-index: 2;\n}\n.banner__scroll-text {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.banner__scroll-anim_1 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(1);\n  transform-origin: center;\n  animation: animScroll1 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\n}\n.banner__scroll img {\n  width: 100%;\n  height: 100%;\n}\n.banner__scroll-anim_2 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(1);\n  transform-origin: center;\n  animation: animScroll2 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\n}\n.banner__title {\n  position: relative;\n  margin-right: 7.5rem;\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: normal;\n}\n.banner__title-img {\n  position: absolute;\n  top: 9.6rem;\n  left: -15rem;\n}\n.banner__slider {\n  margin-top: -5rem;\n  padding-left: 8rem;\n  padding: 7rem 8rem;\n  width: 67.9rem;\n  height: 89.2rem;\n  overflow: hidden;\n}\n.banner__slider-wrapper {\n  position: relative;\n}\n.banner__slider-item {\n  height: 75.2rem;\n}\n.banner__main {\n  position: relative;\n  display: flex;\n  z-index: 2;\n}\n.banner__main-photo {\n  position: relative;\n  width: 51.9rem;\n  height: 75.2rem;\n}\n.banner__main-photo:hover .banner__main-img img {\n  transform: scale(1.2);\n}\n.banner__main-photo:hover .banner__main-img--back {\n  transform: rotate(0deg);\n}\n.banner__main-photo:hover .banner__main-img--back img {\n  transform: scale(1);\n}\n.banner__main-border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.banner__main-border img {\n  height: 100%;\n}\n.banner__main-img {\n  position: relative;\n  width: 51.9rem;\n  height: 75.2rem;\n  clip-path: polygon(0 0, 74.9% 0, 100% 19%, 100% 100%, 25% 100%, 0 85%);\n  overflow: hidden;\n}\n.banner__main-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1);\n  transition: transform 0.4s ease-in-out;\n}\n.banner__main-img--back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotate(20.921deg);\n  transition: transform 0.4s ease-in-out;\n  z-index: 2;\n}\n.banner__main-img--back.anim {\n  animation: hoverCard 0.6s ease-in-out;\n}\n.banner__main-img--back img {\n  width: 100%;\n  height: 100%;\n}\n.banner__main-thumb {\n  margin-left: 8rem;\n  align-self: end;\n  width: 22.2rem;\n  height: 25.4rem;\n}\n.banner__main-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.banner__main-btn {\n  position: absolute;\n  top: 17.1rem;\n  left: 60rem;\n  z-index: 2;\n}\n.banner__main-btn--text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.banner__main-text {\n  z-index: 12;\n}\n.banner__main-text--title {\n  display: flex;\n  gap: 2rem;\n  position: absolute;\n  top: 59.2%;\n  left: 15rem;\n  transform: translate(0, -50%);\n  font-family: \"Akrobat\";\n  font-size: 15rem;\n  font-weight: 800;\n  line-height: normal;\n  text-transform: uppercase;\n  color: transparent;\n  -webkit-text-stroke: 2px #242424;\n  text-stroke: 2px #242424;\n}\n.banner__main-text--title b {\n  color: #242424;\n  -webkit-text-stroke: 0;\n  text-stroke: 0;\n}\n.banner__main-text--subtitle {\n  position: absolute;\n  top: 68%;\n  right: 27.7rem;\n  transform: translate(0, -50%);\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.banner__thumbs {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.banner__thumbs-img {\n  position: relative;\n  display: none;\n  width: 22.2rem;\n  height: 25.4rem;\n}\n.banner__thumbs-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.banner__thumbs-img.next_1 {\n  display: block;\n  position: absolute;\n  display: block;\n  width: 21.2rem;\n  height: 22.8rem;\n  top: 23.8rem;\n  right: 0rem;\n  animation: appearSlide2 1s cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n.banner__thumbs-img.next_2 {\n  display: block;\n  position: absolute;\n  display: block;\n  width: 22.2rem;\n  height: 25.4rem;\n  top: 51.8rem;\n  right: 50rem;\n  animation: appearSlide1 1s cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n.banner__thumbs-img.last {\n  display: block;\n  position: absolute;\n  top: 10rem;\n  left: 0;\n  position: absolute;\n  display: block;\n  width: 22.2rem;\n  height: 25.4rem;\n  animation: appearSlide3 1s cubic-bezier(0.39, 0.575, 0.565, 1);\n}\n.banner__thumbs-img.swiper-slide-last {\n  display: block;\n  width: 21.2rem;\n  height: 22.7rem;\n}\n.banner__aside {\n  margin-left: auto;\n}\n.banner__aside-img {\n  top: 30.6rem;\n  position: absolute;\n  right: -15rem;\n  width: 21.2rem;\n  height: 22.8rem;\n}\n.banner__links {\n  margin-top: 7rem;\n  display: flex;\n  flex-direction: column;\n}\n.banner__links-item {\n  padding: 0.8rem 0;\n  border-bottom: 1px solid rgba(36, 36, 36, 0.4);\n  color: var(--Black, #242424);\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n@keyframes aboutAnim1 {\n  0% {\n    transform: rotate(45deg);\n  }\n  100% {\n    transform: rotate(405deg);\n  }\n}\n@keyframes aboutAnim2 {\n  0% {\n    transform: rotate(90deg);\n  }\n  100% {\n    transform: rotate(450deg);\n  }\n}\n@keyframes aboutAnim3 {\n  0% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(-540deg);\n  }\n}\n@keyframes aboutAnim4 {\n  0% {\n    transform: rotate(60deg);\n  }\n  100% {\n    transform: rotate(420deg);\n  }\n}\n@keyframes aboutAnim5 {\n  0% {\n    transform: rotate(130deg);\n  }\n  100% {\n    transform: rotate(490deg);\n  }\n}\n.about {\n  position: relative;\n}\n.about__blocks {\n  position: absolute;\n  top: 20rem;\n  left: -80rem;\n}\n.about__blocks-item {\n  position: absolute;\n  width: 95rem;\n  height: 95rem;\n  border: 1px solid #c7c7c7;\n}\n.about__blocks-item:nth-child(1) {\n  animation: aboutAnim1 8s linear infinite;\n  animation-duration: -1000;\n}\n.about__blocks-item:nth-child(2) {\n  animation: aboutAnim2 9s linear infinite;\n  animation-duration: -500;\n}\n.about__blocks-item:nth-child(3) {\n  animation: aboutAnim3 9s cubic-bezier(0.77, 0.91, 0.71, 0.37) infinite;\n}\n.about__blocks-item:nth-child(4) {\n  animation: aboutAnim4 7s linear infinite;\n  animation-duration: -1000;\n}\n.about__content {\n  display: flex;\n  gap: 8rem;\n}\n.about__list {\n  position: relative;\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n}\n.about__list-mark {\n  position: absolute;\n  top: -7.6rem;\n  left: -8rem;\n  width: 16.6rem;\n  height: 16.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about__list-mark--text {\n  position: absolute;\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about__info {\n  width: 60.7rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.about__info-text {\n  display: flex;\n  gap: 2.4rem;\n  flex-direction: column;\n  overflow: hidden;\n}\n.about__info-text--description {\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n}\n.about__card {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  width: 24.5rem;\n}\n.about__card-img {\n  width: 100%;\n  height: 32.6rem;\n}\n.about__card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about__card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.about__card-text--title {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about__card-text--subtitle {\n  color: #e7284a;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.advantages_container {\n  display: flex;\n}\n.advantages__list {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n.advantages__list-mob {\n  display: none;\n}\n.advantages__list-row {\n  display: flex;\n}\n.advantages__list-row .advantages__main {\n  margin-right: 16.8rem;\n}\n.advantages__info {\n  display: flex;\n  justify-content: space-between;\n}\n.advantages__info-mob {\n  display: none;\n}\n.advantages__short {\n  width: 41.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.advantages__short-number {\n  color: #242424;\n  font-size: 5rem;\n  font-weight: 400;\n  line-height: normal;\n}\n.advantages__short-text {\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: normal;\n}\n.advantages__main {\n  width: 24.4rem;\n}\n.advantages__main-icon {\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.advantages__main-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.advantages__main-name {\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.advantages__main-description {\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n}\n\n@keyframes newsBlock1 {\n  0% {\n    transform: translateY(0rem);\n  }\n  25% {\n    transform: translateY(5rem);\n  }\n  50% {\n    transform: translateY(15rem);\n  }\n  75% {\n    transform: translateY(10rem);\n  }\n  100% {\n    transform: translateY(0rem);\n  }\n}\n@keyframes newsBlock2 {\n  0% {\n    transform: translateY(0rem);\n  }\n  25% {\n    transform: translateY(-5rem);\n  }\n  50% {\n    transform: translateY(-15rem);\n  }\n  75% {\n    transform: translateY(-10rem);\n  }\n  100% {\n    transform: translateY(0rem);\n  }\n}\n.news {\n  position: relative;\n}\n.news__blocks {\n  position: absolute;\n  top: 0;\n  width: 58.3rem;\n  height: 58.3rem;\n  right: -41rem;\n  z-index: -1;\n}\n.news__blocks-item {\n  position: absolute;\n  width: 50rem;\n  height: 50rem;\n  border: 1px solid #9d9d9d;\n}\n.news__blocks-item:nth-child(1) {\n  top: 0;\n  right: 0;\n  transform: translateX(0);\n  animation: newsBlock1 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\n}\n.news__blocks-item:nth-child(2) {\n  top: 15rem;\n  right: 10rem;\n  animation: newsBlock2 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\n}\n.news__text {\n  display: flex;\n  justify-content: space-between;\n}\n.news__text-title {\n  width: 120.7rem;\n}\n.news__list {\n  display: flex;\n  justify-content: space-between;\n}\n.news__list-btn {\n  margin-top: 8.6rem;\n}\n.news__list-item {\n  width: 38.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.news__list-item:nth-child(1) .news__list-img {\n  height: 28.5rem;\n}\n.news__list-item:nth-child(2) .news__list-img {\n  height: 57.3rem;\n}\n.news__list-item:nth-child(3) .news__list-img {\n  height: 28.5rem;\n}\n.news__list-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.news__list-text--date {\n  color: #e7284a;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n@keyframes blockMove1 {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(10rem, 10rem);\n  }\n  50% {\n    transform: translate(0rem, 0rem);\n  }\n  75% {\n    transform: translate(10rem, 10rem);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes blockMove2 {\n  0% {\n    transform: translate(10rem, 10rem);\n  }\n  25% {\n    transform: translate(6rem, 6rem);\n  }\n  50% {\n    transform: translate(20rem, 20rem);\n  }\n  75% {\n    transform: translate(17rem, 25rem);\n  }\n  100% {\n    transform: translate(10rem, 10rem);\n  }\n}\n@keyframes blockMove3 {\n  0% {\n    transform: translate(20rem, 20rem);\n  }\n  25% {\n    transform: translate(15rem, 13rem);\n  }\n  50% {\n    transform: translate(10rem, 10rem);\n  }\n  75% {\n    transform: translate(15rem, 15rem);\n  }\n  100% {\n    transform: translate(20rem, 20rem);\n  }\n}\n.services {\n  position: relative;\n}\n.services__blocks {\n  position: absolute;\n  top: 48rem;\n  left: -30rem;\n  width: 82.9rem;\n  height: 97.8rem;\n  z-index: -1;\n}\n.services__blocks-item {\n  position: absolute;\n  width: 50rem;\n  height: 69.4rem;\n  border: 1px solid #c7c7c7;\n}\n.services__blocks-item:nth-child(1) {\n  animation: blockMove1 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;\n}\n.services__blocks-item:nth-child(2) {\n  animation: blockMove2 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;\n}\n.services__blocks-item:nth-child(3) {\n  animation: blockMove3 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;\n}\n.services__list {\n  display: flex;\n  flex-direction: column;\n  gap: 10rem;\n}\n.services__list-row {\n  display: flex;\n  justify-content: space-between;\n}\n.services__list-row--bottom {\n  display: flex;\n  gap: 3rem;\n}\n.services__list-btn {\n  margin-bottom: 7rem;\n}\n.services__list-column {\n  width: 100%;\n}\n.services__list-column--description {\n  width: 38.3rem;\n}\n.services__list-item {\n  width: 38.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.services__list-item--column {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.services__list-img {\n  width: 38.3rem;\n  height: 52.8rem;\n}\n.services__list-img--border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotate(-10deg);\n  transition: transform 0.3s ease-in-out;\n  z-index: 3;\n}\n.services__list-img--border img {\n  height: 100%;\n}\n.services__list-img img {\n  object-fit: cover;\n  height: 100%;\n}\n.services__list-img--column {\n  position: relative;\n  width: 79.5rem;\n  height: 43.9rem;\n  transition: transform 0.3s ease-in-out;\n}\n.services__list-img--column--back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.services__list-img--column--back img {\n  object-fit: cover;\n  height: 100%;\n}\n.services__list-img--column--inner {\n  width: 79.5rem;\n  height: 43.9rem;\n  clip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);\n  overflow: hidden;\n  z-index: 1;\n}\n.services__list-img--column--inner img {\n  object-fit: cover;\n  transform: scale(1);\n  transition: transform 0.3s ease-in-out;\n}\n.services__list-img--column:hover .services__list-img--column--inner img {\n  transform: scale(1.2);\n}\n.services__list-img--column:hover .services__list-img--border {\n  transform: rotate(0deg);\n}\n.services__list-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.services__content-bottom {\n  padding-top: 16.6rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n@media (max-width: 48em) {\n  .banner_container {\n    flex-direction: column;\n  }\n  .banner__title {\n    display: none;\n  }\n  .banner__scroll {\n    display: none;\n  }\n  .banner__slider {\n    width: 100%;\n    height: 80rem;\n    padding: 7rem 11rem;\n  }\n  .banner__slider-item {\n    width: 46rem;\n    height: 67rem;\n  }\n  .banner__main {\n    margin-top: 4rem;\n  }\n  .banner__main-btn {\n    top: 32.1rem;\n    left: 50rem;\n  }\n  .banner__main-text--title {\n    top: 62.2%;\n    left: 3.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    font-size: 11.6rem;\n    z-index: 12;\n    line-height: 1;\n    width: calc(100% - 7.2rem);\n    -webkit-text-stroke: 1px #242424;\n  }\n  .banner__main-text--title b {\n    align-self: flex-start;\n    color: #242424;\n    font-weight: 800;\n    text-transform: uppercase;\n  }\n  .banner__main-text--subtitle {\n    top: auto;\n    right: 4rem;\n    bottom: 27rem;\n    color: #242424;\n    font-size: 2.8rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .banner__main-img {\n    width: 100%;\n    height: 100%;\n  }\n  .banner__main-photo {\n    width: 100%;\n    height: 100%;\n  }\n  .banner__main-photo:hover .banner__main-img img {\n    transform: scale(1);\n  }\n  .banner__main-photo:hover .banner__main-img--back {\n    transform: rotate(20.921deg);\n  }\n  .banner__main-photo:hover .banner__main-img--back img {\n    transform: scale(1);\n  }\n  .banner__thumbs {\n    position: relative;\n    flex: 1;\n  }\n  .banner__thumbs-img {\n    display: none;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__thumbs-img.next_1 {\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__thumbs-img.next_2 {\n    display: none;\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__thumbs-img.last {\n    display: none;\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__aside {\n    margin: 0;\n    margin-top: 16rem;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: flex-end;\n  }\n  .banner__links {\n    margin-top: 0;\n    width: 39rem;\n    row-gap: 0rem;\n  }\n  .banner__links-item {\n    padding: 1.6rem 0;\n    color: #242424;\n    font-size: 2.8rem;\n    font-weight: 500;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .about__blocks {\n    top: 7rem;\n    left: auto;\n    right: 45rem;\n    z-index: -1;\n  }\n  .about__blocks-item {\n    width: 71rem;\n    height: 71rem;\n    border-color: #c7c7c7;\n  }\n  .about__content {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .about__card {\n    width: 33.2rem;\n  }\n  .about__card-img {\n    height: 48.6rem;\n  }\n  .about__card-text--title {\n    font-size: 3.6rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .about__card-text--subtitle {\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .about__list-mark {\n    top: 36.4rem;\n    left: -8rem;\n    width: 20rem;\n    height: 20rem;\n    left: auto;\n    right: 1rem;\n  }\n  .about__list-mark--text {\n    font-size: 2.8rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .about__info {\n    width: 100%;\n    gap: 7.2rem;\n  }\n  .about__info-text {\n    gap: 3.2rem;\n  }\n  .about__info-text--description {\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .advantages_container {\n    flex-direction: column;\n  }\n  .advantages__list {\n    display: none;\n  }\n  .advantages__list-mob {\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n  }\n  .advantages__list-info {\n    display: flex;\n    justify-content: space-between;\n  }\n  .advantages__list-row {\n    width: 33rem;\n    display: flex;\n    flex-direction: column;\n  }\n  .advantages__list-row .advantages__main {\n    margin-right: 0;\n  }\n  .advantages__main {\n    width: 33rem;\n  }\n  .advantages__main-name {\n    font-size: 3.6rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .advantages__main-description {\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n    text-transform: none;\n  }\n  .advantages__main-icon {\n    width: 8rem;\n    height: 8rem;\n  }\n  .advantages__info-mob {\n    margin-top: 5.8rem;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n  }\n  .advantages__short {\n    width: auto;\n    gap: 2.4rem;\n    flex: 1;\n  }\n  .advantages__short-number {\n    font-size: 5.6rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .advantages__short-text {\n    font-size: 3.2rem;\n    font-weight: 500;\n    line-height: normal;\n  }\n  .news__blocks {\n    height: 110.8rem;\n    width: 75.3rem;\n    right: -16rem;\n    top: auto;\n    bottom: -84rem;\n  }\n  .news__blocks-item {\n    height: 95rem;\n    border-color: #c7c7c7;\n  }\n  .news__text {\n    flex-direction: column;\n  }\n  .news__text-title {\n    width: 100%;\n  }\n  .news__list-item {\n    width: 44.8rem;\n  }\n  .news__list-item .news__list-img:nth-child(1) {\n    height: auto;\n  }\n  .news__list-item .news__list-img:nth-child(2) {\n    height: auto;\n  }\n  .news__list-item .news__list-img:nth-child(3) {\n    height: auto;\n  }\n  .news__list-img {\n    width: 100%;\n  }\n  .services__blocks {\n    top: auto;\n    bottom: 0;\n    right: -81rem;\n    left: auto;\n  }\n  .services__blocks-item:nth-child(1) {\n    transform: translate(-30rem, 30rem);\n    animation: none;\n  }\n  .services__blocks-item:nth-child(2) {\n    animation: none;\n    transform: translate(-15rem, 11rem);\n  }\n  .services__blocks-item:nth-child(3) {\n    animation: none;\n    transform: translate(0rem, 0rem);\n  }\n  .services__content-bottom {\n    padding-top: 5.6rem;\n    flex-direction: column;\n  }\n  .services__list {\n    gap: 11.6rem;\n  }\n  .services__list-row {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .services__list-row--bottom {\n    width: 100%;\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .services__list-item {\n    width: 100%;\n    gap: 1.6rem;\n  }\n  .services__list-item--column {\n    gap: 7.4rem;\n    flex-direction: column-reverse;\n  }\n  .services__list-column--description {\n    width: 100%;\n  }\n  .services__list-img {\n    width: 100%;\n  }\n  .services__list-img--column {\n    width: 100%;\n    height: 38.2rem;\n  }\n  .services__list-img--column--inner {\n    width: 100%;\n    height: 100%;\n  }\n  .services__list-img--column--inner img {\n    height: 100%;\n    object-fit: none;\n  }\n  .services__list-text {\n    gap: 0.4rem;\n  }\n}\n@keyframes newsBlock1 {\n  0% {\n    transform: translateY(0rem);\n  }\n  25% {\n    transform: translateY(5rem);\n  }\n  50% {\n    transform: translateY(15rem);\n  }\n  75% {\n    transform: translateY(10rem);\n  }\n  100% {\n    transform: translateY(0rem);\n  }\n}\n@keyframes newsBlock2 {\n  0% {\n    transform: translateY(0rem);\n  }\n  25% {\n    transform: translateY(-5rem);\n  }\n  50% {\n    transform: translateY(-15rem);\n  }\n  75% {\n    transform: translateY(-10rem);\n  }\n  100% {\n    transform: translateY(0rem);\n  }\n}\n.news {\n  position: relative;\n}\n.news__blocks {\n  position: absolute;\n  top: 0;\n  width: 58.3rem;\n  height: 58.3rem;\n  right: -41rem;\n  z-index: -1;\n}\n.news__blocks-item {\n  position: absolute;\n  width: 50rem;\n  height: 50rem;\n  border: 1px solid #9d9d9d;\n}\n.news__blocks-item:nth-child(1) {\n  top: 0;\n  right: 0;\n  transform: translateX(0);\n  animation: newsBlock1 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\n}\n.news__blocks-item:nth-child(2) {\n  top: 15rem;\n  right: 10rem;\n  animation: newsBlock2 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\n}\n.news__text {\n  display: flex;\n  justify-content: space-between;\n}\n.news__text-title {\n  width: 120.7rem;\n  overflow: hidden;\n}\n.news__list {\n  display: flex;\n  justify-content: space-between;\n}\n.news__list-btn {\n  margin-top: 8.6rem;\n}\n.news__list-btn--mob {\n  display: none;\n}\n.news__list-item {\n  width: 38.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.news__list-item:nth-child(1) .news__list-img {\n  height: 28.5rem;\n}\n.news__list-item:nth-child(2) .news__list-img {\n  height: 57.3rem;\n}\n.news__list-item:nth-child(3) .news__list-img {\n  height: 28.5rem;\n}\n.news__list-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@keyframes blockMove1 {\n  0% {\n    transform: translate(0, 0);\n  }\n  25% {\n    transform: translate(10rem, 10rem);\n  }\n  50% {\n    transform: translate(0rem, 0rem);\n  }\n  75% {\n    transform: translate(10rem, 10rem);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n}\n@keyframes blockMove2 {\n  0% {\n    transform: translate(10rem, 10rem);\n  }\n  25% {\n    transform: translate(6rem, 6rem);\n  }\n  50% {\n    transform: translate(20rem, 20rem);\n  }\n  75% {\n    transform: translate(17rem, 25rem);\n  }\n  100% {\n    transform: translate(10rem, 10rem);\n  }\n}\n@keyframes blockMove3 {\n  0% {\n    transform: translate(20rem, 20rem);\n  }\n  25% {\n    transform: translate(15rem, 13rem);\n  }\n  50% {\n    transform: translate(10rem, 10rem);\n  }\n  75% {\n    transform: translate(15rem, 15rem);\n  }\n  100% {\n    transform: translate(20rem, 20rem);\n  }\n}\n.services {\n  position: relative;\n}\n.services__blocks {\n  position: absolute;\n  top: 48rem;\n  left: -30rem;\n  width: 82.9rem;\n  height: 97.8rem;\n  z-index: -1;\n}\n.services__blocks-item {\n  position: absolute;\n  width: 50rem;\n  height: 69.4rem;\n  border: 1px solid #c7c7c7;\n}\n.services__blocks-item:nth-child(1) {\n  animation: blockMove1 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n}\n.services__blocks-item:nth-child(2) {\n  animation: blockMove2 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n}\n.services__blocks-item:nth-child(3) {\n  animation: blockMove3 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n}\n.services__list {\n  display: flex;\n  flex-direction: column;\n  gap: 10rem;\n}\n.services__list-row {\n  display: flex;\n  justify-content: space-between;\n}\n.services__list-row--bottom {\n  display: flex;\n  gap: 3rem;\n}\n.services__list-btn {\n  margin-bottom: 7rem;\n}\n.services__list-column {\n  width: 100%;\n}\n.services__list-column--description {\n  width: 38.3rem;\n}\n.services__list-item {\n  width: 38.3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.services__list-item--column {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n.services__list-img {\n  width: 38.3rem;\n  height: 52.8rem;\n}\n.services__list-img--border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotate(-10deg);\n  transition: transform 0.3s ease-in-out;\n  z-index: 3;\n}\n.services__list-img--border img {\n  height: 100%;\n}\n.services__list-img img {\n  object-fit: cover;\n  height: 100%;\n}\n.services__list-img--column {\n  position: relative;\n  width: 79.5rem;\n  height: 43.9rem;\n  transition: transform 0.3s ease-in-out;\n}\n.services__list-img--column--back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.services__list-img--column--back img {\n  object-fit: cover;\n  height: 100%;\n}\n.services__list-img--column--inner {\n  width: 79.5rem;\n  height: 43.9rem;\n  clip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);\n  overflow: hidden;\n  z-index: 1;\n}\n.services__list-img--column--inner img {\n  object-fit: cover;\n  transform: scale(1);\n  transition: transform 0.3s ease-in-out;\n}\n.services__list-img--column:hover .services__list-img--column--inner img {\n  transform: scale(1.2);\n}\n.services__list-img--column:hover .services__list-img--border {\n  transform: rotate(0deg);\n}\n.services__list-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.services__content-bottom {\n  padding-top: 16.6rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n@media (max-width: 48em) {\n  .banner_container {\n    flex-direction: column;\n  }\n  .banner__title {\n    display: none;\n  }\n  .banner__scroll {\n    display: none;\n  }\n  .banner__slider {\n    width: 100%;\n    height: 80rem;\n    padding: 7rem 11rem;\n  }\n  .banner__slider-item {\n    width: 46rem;\n    height: 67rem;\n  }\n  .banner__main {\n    margin-top: 4rem;\n  }\n  .banner__main-btn {\n    top: 32.1rem;\n    left: 50rem;\n  }\n  .banner__main-text--title {\n    top: 62.2%;\n    left: 3.2rem;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n    font-size: 11.6rem;\n    z-index: 12;\n    line-height: 1;\n    width: calc(100% - 7.2rem);\n    -webkit-text-stroke: 1px #242424;\n  }\n  .banner__main-text--title b {\n    align-self: flex-start;\n    color: #242424;\n    font-weight: 800;\n    text-transform: uppercase;\n  }\n  .banner__main-text--subtitle {\n    top: auto;\n    right: 4rem;\n    bottom: 27rem;\n    color: #242424;\n    font-size: 2.8rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .banner__main-img {\n    width: 100%;\n    height: 100%;\n  }\n  .banner__main-photo {\n    width: 100%;\n    height: 100%;\n  }\n  .banner__main-photo:hover .banner__main-img img {\n    transform: scale(1);\n  }\n  .banner__main-photo:hover .banner__main-img--back {\n    transform: rotate(20.921deg);\n  }\n  .banner__main-photo:hover .banner__main-img--back img {\n    transform: scale(1);\n  }\n  .banner__thumbs {\n    position: relative;\n    flex: 1;\n  }\n  .banner__thumbs-img {\n    display: none;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__thumbs-img.next_1 {\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__thumbs-img.next_2 {\n    display: none;\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__thumbs-img.last {\n    display: none;\n    position: relative;\n    top: auto;\n    left: auto;\n    right: auto;\n    bottom: auto;\n    width: 24rem;\n    height: 24rem;\n  }\n  .banner__aside {\n    margin: 0;\n    margin-top: 16rem;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: flex-end;\n  }\n  .banner__links {\n    margin-top: 0;\n    width: 39rem;\n    row-gap: 0rem;\n  }\n  .banner__links-item {\n    padding: 1.6rem 0;\n    color: #242424;\n    font-size: 2.8rem;\n    font-weight: 500;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .about__blocks {\n    top: 7rem;\n    left: auto;\n    right: 45rem;\n    z-index: -1;\n  }\n  .about__blocks-item {\n    width: 71rem;\n    height: 71rem;\n    border-color: #c7c7c7;\n  }\n  .about__content {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .about__card {\n    width: 33.2rem;\n  }\n  .about__card-img {\n    height: 48.6rem;\n  }\n  .about__card-text--title {\n    font-size: 3.6rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .about__card-text--subtitle {\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .about__list-mark {\n    top: 36.4rem;\n    left: -8rem;\n    width: 20rem;\n    height: 20rem;\n    left: auto;\n    right: 1rem;\n  }\n  .about__list-mark--text {\n    font-size: 2.8rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .about__info {\n    width: 100%;\n    gap: 7.2rem;\n  }\n  .about__info-text {\n    gap: 3.2rem;\n  }\n  .about__info-text--description {\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .advantages_container {\n    flex-direction: column;\n  }\n  .advantages__list {\n    display: none;\n  }\n  .advantages__list-mob {\n    display: flex;\n    flex-direction: column;\n    gap: 5rem;\n  }\n  .advantages__list-info {\n    display: flex;\n    justify-content: space-between;\n  }\n  .advantages__list-row {\n    width: 33rem;\n    display: flex;\n    flex-direction: column;\n  }\n  .advantages__list-row .advantages__main {\n    margin-right: 0;\n  }\n  .advantages__main {\n    width: 33rem;\n  }\n  .advantages__main-name {\n    font-size: 3.6rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .advantages__main-description {\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n    text-transform: none;\n  }\n  .advantages__main-icon {\n    width: 8rem;\n    height: 8rem;\n  }\n  .advantages__info-mob {\n    margin-top: 5.8rem;\n    display: flex;\n    flex-direction: column;\n    gap: 4rem;\n  }\n  .advantages__short {\n    width: auto;\n    gap: 2.4rem;\n    flex: 1;\n  }\n  .advantages__short-number {\n    font-size: 5.6rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .advantages__short-text {\n    font-size: 3.2rem;\n    font-weight: 500;\n    line-height: normal;\n  }\n  .news_container {\n    padding-bottom: 17rem;\n  }\n  .news__blocks {\n    height: 110.8rem;\n    width: 75.3rem;\n    right: -16rem;\n    top: auto;\n    bottom: -84rem;\n  }\n  .news__blocks-item {\n    height: 95rem;\n    border-color: #c7c7c7;\n  }\n  .news__text {\n    flex-direction: column;\n  }\n  .news__text-title {\n    width: 100%;\n  }\n  .news__list-btn {\n    display: none;\n  }\n  .news__list-btn--mob {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 2;\n  }\n  .news__list-item {\n    width: 44.8rem;\n  }\n  .news__list-item .news__list-img:nth-child(1) {\n    height: auto;\n  }\n  .news__list-item .news__list-img:nth-child(2) {\n    height: auto;\n  }\n  .news__list-item .news__list-img:nth-child(3) {\n    height: auto;\n  }\n  .news__list-text--date {\n    color: #e7284a;\n    font-family: \"Akrobat\";\n    font-size: 3.6rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .news__list-img {\n    width: 100%;\n  }\n  @keyframes blockMoveMob1 {\n    0% {\n      transform: translate(0, 0);\n    }\n    25% {\n      transform: translate(10rem, -10rem);\n    }\n    50% {\n      transform: translate(0rem, 0rem);\n    }\n    75% {\n      transform: translate(10rem, -10rem);\n    }\n    100% {\n      transform: translate(0, 0);\n    }\n  }\n  @keyframes blockMoveMob2 {\n    0% {\n      transform: translate(10rem, -10rem);\n    }\n    25% {\n      transform: translate(6rem, -6rem);\n    }\n    50% {\n      transform: translate(20rem, -20rem);\n    }\n    75% {\n      transform: translate(17rem, -25rem);\n    }\n    100% {\n      transform: translate(10rem, -10rem);\n    }\n  }\n  @keyframes blockMoveMob3 {\n    0% {\n      transform: translate(20rem, -20rem);\n    }\n    25% {\n      transform: translate(15rem, -13rem);\n    }\n    50% {\n      transform: translate(10rem, -10rem);\n    }\n    75% {\n      transform: translate(15rem, -15rem);\n    }\n    100% {\n      transform: translate(20rem, -20rem);\n    }\n  }\n  .services_container {\n    padding-bottom: 17rem;\n  }\n  .services__blocks {\n    top: auto;\n    bottom: -45rem;\n    right: -51rem;\n    left: auto;\n  }\n  .services__blocks-item:nth-child(1) {\n    transform: translate(30rem, -30rem);\n    animation: blockMoveMob1 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n  .services__blocks-item:nth-child(2) {\n    transform: translate(15rem, -11rem);\n    animation: blockMoveMob2 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n  .services__blocks-item:nth-child(3) {\n    transform: translate(0rem, 0rem);\n    animation: blockMoveMob3 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n  .services__content-bottom {\n    padding-top: 5.6rem;\n    flex-direction: column;\n  }\n  .services__list {\n    gap: 11.6rem;\n  }\n  .services__list-row {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .services__list-row--bottom {\n    width: 100%;\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .services__list-item {\n    width: 100%;\n    gap: 1.6rem;\n  }\n  .services__list-item--last .services__list-text--description {\n    width: 41rem;\n  }\n  .services__list-item--column {\n    gap: 7.4rem;\n    flex-direction: column-reverse;\n  }\n  .services__list-column--description {\n    width: 100%;\n  }\n  .services__list-img {\n    width: 100%;\n  }\n  .services__list-img--column {\n    width: 100%;\n    height: 38.2rem;\n  }\n  .services__list-img--column--inner {\n    width: 100%;\n    height: 100%;\n  }\n  .services__list-img--column--inner img {\n    height: 100%;\n    object-fit: none;\n  }\n  .services__list-btn {\n    position: absolute;\n    bottom: -12rem;\n    margin: 0;\n  }\n  .services__list-text {\n    gap: 0.4rem;\n  }\n  .services__list-text--description {\n    width: 55.2rem;\n  }\n}\n.about-intro {\n  margin-top: 1.5rem;\n  margin-bottom: 19.8rem;\n}\n.about-intro__inner {\n  position: relative;\n  height: 84.9rem;\n}\n.about-intro__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.about-intro__title {\n  text-align: center;\n  width: 92.5rem;\n  margin-bottom: 8rem;\n}\n.about-intro__subtitle {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about-intro__pictures {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n}\n.about-intro__img {\n  position: absolute;\n  z-index: -1;\n  animation-name: imageAnimation;\n  animation-timing-function: ease-in-out;\n  animation-duration: 1s;\n  animation-fill-mode: forwards;\n  opacity: 0;\n}\n.about-intro__img img {\n  transition: transform 0.5s ease-out;\n}\n.about-intro__img:hover img {\n  transition: transform 0.5s ease-out;\n  transform: scale(1.2);\n}\n.about-intro__img--1 {\n  width: 18.2rem;\n  height: 24.6rem;\n  top: 0;\n  left: 39.1rem;\n  animation-delay: 0.2s;\n}\n.about-intro__img--2 {\n  width: 32.5rem;\n  height: 19.8rem;\n  left: 64.8rem;\n  bottom: 10.8rem;\n  animation-delay: 0.4s;\n}\n.about-intro__img--3 {\n  width: 22.6rem;\n  height: 26.8rem;\n  bottom: 0;\n  left: 11.2rem;\n  animation-delay: 1s;\n}\n.about-intro__img--4 {\n  width: 35.6rem;\n  height: 21.8rem;\n  right: -20rem;\n  top: 12.4rem;\n  animation-delay: 1.5s;\n}\n.about-intro__img--5 {\n  width: 32rem;\n  height: 21.6rem;\n  left: -18.1rem;\n  top: 17.5rem;\n  animation-delay: 0.8s;\n  clip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);\n}\n.about-intro__img--6 {\n  width: 20.6rem;\n  height: 29.8rem;\n  bottom: 6.2rem;\n  right: 5.5rem;\n  animation-delay: 0.2s;\n  clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\n}\n.about-intro__img--7 {\n  width: 35.2rem;\n  height: 18.6rem;\n  top: 4.8rem;\n  right: 35.6rem;\n  animation-delay: 0.4s;\n  clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\n}\n\n.about-business {\n  margin-bottom: 20rem;\n}\n.about-business__inner {\n  display: flex;\n  overflow: hidden;\n}\n.about-business__main {\n  overflow: hidden;\n}\n.about-business__content {\n  display: flex;\n  justify-content: space-between;\n}\n.about-business__item {\n  width: 52rem;\n  overflow: hidden;\n}\n.about-business__text {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin-bottom: 5rem;\n  min-height: 10.7rem;\n}\n.about-business__text span {\n  color: #e7284a;\n  font-weight: 600;\n}\n\n.about-advantages {\n  margin-bottom: 20rem;\n  position: relative;\n}\n.about-advantages__inner {\n  display: flex;\n  overflow: hidden;\n}\n.about-advantages__container {\n  position: relative;\n}\n.about-advantages__main {\n  overflow: hidden;\n}\n.about-advantages__item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2.4rem 0;\n  border-bottom: 0.1rem solid rgba(36, 36, 36, 0.4);\n}\n.about-advantages__item:first-child {\n  padding: 0 0 2.4rem 0;\n}\n.about-advantages__item:last-child {\n  padding: 2.4rem 0 0 0;\n  border-bottom: none;\n  justify-content: center;\n  gap: 14rem;\n}\n.about-advantages__item-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 12.4rem;\n}\n.about-advantages__img {\n  width: 15rem;\n  height: 7.2rem;\n}\n.about-advantages__text {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about-advantages__text span {\n  color: #e7284a;\n}\n.about-advantages__btn {\n  position: absolute;\n  top: 16.1rem;\n  left: 43.9rem;\n}\n\n.about-feedback__inner {\n  display: flex;\n}\n.about-feedback__main {\n  display: flex;\n  gap: 3.1rem;\n}\n.about-feedback__left {\n  width: 38.2rem;\n  height: 22.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.about-feedback__description {\n  width: 75%;\n}\n.about-feedback__right {\n  flex: 1 1 auto;\n}\n.about-feedback__form {\n  margin-top: 7.5rem;\n}\n\n.about-intro-animation {\n  top: 21rem;\n  left: 28%;\n  z-index: -1;\n}\n.about-intro-animation .about__blocks-item {\n  width: 78.2164rem;\n  height: 78.2164rem;\n}\n\n.about-advantages-animation {\n  transform: rotate(45deg) scale(1.2);\n  top: 40rem;\n  left: -80rem;\n  width: 110.941rem;\n  height: 130.8809rem;\n}\n.about-advantages-animation .services__blocks-item {\n  width: 67.089rem;\n  height: 92.7639rem;\n}\n\n@keyframes imageAnimation {\n  0% {\n    opacity: 0;\n    transition: opacity 0.2s linear;\n  }\n  100% {\n    opacity: 1;\n    transition: opacity 0.2s linear;\n  }\n}\n@media (max-width: 48em) {\n  .about-intro {\n    margin-top: 3.4rem;\n    margin-bottom: 8.2rem;\n  }\n  .about-intro__inner {\n    height: 116.6rem;\n  }\n  .about-intro__title {\n    text-align: center;\n    width: 61.8rem;\n    margin-bottom: 4rem;\n  }\n  .about-intro__subtitle {\n    text-align: center;\n    position: static;\n    font-size: 2.8rem;\n    transform: none;\n  }\n  .about-intro__img--1 {\n    width: 19.8rem;\n    height: 26.2rem;\n    top: 8.6rem;\n    left: unset;\n    right: 0;\n  }\n  .about-intro__img--2 {\n    width: 26.8rem;\n    height: 16.2rem;\n    left: 17.6rem;\n    bottom: 0;\n    transform: none;\n  }\n  .about-intro__img--3 {\n    width: 19.2rem;\n    height: 22.8rem;\n    bottom: 19.6rem;\n    left: -2.8rem;\n  }\n  .about-intro__img--6 {\n    width: 17.2rem;\n    height: 24.8rem;\n    bottom: 10.6rem;\n    right: -3.2rem;\n    clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\n  }\n  .about-intro__img--7 {\n    width: 38.2rem;\n    height: 20rem;\n    top: 0;\n    right: unset;\n    left: 0;\n    clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\n  }\n  .about-business {\n    margin-bottom: 18rem;\n  }\n  .about-business__inner {\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .about-business__content {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .about-business__item {\n    width: 100%;\n  }\n  .about-business__text {\n    font-size: 3.2rem;\n    margin-bottom: 3.2rem;\n    width: 65rem;\n    min-height: unset;\n  }\n  .about-advantages {\n    margin-bottom: 31.8rem;\n  }\n  .about-advantages__inner {\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .about-advantages__item {\n    justify-content: flex-start;\n    padding: 3.2rem 0;\n    border-bottom: 0.2rem solid rgba(36, 36, 36, 0.4);\n  }\n  .about-advantages__item:first-child {\n    padding: 0 0 3.2rem 0;\n    gap: 7.2rem;\n  }\n  .about-advantages__item:first-child .about-advantages__text {\n    width: 19.4rem;\n  }\n  .about-advantages__item:nth-child(2) {\n    justify-content: flex-end;\n    gap: 4.8rem;\n  }\n  .about-advantages__item:nth-child(2) .about-advantages__text {\n    width: 25.6rem;\n  }\n  .about-advantages__item:nth-child(3) {\n    justify-content: flex-start;\n    gap: 4.8rem;\n  }\n  .about-advantages__item:nth-child(3) .about-advantages__text {\n    width: 22.2rem;\n  }\n  .about-advantages__item:nth-child(4) {\n    justify-content: center;\n    gap: unset;\n  }\n  .about-advantages__item:nth-child(4) .about-advantages__text {\n    width: 22.8rem;\n  }\n  .about-advantages__item:nth-child(5) {\n    justify-content: flex-end;\n    gap: 7.2rem;\n  }\n  .about-advantages__item:nth-child(5) .about-advantages__text {\n    width: 23.8rem;\n  }\n  .about-advantages__item:last-child {\n    padding: 3.2rem 0 0 0;\n    border-bottom: none;\n    justify-content: flex-start;\n    width: 25.8rem;\n  }\n  .about-advantages__img {\n    width: 24rem;\n    height: 11.6rem;\n  }\n  .about-advantages__text {\n    font-size: 3.6rem;\n  }\n  .about-advantages__btn {\n    position: absolute;\n    top: unset;\n    left: unset;\n    bottom: -10.4rem;\n    right: 9.8rem;\n  }\n  .about-feedback {\n    margin-bottom: 18rem;\n  }\n  .about-feedback__inner {\n    flex-direction: column;\n  }\n  .about-feedback__title {\n    font-weight: 800;\n    width: 85%;\n    line-height: 100%;\n  }\n  .about-feedback__main {\n    flex-direction: column;\n    gap: 6.4rem;\n  }\n  .about-feedback__left {\n    width: 100%;\n    height: unset;\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .about-feedback__description {\n    width: 80%;\n  }\n  .about-feedback__right {\n    flex: 0;\n  }\n  .about-feedback__form {\n    margin-top: 0;\n  }\n  .about-intro-animation {\n    top: 45rem;\n    left: 15%;\n    z-index: -1;\n  }\n  .about-intro-animation .about__blocks-item {\n    width: 52.191rem;\n    height: 52.191rem;\n  }\n  .about-advantages-animation {\n    transform: rotate(-135deg) scale(1);\n    top: 95rem;\n    left: 60rem;\n    width: 82.14rem;\n    height: 96.9034rem;\n  }\n  .about-advantages-animation .services__blocks-item {\n    width: 67.089rem;\n    height: 92.7639rem;\n  }\n  .about-advantages-animation .services__blocks-item:nth-child(1) {\n    animation: blockMove1 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n  .about-advantages-animation .services__blocks-item:nth-child(2) {\n    animation: blockMove2 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n  .about-advantages-animation .services__blocks-item:nth-child(3) {\n    animation: blockMove3 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  }\n}\n.projects {\n  margin-top: 5rem;\n  margin-bottom: 20rem;\n}\n.projects__header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 10rem;\n}\n.projects__main {\n  column-gap: 3rem;\n  row-gap: 10.3rem;\n}\n\n.projects-header__title {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 8rem;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 100%; /* 80px */\n  width: 92.5rem;\n}\n\n.category-btn {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n  transition: color 0.2s ease-out;\n}\n.category-btn.show {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.category-btn.show svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n.category-btn.show span {\n  transition: transform 0.2s ease-in;\n  transform: rotate(-180deg);\n}\n.category-btn:hover, .category-btn:focus-visible {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.category-btn:hover svg path, .category-btn:focus-visible svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n.category-menu {\n  display: flex;\n  flex-direction: column;\n  background-color: #efefef;\n  border: 0.1rem solid #242424;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s linear, visibility 0.1s linear 0.2s;\n}\n.category-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.category-menu__item {\n  display: flex;\n  align-items: center;\n}\n.category-menu__text {\n  margin-left: 1rem;\n}\n\n.projects-category {\n  position: relative;\n}\n.projects-category__btn {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n.projects-category__btn span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease-in;\n}\n.projects-category__btn span svg {\n  width: 1.2707rem;\n  height: 0.7061rem;\n}\n.projects-category__menu {\n  position: absolute;\n  right: 0;\n  top: 3.2rem;\n  z-index: 1;\n  padding: 1.6rem;\n  width: 24.8rem;\n  gap: 0.8rem;\n}\n\n.projects-main {\n  display: grid;\n  grid-template-columns: repeat(4, 38.3rem);\n}\n\n.projects-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n}\n.projects-item:hover img {\n  transition: transform 0.5s linear;\n  transform: scale(105%);\n}\n.projects-item--element {\n  position: relative;\n  justify-content: center;\n  align-items: center;\n}\n.projects-item--element .about__blocks {\n  position: relative;\n  top: -5.25rem;\n  left: -5.25rem;\n}\n.projects-item--element .about__blocks-item {\n  width: 10.5rem;\n  height: 10.5rem;\n}\n.projects-item__img {\n  overflow: hidden;\n  height: 53rem;\n  margin-bottom: 2rem;\n}\n.projects-item__img img {\n  transition: transform 0.5s linear;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.projects-item__info {\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n}\n.projects-item__description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  height: 7.2rem;\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2.4rem; /* 133.333% */\n}\n\n.project-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.project-info__name {\n  color: #e7284a;\n}\n.project-info__date {\n  color: #242424;\n}\n\n.projects-item-animation {\n  width: 13.0548rem;\n  height: 12.9817rem;\n  transform: rotate(30deg) scale(0.2);\n  top: 15rem;\n  left: 10rem;\n}\n.projects-item-animation .services__blocks-item {\n  height: 50rem;\n  border: 0.5rem solid #c7c7c7;\n}\n\n@media (max-width: 48em) {\n  .projects {\n    margin-top: 4rem;\n    margin-bottom: 37.2rem;\n  }\n  .projects__header {\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: unset;\n    gap: 6.4rem;\n    margin-bottom: 4.4rem;\n  }\n  .projects__main {\n    column-gap: unset;\n    row-gap: 5.6rem;\n  }\n  .projects-header__title {\n    font-size: 5.6rem;\n    width: 100%;\n  }\n  .category-btn {\n    font-size: 3.6rem;\n  }\n  .category-menu {\n    border: none;\n    border-top: 0.2rem solid #c7c7c7;\n  }\n  .category-menu__text {\n    margin-left: 2rem;\n  }\n  .projects-category {\n    position: static;\n  }\n  .projects-category__btn {\n    gap: 1.6rem;\n  }\n  .projects-category__btn span svg {\n    width: 2.4rem;\n    height: 1.2rem;\n  }\n  .projects-category__menu {\n    position: fixed;\n    top: unset;\n    bottom: 0;\n    z-index: 1;\n    padding: 6.4rem 3.2rem;\n    width: 100%;\n    height: unset;\n    gap: 1.6rem;\n  }\n  .projects-main {\n    grid-template-columns: 100%;\n  }\n  .projects-item__img {\n    height: 63.4rem;\n    margin-bottom: 4rem;\n  }\n  .projects-item__info {\n    gap: 2rem;\n    margin-bottom: 1.6rem;\n  }\n  .projects-item__description {\n    height: unset;\n    font-size: 3.2rem;\n    line-height: normal; /* 133.333% */\n  }\n  .project-info {\n    font-size: 3.2rem;\n  }\n}\n.contacts {\n  margin-top: 5rem;\n  margin-bottom: 20rem;\n  position: relative;\n}\n.contacts__inner {\n  position: relative;\n}\n.contacts__title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.contacts__main {\n  display: flex;\n  flex-direction: column;\n  gap: 20rem;\n}\n.contacts__item {\n  height: 70.7rem;\n}\n\n.contacts-item {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: relative;\n}\n.contacts-item:nth-child(even) {\n  justify-content: flex-end;\n}\n.contacts-item:nth-child(even) .contacts-item__info {\n  text-align: right;\n  align-items: flex-end;\n}\n.contacts-item:nth-child(even) .contacts-item__img {\n  left: -15rem;\n}\n.contacts-item:nth-child(even) .contacts-item__btn {\n  margin-left: auto;\n}\n.contacts-item__info {\n  width: 41.3rem;\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 3.4rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.contacts-item__address {\n  margin-bottom: 2rem;\n}\n.contacts-item__phone {\n  margin-bottom: 2rem;\n}\n.contacts-item__phone:hover {\n  text-decoration: underline;\n}\n.contacts-item__mail {\n  margin-bottom: 4.8rem;\n}\n.contacts-item__mail:hover {\n  text-decoration: underline;\n}\n.contacts-item__img {\n  width: 108.3rem;\n  height: 70.7rem;\n  position: absolute;\n  right: -15rem;\n  top: 0;\n}\n.contacts-item__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.contacts-feedback {\n  margin-bottom: 20rem;\n  position: relative;\n}\n.contacts-feedback__inner {\n  display: flex;\n  justify-content: space-between;\n}\n.contacts-feedback__section {\n  width: 55.3rem;\n}\n.contacts-feedback__description {\n  width: 29.4rem;\n}\n.contacts-feedback__form {\n  width: 79.4rem;\n  margin-top: 13rem;\n}\n\n.contacts-feedback-animation {\n  left: -30rem;\n  top: 25rem;\n  z-index: -1;\n}\n.contacts-feedback-animation .about__blocks-item {\n  width: 48.4731rem;\n  height: 48.4731rem;\n}\n@media (max-width: 48em) {\n  .contacts-feedback-animation {\n    display: none;\n  }\n}\n\n.contacts-block {\n  width: 77.746rem;\n  height: 77.31rem;\n  left: 150rem;\n  top: 50rem;\n  transform: rotate(30deg) scale(0.8);\n}\n.contacts-block .services__blocks-item {\n  width: 66.8026rem;\n  height: 66.5259rem;\n}\n@media (max-width: 48em) {\n  .contacts-block {\n    display: none;\n  }\n}\n\n@media (max-width: 48em) {\n  .contacts {\n    margin-top: 4rem;\n    margin-bottom: 18rem;\n  }\n  .contacts__title {\n    position: static;\n  }\n  .contacts__main {\n    gap: 5.6rem;\n  }\n  .contacts__item {\n    height: unset;\n    gap: 4rem;\n  }\n  .contacts-block {\n    display: none;\n  }\n  .contacts-item {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .contacts-item:nth-child(even) {\n    justify-content: flex-start;\n  }\n  .contacts-item:nth-child(even) .contacts-item__info {\n    text-align: left;\n    align-items: flex-start;\n  }\n  .contacts-item:nth-child(even) .contacts-item__img {\n    left: unset;\n  }\n  .contacts-item:nth-child(even) .contacts-item__btn {\n    margin-left: 0;\n  }\n  .contacts-item__info {\n    width: 100%;\n    font-size: 4.8rem;\n    order: 2;\n  }\n  .contacts-item__title {\n    margin-bottom: 2.4rem;\n  }\n  .contacts-item__address {\n    margin-bottom: 3.2rem;\n  }\n  .contacts-item__phone {\n    margin-bottom: 3.2rem;\n  }\n  .contacts-item__img {\n    width: 100%;\n    height: 43rem;\n    position: static;\n    order: 1;\n  }\n  .contacts-feedback {\n    margin-bottom: 18rem;\n  }\n  .contacts-feedback__inner {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .contacts-feedback__mail {\n    margin-bottom: 7.2rem;\n  }\n  .contacts-feedback__section {\n    width: 100%;\n  }\n  .contacts-feedback__description {\n    width: 58.8rem;\n  }\n  .contacts-feedback__form {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n@keyframes detailBlock {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0.27);\n  }\n}\n.detail {\n  margin-top: 5rem;\n  margin-bottom: 20rem;\n}\n.detail__inner {\n  margin-bottom: 10rem;\n}\n.detail__main {\n  gap: 3rem;\n}\n.detail__btn {\n  margin: 0 auto;\n}\n\n.detail-main {\n  display: flex;\n  justify-content: space-between;\n}\n.detail-main__info {\n  width: 38.3rem;\n}\n.detail-main__slider {\n  width: 120.7rem;\n}\n\n.detail-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.detail-info__main {\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n  color: #242424;\n}\n.detail-info__date {\n  display: block;\n  margin-bottom: 1.6rem;\n}\n.detail-info__type {\n  color: #e7284a;\n  margin-bottom: 2rem;\n}\n.detail-info__city {\n  font-size: 3.4rem;\n  font-weight: 700;\n  margin-bottom: 2rem;\n  font-family: \"Akrobat\";\n}\n.detail-info__volume {\n  font-weight: 500;\n}\n.detail-block {\n  width: 38.3rem;\n  height: 40.4rem;\n  border: 0.1rem solid #242424;\n  position: relative;\n}\n.detail-block__item {\n  border: 0.1rem solid #c7c7c7;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.detail-block__item:nth-child(1) {\n  transform: scale(0.9);\n}\n.detail-block__item:nth-child(2) {\n  transform: scale(0.9);\n  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 3s infinite;\n}\n.detail-block__item:nth-child(3) {\n  transform: scale(0.9);\n  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 2s infinite;\n}\n.detail-block__item:nth-child(4) {\n  transform: scale(0.9);\n  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 1s infinite;\n}\n.detail-block__item:nth-child(5) {\n  transform: scale(0.9);\n  animation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 0s infinite;\n}\n.detail-block__item:nth-child(6) {\n  transform: scale(0.27);\n}\n\n.detail-slider__main {\n  width: 100%;\n  margin-bottom: 10rem;\n}\n.detail-slider__thumb {\n  width: 100%;\n}\n\n.detail-slider-main__slide {\n  cursor: pointer;\n  width: 100%;\n  height: 74.1rem;\n}\n.detail-slider-main__slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.detail-slider-thumb__slide {\n  cursor: pointer;\n  width: 38.3rem;\n  height: 40.4rem;\n}\n.detail-slider-thumb__slide img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.fancybox__toolbar {\n  display: none;\n}\n\n.fancybox__footer {\n  display: none;\n}\n\n.fancybox__backdrop {\n  background: rgba(239, 239, 239, 0.1);\n  backdrop-filter: blur(1.75rem);\n}\n\n.fancybox__content {\n  width: 120.7rem !important;\n  height: 74.1rem !important;\n}\n.fancybox__content img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.f-button {\n  width: 6.4rem;\n  height: 6.4rem;\n  background: url(../../assets/images/f-button-bg.svg) center/contain no-repeat;\n  box-shadow: none;\n}\n.f-button svg {\n  stroke-width: 0.1rem;\n  width: 3.2rem;\n  height: 3.2rem;\n}\n.f-button.is-close-btn svg {\n  width: 2rem;\n  height: 2rem;\n}\n\n.fancybox__nav {\n  --f-button-width: 5rem;\n  --f-button-height: 5rem;\n  --f-button-color: #242424;\n  --f-button-hover-color: #242424;\n  --f-button-hover-bg: none;\n  --f-button-active-bg: none;\n  --f-button-svg-width: 2.6rem;\n  --f-button-svg-height: 2.6rem;\n  --f-button-svg-filter: none;\n  opacity: 1;\n}\n\n.is-horizontal .f-carousel__nav .f-button.is-next,\n.is-horizontal .fancybox__nav .f-button.is-next {\n  right: 25.2rem;\n}\n\n.is-horizontal .f-carousel__nav .f-button.is-next,\n.is-horizontal .fancybox__nav .f-button.is-prev {\n  left: 25.2rem;\n}\n\n.fancybox__content > .f-button.is-close-btn {\n  --f-button-width: 6.4rem;\n  --f-button-height: 6.4rem;\n  --f-button-border-radius: 0;\n  --f-button-color: #242424;\n  --f-button-hover-color: #242424;\n  --f-button-svg-width: 2rem;\n  --f-button-svg-height: 2rem;\n  top: -13rem;\n  right: -25.2rem;\n  opacity: 1;\n}\n\n@media (max-width: 48em) {\n  .detail {\n    margin-top: 4rem;\n    margin-bottom: 18rem;\n  }\n  .detail__inner {\n    margin-bottom: 7.2rem;\n  }\n  .detail__main {\n    gap: 3.2rem;\n  }\n  .detail-main {\n    flex-direction: column;\n  }\n  .detail-main__info {\n    width: 100%;\n  }\n  .detail-main__slider {\n    width: 100%;\n  }\n  .detail-info {\n    flex-direction: column;\n  }\n  .detail-info__main {\n    font-size: 3.2rem;\n  }\n  .detail-info__date {\n    margin-bottom: 0;\n    font-size: 3.2rem;\n  }\n  .detail-info__type {\n    color: #e7284a;\n    font-size: 3.2rem;\n    margin-bottom: 1.6rem;\n  }\n  .detail-info__city {\n    font-size: 4.8rem;\n    margin-bottom: 1.6rem;\n  }\n  .detail-info__block {\n    display: none;\n  }\n  .detail-slider__main {\n    margin-bottom: 0;\n  }\n  .detail-slider-main__slide {\n    width: 62rem;\n    height: 42.2rem;\n  }\n  .fancybox__content {\n    width: 100% !important;\n    height: 97.8rem !important;\n  }\n  .fancybox__content img {\n    object-fit: cover;\n  }\n  .f-button {\n    width: 9.6rem;\n    height: 9.6rem;\n  }\n  .f-button svg {\n    stroke-width: 0.2rem;\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .f-button.is-close-btn svg {\n    width: 4rem;\n    height: 4rem;\n  }\n  .fancybox__nav {\n    --f-button-width: 5rem;\n    --f-button-height: 5rem;\n    --f-button-color: #242424;\n    --f-button-hover-color: #242424;\n    --f-button-hover-bg: none;\n    --f-button-active-bg: none;\n    --f-button-svg-width: 2.6rem;\n    --f-button-svg-height: 2.6rem;\n    --f-button-svg-filter: none;\n    opacity: 1;\n  }\n  .is-horizontal .f-carousel__nav .f-button.is-next,\n  .is-horizontal .fancybox__nav .f-button.is-next {\n    right: 0;\n  }\n  .is-horizontal .f-carousel__nav .f-button.is-next,\n  .is-horizontal .fancybox__nav .f-button.is-prev {\n    left: 0;\n  }\n  .is-compact .fancybox__content > .f-button.is-close-btn {\n    --f-button-border-radius: 50%;\n    --f-button-color: #242424;\n    --f-button-hover-color: #242424;\n    --f-button-outline-color: #242424;\n    --f-button-bg: none;\n    --f-button-active-bg: none;\n    --f-button-hover-bg: none;\n    --f-button-svg-width: 3.6rem;\n    --f-button-svg-height: 3.6rem;\n    --f-button-svg-filter: none;\n    top: -29rem;\n    right: 0;\n  }\n}\n.our_services {\n  padding-top: 5rem;\n}\n.our_services__title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 4rem;\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 15rem;\n  font-weight: 800;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.our_services__title-img {\n  width: 15rem;\n  height: 13rem;\n}\n.our_services__title-img--mob {\n  display: none;\n}\n.our_services__title-img img {\n  width: 100%;\n  height: 100%;\n}\n.our_services__title-text.title--opacity {\n  -webkit-text-stroke: 1px #242424;\n  text-stroke: 1px #242424;\n  color: transparent;\n}\n.our_services__title-subtitle {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.tasks__content {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n}\n.tasks__content-img {\n  width: 66rem;\n  height: 66rem;\n  clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 14% 100%, 0 84%);\n  overflow: hidden;\n}\n.tasks__content-img img {\n  width: 100%;\n  height: 100%;\n}\n.tasks__content-info {\n  width: 51.9rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: normal;\n}\n.tasks__content-info--text {\n  display: flex;\n  gap: 0.8rem;\n}\n.tasks__content-info--text img {\n  width: 0.4rem;\n  height: 2.4rem;\n}\n.tasks__content-bottom {\n  align-self: flex-end;\n  width: 38.2rem;\n  height: 36rem;\n}\n.tasks__content-bottom--mob {\n  display: none;\n}\n.tasks__content-bottom img {\n  width: 100%;\n  height: 100%;\n}\n.tasks__content-btn {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: -5rem;\n  bottom: 29rem;\n}\n.tasks__content-show {\n  display: none;\n}\n\n@media (max-width: 48em) {\n  .our_services__title {\n    font-size: 11.6rem;\n    font-weight: 800;\n    line-height: normal;\n    text-transform: uppercase;\n    gap: 1rem;\n    text-align: center;\n  }\n  .our_services__title-img {\n    width: 26.4rem;\n    height: 12rem;\n  }\n  .our_services__title-img.mob--invisible {\n    display: none;\n  }\n  .our_services__title-img--mob {\n    display: block;\n    width: 26.4rem;\n    height: 12rem;\n  }\n  .our_services__title-img--mob img {\n    width: 100%;\n    height: 100%;\n  }\n  .our_services__title-subtitle {\n    margin-top: 5.2rem;\n  }\n  .tasks__content {\n    flex-direction: column;\n    gap: 1.6rem;\n  }\n  .tasks__content-img {\n    width: 33.2rem;\n    height: 35.4rem;\n  }\n  .tasks__content-top {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n  }\n  .tasks__content-info {\n    width: 100%;\n    font-size: 3.2rem;\n  }\n  .tasks__content-info img {\n    width: 0.8rem;\n    height: 4.8rem;\n  }\n  .tasks__content-info--text {\n    gap: 1.6rem;\n  }\n  .tasks__content-info--text:nth-child(n+7) {\n    display: none;\n  }\n  .tasks__content-bottom {\n    display: none;\n  }\n  .tasks__content-bottom--mob {\n    display: block;\n    width: 33rem;\n    height: 26.2rem;\n  }\n  .tasks__content-bottom--mob img {\n    width: 100%;\n    height: 100%;\n  }\n  .tasks__content-show {\n    display: block;\n    color: #e84b0f;\n    font-size: 3.2rem;\n    font-weight: 600;\n    line-height: normal;\n  }\n  .tasks__content-btn {\n    right: 0.3rem;\n    bottom: auto;\n    top: 0rem;\n  }\n}\n.stands_container {\n  padding: 0 14.7rem;\n}\n.stands__banner {\n  position: relative;\n  padding-top: 14rem;\n}\n.stands__banner-title {\n  position: absolute;\n  top: 6rem;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Akrobat\";\n  font-size: 15rem;\n  font-weight: 800;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.stands__banner-scroll {\n  top: 53rem;\n  left: 35rem;\n}\n.stands__banner-info {\n  margin-top: 18.1rem;\n  font-size: 3.98rem;\n  font-weight: 700;\n  line-height: normal;\n}\n.stands__banner-img {\n  margin-left: auto;\n  width: 120.6rem;\n  height: 47rem;\n}\n.stands__banner-img img {\n  height: 100%;\n  object-fit: cover;\n}\n\n@keyframes appearText {\n  0% {\n    opacity: 1;\n    height: 0;\n    padding-top: 0;\n  }\n  100% {\n    opacity: 1;\n    height: 100%;\n    padding-top: 3.2rem;\n  }\n}\n.our_projects {\n  position: relative;\n}\n.our_projects__top {\n  display: flex;\n  margin-bottom: 10rem;\n}\n.our_projects__top-title {\n  width: 120.6rem;\n}\n.our_projects__stands {\n  display: flex;\n  flex-direction: column;\n  gap: 9.5rem;\n}\n.our_projects__stands-chapter {\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.our_projects__list {\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid rgba(36, 36, 36, 0.4);\n  border-bottom: 1px solid rgba(36, 36, 36, 0.4);\n}\n.our_projects__list-img {\n  opacity: 0;\n  position: absolute;\n  top: 37rem;\n  right: 27rem;\n  width: 65.8rem;\n  height: 94.8rem;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 2;\n  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.our_projects__list-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.our_projects__list-img.visible {\n  opacity: 1;\n}\n.our_projects__list-link {\n  position: absolute;\n  bottom: -10rem;\n  left: 75rem;\n}\n.our_projects__list-item {\n  display: flex;\n  gap: 2rem;\n  padding: 2.4rem 82.4rem 2.4rem 0;\n  border-bottom: 1px solid rgba(36, 36, 36, 0.4);\n  cursor: pointer;\n}\n.our_projects__list-item--btn {\n  display: none;\n}\n.our_projects__list-item:nth-last-child(1) {\n  border: none;\n}\n.our_projects__list-item.active .our_projects__list-item--name {\n  color: #fe921f;\n  margin-bottom: 3.2rem;\n}\n.our_projects__list-item.active .our_projects__list-item--arrow {\n  transform: rotateX(180deg);\n}\n.our_projects__list-item--info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.our_projects__list-item--arrow {\n  width: 3.2rem;\n  height: 3.2rem;\n  margin-bottom: 0.4rem;\n  transform: rotateX(0deg);\n  transition: transform 0.25s ease-in-out;\n}\n.our_projects__list-item--arrow img {\n  width: 100%;\n  height: 100%;\n}\n.our_projects__list-item--name {\n  display: flex;\n  align-items: flex-end;\n  gap: 2rem;\n  margin-bottom: 0;\n  font-family: \"Akrobat\";\n  font-size: 3.4rem;\n  font-weight: 700;\n  line-height: normal;\n  transition: margin-bottom 0.2s ease-in-out, color 0.25s ease;\n}\n.our_projects__list-item--title {\n  width: 74.4rem;\n}\n.our_projects__list-item--date {\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: normal;\n}\n.our_projects__list-item--description {\n  width: 74.4rem;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n}\n\n.stages {\n  position: relative;\n}\n.stages__blocks {\n  position: absolute;\n  width: 67rem;\n  top: 113rem;\n  left: 10rem;\n  transform: rotate(136.569deg);\n}\n.stages__blocks-item {\n  position: absolute;\n  width: 67rem;\n  height: 92.7rem;\n  border: 1px solid #c7c7c7;\n}\n.stages__blocks-item:nth-child(1) {\n  transform: translate(0rem, 32rem);\n}\n.stages__blocks-item:nth-child(2) {\n  transform: translate(14rem, 16rem);\n}\n.stages__blocks-item:nth-child(3) {\n  transform: translate(28rem, 0rem);\n}\n.stages__title {\n  display: flex;\n}\n.stages__title-title {\n  width: 120.7rem;\n}\n.stages__list {\n  width: 120.7rem;\n  display: flex;\n  gap: 17.3rem;\n  flex-wrap: wrap;\n  margin-left: auto;\n}\n.stages__list-item {\n  position: relative;\n  width: 17.1rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 3.4rem;\n  text-align: center;\n  font-size: 1.8rem;\n  font-weight: 600;\n  line-height: 1.33;\n}\n.stages__list-item-download {\n  position: absolute;\n  top: -3rem;\n  left: -3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 7rem;\n  height: 7rem;\n}\n.stages__list-item-download--back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.stages__list-item-download--back svg {\n  width: 100%;\n  height: 100%;\n}\n.stages__list-item-download--icon {\n  z-index: 2;\n}\n.stages__list-item--photo {\n  position: relative;\n  width: 14rem;\n  height: 14rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #242424;\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: normal;\n}\n.stages__list-item--photo::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotate(15deg);\n  border: 1px solid #242424;\n}\n.stages__contacts {\n  margin-top: 20rem;\n  gap: 10rem;\n  justify-content: flex-end;\n}\n.stages__contacts .contacts-feedback__title {\n  font-size: 3.4rem;\n  font-weight: 700;\n  line-height: normal;\n}\n.stages__contacts .contacts-feedback__section {\n  width: 31.3rem;\n}\n.stages__contacts .contacts-feedback__form {\n  margin-top: 7.5rem;\n}\n\n@media (max-width: 48em) {\n  .stands_container {\n    padding: 0 3rem;\n  }\n  .stands__banner {\n    padding-top: 7.2rem;\n  }\n  .stands__banner-title {\n    position: relative;\n    top: auto;\n    font-size: 11.6rem;\n  }\n  .stands__banner-img {\n    width: 59.6rem;\n    height: 32.4rem;\n    margin-top: -4.6rem;\n    margin-right: -3rem;\n  }\n  .stands__banner-info {\n    margin-top: 8rem;\n    font-size: 4rem;\n    font-weight: 700;\n  }\n  .our_projects__top {\n    flex-direction: column;\n    gap: 2.4rem;\n    margin-bottom: 6.4rem;\n  }\n  .our_projects__top-title {\n    width: 98%;\n    margin-bottom: 0;\n  }\n  .our_projects__stands-chapter {\n    font-size: 2.8rem;\n    font-weight: 700;\n    line-height: normal;\n    text-transform: uppercase;\n  }\n  .our_projects__list--container {\n    width: 100%;\n  }\n  .our_projects__list-link {\n    left: auto;\n    right: 0;\n    bottom: -20.6rem;\n  }\n  .our_projects__list-img {\n    display: none;\n    position: relative;\n    width: 35.6rem;\n    height: 51.6rem;\n    margin: 0 auto;\n    margin-top: 4rem;\n    top: auto;\n    right: auto;\n  }\n  .our_projects__list-img.visible {\n    display: block;\n  }\n  .our_projects__list-item {\n    position: relative;\n    display: block;\n    padding: 3.2rem 0;\n  }\n  .our_projects__list-item.active .our_projects__list-item--name {\n    margin-bottom: 4rem;\n  }\n  .our_projects__list-item--btn {\n    display: none;\n    color: #e84b0f;\n    font-size: 3.2rem;\n    font-weight: 600;\n    line-height: normal;\n  }\n  .our_projects__list-item--arrow {\n    position: absolute;\n    top: 3rem;\n    right: 3rem;\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .our_projects__list-item--info {\n    gap: 2rem;\n  }\n  .our_projects__list-item--date {\n    font-size: 3.2rem;\n    font-weight: 500;\n    line-height: normal;\n  }\n  .our_projects__list-item--name {\n    align-items: flex-start;\n    font-family: \"Akrobat\";\n    font-size: 4.8rem;\n    font-weight: 700;\n    line-height: normal;\n  }\n  .our_projects__list-item--description {\n    display: -webkit-box;\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 4;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 3.2rem;\n    font-weight: 400;\n    line-height: normal;\n  }\n  .stages__blocks {\n    position: absolute;\n    width: 67rem;\n    bottom: 78rem;\n    left: auto;\n    right: -61rem;\n    transform: rotate(136.569deg);\n  }\n  .stages__blocks-item {\n    position: absolute;\n    width: 49.6rem;\n    height: 68.6rem;\n    border: 1px solid #c7c7c7;\n  }\n  .stages__blocks-item:nth-child(1) {\n    transform: translate(0rem, 28rem);\n  }\n  .stages__blocks-item:nth-child(2) {\n    transform: translate(15rem, 14rem);\n  }\n  .stages__blocks-item:nth-child(3) {\n    transform: translate(28rem, 0rem);\n  }\n  .stages__title {\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .stages__list {\n    width: 100%;\n    column-gap: 2.8rem;\n    row-gap: 6rem;\n  }\n  .stages__list-item {\n    width: 32.8rem;\n    gap: 2.4rem;\n  }\n  .stages__list-item--number {\n    font-size: 4rem;\n    font-weight: 700;\n    line-height: normal;\n  }\n  .stages__list-item--photo {\n    width: 17.2rem;\n    height: 17.2rem;\n  }\n  .stages__list-item--name {\n    font-size: 3.2rem;\n    font-weight: 600;\n    line-height: normal;\n  }\n  .stages__list .btn {\n    flex: 1;\n  }\n  .stages__contacts {\n    gap: 6.4rem;\n  }\n  .stages__contacts .contacts-feedback__section {\n    width: 100%;\n  }\n  .stages__contacts .contacts-feedback__form {\n    margin-top: 0;\n  }\n  .stages__contacts .form__title {\n    display: none;\n  }\n  .stages__contacts .contacts-feedback__title {\n    font-family: \"Akrobat\";\n    font-size: 5.6rem;\n    font-weight: 800;\n    line-height: 1;\n  }\n}\n.mobile {\n  display: none;\n}\n\n@media (max-width: 48em) {\n  .desktop {\n    display: none;\n  }\n  .mobile {\n    display: block;\n  }\n}","*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: 'Gilroy';\r\n  font-size: 0.5208335vw;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  -webkit-animation: bugfix infinite 1s;\r\n  line-height: 1.2;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  -webkit-animation: bugfix infinite 1s;\r\n  line-height: 1.2;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #242424;\r\n  background-color: #efefef;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  -webkit-animation: bugfix infinite 1s;\r\n  line-height: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: inherit;\r\n}\r\n\r\na {\r\n  color: unset;\r\n}\r\n\r\na,\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\na,\r\ntextarea {\r\n  outline: none;\r\n  cursor: pointer;\r\n  font: inherit;\r\n}\r\nbutton:focus,\r\ninput:focus,\r\na:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n}\r\nbutton:active,\r\ninput:active,\r\na:active,\r\ntextarea:active {\r\n  outline: none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  color: inherit;\r\n  font: inherit;\r\n  text-align: inherit;\r\n  padding: 0;\r\n  background-color: transparent;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nul li {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  padding: 0 15rem;\r\n}\r\n\r\ninput[type='number']::-webkit-inner-spin-button,\r\ninput[type='number']::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type='number'] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\nsection {\r\n  margin-bottom: 18rem;\r\n}\r\n\r\n@media (max-width: 48em) {\r\n  html {\r\n    font-size: 5px;\r\n    font-size: 1.5625vw;\r\n    font-size: 1.3333333333vw;\r\n    -webkit-text-size-adjust: none;\r\n  }\r\n  body {\r\n    -webkit-text-size-adjust: none;\r\n  }\r\n  section {\r\n    margin-bottom: 18rem;\r\n  }\r\n  .container {\r\n    padding: 0 3rem;\r\n    width: 100%;\r\n  }\r\n}\r\n","html {\r\n\tscroll-behavior: smooth;\r\n}\r\n.title {\r\n\tfont-family: \"Akrobat\";\r\n\tcolor: #242424;\r\n\tfont-size: 8rem;\r\n\tfont-weight: 800;\r\n\tline-height: 1;\r\n\tmargin-bottom: 10rem;\r\n}\r\nstop {\r\n\ttransition: 0.4s ease;\r\n}\r\n.btn {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\twidth: 16.6rem;\r\n\theight: 16.6rem;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: #fff;\r\n\tfont-size: 1.6rem;\r\n\tfont-weight: 700;\r\n\tline-height: normal;\r\n\ttext-transform: uppercase;\r\n\r\n\t&--text {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\ttransform: translate(-50%, -50%);\r\n\t\ttext-align: center;\r\n\t}\r\n\tsvg {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tpath {\r\n\t\t\t-webkit-transition: fill 0.4s ease;\r\n\t\t\t-moz-transition: fill 0.4s ease;\r\n\t\t\t-o-transition: fill 0.4s ease;\r\n\t\t}\r\n\t}\r\n\t&:hover {\r\n\t\tsvg {\r\n\t\t\tpath {\r\n\t\t\t\t//   fill: #fccb17;\r\n\t\t\t\ttransition: fill 0.4s ease-in-out;\r\n\t\t\t}\r\n\t\t\tstop {\r\n\t\t\t\tstop-color: #fccb17;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.text--opacity {\r\n\tcolor: transparent;\r\n\t-webkit-text-stroke: 1.2px #242424;\r\n\ttext-stroke: 1.2px #242424;\r\n}\r\n.long-btn {\r\n\tcolor: #e84b0f;\r\n\tfont-family: \"Gilroy\";\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tfont-weight: 600;\r\n\tline-height: 2.4rem; /* 133.333% */\r\n\r\n\ttransition:\r\n\t\tbackground 0.2s ease-out,\r\n\t\tcolor 0.2s ease-out;\r\n\r\n\tpadding: 1.4rem 2.4rem;\r\n\tborder-radius: 10rem;\r\n\tborder: 0.1rem solid #fe921f;\r\n\r\n\tdisplay: inline-flex;\r\n\talign-items: center;\r\n\tgap: 2.4rem;\r\n\r\n\tspan {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: 2.4rem;\r\n\t\theight: 2.4rem;\r\n\t\ttransform: rotate(45deg);\r\n\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\twidth: 1rem;\r\n\t\t\theight: 1rem;\r\n\t\t\tbackground-color: #e84b0f;\r\n\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 50%;\r\n\t\t\tz-index: 1;\r\n\r\n\t\t\ttransition: background 0.2s ease-out;\r\n\t\t\ttransform: translate(-50%, -50%);\r\n\t\t}\r\n\t}\r\n\r\n\t&:hover,\r\n\t&:focus-visible {\r\n\t\ttransition:\r\n\t\t\tbackground 0.2s ease-out,\r\n\t\t\tcolor 0.2s ease-out;\r\n\t\tbackground-color: #e84b0f;\r\n\t\tcolor: #fff;\r\n\r\n\t\tspan::after {\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransition: background 0.2s ease-out;\r\n\t\t}\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tcursor: default;\r\n\t\tbackground-color: #e6e6e6;\r\n\t\tcolor: #bebebe;\r\n\t\tborder: 0.1rem solid #bebebe;\r\n\r\n\t\tspan::after {\r\n\t\t\tbackground-color: #bebebe;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.content {\r\n\twidth: 120.6rem;\r\n\t&_container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n}\r\n\r\n.description {\r\n\tcolor: #9d9d9d;\r\n\tfont-size: 1.8rem;\r\n\tfont-weight: 500;\r\n\tline-height: normal;\r\n}\r\n.section_name {\r\n\tmargin-top: 3.6rem;\r\n\tflex: 1;\r\n\tcolor: #e7284a;\r\n\tfont-size: 1.6rem;\r\n\tfont-weight: 500;\r\n\tline-height: normal;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.subtitle {\r\n\tcolor: #242424;\r\n\tfont-family: \"Akrobat\";\r\n\tfont-size: 3.4rem;\r\n\tfont-weight: 700;\r\n\tline-height: normal;\r\n}\r\n\r\n.anim {\r\n\t&.show .anim-el {\r\n\t\ttransition:\r\n\t\t\ttransform 1s ease-out,\r\n\t\t\topacity 1s ease-in;\r\n\t\ttransform: translateX(0);\r\n\t\topacity: 1;\r\n\t}\r\n\t&-wrapper {\r\n\t\toverflow: hidden;\r\n\t\tflex: 1;\r\n\t}\r\n}\r\n\r\n.anim-el {\r\n\ttransform: translateX(-100%);\r\n\topacity: 0;\r\n}\r\n\r\n.form {\r\n\t// .form__title\r\n\t&__title {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 600;\r\n\t\tline-height: 2.4rem; /* 133.333% */\r\n\t\tmargin-bottom: 5rem;\r\n\t}\r\n\t// .form__content\r\n\t&__content {\r\n\t\tmargin-bottom: 5rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 2rem;\r\n\t}\r\n\r\n\t&__personal-data {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1rem;\r\n\t}\r\n\r\n\t&-item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 3rem;\r\n\t\t// .form-item__label\r\n\t\t&__label {\r\n\t\t\twidth: 38.2rem;\r\n\t\t}\r\n\r\n\t\t&--width--100 {\r\n\t\t\t.form-item__label {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.label-input {\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n\r\n\t&.error input {\r\n\t\tborder: 0.1rem solid #e7284a;\r\n\t}\r\n\t// .form-label__placeholder\r\n\t&__placeholder {\r\n\t\tmargin-bottom: 0.8rem;\r\n\r\n\t\tcolor: #9d9d9d;\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tline-height: normal;\r\n\t}\r\n}\r\n\r\n.error-text {\r\n\tcolor: #e7284a;\r\n\tfont-size: 1.4rem;\r\n\tmargin-top: 0.5rem;\r\n\r\n\tposition: absolute;\r\n\tright: 0;\r\n}\r\n\r\n.input {\r\n\twidth: 100%;\r\n\tcolor: #242424;\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tline-height: normal;\r\n\r\n\tborder: 0.1rem solid #9d9d9d;\r\n\tpadding: 1.4rem 2rem;\r\n\r\n\t&:focus-visible {\r\n\t\tborder: 0.1rem solid #242424;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tcolor: #9d9d9d;\r\n\t}\r\n}\r\n.textarea {\r\n\twidth: 100%;\r\n\tresize: none;\r\n\theight: 5rem;\r\n\tcolor: #242424;\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tline-height: normal;\r\n\r\n\tborder: 0.1rem solid #9d9d9d;\r\n\tpadding: 1.4rem 2rem 0 2rem;\r\n\r\n\t&:focus-visible {\r\n\t\tborder: 0.1rem solid #242424;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tcolor: #9d9d9d;\r\n\t}\r\n}\r\n\r\n.label-text {\r\n\tcolor: #1a1a1a;\r\n\tfont-size: 1.8rem;\r\n\tline-height: normal;\r\n}\r\n\r\n.personal-data {\r\n\t// .personal-data__text\r\n\t&__text {\r\n\t\ta {\r\n\t\t\ttext-decoration: underline;\r\n\t\t\tcolor: #fe921f;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.label-checkbox {\r\n\tinput {\r\n\t\tappearance: none;\r\n\t\tposition: absolute;\r\n\r\n\t\t&:checked + .custom-checkbox {\r\n\t\t\tbackground: url(../assets/images/checkbox-arrow.svg) center / 1.5rem no-repeat;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.custom-checkbox {\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\r\n\tborder: 0.1rem solid #fe921f;\r\n}\r\n\r\nmain {\r\n\tpadding-top: 13.3rem;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody {\r\n\t&.lock {\r\n\t\ttouch-action: none;\r\n\t\toverflow: hidden;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.title {\r\n\t\tmargin-bottom: 6.4rem;\r\n\t\tcolor: #242424;\r\n\t\tfont-size: 5.6rem;\r\n\t\tfont-weight: 800;\r\n\t\tline-height: 1;\r\n\t}\r\n\t.btn {\r\n\t\twidth: 24.4rem;\r\n\t\theight: 24.4rem;\r\n\t\tfont-size: 2.8rem;\r\n\t}\r\n\t.long-btn {\r\n\t\tfont-size: 3.2rem;\r\n\t\tline-height: normal; /* 133.333% */\r\n\r\n\t\tpadding: 2rem 4.8rem;\r\n\t\tborder-radius: 10rem;\r\n\t\tborder: 0.2rem solid #fe921f;\r\n\r\n\t\tgap: 4.8rem;\r\n\r\n\t\tspan {\r\n\t\t\twidth: 4.8rem;\r\n\t\t\theight: 4.8rem;\r\n\r\n\t\t\t&::after {\r\n\t\t\t\twidth: 2rem;\r\n\t\t\t\theight: 2rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.subtitle {\r\n\t\tfont-size: 4.8rem;\r\n\t}\r\n\t.description {\r\n\t\tfont-size: 3.2rem;\r\n\t}\r\n\t.content {\r\n\t\twidth: 100%;\r\n\t}\r\n\t.section_name {\r\n\t\tmargin-top: 0;\r\n\t\tflex: 1;\r\n\t\tfont-size: 2.8rem;\r\n\t}\r\n\t.block_name {\r\n\t\tmargin-bottom: 2.4rem;\r\n\t}\r\n\t.form {\r\n\t\t&__title {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tmargin-bottom: 4rem;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t\t// .form__content\r\n\t\t&__content {\r\n\t\t\tmargin-bottom: 6.4rem;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\r\n\t\t&__personal-data {\r\n\t\t\tgap: 2rem;\r\n\t\t}\r\n\r\n\t\t&-item {\r\n\t\t\talign-items: flex-start;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t\t// .form-item__label\r\n\t\t\t&__label {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.label-input {\r\n\t\t// .form-label__placeholder\r\n\t\t&__placeholder {\r\n\t\t\tmargin-bottom: 0.8rem;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t}\r\n\t}\r\n\r\n\t.error-text {\r\n\t\tfont-size: 2.4rem;\r\n\t\tmargin-top: 0;\r\n\t}\r\n\r\n\t.input {\r\n\t\tfont-size: 3.2rem;\r\n\r\n\t\tborder: 0.2rem solid #9d9d9d;\r\n\t\tpadding: 2.4rem 4rem;\r\n\r\n\t\t&:focus-visible {\r\n\t\t\tborder: 0.2rem solid #242424;\r\n\t\t}\r\n\t}\r\n\r\n\t.textarea {\r\n\t\theight: 22.6rem;\r\n\t\tfont-size: 3.2rem;\r\n\r\n\t\tborder: 0.2rem solid #9d9d9d;\r\n\t\tpadding: 2.4rem 4rem;\r\n\r\n\t\t&:focus-visible {\r\n\t\t\tborder: 0.2rem solid #242424;\r\n\t\t}\r\n\t}\r\n\r\n\t.label-text {\r\n\t\tfont-size: 3.2rem;\r\n\t}\r\n\r\n\t.personal-data {\r\n\t\t// .personal-data__text\r\n\t\t&__text {\r\n\t\t\ta {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.label-checkbox {\r\n\t\tinput {\r\n\t\t\t&:checked + .custom-checkbox {\r\n\t\t\t\tbackground: url(../assets/images/checkbox-arrow.svg) center / 3rem no-repeat;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.custom-checkbox {\r\n\t\twidth: 6rem;\r\n\t\theight: 6rem;\r\n\r\n\t\tborder: 0.2rem solid #fe921f;\r\n\t}\r\n\t.content_container {\r\n\t\tflex-direction: column;\r\n\t}\r\n}\r\n",".header {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1000;\r\n\r\n\twidth: 100%;\r\n\r\n\t&.scroll {\r\n\t\tbackground-color: #efefef;\r\n\t\tborder-bottom: 0.1rem solid #c7c7c7;\r\n\t}\r\n\t// .header__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t\tpadding: 3.1rem 0;\r\n\r\n\t\t&.desktop {\r\n\t\t\t@media (max-width: 48em) {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.mobile {\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width: 48em) {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .header__left\r\n\t&__left {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tflex: 1 1 auto;\r\n\t\tgap: 3.2rem;\r\n\t}\r\n\t// .header__logo\r\n\t&__logo {\r\n\t\twidth: 15rem;\r\n\t\theight: 7.1rem;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t\tobject-fit: contain;\r\n\t\t}\r\n\t}\r\n\t// .header__right\r\n\t&__right {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1.6rem;\r\n\t\tmargin-left: 20.3rem;\r\n\t}\r\n}\r\n\r\n.nav {\r\n\t// .nav__link\r\n\t&__link {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 500;\r\n\t\tline-height: normal;\r\n\r\n\t\ta {\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\r\n\t\t\t&:hover,\r\n\t\t\t&:focus-visible {\r\n\t\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.header-right {\r\n\t// .header-right__nav\r\n\t&__nav {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 3.2rem;\r\n\t}\r\n}\r\n\r\n.link-menu {\r\n\tposition: absolute;\r\n\ttop: 2.1rem;\r\n\tleft: -50%;\r\n\twidth: 6.4rem;\r\n\theight: 9.6rem;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-end;\r\n\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransition:\r\n\t\topacity 0.2s linear,\r\n\t\tvisibility 0.1s linear 0.2s;\r\n\r\n\t&.show {\r\n\t\topacity: 1;\r\n\t\tvisibility: visible;\r\n\t\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n\t&__inner {\r\n\t\twidth: 100%;\r\n\t\tmin-height: 8.4rem;\r\n\t\tbox-shadow: inset 0 0 0 0.1rem #242424;\r\n\r\n\t\tbackground-color: #efefef;\r\n\t\tpadding: 1.6rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 0.8rem;\r\n\t}\r\n\t&-btn {\r\n\t\tposition: relative;\r\n\r\n\t\t&.show {\r\n\t\t\tbutton {\r\n\t\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t\tsvg {\r\n\t\t\t\t\tpath {\r\n\t\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\ttransition: transform 0.2s ease-in;\r\n\t\t\t\ttransform: rotate(-180deg);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tbutton {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 0.8rem;\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\r\n\t\t\tspan {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\ttransition: transform 0.2s ease-in;\r\n\t\t\t\tsvg {\r\n\t\t\t\t\twidth: 1.2707rem;\r\n\t\t\t\t\theight: 0.7061rem;\r\n\t\t\t\t\tpath {\r\n\t\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&:hover,\r\n\t\t\t&:focus-visible {\r\n\t\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t\tsvg {\r\n\t\t\t\t\tpath {\r\n\t\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.lang-radio {\r\n\tcursor: pointer;\r\n\r\n\tinput {\r\n\t\tvisibility: hidden;\r\n\t\tappearance: none;\r\n\t\tposition: absolute;\r\n\t}\r\n\r\n\t&--desktop {\r\n\t\t&.active {\r\n\t\t\tp {\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tcolor: #242424;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.header {\r\n\t\tbackground-color: #efefef;\r\n\t\t// .header__inner\r\n\t\t&__inner {\r\n\t\t\tpadding: 2.4rem 0;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t\t// .header__left\r\n\t\t&__left {\r\n\t\t\tflex: 0;\r\n\t\t}\r\n\t\t// .header__logo\r\n\t\t&__logo {\r\n\t\t\twidth: 18.8rem;\r\n\t\t\theight: 8.8rem;\r\n\t\t}\r\n\t\t// .header__right\r\n\t\t&__right {\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\t\t// .header__burger-menu\r\n\t\t&__burger-menu {\r\n\t\t\tposition: fixed;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100vh;\r\n\r\n\t\t\ttransition: transform 0.5s ease-out 0.2s;\r\n\t\t\ttransform: translate(-100%);\r\n\r\n\t\t\t&.active {\r\n\t\t\t\ttransition: transform 0.5s ease-out;\r\n\t\t\t\ttransform: translate(0);\r\n\r\n\t\t\t\t.burger-menu__overlay {\r\n\t\t\t\t\ttransition: opacity 0.3s linear 0.4s;\r\n\t\t\t\t\topacity: 0.4;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.header-left {\r\n\t\t// .header-left__burger\r\n\t\t&__burger {\r\n\t\t\tgap: 0.7rem;\r\n\r\n\t\t\twidth: 8.8rem;\r\n\t\t\theight: 8.8rem;\r\n\t\t}\r\n\t}\r\n\t.burger-btn {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\r\n\t\tbackground: url(../../assets/images/burger-bg.svg) center / contain no-repeat;\r\n\r\n\t\tspan {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 3.9rem;\r\n\t\t\theight: 0.3rem;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\tborder-radius: 10rem;\r\n\t\t}\r\n\t}\r\n\t.burger-menu {\r\n\t\t// .burger-menu__inner\r\n\t\t&__inner {\r\n\t\t\tposition: relative;\r\n\t\t\tz-index: 1002;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 59rem;\r\n\t\t\tbackground: #efefef;\r\n\t\t\tpadding: 6.4rem 4.8rem 6.4rem 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__close\r\n\t\t&__close {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 4.8rem;\r\n\t\t\tright: 4.8rem;\r\n\t\t}\r\n\t\t// .burger-menu__nav\r\n\t\t&__nav {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 3.2rem;\r\n\r\n\t\t\tpadding-bottom: 5.6rem;\r\n\t\t\tborder-bottom: 0.2rem solid #9d9d9d;\r\n\t\t}\r\n\t\t// .burger-menu__overlay\r\n\t\t&__overlay {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tz-index: 1001;\r\n\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\r\n\t\t\topacity: 0;\r\n\t\t\tbackground: linear-gradient(335deg, #d61607 4.71%, #f87717 50.89%, #fece24 83.73%);\r\n\t\t\ttransition: opacity 0.2s linear;\r\n\t\t}\r\n\t\t// .burger-menu__info\r\n\t\t&__info {\r\n\t\t\tpadding: 5.6rem 0;\r\n\t\t\tborder-bottom: 0.2rem solid #9d9d9d;\r\n\t\t}\r\n\t\t// .burger-menu__info-content\r\n\t\t&__info-content {\r\n\t\t\tmargin-bottom: 5.6rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__info-item\r\n\t\t&__info-item {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 2.4rem;\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 4.8rem;\r\n\t\t\t\theight: 4.8rem;\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t\tfont-size: 3.6rem;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .burger-menu__info-social\r\n\t\t&__info-social {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__social-item\r\n\t\t&__social-item {\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 6rem;\r\n\t\t\t\theight: 6rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .burger-menu__lang\r\n\t\t&__lang {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding-top: 5.6rem;\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__lang-item\r\n\t\t&__lang-item {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\t.header-right {\r\n\t\t// .header-right__call\r\n\t\t&__call {\r\n\t\t\twidth: 8.8rem;\r\n\t\t\theight: 8.8rem;\r\n\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #fe921f;\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 50%;\r\n\t\t\t\theight: 50%;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #e84b0f;\r\n\r\n\t\t\t\tsvg path {\r\n\t\t\t\t\tfill: #fff;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.nav {\r\n\t\t// .nav__link\r\n\t\t&__link {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.lang-radio {\r\n\t\t&.active {\r\n\t\t\tp {\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tcolor: #9d9d9d;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t}\r\n}\r\n",".footer {\r\n\t// .footer__top\r\n\t&__top {\r\n\t\tpadding-bottom: 5rem;\r\n\t\tdisplay: flex;\r\n\t\talign-items: flex-end;\r\n\t\tborder-bottom: 0.1rem solid #9d9d9d;\r\n\t\tgap: 12.6rem;\r\n\t}\r\n\t// .footer__bottom\r\n\t&__bottom {\r\n\t\tpadding: 5rem 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n}\r\n.footer-top {\r\n\t// .footer-top__logo\r\n\t&__logo {\r\n\t\twidth: 15rem;\r\n\t\theight: 7.1rem;\r\n\t}\r\n\t// .footer-top__nav\r\n\t&__nav {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 3.6rem;\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// .footer-top__social\r\n\t&__social {\r\n\t\tgap: 1.5rem;\r\n\t}\r\n}\r\n.social {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\r\n\t// .social__item\r\n\t&__item {\r\n\t\tdisplay: block;\r\n\t\twidth: 3rem;\r\n\t\theight: 3rem;\r\n\r\n\t\tsvg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n.footer-bottom {\r\n\t// .footer-bottom__copyright\r\n\t&__copyright {\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 500;\r\n\t\tline-height: normal;\r\n\t}\r\n\t// .footer-bottom__info\r\n\t&__info {\r\n\t\tgap: 7rem;\r\n\t}\r\n}\r\n.info {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t// .info__item\r\n\t&__item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1.2rem;\r\n\r\n\t\tspan {\r\n\t\t\tcolor: #242424;\r\n\t\t\tfont-family: \"Gilroy\";\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\r\n\t\tsvg {\r\n\t\t\twidth: 2.4rem;\r\n\t\t\theight: 2.4rem;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.footer {\r\n\t\toverflow: hidden;\r\n\t\t// .footer__top\r\n\t\t&__top {\r\n\t\t\tpadding-bottom: 5.6rem;\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: flex-start;\r\n\t\t\tborder-bottom: 0.2rem solid #9d9d9d;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .footer__bottom\r\n\t\t&__bottom {\r\n\t\t\tpadding: 5.6rem 0;\r\n\t\t}\r\n\t}\r\n\t.footer-top {\r\n\t\t// .footer-top__logo\r\n\t\t&__logo {\r\n\t\t\twidth: 18.8rem;\r\n\t\t\theight: 8.8rem;\r\n\t\t}\r\n\t\t// .footer-top__nav\r\n\t\t&__nav {\r\n\t\t\talign-items: flex-start;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 3.2rem;\r\n\t\t\tflex: 0;\r\n\t\t}\r\n\t\t// .footer-top__social\r\n\t\t&__social {\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.social {\r\n\t\t// .social__item\r\n\t\t&__item {\r\n\t\t\twidth: 6rem;\r\n\t\t\theight: 6rem;\r\n\t\t}\r\n\t}\r\n\t.footer-bottom {\r\n\t\t// .footer-bottom__copyright\r\n\t\t&__copyright {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\twidth: 53.6rem;\r\n\t\t}\r\n\t\t// .footer-bottom__info\r\n\t\t&__info {\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.info {\r\n\t\t&.mobile {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t// .info__item\r\n\t\t&__item {\r\n\t\t\tgap: 2.4rem;\r\n\r\n\t\t\tspan {\r\n\t\t\t\tfont-size: 3.6rem;\r\n\t\t\t}\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 4.8rem;\r\n\t\t\t\theight: 4.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".modal {\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1010;\r\n\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\r\n\t&.active {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&-back {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tbackground: rgba(239, 239, 239, 0.1);\r\n\t\tbackdrop-filter: blur(1.75rem);\r\n\t}\r\n\t&-wrapper {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\r\n\t\ttransform: translate(-50%, -50%);\r\n\r\n\t\tborder: 0.1rem solid #242424;\r\n\t\tbackground: #efefef;\r\n\t\tpadding: 10rem;\r\n\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tz-index: -1;\r\n\t\t\tborder: 0.1rem solid #242424;\r\n\r\n\t\t\ttransform: rotate(-3.741deg);\r\n\t\t}\r\n\t}\r\n\t&-exit {\r\n\t\tcursor: pointer;\r\n\t\tposition: absolute;\r\n\t\ttop: 2.4rem;\r\n\t\tright: 2.4rem;\r\n\r\n\t\twidth: 3.2rem;\r\n\t\theight: 3.2rem;\r\n\r\n\t\tsvg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t}\r\n\t&-content {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\r\n\t\t&.active {\r\n\t\t\tdisplay: block;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.application-modal {\r\n\t// .application-modal__content\r\n\t&__content {\r\n\t\twidth: 38.2rem;\r\n\r\n\t\t&.modal-content--second {\r\n\t\t\ttext-align: center;\r\n\r\n\t\t\t.application-modal__header {\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t\twidth: 31.3rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .application-modal__header\r\n\t&__header {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 3.2rem;\r\n\r\n\t\twidth: 28.7rem;\r\n\r\n\t\tmargin-bottom: 3.2rem;\r\n\t}\r\n\t// .application-modal__form\r\n\t&__form {\r\n\t\t&-item {\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t// .application-modal__btn\r\n\t&__btn {\r\n\t\tposition: absolute;\r\n\t\tbottom: -8.3rem;\r\n\t\tleft: 50%;\r\n\r\n\t\ttransform: translate(-50%);\r\n\r\n\t\t& .btn--text {\r\n\t\t\ttext-wrap: nowrap;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.modal {\r\n\t\t&-wrapper {\r\n\t\t\tborder: 0.2rem solid #242424;\r\n\t\t\tpadding: 12rem 4.8rem;\r\n\t\t\twidth: 66rem;\r\n\r\n\t\t\t&::after {\r\n\t\t\t\tborder: 0.2rem solid #242424;\r\n\t\t\t\ttransform: rotate(-1.914deg);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-exit {\r\n\t\t\ttop: 3.2rem;\r\n\t\t\tright: 3.2rem;\r\n\r\n\t\t\twidth: 4rem;\r\n\t\t\theight: 4rem;\r\n\t\t}\r\n\t}\r\n\r\n\t.application-modal {\r\n\t\t// .application-modal__content\r\n\t\t&__content {\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\t&.modal-content--second {\r\n\t\t\t\t.application-modal__header {\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .application-modal__header\r\n\t\t&__header {\r\n\t\t\tgap: 4rem;\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin-bottom: 4.8rem;\r\n\t\t}\r\n\t\t// .application-modal__form\r\n\t\t&__form {\r\n\t\t\t&-item {\r\n\t\t\t\tmargin-bottom: 4.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .application-modal__btn\r\n\t\t&__btn {\r\n\t\t\tbottom: -13.8rem;\r\n\t\t}\r\n\t}\r\n}\r\n","@keyframes animScroll1 {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t25% {\r\n\t\ttransform: scale(1.2);\r\n\t}\r\n\t45% {\r\n\t\ttransform: scale(1.2);\r\n\t}\r\n\t60% {\r\n\t\ttransform: scale(1.6);\r\n\t}\r\n\t75% {\r\n\t\ttransform: scale(2);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes animScroll2 {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t25% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t//   25% {\r\n\t//     transform: scale(1.2);\r\n\t//   }\r\n\t35% {\r\n\t\ttransform: scale(1.3);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(1.4);\r\n\t}\r\n\t75% {\r\n\t\ttransform: scale(1.5);\r\n\t}\r\n\t//   85%{\r\n\t//     transform: scale(1.4);\r\n\t//   }\r\n\t80% {\r\n\t\ttransform: scale(1.4);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes appearSlide1 {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransition-property: opacity;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransition-property: opacity;\r\n\t}\r\n}\r\n@keyframes appearSlide2 {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransition-property: opacity;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransition-property: opacity;\r\n\t}\r\n}\r\n@keyframes appearSlide3 {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransition-property: opacity;\r\n\t}\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransition-property: opacity;\r\n\t}\r\n}\r\n@keyframes hoverCard {\r\n\t0% {\r\n\t\ttransform: rotate(20.921deg);\r\n\t}\r\n\t50% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(20.921deg);\r\n\t}\r\n}\r\n.banner {\r\n\tposition: relative;\r\n\tmargin-top: 4.6rem;\r\n\t&_container {\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t&__scroll {\r\n\t\tposition: absolute;\r\n\t\ttop: 43.4rem;\r\n\t\tleft: 2.5rem;\r\n\t\twidth: 12rem;\r\n\t\theight: 12rem;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcolor: #fff;\r\n\t\tfont-size: 1.6rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\t\tz-index: 2;\r\n\t\t&-text {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\t\t&-anim_1 {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\t//   width: 17rem;\r\n\t\t\t//   height: 17rem;\r\n\t\t\ttransform: scale(1);\r\n\t\t\ttransform-origin: center;\r\n\t\t\t//   transition: 1000ms transform ease;\r\n\t\t\tanimation: animScroll1 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\r\n\t\t}\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t\t&-anim_2 {\r\n\t\t\tposition: absolute;\r\n\t\t\t//   width: 23.2rem;\r\n\t\t\t//   height: 23.2rem;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\ttransform: scale(1);\r\n\t\t\ttransform-origin: center;\r\n\t\t\tanimation: animScroll2 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\r\n\r\n\t\t\t//   transition: 1000ms transform ease;\r\n\t\t\t//   transition-delay: 100ms;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t\tposition: relative;\r\n\t\tmargin-right: 7.5rem;\r\n\t\tfont-size: 4rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\t&-img {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 9.6rem;\r\n\t\t\tleft: -15rem;\r\n\t\t}\r\n\t}\r\n\t&__slider {\r\n\t\tmargin-top: -5rem;\r\n\t\tpadding-left: 8rem;\r\n\t\tpadding: 7rem 8rem;\r\n\t\t// width: 67.9rem;\r\n\t\t// height: 95.2rem;\r\n\t\twidth: 67.9rem;\r\n\t\theight: 89.2rem;\r\n\t\toverflow: hidden;\r\n\t\t&-wrapper {\r\n\t\t\tposition: relative;\r\n\t\t}\r\n\t\t&-item {\r\n\t\t\theight: 75.2rem;\r\n\t\t}\r\n\t}\r\n\t&__main {\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t\tz-index: 2;\r\n\t\t&-photo {\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 51.9rem;\r\n\t\t\theight: 75.2rem;\r\n\t\t\t&:hover {\r\n\t\t\t\t.banner__main-img img {\r\n\t\t\t\t\ttransform: scale(1.2);\r\n\t\t\t\t}\r\n\t\t\t\t.banner__main-img--back {\r\n\t\t\t\t\ttransform: rotate(0deg);\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\ttransform: scale(1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-border {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\timg {\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-img {\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 51.9rem;\r\n\t\t\theight: 75.2rem;\r\n\t\t\tclip-path: polygon(0 0, 74.9% 0, 100% 19%, 100% 100%, 25% 100%, 0 85%);\r\n\t\t\toverflow: hidden;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t\ttransition: transform 0.4s ease-in-out;\r\n\t\t\t}\r\n\r\n\t\t\t&--back {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\t// clip-path: url('#clip_banner');\r\n\t\t\t\ttransform: rotate(20.921deg);\r\n\t\t\t\ttransition: transform 0.4s ease-in-out;\r\n\t\t\t\tz-index: 2;\r\n\t\t\t\t&.anim {\r\n\t\t\t\t\tanimation: hoverCard 0.6s ease-in-out;\r\n\t\t\t\t}\r\n\t\t\t\timg {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-thumb {\r\n\t\t\tmargin-left: 8rem;\r\n\t\t\talign-self: end;\r\n\t\t\twidth: 22.2rem;\r\n\t\t\theight: 25.4rem;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-btn {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 17.1rem;\r\n\t\t\tleft: 60rem;\r\n\t\t\tz-index: 2;\r\n\t\t\t&--text {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 50%;\r\n\t\t\t\tleft: 50%;\r\n\t\t\t\ttransform: translate(-50%, -50%);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\tz-index: 12;\r\n\t\t\t&--title {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tgap: 2rem;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 59.2%;\r\n\t\t\t\tleft: 15rem;\r\n\t\t\t\ttransform: translate(0, -50%);\r\n\t\t\t\tfont-family: \"Akrobat\";\r\n\t\t\t\tfont-size: 15rem;\r\n\t\t\t\tfont-weight: 800;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\tcolor: transparent;\r\n\t\t\t\t-webkit-text-stroke: 2px #242424;\r\n\t\t\t\ttext-stroke: 2px #242424;\r\n\r\n\t\t\t\tb {\r\n\t\t\t\t\tcolor: #242424;\r\n\t\t\t\t\t-webkit-text-stroke: 0;\r\n\t\t\t\t\ttext-stroke: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&--subtitle {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 68%;\r\n\t\t\t\tright: 27.7rem;\r\n\t\t\t\ttransform: translate(0, -50%);\r\n\t\t\t\tfont-size: 1.6rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__thumbs {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tleft: 0;\r\n\t\ttop: 0;\r\n\t\t&-img {\r\n\t\t\tposition: relative;\r\n\t\t\tdisplay: none;\r\n\t\t\twidth: 22.2rem;\r\n\t\t\theight: 25.4rem;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t\t&.next_1 {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 21.2rem;\r\n\t\t\t\theight: 22.8rem;\r\n\t\t\t\ttop: 23.8rem;\r\n\t\t\t\tright: 0rem;\r\n\t\t\t\tanimation: appearSlide2 1s cubic-bezier(0.39, 0.575, 0.565, 1);\r\n\t\t\t}\r\n\t\t\t&.next_2 {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 22.2rem;\r\n\t\t\t\theight: 25.4rem;\r\n\t\t\t\ttop: 51.8rem;\r\n\t\t\t\tright: 50rem;\r\n\t\t\t\tanimation: appearSlide1 1s cubic-bezier(0.39, 0.575, 0.565, 1);\r\n\t\t\t}\r\n\t\t\t&.last {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 10rem;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 22.2rem;\r\n\t\t\t\theight: 25.4rem;\r\n\t\t\t\tanimation: appearSlide3 1s cubic-bezier(0.39, 0.575, 0.565, 1);\r\n\t\t\t}\r\n\t\t\t&.swiper-slide-active {\r\n\t\t\t}\r\n\t\t\t&.swiper-slide-next {\r\n\t\t\t}\r\n\t\t\t&.swiper-slide-last {\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\twidth: 21.2rem;\r\n\t\t\t\theight: 22.7rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__aside {\r\n\t\tmargin-left: auto;\r\n\t\t&-img {\r\n\t\t\ttop: 30.6rem;\r\n\t\t\tposition: absolute;\r\n\t\t\tright: -15rem;\r\n\t\t\twidth: 21.2rem;\r\n\t\t\theight: 22.8rem;\r\n\t\t}\r\n\t}\r\n\t&__links {\r\n\t\tmargin-top: 7rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\t&-item {\r\n\t\t\tpadding: 0.8rem 0;\r\n\t\t\tborder-bottom: 1px solid rgba(36, 36, 36, 0.4);\r\n\t\t\tcolor: var(--Black, #242424);\r\n\t\t\tfont-size: 1.6rem;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t}\r\n\t}\r\n}\r\n@keyframes aboutAnim1 {\r\n\t0% {\r\n\t\ttransform: rotate(45deg);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: rotate(405deg);\r\n\t}\r\n}\r\n@keyframes aboutAnim2 {\r\n\t0% {\r\n\t\ttransform: rotate(90deg);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: rotate(450deg);\r\n\t}\r\n}\r\n@keyframes aboutAnim3 {\r\n\t0% {\r\n\t\ttransform: rotate(-180deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(-540deg);\r\n\t}\r\n}\r\n@keyframes aboutAnim4 {\r\n\t0% {\r\n\t\ttransform: rotate(60deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(420deg);\r\n\t}\r\n}\r\n@keyframes aboutAnim5 {\r\n\t0% {\r\n\t\ttransform: rotate(130deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(490deg);\r\n\t}\r\n}\r\n.about {\r\n\tposition: relative;\r\n\t&__blocks {\r\n\t\tposition: absolute;\r\n\t\ttop: 20rem;\r\n\t\tleft: -80rem;\r\n\t\t&-item {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 95rem;\r\n\t\t\theight: 95rem;\r\n\t\t\tborder: 1px solid #c7c7c7;\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\tanimation: aboutAnim1 8s linear infinite;\r\n\t\t\t\tanimation-duration: -1000;\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tanimation: aboutAnim2 9s linear infinite;\r\n\t\t\t\tanimation-duration: -500;\r\n\t\t\t}\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\tanimation: aboutAnim3 9s cubic-bezier(0.77, 0.91, 0.71, 0.37) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(4) {\r\n\t\t\t\tanimation: aboutAnim4 7s linear infinite;\r\n\t\t\t\tanimation-duration: -1000;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tgap: 8rem;\r\n\t}\r\n\t&__list {\r\n\t\tposition: relative;\r\n\t\tflex: 1;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t&-mark {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: -7.6rem;\r\n\t\t\tleft: -8rem;\r\n\t\t\twidth: 16.6rem;\r\n\t\t\theight: 16.6rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\t&--text {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tfont-size: 1.6rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__info {\r\n\t\twidth: 60.7rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 2.4rem;\r\n\t\t\tflex-direction: column;\r\n\t\t\toverflow: hidden;\r\n\t\t\t&--description {\r\n\t\t\t\tfont-size: 1.8rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__card {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 4rem;\r\n\t\twidth: 24.5rem;\r\n\t\t&-img {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 32.6rem;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 1rem;\r\n\t\t\t&--title {\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t\tfont-family: \"Akrobat\";\r\n\t\t\t\tfont-size: 2rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t\t&--subtitle {\r\n\t\t\t\tcolor: #e7284a;\r\n\t\t\t\tfont-family: \"Gilroy\";\r\n\t\t\t\tfont-size: 1.8rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.advantages {\r\n\t&_container {\r\n\t\tdisplay: flex;\r\n\t}\r\n\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 5rem;\r\n\t\t&-mob {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t\t&-row {\r\n\t\t\tdisplay: flex;\r\n\t\t\t.advantages__main {\r\n\t\t\t\tmargin-right: 16.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__info {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t&-mob {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t&__short {\r\n\t\twidth: 41.2rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 2rem;\r\n\t\t&-number {\r\n\t\t\tcolor: #242424;\r\n\t\t\tfont-size: 5rem;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\tcolor: #9d9d9d;\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t}\r\n\t&__main {\r\n\t\twidth: 24.4rem;\r\n\r\n\t\t&-icon {\r\n\t\t\tdisplay: flex;\r\n\t\t\twidth: 4rem;\r\n\t\t\theight: 4rem;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin-bottom: 2rem;\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-name {\r\n\t\t\tfont-family: \"Akrobat\";\r\n\t\t\tfont-size: 2rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: normal;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t}\r\n\t\t&-description {\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@keyframes newsBlock1 {\r\n\t0% {\r\n\t\ttransform: translateY(0rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translateY(5rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translateY(15rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translateY(10rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0rem);\r\n\t}\r\n}\r\n\r\n@keyframes newsBlock2 {\r\n\t0% {\r\n\t\ttransform: translateY(-0rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translateY(-5rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translateY(-15rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translateY(-10rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0rem);\r\n\t}\r\n}\r\n\r\n.news {\r\n\tposition: relative;\r\n\t&__blocks {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\twidth: 58.3rem;\r\n\t\theight: 58.3rem;\r\n\t\tright: -41rem;\r\n\t\tz-index: -1;\r\n\t\t&-item {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 50rem;\r\n\t\t\theight: 50rem;\r\n\t\t\tborder: 1px solid #9d9d9d;\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\tanimation: newsBlock1 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\ttop: 15rem;\r\n\t\t\t\tright: 10rem;\r\n\t\t\t\tanimation: newsBlock2 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__text {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t&-title {\r\n\t\t\twidth: 120.7rem;\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\r\n\t\t&-btn {\r\n\t\t\tmargin-top: 8.6rem;\r\n\t\t}\r\n\t\t&-item {\r\n\t\t\twidth: 38.2rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2rem;\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\t.news__list-img {\r\n\t\t\t\t\theight: 28.5rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\t.news__list-img {\r\n\t\t\t\t\theight: 57.3rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\t.news__list-img {\r\n\t\t\t\t\theight: 28.5rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 1rem;\r\n\t\t\t&--date {\r\n\t\t\t\tcolor: #e7284a;\r\n\t\t\t\tfont-family: \"Akrobat\";\r\n\t\t\t\tfont-size: 2rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n@keyframes blockMove1 {\r\n\t0% {\r\n\t\ttransform: translate(0, 0);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translate(0rem, 0rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translate(0, 0);\r\n\t}\r\n}\r\n@keyframes blockMove2 {\r\n\t0% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translate(6rem, 6rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translate(20rem, 20rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translate(17rem, 25rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n}\r\n@keyframes blockMove3 {\r\n\t0% {\r\n\t\ttransform: translate(20rem, 20rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translate(15rem, 13rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translate(15rem, 15rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translate(20rem, 20rem);\r\n\t}\r\n}\r\n.services {\r\n\tposition: relative;\r\n\t&__blocks {\r\n\t\tposition: absolute;\r\n\t\ttop: 48rem;\r\n\t\tleft: -30rem;\r\n\t\twidth: 82.9rem;\r\n\t\theight: 97.8rem;\r\n\t\tz-index: -1;\r\n\t\t&-item {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 50rem;\r\n\t\t\theight: 69.4rem;\r\n\t\t\tborder: 1px solid #c7c7c7;\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\t// transform: translate(10rem, 10rem);\r\n\t\t\t\tanimation: blockMove1 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\t// transform: translate(20rem, 20rem);\r\n\t\t\t\tanimation: blockMove2 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\t// transform: translate(30rem, 30rem);\r\n\t\t\t\t// cubic-bezier(0.165, 0.84, 0.44, 1)\r\n\t\t\t\tanimation: blockMove3 55s cubic-bezier(0.35, 0.54, 0.95, 0.73) infinite;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 10rem;\r\n\t\t&-row {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t&--bottom {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tgap: 3rem;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-btn {\r\n\t\t\tmargin-bottom: 7rem;\r\n\t\t}\r\n\t\t&-column {\r\n\t\t\twidth: 100%;\r\n\t\t\t&--description {\r\n\t\t\t\twidth: 38.3rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-item {\r\n\t\t\twidth: 38.3rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2rem;\r\n\t\t\t&--column {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: flex-end;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-img {\r\n\t\t\twidth: 38.3rem;\r\n\t\t\theight: 52.8rem;\r\n\t\t\t&--border {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\ttransform: rotate(-10deg);\r\n\t\t\t\ttransition: transform 0.3s ease-in-out;\r\n\t\t\t\tz-index: 3;\r\n\t\t\t\timg {\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\timg {\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t\t&--column {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\twidth: 79.5rem;\r\n\t\t\t\theight: 43.9rem;\r\n\t\t\t\ttransition: transform 0.3s ease-in-out;\r\n\t\t\t\t&--back {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tz-index: 2;\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t&--inner {\r\n\t\t\t\t\twidth: 79.5rem;\r\n\t\t\t\t\theight: 43.9rem;\r\n\t\t\t\t\tclip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);\r\n\t\t\t\t\toverflow: hidden;\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\ttransform: scale(1);\r\n\t\t\t\t\t\ttransition: transform 0.3s ease-in-out;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\t.services__list-img--column--inner img {\r\n\t\t\t\t\t\ttransform: scale(1.2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.services__list-img--border {\r\n\t\t\t\t\t\ttransform: rotate(0deg);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\timg {\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 1rem;\r\n\t\t}\r\n\t}\r\n\t&__content {\r\n\t\t&-bottom {\r\n\t\t\tpadding-top: 16.6rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: flex-end;\r\n\t\t}\r\n\t}\r\n}\r\n@media (max-width: 48em) {\r\n\t.banner {\r\n\t\t&_container {\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t&__title {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n\t\t&__scroll {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t\t&__slider {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 80rem;\r\n\t\t\tpadding: 7rem 11rem;\r\n\r\n\t\t\t&-item {\r\n\t\t\t\twidth: 46rem;\r\n\t\t\t\theight: 67rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__main {\r\n\t\t\tmargin-top: 4rem;\r\n\t\t\t&-btn {\r\n\t\t\t\ttop: 32.1rem;\r\n\t\t\t\tleft: 50rem;\r\n\t\t\t}\r\n\t\t\t&-text {\r\n\t\t\t\t&--title {\r\n\t\t\t\t\ttop: 62.2%;\r\n\t\t\t\t\tleft: 3.2rem;\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\talign-items: flex-end;\r\n\t\t\t\t\tfont-size: 11.6rem;\r\n\t\t\t\t\tz-index: 12;\r\n\t\t\t\t\tline-height: 1;\r\n\t\t\t\t\twidth: calc(100% - 7.2rem);\r\n\t\t\t\t\t-webkit-text-stroke: 1px #242424;\r\n\t\t\t\t\tb {\r\n\t\t\t\t\t\talign-self: flex-start;\r\n\t\t\t\t\t\tcolor: #242424;\r\n\t\t\t\t\t\tfont-weight: 800;\r\n\t\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t&--subtitle {\r\n\t\t\t\t\ttop: auto;\r\n\t\t\t\t\tright: 4rem;\r\n\t\t\t\t\tbottom: 27rem;\r\n\t\t\t\t\tcolor: #242424;\r\n\t\t\t\t\tfont-size: 2.8rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tline-height: normal;\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t\t&-photo {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\t.banner__main-img img {\r\n\t\t\t\t\t\ttransform: scale(1);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.banner__main-img--back {\r\n\t\t\t\t\t\ttransform: rotate(20.921deg);\r\n\t\t\t\t\t\timg {\r\n\t\t\t\t\t\t\ttransform: scale(1);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__thumbs {\r\n\t\t\tposition: relative;\r\n\t\t\tflex: 1;\r\n\t\t\t&-img {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\twidth: 24rem;\r\n\t\t\t\theight: 24rem;\r\n\t\t\t\t&.next_1 {\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\ttop: auto;\r\n\t\t\t\t\tleft: auto;\r\n\t\t\t\t\tright: auto;\r\n\t\t\t\t\tbottom: auto;\r\n\t\t\t\t\twidth: 24rem;\r\n\t\t\t\t\theight: 24rem;\r\n\t\t\t\t}\r\n\t\t\t\t&.next_2 {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\ttop: auto;\r\n\t\t\t\t\tleft: auto;\r\n\t\t\t\t\tright: auto;\r\n\t\t\t\t\tbottom: auto;\r\n\t\t\t\t\twidth: 24rem;\r\n\t\t\t\t\theight: 24rem;\r\n\t\t\t\t}\r\n\t\t\t\t&.last {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\ttop: auto;\r\n\t\t\t\t\tleft: auto;\r\n\t\t\t\t\tright: auto;\r\n\t\t\t\t\tbottom: auto;\r\n\t\t\t\t\twidth: 24rem;\r\n\t\t\t\t\theight: 24rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__aside {\r\n\t\t\tmargin: 0;\r\n\t\t\tmargin-top: 16rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: row-reverse;\r\n\t\t\talign-items: flex-end;\r\n\t\t}\r\n\t\t&__links {\r\n\t\t\tmargin-top: 0;\r\n\t\t\twidth: 39rem;\r\n\t\t\trow-gap: 0rem;\r\n\t\t\t&-item {\r\n\t\t\t\tpadding: 1.6rem 0;\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t\tfont-size: 2.8rem;\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.about {\r\n\t\t&__blocks {\r\n\t\t\ttop: 7rem;\r\n\t\t\tleft: auto;\r\n\t\t\tright: 45rem;\r\n\t\t\tz-index: -1;\r\n\t\t\t&-item {\r\n\t\t\t\twidth: 71rem;\r\n\t\t\t\theight: 71rem;\r\n\t\t\t\tborder-color: #c7c7c7;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__content {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t&__card {\r\n\t\t\twidth: 33.2rem;\r\n\t\t\t&-img {\r\n\t\t\t\theight: 48.6rem;\r\n\t\t\t}\r\n\t\t\t&-text {\r\n\t\t\t\t&--title {\r\n\t\t\t\t\tfont-size: 3.6rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tline-height: normal;\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t}\r\n\t\t\t\t&--subtitle {\r\n\t\t\t\t\tfont-size: 3.2rem;\r\n\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\tline-height: normal;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__list {\r\n\t\t\t&-mark {\r\n\t\t\t\ttop: 36.4rem;\r\n\t\t\t\tleft: -8rem;\r\n\t\t\t\twidth: 20rem;\r\n\t\t\t\theight: 20rem;\r\n\t\t\t\tleft: auto;\r\n\t\t\t\tright: 1rem;\r\n\t\t\t\t&--text {\r\n\t\t\t\t\tfont-size: 2.8rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tline-height: normal;\r\n\t\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__info {\r\n\t\t\twidth: 100%;\r\n\t\t\tgap: 7.2rem;\r\n\t\t\t&-text {\r\n\t\t\t\tgap: 3.2rem;\r\n\t\t\t\t&--description {\r\n\t\t\t\t\tfont-size: 3.2rem;\r\n\t\t\t\t\tfont-weight: 400;\r\n\t\t\t\t\tline-height: normal;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.advantages {\r\n\t\t&_container {\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t&__list {\r\n\t\t\tdisplay: none;\r\n\t\t\t&-mob {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tgap: 5rem;\r\n\t\t\t}\r\n\t\t\t&-info {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t}\r\n\t\t\t&-row {\r\n\t\t\t\twidth: 33rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\t.advantages__main {\r\n\t\t\t\t\tmargin-right: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__main {\r\n\t\t\twidth: 33rem;\r\n\t\t\t&-name {\r\n\t\t\t\tfont-size: 3.6rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t\t&-description {\r\n\t\t\t\tfont-size: 3.2rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: none;\r\n\t\t\t}\r\n\t\t\t&-icon {\r\n\t\t\t\twidth: 8rem;\r\n\t\t\t\theight: 8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__info {\r\n\t\t\t&-mob {\r\n\t\t\t\tmargin-top: 5.8rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tgap: 4rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__short {\r\n\t\t\twidth: auto;\r\n\t\t\tgap: 2.4rem;\r\n\t\t\tflex: 1;\r\n\t\t\t&-number {\r\n\t\t\t\tfont-size: 5.6rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t\t&-text {\r\n\t\t\t\tfont-size: 3.2rem;\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.news {\r\n\t\t&__blocks {\r\n\t\t\theight: 110.8rem;\r\n\t\t\twidth: 75.3rem;\r\n\t\t\tright: -16rem;\r\n\t\t\ttop: auto;\r\n\t\t\tbottom: -84rem;\r\n\t\t\t&-item {\r\n\t\t\t\theight: 95rem;\r\n\t\t\t\tborder-color: #c7c7c7;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__text {\r\n\t\t\tflex-direction: column;\r\n\t\t\t&-title {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__list {\r\n\t\t\t&-item {\r\n\t\t\t\twidth: 44.8rem;\r\n\t\t\t\t.news__list-img {\r\n\t\t\t\t\t&:nth-child(1) {\r\n\t\t\t\t\t\theight: auto;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t&:nth-child(2) {\r\n\t\t\t\t\t\theight: auto;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t&:nth-child(3) {\r\n\t\t\t\t\t\theight: auto;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.services {\r\n\t\t&__blocks {\r\n\t\t\ttop: auto;\r\n\t\t\tbottom: 0;\r\n\t\t\tright: -81rem;\r\n\t\t\tleft: auto;\r\n\t\t\t&-item {\r\n\t\t\t\t&:nth-child(1) {\r\n\t\t\t\t\ttransform: translate(-30rem, 30rem);\r\n\t\t\t\t\tanimation: none;\r\n\t\t\t\t}\r\n\t\t\t\t&:nth-child(2) {\r\n\t\t\t\t\tanimation: none;\r\n\t\t\t\t\ttransform: translate(-15rem, 11rem);\r\n\t\t\t\t}\r\n\t\t\t\t&:nth-child(3) {\r\n\t\t\t\t\tanimation: none;\r\n\t\t\t\t\ttransform: translate(0rem, 0rem);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__content {\r\n\t\t\t&-bottom {\r\n\t\t\t\tpadding-top: 5.6rem;\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&__list {\r\n\t\t\tgap: 11.6rem;\r\n\t\t\t&-row {\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\tgap: 5.6rem;\r\n\t\t\t\t&--bottom {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\tgap: 5.6rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-item {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tgap: 1.6rem;\r\n\t\t\t\t&--column {\r\n\t\t\t\t\tgap: 7.4rem;\r\n\t\t\t\t\tflex-direction: column-reverse;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-column {\r\n\t\t\t\t&--description {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-img {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\t&--column {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 38.2rem;\r\n\t\t\t\t\t&--inner {\r\n\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\timg {\r\n\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\tobject-fit: none;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&-text {\r\n\t\t\t\tgap: 0.4rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@keyframes newsBlock1 {\r\n\t0% {\r\n\t\ttransform: translateY(0rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translateY(5rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translateY(15rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translateY(10rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0rem);\r\n\t}\r\n}\r\n\r\n@keyframes newsBlock2 {\r\n\t0% {\r\n\t\ttransform: translateY(-0rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translateY(-5rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translateY(-15rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translateY(-10rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translateY(0rem);\r\n\t}\r\n}\r\n\r\n.news {\r\n\tposition: relative;\r\n\t&__blocks {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\twidth: 58.3rem;\r\n\t\theight: 58.3rem;\r\n\t\tright: -41rem;\r\n\t\tz-index: -1;\r\n\t\t&-item {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 50rem;\r\n\t\t\theight: 50rem;\r\n\t\t\tborder: 1px solid #9d9d9d;\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tright: 0;\r\n\t\t\t\ttransform: translateX(0);\r\n\t\t\t\tanimation: newsBlock1 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\ttop: 15rem;\r\n\t\t\t\tright: 10rem;\r\n\t\t\t\tanimation: newsBlock2 6s cubic-bezier(0.23, 1, 0.72, 0.8) infinite;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t&__text {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t&-title {\r\n\t\t\twidth: 120.7rem;\r\n\t\t\toverflow: hidden;\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\r\n    &-btn {\r\n      margin-top: 8.6rem;\r\n      &--mob {\r\n        display: none;\r\n      }\r\n    }\r\n    &-item {\r\n      width: 38.2rem;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 2rem;\r\n      &:nth-child(1) {\r\n        .news__list-img {\r\n          height: 28.5rem;\r\n        }\r\n      }\r\n      &:nth-child(2) {\r\n        .news__list-img {\r\n          height: 57.3rem;\r\n        }\r\n      }\r\n      &:nth-child(3) {\r\n        .news__list-img {\r\n          height: 28.5rem;\r\n        }\r\n      }\r\n    }\r\n    &-text {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n\r\n      &--name {\r\n      }\r\n    }\r\n  }\r\n}\r\n@keyframes blockMove1 {\r\n\t0% {\r\n\t\ttransform: translate(0, 0);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translate(0rem, 0rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translate(0, 0);\r\n\t}\r\n}\r\n@keyframes blockMove2 {\r\n\t0% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translate(6rem, 6rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translate(20rem, 20rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translate(17rem, 25rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n}\r\n@keyframes blockMove3 {\r\n\t0% {\r\n\t\ttransform: translate(20rem, 20rem);\r\n\t}\r\n\t25% {\r\n\t\ttransform: translate(15rem, 13rem);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translate(10rem, 10rem);\r\n\t}\r\n\t75% {\r\n\t\ttransform: translate(15rem, 15rem);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translate(20rem, 20rem);\r\n\t}\r\n}\r\n.services {\r\n\tposition: relative;\r\n\t&__blocks {\r\n\t\tposition: absolute;\r\n\t\ttop: 48rem;\r\n\t\tleft: -30rem;\r\n\t\twidth: 82.9rem;\r\n\t\theight: 97.8rem;\r\n\t\tz-index: -1;\r\n\t\t&-item {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 50rem;\r\n\t\t\theight: 69.4rem;\r\n\t\t\tborder: 1px solid #c7c7c7;\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\t// transform: translate(10rem, 10rem);\r\n\t\t\t\tanimation: blockMove1 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\t// transform: translate(20rem, 20rem);\r\n\t\t\t\tanimation: blockMove2 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n\t\t\t}\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\t// transform: translate(30rem, 30rem);\r\n\t\t\t\tanimation: blockMove3 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 10rem;\r\n\t\t&-row {\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\t&--bottom {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tgap: 3rem;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-btn {\r\n\t\t\tmargin-bottom: 7rem;\r\n\t\t}\r\n\t\t&-column {\r\n\t\t\twidth: 100%;\r\n\t\t\t&--description {\r\n\t\t\t\twidth: 38.3rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-item {\r\n\t\t\twidth: 38.3rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2rem;\r\n\t\t\t&--column {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: flex-end;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-img {\r\n\t\t\twidth: 38.3rem;\r\n\t\t\theight: 52.8rem;\r\n\t\t\t&--border {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\ttransform: rotate(-10deg);\r\n\t\t\t\ttransition: transform 0.3s ease-in-out;\r\n\t\t\t\tz-index: 3;\r\n\t\t\t\timg {\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\timg {\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t\t&--column {\r\n\t\t\t\tposition: relative;\r\n\t\t\t\twidth: 79.5rem;\r\n\t\t\t\theight: 43.9rem;\r\n\t\t\t\ttransition: transform 0.3s ease-in-out;\r\n\t\t\t\t&--back {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\tleft: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t\tz-index: 2;\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t&--inner {\r\n\t\t\t\t\twidth: 79.5rem;\r\n\t\t\t\t\theight: 43.9rem;\r\n\t\t\t\t\tclip-path: polygon(19% 0%, 100% 0, 100% 70%, 81% 100%, 0 100%, 0 30%);\r\n\t\t\t\t\toverflow: hidden;\r\n\t\t\t\t\tz-index: 1;\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\ttransform: scale(1);\r\n\t\t\t\t\t\ttransition: transform 0.3s ease-in-out;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\t.services__list-img--column--inner img {\r\n\t\t\t\t\t\ttransform: scale(1.2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.services__list-img--border {\r\n\t\t\t\t\t\ttransform: rotate(0deg);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\timg {\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 1rem;\r\n\t\t}\r\n\t}\r\n\t&__content {\r\n\t\t&-bottom {\r\n\t\t\tpadding-top: 16.6rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: space-between;\r\n\t\t\talign-items: flex-end;\r\n\t\t}\r\n\t}\r\n}\r\n@media (max-width: 48em) {\r\n\t.banner {\r\n\t\t&_container {\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t&__title {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\r\n    &__scroll {\r\n      display: none;\r\n    }\r\n    &__slider {\r\n      width: 100%;\r\n      height: 80rem;\r\n      padding: 7rem 11rem;\r\n      &-item {\r\n        width: 46rem;\r\n        height: 67rem;\r\n      }\r\n    }\r\n    &__main {\r\n      margin-top: 4rem;\r\n      &-btn {\r\n        top: 32.1rem;\r\n        left: 50rem;\r\n      }\r\n      &-text {\r\n        &--title {\r\n          top: 62.2%;\r\n          left: 3.2rem;\r\n          display: flex;\r\n          flex-direction: column;\r\n          align-items: flex-end;\r\n          font-size: 11.6rem;\r\n          z-index: 12;\r\n          line-height: 1;\r\n          width: calc(100% - 7.2rem);\r\n          -webkit-text-stroke: 1px #242424;\r\n          b {\r\n            align-self: flex-start;\r\n            color: #242424;\r\n            font-weight: 800;\r\n            text-transform: uppercase;\r\n          }\r\n        }\r\n        &--subtitle {\r\n          top: auto;\r\n          right: 4rem;\r\n          bottom: 27rem;\r\n          color: #242424;\r\n          font-size: 2.8rem;\r\n          font-weight: 700;\r\n          line-height: normal;\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n      &-img {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n      &-photo {\r\n        width: 100%;\r\n        height: 100%;\r\n        &:hover {\r\n          .banner__main-img img {\r\n            transform: scale(1);\r\n          }\r\n          .banner__main-img--back {\r\n            transform: rotate(20.921deg);\r\n            img {\r\n              transform: scale(1);\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n    &__thumbs {\r\n      position: relative;\r\n      flex: 1;\r\n      &-img {\r\n        display: none;\r\n        width: 24rem;\r\n        height: 24rem;\r\n        &.next_1 {\r\n          position: relative;\r\n          top: auto;\r\n          left: auto;\r\n          right: auto;\r\n          bottom: auto;\r\n          width: 24rem;\r\n          height: 24rem;\r\n        }\r\n        &.next_2 {\r\n          display: none;\r\n          position: relative;\r\n          top: auto;\r\n          left: auto;\r\n          right: auto;\r\n          bottom: auto;\r\n          width: 24rem;\r\n          height: 24rem;\r\n        }\r\n        &.last {\r\n          display: none;\r\n          position: relative;\r\n          top: auto;\r\n          left: auto;\r\n          right: auto;\r\n          bottom: auto;\r\n          width: 24rem;\r\n          height: 24rem;\r\n        }\r\n      }\r\n    }\r\n    &__aside {\r\n      margin: 0;\r\n      margin-top: 16rem;\r\n      display: flex;\r\n      flex-direction: row-reverse;\r\n      align-items: flex-end;\r\n    }\r\n    &__links {\r\n      margin-top: 0;\r\n      width: 39rem;\r\n      row-gap: 0rem;\r\n      &-item {\r\n        padding: 1.6rem 0;\r\n        color: #242424;\r\n        font-size: 2.8rem;\r\n        font-weight: 500;\r\n        line-height: normal;\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n  }\r\n  .about {\r\n    &__blocks {\r\n      top: 7rem;\r\n      left: auto;\r\n      right: 45rem;\r\n      z-index: -1;\r\n      &-item {\r\n        width: 71rem;\r\n        height: 71rem;\r\n        border-color: #c7c7c7;\r\n      }\r\n    }\r\n    &__content {\r\n      flex-direction: column;\r\n      gap: 5.6rem;\r\n    }\r\n    &__card {\r\n      width: 33.2rem;\r\n      &-img {\r\n        height: 48.6rem;\r\n      }\r\n      &-text {\r\n        &--title {\r\n          font-size: 3.6rem;\r\n          font-weight: 700;\r\n          line-height: normal;\r\n          text-transform: uppercase;\r\n        }\r\n        &--subtitle {\r\n          font-size: 3.2rem;\r\n          font-weight: 400;\r\n          line-height: normal;\r\n        }\r\n      }\r\n    }\r\n    &__list {\r\n      &-mark {\r\n        top: 36.4rem;\r\n        left: -8rem;\r\n        width: 20rem;\r\n        height: 20rem;\r\n        left: auto;\r\n        right: 1rem;\r\n        &--text {\r\n          font-size: 2.8rem;\r\n          font-weight: 700;\r\n          line-height: normal;\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n    }\r\n    &__info {\r\n      width: 100%;\r\n      gap: 7.2rem;\r\n      &-text {\r\n        gap: 3.2rem;\r\n        &--description {\r\n          font-size: 3.2rem;\r\n          font-weight: 400;\r\n          line-height: normal;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .advantages {\r\n    &_container {\r\n      flex-direction: column;\r\n    }\r\n    &__list {\r\n      display: none;\r\n      &-mob {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 5rem;\r\n      }\r\n      &-info {\r\n        display: flex;\r\n        justify-content: space-between;\r\n      }\r\n      &-row {\r\n        width: 33rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        .advantages__main {\r\n          margin-right: 0;\r\n        }\r\n      }\r\n    }\r\n    &__main {\r\n      width: 33rem;\r\n      &-name {\r\n        font-size: 3.6rem;\r\n        font-weight: 700;\r\n        line-height: normal;\r\n        text-transform: uppercase;\r\n      }\r\n      &-description {\r\n        font-size: 3.2rem;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n        text-transform: none;\r\n      }\r\n      &-icon {\r\n        width: 8rem;\r\n        height: 8rem;\r\n      }\r\n    }\r\n    &__info {\r\n      &-mob {\r\n        margin-top: 5.8rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 4rem;\r\n      }\r\n    }\r\n    &__short {\r\n      width: auto;\r\n      gap: 2.4rem;\r\n      flex: 1;\r\n      &-number {\r\n        font-size: 5.6rem;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n      }\r\n      &-text {\r\n        font-size: 3.2rem;\r\n        font-weight: 500;\r\n        line-height: normal;\r\n      }\r\n    }\r\n  }\r\n  .news {\r\n    &_container {\r\n      padding-bottom: 17rem;\r\n    }\r\n    &__blocks {\r\n      height: 110.8rem;\r\n      width: 75.3rem;\r\n      right: -16rem;\r\n      top: auto;\r\n      bottom: -84rem;\r\n      &-item {\r\n        height: 95rem;\r\n        border-color: #c7c7c7;\r\n      }\r\n    }\r\n    &__text {\r\n      flex-direction: column;\r\n\r\n      &-title {\r\n        width: 100%;\r\n      }\r\n    }\r\n    &__list {\r\n      &-btn {\r\n        display: none;\r\n        &--mob {\r\n          display: block;\r\n          position: absolute;\r\n          bottom: 0;\r\n          right: 0;\r\n          z-index: 2;\r\n        }\r\n      }\r\n      &-item {\r\n        width: 44.8rem;\r\n        .news__list-img {\r\n          &:nth-child(1) {\r\n            height: auto;\r\n          }\r\n          &:nth-child(2) {\r\n            height: auto;\r\n          }\r\n          &:nth-child(3) {\r\n            height: auto;\r\n          }\r\n        }\r\n      }\r\n      &-text {\r\n        &--date {\r\n          color: #e7284a;\r\n          font-family: 'Akrobat';\r\n          font-size: 3.6rem;\r\n          font-weight: 700;\r\n          line-height: normal;\r\n          text-transform: uppercase;\r\n        }\r\n      }\r\n      &-img {\r\n        width: 100%;\r\n      }\r\n    }\r\n  }\r\n  @keyframes blockMoveMob1 {\r\n    0% {\r\n      transform: translate(0, 0);\r\n    }\r\n    25% {\r\n      transform: translate(10rem, -10rem);\r\n    }\r\n    50% {\r\n      transform: translate(0rem, 0rem);\r\n    }\r\n    75% {\r\n      transform: translate(10rem, -10rem);\r\n    }\r\n    100% {\r\n      transform: translate(0, 0);\r\n    }\r\n  }\r\n  @keyframes blockMoveMob2 {\r\n    0% {\r\n      transform: translate(10rem, -10rem);\r\n    }\r\n    25% {\r\n      transform: translate(6rem, -6rem);\r\n    }\r\n    50% {\r\n      transform: translate(20rem, -20rem);\r\n    }\r\n    75% {\r\n      transform: translate(17rem, -25rem);\r\n    }\r\n    100% {\r\n      transform: translate(10rem, -10rem);\r\n    }\r\n  }\r\n  @keyframes blockMoveMob3 {\r\n    0% {\r\n      transform: translate(20rem, -20rem);\r\n    }\r\n    25% {\r\n      transform: translate(15rem, -13rem);\r\n    }\r\n    50% {\r\n      transform: translate(10rem, -10rem);\r\n    }\r\n    75% {\r\n      transform: translate(15rem, -15rem);\r\n    }\r\n    100% {\r\n      transform: translate(20rem, -20rem);\r\n    }\r\n  }\r\n  .services {\r\n    &_container {\r\n      padding-bottom: 17rem;\r\n    }\r\n    &__blocks {\r\n      top: auto;\r\n      bottom: -45rem;\r\n      right: -51rem;\r\n      left: auto;\r\n      &-item {\r\n        &:nth-child(1) {\r\n          transform: translate(30rem, -30rem);\r\n          //   animation: none;\r\n          animation: blockMoveMob1 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n        }\r\n        &:nth-child(2) {\r\n          //   animation: none;\r\n          transform: translate(15rem, -11rem);\r\n          animation: blockMoveMob2 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n        }\r\n        &:nth-child(3) {\r\n          //   animation: none;\r\n          transform: translate(0rem, 0rem);\r\n          animation: blockMoveMob3 7s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n        }\r\n      }\r\n    }\r\n    &__content {\r\n      &-bottom {\r\n        padding-top: 5.6rem;\r\n        flex-direction: column;\r\n        .services__list-text--description {\r\n        }\r\n      }\r\n    }\r\n    &__list {\r\n      gap: 11.6rem;\r\n      &-row {\r\n        flex-direction: column;\r\n        gap: 5.6rem;\r\n        &--bottom {\r\n          width: 100%;\r\n          flex-direction: column;\r\n          gap: 5.6rem;\r\n        }\r\n      }\r\n      &-item {\r\n        width: 100%;\r\n        gap: 1.6rem;\r\n        &--last {\r\n          .services__list-text--description {\r\n            width: 41rem;\r\n          }\r\n        }\r\n        &--column {\r\n          gap: 7.4rem;\r\n          flex-direction: column-reverse;\r\n        }\r\n      }\r\n      &-column {\r\n        &--description {\r\n          width: 100%;\r\n        }\r\n      }\r\n      &-img {\r\n        width: 100%;\r\n        &--column {\r\n          width: 100%;\r\n          height: 38.2rem;\r\n          &--inner {\r\n            width: 100%;\r\n            height: 100%;\r\n            img {\r\n              height: 100%;\r\n              object-fit: none;\r\n            }\r\n          }\r\n        }\r\n      }\r\n      &-btn {\r\n        position: absolute;\r\n        bottom: -12rem;\r\n        margin: 0;\r\n      }\r\n      &-text {\r\n        gap: 0.4rem;\r\n        &--description {\r\n          width: 55.2rem;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n",".about-intro {\r\n\tmargin-top: 1.5rem;\r\n\tmargin-bottom: 19.8rem;\r\n\t// .about-intro__inner\r\n\t&__inner {\r\n\t\tposition: relative;\r\n\t\theight: 84.9rem;\r\n\t}\r\n\t// .about-intro__content\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\t// .about-intro__title\r\n\t&__title {\r\n\t\ttext-align: center;\r\n\t\twidth: 92.5rem;\r\n\t\tmargin-bottom: 8rem;\r\n\t}\r\n\t// .about-intro__subtitle\r\n\t&__subtitle {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\tleft: 50%;\r\n\r\n\t\ttransform: translate(-50%);\r\n\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.6rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\t// .about-intro__pictures\r\n\t&__pictures {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\t// .about-intro__img\r\n\t&__img {\r\n\t\tposition: absolute;\r\n\t\tz-index: -1;\r\n\t\tanimation-name: imageAnimation;\r\n\t\tanimation-timing-function: ease-in-out;\r\n\t\tanimation-duration: 1s;\r\n\t\tanimation-fill-mode: forwards;\r\n\t\topacity: 0;\r\n\r\n\t\timg {\r\n\t\t\ttransition: transform 0.5s ease-out;\r\n\t\t}\r\n\r\n\t\t&:hover {\r\n\t\t\timg {\r\n\t\t\t\ttransition: transform 0.5s ease-out;\r\n\t\t\t\ttransform: scale(1.2);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&--1 {\r\n\t\t\twidth: 18.2rem;\r\n\t\t\theight: 24.6rem;\r\n\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 39.1rem;\r\n\t\t\tanimation-delay: 0.2s;\r\n\t\t}\r\n\t\t&--2 {\r\n\t\t\twidth: 32.5rem;\r\n\t\t\theight: 19.8rem;\r\n\r\n\t\t\tleft: 64.8rem;\r\n\t\t\tbottom: 10.8rem;\r\n\t\t\tanimation-delay: 0.4s;\r\n\t\t}\r\n\t\t&--3 {\r\n\t\t\twidth: 22.6rem;\r\n\t\t\theight: 26.8rem;\r\n\r\n\t\t\tbottom: 0;\r\n\t\t\tleft: 11.2rem;\r\n\r\n\t\t\tanimation-delay: 1s;\r\n\t\t}\r\n\t\t&--4 {\r\n\t\t\twidth: 35.6rem;\r\n\t\t\theight: 21.8rem;\r\n\r\n\t\t\tright: -20rem;\r\n\t\t\ttop: 12.4rem;\r\n\r\n\t\t\tanimation-delay: 1.5s;\r\n\t\t}\r\n\t\t&--5 {\r\n\t\t\twidth: 32rem;\r\n\t\t\theight: 21.6rem;\r\n\t\t\tleft: -18.1rem;\r\n\t\t\ttop: 17.5rem;\r\n\r\n\t\t\tanimation-delay: 0.8s;\r\n\r\n\t\t\tclip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);\r\n\t\t}\r\n\t\t&--6 {\r\n\t\t\twidth: 20.6rem;\r\n\t\t\theight: 29.8rem;\r\n\r\n\t\t\tbottom: 6.2rem;\r\n\t\t\tright: 5.5rem;\r\n\t\t\tanimation-delay: 0.2s;\r\n\r\n\t\t\tclip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\r\n\t\t}\r\n\t\t&--7 {\r\n\t\t\twidth: 35.2rem;\r\n\t\t\theight: 18.6rem;\r\n\r\n\t\t\ttop: 4.8rem;\r\n\t\t\tright: 35.6rem;\r\n\t\t\tanimation-delay: 0.4s;\r\n\t\t\tclip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\r\n\t\t}\r\n\t}\r\n}\r\n.about-business {\r\n\tmargin-bottom: 20rem;\r\n\t// .about-business__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t&__main {\r\n\t\toverflow: hidden;\r\n\t}\r\n\t// .about-business__content\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t// .about-business__item\r\n\t&__item {\r\n\t\twidth: 52rem;\r\n\t\toverflow: hidden;\r\n\t}\r\n\t// .about-business__text\r\n\t&__text {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 500;\r\n\t\tline-height: normal;\r\n\r\n\t\tmargin-bottom: 5rem;\r\n\t\tmin-height: 10.7rem;\r\n\r\n\t\tspan {\r\n\t\t\tcolor: #e7284a;\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\t}\r\n}\r\n.about-advantages {\r\n\tmargin-bottom: 20rem;\r\n\tposition: relative;\r\n\t// .about-advantages__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t\toverflow: hidden;\r\n\t}\r\n\r\n\t&__container {\r\n\t\tposition: relative;\r\n\t}\r\n\t// .about-advantages__main\r\n\t&__main {\r\n\t\toverflow: hidden;\r\n\t}\r\n\t// .about-advantages__item\r\n\t&__item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tpadding: 2.4rem 0;\r\n\t\tborder-bottom: 0.1rem solid rgba(36, 36, 36, 0.4);\r\n\r\n\t\t&:first-child {\r\n\t\t\tpadding: 0 0 2.4rem 0;\r\n\t\t}\r\n\r\n\t\t&:last-child {\r\n\t\t\tpadding: 2.4rem 0 0 0;\r\n\t\t\tborder-bottom: none;\r\n\t\t\tjustify-content: center;\r\n\t\t\tgap: 14rem;\r\n\t\t}\r\n\t}\r\n\t// .about-advantages__item-wrapper\r\n\t&__item-wrapper {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 12.4rem;\r\n\t}\r\n\t// .about-advantages__img\r\n\t&__img {\r\n\t\twidth: 15rem;\r\n\t\theight: 7.2rem;\r\n\t}\r\n\t// .about-advantages__text\r\n\t&__text {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 2rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\r\n\t\tspan {\r\n\t\t\tcolor: #e7284a;\r\n\t\t}\r\n\t}\r\n\t// .about-advantages__btn\r\n\t&__btn {\r\n\t\tposition: absolute;\r\n\t\ttop: 16.1rem;\r\n\t\tleft: 43.9rem;\r\n\t}\r\n}\r\n.about-feedback {\r\n\t// .about-feedback__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t// .about-feedback__main\r\n\t&__main {\r\n\t\tdisplay: flex;\r\n\t\tgap: 3.1rem;\r\n\t}\r\n\t// .about-feedback__left\r\n\t&__left {\r\n\t\twidth: 38.2rem;\r\n\t\theight: 22.4rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t// .about-feedback__description\r\n\t&__description {\r\n\t\twidth: 75%;\r\n\t}\r\n\t// .about-feedback__right\r\n\t&__right {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// .about-feedback__form\r\n\t&__form {\r\n\t\tmargin-top: 7.5rem;\r\n\t}\r\n}\r\n.about-intro-animation {\r\n\ttop: 21rem;\r\n\tleft: 28%;\r\n\tz-index: -1;\r\n\r\n\t.about__blocks-item {\r\n\t\twidth: 78.2164rem;\r\n\t\theight: 78.2164rem;\r\n\t}\r\n}\r\n.about-advantages-animation {\r\n\ttransform: rotate(45deg) scale(1.2);\r\n\ttop: 40rem;\r\n\tleft: -80rem;\r\n\twidth: 110.941rem;\r\n\theight: 130.8809rem;\r\n\r\n\t.services__blocks-item {\r\n\t\twidth: 67.089rem;\r\n\t\theight: 92.7639rem;\r\n\t}\r\n}\r\n@keyframes imageAnimation {\r\n\t0% {\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n\t100% {\r\n\t\topacity: 1;\r\n\t\ttransition: opacity 0.2s linear;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.about-intro {\r\n\t\tmargin-top: 3.4rem;\r\n\t\tmargin-bottom: 8.2rem;\r\n\t\t// .about-intro__inner\r\n\t\t&__inner {\r\n\t\t\theight: 116.6rem;\r\n\t\t}\r\n\t\t// .about-intro__title\r\n\t\t&__title {\r\n\t\t\ttext-align: center;\r\n\t\t\twidth: 61.8rem;\r\n\t\t\tmargin-bottom: 4rem;\r\n\t\t}\r\n\t\t// .about-intro__subtitle\r\n\t\t&__subtitle {\r\n\t\t\ttext-align: center;\r\n\t\t\tposition: static;\r\n\t\t\tfont-size: 2.8rem;\r\n\t\t\ttransform: none;\r\n\t\t}\r\n\t\t// .about-intro__img\r\n\t\t&__img {\r\n\t\t\t&--1 {\r\n\t\t\t\twidth: 19.8rem;\r\n\t\t\t\theight: 26.2rem;\r\n\r\n\t\t\t\ttop: 8.6rem;\r\n\t\t\t\tleft: unset;\r\n\t\t\t\tright: 0;\r\n\t\t\t}\r\n\t\t\t&--2 {\r\n\t\t\t\twidth: 26.8rem;\r\n\t\t\t\theight: 16.2rem;\r\n\r\n\t\t\t\tleft: 17.6rem;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\ttransform: none;\r\n\t\t\t}\r\n\t\t\t&--3 {\r\n\t\t\t\twidth: 19.2rem;\r\n\t\t\t\theight: 22.8rem;\r\n\r\n\t\t\t\tbottom: 19.6rem;\r\n\t\t\t\tleft: -2.8rem;\r\n\t\t\t}\r\n\t\t\t&--6 {\r\n\t\t\t\twidth: 17.2rem;\r\n\t\t\t\theight: 24.8rem;\r\n\r\n\t\t\t\tbottom: 10.6rem;\r\n\t\t\t\tright: -3.2rem;\r\n\r\n\t\t\t\tclip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\r\n\t\t\t}\r\n\t\t\t&--7 {\r\n\t\t\t\twidth: 38.2rem;\r\n\t\t\t\theight: 20rem;\r\n\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tright: unset;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tclip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.about-business {\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .about-business__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\t\t// .about-business__content\r\n\t\t&__content {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .about-business__item\r\n\t\t&__item {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t// .about-business__text\r\n\t\t&__text {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t\twidth: 65rem;\r\n\t\t\tmin-height: unset;\r\n\t\t}\r\n\t}\r\n\t.about-advantages {\r\n\t\tmargin-bottom: 31.8rem;\r\n\t\t// .about-advantages__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\t\t// .about-advantages__item\r\n\t\t&__item {\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\tpadding: 3.2rem 0;\r\n\t\t\tborder-bottom: 0.2rem solid rgba(36, 36, 36, 0.4);\r\n\r\n\t\t\t&:first-child {\r\n\t\t\t\tpadding: 0 0 3.2rem 0;\r\n\t\t\t\tgap: 7.2rem;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 19.4rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tjustify-content: flex-end;\r\n\t\t\t\tgap: 4.8rem;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 25.6rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\tjustify-content: flex-start;\r\n\t\t\t\tgap: 4.8rem;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 22.2rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(4) {\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tgap: unset;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 22.8rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(5) {\r\n\t\t\t\tjustify-content: flex-end;\r\n\t\t\t\tgap: 7.2rem;\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 23.8rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:last-child {\r\n\t\t\t\tpadding: 3.2rem 0 0 0;\r\n\t\t\t\tborder-bottom: none;\r\n\t\t\t\tjustify-content: flex-start;\r\n\t\t\t\twidth: 25.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .about-advantages__img\r\n\t\t&__img {\r\n\t\t\twidth: 24rem;\r\n\t\t\theight: 11.6rem;\r\n\t\t}\r\n\t\t// .about-advantages__text\r\n\t\t&__text {\r\n\t\t\tfont-size: 3.6rem;\r\n\t\t}\r\n\t\t// .about-advantages__btn\r\n\t\t&__btn {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: unset;\r\n\t\t\tleft: unset;\r\n\t\t\tbottom: -10.4rem;\r\n\t\t\tright: 9.8rem;\r\n\t\t}\r\n\t}\r\n\t.about-feedback {\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .about-feedback__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t&__title {\r\n\t\t\tfont-weight: 800;\r\n\t\t\twidth: 85%;\r\n\t\t\tline-height: 100%;\r\n\t\t}\r\n\t\t// .about-feedback__main\r\n\t\t&__main {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 6.4rem;\r\n\t\t}\r\n\t\t// .about-feedback__left\r\n\t\t&__left {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: unset;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\t\t// .about-feedback__description\r\n\t\t&__description {\r\n\t\t\twidth: 80%;\r\n\t\t}\r\n\t\t// .about-feedback__right\r\n\t\t&__right {\r\n\t\t\tflex: 0;\r\n\t\t}\r\n\t\t// .about-feedback__form\r\n\t\t&__form {\r\n\t\t\tmargin-top: 0;\r\n\t\t}\r\n\t}\r\n\t.about-intro-animation {\r\n\t\ttop: 45rem;\r\n\t\tleft: 15%;\r\n\t\tz-index: -1;\r\n\r\n\t\t.about__blocks-item {\r\n\t\t\twidth: 52.191rem;\r\n\t\t\theight: 52.191rem;\r\n\t\t}\r\n\t}\r\n\t.about-advantages-animation {\r\n\t\ttransform: rotate(-135deg) scale(1);\r\n\t\ttop: 95rem;\r\n\t\tleft: 60rem;\r\n\t\twidth: 82.14rem;\r\n\t\theight: 96.9034rem;\r\n\r\n\t\t.services__blocks-item {\r\n\t\t\twidth: 67.089rem;\r\n\t\t\theight: 92.7639rem;\r\n\r\n\t\t\t&:nth-child(1) {\r\n\t\t\t\tanimation: blockMove1 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n\t\t\t}\r\n\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tanimation: blockMove2 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n\t\t\t}\r\n\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\tanimation: blockMove3 5s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".projects {\r\n\tmargin-top: 5rem;\r\n\tmargin-bottom: 20rem;\r\n\t// .projects__header\r\n\t&__header {\r\n\t\tdisplay: flex;\r\n\t\talign-items: flex-end;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: 1rem;\r\n\r\n\t\tmargin-bottom: 10rem;\r\n\t}\r\n\t// .projects__main\r\n\t&__main {\r\n\t\tcolumn-gap: 3rem;\r\n\t\trow-gap: 10.3rem;\r\n\t}\r\n}\r\n.projects-header {\r\n\t// .projects-header__title\r\n\t&__title {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 800;\r\n\t\tline-height: 100%; /* 80px */\r\n\r\n\t\twidth: 92.5rem;\r\n\t}\r\n}\r\n.category {\r\n\t&-btn {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 2rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\r\n\t\ttransition: color 0.2s ease-out;\r\n\r\n\t\t&.show {\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\tcolor: #fe921f;\r\n\t\t\tsvg {\r\n\t\t\t\tpath {\r\n\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\ttransition: transform 0.2s ease-in;\r\n\t\t\t\ttransform: rotate(-180deg);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\tcolor: #fe921f;\r\n\t\t\tsvg {\r\n\t\t\t\tpath {\r\n\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&-menu {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tbackground-color: #efefef;\r\n\t\tborder: 0.1rem solid #242424;\r\n\r\n\t\topacity: 0;\r\n\t\tvisibility: hidden;\r\n\t\ttransition:\r\n\t\t\topacity 0.2s linear,\r\n\t\t\tvisibility 0.1s linear 0.2s;\r\n\r\n\t\t&.show {\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t\ttransition: opacity 0.2s linear;\r\n\t\t}\r\n\t\t// .category-menu__item\r\n\t\t&__item {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t\t// .category-menu__text\r\n\t\t&__text {\r\n\t\t\tmargin-left: 1rem;\r\n\t\t}\r\n\t}\r\n}\r\n.projects-category {\r\n\tposition: relative;\r\n\t// .projects-category__btn\r\n\t&__btn {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 0.8rem;\r\n\r\n\t\tspan {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\ttransition: transform 0.2s ease-in;\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 1.2707rem;\r\n\t\t\t\theight: 0.7061rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .projects-category__menu\r\n\t&__menu {\r\n\t\tposition: absolute;\r\n\t\tright: 0;\r\n\t\ttop: 3.2rem;\r\n\t\tz-index: 1;\r\n\r\n\t\tpadding: 1.6rem;\r\n\t\twidth: 24.8rem;\r\n\t\tgap: 0.8rem;\r\n\t}\r\n}\r\n.projects-main {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(4, 38.3rem);\r\n}\r\n.projects-item {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\tposition: relative;\r\n\r\n\t&:hover {\r\n\t\timg {\r\n\t\t\ttransition: transform 0.5s linear;\r\n\t\t\ttransform: scale(105%);\r\n\t\t}\r\n\t}\r\n\r\n\t&--element {\r\n\t\tposition: relative;\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\r\n\t\t.about__blocks {\r\n\t\t\tposition: relative;\r\n\t\t\ttop: -5.25rem;\r\n\t\t\tleft: -5.25rem;\r\n\r\n\t\t\t&-item {\r\n\t\t\t\twidth: 10.5rem;\r\n\t\t\t\theight: 10.5rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .projects-item__img\r\n\t&__img {\r\n\t\toverflow: hidden;\r\n\t\theight: 53rem;\r\n\t\tmargin-bottom: 2rem;\r\n\t\timg {\r\n\t\t\ttransition: transform 0.5s linear;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n\t// .projects-item__info\r\n\t&__info {\r\n\t\tgap: 1rem;\r\n\t\tmargin-bottom: 0.8rem;\r\n\t}\r\n\t// .projects-item__description\r\n\t&__description {\r\n\t\toverflow: hidden;\r\n\t\ttext-overflow: ellipsis;\r\n\t\tdisplay: -webkit-box;\r\n\t\t-webkit-line-clamp: 3;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\theight: 7.2rem;\r\n\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 600;\r\n\t\tline-height: 2.4rem; /* 133.333% */\r\n\t}\r\n}\r\n.project-info {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\r\n\tfont-family: \"Gilroy\";\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tline-height: normal;\r\n\t// .project-info__name\r\n\t&__name {\r\n\t\tcolor: #e7284a;\r\n\t}\r\n\t// .project-info__date\r\n\t&__date {\r\n\t\tcolor: #242424;\r\n\t}\r\n}\r\n\r\n.projects-item-animation {\r\n\twidth: 13.0548rem;\r\n\theight: 12.9817rem;\r\n\ttransform: rotate(30deg) scale(0.2);\r\n\ttop: 15rem;\r\n\tleft: 10rem;\r\n\r\n\t.services__blocks-item {\r\n\t\theight: 50rem;\r\n\t\tborder: 0.5rem solid #c7c7c7;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.projects {\r\n\t\tmargin-top: 4rem;\r\n\t\tmargin-bottom: 37.2rem;\r\n\t\t// .projects__header\r\n\t\t&__header {\r\n\t\t\talign-items: flex-start;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: unset;\r\n\t\t\tgap: 6.4rem;\r\n\r\n\t\t\tmargin-bottom: 4.4rem;\r\n\t\t}\r\n\t\t// .projects__main\r\n\t\t&__main {\r\n\t\t\tcolumn-gap: unset;\r\n\t\t\trow-gap: 5.6rem;\r\n\t\t}\r\n\t}\r\n\t.projects-header {\r\n\t\t// .projects-header__title\r\n\t\t&__title {\r\n\t\t\tfont-size: 5.6rem;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n\t.category {\r\n\t\t&-btn {\r\n\t\t\tfont-size: 3.6rem;\r\n\t\t}\r\n\t\t&-menu {\r\n\t\t\tborder: none;\r\n\t\t\tborder-top: 0.2rem solid #c7c7c7;\r\n\t\t\t// .category-menu__text\r\n\t\t\t&__text {\r\n\t\t\t\tmargin-left: 2rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.projects-category {\r\n\t\tposition: static;\r\n\t\t// .projects-category__btn\r\n\t\t&__btn {\r\n\t\t\tgap: 1.6rem;\r\n\r\n\t\t\tspan {\r\n\t\t\t\tsvg {\r\n\t\t\t\t\twidth: 2.4rem;\r\n\t\t\t\t\theight: 1.2rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .projects-category__menu\r\n\t\t&__menu {\r\n\t\t\tposition: fixed;\r\n\t\t\ttop: unset;\r\n\t\t\tbottom: 0;\r\n\t\t\tz-index: 1;\r\n\r\n\t\t\tpadding: 6.4rem 3.2rem;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: unset;\r\n\t\t\tgap: 1.6rem;\r\n\t\t}\r\n\t}\r\n\t.projects-main {\r\n\t\tgrid-template-columns: 100%;\r\n\t}\r\n\t.projects-item {\r\n\t\t// .projects-item__img\r\n\t\t&__img {\r\n\t\t\theight: 63.4rem;\r\n\t\t\tmargin-bottom: 4rem;\r\n\t\t}\r\n\t\t// .projects-item__info\r\n\t\t&__info {\r\n\t\t\tgap: 2rem;\r\n\t\t\tmargin-bottom: 1.6rem;\r\n\t\t}\r\n\t\t// .projects-item__description\r\n\t\t&__description {\r\n\t\t\theight: unset;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tline-height: normal; /* 133.333% */\r\n\t\t}\r\n\t}\r\n\t.project-info {\r\n\t\tfont-size: 3.2rem;\r\n\t}\r\n}\r\n",".contacts {\r\n\tmargin-top: 5rem;\r\n\tmargin-bottom: 20rem;\r\n\tposition: relative;\r\n\t// .contacts__inner\r\n\t&__inner {\r\n\t\tposition: relative;\r\n\t}\r\n\t// .contacts__title\r\n\t&__title {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t// .contacts__main\r\n\t&__main {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 20rem;\r\n\t}\r\n\t// .contacts__item\r\n\t&__item {\r\n\t\theight: 70.7rem;\r\n\t}\r\n}\r\n.contacts-item {\r\n\tdisplay: flex;\r\n\talign-items: flex-end;\r\n\tjustify-content: space-between;\r\n\tposition: relative;\r\n\r\n\t&:nth-child(even) {\r\n\t\tjustify-content: flex-end;\r\n\t\t.contacts-item__info {\r\n\t\t\ttext-align: right;\r\n\t\t\talign-items: flex-end;\r\n\t\t}\r\n\r\n\t\t.contacts-item__img {\r\n\t\t\tleft: -15rem;\r\n\t\t}\r\n\r\n\t\t.contacts-item__btn {\r\n\t\t\tmargin-left: auto;\r\n\t\t}\r\n\t}\r\n\t// .contacts-item__info\r\n\t&__info {\r\n\t\twidth: 41.3rem;\r\n\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 3.4rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t}\r\n\t&__address {\r\n\t\tmargin-bottom: 2rem;\r\n\t}\r\n\t&__phone {\r\n\t\tmargin-bottom: 2rem;\r\n\t\t&:hover {\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\t}\r\n\t// .contacts-item__mail\r\n\t&__mail {\r\n\t\tmargin-bottom: 4.8rem;\r\n\t\t&:hover {\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\t}\r\n\t// .contacts-item__img\r\n\t&__img {\r\n\t\twidth: 108.3rem;\r\n\t\theight: 70.7rem;\r\n\r\n\t\tposition: absolute;\r\n\t\tright: -15rem;\r\n\t\ttop: 0;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n}\r\n.contacts-feedback {\r\n\tmargin-bottom: 20rem;\r\n\tposition: relative;\r\n\t// .contacts-feedback__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t// .contacts-feedback__section\r\n\t&__section {\r\n\t\twidth: 55.3rem;\r\n\t}\r\n\t// .contacts-feedback__description\r\n\t&__description {\r\n\t\twidth: 29.4rem;\r\n\t}\r\n\t// .contacts-feedback__form\r\n\t&__form {\r\n\t\twidth: 79.4rem;\r\n\t\tmargin-top: 13rem;\r\n\t}\r\n}\r\n.contacts-feedback-animation {\r\n\tleft: -30rem;\r\n\ttop: 25rem;\r\n\tz-index: -1;\r\n\t.about__blocks-item {\r\n\t\twidth: 48.4731rem;\r\n\t\theight: 48.4731rem;\r\n\t}\r\n\r\n\t@media (max-width: 48em) {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n.contacts-block {\r\n\twidth: 77.746rem;\r\n\theight: 77.31rem;\r\n\r\n\tleft: 150rem;\r\n\ttop: 50rem;\r\n\ttransform: rotate(30deg) scale(0.8);\r\n\r\n\t.services__blocks-item {\r\n\t\twidth: 66.8026rem;\r\n\t\theight: 66.5259rem;\r\n\t}\r\n\r\n\t@media (max-width: 48em) {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.contacts {\r\n\t\tmargin-top: 4rem;\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .contacts__title\r\n\t\t&__title {\r\n\t\t\tposition: static;\r\n\t\t}\r\n\t\t// .contacts__main\r\n\t\t&__main {\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .contacts__item\r\n\t\t&__item {\r\n\t\t\theight: unset;\r\n\t\t\tgap: 4rem;\r\n\t\t}\r\n\t}\r\n\t.contacts-block {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.contacts-item {\r\n\t\tflex-direction: column;\r\n\t\talign-items: flex-start;\r\n\r\n\t\t&:nth-child(even) {\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\t.contacts-item__info {\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t}\r\n\r\n\t\t\t.contacts-item__img {\r\n\t\t\t\tleft: unset;\r\n\t\t\t}\r\n\r\n\t\t\t.contacts-item__btn {\r\n\t\t\t\tmargin-left: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .contacts-item__info\r\n\t\t&__info {\r\n\t\t\twidth: 100%;\r\n\t\t\tfont-size: 4.8rem;\r\n\t\t\torder: 2;\r\n\t\t}\r\n\t\t&__title {\r\n\t\t\tmargin-bottom: 2.4rem;\r\n\t\t}\r\n\t\t&__address {\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t}\r\n\t\t&__phone {\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t}\r\n\t\t// .contacts-item__btn\r\n\t\t&__btn {\r\n\t\t}\r\n\t\t// .contacts-item__img\r\n\t\t&__img {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 43rem;\r\n\r\n\t\t\tposition: static;\r\n\t\t\torder: 1;\r\n\t\t}\r\n\t}\r\n\t.contacts-feedback {\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .contacts-feedback__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .contacts-item__mail\r\n\t\t&__mail {\r\n\t\t\tmargin-bottom: 7.2rem;\r\n\t\t}\r\n\t\t// .contacts-feedback__section\r\n\t\t&__section {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t// .contacts-feedback__description\r\n\t\t&__description {\r\n\t\t\twidth: 58.8rem;\r\n\t\t}\r\n\t\t// .contacts-feedback__form\r\n\t\t&__form {\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin-top: 0;\r\n\t\t}\r\n\t}\r\n}\r\n","@keyframes detailBlock {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\r\n\t100% {\r\n\t\ttransform: scale(0.27);\r\n\t}\r\n}\r\n.detail {\r\n\tmargin-top: 5rem;\r\n\tmargin-bottom: 20rem;\r\n\t// .detail__inner\r\n\t&__inner {\r\n\t\tmargin-bottom: 10rem;\r\n\t}\r\n\t// .detail__main\r\n\t&__main {\r\n\t\tgap: 3rem;\r\n\t}\r\n\t// .detail__btn\r\n\t&__btn {\r\n\t\tmargin: 0 auto;\r\n\t}\r\n}\r\n.detail-main {\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\t// .detail-main__info\r\n\t&__info {\r\n\t\twidth: 38.3rem;\r\n\t}\r\n\t// .detail-main__slider\r\n\t&__slider {\r\n\t\twidth: 120.7rem;\r\n\t}\r\n}\r\n.detail-info {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\t// .detail-info__main\r\n\t&__main {\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tline-height: normal;\r\n\t\tcolor: #242424;\r\n\t}\r\n\t// .detail-info__date\r\n\t&__date {\r\n\t\tdisplay: block;\r\n\t\tmargin-bottom: 1.6rem;\r\n\t}\r\n\t// .detail-info__type\r\n\t&__type {\r\n\t\tcolor: #e7284a;\r\n\t\tmargin-bottom: 2rem;\r\n\t}\r\n\t// .detail-info__city\r\n\t&__city {\r\n\t\tfont-size: 3.4rem;\r\n\t\tfont-weight: 700;\r\n\t\tmargin-bottom: 2rem;\r\n\t\tfont-family: \"Akrobat\";\r\n\t}\r\n\t// .detail-info__volume\r\n\t&__volume {\r\n\t\tfont-weight: 500;\r\n\t}\r\n\t// .detail-info__block\r\n\t&__block {\r\n\t}\r\n}\r\n.detail-block {\r\n\twidth: 38.3rem;\r\n\theight: 40.4rem;\r\n\tborder: 0.1rem solid #242424;\r\n\r\n\tposition: relative;\r\n\t// .detail-block__item\r\n\t&__item {\r\n\t\tborder: 0.1rem solid #c7c7c7;\r\n\t\tposition: absolute;\r\n\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\r\n\t\t&:nth-child(1) {\r\n\t\t\ttransform: scale(0.9);\r\n\t\t}\r\n\t\t&:nth-child(2) {\r\n\t\t\ttransform: scale(0.9);\r\n\t\t\tanimation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 3s infinite;\r\n\t\t}\r\n\t\t&:nth-child(3) {\r\n\t\t\ttransform: scale(0.9);\r\n\t\t\tanimation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 2s infinite;\r\n\t\t}\r\n\t\t&:nth-child(4) {\r\n\t\t\ttransform: scale(0.9);\r\n\t\t\tanimation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 1s infinite;\r\n\t\t}\r\n\t\t&:nth-child(5) {\r\n\t\t\ttransform: scale(0.9);\r\n\t\t\tanimation: detailBlock 4s cubic-bezier(0, 0.42, 0.8, 1) 0s infinite;\r\n\t\t}\r\n\t\t&:nth-child(6) {\r\n\t\t\ttransform: scale(0.27);\r\n\t\t}\r\n\t}\r\n}\r\n.detail-slider {\r\n\t// .detail-slider__main\r\n\t&__main {\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 10rem;\r\n\t}\r\n\t// .detail-slider__thumb\r\n\t&__thumb {\r\n\t\twidth: 100%;\r\n\t}\r\n}\r\n.detail-slider-main {\r\n\t// .detail-slider-main__slide\r\n\t&__slide {\r\n\t\tcursor: pointer;\r\n\t\twidth: 100%;\r\n\t\theight: 74.1rem;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n}\r\n.detail-slider-thumb {\r\n\t// .detail-slider-thumb__slide\r\n\t&__slide {\r\n\t\tcursor: pointer;\r\n\t\twidth: 38.3rem;\r\n\t\theight: 40.4rem;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.fancybox__toolbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.fancybox__footer {\r\n\tdisplay: none;\r\n}\r\n\r\n.fancybox__backdrop {\r\n\tbackground: rgba(239, 239, 239, 0.1);\r\n\tbackdrop-filter: blur(1.75rem);\r\n}\r\n\r\n.fancybox__content {\r\n\twidth: 120.7rem !important;\r\n\theight: 74.1rem !important;\r\n\r\n\timg {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n.f-button {\r\n\twidth: 6.4rem;\r\n\theight: 6.4rem;\r\n\tbackground: url(../../assets/images/f-button-bg.svg) center / contain no-repeat;\r\n\tbox-shadow: none;\r\n\r\n\tsvg {\r\n\t\tstroke-width: 0.1rem;\r\n\t\twidth: 3.2rem;\r\n\t\theight: 3.2rem;\r\n\t}\r\n\r\n\t&.is-close-btn {\r\n\t\tsvg {\r\n\t\t\twidth: 2rem;\r\n\t\t\theight: 2rem;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.fancybox__nav {\r\n\t--f-button-width: 5rem;\r\n\t--f-button-height: 5rem;\r\n\t--f-button-color: #242424;\r\n\t--f-button-hover-color: #242424;\r\n\t--f-button-hover-bg: none;\r\n\t--f-button-active-bg: none;\r\n\t--f-button-svg-width: 2.6rem;\r\n\t--f-button-svg-height: 2.6rem;\r\n\t--f-button-svg-filter: none;\r\n\topacity: 1;\r\n}\r\n\r\n.is-horizontal .f-carousel__nav .f-button.is-next,\r\n.is-horizontal .fancybox__nav .f-button.is-next {\r\n\tright: 25.2rem;\r\n}\r\n\r\n.is-horizontal .f-carousel__nav .f-button.is-next,\r\n.is-horizontal .fancybox__nav .f-button.is-prev {\r\n\tleft: 25.2rem;\r\n}\r\n\r\n.fancybox__content > .f-button.is-close-btn {\r\n\t--f-button-width: 6.4rem;\r\n\t--f-button-height: 6.4rem;\r\n\t--f-button-border-radius: 0;\r\n\t--f-button-color: #242424;\r\n\t--f-button-hover-color: #242424;\r\n\t--f-button-svg-width: 2rem;\r\n\t--f-button-svg-height: 2rem;\r\n\ttop: -13rem;\r\n\tright: -25.2rem;\r\n\topacity: 1;\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.detail {\r\n\t\tmargin-top: 4rem;\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .detail__inner\r\n\t\t&__inner {\r\n\t\t\tmargin-bottom: 7.2rem;\r\n\t\t}\r\n\t\t// .detail__main\r\n\t\t&__main {\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.detail-main {\r\n\t\tflex-direction: column;\r\n\t\t// .detail-main__info\r\n\t\t&__info {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t// .detail-main__slider\r\n\t\t&__slider {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n\t.detail-info {\r\n\t\tflex-direction: column;\r\n\t\t// .detail-info__main\r\n\t\t&__main {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t}\r\n\t\t// .detail-info__date\r\n\t\t&__date {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t}\r\n\t\t// .detail-info__type\r\n\t\t&__type {\r\n\t\t\tcolor: #e7284a;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tmargin-bottom: 1.6rem;\r\n\t\t}\r\n\t\t// .detail-info__city\r\n\t\t&__city {\r\n\t\t\tfont-size: 4.8rem;\r\n\t\t\tmargin-bottom: 1.6rem;\r\n\t\t}\r\n\t\t// .detail-info__block\r\n\t\t&__block {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\t.detail-slider {\r\n\t\t// .detail-slider__main\r\n\t\t&__main {\r\n\t\t\tmargin-bottom: 0;\r\n\t\t}\r\n\t}\r\n\t.detail-slider-main {\r\n\t\t// .detail-slider-main__slide\r\n\t\t&__slide {\r\n\t\t\twidth: 62rem;\r\n\t\t\theight: 42.2rem;\r\n\t\t}\r\n\t}\r\n\r\n\t.fancybox__content {\r\n\t\twidth: 100% !important;\r\n\t\theight: 97.8rem !important;\r\n\r\n\t\timg {\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n\r\n\t.f-button {\r\n\t\twidth: 9.6rem;\r\n\t\theight: 9.6rem;\r\n\r\n\t\tsvg {\r\n\t\t\tstroke-width: 0.2rem;\r\n\t\t\twidth: 4.8rem;\r\n\t\t\theight: 4.8rem;\r\n\t\t}\r\n\r\n\t\t&.is-close-btn {\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 4rem;\r\n\t\t\t\theight: 4rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.fancybox__nav {\r\n\t\t--f-button-width: 5rem;\r\n\t\t--f-button-height: 5rem;\r\n\t\t--f-button-color: #242424;\r\n\t\t--f-button-hover-color: #242424;\r\n\t\t--f-button-hover-bg: none;\r\n\t\t--f-button-active-bg: none;\r\n\t\t--f-button-svg-width: 2.6rem;\r\n\t\t--f-button-svg-height: 2.6rem;\r\n\t\t--f-button-svg-filter: none;\r\n\t\topacity: 1;\r\n\t}\r\n\r\n\t.is-horizontal .f-carousel__nav .f-button.is-next,\r\n\t.is-horizontal .fancybox__nav .f-button.is-next {\r\n\t\tright: 0;\r\n\t}\r\n\r\n\t.is-horizontal .f-carousel__nav .f-button.is-next,\r\n\t.is-horizontal .fancybox__nav .f-button.is-prev {\r\n\t\tleft: 0;\r\n\t}\r\n\r\n\t.is-compact .fancybox__content > .f-button.is-close-btn {\r\n\t\t--f-button-border-radius: 50%;\r\n\t\t--f-button-color: #242424;\r\n\t\t--f-button-hover-color: #242424;\r\n\t\t--f-button-outline-color: #242424;\r\n\t\t--f-button-bg: none;\r\n\t\t--f-button-active-bg: none;\r\n\t\t--f-button-hover-bg: none;\r\n\t\t--f-button-svg-width: 3.6rem;\r\n\t\t--f-button-svg-height: 3.6rem;\r\n\t\t--f-button-svg-filter: none;\r\n\t\ttop: -29rem;\r\n\t\tright: 0;\r\n\t}\r\n}\r\n",".our_services {\r\n  padding-top: 5rem;\r\n  &_container {\r\n  }\r\n  &__title {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 4rem;\r\n    color: #242424;\r\n    font-family: 'Akrobat';\r\n    font-size: 15rem;\r\n    font-weight: 800;\r\n    line-height: normal;\r\n    text-transform: uppercase;\r\n    &-img {\r\n      width: 15rem;\r\n      height: 13rem;\r\n      &--mob {\r\n        display: none;\r\n      }\r\n      img {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n    }\r\n    &-text {\r\n      &.title--opacity {\r\n        -webkit-text-stroke: 1px #242424;\r\n        text-stroke: 1px #242424;\r\n        color: transparent;\r\n      }\r\n    }\r\n    &-subtitle {\r\n      color: #242424;\r\n      font-family: 'Gilroy';\r\n      font-size: 1.6rem;\r\n      font-weight: 700;\r\n      line-height: normal;\r\n      text-transform: uppercase;\r\n      text-align: center;\r\n    }\r\n  }\r\n}\r\n.tasks {\r\n  &__content {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    &-img {\r\n      width: 66rem;\r\n      height: 66rem;\r\n      clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 14% 100%, 0 84%);\r\n      overflow: hidden;\r\n      img {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n    }\r\n    &-info {\r\n      width: 51.9rem;\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 0.8rem;\r\n      font-size: 1.8rem;\r\n      font-weight: 500;\r\n      line-height: normal;\r\n      &--text {\r\n        display: flex;\r\n        gap: 0.8rem;\r\n        img {\r\n          width: 0.4rem;\r\n          height: 2.4rem;\r\n        }\r\n      }\r\n    }\r\n    &-bottom {\r\n      align-self: flex-end;\r\n      width: 38.2rem;\r\n      height: 36rem;\r\n      &--mob {\r\n        display: none;\r\n      }\r\n      img {\r\n        width: 100%;\r\n        height: 100%;\r\n      }\r\n    }\r\n    &-btn {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      position: absolute;\r\n      right: -5rem;\r\n      bottom: 29rem;\r\n    }\r\n    &-show {\r\n      display: none;\r\n    }\r\n  }\r\n}\r\n@media (max-width: 48em) {\r\n  .our_services {\r\n    &__title {\r\n      font-size: 11.6rem;\r\n      font-weight: 800;\r\n      line-height: normal;\r\n      text-transform: uppercase;\r\n      gap: 1rem;\r\n      text-align: center;\r\n\r\n      &-img {\r\n        width: 26.4rem;\r\n        height: 12rem;\r\n        &.mob--invisible {\r\n          display: none;\r\n        }\r\n        &--mob {\r\n          display: block;\r\n          width: 26.4rem;\r\n          height: 12rem;\r\n          img {\r\n            width: 100%;\r\n            height: 100%;\r\n          }\r\n        }\r\n      }\r\n      &-subtitle {\r\n        margin-top: 5.2rem;\r\n      }\r\n    }\r\n  }\r\n  .tasks {\r\n    &__content {\r\n      flex-direction: column;\r\n      gap: 1.6rem;\r\n      &-img {\r\n        width: 33.2rem;\r\n        height: 35.4rem;\r\n      }\r\n      &-top {\r\n        display: flex;\r\n        align-items: flex-end;\r\n        justify-content: space-between;\r\n      }\r\n      &-info {\r\n        width: 100%;\r\n        font-size: 3.2rem;\r\n        img {\r\n          width: 0.8rem;\r\n          height: 4.8rem;\r\n        }\r\n        &--text {\r\n          gap: 1.6rem;\r\n          &:nth-child(n + 7) {\r\n            display: none;\r\n          }\r\n        }\r\n      }\r\n      &-bottom {\r\n        display: none;\r\n        &--mob {\r\n          display: block;\r\n          width: 33rem;\r\n          height: 26.2rem;\r\n          img {\r\n            width: 100%;\r\n            height: 100%;\r\n          }\r\n        }\r\n      }\r\n      &-show {\r\n        display: block;\r\n        color: #e84b0f;\r\n        font-size: 3.2rem;\r\n        font-weight: 600;\r\n        line-height: normal;\r\n      }\r\n      &-btn {\r\n        right: 0.3rem;\r\n        bottom: auto;\r\n        top: 0rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n",".stands {\r\n  &_container {\r\n    padding: 0 14.7rem;\r\n  }\r\n  &__banner {\r\n    position: relative;\r\n    padding-top: 14rem;\r\n    &-title {\r\n      position: absolute;\r\n      top: 6rem;\r\n      display: flex;\r\n      flex-direction: column;\r\n      font-family: 'Akrobat';\r\n      font-size: 15rem;\r\n      font-weight: 800;\r\n      line-height: normal;\r\n      text-transform: uppercase;\r\n    }\r\n    &-scroll {\r\n      top: 53rem;\r\n      left: 35rem;\r\n    }\r\n    &-info {\r\n      margin-top: 18.1rem;\r\n      //   font-size: 4rem;\r\n      font-size: 3.98rem;\r\n      font-weight: 700;\r\n      line-height: normal;\r\n    }\r\n    &-img {\r\n      margin-left: auto;\r\n      width: 120.6rem;\r\n      height: 47rem;\r\n      img {\r\n        height: 100%;\r\n        object-fit: cover;\r\n      }\r\n    }\r\n  }\r\n}\r\n@keyframes appearText {\r\n  0% {\r\n    opacity: 1;\r\n    height: 0;\r\n    padding-top: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    height: 100%;\r\n    padding-top: 3.2rem;\r\n  }\r\n}\r\n.our_projects {\r\n  position: relative;\r\n  &__top {\r\n    display: flex;\r\n    margin-bottom: 10rem;\r\n    &-title {\r\n      width: 120.6rem;\r\n    }\r\n  }\r\n  &__stands {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 9.5rem;\r\n    &-chapter {\r\n      font-size: 1.6rem;\r\n      font-weight: 700;\r\n      line-height: normal;\r\n      text-transform: uppercase;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-top: 1px solid rgba(36, 36, 36, 0.4);\r\n    border-bottom: 1px solid rgba(36, 36, 36, 0.4);\r\n    // &--container {\r\n    // }\r\n    &-img {\r\n      opacity: 0;\r\n      position: absolute;\r\n      top: 37rem;\r\n      right: 27rem;\r\n      width: 65.8rem;\r\n      height: 94.8rem;\r\n      overflow: hidden;\r\n      pointer-events: none;\r\n      z-index: 2;\r\n      transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\r\n      img {\r\n        width: 100%;\r\n        height: 100%;\r\n        object-fit: cover;\r\n      }\r\n      &.visible {\r\n        opacity: 1;\r\n      }\r\n    }\r\n    &-link {\r\n      position: absolute;\r\n      bottom: -10rem;\r\n      left: 75rem;\r\n    }\r\n    &-item {\r\n      display: flex;\r\n      gap: 2rem;\r\n      padding: 2.4rem 82.4rem 2.4rem 0;\r\n      border-bottom: 1px solid rgba(36, 36, 36, 0.4);\r\n      cursor: pointer;\r\n      &--btn {\r\n        display: none;\r\n      }\r\n      &:nth-last-child(1) {\r\n        border: none;\r\n      }\r\n      &.active {\r\n        .our_projects__list-item--name {\r\n          color: #fe921f;\r\n          margin-bottom: 3.2rem;\r\n        }\r\n        .our_projects__list-item--arrow {\r\n          transform: rotateX(180deg);\r\n        }\r\n      }\r\n      &--info {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 0.8rem;\r\n      }\r\n      &--arrow {\r\n        width: 3.2rem;\r\n        height: 3.2rem;\r\n        margin-bottom: 0.4rem;\r\n        transform: rotateX(0deg);\r\n        transition: transform 0.25s ease-in-out;\r\n        img {\r\n          width: 100%;\r\n          height: 100%;\r\n        }\r\n      }\r\n      &--name {\r\n        display: flex;\r\n        align-items: flex-end;\r\n        gap: 2rem;\r\n        margin-bottom: 0;\r\n        font-family: 'Akrobat';\r\n        font-size: 3.4rem;\r\n        font-weight: 700;\r\n        line-height: normal;\r\n        transition: margin-bottom 0.2s ease-in-out, color 0.25s ease;\r\n      }\r\n      &--title {\r\n        width: 74.4rem;\r\n      }\r\n      &--date {\r\n        color: #9d9d9d;\r\n        font-size: 1.8rem;\r\n        font-weight: 500;\r\n        line-height: normal;\r\n      }\r\n      &--description {\r\n        width: 74.4rem;\r\n        font-size: 1.8rem;\r\n        font-weight: 400;\r\n        line-height: normal;\r\n        max-height: 0;\r\n        overflow: hidden;\r\n        transition: max-height 0.2s ease-out;\r\n      }\r\n    }\r\n  }\r\n}\r\n.stages {\r\n  position: relative;\r\n  &__blocks {\r\n    position: absolute;\r\n    width: 67rem;\r\n    top: 113rem;\r\n    left: 10rem;\r\n    transform: rotate(136.569deg);\r\n    &-item {\r\n      position: absolute;\r\n      width: 67rem;\r\n      height: 92.7rem;\r\n      border: 1px solid #c7c7c7;\r\n      &:nth-child(1) {\r\n        transform: translate(0rem, 32rem);\r\n      }\r\n      &:nth-child(2) {\r\n        transform: translate(14rem, 16rem);\r\n      }\r\n      &:nth-child(3) {\r\n        transform: translate(28rem, 0rem);\r\n      }\r\n    }\r\n  }\r\n  &__title {\r\n    display: flex;\r\n    &-title {\r\n      width: 120.7rem;\r\n    }\r\n  }\r\n  &__list {\r\n    width: 120.7rem;\r\n    display: flex;\r\n    gap: 17.3rem;\r\n    flex-wrap: wrap;\r\n    margin-left: auto;\r\n    &-item {\r\n      position: relative;\r\n      width: 17.1rem;\r\n      display: flex;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      gap: 3.4rem;\r\n      text-align: center;\r\n      font-size: 1.8rem;\r\n      font-weight: 600;\r\n      line-height: 1.33;\r\n      &-download {\r\n        position: absolute;\r\n        top: -3rem;\r\n        left: -3rem;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        width: 7rem;\r\n        height: 7rem;\r\n        &--back {\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          width: 100%;\r\n          height: 100%;\r\n          z-index: 1;\r\n          svg {\r\n            width: 100%;\r\n            height: 100%;\r\n          }\r\n        }\r\n        &--icon {\r\n          z-index: 2;\r\n        }\r\n      }\r\n      &--photo {\r\n        position: relative;\r\n        width: 14rem;\r\n        height: 14rem;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border: 1px solid #242424;\r\n        font-size: 4rem;\r\n        font-weight: 700;\r\n        line-height: normal;\r\n        &::before {\r\n          content: '';\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          width: 100%;\r\n          height: 100%;\r\n          transform: rotate(15deg);\r\n          border: 1px solid #242424;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  &__contacts {\r\n    margin-top: 20rem;\r\n    gap: 10rem;\r\n    justify-content: flex-end;\r\n    .contacts-feedback__title {\r\n      font-size: 3.4rem;\r\n      font-weight: 700;\r\n      line-height: normal;\r\n    }\r\n    .contacts-feedback__section {\r\n      width: 31.3rem;\r\n    }\r\n    .contacts-feedback__form {\r\n      margin-top: 7.5rem;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 48em) {\r\n  .stands {\r\n    &_container {\r\n      padding: 0 3rem;\r\n    }\r\n    &__banner {\r\n      padding-top: 7.2rem;\r\n      &-title {\r\n        position: relative;\r\n        top: auto;\r\n        font-size: 11.6rem;\r\n      }\r\n      &-img {\r\n        width: 59.6rem;\r\n        height: 32.4rem;\r\n        margin-top: -4.6rem;\r\n        margin-right: -3rem;\r\n      }\r\n      &-info {\r\n        margin-top: 8rem;\r\n        font-size: 4rem;\r\n        font-weight: 700;\r\n      }\r\n    }\r\n  }\r\n  .our_projects {\r\n    &__top {\r\n      flex-direction: column;\r\n      gap: 2.4rem;\r\n      margin-bottom: 6.4rem;\r\n      &-title {\r\n        width: 98%;\r\n        margin-bottom: 0;\r\n      }\r\n    }\r\n    &__stands {\r\n      &-chapter {\r\n        font-size: 2.8rem;\r\n        font-weight: 700;\r\n        line-height: normal;\r\n        text-transform: uppercase;\r\n      }\r\n    }\r\n    &__list {\r\n      &--container {\r\n        width: 100%;\r\n      }\r\n      &-link {\r\n        left: auto;\r\n        right: 0;\r\n        bottom: -20.6rem;\r\n      }\r\n      &-img {\r\n        display: none;\r\n        position: relative;\r\n        width: 35.6rem;\r\n        height: 51.6rem;\r\n        margin: 0 auto;\r\n        margin-top: 4rem;\r\n        top: auto;\r\n        right: auto;\r\n\r\n        &.visible {\r\n          display: block;\r\n        }\r\n      }\r\n      &-item {\r\n        position: relative;\r\n        display: block;\r\n        padding: 3.2rem 0;\r\n        &.active {\r\n          .our_projects__list-item--name {\r\n            margin-bottom: 4rem;\r\n          }\r\n        }\r\n        &--btn {\r\n          display: none;\r\n          color:  #e84b0f;\r\n          font-size: 3.2rem;\r\n          font-weight: 600;\r\n          line-height: normal;\r\n        }\r\n        &--arrow {\r\n          position: absolute;\r\n          top: 3rem;\r\n          right: 3rem;\r\n          width: 4.8rem;\r\n          height: 4.8rem;\r\n        }\r\n        &--info {\r\n          gap: 2rem;\r\n        }\r\n        &--date {\r\n          font-size: 3.2rem;\r\n          font-weight: 500;\r\n          line-height: normal;\r\n        }\r\n        &--name {\r\n          align-items: flex-start;\r\n          font-family: 'Akrobat';\r\n          font-size: 4.8rem;\r\n          font-weight: 700;\r\n          line-height: normal;\r\n        }\r\n        &--description {\r\n          display: -webkit-box;\r\n          width: 100%;\r\n          -webkit-box-orient: vertical;\r\n          -webkit-line-clamp: 4;\r\n          overflow: hidden;\r\n          text-overflow: ellipsis;\r\n          font-size: 3.2rem;\r\n          font-weight: 400;\r\n          line-height: normal;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .stages {\r\n    &__blocks {\r\n      position: absolute;\r\n      width: 67rem;\r\n      bottom: 78rem;\r\n      left: auto;\r\n      right: -61rem;\r\n      transform: rotate(136.569deg);\r\n      &-item {\r\n        position: absolute;\r\n        width: 49.6rem;\r\n        height: 68.6rem;\r\n        border: 1px solid #c7c7c7;\r\n        &:nth-child(1) {\r\n          transform: translate(0rem, 28rem);\r\n        }\r\n        &:nth-child(2) {\r\n          transform: translate(15rem, 14rem);\r\n        }\r\n        &:nth-child(3) {\r\n          transform: translate(28rem, 0rem);\r\n        }\r\n      }\r\n    }\r\n    &__title {\r\n      flex-direction: column;\r\n      gap: 2.4rem;\r\n    }\r\n    &__list {\r\n      width: 100%;\r\n      column-gap: 2.8rem;\r\n      row-gap: 6rem;\r\n      &-item {\r\n        width: 32.8rem;\r\n        gap: 2.4rem;\r\n        &--number {\r\n          font-size: 4rem;\r\n          font-weight: 700;\r\n          line-height: normal;\r\n        }\r\n        &--photo {\r\n          width: 17.2rem;\r\n          height: 17.2rem;\r\n        }\r\n        &--name {\r\n          font-size: 3.2rem;\r\n          font-weight: 600;\r\n          line-height: normal;\r\n        }\r\n      }\r\n      .btn {\r\n        flex: 1;\r\n      }\r\n    }\r\n    &__contacts {\r\n      gap: 6.4rem;\r\n      .contacts-feedback__section {\r\n        width: 100%;\r\n      }\r\n      .contacts-feedback__form {\r\n        margin-top: 0;\r\n      }\r\n      .form__title {\r\n        display: none;\r\n      }\r\n      .contacts-feedback__title {\r\n        font-family: 'Akrobat';\r\n        font-size: 5.6rem;\r\n        font-weight: 800;\r\n        line-height: 1;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@import 'style/fonts';\r\n@import 'style/libs/set';\r\n@import 'style/style';\r\n@import 'style/components/header';\r\n@import 'style/components/footer';\r\n@import 'style/components/modal';\r\n@import 'style/pages/home';\r\n@import 'style/pages/about';\r\n@import 'style/pages/projects';\r\n@import 'style/pages/contacts';\r\n@import 'style/pages/detail';\r\n@import 'style/pages/services';\r\n@import 'style/pages/stands';\r\n\r\n.mobile {\r\n  display: none;\r\n}\r\n@media (max-width: 48em) {\r\n  .desktop {\r\n    display: none;\r\n  }\r\n  .mobile {\r\n    display: block;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.css":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_effect_fade_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../resolve-url-loader/index.js!../../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./effect-fade.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./node_modules/swiper/modules/effect-fade.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_effect_fade_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_effect_fade_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_effect_fade_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_effect_fade_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/swiper/swiper.css":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../resolve-url-loader/index.js!../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./swiper.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./node_modules/swiper/swiper.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_resolve_url_loader_index_js_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_swiper_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/resolve-url-loader/index.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[4]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_4_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:application/font-woff;charset=utf-8;base64, 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":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:application/font-woff;charset=utf-8;base64, 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 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:application/font-woff;charset=utf-8;base64, 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";

/***/ }),

/***/ "./src/assets/fonts/akrobat/Akrobat-Bold.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/akrobat/Akrobat-Bold.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Akrobat-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/akrobat/Akrobat-ExtraBold.ttf":
/*!********************************************************!*\
  !*** ./src/assets/fonts/akrobat/Akrobat-ExtraBold.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Akrobat-ExtraBold.ttf";

/***/ }),

/***/ "./src/assets/fonts/akrobat/Akrobat-Light.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/akrobat/Akrobat-Light.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Akrobat-Light.ttf";

/***/ }),

/***/ "./src/assets/fonts/akrobat/Akrobat-Regular.ttf":
/*!******************************************************!*\
  !*** ./src/assets/fonts/akrobat/Akrobat-Regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Akrobat-Regular.ttf";

/***/ }),

/***/ "./src/assets/fonts/avanti/avanti-4.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/avanti/avanti-4.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/avanti-4.ttf";

/***/ }),

/***/ "./src/assets/fonts/gilroy/Gilroy-Bold.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/gilroy/Gilroy-Bold.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Gilroy-Bold.ttf";

/***/ }),

/***/ "./src/assets/fonts/gilroy/Gilroy-Light.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/gilroy/Gilroy-Light.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Gilroy-Light.ttf";

/***/ }),

/***/ "./src/assets/fonts/gilroy/Gilroy-Medium.ttf":
/*!***************************************************!*\
  !*** ./src/assets/fonts/gilroy/Gilroy-Medium.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Gilroy-Medium.ttf";

/***/ }),

/***/ "./src/assets/fonts/gilroy/Gilroy-Regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/gilroy/Gilroy-Regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fonts/Gilroy-Regular.ttf";

/***/ }),

/***/ "./src/assets/images/burger-bg.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/burger-bg.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/burger-bg.svg";

/***/ }),

/***/ "./src/assets/images/checkbox-arrow.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/checkbox-arrow.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/checkbox-arrow.svg";

/***/ }),

/***/ "./src/assets/images/f-button-bg.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/f-button-bg.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/f-button-bg.svg";

/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLContenteditableMaskElement)
/* harmony export */ });
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




class HTMLContenteditableMaskElement extends _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** Returns HTMLElement selection start */
  get _unsafeSelectionStart() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Returns HTMLElement selection end */
  get _unsafeSelectionEnd() {
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    const anchorOffset = selection && selection.anchorOffset;
    const focusOffset = selection && selection.focusOffset;
    if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
      return anchorOffset;
    }
    return focusOffset;
  }

  /** Sets HTMLElement selection */
  _unsafeSelect(start, end) {
    if (!this.rootElement.createRange) return;
    const range = this.rootElement.createRange();
    range.setStart(this.input.firstChild || this.input, start);
    range.setEnd(this.input.lastChild || this.input, end);
    const root = this.rootElement;
    const selection = root.getSelection && root.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  /** HTMLElement value */
  get value() {
    return this.input.textContent || '';
  }
  set value(value) {
    this.input.textContent = value;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-input-mask-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-input-mask-element.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLInputMaskElement)
/* harmony export */ });
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");




/** Bridge between InputElement and {@link Masked} */
class HTMLInputMaskElement extends _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** InputElement to use mask on */

  constructor(input) {
    super(input);
    this.input = input;
    this._handlers = {};
  }

  /** Returns InputElement selection start */
  get _unsafeSelectionStart() {
    return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
  }

  /** Returns InputElement selection end */
  get _unsafeSelectionEnd() {
    return this.input.selectionEnd;
  }

  /** Sets InputElement selection */
  _unsafeSelect(start, end) {
    this.input.setSelectionRange(start, end);
  }
  get value() {
    return this.input.value;
  }
  set value(value) {
    this.input.value = value;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = _html_mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"];




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTMLMaskElement)
/* harmony export */ });
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/** Bridge between HTMLElement and {@link Masked} */
class HTMLMaskElement extends _mask_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** HTMLElement to use mask on */

  constructor(input) {
    super();
    this.input = input;
    this._handlers = {};
  }
  get rootElement() {
    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
    return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
  }

  /**
    Is element in focus
  */
  get isActive() {
    return this.input === this.rootElement.activeElement;
  }

  /**
    Binds HTMLElement events to mask internal events
  */
  bindEvents(handlers) {
    Object.keys(handlers).forEach(event => this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]));
  }

  /**
    Unbinds HTMLElement events to mask internal events
  */
  unbindEvents() {
    Object.keys(this._handlers).forEach(event => this._toggleEventHandler(event));
  }
  _toggleEventHandler(event, handler) {
    if (this._handlers[event]) {
      this.input.removeEventListener(event, this._handlers[event]);
      delete this._handlers[event];
    }
    if (handler) {
      this.input.addEventListener(event, handler);
      this._handlers[event] = handler;
    }
  }
}
/** Mapping between HTMLElement events and mask internal events */
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputMask)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./html-input-mask-element.js */ "./node_modules/imask/esm/controls/html-input-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");









/** Listens to element events and controls changes between element and {@link Masked} */
class InputMask {
  /**
    View element
  */

  /** Internal {@link Masked} model */

  constructor(el, opts) {
    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"](el) : new _html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_4__["default"](el);
    this.masked = (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
    this._bindEvents();

    // refresh
    this.updateValue();
    this._onChange();
  }
  maskEquals(mask) {
    var _this$masked;
    return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
  }

  /** Masked */
  get mask() {
    return this.masked.mask;
  }
  set mask(mask) {
    if (this.maskEquals(mask)) return;
    if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].Masked) && this.masked.constructor === (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__.maskedClass)(mask)) {
      // TODO "any" no idea
      this.masked.updateOptions({
        mask
      });
      return;
    }
    const masked = mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].Masked ? mask : (0,_masked_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
      mask
    });
    masked.unmaskedValue = this.masked.unmaskedValue;
    this.masked = masked;
  }

  /** Raw value */
  get value() {
    return this._value;
  }
  set value(str) {
    if (this.value === str) return;
    this.masked.value = str;
    this.updateControl();
    this.alignCursor();
  }

  /** Unmasked value */
  get unmaskedValue() {
    return this._unmaskedValue;
  }
  set unmaskedValue(str) {
    if (this.unmaskedValue === str) return;
    this.masked.unmaskedValue = str;
    this.updateControl();
    this.alignCursor();
  }

  /** Typed unmasked value */
  get typedValue() {
    return this.masked.typedValue;
  }
  set typedValue(val) {
    if (this.masked.typedValueEquals(val)) return;
    this.masked.typedValue = val;
    this.updateControl();
    this.alignCursor();
  }

  /** Display value */
  get displayValue() {
    return this.masked.displayValue;
  }

  /** Starts listening to element events */
  _bindEvents() {
    this.el.bindEvents({
      selectionChange: this._saveSelection,
      input: this._onInput,
      drop: this._onDrop,
      click: this._onClick,
      focus: this._onFocus,
      commit: this._onChange
    });
  }

  /** Stops listening to element events */
  _unbindEvents() {
    if (this.el) this.el.unbindEvents();
  }

  /** Fires custom event */
  _fireEvent(ev, e) {
    const listeners = this._listeners[ev];
    if (!listeners) return;
    listeners.forEach(l => l(e));
  }

  /** Current selection start */
  get selectionStart() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
  }

  /** Current cursor position */
  get cursorPos() {
    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
  }
  set cursorPos(pos) {
    if (!this.el || !this.el.isActive) return;
    this.el.select(pos, pos);
    this._saveSelection();
  }

  /** Stores current selection */
  _saveSelection( /* ev */
  ) {
    if (this.displayValue !== this.el.value) {
      console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
    }

    this._selection = {
      start: this.selectionStart,
      end: this.cursorPos
    };
  }

  /** Syncronizes model value from view */
  updateValue() {
    this.masked.value = this.el.value;
    this._value = this.masked.value;
  }

  /** Syncronizes view from model value, fires change events */
  updateControl() {
    const newUnmaskedValue = this.masked.unmaskedValue;
    const newValue = this.masked.value;
    const newDisplayValue = this.displayValue;
    const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
    this._unmaskedValue = newUnmaskedValue;
    this._value = newValue;
    if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
    if (isChanged) this._fireChangeEvents();
  }

  /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */
  updateOptions(opts) {
    const {
      mask,
      ...restOpts
    } = opts;
    const updateMask = !this.maskEquals(mask);
    const updateOpts = !(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectIncludes)(this.masked, restOpts);
    if (updateMask) this.mask = mask;
    if (updateOpts) this.masked.updateOptions(restOpts); // TODO

    if (updateMask || updateOpts) this.updateControl();
  }

  /** Updates cursor */
  updateCursor(cursorPos) {
    if (cursorPos == null) return;
    this.cursorPos = cursorPos;

    // also queue change cursor for mobile browsers
    this._delayUpdateCursor(cursorPos);
  }

  /** Delays cursor update to support mobile browsers */
  _delayUpdateCursor(cursorPos) {
    this._abortUpdateCursor();
    this._changingCursorPos = cursorPos;
    this._cursorChanging = setTimeout(() => {
      if (!this.el) return; // if was destroyed
      this.cursorPos = this._changingCursorPos;
      this._abortUpdateCursor();
    }, 10);
  }

  /** Fires custom events */
  _fireChangeEvents() {
    this._fireEvent('accept', this._inputEvent);
    if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
  }

  /** Aborts delayed cursor update */
  _abortUpdateCursor() {
    if (this._cursorChanging) {
      clearTimeout(this._cursorChanging);
      delete this._cursorChanging;
    }
  }

  /** Aligns cursor to nearest available position */
  alignCursor() {
    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT));
  }

  /** Aligns cursor only if selection is empty */
  alignCursorFriendly() {
    if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
    this.alignCursor();
  }

  /** Adds listener on custom event */
  on(ev, handler) {
    if (!this._listeners[ev]) this._listeners[ev] = [];
    this._listeners[ev].push(handler);
    return this;
  }

  /** Removes custom event listener */
  off(ev, handler) {
    if (!this._listeners[ev]) return this;
    if (!handler) {
      delete this._listeners[ev];
      return this;
    }
    const hIndex = this._listeners[ev].indexOf(handler);
    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
    return this;
  }

  /** Handles view input event */
  _onInput(e) {
    this._inputEvent = e;
    this._abortUpdateCursor();

    // fix strange IE behavior
    if (!this._selection) return this.updateValue();
    const details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      // new state
      value: this.el.value,
      cursorPos: this.cursorPos,
      // old state
      oldValue: this.displayValue,
      oldSelection: this._selection
    });
    const oldRawValue = this.masked.rawInputValue;
    const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
      input: true,
      raw: true
    }).offset;

    // force align in remove direction only if no input chars were removed
    // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
    const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE;
    let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
    if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
    this.updateControl();
    this.updateCursor(cursorPos);
    delete this._inputEvent;
  }

  /** Handles view change event and commits model value */
  _onChange() {
    if (this.displayValue !== this.el.value) {
      this.updateValue();
    }
    this.masked.doCommit();
    this.updateControl();
    this._saveSelection();
  }

  /** Handles view drop event, prevents by default */
  _onDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  /** Restore last selection on focus */
  _onFocus(ev) {
    this.alignCursorFriendly();
  }

  /** Restore last selection on focus */
  _onClick(ev) {
    this.alignCursorFriendly();
  }

  /** Unbind view events and removes element reference */
  destroy() {
    this._unbindEvents();
    this._listeners.length = 0;
    delete this.el;
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_6__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskElement)
/* harmony export */ });
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");


/**  Generic element API to use with mask */
class MaskElement {
  /** */

  /** */

  /** */

  /** Safely returns selection start */
  get selectionStart() {
    let start;
    try {
      start = this._unsafeSelectionStart;
    } catch {}
    return start != null ? start : this.value.length;
  }

  /** Safely returns selection end */
  get selectionEnd() {
    let end;
    try {
      end = this._unsafeSelectionEnd;
    } catch {}
    return end != null ? end : this.value.length;
  }

  /** Safely sets element selection */
  select(start, end) {
    if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
    try {
      this._unsafeSelect(start, end);
    } catch {}
  }

  /** */
  get isActive() {
    return false;
  }
  /** */

  /** */

  /** */
}

_core_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDetails)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");


/** Provides details of changing input */
class ActionDetails {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */

  constructor(opts) {
    Object.assign(this, opts);

    // double check if left part was changed (autofilling, other non-standard input triggers)
    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }

  /** Start changing position */
  get startChangePos() {
    return Math.min(this.cursorPos, this.oldSelection.start);
  }

  /** Inserted symbols count */
  get insertedCount() {
    return this.cursorPos - this.startChangePos;
  }

  /** Inserted symbols */
  get inserted() {
    return this.value.substr(this.startChangePos, this.insertedCount);
  }

  /** Removed symbols count */
  get removedCount() {
    // Math.max for opposite operation
    return Math.max(this.oldSelection.end - this.startChangePos ||
    // for Delete
    this.oldValue.length - this.value.length, 0);
  }

  /** Removed symbols */
  get removed() {
    return this.oldValue.substr(this.startChangePos, this.removedCount);
  }

  /** Unchanged head symbols */
  get head() {
    return this.value.substring(0, this.startChangePos);
  }

  /** Unchanged tail symbols */
  get tail() {
    return this.value.substring(this.startChangePos + this.insertedCount);
  }

  /** Remove direction */
  get removeDirection() {
    if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE;

    // align right if delete at right
    return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
    // if not range removed (event with backspace)
    this.oldSelection.end === this.oldSelection.start ? _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT;
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangeDetails)
/* harmony export */ });
/* harmony import */ var _holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holder.js */ "./node_modules/imask/esm/core/holder.js");


/** Provides details of changing model value */
class ChangeDetails {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */

  static normalize(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }
  constructor(details) {
    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }

  /** Aggregate changes */
  aggregate(details) {
    this.rawInserted += details.rawInserted;
    this.skip = this.skip || details.skip;
    this.inserted += details.inserted;
    this.tailShift += details.tailShift;
    return this;
  }

  /** Total offset considering all changes */
  get offset() {
    return this.tailShift + this.inserted.length;
  }
}
_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].ChangeDetails = ChangeDetails;




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContinuousTailDetails)
/* harmony export */ });
/** Provides details of continuous extracted tail */
class ContinuousTailDetails {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */

  constructor(value, from, stop) {
    if (value === void 0) {
      value = '';
    }
    if (from === void 0) {
      from = 0;
    }
    this.value = value;
    this.from = from;
    this.stop = stop;
  }
  toString() {
    return this.value;
  }
  extend(tail) {
    this.value += String(tail);
  }
  appendTo(masked) {
    return masked.append(this.toString(), {
      tail: true
    }).aggregate(masked._appendPlaceholder());
  }
  get state() {
    return {
      value: this.value,
      from: this.from,
      stop: this.stop
    };
  }
  set state(state) {
    Object.assign(this, state);
  }
  unshift(beforePos) {
    if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
    const shiftChar = this.value[0];
    this.value = this.value.slice(1);
    return shiftChar;
  }
  shift() {
    if (!this.value.length) return '';
    const shiftChar = this.value[this.value.length - 1];
    this.value = this.value.slice(0, -1);
    return shiftChar;
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IMask)
/* harmony export */ });
/** Applies mask on element */
function IMask(el, opts) {
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DIRECTION: () => (/* binding */ DIRECTION),
/* harmony export */   escapeRegExp: () => (/* binding */ escapeRegExp),
/* harmony export */   forceDirection: () => (/* binding */ forceDirection),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   objectIncludes: () => (/* binding */ objectIncludes),
/* harmony export */   pick: () => (/* binding */ pick)
/* harmony export */ });
/** Checks if value is string */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}

/** Checks if value is object */
function isObject(obj) {
  var _obj$constructor;
  return typeof obj === 'object' && obj != null && (obj == null || (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === 'Object';
}
function pick(obj, keys) {
  if (Array.isArray(keys)) return pick(obj, (_, k) => keys.includes(k));
  return Object.entries(obj).reduce((acc, _ref) => {
    let [k, v] = _ref;
    if (keys(v, k)) acc[k] = v;
    return acc;
  }, {});
}

/** Direction */
const DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};

/** Direction */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;
    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;
    default:
      return direction;
  }
}

/** Escapes regular expression control chars */
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}

// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
  if (a === b) return true;
  const arrA = Array.isArray(a),
    arrB = Array.isArray(b);
  let i;
  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
    return true;
  }
  if (arrA != arrB) return false;
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const dateA = a instanceof Date,
      dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    const regexpA = a instanceof RegExp,
      regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    const keys = Object.keys(a);
    // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }
  return false;
}

/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangeDetails: () => (/* reexport safe */ _core_change_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   ChunksTailDetails: () => (/* reexport safe */ _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   DIRECTION: () => (/* reexport safe */ _core_utils_js__WEBPACK_IMPORTED_MODULE_7__.DIRECTION),
/* harmony export */   HTMLContenteditableMaskElement: () => (/* reexport safe */ _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   HTMLInputMaskElement: () => (/* reexport safe */ _controls_html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   HTMLMaskElement: () => (/* reexport safe */ _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   InputMask: () => (/* reexport safe */ _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   MaskElement: () => (/* reexport safe */ _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Masked: () => (/* reexport safe */ _masked_base_js__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   MaskedDate: () => (/* reexport safe */ _masked_date_js__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   MaskedDynamic: () => (/* reexport safe */ _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   MaskedEnum: () => (/* reexport safe */ _masked_enum_js__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   MaskedFunction: () => (/* reexport safe */ _masked_function_js__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   MaskedNumber: () => (/* reexport safe */ _masked_number_js__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   MaskedPattern: () => (/* reexport safe */ _masked_pattern_js__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   MaskedRange: () => (/* reexport safe */ _masked_range_js__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   MaskedRegExp: () => (/* reexport safe */ _masked_regexp_js__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   PIPE_TYPE: () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.PIPE_TYPE),
/* harmony export */   PatternFixedDefinition: () => (/* reexport safe */ _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   PatternInputDefinition: () => (/* reexport safe */ _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   createMask: () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   createPipe: () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.createPipe),
/* harmony export */   "default": () => (/* reexport safe */ _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   forceDirection: () => (/* reexport safe */ _core_utils_js__WEBPACK_IMPORTED_MODULE_7__.forceDirection),
/* harmony export */   normalizeOpts: () => (/* reexport safe */ _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__.normalizeOpts),
/* harmony export */   pipe: () => (/* reexport safe */ _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__.pipe)
/* harmony export */ });
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _controls_html_input_mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/html-input-mask-element.js */ "./node_modules/imask/esm/controls/html-input-mask-element.js");
/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_cursor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./masked/pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");


























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch {}




/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Masked)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





/** Append flags */

/** Extract flags */

// see https://github.com/microsoft/TypeScript/issues/6223

/** Provides common masking stuff */
class Masked {
  /** */

  /** */

  /** Transforms value before mask processing */

  /** Transforms each char before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing at the end of editing */

  /** Format typed value to string */

  /** Parse string to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */

  /** */

  constructor(opts) {
    this._value = '';
    this._update({
      ...Masked.DEFAULTS,
      ...opts
    });
    this._initialized = true;
  }

  /** Sets and applies new options */
  updateOptions(opts) {
    if (!Object.keys(opts).length) return;
    this.withValueRefresh(this._update.bind(this, opts));
  }

  /** Sets new options */
  _update(opts) {
    Object.assign(this, opts);
  }

  /** Mask state */
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
  }

  /** Resets value */
  reset() {
    this._value = '';
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this.resolve(value, {
      input: true
    });
  }

  /** Resolve new value */
  resolve(value, flags) {
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    this.reset();
    this.append(value, flags, '');
    this.doCommit();
  }
  get unmaskedValue() {
    return this.value;
  }
  set unmaskedValue(value) {
    this.resolve(value, {});
  }
  get typedValue() {
    return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
  }
  set typedValue(value) {
    if (this.format) {
      this.value = this.format(value, this);
    } else {
      this.unmaskedValue = String(value);
    }
  }

  /** Value that includes raw user input */
  get rawInputValue() {
    return this.extractInput(0, this.displayValue.length, {
      raw: true
    });
  }
  set rawInputValue(value) {
    this.resolve(value, {
      raw: true
    });
  }
  get displayValue() {
    return this.value;
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return this.isComplete;
  }

  /** Finds nearest input position in direction */
  nearestInputPos(cursorPos, direction) {
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return Math.min(this.displayValue.length, toPos - fromPos);
  }

  /** Extracts value in range considering flags */
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return this.displayValue.slice(fromPos, toPos);
  }

  /** Extracts tail in range */
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.extractInput(fromPos, toPos), fromPos);
  }

  /** Appends tail */
  appendTail(tail) {
    if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](String(tail));
    return tail.appendTo(this);
  }

  /** Appends char */
  _appendCharRaw(ch, flags) {
    if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this._value += ch;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
      inserted: ch,
      rawInserted: ch
    });
  }

  /** Appends char */
  _appendChar(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const consistentState = this.state;
    let details;
    [ch, details] = this.doPrepareChar(ch, flags);
    details = details.aggregate(this._appendCharRaw(ch, flags));
    if (details.inserted) {
      let consistentTail;
      let appended = this.doValidate(flags) !== false;
      if (appended && checkTail != null) {
        // validation ok, check tail
        const beforeTailState = this.state;
        if (this.overwrite === true) {
          consistentTail = checkTail.state;
          checkTail.unshift(this.displayValue.length - details.tailShift);
        }
        let tailDetails = this.appendTail(checkTail);
        appended = tailDetails.rawInserted === checkTail.toString();

        // not ok, try shift
        if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
          this.state = beforeTailState;
          consistentTail = checkTail.state;
          checkTail.shift();
          tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();
        }

        // if ok, rollback state after tail
        if (appended && tailDetails.inserted) this.state = beforeTailState;
      }

      // revert all if something went wrong
      if (!appended) {
        details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.state = consistentState;
        if (checkTail && consistentTail) checkTail.state = consistentTail;
      }
    }
    return details;
  }

  /** Appends optional placeholder at the end */
  _appendPlaceholder() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Appends optional eager placeholder at the end */
  _appendEager() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Appends symbols considering flags */
  append(str, flags, tail) {
    if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(str)) throw new Error('value should be string');
    const checkTail = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.isString)(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_1__["default"](String(tail)) : tail;
    if (flags != null && flags.tail) flags._beforeTailState = this.state;
    let details;
    [str, details] = this.doPrepare(str, flags);
    for (let ci = 0; ci < str.length; ++ci) {
      const d = this._appendChar(str[ci], flags, checkTail);
      if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
      details.aggregate(d);
    }
    if ((this.eager === true || this.eager === 'append') && flags != null && flags.input && str) {
      details.aggregate(this._appendEager());
    }

    // append tail but aggregate only tailShift
    if (checkTail != null) {
      details.tailShift += this.appendTail(checkTail).tailShift;
      // TODO it's a good idea to clear state after appending ends
      // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
      // this._resetBeforeTailState();
    }

    return details;
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    this._value = this.displayValue.slice(0, fromPos) + this.displayValue.slice(toPos);
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /** Calls function and reapplies current value */
  withValueRefresh(fn) {
    if (this._refreshing || !this._initialized) return fn();
    this._refreshing = true;
    const rawInput = this.rawInputValue;
    const value = this.value;
    const ret = fn();
    this.rawInputValue = rawInput;
    // append lost trailing chars at the end
    if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
      this.append(value.slice(this.displayValue.length), {}, '');
    }
    delete this._refreshing;
    return ret;
  }
  runIsolated(fn) {
    if (this._isolated || !this._initialized) return fn(this);
    this._isolated = true;
    const state = this.state;
    const ret = fn(this);
    this.state = state;
    delete this._isolated;
    return ret;
  }
  doSkipInvalid(ch, flags, checkTail) {
    return Boolean(this.skipInvalid);
  }

  /** Prepares string before mask processing */
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(this.prepare ? this.prepare(str, this, flags) : str);
  }

  /** Prepares each char before mask processing */
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    return _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"].normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
  }

  /** Validates if value is acceptable */
  doValidate(flags) {
    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
  }

  /** Does additional processing at the end of editing */
  doCommit() {
    if (this.commit) this.commit(this.value, this);
  }
  splice(start, deleteCount, inserted, removeDirection, flags) {
    if (removeDirection === void 0) {
      removeDirection = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    if (flags === void 0) {
      flags = {
        input: true
      };
    }
    const tailPos = start + deleteCount;
    const tail = this.extractTail(tailPos);
    const eagerRemove = this.eager === true || this.eager === 'remove';
    let oldRawValue;
    if (eagerRemove) {
      removeDirection = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_2__.forceDirection)(removeDirection);
      oldRawValue = this.extractInput(0, tailPos, {
        raw: true
      });
    }
    let startChangePos = start;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // if it is just deletion without insertion
    if (removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE) {
      startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE : removeDirection);

      // adjust tailShift if start was aligned
      details.tailShift = startChangePos - start;
    }
    details.aggregate(this.remove(startChangePos));
    if (eagerRemove && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE && oldRawValue === this.rawInputValue) {
      if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) {
        let valLength;
        while (oldRawValue === this.rawInputValue && (valLength = this.displayValue.length)) {
          details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
            tailShift: -1
          })).aggregate(this.remove(valLength - 1));
        }
      } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) {
        tail.unshift();
      }
    }
    return details.aggregate(this.append(inserted, flags, tail));
  }
  maskEquals(mask) {
    return this.mask === mask;
  }
  typedValueEquals(value) {
    const tval = this.typedValue;
    return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
  }
}
Masked.DEFAULTS = {
  skipInvalid: true
};
Masked.EMPTY_VALUES = [undefined, null, ''];
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDate)
/* harmony export */ });
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Date mask */
class MaskedDate extends _pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    const {
      mask,
      pattern,
      ...patternOpts
    } = {
      ...MaskedDate.DEFAULTS,
      ...opts
    };
    super({
      ...patternOpts,
      mask: (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(mask) ? mask : pattern
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      mask,
      pattern,
      blocks,
      ...patternOpts
    } = {
      ...MaskedDate.DEFAULTS,
      ...opts
    };
    const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
    // adjust year block
    if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
    if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
    if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
      patternBlocks.m.from = opts.min.getMonth() + 1;
      patternBlocks.m.to = opts.max.getMonth() + 1;
      if (patternBlocks.m.from === patternBlocks.m.to) {
        patternBlocks.d.from = opts.min.getDate();
        patternBlocks.d.to = opts.max.getDate();
      }
    }
    Object.assign(patternBlocks, this.blocks, blocks);

    // add autofix
    Object.keys(patternBlocks).forEach(bk => {
      const b = patternBlocks[bk];
      if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
    });
    super._update({
      ...patternOpts,
      mask: (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_3__.isString)(mask) ? mask : pattern,
      blocks: patternBlocks
    });
  }
  doValidate(flags) {
    const date = this.date;
    return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
  }

  /** Checks if date is exists */
  isDateExist(str) {
    return this.format(this.parse(str, this), this).indexOf(str) >= 0;
  }

  /** Parsed Date */
  get date() {
    return this.typedValue;
  }
  set date(date) {
    this.typedValue = date;
  }
  get typedValue() {
    return this.isComplete ? super.typedValue : null;
  }
  set typedValue(value) {
    super.typedValue = value;
  }
  maskEquals(mask) {
    return mask === Date || super.maskEquals(mask);
  }
}
MaskedDate.GET_DEFAULT_BLOCKS = () => ({
  d: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1,
    to: 31,
    maxLength: 2
  },
  m: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1,
    to: 12,
    maxLength: 2
  },
  Y: {
    mask: _range_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    from: 1900,
    to: 9999
  }
});
MaskedDate.DEFAULTS = {
  mask: Date,
  pattern: 'd{.}`m{.}`Y',
  format: (date, masked) => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: (str, masked) => {
    const [day, month, year] = str.split('.').map(Number);
    return new Date(year, month - 1, day);
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedDynamic)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/** Dynamic mask for choosing appropriate mask in run-time */
class MaskedDynamic extends _base_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /** Currently chosen mask */

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  constructor(opts) {
    super({
      ...MaskedDynamic.DEFAULTS,
      ...opts
    });
    this.currentMask = undefined;
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    if ('mask' in opts) {
      this.exposeMask = undefined;
      // mask could be totally dynamic with only `dispatch` option
      this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => {
        const {
          expose,
          ...maskOpts
        } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__.normalizeOpts)(m);
        const masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
          overwrite: this._overwrite,
          eager: this._eager,
          skipInvalid: this._skipInvalid,
          ...maskOpts
        });
        if (expose) this.exposeMask = masked;
        return masked;
      }) : [];

      // this.currentMask = this.doDispatch(''); // probably not needed but lets see
    }
  }

  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = this._applyDispatch(ch, flags);
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
    }
    return details;
  }
  _applyDispatch(appended, flags, tail) {
    if (appended === void 0) {
      appended = '';
    }
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
    const inputValue = this.rawInputValue;
    const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
    const tailValue = inputValue.slice(insertValue.length);
    const prevMask = this.currentMask;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const prevMaskState = prevMask == null ? void 0 : prevMask.state;

    // clone flags to prevent overwriting `_beforeTailState`
    this.currentMask = this.doDispatch(appended, {
      ...flags
    }, tail);

    // restore state after dispatch
    if (this.currentMask) {
      if (this.currentMask !== prevMask) {
        // if mask changed reapply input
        this.currentMask.reset();
        if (insertValue) {
          const d = this.currentMask.append(insertValue, {
            raw: true
          });
          details.tailShift = d.inserted.length - prevValueBeforeTail.length;
        }
        if (tailValue) {
          details.tailShift += this.currentMask.append(tailValue, {
            raw: true,
            tail: true
          }).tailShift;
        }
      } else if (prevMaskState) {
        // Dispatch can do something bad with state, so
        // restore prev mask state
        this.currentMask.state = prevMaskState;
      }
    }
    return details;
  }
  _appendPlaceholder() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendPlaceholder());
    }
    return details;
  }
  _appendEager() {
    const details = this._applyDispatch();
    if (this.currentMask) {
      details.aggregate(this.currentMask._appendEager());
    }
    return details;
  }
  appendTail(tail) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (tail) details.aggregate(this._applyDispatch('', {}, tail));
    return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta, _flags$_beforeTailSta2;
    return {
      ...flags,
      _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
    };
  }
  doDispatch(appended, flags, tail) {
    if (flags === void 0) {
      flags = {};
    }
    if (tail === void 0) {
      tail = '';
    }
    return this.dispatch(appended, this, flags, tail);
  }
  doValidate(flags) {
    return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
  }
  doPrepare(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepare(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  doPrepareChar(str, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let [s, details] = super.doPrepareChar(str, flags);
    if (this.currentMask) {
      let currentDetails;
      [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
      details = details.aggregate(currentDetails);
    }
    return [s, details];
  }
  reset() {
    var _this$currentMask;
    (_this$currentMask = this.currentMask) == null ? void 0 : _this$currentMask.reset();
    this.compiledMasks.forEach(m => m.reset());
  }
  get value() {
    return this.exposeMask ? this.exposeMask.value : this.currentMask ? this.currentMask.value : '';
  }
  set value(value) {
    if (this.exposeMask) {
      this.exposeMask.value = value;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.value = value;
  }
  get unmaskedValue() {
    return this.exposeMask ? this.exposeMask.unmaskedValue : this.currentMask ? this.currentMask.unmaskedValue : '';
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeMask) {
      this.exposeMask.unmaskedValue = unmaskedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
    } else super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.exposeMask ? this.exposeMask.typedValue : this.currentMask ? this.currentMask.typedValue : '';
  }
  set typedValue(typedValue) {
    if (this.exposeMask) {
      this.exposeMask.typedValue = typedValue;
      this.currentMask = this.exposeMask;
      this._applyDispatch();
      return;
    }
    let unmaskedValue = String(typedValue);

    // double check it
    if (this.currentMask) {
      this.currentMask.typedValue = typedValue;
      unmaskedValue = this.currentMask.unmaskedValue;
    }
    this.unmaskedValue = unmaskedValue;
  }
  get displayValue() {
    return this.currentMask ? this.currentMask.displayValue : '';
  }
  get isComplete() {
    var _this$currentMask2;
    return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
  }
  get isFilled() {
    var _this$currentMask3;
    return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
  }
  remove(fromPos, toPos) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (this.currentMask) {
      details.aggregate(this.currentMask.remove(fromPos, toPos))
      // update with dispatch
      .aggregate(this._applyDispatch());
    }
    return details;
  }
  get state() {
    var _this$currentMask4;
    return {
      ...super.state,
      _rawInputValue: this.rawInputValue,
      compiledMasks: this.compiledMasks.map(m => m.state),
      currentMaskRef: this.currentMask,
      currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
    };
  }
  set state(state) {
    const {
      compiledMasks,
      currentMaskRef,
      currentMask,
      ...maskedState
    } = state;
    if (compiledMasks) this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
    if (currentMaskRef != null) {
      this.currentMask = currentMaskRef;
      this.currentMask.state = currentMask;
    }
    super.state = maskedState;
  }
  extractInput(fromPos, toPos, flags) {
    return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : '';
  }
  extractTail(fromPos, toPos) {
    return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
  }
  doCommit() {
    if (this.currentMask) this.currentMask.doCommit();
    super.doCommit();
  }
  nearestInputPos(cursorPos, direction) {
    return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
  }
  get overwrite() {
    return this.currentMask ? this.currentMask.overwrite : this._overwrite;
  }
  set overwrite(overwrite) {
    this._overwrite = overwrite;
  }
  get eager() {
    return this.currentMask ? this.currentMask.eager : this._eager;
  }
  set eager(eager) {
    this._eager = eager;
  }
  get skipInvalid() {
    return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
  }
  set skipInvalid(skipInvalid) {
    this._skipInvalid = skipInvalid;
  }
  maskEquals(mask) {
    return Array.isArray(mask) ? this.compiledMasks.every((m, mi) => {
      if (!mask[mi]) return;
      const {
        mask: oldMask,
        ...restOpts
      } = mask[mi];
      return (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
    }) : super.maskEquals(mask);
  }
  typedValueEquals(value) {
    var _this$currentMask5;
    return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
  }
}
MaskedDynamic.DEFAULTS = void 0;
MaskedDynamic.DEFAULTS = {
  dispatch: (appended, masked, flags, tail) => {
    if (!masked.compiledMasks.length) return;
    const inputValue = masked.rawInputValue;

    // simulate input
    const inputs = masked.compiledMasks.map((m, index) => {
      const isCurrent = masked.currentMask === m;
      const startInputPos = isCurrent ? m.displayValue.length : m.nearestInputPos(m.displayValue.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT);
      if (m.rawInputValue !== inputValue) {
        m.reset();
        m.append(inputValue, {
          raw: true
        });
      } else if (!isCurrent) {
        m.remove(startInputPos);
      }
      m.append(appended, masked.currentMaskFlags(flags));
      m.appendTail(tail);
      return {
        index,
        weight: m.rawInputValue.length,
        totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.displayValue.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT)))
      };
    });

    // pop masks with longer values first
    inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedEnum)
/* harmony export */ });
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which validates enum values */
class MaskedEnum extends _pattern_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(opts) {
    super(opts); // mask will be created in _update
  }

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      enum: _enum,
      ...eopts
    } = opts;
    if (_enum) {
      const lengths = _enum.map(e => e.length);
      const requiredLength = Math.min(...lengths);
      const optionalLength = Math.max(...lengths) - requiredLength;
      eopts.mask = '*'.repeat(requiredLength);
      if (optionalLength) eopts.mask += '[' + '*'.repeat(optionalLength) + ']';
      this.enum = _enum;
    }
    super._update(eopts);
  }
  doValidate(flags) {
    return this.enum.some(e => e.indexOf(this.unmaskedValue) === 0) && super.doValidate(flags);
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMask),
/* harmony export */   maskedClass: () => (/* binding */ maskedClass),
/* harmony export */   normalizeOpts: () => (/* binding */ normalizeOpts)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
/** Get Masked class by mask type */
function maskedClass(mask) /* TODO */{
  if (mask == null) throw new Error('mask property should be defined');
  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp;
  if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isString)(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern;
  if (mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate;
  if (mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber;
  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic;
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor;
  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
function normalizeOpts(opts) {
  if (!opts) throw new Error('Options in not defined');
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) {
    if (opts.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return {
      mask: opts
    };

    /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */
    const {
      mask = undefined,
      ...instanceOpts
    } = opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked ? {
      mask: opts
    } : (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opts) && opts.mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked ? opts : {};
    if (mask) {
      const _mask = mask.mask;
      return {
        ...(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.pick)(mask, (_, k) => !k.startsWith('_')),
        mask: mask.constructor,
        _mask,
        ...instanceOpts
      };
    }
  }
  if (!(0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.isObject)(opts)) return {
    mask: opts
  };
  return {
    ...opts
  };
}

// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754

// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;

/** Creates new {@link Masked} depending on mask type */
function createMask(opts) {
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  const nOpts = normalizeOpts(opts);
  const MaskedClass = maskedClass(nOpts.mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask.');
  if (nOpts.mask === MaskedClass) delete nOpts.mask;
  if (nOpts._mask) {
    nOpts.mask = nOpts._mask;
    delete nOpts._mask;
  }
  return new MaskedClass(nOpts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedFunction)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");






/** Masking by custom Function */
class MaskedFunction extends _base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update({
      ...opts,
      validate: opts.mask
    });
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedNumber)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");






/** Number mask */
class MaskedNumber extends _base_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */

  /** Enable characters overwriting */

  /** */

  /** */

  /** Format typed value to string */

  /** Parse string to get typed value */

  constructor(opts) {
    super({
      ...MaskedNumber.DEFAULTS,
      ...opts
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    super._update(opts);
    this._updateRegExps();
  }
  _updateRegExps() {
    const start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
    const mid = '\\d*';
    const end = (this.scale ? "(" + (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : '') + '$';
    this._numberRegExp = new RegExp(start + mid + end);
    this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp).join('') + "]", 'g');
    this._thousandsSeparatorRegExp = new RegExp((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)(this.thousandsSeparator), 'g');
  }
  _removeThousandsSeparators(value) {
    return value.replace(this._thousandsSeparatorRegExp, '');
  }
  _insertThousandsSeparators(value) {
    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    const parts = value.split(this.radix);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
    return parts.join(this.radix);
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const [prepCh, details] = super.doPrepareChar(this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
    /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */
    flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch), flags);
    if (ch && !prepCh) details.skip = true;
    if (prepCh && !this.allowPositive && !this.value && prepCh !== '-') details.aggregate(this._appendChar('-'));
    return [prepCh, details];
  }
  _separatorsCount(to, extendOnSeparators) {
    if (extendOnSeparators === void 0) {
      extendOnSeparators = false;
    }
    let count = 0;
    for (let pos = 0; pos < to; ++pos) {
      if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
        ++count;
        if (extendOnSeparators) to += this.thousandsSeparator.length;
      }
    }
    return count;
  }
  _separatorsCountFromSlice(slice) {
    if (slice === void 0) {
      slice = this._value;
    }
    return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
    const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
    this._value = this._removeThousandsSeparators(this.value);
    const appendDetails = super._appendCharRaw(ch, flags);
    this._value = this._insertThousandsSeparators(this._value);
    const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
    appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
    appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
    return appendDetails;
  }
  _findSeparatorAround(pos) {
    if (this.thousandsSeparator) {
      const searchFrom = pos - this.thousandsSeparator.length + 1;
      const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
      if (separatorPos <= pos) return separatorPos;
    }
    return -1;
  }
  _adjustRangeWithSeparators(from, to) {
    const separatorAroundFromPos = this._findSeparatorAround(from);
    if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
    const separatorAroundToPos = this._findSeparatorAround(to);
    if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
    return [from, to];
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
    const valueBeforePos = this.value.slice(0, fromPos);
    const valueAfterPos = this.value.slice(toPos);
    const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
    const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
      tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
    });
  }
  nearestInputPos(cursorPos, direction) {
    if (!this.thousandsSeparator) return cursorPos;
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT:
        {
          const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
          if (separatorAtLeftPos >= 0) {
            const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
            if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT) {
              return separatorAtLeftPos;
            }
          }
          break;
        }
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_RIGHT:
        {
          const separatorAtRightPos = this._findSeparatorAround(cursorPos);
          if (separatorAtRightPos >= 0) {
            return separatorAtRightPos + this.thousandsSeparator.length;
          }
        }
    }
    return cursorPos;
  }
  doValidate(flags) {
    // validate as string
    let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
    if (valid) {
      // validate as number
      const number = this.number;
      valid = valid && !isNaN(number) && (
      // check min bound for negative values
      this.min == null || this.min >= 0 || this.min <= this.number) && (
      // check max bound for positive values
      this.max == null || this.max <= 0 || this.number <= this.max);
    }
    return valid && super.doValidate(flags);
  }
  doCommit() {
    if (this.value) {
      const number = this.number;
      let validnum = number;

      // check bounds
      if (this.min != null) validnum = Math.max(validnum, this.min);
      if (this.max != null) validnum = Math.min(validnum, this.max);
      if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
      let formatted = this.value;
      if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
      if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
      this._value = formatted;
    }
    super.doCommit();
  }
  _normalizeZeros(value) {
    const parts = this._removeThousandsSeparators(value).split(this.radix);

    // remove leading zeros
    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
    // add leading zero
    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
    if (parts.length > 1) {
      parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
      if (!parts[1].length) parts.length = 1; // remove fractional
    }

    return this._insertThousandsSeparators(parts.join(this.radix));
  }
  _padFractionalZeros(value) {
    if (!value) return value;
    const parts = value.split(this.radix);
    if (parts.length < 2) parts.push('');
    parts[1] = parts[1].padEnd(this.scale, '0');
    return parts.join(this.radix);
  }
  doSkipInvalid(ch, flags, checkTail) {
    if (flags === void 0) {
      flags = {};
    }
    const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
    return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
  }
  get unmaskedValue() {
    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
  }
  set unmaskedValue(unmaskedValue) {
    super.unmaskedValue = unmaskedValue;
  }
  get typedValue() {
    return this.parse(this.unmaskedValue, this);
  }
  set typedValue(n) {
    this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
  }

  /** Parsed Number */
  get number() {
    return this.typedValue;
  }
  set number(number) {
    this.typedValue = number;
  }

  /**
    Is negative allowed
  */
  get allowNegative() {
    return this.min != null && this.min < 0 || this.max != null && this.max < 0;
  }

  /**
    Is positive allowed
  */
  get allowPositive() {
    return this.min != null && this.min > 0 || this.max != null && this.max > 0;
  }
  typedValueEquals(value) {
    // handle  0 -> '' case (typed = 0 even if value = '')
    // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
    return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
  }
}
MaskedNumber.UNMASKED_RADIX = '.';
MaskedNumber.EMPTY_VALUES = [..._base_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMPTY_VALUES, 0];
MaskedNumber.DEFAULTS = {
  mask: Number,
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: [MaskedNumber.UNMASKED_RADIX],
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  scale: 2,
  normalizeZeros: true,
  padFractionalZeros: false,
  parse: Number,
  format: n => n.toLocaleString('en-US', {
    useGrouping: false,
    maximumFractionDigits: 20
  })
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedPattern)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");












/** Pattern mask */
class MaskedPattern extends _base_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /** */

  /** */

  /** Single char for empty input */

  /** Single char for filled input */

  /** Show placeholder only when needed */

  /** Enable characters overwriting */

  /** */

  /** */

  constructor(opts) {
    super({
      ...MaskedPattern.DEFAULTS,
      ...opts,
      definitions: Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"].DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
    });
  }
  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    opts.definitions = Object.assign({}, this.definitions, opts.definitions);
    super._update(opts);
    this._rebuildMask();
  }
  _rebuildMask() {
    const defs = this.definitions;
    this._blocks = [];
    this.exposeBlock = undefined;
    this._stops = [];
    this._maskedBlocks = {};
    const pattern = this.mask;
    if (!pattern || !defs) return;
    let unmaskingBlock = false;
    let optionalBlock = false;
    for (let i = 0; i < pattern.length; ++i) {
      if (this.blocks) {
        const p = pattern.slice(i);
        const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
        // order by key length
        bNames.sort((a, b) => b.length - a.length);
        // use block name with max length
        const bName = bNames[0];
        if (bName) {
          const {
            expose,
            ...blockOpts
          } = (0,_factory_js__WEBPACK_IMPORTED_MODULE_4__.normalizeOpts)(this.blocks[bName]);
          const maskedBlock = (0,_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            displayChar: this.displayChar,
            overwrite: this.overwrite,
            ...blockOpts,
            parent: this
          });
          if (maskedBlock) {
            this._blocks.push(maskedBlock);
            if (expose) this.exposeBlock = maskedBlock;

            // store block index
            if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
            this._maskedBlocks[bName].push(this._blocks.length - 1);
          }
          i += bName.length - 1;
          continue;
        }
      }
      let char = pattern[i];
      let isInput = (char in defs);
      if (char === MaskedPattern.STOP_CHAR) {
        this._stops.push(this._blocks.length);
        continue;
      }
      if (char === '{' || char === '}') {
        unmaskingBlock = !unmaskingBlock;
        continue;
      }
      if (char === '[' || char === ']') {
        optionalBlock = !optionalBlock;
        continue;
      }
      if (char === MaskedPattern.ESCAPE_CHAR) {
        ++i;
        char = pattern[i];
        if (!char) break;
        isInput = false;
      }
      const def = isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        isOptional: optionalBlock,
        lazy: this.lazy,
        eager: this.eager,
        placeholderChar: this.placeholderChar,
        displayChar: this.displayChar,
        ...(0,_factory_js__WEBPACK_IMPORTED_MODULE_4__.normalizeOpts)(defs[char]),
        parent: this
      }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
        char,
        eager: this.eager,
        isUnmasking: unmaskingBlock
      });
      this._blocks.push(def);
    }
  }
  get state() {
    return {
      ...super.state,
      _blocks: this._blocks.map(b => b.state)
    };
  }
  set state(state) {
    const {
      _blocks,
      ...maskedState
    } = state;
    this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
    super.state = maskedState;
  }
  reset() {
    super.reset();
    this._blocks.forEach(b => b.reset());
  }
  get isComplete() {
    return this.exposeBlock ? this.exposeBlock.isComplete : this._blocks.every(b => b.isComplete);
  }
  get isFilled() {
    return this._blocks.every(b => b.isFilled);
  }
  get isFixed() {
    return this._blocks.every(b => b.isFixed);
  }
  get isOptional() {
    return this._blocks.every(b => b.isOptional);
  }
  doCommit() {
    this._blocks.forEach(b => b.doCommit());
    super.doCommit();
  }
  get unmaskedValue() {
    return this.exposeBlock ? this.exposeBlock.unmaskedValue : this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
  }
  set unmaskedValue(unmaskedValue) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.unmaskedValue = unmaskedValue;
      this.appendTail(tail);
      this.doCommit();
    } else super.unmaskedValue = unmaskedValue;
  }
  get value() {
    return this.exposeBlock ? this.exposeBlock.value :
    // TODO return _value when not in change?
    this._blocks.reduce((str, b) => str += b.value, '');
  }
  set value(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.value = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.value = value;
  }
  get typedValue() {
    return this.exposeBlock ? this.exposeBlock.typedValue : super.typedValue;
  }
  set typedValue(value) {
    if (this.exposeBlock) {
      const tail = this.extractTail(this._blockStartPos(this._blocks.indexOf(this.exposeBlock)) + this.exposeBlock.displayValue.length);
      this.exposeBlock.typedValue = value;
      this.appendTail(tail);
      this.doCommit();
    } else super.typedValue = value;
  }
  get displayValue() {
    return this._blocks.reduce((str, b) => str += b.displayValue, '');
  }
  appendTail(tail) {
    return super.appendTail(tail).aggregate(this._appendPlaceholder());
  }
  _appendEager() {
    var _this$_mapPosToBlock;
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.displayValue.length)) == null ? void 0 : _this$_mapPosToBlock.index;
    if (startBlockIndex == null) return details;

    // TODO test if it works for nested pattern masks
    if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
    for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
      const d = this._blocks[bi]._appendEager();
      if (!d.inserted) break;
      details.aggregate(d);
    }
    return details;
  }
  _appendCharRaw(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const blockIter = this._mapPosToBlock(this.displayValue.length);
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (!blockIter) return details;
    for (let bi = blockIter.index;; ++bi) {
      var _flags$_beforeTailSta;
      const block = this._blocks[bi];
      if (!block) break;
      const blockDetails = block._appendChar(ch, {
        ...flags,
        _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null || (_flags$_beforeTailSta = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta[bi]
      });
      const skip = blockDetails.skip;
      details.aggregate(blockDetails);
      if (skip || blockDetails.rawInserted) break; // go next char
    }

    return details;
  }
  extractTail(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
    if (fromPos === toPos) return chunkTail;
    this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
      const blockChunk = b.extractTail(bFromPos, bToPos);
      blockChunk.stop = this._findStopBefore(bi);
      blockChunk.from = this._blockStartPos(bi);
      if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_5__["default"]) blockChunk.blockIndex = bi;
      chunkTail.extend(blockChunk);
    });
    return chunkTail;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    if (fromPos === toPos) return '';
    let input = '';
    this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
      input += b.extractInput(fromPos, toPos, flags);
    });
    return input;
  }
  _findStopBefore(blockIndex) {
    let stopBefore;
    for (let si = 0; si < this._stops.length; ++si) {
      const stop = this._stops[si];
      if (stop <= blockIndex) stopBefore = stop;else break;
    }
    return stopBefore;
  }

  /** Appends placeholder depending on laziness */
  _appendPlaceholder(toBlockIndex) {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.lazy && toBlockIndex == null) return details;
    const startBlockIter = this._mapPosToBlock(this.displayValue.length);
    if (!startBlockIter) return details;
    const startBlockIndex = startBlockIter.index;
    const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
    this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
      if (!b.lazy || toBlockIndex != null) {
        var _blocks2;
        const bDetails = b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length);
        this._value += bDetails.inserted;
        details.aggregate(bDetails);
      }
    });
    return details;
  }

  /** Finds block in pos */
  _mapPosToBlock(pos) {
    let accVal = '';
    for (let bi = 0; bi < this._blocks.length; ++bi) {
      const block = this._blocks[bi];
      const blockStartPos = accVal.length;
      accVal += block.displayValue;
      if (pos <= accVal.length) {
        return {
          index: bi,
          offset: pos - blockStartPos
        };
      }
    }
  }
  _blockStartPos(blockIndex) {
    return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.displayValue.length, 0);
  }
  _forEachBlocksInRange(fromPos, toPos, fn) {
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const fromBlockIter = this._mapPosToBlock(fromPos);
    if (fromBlockIter) {
      const toBlockIter = this._mapPosToBlock(toPos);
      // process first block
      const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
      const fromBlockStartPos = fromBlockIter.offset;
      const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].displayValue.length;
      fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
      if (toBlockIter && !isSameBlock) {
        // process intermediate blocks
        for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
          fn(this._blocks[bi], bi, 0, this._blocks[bi].displayValue.length);
        }

        // process last block
        fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
      }
    }
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    const removeDetails = super.remove(fromPos, toPos);
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      removeDetails.aggregate(b.remove(bFromPos, bToPos));
    });
    return removeDetails;
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    if (!this._blocks.length) return 0;
    const cursor = new _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_6__["default"](this, cursorPos);
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE) {
      // -------------------------------------------------
      // NONE should only go out from fixed to the right!
      // -------------------------------------------------
      if (cursor.pushRightBeforeInput()) return cursor.pos;
      cursor.popState();
      if (cursor.pushLeftBeforeInput()) return cursor.pos;
      return this.displayValue.length;
    }

    // FORCE is only about a|* otherwise is 0
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) {
      // try to break fast when *|a
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT) {
        cursor.pushRightBeforeFilled();
        if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
        cursor.popState();
      }

      // forward flow
      cursor.pushLeftBeforeInput();
      cursor.pushLeftBeforeRequired();
      cursor.pushLeftBeforeFilled();

      // backward flow
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT) {
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
        if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
        cursor.popState();
      }
      if (cursor.ok) return cursor.pos;
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT) return 0;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return 0;
    }
    if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) {
      // forward flow
      cursor.pushRightBeforeInput();
      cursor.pushRightBeforeRequired();
      if (cursor.pushRightBeforeFilled()) return cursor.pos;
      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT) return this.displayValue.length;

      // backward flow
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      cursor.popState();
      if (cursor.ok) return cursor.pos;
      return this.nearestInputPos(cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT);
    }
    return cursorPos;
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.displayValue.length;
    }
    let total = 0;
    this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
      total += b.totalInputPositions(bFromPos, bToPos);
    });
    return total;
  }

  /** Get block by name */
  maskedBlock(name) {
    return this.maskedBlocks(name)[0];
  }

  /** Get all blocks by name */
  maskedBlocks(name) {
    const indices = this._maskedBlocks[name];
    if (!indices) return [];
    return indices.map(gi => this._blocks[gi]);
  }
}
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_7__["default"];
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChunksTailDetails)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class ChunksTailDetails {
  /** */

  constructor(chunks, from) {
    if (chunks === void 0) {
      chunks = [];
    }
    if (from === void 0) {
      from = 0;
    }
    this.chunks = chunks;
    this.from = from;
  }
  toString() {
    return this.chunks.map(String).join('');
  }
  extend(tailChunk) {
    if (!String(tailChunk)) return;
    tailChunk = (0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.isString)(tailChunk) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tailChunk)) : tailChunk;
    const lastChunk = this.chunks[this.chunks.length - 1];
    const extendLast = lastChunk && (
    // if stops are same or tail has no stop
    lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
    // if tail chunk goes just after last chunk
    tailChunk.from === lastChunk.from + lastChunk.toString().length;
    if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      // check the ability to extend previous chunk
      if (extendLast) {
        // extend previous chunk
        lastChunk.extend(tailChunk.toString());
      } else {
        // append new chunk
        this.chunks.push(tailChunk);
      }
    } else if (tailChunk instanceof ChunksTailDetails) {
      if (tailChunk.stop == null) {
        // unwrap floating chunks to parent, keeping `from` pos
        let firstTailChunk;
        while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
          firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
          firstTailChunk.from += tailChunk.from;
          this.extend(firstTailChunk);
        }
      }

      // if tail chunk still has value
      if (tailChunk.toString()) {
        // if chunks contains stops, then popup stop to container
        tailChunk.stop = tailChunk.blockIndex;
        this.chunks.push(tailChunk);
      }
    }
  }
  appendTo(masked) {
    if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedPattern)) {
      const tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.toString());
      return tail.appendTo(masked);
    }
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
      const chunk = this.chunks[ci];
      const lastBlockIter = masked._mapPosToBlock(masked.displayValue.length);
      const stop = chunk.stop;
      let chunkBlock;
      if (stop != null && (
      // if block not found or stop is behind lastBlock
      !lastBlockIter || lastBlockIter.index <= stop)) {
        if (chunk instanceof ChunksTailDetails ||
        // for continuous block also check if stop is exist
        masked._stops.indexOf(stop) >= 0) {
          const phDetails = masked._appendPlaceholder(stop);
          details.aggregate(phDetails);
        }
        chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
      }
      if (chunkBlock) {
        const tailDetails = chunkBlock.appendTail(chunk);
        tailDetails.skip = false; // always ignore skip, it will be set on last
        details.aggregate(tailDetails);
        masked._value += tailDetails.inserted;

        // get not inserted chars
        const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
        if (remainChars) details.aggregate(masked.append(remainChars, {
          tail: true
        }));
      } else {
        details.aggregate(masked.append(chunk.toString(), {
          tail: true
        }));
      }
    }
    return details;
  }
  get state() {
    return {
      chunks: this.chunks.map(c => c.state),
      from: this.from,
      stop: this.stop,
      blockIndex: this.blockIndex
    };
  }
  set state(state) {
    const {
      chunks,
      ...props
    } = state;
    Object.assign(this, props);
    this.chunks = chunks.map(cstate => {
      const chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      chunk.state = cstate;
      return chunk;
    });
  }
  unshift(beforePos) {
    if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
    const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
    let ci = 0;
    while (ci < this.chunks.length) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.unshift(chunkShiftPos);
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        ++ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
  shift() {
    if (!this.chunks.length) return '';
    let ci = this.chunks.length - 1;
    while (0 <= ci) {
      const chunk = this.chunks[ci];
      const shiftChar = chunk.shift();
      if (chunk.toString()) {
        // chunk still contains value
        // but not shifted - means no more available chars to shift
        if (!shiftChar) break;
        --ci;
      } else {
        // clean if chunk has no value
        this.chunks.splice(ci, 1);
      }
      if (shiftChar) return shiftChar;
    }
    return '';
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/cursor.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/cursor.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternCursor)
/* harmony export */ });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");


class PatternCursor {
  constructor(masked, pos) {
    this.masked = masked;
    this._log = [];
    const {
      offset,
      index
    } = masked._mapPosToBlock(pos) || (pos < 0 ?
    // first
    {
      index: 0,
      offset: 0
    } :
    // last
    {
      index: this.masked._blocks.length,
      offset: 0
    });
    this.offset = offset;
    this.index = index;
    this.ok = false;
  }
  get block() {
    return this.masked._blocks[this.index];
  }
  get pos() {
    return this.masked._blockStartPos(this.index) + this.offset;
  }
  get state() {
    return {
      index: this.index,
      offset: this.offset,
      ok: this.ok
    };
  }
  set state(s) {
    Object.assign(this, s);
  }
  pushState() {
    this._log.push(this.state);
  }
  popState() {
    const s = this._log.pop();
    if (s) this.state = s;
    return s;
  }
  bindBlock() {
    if (this.block) return;
    if (this.index < 0) {
      this.index = 0;
      this.offset = 0;
    }
    if (this.index >= this.masked._blocks.length) {
      this.index = this.masked._blocks.length - 1;
      this.offset = this.block.displayValue.length; // TODO this is stupid type error, `block` depends on index that was changed above
    }
  }

  _pushLeft(fn) {
    this.pushState();
    for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.displayValue.length) || 0) {
      var _this$block;
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  _pushRight(fn) {
    this.pushState();
    for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
      if (fn()) return this.ok = true;
    }
    return this.ok = false;
  }
  pushLeftBeforeFilled() {
    return this._pushLeft(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_LEFT);
      if (this.offset !== 0) return true;
    });
  }
  pushLeftBeforeInput() {
    // cases:
    // filled input: 00|
    // optional empty input: 00[]|
    // nested block: XX<[]>|
    return this._pushLeft(() => {
      if (this.block.isFixed) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT);
      return true;
    });
  }
  pushLeftBeforeRequired() {
    return this._pushLeft(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.LEFT);
      return true;
    });
  }
  pushRightBeforeFilled() {
    return this._pushRight(() => {
      if (this.block.isFixed || !this.block.value) return;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.FORCE_RIGHT);
      if (this.offset !== this.block.value.length) return true;
    });
  }
  pushRightBeforeInput() {
    return this._pushRight(() => {
      if (this.block.isFixed) return;

      // const o = this.offset;
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
      // HACK cases like (STILL DOES NOT WORK FOR NESTED)
      // aa|X
      // aa<X|[]>X_    - this will not work
      // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
      return true;
    });
  }
  pushRightBeforeRequired() {
    return this._pushRight(() => {
      if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

      // TODO check |[*]XX_
      this.offset = this.block.nearestInputPos(this.offset, _core_utils_js__WEBPACK_IMPORTED_MODULE_0__.DIRECTION.NONE);
      return true;
    });
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternFixedDefinition)
/* harmony export */ });
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class PatternFixedDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    Object.assign(this, opts);
    this._value = '';
    this.isFixed = true;
  }
  get value() {
    return this._value;
  }
  get unmaskedValue() {
    return this.isUnmasking ? this.value : '';
  }
  get rawInputValue() {
    return this._isRawInput ? this.value : '';
  }
  get displayValue() {
    return this.value;
  }
  reset() {
    this._isRawInput = false;
    this._value = '';
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
    if (!this._value) this._isRawInput = false;
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this._value.length;
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_LEFT:
        return minPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.NONE:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__.DIRECTION.FORCE_RIGHT:
      default:
        return maxPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    return this._isRawInput ? toPos - fromPos : 0;
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this._value.length;
    }
    if (flags === void 0) {
      flags = {};
    }
    return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
  }
  get isComplete() {
    return true;
  }
  get isFilled() {
    return Boolean(this._value);
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.isFilled) return details;
    const appendEager = this.eager === true || this.eager === 'append';
    const appended = this.char === ch;
    const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
    if (isResolved) details.rawInserted = this.char;
    this._value = details.inserted = this.char;
    this._isRawInput = isResolved && (flags.raw || flags.input);
    return details;
  }
  _appendEager() {
    return this._appendChar(this.char, {
      tail: true
    });
  }
  _appendPlaceholder() {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    if (this.isFilled) return details;
    this._value = details.inserted = this.char;
    return details;
  }
  extractTail() {
    return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]('');
  }
  appendTail(tail) {
    if ((0,_core_utils_js__WEBPACK_IMPORTED_MODULE_1__.isString)(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
    return tail.appendTo(this);
  }
  append(str, flags, tail) {
    const details = this._appendChar(str[0], flags);
    if (tail != null) {
      details.tailShift += this.appendTail(tail).tailShift;
    }
    return details;
  }
  doCommit() {}
  get state() {
    return {
      _value: this._value,
      _rawInputValue: this.rawInputValue
    };
  }
  set state(state) {
    this._value = state._value;
    this._isRawInput = Boolean(state._rawInputValue);
  }
}




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternInputDefinition)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");





class PatternInputDefinition {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  constructor(opts) {
    const {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager,
      ...maskOpts
    } = opts;
    this.masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(maskOpts);
    Object.assign(this, {
      parent,
      isOptional,
      placeholderChar,
      displayChar,
      lazy,
      eager
    });
  }
  reset() {
    this.isFilled = false;
    this.masked.reset();
  }
  remove(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    if (fromPos === 0 && toPos >= 1) {
      this.isFilled = false;
      return this.masked.remove(fromPos, toPos);
    }
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  get value() {
    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
  }
  get unmaskedValue() {
    return this.masked.unmaskedValue;
  }
  get rawInputValue() {
    return this.masked.rawInputValue;
  }
  get displayValue() {
    return this.masked.value && this.displayChar || this.value;
  }
  get isComplete() {
    return Boolean(this.masked.value) || this.isOptional;
  }
  _appendChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    const state = this.masked.state;
    // simulate input
    const details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
    if (details.inserted && this.doValidate(flags) === false) {
      details.inserted = details.rawInserted = '';
      this.masked.state = state;
    }
    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
      details.inserted = this.placeholderChar;
    }
    details.skip = !details.inserted && !this.isOptional;
    this.isFilled = Boolean(details.inserted);
    return details;
  }
  append(str, flags, tail) {
    // TODO probably should be done via _appendChar
    return this.masked.append(str, this.currentMaskFlags(flags), tail);
  }
  _appendPlaceholder() {
    const details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    if (this.isFilled || this.isOptional) return details;
    this.isFilled = true;
    details.inserted = this.placeholderChar;
    return details;
  }
  _appendEager() {
    return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }
  extractTail(fromPos, toPos) {
    return this.masked.extractTail(fromPos, toPos);
  }
  appendTail(tail) {
    return this.masked.appendTail(tail);
  }
  extractInput(fromPos, toPos, flags) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.masked.extractInput(fromPos, toPos, flags);
  }
  nearestInputPos(cursorPos, direction) {
    if (direction === void 0) {
      direction = _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE;
    }
    const minPos = 0;
    const maxPos = this.value.length;
    const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
    switch (direction) {
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.LEFT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_LEFT:
        return this.isComplete ? boundPos : minPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.RIGHT:
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.FORCE_RIGHT:
        return this.isComplete ? boundPos : maxPos;
      case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__.DIRECTION.NONE:
      default:
        return boundPos;
    }
  }
  totalInputPositions(fromPos, toPos) {
    if (fromPos === void 0) {
      fromPos = 0;
    }
    if (toPos === void 0) {
      toPos = this.value.length;
    }
    return this.value.slice(fromPos, toPos).length;
  }
  doValidate(flags) {
    return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
  }
  doCommit() {
    this.masked.doCommit();
  }
  get state() {
    return {
      _value: this.value,
      _rawInputValue: this.rawInputValue,
      masked: this.masked.state,
      isFilled: this.isFilled
    };
  }
  set state(state) {
    this.masked.state = state.masked;
    this.isFilled = state.isFilled;
  }
  currentMaskFlags(flags) {
    var _flags$_beforeTailSta;
    return {
      ...flags,
      _beforeTailState: (flags == null || (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
    };
  }
}
PatternInputDefinition.DEFAULT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PIPE_TYPE: () => (/* binding */ PIPE_TYPE),
/* harmony export */   createPipe: () => (/* binding */ createPipe),
/* harmony export */   pipe: () => (/* binding */ pipe)
/* harmony export */ });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");




/** Mask pipe source and destination types */
const PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */
function createPipe(arg, from, to) {
  if (from === void 0) {
    from = PIPE_TYPE.MASKED;
  }
  if (to === void 0) {
    to = PIPE_TYPE.MASKED;
  }
  const masked = (0,_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arg);
  return value => masked.runIsolated(m => {
    m[from] = value;
    return m[to];
  });
}

/** Pipes value through mask depending on mask type, source and destination options */
function pipe(value, mask, from, to) {
  return createPipe(mask, from, to)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRange)
/* harmony export */ });
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _pattern_cursor_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/cursor.js */ "./node_modules/imask/esm/masked/pattern/cursor.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which accepts ranges */
class MaskedRange extends _pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */

  /** Min bound */

  /** Max bound */

  /** */

  get _matchFrom() {
    return this.maxLength - String(this.from).length;
  }
  constructor(opts) {
    super(opts); // mask will be created in _update
  }

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const {
      to = this.to || 0,
      from = this.from || 0,
      maxLength = this.maxLength || 0,
      autofix = this.autofix,
      ...patternOpts
    } = opts;
    this.to = to;
    this.from = from;
    this.maxLength = Math.max(String(to).length, maxLength);
    this.autofix = autofix;
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    let sameCharsCount = 0;
    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
    patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(this.maxLength - sameCharsCount);
    super._update(patternOpts);
  }
  get isComplete() {
    return super.isComplete && Boolean(this.value);
  }
  boundaries(str) {
    let minstr = '';
    let maxstr = '';
    const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
    if (num) {
      minstr = '0'.repeat(placeholder.length) + num;
      maxstr = '9'.repeat(placeholder.length) + num;
    }
    minstr = minstr.padEnd(this.maxLength, '0');
    maxstr = maxstr.padEnd(this.maxLength, '9');
    return [minstr, maxstr];
  }
  doPrepareChar(ch, flags) {
    if (flags === void 0) {
      flags = {};
    }
    let details;
    [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ''), flags);
    if (!this.autofix || !ch) return [ch, details];
    const fromStr = String(this.from).padStart(this.maxLength, '0');
    const toStr = String(this.to).padStart(this.maxLength, '0');
    const nextVal = this.value + ch;
    if (nextVal.length > this.maxLength) return ['', details];
    const [minstr, maxstr] = this.boundaries(nextVal);
    if (Number(maxstr) < this.from) return [fromStr[nextVal.length - 1], details];
    if (Number(minstr) > this.to) {
      if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
        return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
      }
      return [toStr[nextVal.length - 1], details];
    }
    return [ch, details];
  }
  doValidate(flags) {
    const str = this.value;
    const firstNonZero = str.search(/[^0]/);
    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
    const [minstr, maxstr] = this.boundaries(str);
    return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_0__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MaskedRegExp)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");






/** Masking by RegExp */
class MaskedRegExp extends _base_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** */

  /** Enable characters overwriting */

  /** */

  /** */

  updateOptions(opts) {
    super.updateOptions(opts);
  }
  _update(opts) {
    const mask = opts.mask;
    if (mask) opts.validate = value => value.search(mask) >= 0;
    super._update(opts);
  }
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp = MaskedRegExp;




/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    notification.innerHTML = '';
    notification.innerHTML = message;
  }
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        notify(params.lastSlideMessage);
      } else {
        notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        notify(params.firstSlideMessage);
      } else {
        notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = () => {
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = Array.isArray(swiper.pagination.el) ? swiper.pagination.el : [swiper.pagination.el];
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    swiper.el.removeEventListener('focus', handleFocus, true);
    swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
    swiper.el.removeEventListener('pointerup', handlePointerUp, true);
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime;
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.filter(slideEl => slideEl.classList.contains('swiper-slide-active'))[0];
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    swiper.el.removeEventListener('pointerenter', onPointerEnter);
    swiper.el.removeEventListener('pointerleave', onPointerLeave);
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      autoplayStartTime = new Date().getTime();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElement = document.querySelector(swiper.params.controller.control);
      if (controlElement && controlElement.swiper) {
        swiper.controller.control = controlElement.swiper;
      } else if (controlElement) {
        const onControllerSwiper = e => {
          swiper.controller.control = e.detail[0];
          swiper.update();
          controlElement.removeEventListener('init', onControllerSwiper);
        };
        controlElement.addEventListener('init', onControllerSwiper);
      }
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.k)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.d)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slidesLength => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style[getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
  };
  const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    swiper.wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.filter(slideEl => slideEl.getAttribute('data-hash') === hash)[0];
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.append(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      tempDOM.innerHTML = slideEl;
      slidesEl.prepend(tempDOM.children[0]);
      tempDOM.innerHTML = '';
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");


function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = makeElementsArray(nextEl);
    prevEl = makeElementsArray(prevEl);
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  const makeElementsArray = el => (Array.isArray(el) ? el : [el]).filter(e => !!e);
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const realIndex = swiper.realIndex;
      const newSlideIndex = swiper.getSlideIndexByData(index);
      const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
      const loopFix = dir => {
        const indexBeforeLoopFix = swiper.activeIndex;
        swiper.loopFix({
          direction: dir,
          activeSlideIndex: newSlideIndex,
          slideTo: false
        });
        const indexAfterFix = swiper.activeIndex;
        if (indexBeforeLoopFix === indexAfterFix) {
          swiper.slideToLoop(realIndex, 0, false, true);
        }
      };
      if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) {
        loopFix(newSlideIndex > currentSlideIndex ? 'next' : 'prev');
      } else if (swiper.params.centeredSlides) {
        const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (newSlideIndex < Math.floor(slidesPerView / 2)) {
          loopFix('prev');
        }
      }
      swiper.slideToLoop(index);
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.f)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.g)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    let el = swiper.pagination.el;
    el = makeElementsArray(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        subEl.innerHTML = paginationHTML || '';
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.filter(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.a)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        })[0];
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = makeElementsArray(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = makeElementsArray(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = makeElementsArray(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = makeElementsArray(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");




function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector(`.${swiper.params.scrollbar.dragClass}`);
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    }
    disableDraggable();
  }
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.scrollbar.lockClass);
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(swiper.params.scrollbar.scrollbarDisabledClass);
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`)[0];
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener('init', onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener('init', onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        tempDOM.innerHTML = slideEl;
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      slideEl.innerHTML = slide;
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop
    } = swiper.params;
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = swiper.activeIndex || 0;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update();
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !gesture.slideEl) return;
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth;
      image.height = gesture.imageEl.offsetHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
    }
    zoom.scale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    currentScale = forceZoomRatio || gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth;
      imageHeight = gesture.imageEl.offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.k)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.filter(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.i)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  Object.keys(src).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  return {
    isSafari: needPerspectiveFix || isSafari(),
    needPerspectiveFix,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slidesLength);
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    if (allSlidesSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideVisibleClass);
  });
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
      slides[i].classList.add(params.slideVisibleClass);
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  slides.forEach(slideEl => {
    slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
  });
  let activeSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    activeSlide = slides[activeIndex];
  }
  if (activeSlide) {
    // Active classes
    activeSlide.classList.add(params.slideActiveClass);

    // Next Slide
    let nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !nextSlide) {
      nextSlide = slides[0];
    }
    if (nextSlide) {
      nextSlide.classList.add(params.slideNextClass);
    }
    // Prev Slide
    let prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
    if (params.loop && !prevSlide === 0) {
      prevSlide = slides[slides.length - 1];
    }
    if (prevSlide) {
      prevSlide.classList.add(params.slidePrevClass);
    }
  }
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
    }
    return;
  }
  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (swiper.slides[activeIndex]) {
    realIndex = parseInt(swiper.slides[activeIndex].getAttribute('data-swiper-slide-index') || activeIndex, 10);
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit(`slideResetTransition${step}`);
      return;
    }
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // Update Index
  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      newIndex = swiper.getSlideIndexByData(newIndex);
    }
  }
  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled) return swiper;
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled) return swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && params.cssMode) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.clickedIndex;
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  slides.forEach((el, index) => {
    el.setAttribute('data-swiper-slide-index', index);
  });
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next'
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
  let loopedSlides = params.loopedSlides || slidesPerView;
  if (loopedSlides % params.slidesPerGroup !== 0) {
    loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
  }
  swiper.loopedSlides = loopedSlides;
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  let activeIndex = swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter(el => el.classList.contains(params.slideActiveClass))[0]);
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  // prepend last slides before start
  if (activeSlideIndex < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      prependSlidesIndexes.push(slides.length - index - 1);
    }
  } else if (activeSlideIndex /* + slidesPerView */ > swiper.slides.length - loopedSlides * 2) {
    slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / slides.length) * slides.length;
      appendSlidesIndexes.push(index);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      swiper.slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(swiper.slides[index]);
      swiper.slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        if (setTranslate) {
          swiper.slideToLoop(slideRealIndex, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touches[swiper.isHorizontal() ? 'startX' : 'startY'] += diff;
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else {
        swiper.slideToLoop(slideRealIndex, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const data = swiper.touchEventsData;
  data.evCache.push(event);
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!swiper.wrapperEl.contains(targetEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = event.composedPath ? event.composedPath() : event.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
  if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
  const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        prevX: swiper.touches.currentX,
        prevY: swiper.touches.currentY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.swipeDirection === 'next' && swiper.allowSlideNext || swiper.swipeDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    // need another loop fix
    swiper.loopFix({
      direction: swiper.swipeDirection,
      setTranslate: true
    });
    loopFixed = true;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  const pointerIndex = data.evCache.findIndex(cachedEv => cachedEv.pointerId === event.pointerId);
  if (pointerIndex >= 0) {
    data.evCache.splice(pointerIndex, 1);
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(event.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(event.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;

  // Touch Events
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  if (!dummyEventAttached) {
    document.addEventListener('touchstart', dummyEventListener);
    dummyEventAttached = true;
  }
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;

  // Get breakpoint for window width and update parameters
  const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopedSlides: null,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        evCache: []
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.g)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.filter(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index)[0]);
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? slides[activeIndex].swiperSlideSize : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === 'SWIPER-CONTAINER') {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.l)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      el.removeAttribute('style');
      wrapperEl.removeAttribute('style');
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      swiper.el.swiper = null;
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ elementParents),
/* harmony export */   b: () => (/* binding */ elementOffset),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ now),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ elementOuterSize),
/* harmony export */   g: () => (/* binding */ elementIndex),
/* harmony export */   h: () => (/* binding */ getTranslate),
/* harmony export */   i: () => (/* binding */ elementTransitionEnd),
/* harmony export */   j: () => (/* binding */ isObject),
/* harmony export */   k: () => (/* binding */ getSlideTransformEl),
/* harmony export */   l: () => (/* binding */ elementStyle),
/* harmony export */   m: () => (/* binding */ elementNextAll),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ elementPrevAll),
/* harmony export */   p: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   q: () => (/* binding */ extend),
/* harmony export */   r: () => (/* binding */ deleteProps),
/* harmony export */   s: () => (/* binding */ setCSSProperty)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  return [...element.children].filter(el => el.matches(selector));
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}




/***/ }),

/***/ "./node_modules/swiper/swiper.mjs":
/*!****************************************!*\
  !*** ./node_modules/swiper/swiper.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/**
 * Swiper 10.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: September 28, 2023
 */




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/effect-fade */ "./node_modules/swiper/modules/effect-fade.css");
/* harmony import */ var _js_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/header */ "./src/js/components/header.js");
/* harmony import */ var _js_components_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_components_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _js_components_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_components_footer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/form */ "./src/js/components/form.js");
/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_components_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_components_anim__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/components/anim */ "./src/js/components/anim.js");
/* harmony import */ var _js_components_anim__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_components_anim__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_pages_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _js_pages_home__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_pages_home__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _js_pages_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/pages/projects */ "./src/js/pages/projects.js");
/* harmony import */ var _js_pages_projects__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_pages_projects__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _js_pages_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/pages/detail */ "./src/js/pages/detail.js");
/* harmony import */ var _js_pages_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/pages/services */ "./src/js/pages/services.js");
/* harmony import */ var _js_pages_services__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_js_pages_services__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _js_pages_stands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/pages/stands */ "./src/js/pages/stands.js");
/* harmony import */ var _js_pages_stands__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_pages_stands__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_pages_about__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/pages/about */ "./src/js/pages/about.js");
/* harmony import */ var _js_pages_about__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_pages_about__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");














// import './js/utils/map';


const thumbs = document.querySelectorAll('.banner__thumbs-img');
const backSlide = document.querySelector('.banner__main-img--back');
const sliderBanner = document.querySelector('.banner__slider');
const sliderBannerBtn = document.querySelector('.banner__main-btn');
const swiper1 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.banner__thumbs', {
  slidesPerView: 'auto',
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_15__.EffectFade]
});
const swiper2 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](sliderBanner, {
  modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_15__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_15__.EffectFade, swiper_modules__WEBPACK_IMPORTED_MODULE_15__.Thumbs],
  slidesPerView: 'auto',
  spaceBetween: 100,
  speed: 1000,
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    el: swiper1
  },
  navigation: {
    nextEl: '.banner__main-btn'
  },
  on: {
    realIndexChange: function (swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const activeDataId = Number(activeSlide.dataset.swiperSlideIndex);
      console.log(activeDataId);
      //   thumbs.forEach((thumb) => {
      thumbs.forEach(thumb => {
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
        thumbs.forEach(item => {
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
    }
  },

  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: 70
    }
  }
});
const swiper3 = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.news__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    769: {
      enabled: false
    }
  }
});

// const projectsSlider = new Swiper('.our_projects__slider', {
//   slidesPerView: 1,
// });
})();

/******/ })()
;
//# sourceMappingURL=main.js.map