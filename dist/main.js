/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/***/ (() => {

$(document).ready(function () {
  $(".personal-data input").click(function () {
    // console.log(1)
    if ($(this).prop("checked")) {
      $(".submit-btn").removeAttr("disabled");
    } else {
      $(".submit-btn").attr("disabled", "disabled");
    }
  });
});

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
  $('.modal-back').on('click', () => {
    closeModal();
  });
  $('.modal-exit').on('click', () => {
    closeModal();
  });
  $('.form').on('submit', evt => {
    evt.preventDefault();
    $(this).find('input').val('');
    $(this).find('textarea').val('');
    if ($('.modal').hasClass('active')) {
      switchModalContent();
    } else {
      $('.modal').addClass('active');
      $('body').addClass('lock');
      switchModalContent();
    }
  });
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
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/checkbox-arrow.svg */ "./src/assets/images/checkbox-arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/burger-bg.svg */ "./src/assets/images/burger-bg.svg"), __webpack_require__.b);
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
    margin-bottom: 24rem;
  }
  .container {
    padding: 0 3rem;
    width: 100%;
  }
}
.title {
  font-family: "Akrobat";
  color: #242424;
  font-size: 8rem;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 10rem;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn svg {
  width: 100%;
  height: 100%;
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
  display: flex;
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

.description {
  color: #9d9d9d;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: normal;
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
}
.label-input__placeholder {
  margin-bottom: 0.8rem;
  color: #9d9d9d;
  font-size: 1.8rem;
  font-style: normal;
  line-height: normal;
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
  background: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) center/1.5rem no-repeat;
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_8___}) center/3rem no-repeat;
  }
  .custom-checkbox {
    width: 6rem;
    height: 6rem;
    border: 0.2rem solid #fe921f;
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
    background: url(${___CSS_LOADER_URL_REPLACEMENT_9___}) center/contain no-repeat;
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
.banner {
  margin-top: 2rem;
}
.banner_container {
  position: relative;
  display: flex;
}
.banner__scroll {
  position: absolute;
  top: 45rem;
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
  margin-right: 17.5rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: normal;
}
.banner__title-img {
  position: absolute;
  top: 9.6rem;
  left: -15rem;
}
.banner__main {
  position: relative;
  display: flex;
}
.banner__main-photo {
  position: relative;
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
  left: 52rem;
}
.banner__main-text--title {
  display: flex;
  gap: 2rem;
  position: absolute;
  top: 68%;
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
  top: 78%;
  right: 29.7rem;
  transform: translate(0, -50%);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.banner__aside {
  position: relative;
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
  margin-bottom: 4rem;
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
  z-index: -1;
  width: 100%;
  height: 100%;
}
.about-intro__img {
  position: absolute;
  z-index: -1;
}
.about-intro__img--1 {
  width: 18.2rem;
  height: 24.6rem;
  top: 0;
  left: 39.1rem;
}
.about-intro__img--2 {
  width: 32.5rem;
  height: 19.8rem;
  left: 50%;
  bottom: 10.8rem;
  transform: translateX(-50%);
}
.about-intro__img--3 {
  width: 22.6rem;
  height: 26.8rem;
  bottom: 0;
  left: 11.2rem;
}
.about-intro__img--4 {
  width: 35.6rem;
  height: 21.8rem;
  right: -20rem;
  top: 12.4rem;
}
.about-intro__img--5 {
  width: 32rem;
  height: 21.6rem;
  left: -18.1rem;
  top: 17.5rem;
  -webkit-clip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);
          clip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);
}
.about-intro__img--6 {
  width: 20.6rem;
  height: 29.8rem;
  bottom: 6.2rem;
  right: 5.5rem;
  -webkit-clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);
          clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);
}
.about-intro__img--7 {
  width: 35.2rem;
  height: 18.6rem;
  top: 4.8rem;
  right: 35.6rem;
  -webkit-clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);
          clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);
}

.about-business {
  margin-bottom: 20rem;
}
.about-business__inner {
  display: flex;
}
.about-business__content {
  display: flex;
  justify-content: space-between;
}
.about-business__item {
  width: 52rem;
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
}
.about-advantages__inner {
  display: flex;
}
.about-advantages__main {
  position: relative;
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
  left: -12.4rem;
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
}
.projects-item:hover img {
  transition: transform 0.5s linear;
  transform: scale(105%);
}
.projects-item--element {
  justify-content: center;
  align-items: center;
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
}`, "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./../../%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/ramos_expo/src/index.scss","webpack://./src/style/libs/_set.scss","webpack://./src/style/_style.scss","webpack://./src/style/components/_header.scss","webpack://./src/style/components/_footer.scss","webpack://./src/style/components/_modal.scss","webpack://./src/style/pages/_home.scss","webpack://./src/style/pages/_about.scss","webpack://./src/style/pages/_projects.scss","webpack://./src/style/pages/_contacts.scss","webpack://./src/index.scss"],"names":[],"mappings":"AAAA,SAAA;AACA;EACE,qBAAA;EACA,gBAAA;EACA,+DAAA;ACCF;ADCA;EACE,qBAAA;EACA,gBAAA;EACA,+DAAA;ACCF;ADCA;EACE,qBAAA;EACA,gBAAA;EACA,+DAAA;ACCF;ADCA;EACE,qBAAA;EACA,gBAAA;EACA,+DAAA;ACCF;ADEA,UAAA;AACA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;ACAF;ADEA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;ACAF;ADEA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;ACAF;ADEA;EACE,sBAAA;EACA,gBAAA;EACA,+DAAA;ACAF;ACzCA;;;EAIE,sBAAA;AD2CF;;ACxCA;EACE,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AD2CF;;ACxCA;EACE,kBAAA;EACA,mBAAA;EACA,qCAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,yBAAA;AD2CF;;ACxCA;;EAEE,qCAAA;EACA,oBAAA;EACA,SAAA;EACA,UAAA;EACA,6BAAA;EACA,YAAA;EACA,cAAA;AD2CF;;ACxCA;EACE,cAAA;AD2CF;;ACxCA;;EAEE,6BAAA;EAAA,qBAAA;AD2CF;;ACxCA;;;;EAIE,aAAA;EACA,eAAA;EACA,aAAA;AD2CF;;ACzCA;;;;EAIE,aAAA;AD4CF;;AC1CA;;;;EAIE,aAAA;AD6CF;;AC1CA;;;;;;EAME,aAAA;EACA,SAAA;EACA,UAAA;AD6CF;;AC1CA;EACE,aAAA;EACA,gBAAA;AD6CF;;AC1CA;EACE,WAAA;EACA,YAAA;EACA,cAAA;AD6CF;;AC1CA;EACE,YAAA;EACA,cAAA;EACA,aAAA;EACA,mBAAA;EACA,UAAA;EACA,6BAAA;AD6CF;;AC1CA;EACE,UAAA;EACA,SAAA;AD6CF;;AC1CA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;AD6CF;;AC1CA;EACE,WAAA;EACA,gBAAA;AD6CF;;AC1CA;;EAEE,wBAAA;EACA,SAAA;AD6CF;;AC1CA;EACE,0BAAA;AD6CF;;AC1CA;EACE,oBAAA;AD6CF;;AC1CA;EACE;IACE,cAAA;IACA,mBAAA;IACA,yBAAA;IACA,8BAAA;ED6CF;EC3CA;IACE,8BAAA;ED6CF;EC3CA;IACE,oBAAA;ED6CF;EC3CA;IACE,eAAA;IACA,WAAA;ED6CF;AACF;AEhMA;EACC,sBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;EACA,oBAAA;AFkMD;;AE/LA;EACC,kBAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;AFkMD;AEhMC;EACC,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;AFkMF;AEhMC;EACC,WAAA;EACA,YAAA;AFkMF;;AE9LA;EACC,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA,EAAA,aAAA;EAEA,yDACC;EAGD,sBAAA;EACA,oBAAA;EACA,4BAAA;EAEA,aAAA;EACA,mBAAA;EACA,WAAA;AF4LD;AE1LC;EACC,cAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,wBAAA;AF4LF;AE1LE;EACC,WAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EAEA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,UAAA;EAEA,oCAAA;EACA,gCAAA;AF0LH;AEtLC;EAEC,yDACC;EAED,yBAAA;EACA,WAAA;AFqLF;AEnLE;EACC,sBAAA;EACA,oCAAA;AFqLH;AEjLC;EACC,eAAA;EACA,yBAAA;EACA,cAAA;EACA,4BAAA;AFmLF;AEjLE;EACC,yBAAA;AFmLH;;AE9KA;EACC,eAAA;AFiLD;AEhLC;EACC,aAAA;EACA,8BAAA;AFkLF;;AE/KA;EACC,kBAAA;EACA,OAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;AFkLD;;AE/KA;EACC,cAAA;EACA,sBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AFkLD;;AEhLA;EACC,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;AFmLD;;AE/KC;EACC,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA,EAAA,aAAA;EACA,mBAAA;AFkLF;AE/KC;EACC,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AFiLF;AE9KC;EACC,aAAA;EACA,mBAAA;EACA,SAAA;AFgLF;AE7KC;EACC,aAAA;EACA,mBAAA;EACA,SAAA;AF+KF;AE7KE;EACC,cAAA;AF+KH;AE3KG;EACC,WAAA;AF6KJ;;AEvKA;EACC,eAAA;AF0KD;AExKC;EACC,qBAAA;EAEA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;AFyKF;;AErKA;EACC,WAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EAEA,4BAAA;EACA,oBAAA;AFuKD;AErKC;EACC,4BAAA;AFuKF;AEpKC;EACC,cAAA;AFsKF;AEvKC;EACC,cAAA;AFsKF;;AEnKA;EACC,WAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EAEA,4BAAA;EACA,2BAAA;AFqKD;AEnKC;EACC,4BAAA;AFqKF;AElKC;EACC,cAAA;AFoKF;AErKC;EACC,cAAA;AFoKF;;AEhKA;EACC,cAAA;EACA,iBAAA;EACA,mBAAA;AFmKD;;AE7JE;EACC,kCAAA;EAAA,0BAAA;EACA,cAAA;AFgKH;;AE1JC;EACC,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,kBAAA;AF6JF;AE3JE;EACC,2EAAA;AF6JH;;AExJA;EACC,WAAA;EACA,YAAA;EACA,cAAA;EACA,eAAA;EAEA,4BAAA;AF0JD;;AEvJA;EACC,oBAAA;EACA,gBAAA;AF0JD;;AEtJC;EACC,kBAAA;EACA,gBAAA;AFyJF;;AErJA;EACC;IACC,qBAAA;IACA,cAAA;IACA,iBAAA;IACA,gBAAA;IACA,cAAA;EFwJA;EEtJD;IACC,cAAA;IACA,eAAA;IACA,iBAAA;EFwJA;EEtJD;IACC,iBAAA;IACA,mBAAA,EAAA,aAAA;IAEA,oBAAA;IACA,oBAAA;IACA,4BAAA;IAEA,WAAA;EFsJA;EEpJA;IACC,aAAA;IACA,cAAA;EFsJD;EEpJC;IACC,WAAA;IACA,YAAA;EFsJF;EElJD;IACC,iBAAA;EFoJA;EElJD;IACC,iBAAA;EFoJA;EElJD;IACC,WAAA;EFoJA;EElJD;IACC,aAAA;IACA,OAAA;IACA,iBAAA;EFoJA;EEjJA;IACC,iBAAA;IACA,mBAAA;IACA,mBAAA;EFmJD;EEhJA;IACC,qBAAA;IACA,WAAA;EFkJD;EE/IA;IACC,SAAA;EFiJD;EE9IA;IACC,uBAAA;IACA,sBAAA;IACA,WAAA;EFgJD;EE9IC;IACC,WAAA;EFgJF;EEzIA;IACC,qBAAA;IACA,iBAAA;EF2ID;EEvID;IACC,iBAAA;IAEA,4BAAA;IACA,oBAAA;EFwIA;EEtIA;IACC,4BAAA;EFwID;EEpID;IACC,eAAA;IACA,iBAAA;IAEA,4BAAA;IACA,oBAAA;EFqIA;EEnIA;IACC,4BAAA;EFqID;EEjID;IACC,iBAAA;EFmIA;EE7HC;IACC,aAAA;EF+HF;EExHC;IACC,yEAAA;EF0HF;EErHD;IACC,WAAA;IACA,YAAA;IAEA,4BAAA;EFsHA;AACF;AG5gBA;EACC,eAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EAEA,WAAA;AH6gBD;AG3gBC;EACC,yBAAA;EACA,mCAAA;AH6gBF;AG1gBC;EACC,aAAA;EACA,iBAAA;AH4gBF;AGzgBG;EADD;IAEE,aAAA;EH4gBF;AACF;AGzgBE;EACC,aAAA;AH2gBH;AG1gBG;EAFD;IAGE,aAAA;EH6gBF;AACF;AGzgBC;EACC,aAAA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;AH2gBF;AGxgBC;EACC,YAAA;EACA,cAAA;AH0gBF;AGxgBE;EACC,WAAA;EACA,YAAA;EACA,sBAAA;KAAA,mBAAA;AH0gBH;AGtgBC;EACC,aAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;AHwgBF;;AGlgBC;EACC,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AHqgBF;AGngBE;EACC,+BAAA;AHqgBH;AGngBG;EAEC,+BAAA;EACA,cAAA;AHogBJ;;AG5fC;EACC,aAAA;EACA,mBAAA;EACA,WAAA;AH+fF;;AG3fA;EACC,kBAAA;EACA,WAAA;EACA,UAAA;EACA,aAAA;EACA,cAAA;EAEA,aAAA;EACA,sBAAA;EACA,yBAAA;EAEA,UAAA;EACA,kBAAA;EACA,4DACC;AH2fF;AGxfC;EACC,UAAA;EACA,mBAAA;EACA,+BAAA;AH0fF;AGvfC;EACC,WAAA;EACA,kBAAA;EACA,sCAAA;EAEA,yBAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AHwfF;AGtfC;EACC,kBAAA;AHwfF;AGrfG;EACC,+BAAA;EACA,cAAA;AHufJ;AGrfK;EACC,8BAAA;EACA,aAAA;AHufN;AGlfG;EACC,kCAAA;EACA,0BAAA;AHofJ;AGhfE;EACC,aAAA;EACA,mBAAA;EACA,WAAA;EACA,+BAAA;AHkfH;AGhfG;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kCAAA;AHkfJ;AGjfI;EACC,gBAAA;EACA,iBAAA;AHmfL;AGlfK;EACC,8BAAA;AHofN;AG/eG;EAEC,+BAAA;EACA,cAAA;AHgfJ;AG9eK;EACC,8BAAA;EACA,aAAA;AHgfN;;AGxeA;EACC,eAAA;AH2eD;AGzeC;EACC,kBAAA;EACA,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,kBAAA;AH2eF;AGteG;EACC,cAAA;AHweJ;AGpeE;EACC,cAAA;AHseH;AGpeG;EACC,cAAA;AHseJ;;AGheA;EACC;IACC,yBAAA;EHmeA;EGjeA;IACC,iBAAA;IACA,8BAAA;EHmeD;EGheA;IACC,OAAA;EHkeD;EG/dA;IACC,cAAA;IACA,cAAA;EHieD;EG9dA;IACC,cAAA;EHgeD;EG7dA;IACC,eAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,aAAA;IAEA,wCAAA;IACA,2BAAA;EH8dD;EG5dC;IACC,mCAAA;IACA,uBAAA;EH8dF;EG5dE;IACC,oCAAA;IACA,YAAA;EH8dH;EGvdA;IACC,WAAA;IAEA,aAAA;IACA,cAAA;EHwdD;EGrdD;IACC,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,sBAAA;IAEA,4EAAA;EHsdA;EGpdA;IACC,cAAA;IACA,aAAA;IACA,cAAA;IACA,sBAAA;IACA,oBAAA;EHsdD;EGjdA;IACC,kBAAA;IACA,aAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;IACA,oCAAA;EHmdD;EGhdA;IACC,kBAAA;IACA,WAAA;IACA,aAAA;EHkdD;EG/cA;IACC,aAAA;IACA,sBAAA;IACA,WAAA;IAEA,sBAAA;IACA,mCAAA;EHgdD;EG7cA;IACC,kBAAA;IACA,MAAA;IACA,OAAA;IACA,aAAA;IAEA,WAAA;IACA,YAAA;IAEA,UAAA;IACA,kFAAA;IACA,+BAAA;EH6cD;EG1cA;IACC,iBAAA;IACA,mCAAA;EH4cD;EGzcA;IACC,qBAAA;IACA,aAAA;IACA,sBAAA;IACA,WAAA;EH2cD;EGxcA;IACC,aAAA;IACA,mBAAA;IACA,WAAA;EH0cD;EGxcC;IACC,aAAA;IACA,cAAA;EH0cF;EGvcC;IACC,cAAA;IACA,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EHycF;EGrcA;IACC,aAAA;IACA,mBAAA;IACA,WAAA;EHucD;EGncC;IACC,WAAA;IACA,YAAA;EHqcF;EGjcA;IACC,aAAA;IACA,mBAAA;IACA,mBAAA;IACA,WAAA;EHmcD;EGhcA;IACC,aAAA;IACA,mBAAA;EHkcD;EG7bA;IACC,aAAA;IACA,cAAA;IAEA,aAAA;IACA,mBAAA;IACA,uBAAA;IAEA,kBAAA;IACA,mCAAA;EH6bD;EG3bC;IACC,UAAA;IACA,WAAA;EH6bF;EG1bC;IACC,yBAAA;EH4bF;EG1bE;IACC,UAAA;EH4bH;EGrbA;IACC,iBAAA;EHubD;EGlbC;IACC,cAAA;EHobF;EGhbA;IACC,cAAA;IACA,iBAAA;IACA,kBAAA;IACA,gBAAA;IACA,mBAAA;EHkbD;AACF;AI90BC;EACC,oBAAA;EACA,aAAA;EACA,qBAAA;EACA,mCAAA;EACA,YAAA;AJg1BF;AI70BC;EACC,eAAA;EACA,aAAA;EACA,8BAAA;AJ+0BF;;AI10BC;EACC,YAAA;EACA,cAAA;AJ60BF;AI10BC;EACC,aAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;AJ40BF;AIz0BC;EACC,WAAA;AJ20BF;;AIx0BA;EACC,aAAA;EACA,mBAAA;AJ20BD;AIx0BC;EACC,cAAA;EACA,WAAA;EACA,YAAA;AJ00BF;AIx0BE;EACC,WAAA;EACA,YAAA;AJ00BH;;AIp0BC;EACC,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AJu0BF;AIp0BC;EACC,SAAA;AJs0BF;;AIn0BA;EACC,aAAA;EACA,mBAAA;AJs0BD;AIp0BC;EACC,aAAA;EACA,mBAAA;EACA,WAAA;AJs0BF;AIp0BE;EACC,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AJs0BH;AIn0BE;EACC,aAAA;EACA,cAAA;AJq0BH;;AIh0BA;EACC;IACC,gBAAA;EJm0BA;EIj0BA;IACC,sBAAA;IACA,sBAAA;IACA,uBAAA;IACA,mCAAA;IACA,WAAA;EJm0BD;EIh0BA;IACC,iBAAA;EJk0BD;EI7zBA;IACC,cAAA;IACA,cAAA;EJ+zBD;EI5zBA;IACC,uBAAA;IACA,sBAAA;IACA,WAAA;IACA,OAAA;EJ8zBD;EI3zBA;IACC,WAAA;EJ6zBD;EIxzBA;IACC,WAAA;IACA,YAAA;EJ0zBD;EIrzBA;IACC,iBAAA;IACA,cAAA;EJuzBD;EIpzBA;IACC,WAAA;EJszBD;EIlzBA;IACC,aAAA;IACA,sBAAA;EJozBD;EIjzBA;IACC,WAAA;EJmzBD;EIjzBC;IACC,iBAAA;EJmzBF;EIhzBC;IACC,aAAA;IACA,cAAA;EJkzBF;AACF;AK/8BA;EACC,aAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;EAEA,WAAA;EACA,aAAA;ALg9BD;AK98BC;EACC,cAAA;ALg9BF;AK78BC;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EAEA,WAAA;EACA,YAAA;EACA,oCAAA;EACA,sCAAA;UAAA,8BAAA;AL88BF;AK58BC;EACC,kBAAA;EACA,QAAA;EACA,SAAA;EAEA,gCAAA;EAEA,4BAAA;EACA,mBAAA;EACA,cAAA;AL48BF;AK18BE;EACC,WAAA;EACA,WAAA;EACA,YAAA;EAEA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,4BAAA;EAEA,4BAAA;AL08BH;AKv8BC;EACC,kBAAA;EACA,WAAA;EACA,aAAA;EAEA,aAAA;EACA,cAAA;ALw8BF;AKt8BE;EACC,WAAA;EACA,YAAA;ALw8BH;AKr8BC;EACC,aAAA;EACA,kBAAA;ALu8BF;AKr8BE;EACC,cAAA;EACA,mBAAA;ALu8BH;;AKh8BC;EACC,cAAA;ALm8BF;AKj8BE;EACC,kBAAA;ALm8BH;AKj8BG;EACC,cAAA;EACA,cAAA;ALm8BJ;AK97BC;EACC,aAAA;EACA,sBAAA;EACA,WAAA;EAEA,cAAA;EAEA,qBAAA;AL87BF;AK17BE;EACC,qBAAA;AL47BH;AKx7BC;EACC,kBAAA;EACA,eAAA;EACA,SAAA;EAEA,0BAAA;ALy7BF;AKv7BE;EACC,iBAAA;ALy7BH;;AKp7BA;EAEE;IACC,4BAAA;IACA,qBAAA;IACA,YAAA;ELs7BD;EKp7BC;IACC,4BAAA;IACA,4BAAA;ELs7BF;EKn7BA;IACC,WAAA;IACA,aAAA;IAEA,WAAA;IACA,YAAA;ELo7BD;EK96BA;IACC,WAAA;ELg7BD;EK76BE;IACC,SAAA;IACA,WAAA;EL+6BH;EK16BA;IACC,SAAA;IACA,WAAA;IACA,qBAAA;EL46BD;EKx6BC;IACC,qBAAA;EL06BF;EKt6BA;IACC,gBAAA;ELw6BD;AACF;AM7kCA;EACC;IACC,mBAAA;EN+kCA;EM7kCD;IACC,qBAAA;EN+kCA;EM7kCD;IACC,qBAAA;EN+kCA;EM7kCD;IACC,qBAAA;EN+kCA;EM7kCD;IACC,mBAAA;EN+kCA;EM7kCD;IACC,mBAAA;EN+kCA;AACF;AM7kCA;EACC;IACC,mBAAA;EN+kCA;EM7kCD;IACC,mBAAA;EN+kCA;EM1kCD;IACC,qBAAA;EN4kCA;EM1kCD;IACC,qBAAA;EN4kCA;EM1kCD;IACC,qBAAA;EN4kCA;EMvkCD;IACC,qBAAA;ENykCA;EMvkCD;IACC,mBAAA;ENykCA;AACF;AMvkCA;EACC,gBAAA;ANykCD;AMxkCC;EACC,kBAAA;EACA,aAAA;AN0kCF;AMxkCC;EACC,kBAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;AN0kCF;AMzkCE;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AN2kCH;AMzkCE;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EAGA,mBAAA;EACA,wBAAA;EAEA,gEAAA;ANwkCH;AMtkCE;EACC,WAAA;EACA,YAAA;ANwkCH;AMtkCE;EACC,kBAAA;EAGA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,wBAAA;EACA,gEAAA;ANskCH;AMhkCC;EACC,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;ANkkCF;AMjkCE;EACC,kBAAA;EACA,WAAA;EACA,YAAA;ANmkCH;AMhkCC;EACC,kBAAA;EACA,aAAA;ANkkCF;AMjkCE;EACC,kBAAA;ANmkCH;AMjkCI;EACC,qBAAA;ANmkCL;AMjkCI;EACC,uBAAA;ANmkCL;AMlkCK;EACC,mBAAA;ANokCN;AMrjCE;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;ANujCH;AMtjCG;EACC,YAAA;ANwjCJ;AMrjCE;EACC,kBAAA;EACA,cAAA;EACA,eAAA;EACA,8EAAA;UAAA,sEAAA;EACA,gBAAA;ANujCH;AMtjCG;EACC,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EACA,mBAAA;EACA,sCAAA;ANwjCJ;AMrjCG;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EAEA,4BAAA;EACA,sCAAA;ANsjCJ;AMpjCI;EACC,WAAA;EACA,YAAA;ANsjCL;AMpiCE;EACC,iBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;ANsiCH;AMriCG;EACC,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;ANuiCJ;AMpiCE;EACC,kBAAA;EACA,YAAA;EACA,WAAA;ANsiCH;AMniCG;EACC,aAAA;EACA,SAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,6BAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EACA,kBAAA;EACA,gCAAA;EACA,wBAAA;ANqiCJ;AMniCI;EACC,cAAA;EACA,sBAAA;EACA,cAAA;ANqiCL;AMliCG;EACC,kBAAA;EACA,QAAA;EACA,cAAA;EACA,6BAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ANoiCJ;AMhiCC;EACC,kBAAA;EACA,iBAAA;ANkiCF;AMjiCE;EACC,YAAA;EACA,kBAAA;EACA,aAAA;EACA,cAAA;EACA,eAAA;ANmiCH;AMhiCC;EACC,gBAAA;EACA,aAAA;EACA,sBAAA;ANkiCF;AMjiCE;EACC,iBAAA;EACA,8CAAA;EACA,cAAA;EAAA,4BAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ANmiCH;;AM9hCC;EACC,aAAA;EACA,SAAA;ANiiCF;AM/hCC;EACC,kBAAA;EACA,OAAA;EACA,aAAA;EACA,8BAAA;ANiiCF;AMhiCE;EACC,kBAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ANkiCH;AMjiCG;EACC,kBAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ANmiCJ;AM/hCC;EACC,cAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;ANiiCF;AMhiCE;EACC,aAAA;EACA,WAAA;EACA,sBAAA;ANkiCH;AMjiCG;EACC,iBAAA;EACA,gBAAA;EACA,mBAAA;ANmiCJ;AM/hCC;EACC,aAAA;EACA,sBAAA;EACA,SAAA;EACA,cAAA;ANiiCF;AMhiCE;EACC,WAAA;EACA,eAAA;ANkiCH;AMjiCG;EACC,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;ANmiCJ;AMhiCE;EACC,aAAA;EACA,sBAAA;EACA,SAAA;ANkiCH;AMjiCG;EACC,cAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ANmiCJ;AMjiCG;EACC,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;ANmiCJ;;AM7hCC;EACC,aAAA;ANgiCF;AM9hCC;EACC,aAAA;EACA,sBAAA;EACA,SAAA;ANgiCF;AM/hCE;EACC,aAAA;ANiiCH;AMhiCG;EACC,qBAAA;ANkiCJ;AM9hCC;EACC,aAAA;EACA,8BAAA;ANgiCF;AM9hCC;EACC,cAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;ANgiCF;AM/hCE;EACC,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;ANiiCH;AM/hCE;EACC,cAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;ANiiCH;AM9hCC;EACC,cAAA;ANgiCF;AM9hCE;EACC,aAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;ANgiCH;AM/hCG;EACC,WAAA;EACA,YAAA;ANiiCJ;AM9hCE;EACC,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;ANgiCH;AM9hCE;EACC,iBAAA;EACA,gBAAA;EACA,mBAAA;ANgiCH;;AOn8CA;EACC,kBAAA;EACA,sBAAA;APs8CD;AOp8CC;EACC,kBAAA;EACA,eAAA;APs8CF;AOn8CC;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;APq8CF;AOl8CC;EACC,kBAAA;EACA,cAAA;EACA,mBAAA;APo8CF;AOj8CC;EACC,kBAAA;EACA,SAAA;EACA,SAAA;EAEA,0BAAA;EAEA,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;APi8CF;AO97CC;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EAEA,WAAA;EACA,YAAA;AP+7CF;AO57CC;EACC,kBAAA;EACA,WAAA;AP87CF;AO57CE;EACC,cAAA;EACA,eAAA;EAEA,MAAA;EACA,aAAA;AP67CH;AO37CE;EACC,cAAA;EACA,eAAA;EAEA,SAAA;EACA,eAAA;EACA,2BAAA;AP47CH;AO17CE;EACC,cAAA;EACA,eAAA;EAEA,SAAA;EACA,aAAA;AP27CH;AOz7CE;EACC,cAAA;EACA,eAAA;EAEA,aAAA;EACA,YAAA;AP07CH;AOx7CE;EACC,YAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EAEA,uEAAA;UAAA,+DAAA;APy7CH;AOv7CE;EACC,cAAA;EACA,eAAA;EAEA,cAAA;EACA,aAAA;EAEA,gFAAA;UAAA,wEAAA;APu7CH;AOr7CE;EACC,cAAA;EACA,eAAA;EAEA,WAAA;EACA,cAAA;EACA,uEAAA;UAAA,+DAAA;APs7CH;;AOl7CA;EACC,oBAAA;APq7CD;AOn7CC;EACC,aAAA;APq7CF;AOl7CC;EACC,aAAA;EACA,8BAAA;APo7CF;AOj7CC;EACC,YAAA;APm7CF;AOh7CC;EACC,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EAEA,mBAAA;EACA,mBAAA;APi7CF;AO/6CE;EACC,cAAA;EACA,gBAAA;APi7CH;;AO76CA;EACC,oBAAA;APg7CD;AO96CC;EACC,aAAA;APg7CF;AO76CC;EACC,kBAAA;AP+6CF;AO56CC;EACC,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,iBAAA;EACA,iDAAA;AP86CF;AO56CE;EACC,qBAAA;AP86CH;AO36CE;EACC,qBAAA;EACA,mBAAA;EACA,uBAAA;EACA,UAAA;AP66CH;AOz6CC;EACC,aAAA;EACA,mBAAA;EACA,YAAA;AP26CF;AOx6CC;EACC,YAAA;EACA,cAAA;AP06CF;AOv6CC;EACC,cAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;APy6CF;AOv6CE;EACC,cAAA;APy6CH;AOr6CC;EACC,kBAAA;EACA,YAAA;EACA,cAAA;APu6CF;;AOl6CC;EACC,aAAA;APq6CF;AOl6CC;EACC,aAAA;EACA,WAAA;APo6CF;AOj6CC;EACC,cAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;APm6CF;AOh6CC;EACC,UAAA;APk6CF;AO/5CC;EACC,cAAA;APi6CF;AO95CC;EACC,kBAAA;APg6CF;;AO55CA;EACC;IACC,kBAAA;IACA,qBAAA;EP+5CA;EO75CA;IACC,gBAAA;EP+5CD;EO55CA;IACC,kBAAA;IACA,cAAA;IACA,mBAAA;EP85CD;EO35CA;IACC,kBAAA;IACA,gBAAA;IACA,iBAAA;IACA,eAAA;EP65CD;EOz5CC;IACC,cAAA;IACA,eAAA;IAEA,WAAA;IACA,UAAA;IAAA,aAAA;IACA,QAAA;EP05CF;EOx5CC;IACC,cAAA;IACA,eAAA;IAEA,aAAA;IACA,SAAA;IACA,eAAA;EPy5CF;EOv5CC;IACC,cAAA;IACA,eAAA;IAEA,eAAA;IACA,aAAA;EPw5CF;EOt5CC;IACC,cAAA;IACA,eAAA;IAEA,eAAA;IACA,cAAA;IAEA,gFAAA;YAAA,wEAAA;EPs5CF;EOp5CC;IACC,cAAA;IACA,aAAA;IAEA,MAAA;IACA,WAAA;IAAA,cAAA;IACA,OAAA;IACA,uEAAA;YAAA,+DAAA;EPq5CF;EOj5CD;IACC,oBAAA;EPm5CA;EOj5CA;IACC,sBAAA;IACA,WAAA;EPm5CD;EOh5CA;IACC,sBAAA;IACA,WAAA;EPk5CD;EO/4CA;IACC,WAAA;EPi5CD;EO94CA;IACC,iBAAA;IACA,qBAAA;IACA,YAAA;IACA,aAAA;IAAA,mBAAA;EPg5CD;EO74CD;IACC,sBAAA;EP+4CA;EO74CA;IACC,sBAAA;IACA,WAAA;EP+4CD;EO54CA;IACC,2BAAA;IACA,iBAAA;IACA,iDAAA;EP84CD;EO54CC;IACC,qBAAA;IACA,WAAA;EP84CF;EO54CE;IACC,cAAA;EP84CH;EO34CC;IACC,yBAAA;IACA,WAAA;EP64CF;EO34CE;IACC,cAAA;EP64CH;EO14CC;IACC,2BAAA;IACA,WAAA;EP44CF;EO14CE;IACC,cAAA;EP44CH;EOz4CC;IACC,uBAAA;IACA,YAAA;EP24CF;EOz4CE;IACC,cAAA;EP24CH;EOx4CC;IACC,yBAAA;IACA,WAAA;EP04CF;EOz4CE;IACC,cAAA;EP24CH;EOx4CC;IACC,qBAAA;IACA,mBAAA;IACA,2BAAA;IACA,cAAA;EP04CF;EOt4CA;IACC,YAAA;IACA,eAAA;EPw4CD;EOr4CA;IACC,iBAAA;EPu4CD;EOp4CA;IACC,kBAAA;IACA,SAAA;IAAA,YAAA;IACA,UAAA;IAAA,aAAA;IACA,gBAAA;IACA,aAAA;EPs4CD;EOn4CD;IACC,oBAAA;EPq4CA;EOn4CA;IACC,sBAAA;EPq4CD;EOn4CA;IACC,gBAAA;IACA,UAAA;IACA,iBAAA;EPq4CD;EOl4CA;IACC,sBAAA;IACA,WAAA;EPo4CD;EOj4CA;IACC,WAAA;IACA,YAAA;IAAA,eAAA;IACA,sBAAA;IACA,WAAA;EPm4CD;EOh4CA;IACC,UAAA;EPk4CD;EO/3CA;IACC,OAAA;EPi4CD;EO93CA;IACC,aAAA;EPg4CD;AACF;AQrzDA;EACC,gBAAA;EACA,oBAAA;ARuzDD;AQrzDC;EACC,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,SAAA;EAEA,oBAAA;ARszDF;AQnzDC;EACC,qBAAA;OAAA,gBAAA;EACA,gBAAA;ARqzDF;;AQhzDC;EACC,cAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EAEA,cAAA;ARkzDF;;AQ9yDC;EACC,cAAA;EACA,sBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,yBAAA;EAEA,+BAAA;ARgzDF;AQ9yDE;EACC,+BAAA;EACA,cAAA;ARgzDH;AQ9yDI;EACC,8BAAA;EACA,aAAA;ARgzDL;AQ5yDG;EACC,kCAAA;EACA,0BAAA;AR8yDJ;AQ1yDE;EAEC,+BAAA;EACA,cAAA;AR2yDH;AQzyDI;EACC,8BAAA;EACA,aAAA;AR2yDL;AQtyDC;EACC,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,4BAAA;EAEA,UAAA;EACA,kBAAA;EACA,4DACC;ARsyDH;AQnyDE;EACC,UAAA;EACA,mBAAA;EACA,+BAAA;ARqyDH;AQlyDE;EACC,aAAA;EACA,mBAAA;ARoyDH;AQjyDE;EACC,iBAAA;ARmyDH;;AQ/xDA;EACC,kBAAA;ARkyDD;AQhyDC;EACC,aAAA;EACA,mBAAA;EACA,WAAA;ARkyDF;AQhyDE;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kCAAA;ARkyDH;AQhyDG;EACC,gBAAA;EACA,iBAAA;ARkyDJ;AQ7xDC;EACC,kBAAA;EACA,QAAA;EACA,WAAA;EACA,UAAA;EAEA,eAAA;EACA,cAAA;EACA,WAAA;AR8xDF;;AQ3xDA;EACC,aAAA;EACA,yCAAA;AR8xDD;;AQ5xDA;EACC,aAAA;EACA,sBAAA;EACA,8BAAA;AR+xDD;AQ5xDE;EACC,iCAAA;EACA,sBAAA;AR8xDH;AQ1xDC;EACC,uBAAA;EACA,mBAAA;AR4xDF;AQzxDC;EACC,gBAAA;EACA,aAAA;EACA,mBAAA;AR2xDF;AQ1xDE;EACC,iCAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AR4xDH;AQxxDC;EACC,SAAA;EACA,qBAAA;AR0xDF;AQvxDC;EACC,gBAAA;EACA,uBAAA;EACA,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,cAAA;EAEA,cAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA,EAAA,aAAA;ARwxDF;;AQrxDA;EACC,aAAA;EACA,mBAAA;EACA,8BAAA;EAEA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;ARuxDD;AQrxDC;EACC,cAAA;ARuxDF;AQpxDC;EACC,cAAA;ARsxDF;;AQlxDA;EACC;IACC,gBAAA;IACA,sBAAA;ERqxDA;EQnxDA;IACC,uBAAA;IACA,sBAAA;IACA,wBAAA;IACA,WAAA;IAEA,qBAAA;ERoxDD;EQjxDA;IACC,uBAAA;SAAA,kBAAA;IAAA,wBAAA;SAAA,mBAAA;IACA,eAAA;ERmxDD;EQ9wDA;IACC,iBAAA;IACA,WAAA;ERgxDD;EQ5wDA;IACC,iBAAA;ER8wDD;EQ5wDA;IACC,YAAA;IACA,gCAAA;ER8wDD;EQ5wDC;IACC,iBAAA;ER8wDF;EQ1wDD;IACC,gBAAA;ER4wDA;EQ1wDA;IACC,WAAA;ER4wDD;EQzwDE;IACC,aAAA;IACA,cAAA;ER2wDH;EQtwDA;IACC,eAAA;IACA,SAAA;IAAA,YAAA;IACA,SAAA;IACA,UAAA;IAEA,sBAAA;IACA,WAAA;IACA,YAAA;IAAA,eAAA;IACA,WAAA;ERuwDD;EQpwDD;IACC,2BAAA;ERswDA;EQlwDA;IACC,eAAA;IACA,mBAAA;ERowDD;EQjwDA;IACC,SAAA;IACA,qBAAA;ERmwDD;EQhwDA;IACC,YAAA;IAAA,eAAA;IACA,iBAAA;IACA,mBAAA,EAAA,aAAA;ERkwDD;EQ/vDD;IACC,iBAAA;ERiwDA;AACF;ASriEA;EACC,gBAAA;EACA,oBAAA;ATuiED;ASriEC;EACC,kBAAA;ATuiEF;ASpiEC;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;ATsiEF;ASniEC;EACC,aAAA;EACA,sBAAA;EACA,UAAA;ATqiEF;ASliEC;EACC,eAAA;AToiEF;;ASjiEA;EACC,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,kBAAA;AToiED;ASliEC;EACC,yBAAA;AToiEF;ASniEE;EACC,iBAAA;EACA,qBAAA;ATqiEH;ASliEE;EACC,YAAA;AToiEH;ASjiEE;EACC,iBAAA;ATmiEH;AS/hEC;EACC,cAAA;EAEA,cAAA;EACA,sBAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;ATgiEF;AS9hEC;EACC,mBAAA;ATgiEF;AS9hEC;EACC,mBAAA;ATgiEF;AS/hEE;EACC,kCAAA;EAAA,0BAAA;ATiiEH;AS7hEC;EACC,qBAAA;AT+hEF;AS9hEE;EACC,kCAAA;EAAA,0BAAA;ATgiEH;AS5hEC;EACC,eAAA;EACA,eAAA;EAEA,kBAAA;EACA,aAAA;EACA,MAAA;AT6hEF;AS3hEE;EACC,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;AT6hEH;;ASzhEA;EACC,oBAAA;AT4hED;AS1hEC;EACC,aAAA;EACA,8BAAA;AT4hEF;ASzhEC;EACC,cAAA;AT2hEF;ASxhEC;EACC,cAAA;AT0hEF;ASvhEC;EACC,cAAA;EACA,iBAAA;ATyhEF;;ASrhEA;EACC;IACC,gBAAA;IACA,oBAAA;ETwhEA;ESthEA;IACC,gBAAA;ETwhED;ESrhEA;IACC,WAAA;ETuhED;ESphEA;IACC,YAAA;IAAA,eAAA;IACA,SAAA;ETshED;ESnhED;IACC,sBAAA;IACA,uBAAA;ETqhEA;ESnhEA;IACC,2BAAA;ETqhED;ESphEC;IACC,gBAAA;IACA,uBAAA;ETshEF;ESnhEC;IACC,UAAA;IAAA,aAAA;ETqhEF;ESlhEC;IACC,cAAA;ETohEF;EShhEA;IACC,WAAA;IACA,iBAAA;IACA,QAAA;ETkhED;EShhEA;IACC,qBAAA;ETkhED;EShhEA;IACC,qBAAA;ETkhED;EShhEA;IACC,qBAAA;ETkhED;ES5gEA;IACC,WAAA;IACA,aAAA;IAEA,gBAAA;IACA,QAAA;ET6gED;ES1gED;IACC,oBAAA;ET4gEA;ES1gEA;IACC,sBAAA;IACA,WAAA;ET4gED;ESzgEA;IACC,qBAAA;ET2gED;ESxgEA;IACC,WAAA;ET0gED;ESvgEA;IACC,cAAA;ETygED;EStgEA;IACC,WAAA;IACA,aAAA;ETwgED;AACF;AUnsEA;EACC,aAAA;AVqsED;;AUnsEA;EACC;IACC,aAAA;EVssEA;EUpsED;IACC,cAAA;EVssEA;AACF","sourcesContent":["/*Gilroy*/\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 300;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Light.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 400;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 500;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Medium.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Gilroy';\r\n  font-weight: 700;\r\n  src: url('../assets/fonts/gilroy/Gilroy-Bold.ttf') format('truetype');\r\n}\r\n\r\n/*Akrobat*/\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 300;\r\n  src: url('../assets/fonts/akrobat/Akrobat-Light.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 400;\r\n  src: url('../assets/fonts/akrobat/Akrobat-Regular.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 700;\r\n  src: url('../assets/fonts/akrobat/Akrobat-Bold.ttf') format('truetype');\r\n}\r\n@font-face {\r\n  font-family: 'Akrobat';\r\n  font-weight: 800;\r\n  src: url('../assets/fonts/akrobat/Akrobat-ExtraBold.ttf') format('truetype');\r\n}\r\n","/*Gilroy*/\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 300;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Light.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 400;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 500;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Medium.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Gilroy\";\n  font-weight: 700;\n  src: url(\"../assets/fonts/gilroy/Gilroy-Bold.ttf\") format(\"truetype\");\n}\n/*Akrobat*/\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 300;\n  src: url(\"../assets/fonts/akrobat/Akrobat-Light.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 400;\n  src: url(\"../assets/fonts/akrobat/Akrobat-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 700;\n  src: url(\"../assets/fonts/akrobat/Akrobat-Bold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: \"Akrobat\";\n  font-weight: 800;\n  src: url(\"../assets/fonts/akrobat/Akrobat-ExtraBold.ttf\") format(\"truetype\");\n}\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: \"Gilroy\";\n  font-size: 0.5208335vw;\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-style: normal;\n  font-weight: normal;\n  -webkit-animation: bugfix infinite 1s;\n  line-height: 1.2;\n  margin: 0;\n  padding: 0;\n  color: #242424;\n  background-color: #efefef;\n}\n\ninput,\ntextarea {\n  -webkit-animation: bugfix infinite 1s;\n  line-height: inherit;\n  margin: 0;\n  padding: 0;\n  background-color: transparent;\n  border: none;\n  color: inherit;\n}\n\na {\n  color: unset;\n}\n\na,\na:hover {\n  text-decoration: none;\n}\n\nbutton,\ninput,\na,\ntextarea {\n  outline: none;\n  cursor: pointer;\n  font: inherit;\n}\n\nbutton:focus,\ninput:focus,\na:focus,\ntextarea:focus {\n  outline: none;\n}\n\nbutton:active,\ninput:active,\na:active,\ntextarea:active {\n  outline: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font: inherit;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nimg {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\nbutton {\n  border: none;\n  color: inherit;\n  font: inherit;\n  text-align: inherit;\n  padding: 0;\n  background-color: transparent;\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nul li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.container {\n  width: 100%;\n  padding: 0 15rem;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\nsection {\n  margin-bottom: 18rem;\n}\n\n@media (max-width: 48em) {\n  html {\n    font-size: 5px;\n    font-size: 1.5625vw;\n    font-size: 1.3333333333vw;\n    -webkit-text-size-adjust: none;\n  }\n  body {\n    -webkit-text-size-adjust: none;\n  }\n  section {\n    margin-bottom: 24rem;\n  }\n  .container {\n    padding: 0 3rem;\n    width: 100%;\n  }\n}\n.title {\n  font-family: \"Akrobat\";\n  color: #242424;\n  font-size: 8rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 10rem;\n}\n\n.btn {\n  position: relative;\n  display: flex;\n  width: 16.6rem;\n  height: 16.6rem;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.btn--text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.btn svg {\n  width: 100%;\n  height: 100%;\n}\n\n.long-btn {\n  color: #e84b0f;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2.4rem; /* 133.333% */\n  transition: background 0.2s ease-out, color 0.2s ease-out;\n  padding: 1.4rem 2.4rem;\n  border-radius: 10rem;\n  border: 0.1rem solid #fe921f;\n  display: flex;\n  align-items: center;\n  gap: 2.4rem;\n}\n.long-btn span {\n  display: block;\n  position: relative;\n  width: 2.4rem;\n  height: 2.4rem;\n  transform: rotate(45deg);\n}\n.long-btn span::after {\n  content: \"\";\n  width: 1rem;\n  height: 1rem;\n  background-color: #e84b0f;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  transition: background 0.2s ease-out;\n  transform: translate(-50%, -50%);\n}\n.long-btn:hover, .long-btn:focus-visible {\n  transition: background 0.2s ease-out, color 0.2s ease-out;\n  background-color: #e84b0f;\n  color: #fff;\n}\n.long-btn:hover span::after, .long-btn:focus-visible span::after {\n  background-color: #fff;\n  transition: background 0.2s ease-out;\n}\n.long-btn:disabled {\n  cursor: default;\n  background-color: #e6e6e6;\n  color: #bebebe;\n  border: 0.1rem solid #bebebe;\n}\n.long-btn:disabled span::after {\n  background-color: #bebebe;\n}\n\n.content {\n  width: 120.6rem;\n}\n.content_container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.section_name {\n  margin-top: 3.6rem;\n  flex: 1;\n  color: #e7284a;\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n.subtitle {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 3.4rem;\n  font-weight: 700;\n  line-height: normal;\n}\n\n.description {\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: normal;\n}\n\n.form__title {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2.4rem; /* 133.333% */\n  margin-bottom: 5rem;\n}\n.form__content {\n  margin-bottom: 5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.form__personal-data {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.form-item {\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n}\n.form-item__label {\n  width: 38.2rem;\n}\n.form-item--width--100 .form-item__label {\n  width: 100%;\n}\n\n.label-input {\n  cursor: pointer;\n}\n.label-input__placeholder {\n  margin-bottom: 0.8rem;\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n}\n\n.input {\n  width: 100%;\n  color: #242424;\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n  border: 0.1rem solid #9d9d9d;\n  padding: 1.4rem 2rem;\n}\n.input:focus-visible {\n  border: 0.1rem solid #242424;\n}\n.input::placeholder {\n  color: #9d9d9d;\n}\n\n.textarea {\n  width: 100%;\n  resize: none;\n  height: 5rem;\n  color: #242424;\n  font-size: 1.8rem;\n  font-style: normal;\n  line-height: normal;\n  border: 0.1rem solid #9d9d9d;\n  padding: 1.4rem 2rem 0 2rem;\n}\n.textarea:focus-visible {\n  border: 0.1rem solid #242424;\n}\n.textarea::placeholder {\n  color: #9d9d9d;\n}\n\n.label-text {\n  color: #1a1a1a;\n  font-size: 1.8rem;\n  line-height: normal;\n}\n\n.personal-data__text a {\n  text-decoration: underline;\n  color: #fe921f;\n}\n\n.label-checkbox input {\n  appearance: none;\n  position: absolute;\n}\n.label-checkbox input:checked + .custom-checkbox {\n  background: url(../assets/images/checkbox-arrow.svg) center/1.5rem no-repeat;\n}\n\n.custom-checkbox {\n  width: 3rem;\n  height: 3rem;\n  display: block;\n  cursor: pointer;\n  border: 0.1rem solid #fe921f;\n}\n\nmain {\n  padding-top: 13.3rem;\n  overflow: hidden;\n}\n\nbody.lock {\n  touch-action: none;\n  overflow: hidden;\n}\n\n@media (max-width: 48em) {\n  .title {\n    margin-bottom: 6.4rem;\n    color: #242424;\n    font-size: 5.6rem;\n    font-weight: 800;\n    line-height: 1;\n  }\n  .btn {\n    width: 24.4rem;\n    height: 24.4rem;\n    font-size: 2.8rem;\n  }\n  .long-btn {\n    font-size: 3.2rem;\n    line-height: normal; /* 133.333% */\n    padding: 2rem 4.8rem;\n    border-radius: 10rem;\n    border: 0.2rem solid #fe921f;\n    gap: 4.8rem;\n  }\n  .long-btn span {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .long-btn span::after {\n    width: 2rem;\n    height: 2rem;\n  }\n  .subtitle {\n    font-size: 4.8rem;\n  }\n  .description {\n    font-size: 3.2rem;\n  }\n  .content {\n    width: 100%;\n  }\n  .section_name {\n    margin-top: 0;\n    flex: 1;\n    font-size: 2.8rem;\n  }\n  .form__title {\n    font-size: 3.2rem;\n    margin-bottom: 4rem;\n    line-height: normal;\n  }\n  .form__content {\n    margin-bottom: 6.4rem;\n    gap: 2.4rem;\n  }\n  .form__personal-data {\n    gap: 2rem;\n  }\n  .form-item {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .form-item__label {\n    width: 100%;\n  }\n  .label-input__placeholder {\n    margin-bottom: 0.8rem;\n    font-size: 3.2rem;\n  }\n  .input {\n    font-size: 3.2rem;\n    border: 0.2rem solid #9d9d9d;\n    padding: 2.4rem 4rem;\n  }\n  .input:focus-visible {\n    border: 0.2rem solid #242424;\n  }\n  .textarea {\n    height: 22.6rem;\n    font-size: 3.2rem;\n    border: 0.2rem solid #9d9d9d;\n    padding: 2.4rem 4rem;\n  }\n  .textarea:focus-visible {\n    border: 0.2rem solid #242424;\n  }\n  .label-text {\n    font-size: 3.2rem;\n  }\n  .personal-data__text a {\n    display: flex;\n  }\n  .label-checkbox input:checked + .custom-checkbox {\n    background: url(../assets/images/checkbox-arrow.svg) center/3rem no-repeat;\n  }\n  .custom-checkbox {\n    width: 6rem;\n    height: 6rem;\n    border: 0.2rem solid #fe921f;\n  }\n}\n.header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  width: 100%;\n}\n.header.scroll {\n  background-color: #efefef;\n  border-bottom: 0.1rem solid #c7c7c7;\n}\n.header__inner {\n  display: flex;\n  padding: 3.1rem 0;\n}\n@media (max-width: 48em) {\n  .header__inner.desktop {\n    display: none;\n  }\n}\n.header__inner.mobile {\n  display: none;\n}\n@media (max-width: 48em) {\n  .header__inner.mobile {\n    display: flex;\n  }\n}\n.header__left {\n  display: flex;\n  align-items: center;\n  flex: 1 1 auto;\n  gap: 3.2rem;\n}\n.header__logo {\n  width: 15rem;\n  height: 7.1rem;\n}\n.header__logo img {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n}\n.header__right {\n  display: flex;\n  align-items: center;\n  gap: 1.6rem;\n  margin-left: 20.3rem;\n}\n\n.nav__link {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.nav__link a {\n  transition: color 0.2s ease-out;\n}\n.nav__link a:hover, .nav__link a:focus-visible {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n\n.header-right__nav {\n  display: flex;\n  align-items: center;\n  gap: 3.2rem;\n}\n\n.link-menu {\n  position: absolute;\n  top: 2.1rem;\n  left: -50%;\n  width: 6.4rem;\n  height: 9.6rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s linear, visibility 0.1s linear 0.2s;\n}\n.link-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.link-menu__inner {\n  width: 100%;\n  min-height: 8.4rem;\n  box-shadow: inset 0 0 0 0.1rem #242424;\n  background-color: #efefef;\n  padding: 1.6rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n}\n.link-menu-btn {\n  position: relative;\n}\n.link-menu-btn.show button {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.link-menu-btn.show button svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n.link-menu-btn.show span {\n  transition: transform 0.2s ease-in;\n  transform: rotate(-180deg);\n}\n.link-menu-btn button {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  transition: color 0.2s ease-out;\n}\n.link-menu-btn button span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease-in;\n}\n.link-menu-btn button span svg {\n  width: 1.2707rem;\n  height: 0.7061rem;\n}\n.link-menu-btn button span svg path {\n  transition: fill 0.2s ease-out;\n}\n.link-menu-btn button:hover, .link-menu-btn button:focus-visible {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.link-menu-btn button:hover svg path, .link-menu-btn button:focus-visible svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n\n.lang-radio {\n  cursor: pointer;\n}\n.lang-radio input {\n  visibility: hidden;\n  appearance: none;\n  position: absolute;\n}\n.lang-radio--desktop.active p {\n  color: #fe921f;\n}\n.lang-radio--desktop p {\n  color: #242424;\n}\n.lang-radio--desktop p:hover {\n  color: #fe921f;\n}\n\n@media (max-width: 48em) {\n  .header {\n    background-color: #efefef;\n  }\n  .header__inner {\n    padding: 2.4rem 0;\n    justify-content: space-between;\n  }\n  .header__left {\n    flex: 0;\n  }\n  .header__logo {\n    width: 18.8rem;\n    height: 8.8rem;\n  }\n  .header__right {\n    margin-left: 0;\n  }\n  .header__burger-menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    transition: transform 0.5s ease-out 0.2s;\n    transform: translate(-100%);\n  }\n  .header__burger-menu.active {\n    transition: transform 0.5s ease-out;\n    transform: translate(0);\n  }\n  .header__burger-menu.active .burger-menu__overlay {\n    transition: opacity 0.3s linear 0.4s;\n    opacity: 0.4;\n  }\n  .header-left__burger {\n    gap: 0.7rem;\n    width: 8.8rem;\n    height: 8.8rem;\n  }\n  .burger-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background: url(../../assets/images/burger-bg.svg) center/contain no-repeat;\n  }\n  .burger-btn span {\n    display: block;\n    width: 3.9rem;\n    height: 0.3rem;\n    background-color: #fff;\n    border-radius: 10rem;\n  }\n  .burger-menu__inner {\n    position: relative;\n    z-index: 1002;\n    height: 100%;\n    width: 59rem;\n    background: #efefef;\n    padding: 6.4rem 4.8rem 6.4rem 3.2rem;\n  }\n  .burger-menu__close {\n    position: absolute;\n    top: 4.8rem;\n    right: 4.8rem;\n  }\n  .burger-menu__nav {\n    display: flex;\n    flex-direction: column;\n    gap: 3.2rem;\n    padding-bottom: 5.6rem;\n    border-bottom: 0.2rem solid #9d9d9d;\n  }\n  .burger-menu__overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1001;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    background: linear-gradient(335deg, #d61607 4.71%, #f87717 50.89%, #fece24 83.73%);\n    transition: opacity 0.2s linear;\n  }\n  .burger-menu__info {\n    padding: 5.6rem 0;\n    border-bottom: 0.2rem solid #9d9d9d;\n  }\n  .burger-menu__info-content {\n    margin-bottom: 5.6rem;\n    display: flex;\n    flex-direction: column;\n    gap: 3.2rem;\n  }\n  .burger-menu__info-item {\n    display: flex;\n    align-items: center;\n    gap: 2.4rem;\n  }\n  .burger-menu__info-item svg {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n  .burger-menu__info-item span {\n    color: #242424;\n    font-size: 3.6rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n  .burger-menu__info-social {\n    display: flex;\n    align-items: center;\n    gap: 3.2rem;\n  }\n  .burger-menu__social-item svg {\n    width: 6rem;\n    height: 6rem;\n  }\n  .burger-menu__lang {\n    display: flex;\n    align-items: center;\n    padding-top: 5.6rem;\n    gap: 3.2rem;\n  }\n  .burger-menu__lang-item {\n    display: flex;\n    align-items: center;\n  }\n  .header-right__call {\n    width: 8.8rem;\n    height: 8.8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    box-shadow: inset 0 0 0 1px #fe921f;\n  }\n  .header-right__call svg {\n    width: 50%;\n    height: 50%;\n  }\n  .header-right__call:hover {\n    background-color: #e84b0f;\n  }\n  .header-right__call:hover svg path {\n    fill: #fff;\n  }\n  .nav__link {\n    font-size: 3.2rem;\n  }\n  .lang-radio.active p {\n    color: #242424;\n  }\n  .lang-radio p {\n    color: #9d9d9d;\n    font-size: 3.2rem;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n  }\n}\n.footer__top {\n  padding-bottom: 5rem;\n  display: flex;\n  align-items: flex-end;\n  border-bottom: 0.1rem solid #9d9d9d;\n  gap: 12.6rem;\n}\n.footer__bottom {\n  padding: 5rem 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.footer-top__logo {\n  width: 15rem;\n  height: 7.1rem;\n}\n.footer-top__nav {\n  display: flex;\n  align-items: center;\n  gap: 3.6rem;\n  flex: 1 1 auto;\n}\n.footer-top__social {\n  gap: 1.5rem;\n}\n\n.social {\n  display: flex;\n  align-items: center;\n}\n.social__item {\n  display: block;\n  width: 3rem;\n  height: 3rem;\n}\n.social__item svg {\n  width: 100%;\n  height: 100%;\n}\n\n.footer-bottom__copyright {\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.footer-bottom__info {\n  gap: 7rem;\n}\n\n.info {\n  display: flex;\n  align-items: center;\n}\n.info__item {\n  display: flex;\n  align-items: center;\n  gap: 1.2rem;\n}\n.info__item span {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n}\n.info__item svg {\n  width: 2.4rem;\n  height: 2.4rem;\n}\n\n@media (max-width: 48em) {\n  .footer {\n    overflow: hidden;\n  }\n  .footer__top {\n    padding-bottom: 5.6rem;\n    flex-direction: column;\n    align-items: flex-start;\n    border-bottom: 0.2rem solid #9d9d9d;\n    gap: 5.6rem;\n  }\n  .footer__bottom {\n    padding: 5.6rem 0;\n  }\n  .footer-top__logo {\n    width: 18.8rem;\n    height: 8.8rem;\n  }\n  .footer-top__nav {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 3.2rem;\n    flex: 0;\n  }\n  .footer-top__social {\n    gap: 3.2rem;\n  }\n  .social__item {\n    width: 6rem;\n    height: 6rem;\n  }\n  .footer-bottom__copyright {\n    font-size: 3.2rem;\n    width: 53.6rem;\n  }\n  .footer-bottom__info {\n    gap: 3.2rem;\n  }\n  .info.mobile {\n    display: flex;\n    flex-direction: column;\n  }\n  .info__item {\n    gap: 2.4rem;\n  }\n  .info__item span {\n    font-size: 3.6rem;\n  }\n  .info__item svg {\n    width: 4.8rem;\n    height: 4.8rem;\n  }\n}\n.modal {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1010;\n  width: 100%;\n  height: 100vh;\n}\n.modal.active {\n  display: block;\n}\n.modal-back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(239, 239, 239, 0.1);\n  backdrop-filter: blur(1.75rem);\n}\n.modal-wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 0.1rem solid #242424;\n  background: #efefef;\n  padding: 10rem;\n}\n.modal-wrapper::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  border: 0.1rem solid #242424;\n  transform: rotate(-3.741deg);\n}\n.modal-exit {\n  position: absolute;\n  top: 2.4rem;\n  right: 2.4rem;\n  width: 3.2rem;\n  height: 3.2rem;\n}\n.modal-exit svg {\n  width: 100%;\n  height: 100%;\n}\n.modal-content {\n  display: none;\n  visibility: hidden;\n}\n.modal-content.active {\n  display: block;\n  visibility: visible;\n}\n\n.application-modal__content {\n  width: 38.2rem;\n}\n.application-modal__content.modal-content--second {\n  text-align: center;\n}\n.application-modal__content.modal-content--second .application-modal__header {\n  margin: 0 auto;\n  width: 31.3rem;\n}\n.application-modal__header {\n  display: flex;\n  flex-direction: column;\n  gap: 3.2rem;\n  width: 28.7rem;\n  margin-bottom: 3.2rem;\n}\n.application-modal__form-item {\n  margin-bottom: 3.2rem;\n}\n.application-modal__btn {\n  position: absolute;\n  bottom: -8.3rem;\n  left: 50%;\n  transform: translate(-50%);\n}\n.application-modal__btn .btn--text {\n  text-wrap: nowrap;\n}\n\n@media (max-width: 48em) {\n  .modal-wrapper {\n    border: 0.2rem solid #242424;\n    padding: 12rem 4.8rem;\n    width: 66rem;\n  }\n  .modal-wrapper::after {\n    border: 0.2rem solid #242424;\n    transform: rotate(-1.914deg);\n  }\n  .modal-exit {\n    top: 3.2rem;\n    right: 3.2rem;\n    width: 4rem;\n    height: 4rem;\n  }\n  .application-modal__content {\n    width: 100%;\n  }\n  .application-modal__content.modal-content--second .application-modal__header {\n    margin: 0;\n    width: 100%;\n  }\n  .application-modal__header {\n    gap: 4rem;\n    width: 100%;\n    margin-bottom: 4.8rem;\n  }\n  .application-modal__form-item {\n    margin-bottom: 4.8rem;\n  }\n  .application-modal__btn {\n    bottom: -13.8rem;\n  }\n}\n@keyframes animScroll1 {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1.2);\n  }\n  45% {\n    transform: scale(1.2);\n  }\n  60% {\n    transform: scale(1.6);\n  }\n  75% {\n    transform: scale(2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes animScroll2 {\n  0% {\n    transform: scale(1);\n  }\n  25% {\n    transform: scale(1);\n  }\n  35% {\n    transform: scale(1.3);\n  }\n  50% {\n    transform: scale(1.4);\n  }\n  75% {\n    transform: scale(1.5);\n  }\n  80% {\n    transform: scale(1.4);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.banner {\n  margin-top: 2rem;\n}\n.banner_container {\n  position: relative;\n  display: flex;\n}\n.banner__scroll {\n  position: absolute;\n  top: 45rem;\n  left: 2.5rem;\n  width: 12rem;\n  height: 12rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.banner__scroll-text {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.banner__scroll-anim_1 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(1);\n  transform-origin: center;\n  animation: animScroll1 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\n}\n.banner__scroll img {\n  width: 100%;\n  height: 100%;\n}\n.banner__scroll-anim_2 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transform: scale(1);\n  transform-origin: center;\n  animation: animScroll2 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\n}\n.banner__title {\n  position: relative;\n  margin-right: 17.5rem;\n  font-size: 4rem;\n  font-weight: 700;\n  line-height: normal;\n}\n.banner__title-img {\n  position: absolute;\n  top: 9.6rem;\n  left: -15rem;\n}\n.banner__main {\n  position: relative;\n  display: flex;\n}\n.banner__main-photo {\n  position: relative;\n}\n.banner__main-photo:hover .banner__main-img img {\n  transform: scale(1.2);\n}\n.banner__main-photo:hover .banner__main-img--back {\n  transform: rotate(0deg);\n}\n.banner__main-photo:hover .banner__main-img--back img {\n  transform: scale(1);\n}\n.banner__main-border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.banner__main-border img {\n  height: 100%;\n}\n.banner__main-img {\n  position: relative;\n  width: 51.9rem;\n  height: 75.2rem;\n  clip-path: polygon(0 0, 74.9% 0, 100% 19%, 100% 100%, 25% 100%, 0 85%);\n  overflow: hidden;\n}\n.banner__main-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transform: scale(1);\n  transition: transform 0.4s ease-in-out;\n}\n.banner__main-img--back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform: rotate(20.921deg);\n  transition: transform 0.4s ease-in-out;\n}\n.banner__main-img--back img {\n  width: 100%;\n  height: 100%;\n}\n.banner__main-thumb {\n  margin-left: 8rem;\n  align-self: end;\n  width: 22.2rem;\n  height: 25.4rem;\n}\n.banner__main-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.banner__main-btn {\n  position: absolute;\n  top: 17.1rem;\n  left: 52rem;\n}\n.banner__main-text--title {\n  display: flex;\n  gap: 2rem;\n  position: absolute;\n  top: 68%;\n  left: 15rem;\n  transform: translate(0, -50%);\n  font-family: \"Akrobat\";\n  font-size: 15rem;\n  font-weight: 800;\n  line-height: normal;\n  text-transform: uppercase;\n  color: transparent;\n  -webkit-text-stroke: 2px #242424;\n  text-stroke: 2px #242424;\n}\n.banner__main-text--title b {\n  color: #242424;\n  -webkit-text-stroke: 0;\n  text-stroke: 0;\n}\n.banner__main-text--subtitle {\n  position: absolute;\n  top: 78%;\n  right: 29.7rem;\n  transform: translate(0, -50%);\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.banner__aside {\n  position: relative;\n  margin-left: auto;\n}\n.banner__aside-img {\n  top: 30.6rem;\n  position: absolute;\n  right: -15rem;\n  width: 21.2rem;\n  height: 22.8rem;\n}\n.banner__links {\n  margin-top: 7rem;\n  display: flex;\n  flex-direction: column;\n}\n.banner__links-item {\n  padding: 0.8rem 0;\n  border-bottom: 1px solid rgba(36, 36, 36, 0.4);\n  color: var(--Black, #242424);\n  font-size: 1.6rem;\n  font-weight: 500;\n  line-height: normal;\n  text-transform: uppercase;\n}\n\n.about__content {\n  display: flex;\n  gap: 8rem;\n}\n.about__list {\n  position: relative;\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n}\n.about__list-mark {\n  position: absolute;\n  top: -7.6rem;\n  left: -8rem;\n  width: 16.6rem;\n  height: 16.6rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about__list-mark--text {\n  position: absolute;\n  color: #fff;\n  font-size: 1.6rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about__info {\n  width: 60.7rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.about__info-text {\n  display: flex;\n  gap: 2.4rem;\n  flex-direction: column;\n}\n.about__info-text--description {\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n}\n.about__card {\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  width: 24.5rem;\n}\n.about__card-img {\n  width: 100%;\n  height: 32.6rem;\n}\n.about__card-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about__card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.about__card-text--title {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about__card-text--subtitle {\n  color: #e7284a;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.advantages_container {\n  display: flex;\n}\n.advantages__list {\n  display: flex;\n  flex-direction: column;\n  gap: 5rem;\n}\n.advantages__list-row {\n  display: flex;\n}\n.advantages__list-row .advantages__main {\n  margin-right: 16.8rem;\n}\n.advantages__info {\n  display: flex;\n  justify-content: space-between;\n}\n.advantages__short {\n  width: 41.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.advantages__short-number {\n  color: #242424;\n  font-size: 5rem;\n  font-weight: 400;\n  line-height: normal;\n}\n.advantages__short-text {\n  color: #9d9d9d;\n  font-size: 1.8rem;\n  font-weight: 500;\n  line-height: normal;\n}\n.advantages__main {\n  width: 24.4rem;\n}\n.advantages__main-icon {\n  display: flex;\n  width: 4rem;\n  height: 4rem;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.advantages__main-icon svg {\n  width: 100%;\n  height: 100%;\n}\n.advantages__main-name {\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.advantages__main-description {\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: normal;\n}\n\n.about-intro {\n  margin-top: 1.5rem;\n  margin-bottom: 19.8rem;\n}\n.about-intro__inner {\n  position: relative;\n  height: 84.9rem;\n}\n.about-intro__content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.about-intro__title {\n  text-align: center;\n  width: 92.5rem;\n  margin-bottom: 4rem;\n}\n.about-intro__subtitle {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%);\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about-intro__pictures {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}\n.about-intro__img {\n  position: absolute;\n  z-index: -1;\n}\n.about-intro__img--1 {\n  width: 18.2rem;\n  height: 24.6rem;\n  top: 0;\n  left: 39.1rem;\n}\n.about-intro__img--2 {\n  width: 32.5rem;\n  height: 19.8rem;\n  left: 50%;\n  bottom: 10.8rem;\n  transform: translateX(-50%);\n}\n.about-intro__img--3 {\n  width: 22.6rem;\n  height: 26.8rem;\n  bottom: 0;\n  left: 11.2rem;\n}\n.about-intro__img--4 {\n  width: 35.6rem;\n  height: 21.8rem;\n  right: -20rem;\n  top: 12.4rem;\n}\n.about-intro__img--5 {\n  width: 32rem;\n  height: 21.6rem;\n  left: -18.1rem;\n  top: 17.5rem;\n  clip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);\n}\n.about-intro__img--6 {\n  width: 20.6rem;\n  height: 29.8rem;\n  bottom: 6.2rem;\n  right: 5.5rem;\n  clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\n}\n.about-intro__img--7 {\n  width: 35.2rem;\n  height: 18.6rem;\n  top: 4.8rem;\n  right: 35.6rem;\n  clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\n}\n\n.about-business {\n  margin-bottom: 20rem;\n}\n.about-business__inner {\n  display: flex;\n}\n.about-business__content {\n  display: flex;\n  justify-content: space-between;\n}\n.about-business__item {\n  width: 52rem;\n}\n.about-business__text {\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin-bottom: 5rem;\n  min-height: 10.7rem;\n}\n.about-business__text span {\n  color: #e7284a;\n  font-weight: 600;\n}\n\n.about-advantages {\n  margin-bottom: 20rem;\n}\n.about-advantages__inner {\n  display: flex;\n}\n.about-advantages__main {\n  position: relative;\n}\n.about-advantages__item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2.4rem 0;\n  border-bottom: 0.1rem solid rgba(36, 36, 36, 0.4);\n}\n.about-advantages__item:first-child {\n  padding: 0 0 2.4rem 0;\n}\n.about-advantages__item:last-child {\n  padding: 2.4rem 0 0 0;\n  border-bottom: none;\n  justify-content: center;\n  gap: 14rem;\n}\n.about-advantages__item-wrapper {\n  display: flex;\n  align-items: center;\n  gap: 12.4rem;\n}\n.about-advantages__img {\n  width: 15rem;\n  height: 7.2rem;\n}\n.about-advantages__text {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n}\n.about-advantages__text span {\n  color: #e7284a;\n}\n.about-advantages__btn {\n  position: absolute;\n  top: 16.1rem;\n  left: -12.4rem;\n}\n\n.about-feedback__inner {\n  display: flex;\n}\n.about-feedback__main {\n  display: flex;\n  gap: 3.1rem;\n}\n.about-feedback__left {\n  width: 38.2rem;\n  height: 22.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.about-feedback__description {\n  width: 75%;\n}\n.about-feedback__right {\n  flex: 1 1 auto;\n}\n.about-feedback__form {\n  margin-top: 7.5rem;\n}\n\n@media (max-width: 48em) {\n  .about-intro {\n    margin-top: 3.4rem;\n    margin-bottom: 8.2rem;\n  }\n  .about-intro__inner {\n    height: 116.6rem;\n  }\n  .about-intro__title {\n    text-align: center;\n    width: 61.8rem;\n    margin-bottom: 4rem;\n  }\n  .about-intro__subtitle {\n    text-align: center;\n    position: static;\n    font-size: 2.8rem;\n    transform: none;\n  }\n  .about-intro__img--1 {\n    width: 19.8rem;\n    height: 26.2rem;\n    top: 8.6rem;\n    left: unset;\n    right: 0;\n  }\n  .about-intro__img--2 {\n    width: 26.8rem;\n    height: 16.2rem;\n    left: 17.6rem;\n    bottom: 0;\n    transform: none;\n  }\n  .about-intro__img--3 {\n    width: 19.2rem;\n    height: 22.8rem;\n    bottom: 19.6rem;\n    left: -2.8rem;\n  }\n  .about-intro__img--6 {\n    width: 17.2rem;\n    height: 24.8rem;\n    bottom: 10.6rem;\n    right: -3.2rem;\n    clip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\n  }\n  .about-intro__img--7 {\n    width: 38.2rem;\n    height: 20rem;\n    top: 0;\n    right: unset;\n    left: 0;\n    clip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\n  }\n  .about-business {\n    margin-bottom: 18rem;\n  }\n  .about-business__inner {\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .about-business__content {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .about-business__item {\n    width: 100%;\n  }\n  .about-business__text {\n    font-size: 3.2rem;\n    margin-bottom: 3.2rem;\n    width: 65rem;\n    min-height: unset;\n  }\n  .about-advantages {\n    margin-bottom: 31.8rem;\n  }\n  .about-advantages__inner {\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .about-advantages__item {\n    justify-content: flex-start;\n    padding: 3.2rem 0;\n    border-bottom: 0.2rem solid rgba(36, 36, 36, 0.4);\n  }\n  .about-advantages__item:first-child {\n    padding: 0 0 3.2rem 0;\n    gap: 7.2rem;\n  }\n  .about-advantages__item:first-child .about-advantages__text {\n    width: 19.4rem;\n  }\n  .about-advantages__item:nth-child(2) {\n    justify-content: flex-end;\n    gap: 4.8rem;\n  }\n  .about-advantages__item:nth-child(2) .about-advantages__text {\n    width: 25.6rem;\n  }\n  .about-advantages__item:nth-child(3) {\n    justify-content: flex-start;\n    gap: 4.8rem;\n  }\n  .about-advantages__item:nth-child(3) .about-advantages__text {\n    width: 22.2rem;\n  }\n  .about-advantages__item:nth-child(4) {\n    justify-content: center;\n    gap: unset;\n  }\n  .about-advantages__item:nth-child(4) .about-advantages__text {\n    width: 22.8rem;\n  }\n  .about-advantages__item:nth-child(5) {\n    justify-content: flex-end;\n    gap: 7.2rem;\n  }\n  .about-advantages__item:nth-child(5) .about-advantages__text {\n    width: 23.8rem;\n  }\n  .about-advantages__item:last-child {\n    padding: 3.2rem 0 0 0;\n    border-bottom: none;\n    justify-content: flex-start;\n    width: 25.8rem;\n  }\n  .about-advantages__img {\n    width: 24rem;\n    height: 11.6rem;\n  }\n  .about-advantages__text {\n    font-size: 3.6rem;\n  }\n  .about-advantages__btn {\n    position: absolute;\n    top: unset;\n    left: unset;\n    bottom: -10.4rem;\n    right: 9.8rem;\n  }\n  .about-feedback {\n    margin-bottom: 18rem;\n  }\n  .about-feedback__inner {\n    flex-direction: column;\n  }\n  .about-feedback__title {\n    font-weight: 800;\n    width: 85%;\n    line-height: 100%;\n  }\n  .about-feedback__main {\n    flex-direction: column;\n    gap: 6.4rem;\n  }\n  .about-feedback__left {\n    width: 100%;\n    height: unset;\n    flex-direction: column;\n    gap: 2.4rem;\n  }\n  .about-feedback__description {\n    width: 80%;\n  }\n  .about-feedback__right {\n    flex: 0;\n  }\n  .about-feedback__form {\n    margin-top: 0;\n  }\n}\n.projects {\n  margin-top: 5rem;\n  margin-bottom: 20rem;\n}\n.projects__header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 10rem;\n}\n.projects__main {\n  column-gap: 3rem;\n  row-gap: 10.3rem;\n}\n\n.projects-header__title {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 8rem;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 100%; /* 80px */\n  width: 92.5rem;\n}\n\n.category-btn {\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: normal;\n  text-transform: uppercase;\n  transition: color 0.2s ease-out;\n}\n.category-btn.show {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.category-btn.show svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n.category-btn.show span {\n  transition: transform 0.2s ease-in;\n  transform: rotate(-180deg);\n}\n.category-btn:hover, .category-btn:focus-visible {\n  transition: color 0.2s ease-out;\n  color: #fe921f;\n}\n.category-btn:hover svg path, .category-btn:focus-visible svg path {\n  transition: fill 0.2s ease-out;\n  fill: #fe921f;\n}\n.category-menu {\n  display: flex;\n  flex-direction: column;\n  background-color: #efefef;\n  border: 0.1rem solid #242424;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.2s linear, visibility 0.1s linear 0.2s;\n}\n.category-menu.show {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.2s linear;\n}\n.category-menu__item {\n  display: flex;\n  align-items: center;\n}\n.category-menu__text {\n  margin-left: 1rem;\n}\n\n.projects-category {\n  position: relative;\n}\n.projects-category__btn {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n}\n.projects-category__btn span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: transform 0.2s ease-in;\n}\n.projects-category__btn span svg {\n  width: 1.2707rem;\n  height: 0.7061rem;\n}\n.projects-category__menu {\n  position: absolute;\n  right: 0;\n  top: 3.2rem;\n  z-index: 1;\n  padding: 1.6rem;\n  width: 24.8rem;\n  gap: 0.8rem;\n}\n\n.projects-main {\n  display: grid;\n  grid-template-columns: repeat(4, 38.3rem);\n}\n\n.projects-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.projects-item:hover img {\n  transition: transform 0.5s linear;\n  transform: scale(105%);\n}\n.projects-item--element {\n  justify-content: center;\n  align-items: center;\n}\n.projects-item__img {\n  overflow: hidden;\n  height: 53rem;\n  margin-bottom: 2rem;\n}\n.projects-item__img img {\n  transition: transform 0.5s linear;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.projects-item__info {\n  gap: 1rem;\n  margin-bottom: 0.8rem;\n}\n.projects-item__description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  height: 7.2rem;\n  color: #242424;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 2.4rem; /* 133.333% */\n}\n\n.project-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-family: \"Gilroy\";\n  font-size: 1.8rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n}\n.project-info__name {\n  color: #e7284a;\n}\n.project-info__date {\n  color: #242424;\n}\n\n@media (max-width: 48em) {\n  .projects {\n    margin-top: 4rem;\n    margin-bottom: 37.2rem;\n  }\n  .projects__header {\n    align-items: flex-start;\n    flex-direction: column;\n    justify-content: unset;\n    gap: 6.4rem;\n    margin-bottom: 4.4rem;\n  }\n  .projects__main {\n    column-gap: unset;\n    row-gap: 5.6rem;\n  }\n  .projects-header__title {\n    font-size: 5.6rem;\n    width: 100%;\n  }\n  .category-btn {\n    font-size: 3.6rem;\n  }\n  .category-menu {\n    border: none;\n    border-top: 0.2rem solid #c7c7c7;\n  }\n  .category-menu__text {\n    margin-left: 2rem;\n  }\n  .projects-category {\n    position: static;\n  }\n  .projects-category__btn {\n    gap: 1.6rem;\n  }\n  .projects-category__btn span svg {\n    width: 2.4rem;\n    height: 1.2rem;\n  }\n  .projects-category__menu {\n    position: fixed;\n    top: unset;\n    bottom: 0;\n    z-index: 1;\n    padding: 6.4rem 3.2rem;\n    width: 100%;\n    height: unset;\n    gap: 1.6rem;\n  }\n  .projects-main {\n    grid-template-columns: 100%;\n  }\n  .projects-item__img {\n    height: 63.4rem;\n    margin-bottom: 4rem;\n  }\n  .projects-item__info {\n    gap: 2rem;\n    margin-bottom: 1.6rem;\n  }\n  .projects-item__description {\n    height: unset;\n    font-size: 3.2rem;\n    line-height: normal; /* 133.333% */\n  }\n  .project-info {\n    font-size: 3.2rem;\n  }\n}\n.contacts {\n  margin-top: 5rem;\n  margin-bottom: 20rem;\n}\n.contacts__inner {\n  position: relative;\n}\n.contacts__title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.contacts__main {\n  display: flex;\n  flex-direction: column;\n  gap: 20rem;\n}\n.contacts__item {\n  height: 70.7rem;\n}\n\n.contacts-item {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  position: relative;\n}\n.contacts-item:nth-child(even) {\n  justify-content: flex-end;\n}\n.contacts-item:nth-child(even) .contacts-item__info {\n  text-align: right;\n  align-items: flex-end;\n}\n.contacts-item:nth-child(even) .contacts-item__img {\n  left: -15rem;\n}\n.contacts-item:nth-child(even) .contacts-item__btn {\n  margin-left: auto;\n}\n.contacts-item__info {\n  width: 41.3rem;\n  color: #242424;\n  font-family: \"Akrobat\";\n  font-size: 3.4rem;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n}\n.contacts-item__address {\n  margin-bottom: 2rem;\n}\n.contacts-item__phone {\n  margin-bottom: 2rem;\n}\n.contacts-item__phone:hover {\n  text-decoration: underline;\n}\n.contacts-item__mail {\n  margin-bottom: 4.8rem;\n}\n.contacts-item__mail:hover {\n  text-decoration: underline;\n}\n.contacts-item__img {\n  width: 108.3rem;\n  height: 70.7rem;\n  position: absolute;\n  right: -15rem;\n  top: 0;\n}\n.contacts-item__img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.contacts-feedback {\n  margin-bottom: 20rem;\n}\n.contacts-feedback__inner {\n  display: flex;\n  justify-content: space-between;\n}\n.contacts-feedback__section {\n  width: 55.3rem;\n}\n.contacts-feedback__description {\n  width: 29.4rem;\n}\n.contacts-feedback__form {\n  width: 79.4rem;\n  margin-top: 13rem;\n}\n\n@media (max-width: 48em) {\n  .contacts {\n    margin-top: 4rem;\n    margin-bottom: 18rem;\n  }\n  .contacts__title {\n    position: static;\n  }\n  .contacts__main {\n    gap: 5.6rem;\n  }\n  .contacts__item {\n    height: unset;\n    gap: 4rem;\n  }\n  .contacts-item {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .contacts-item:nth-child(even) {\n    justify-content: flex-start;\n  }\n  .contacts-item:nth-child(even) .contacts-item__info {\n    text-align: left;\n    align-items: flex-start;\n  }\n  .contacts-item:nth-child(even) .contacts-item__img {\n    left: unset;\n  }\n  .contacts-item:nth-child(even) .contacts-item__btn {\n    margin-left: 0;\n  }\n  .contacts-item__info {\n    width: 100%;\n    font-size: 4.8rem;\n    order: 2;\n  }\n  .contacts-item__title {\n    margin-bottom: 2.4rem;\n  }\n  .contacts-item__address {\n    margin-bottom: 3.2rem;\n  }\n  .contacts-item__phone {\n    margin-bottom: 3.2rem;\n  }\n  .contacts-item__img {\n    width: 100%;\n    height: 43rem;\n    position: static;\n    order: 1;\n  }\n  .contacts-feedback {\n    margin-bottom: 18rem;\n  }\n  .contacts-feedback__inner {\n    flex-direction: column;\n    gap: 5.6rem;\n  }\n  .contacts-feedback__mail {\n    margin-bottom: 7.2rem;\n  }\n  .contacts-feedback__section {\n    width: 100%;\n  }\n  .contacts-feedback__description {\n    width: 58.8rem;\n  }\n  .contacts-feedback__form {\n    width: 100%;\n    margin-top: 0;\n  }\n}\n.mobile {\n  display: none;\n}\n\n@media (max-width: 48em) {\n  .desktop {\n    display: none;\n  }\n  .mobile {\n    display: block;\n  }\n}","*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  font-family: 'Gilroy';\r\n  font-size: 0.5208335vw;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  -webkit-animation: bugfix infinite 1s;\r\n  line-height: 1.2;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  -webkit-animation: bugfix infinite 1s;\r\n  line-height: 1.2;\r\n  margin: 0;\r\n  padding: 0;\r\n  color: #242424;\r\n  background-color: #efefef;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  -webkit-animation: bugfix infinite 1s;\r\n  line-height: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: inherit;\r\n}\r\n\r\na {\r\n  color: unset;\r\n}\r\n\r\na,\r\na:hover {\r\n  text-decoration: none;\r\n}\r\n\r\nbutton,\r\ninput,\r\na,\r\ntextarea {\r\n  outline: none;\r\n  cursor: pointer;\r\n  font: inherit;\r\n}\r\nbutton:focus,\r\ninput:focus,\r\na:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n}\r\nbutton:active,\r\ninput:active,\r\na:active,\r\ntextarea:active {\r\n  outline: none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  color: inherit;\r\n  font: inherit;\r\n  text-align: inherit;\r\n  padding: 0;\r\n  background-color: transparent;\r\n}\r\n\r\nul {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nul li {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  padding: 0 15rem;\r\n}\r\n\r\ninput[type='number']::-webkit-inner-spin-button,\r\ninput[type='number']::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type='number'] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\nsection {\r\n  margin-bottom: 18rem;\r\n}\r\n\r\n@media (max-width: 48em) {\r\n  html {\r\n    font-size: 5px;\r\n    font-size: 1.5625vw;\r\n    font-size: 1.3333333333vw;\r\n    -webkit-text-size-adjust: none;\r\n  }\r\n  body {\r\n    -webkit-text-size-adjust: none;\r\n  }\r\n  section {\r\n    margin-bottom: 24rem;\r\n  }\r\n  .container {\r\n    padding: 0 3rem;\r\n    width: 100%;\r\n  }\r\n}\r\n",".title {\r\n\tfont-family: \"Akrobat\";\r\n\tcolor: #242424;\r\n\tfont-size: 8rem;\r\n\tfont-weight: 800;\r\n\tline-height: 1;\r\n\tmargin-bottom: 10rem;\r\n}\r\n\r\n.btn {\r\n\tposition: relative;\r\n\tdisplay: flex;\r\n\twidth: 16.6rem;\r\n\theight: 16.6rem;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tcolor: #fff;\r\n\tfont-size: 1.6rem;\r\n\tfont-weight: 700;\r\n\tline-height: normal;\r\n\ttext-transform: uppercase;\r\n\r\n\t&--text {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\ttransform: translate(-50%, -50%);\r\n\t}\r\n\tsvg {\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n\r\n.long-btn {\r\n\tcolor: #e84b0f;\r\n\tfont-family: \"Gilroy\";\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tfont-weight: 600;\r\n\tline-height: 2.4rem; /* 133.333% */\r\n\r\n\ttransition:\r\n\t\tbackground 0.2s ease-out,\r\n\t\tcolor 0.2s ease-out;\r\n\r\n\tpadding: 1.4rem 2.4rem;\r\n\tborder-radius: 10rem;\r\n\tborder: 0.1rem solid #fe921f;\r\n\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tgap: 2.4rem;\r\n\r\n\tspan {\r\n\t\tdisplay: block;\r\n\t\tposition: relative;\r\n\t\twidth: 2.4rem;\r\n\t\theight: 2.4rem;\r\n\t\ttransform: rotate(45deg);\r\n\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\twidth: 1rem;\r\n\t\t\theight: 1rem;\r\n\t\t\tbackground-color: #e84b0f;\r\n\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 50%;\r\n\t\t\tleft: 50%;\r\n\t\t\tz-index: 1;\r\n\r\n\t\t\ttransition: background 0.2s ease-out;\r\n\t\t\ttransform: translate(-50%, -50%);\r\n\t\t}\r\n\t}\r\n\r\n\t&:hover,\r\n\t&:focus-visible {\r\n\t\ttransition:\r\n\t\t\tbackground 0.2s ease-out,\r\n\t\t\tcolor 0.2s ease-out;\r\n\t\tbackground-color: #e84b0f;\r\n\t\tcolor: #fff;\r\n\r\n\t\tspan::after {\r\n\t\t\tbackground-color: #fff;\r\n\t\t\ttransition: background 0.2s ease-out;\r\n\t\t}\r\n\t}\r\n\r\n\t&:disabled {\r\n\t\tcursor: default;\r\n\t\tbackground-color: #e6e6e6;\r\n\t\tcolor: #bebebe;\r\n\t\tborder: 0.1rem solid #bebebe;\r\n\r\n\t\tspan::after {\r\n\t\t\tbackground-color: #bebebe;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.content {\r\n\twidth: 120.6rem;\r\n\t&_container {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n}\r\n.section_name {\r\n\tmargin-top: 3.6rem;\r\n\tflex: 1;\r\n\tcolor: #e7284a;\r\n\tfont-size: 1.6rem;\r\n\tfont-weight: 500;\r\n\tline-height: normal;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.subtitle {\r\n\tcolor: #242424;\r\n\tfont-family: \"Akrobat\";\r\n\tfont-size: 3.4rem;\r\n\tfont-weight: 700;\r\n\tline-height: normal;\r\n}\r\n.description {\r\n\tcolor: #9d9d9d;\r\n\tfont-size: 1.8rem;\r\n\tfont-weight: 500;\r\n\tline-height: normal;\r\n}\r\n.form {\r\n\t// .form__title\r\n\t&__title {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 600;\r\n\t\tline-height: 2.4rem; /* 133.333% */\r\n\t\tmargin-bottom: 5rem;\r\n\t}\r\n\t// .form__content\r\n\t&__content {\r\n\t\tmargin-bottom: 5rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 2rem;\r\n\t}\r\n\r\n\t&__personal-data {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1rem;\r\n\t}\r\n\r\n\t&-item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 3rem;\r\n\t\t// .form-item__label\r\n\t\t&__label {\r\n\t\t\twidth: 38.2rem;\r\n\t\t}\r\n\r\n\t\t&--width--100 {\r\n\t\t\t.form-item__label {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.label-input {\r\n\tcursor: pointer;\r\n\t// .form-label__placeholder\r\n\t&__placeholder {\r\n\t\tmargin-bottom: 0.8rem;\r\n\r\n\t\tcolor: #9d9d9d;\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tline-height: normal;\r\n\t}\r\n}\r\n\r\n.input {\r\n\twidth: 100%;\r\n\tcolor: #242424;\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tline-height: normal;\r\n\r\n\tborder: 0.1rem solid #9d9d9d;\r\n\tpadding: 1.4rem 2rem;\r\n\r\n\t&:focus-visible {\r\n\t\tborder: 0.1rem solid #242424;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tcolor: #9d9d9d;\r\n\t}\r\n}\r\n.textarea {\r\n\twidth: 100%;\r\n\tresize: none;\r\n\theight: 5rem;\r\n\tcolor: #242424;\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tline-height: normal;\r\n\r\n\tborder: 0.1rem solid #9d9d9d;\r\n\tpadding: 1.4rem 2rem 0 2rem;\r\n\r\n\t&:focus-visible {\r\n\t\tborder: 0.1rem solid #242424;\r\n\t}\r\n\r\n\t&::placeholder {\r\n\t\tcolor: #9d9d9d;\r\n\t}\r\n}\r\n\r\n.label-text {\r\n\tcolor: #1a1a1a;\r\n\tfont-size: 1.8rem;\r\n\tline-height: normal;\r\n}\r\n\r\n.personal-data {\r\n\t// .personal-data__text\r\n\t&__text {\r\n\t\ta {\r\n\t\t\ttext-decoration: underline;\r\n\t\t\tcolor: #fe921f;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.label-checkbox {\r\n\tinput {\r\n\t\tappearance: none;\r\n\t\tposition: absolute;\r\n\r\n\t\t&:checked + .custom-checkbox {\r\n\t\t\tbackground: url(../assets/images/checkbox-arrow.svg) center / 1.5rem no-repeat;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.custom-checkbox {\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tdisplay: block;\r\n\tcursor: pointer;\r\n\r\n\tborder: 0.1rem solid #fe921f;\r\n}\r\n\r\nmain {\r\n\tpadding-top: 13.3rem;\r\n\toverflow: hidden;\r\n}\r\n\r\nbody {\r\n\t&.lock {\r\n\t\ttouch-action: none;\r\n\t\toverflow: hidden;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.title {\r\n\t\tmargin-bottom: 6.4rem;\r\n\t\tcolor: #242424;\r\n\t\tfont-size: 5.6rem;\r\n\t\tfont-weight: 800;\r\n\t\tline-height: 1;\r\n\t}\r\n\t.btn {\r\n\t\twidth: 24.4rem;\r\n\t\theight: 24.4rem;\r\n\t\tfont-size: 2.8rem;\r\n\t}\r\n\t.long-btn {\r\n\t\tfont-size: 3.2rem;\r\n\t\tline-height: normal; /* 133.333% */\r\n\r\n\t\tpadding: 2rem 4.8rem;\r\n\t\tborder-radius: 10rem;\r\n\t\tborder: 0.2rem solid #fe921f;\r\n\r\n\t\tgap: 4.8rem;\r\n\r\n\t\tspan {\r\n\t\t\twidth: 4.8rem;\r\n\t\t\theight: 4.8rem;\r\n\r\n\t\t\t&::after {\r\n\t\t\t\twidth: 2rem;\r\n\t\t\t\theight: 2rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.subtitle {\r\n\t\tfont-size: 4.8rem;\r\n\t}\r\n\t.description {\r\n\t\tfont-size: 3.2rem;\r\n\t}\r\n\t.content {\r\n\t\twidth: 100%;\r\n\t}\r\n\t.section_name {\r\n\t\tmargin-top: 0;\r\n\t\tflex: 1;\r\n\t\tfont-size: 2.8rem;\r\n\t}\r\n\t.form {\r\n\t\t&__title {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tmargin-bottom: 4rem;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t\t// .form__content\r\n\t\t&__content {\r\n\t\t\tmargin-bottom: 6.4rem;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\r\n\t\t&__personal-data {\r\n\t\t\tgap: 2rem;\r\n\t\t}\r\n\r\n\t\t&-item {\r\n\t\t\talign-items: flex-start;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t\t// .form-item__label\r\n\t\t\t&__label {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.label-input {\r\n\t\t// .form-label__placeholder\r\n\t\t&__placeholder {\r\n\t\t\tmargin-bottom: 0.8rem;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t}\r\n\t}\r\n\r\n\t.input {\r\n\t\tfont-size: 3.2rem;\r\n\r\n\t\tborder: 0.2rem solid #9d9d9d;\r\n\t\tpadding: 2.4rem 4rem;\r\n\r\n\t\t&:focus-visible {\r\n\t\t\tborder: 0.2rem solid #242424;\r\n\t\t}\r\n\t}\r\n\r\n\t.textarea {\r\n\t\theight: 22.6rem;\r\n\t\tfont-size: 3.2rem;\r\n\r\n\t\tborder: 0.2rem solid #9d9d9d;\r\n\t\tpadding: 2.4rem 4rem;\r\n\r\n\t\t&:focus-visible {\r\n\t\t\tborder: 0.2rem solid #242424;\r\n\t\t}\r\n\t}\r\n\r\n\t.label-text {\r\n\t\tfont-size: 3.2rem;\r\n\t}\r\n\r\n\t.personal-data {\r\n\t\t// .personal-data__text\r\n\t\t&__text {\r\n\t\t\ta {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.label-checkbox {\r\n\t\tinput {\r\n\t\t\t&:checked + .custom-checkbox {\r\n\t\t\t\tbackground: url(../assets/images/checkbox-arrow.svg) center / 3rem no-repeat;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.custom-checkbox {\r\n\t\twidth: 6rem;\r\n\t\theight: 6rem;\r\n\r\n\t\tborder: 0.2rem solid #fe921f;\r\n\t}\r\n}\r\n",".header {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1000;\r\n\r\n\twidth: 100%;\r\n\r\n\t&.scroll {\r\n\t\tbackground-color: #efefef;\r\n\t\tborder-bottom: 0.1rem solid #c7c7c7;\r\n\t}\r\n\t// .header__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t\tpadding: 3.1rem 0;\r\n\r\n\t\t&.desktop {\r\n\t\t\t@media (max-width: 48em) {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&.mobile {\r\n\t\t\tdisplay: none;\r\n\t\t\t@media (max-width: 48em) {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .header__left\r\n\t&__left {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tflex: 1 1 auto;\r\n\t\tgap: 3.2rem;\r\n\t}\r\n\t// .header__logo\r\n\t&__logo {\r\n\t\twidth: 15rem;\r\n\t\theight: 7.1rem;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: auto;\r\n\t\t\tobject-fit: contain;\r\n\t\t}\r\n\t}\r\n\t// .header__right\r\n\t&__right {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1.6rem;\r\n\t\tmargin-left: 20.3rem;\r\n\t}\r\n}\r\n\r\n.nav {\r\n\t// .nav__link\r\n\t&__link {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 500;\r\n\t\tline-height: normal;\r\n\r\n\t\ta {\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\r\n\t\t\t&:hover,\r\n\t\t\t&:focus-visible {\r\n\t\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.header-right {\r\n\t// .header-right__nav\r\n\t&__nav {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 3.2rem;\r\n\t}\r\n}\r\n\r\n.link-menu {\r\n\tposition: absolute;\r\n\ttop: 2.1rem;\r\n\tleft: -50%;\r\n\twidth: 6.4rem;\r\n\theight: 9.6rem;\r\n\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: flex-end;\r\n\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransition:\r\n\t\topacity 0.2s linear,\r\n\t\tvisibility 0.1s linear 0.2s;\r\n\r\n\t&.show {\r\n\t\topacity: 1;\r\n\t\tvisibility: visible;\r\n\t\ttransition: opacity 0.2s linear;\r\n\t}\r\n\r\n\t&__inner {\r\n\t\twidth: 100%;\r\n\t\tmin-height: 8.4rem;\r\n\t\tbox-shadow: inset 0 0 0 0.1rem #242424;\r\n\r\n\t\tbackground-color: #efefef;\r\n\t\tpadding: 1.6rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 0.8rem;\r\n\t}\r\n\t&-btn {\r\n\t\tposition: relative;\r\n\r\n\t\t&.show {\r\n\t\t\tbutton {\r\n\t\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t\tsvg {\r\n\t\t\t\t\tpath {\r\n\t\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\ttransition: transform 0.2s ease-in;\r\n\t\t\t\ttransform: rotate(-180deg);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tbutton {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 0.8rem;\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\r\n\t\t\tspan {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\ttransition: transform 0.2s ease-in;\r\n\t\t\t\tsvg {\r\n\t\t\t\t\twidth: 1.2707rem;\r\n\t\t\t\t\theight: 0.7061rem;\r\n\t\t\t\t\tpath {\r\n\t\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t&:hover,\r\n\t\t\t&:focus-visible {\r\n\t\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t\tsvg {\r\n\t\t\t\t\tpath {\r\n\t\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.lang-radio {\r\n\tcursor: pointer;\r\n\r\n\tinput {\r\n\t\tvisibility: hidden;\r\n\t\tappearance: none;\r\n\t\tposition: absolute;\r\n\t}\r\n\r\n\t&--desktop {\r\n\t\t&.active {\r\n\t\t\tp {\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tcolor: #242424;\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tcolor: #fe921f;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.header {\r\n\t\tbackground-color: #efefef;\r\n\t\t// .header__inner\r\n\t\t&__inner {\r\n\t\t\tpadding: 2.4rem 0;\r\n\t\t\tjustify-content: space-between;\r\n\t\t}\r\n\t\t// .header__left\r\n\t\t&__left {\r\n\t\t\tflex: 0;\r\n\t\t}\r\n\t\t// .header__logo\r\n\t\t&__logo {\r\n\t\t\twidth: 18.8rem;\r\n\t\t\theight: 8.8rem;\r\n\t\t}\r\n\t\t// .header__right\r\n\t\t&__right {\r\n\t\t\tmargin-left: 0;\r\n\t\t}\r\n\t\t// .header__burger-menu\r\n\t\t&__burger-menu {\r\n\t\t\tposition: fixed;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100vh;\r\n\r\n\t\t\ttransition: transform 0.5s ease-out 0.2s;\r\n\t\t\ttransform: translate(-100%);\r\n\r\n\t\t\t&.active {\r\n\t\t\t\ttransition: transform 0.5s ease-out;\r\n\t\t\t\ttransform: translate(0);\r\n\r\n\t\t\t\t.burger-menu__overlay {\r\n\t\t\t\t\ttransition: opacity 0.3s linear 0.4s;\r\n\t\t\t\t\topacity: 0.4;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.header-left {\r\n\t\t// .header-left__burger\r\n\t\t&__burger {\r\n\t\t\tgap: 0.7rem;\r\n\r\n\t\t\twidth: 8.8rem;\r\n\t\t\theight: 8.8rem;\r\n\t\t}\r\n\t}\r\n\t.burger-btn {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\r\n\t\tbackground: url(../../assets/images/burger-bg.svg) center / contain no-repeat;\r\n\r\n\t\tspan {\r\n\t\t\tdisplay: block;\r\n\t\t\twidth: 3.9rem;\r\n\t\t\theight: 0.3rem;\r\n\t\t\tbackground-color: #fff;\r\n\t\t\tborder-radius: 10rem;\r\n\t\t}\r\n\t}\r\n\t.burger-menu {\r\n\t\t// .burger-menu__inner\r\n\t\t&__inner {\r\n\t\t\tposition: relative;\r\n\t\t\tz-index: 1002;\r\n\t\t\theight: 100%;\r\n\t\t\twidth: 59rem;\r\n\t\t\tbackground: #efefef;\r\n\t\t\tpadding: 6.4rem 4.8rem 6.4rem 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__close\r\n\t\t&__close {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 4.8rem;\r\n\t\t\tright: 4.8rem;\r\n\t\t}\r\n\t\t// .burger-menu__nav\r\n\t\t&__nav {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 3.2rem;\r\n\r\n\t\t\tpadding-bottom: 5.6rem;\r\n\t\t\tborder-bottom: 0.2rem solid #9d9d9d;\r\n\t\t}\r\n\t\t// .burger-menu__overlay\r\n\t\t&__overlay {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tz-index: 1001;\r\n\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\r\n\t\t\topacity: 0;\r\n\t\t\tbackground: linear-gradient(335deg, #d61607 4.71%, #f87717 50.89%, #fece24 83.73%);\r\n\t\t\ttransition: opacity 0.2s linear;\r\n\t\t}\r\n\t\t// .burger-menu__info\r\n\t\t&__info {\r\n\t\t\tpadding: 5.6rem 0;\r\n\t\t\tborder-bottom: 0.2rem solid #9d9d9d;\r\n\t\t}\r\n\t\t// .burger-menu__info-content\r\n\t\t&__info-content {\r\n\t\t\tmargin-bottom: 5.6rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__info-item\r\n\t\t&__info-item {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 2.4rem;\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 4.8rem;\r\n\t\t\t\theight: 4.8rem;\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t\tfont-size: 3.6rem;\r\n\t\t\t\tfont-style: normal;\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .burger-menu__info-social\r\n\t\t&__info-social {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__social-item\r\n\t\t&__social-item {\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 6rem;\r\n\t\t\t\theight: 6rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .burger-menu__lang\r\n\t\t&__lang {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tpadding-top: 5.6rem;\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t\t// .burger-menu__lang-item\r\n\t\t&__lang-item {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t}\r\n\t.header-right {\r\n\t\t// .header-right__call\r\n\t\t&__call {\r\n\t\t\twidth: 8.8rem;\r\n\t\t\theight: 8.8rem;\r\n\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\r\n\t\t\tborder-radius: 50%;\r\n\t\t\tbox-shadow: inset 0 0 0 1px #fe921f;\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 50%;\r\n\t\t\t\theight: 50%;\r\n\t\t\t}\r\n\r\n\t\t\t&:hover {\r\n\t\t\t\tbackground-color: #e84b0f;\r\n\r\n\t\t\t\tsvg path {\r\n\t\t\t\t\tfill: #fff;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.nav {\r\n\t\t// .nav__link\r\n\t\t&__link {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.lang-radio {\r\n\t\t&.active {\r\n\t\t\tp {\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tp {\r\n\t\t\tcolor: #9d9d9d;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t}\r\n}\r\n",".footer {\r\n\t// .footer__top\r\n\t&__top {\r\n\t\tpadding-bottom: 5rem;\r\n\t\tdisplay: flex;\r\n\t\talign-items: flex-end;\r\n\t\tborder-bottom: 0.1rem solid #9d9d9d;\r\n\t\tgap: 12.6rem;\r\n\t}\r\n\t// .footer__bottom\r\n\t&__bottom {\r\n\t\tpadding: 5rem 0;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n}\r\n.footer-top {\r\n\t// .footer-top__logo\r\n\t&__logo {\r\n\t\twidth: 15rem;\r\n\t\theight: 7.1rem;\r\n\t}\r\n\t// .footer-top__nav\r\n\t&__nav {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 3.6rem;\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// .footer-top__social\r\n\t&__social {\r\n\t\tgap: 1.5rem;\r\n\t}\r\n}\r\n.social {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\r\n\t// .social__item\r\n\t&__item {\r\n\t\tdisplay: block;\r\n\t\twidth: 3rem;\r\n\t\theight: 3rem;\r\n\r\n\t\tsvg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t}\r\n}\r\n.footer-bottom {\r\n\t// .footer-bottom__copyright\r\n\t&__copyright {\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 500;\r\n\t\tline-height: normal;\r\n\t}\r\n\t// .footer-bottom__info\r\n\t&__info {\r\n\t\tgap: 7rem;\r\n\t}\r\n}\r\n.info {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\t// .info__item\r\n\t&__item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 1.2rem;\r\n\r\n\t\tspan {\r\n\t\t\tcolor: #242424;\r\n\t\t\tfont-family: \"Gilroy\";\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-style: normal;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\r\n\t\tsvg {\r\n\t\t\twidth: 2.4rem;\r\n\t\t\theight: 2.4rem;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.footer {\r\n\t\toverflow: hidden;\r\n\t\t// .footer__top\r\n\t\t&__top {\r\n\t\t\tpadding-bottom: 5.6rem;\r\n\t\t\tflex-direction: column;\r\n\t\t\talign-items: flex-start;\r\n\t\t\tborder-bottom: 0.2rem solid #9d9d9d;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .footer__bottom\r\n\t\t&__bottom {\r\n\t\t\tpadding: 5.6rem 0;\r\n\t\t}\r\n\t}\r\n\t.footer-top {\r\n\t\t// .footer-top__logo\r\n\t\t&__logo {\r\n\t\t\twidth: 18.8rem;\r\n\t\t\theight: 8.8rem;\r\n\t\t}\r\n\t\t// .footer-top__nav\r\n\t\t&__nav {\r\n\t\t\talign-items: flex-start;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 3.2rem;\r\n\t\t\tflex: 0;\r\n\t\t}\r\n\t\t// .footer-top__social\r\n\t\t&__social {\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.social {\r\n\t\t// .social__item\r\n\t\t&__item {\r\n\t\t\twidth: 6rem;\r\n\t\t\theight: 6rem;\r\n\t\t}\r\n\t}\r\n\t.footer-bottom {\r\n\t\t// .footer-bottom__copyright\r\n\t\t&__copyright {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\twidth: 53.6rem;\r\n\t\t}\r\n\t\t// .footer-bottom__info\r\n\t\t&__info {\r\n\t\t\tgap: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t.info {\r\n\t\t&.mobile {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t// .info__item\r\n\t\t&__item {\r\n\t\t\tgap: 2.4rem;\r\n\r\n\t\t\tspan {\r\n\t\t\t\tfont-size: 3.6rem;\r\n\t\t\t}\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 4.8rem;\r\n\t\t\t\theight: 4.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".modal {\r\n\tdisplay: none;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 1010;\r\n\r\n\twidth: 100%;\r\n\theight: 100vh;\r\n\r\n\t&.active {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n\t&-back {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tbackground: rgba(239, 239, 239, 0.1);\r\n\t\tbackdrop-filter: blur(1.75rem);\r\n\t}\r\n\t&-wrapper {\r\n\t\tposition: absolute;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\r\n\t\ttransform: translate(-50%, -50%);\r\n\r\n\t\tborder: 0.1rem solid #242424;\r\n\t\tbackground: #efefef;\r\n\t\tpadding: 10rem;\r\n\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\tz-index: -1;\r\n\t\t\tborder: 0.1rem solid #242424;\r\n\r\n\t\t\ttransform: rotate(-3.741deg);\r\n\t\t}\r\n\t}\r\n\t&-exit {\r\n\t\tposition: absolute;\r\n\t\ttop: 2.4rem;\r\n\t\tright: 2.4rem;\r\n\r\n\t\twidth: 3.2rem;\r\n\t\theight: 3.2rem;\r\n\r\n\t\tsvg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t}\r\n\t&-content {\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\r\n\t\t&.active {\r\n\t\t\tdisplay: block;\r\n\t\t\tvisibility: visible;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.application-modal {\r\n\t// .application-modal__content\r\n\t&__content {\r\n\t\twidth: 38.2rem;\r\n\r\n\t\t&.modal-content--second {\r\n\t\t\ttext-align: center;\r\n\r\n\t\t\t.application-modal__header {\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t\twidth: 31.3rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .application-modal__header\r\n\t&__header {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 3.2rem;\r\n\r\n\t\twidth: 28.7rem;\r\n\r\n\t\tmargin-bottom: 3.2rem;\r\n\t}\r\n\t// .application-modal__form\r\n\t&__form {\r\n\t\t&-item {\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t}\r\n\t}\r\n\t// .application-modal__btn\r\n\t&__btn {\r\n\t\tposition: absolute;\r\n\t\tbottom: -8.3rem;\r\n\t\tleft: 50%;\r\n\r\n\t\ttransform: translate(-50%);\r\n\r\n\t\t& .btn--text {\r\n\t\t\ttext-wrap: nowrap;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.modal {\r\n\t\t&-wrapper {\r\n\t\t\tborder: 0.2rem solid #242424;\r\n\t\t\tpadding: 12rem 4.8rem;\r\n\t\t\twidth: 66rem;\r\n\r\n\t\t\t&::after {\r\n\t\t\t\tborder: 0.2rem solid #242424;\r\n\t\t\t\ttransform: rotate(-1.914deg);\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-exit {\r\n\t\t\ttop: 3.2rem;\r\n\t\t\tright: 3.2rem;\r\n\r\n\t\t\twidth: 4rem;\r\n\t\t\theight: 4rem;\r\n\t\t}\r\n\t}\r\n\r\n\t.application-modal {\r\n\t\t// .application-modal__content\r\n\t\t&__content {\r\n\t\t\twidth: 100%;\r\n\r\n\t\t\t&.modal-content--second {\r\n\t\t\t\t.application-modal__header {\r\n\t\t\t\t\tmargin: 0;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .application-modal__header\r\n\t\t&__header {\r\n\t\t\tgap: 4rem;\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin-bottom: 4.8rem;\r\n\t\t}\r\n\t\t// .application-modal__form\r\n\t\t&__form {\r\n\t\t\t&-item {\r\n\t\t\t\tmargin-bottom: 4.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .application-modal__btn\r\n\t\t&__btn {\r\n\t\t\tbottom: -13.8rem;\r\n\t\t}\r\n\t}\r\n}\r\n","@keyframes animScroll1 {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t25% {\r\n\t\ttransform: scale(1.2);\r\n\t}\r\n\t45% {\r\n\t\ttransform: scale(1.2);\r\n\t}\r\n\t60% {\r\n\t\ttransform: scale(1.6);\r\n\t}\r\n\t75% {\r\n\t\ttransform: scale(2);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n@keyframes animScroll2 {\r\n\t0% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t25% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n\t//   25% {\r\n\t//     transform: scale(1.2);\r\n\t//   }\r\n\t35% {\r\n\t\ttransform: scale(1.3);\r\n\t}\r\n\t50% {\r\n\t\ttransform: scale(1.4);\r\n\t}\r\n\t75% {\r\n\t\ttransform: scale(1.5);\r\n\t}\r\n\t//   85%{\r\n\t//     transform: scale(1.4);\r\n\t//   }\r\n\t80% {\r\n\t\ttransform: scale(1.4);\r\n\t}\r\n\t100% {\r\n\t\ttransform: scale(1);\r\n\t}\r\n}\r\n.banner {\r\n\tmargin-top: 2rem;\r\n\t&_container {\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t&__scroll {\r\n\t\tposition: absolute;\r\n\t\ttop: 45rem;\r\n\t\tleft: 2.5rem;\r\n\t\twidth: 12rem;\r\n\t\theight: 12rem;\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tcolor: #fff;\r\n\t\tfont-size: 1.6rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\t\t&-text {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t}\r\n\t\t&-anim_1 {\r\n\t\t\tposition: absolute;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\t//   width: 17rem;\r\n\t\t\t//   height: 17rem;\r\n\t\t\ttransform: scale(1);\r\n\t\t\ttransform-origin: center;\r\n\t\t\t//   transition: 1000ms transform ease;\r\n\t\t\tanimation: animScroll1 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\r\n\t\t}\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t}\r\n\t\t&-anim_2 {\r\n\t\t\tposition: absolute;\r\n\t\t\t//   width: 23.2rem;\r\n\t\t\t//   height: 23.2rem;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\ttransform: scale(1);\r\n\t\t\ttransform-origin: center;\r\n\t\t\tanimation: animScroll2 5s cubic-bezier(0, 0.42, 0.8, 1) infinite;\r\n\r\n\t\t\t//   transition: 1000ms transform ease;\r\n\t\t\t//   transition-delay: 100ms;\r\n\t\t}\r\n\t}\r\n\t&__title {\r\n\t\tposition: relative;\r\n\t\tmargin-right: 17.5rem;\r\n\t\tfont-size: 4rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\t&-img {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 9.6rem;\r\n\t\t\tleft: -15rem;\r\n\t\t}\r\n\t}\r\n\t&__main {\r\n\t\tposition: relative;\r\n\t\tdisplay: flex;\r\n\t\t&-photo {\r\n\t\t\tposition: relative;\r\n\t\t\t&:hover {\r\n\t\t\t\t.banner__main-img img {\r\n\t\t\t\t\ttransform: scale(1.2);\r\n\t\t\t\t}\r\n\t\t\t\t.banner__main-img--back {\r\n\t\t\t\t\ttransform: rotate(0deg);\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\ttransform: scale(1);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t//   &::after {\r\n\t\t\t//     content: '';\r\n\t\t\t//     position: absolute;\r\n\t\t\t//     top: 0;\r\n\t\t\t//     left: 0;\r\n\t\t\t//     width: 100%;\r\n\t\t\t//     height: 100%;\r\n\t\t\t//     background: url('../../assets/images/back_img.png') 100% 100% no-repeat;\r\n\t\t\t//   }\r\n\t\t}\r\n\t\t&-border {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\timg {\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-img {\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 51.9rem;\r\n\t\t\theight: 75.2rem;\r\n\t\t\tclip-path: polygon(0 0, 74.9% 0, 100% 19%, 100% 100%, 25% 100%, 0 85%);\r\n\t\t\toverflow: hidden;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t\ttransition: transform 0.4s ease-in-out;\r\n\t\t\t}\r\n\r\n\t\t\t&--back {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\t// clip-path: url('#clip_banner');\r\n\t\t\t\ttransform: rotate(20.921deg);\r\n\t\t\t\ttransition: transform 0.4s ease-in-out;\r\n\r\n\t\t\t\timg {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\theight: 100%;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t//   &::after {\r\n\t\t\t//     content: '';\r\n\t\t\t//     position: absolute;\r\n\t\t\t//     top: 0;\r\n\t\t\t//     left: 0;\r\n\t\t\t//     width: 100%;\r\n\t\t\t//     height: 100%;\r\n\t\t\t//     // border: 1px solid #242424;\r\n\t\t\t//     transform: rotate(20.921deg);\r\n\t\t\t//     filter: drop-shadow(0px 0px 0px #000000);\r\n\t\t\t//     box-shadow: 0px 0px 0px 1px #000000 inset;\r\n\t\t\t//     clip-path: polygon(74% 0, 100% 22%, 100% 100%, 75% 100%, 25% 100%, 0 79%, 0 0);\r\n\t\t\t//   }\r\n\t\t}\r\n\t\t&-thumb {\r\n\t\t\tmargin-left: 8rem;\r\n\t\t\talign-self: end;\r\n\t\t\twidth: 22.2rem;\r\n\t\t\theight: 25.4rem;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-btn {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: 17.1rem;\r\n\t\t\tleft: 52rem;\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\t&--title {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tgap: 2rem;\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 68%;\r\n\t\t\t\tleft: 15rem;\r\n\t\t\t\ttransform: translate(0, -50%);\r\n\t\t\t\tfont-family: \"Akrobat\";\r\n\t\t\t\tfont-size: 15rem;\r\n\t\t\t\tfont-weight: 800;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t\tcolor: transparent;\r\n\t\t\t\t-webkit-text-stroke: 2px #242424;\r\n\t\t\t\ttext-stroke: 2px #242424;\r\n\r\n\t\t\t\tb {\r\n\t\t\t\t\tcolor: #242424;\r\n\t\t\t\t\t-webkit-text-stroke: 0;\r\n\t\t\t\t\ttext-stroke: 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&--subtitle {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\ttop: 78%;\r\n\t\t\t\tright: 29.7rem;\r\n\t\t\t\ttransform: translate(0, -50%);\r\n\t\t\t\tfont-size: 1.6rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__aside {\r\n\t\tposition: relative;\r\n\t\tmargin-left: auto;\r\n\t\t&-img {\r\n\t\t\ttop: 30.6rem;\r\n\t\t\tposition: absolute;\r\n\t\t\tright: -15rem;\r\n\t\t\twidth: 21.2rem;\r\n\t\t\theight: 22.8rem;\r\n\t\t}\r\n\t}\r\n\t&__links {\r\n\t\tmargin-top: 7rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\t&-item {\r\n\t\t\tpadding: 0.8rem 0;\r\n\t\t\tborder-bottom: 1px solid rgba(36, 36, 36, 0.4);\r\n\t\t\tcolor: var(--Black, #242424);\r\n\t\t\tfont-size: 1.6rem;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t}\r\n\t}\r\n}\r\n.about {\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tgap: 8rem;\r\n\t}\r\n\t&__list {\r\n\t\tposition: relative;\r\n\t\tflex: 1;\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t&-mark {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: -7.6rem;\r\n\t\t\tleft: -8rem;\r\n\t\t\twidth: 16.6rem;\r\n\t\t\theight: 16.6rem;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\t&--text {\r\n\t\t\t\tposition: absolute;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tfont-size: 1.6rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__info {\r\n\t\twidth: 60.7rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tgap: 2.4rem;\r\n\t\t\tflex-direction: column;\r\n\t\t\t&--description {\r\n\t\t\t\tfont-size: 1.8rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__card {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 4rem;\r\n\t\twidth: 24.5rem;\r\n\t\t&-img {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 32.6rem;\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 1rem;\r\n\t\t\t&--title {\r\n\t\t\t\tcolor: #242424;\r\n\t\t\t\tfont-family: \"Akrobat\";\r\n\t\t\t\tfont-size: 2rem;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t\ttext-transform: uppercase;\r\n\t\t\t}\r\n\t\t\t&--subtitle {\r\n\t\t\t\tcolor: #e7284a;\r\n\t\t\t\tfont-family: \"Gilroy\";\r\n\t\t\t\tfont-size: 1.8rem;\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tline-height: normal;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n.advantages {\r\n\t&_container {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t&__list {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 5rem;\r\n\t\t&-row {\r\n\t\t\tdisplay: flex;\r\n\t\t\t.advantages__main {\r\n\t\t\t\tmargin-right: 16.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&__info {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t&__short {\r\n\t\twidth: 41.2rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 2rem;\r\n\t\t&-number {\r\n\t\t\tcolor: #242424;\r\n\t\t\tfont-size: 5rem;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t\t&-text {\r\n\t\t\tcolor: #9d9d9d;\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-weight: 500;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t}\r\n\t&__main {\r\n\t\twidth: 24.4rem;\r\n\r\n\t\t&-icon {\r\n\t\t\tdisplay: flex;\r\n\t\t\twidth: 4rem;\r\n\t\t\theight: 4rem;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: center;\r\n\t\t\tmargin-bottom: 2rem;\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t}\r\n\t\t}\r\n\t\t&-name {\r\n\t\t\tfont-family: \"Akrobat\";\r\n\t\t\tfont-size: 2rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t\tline-height: normal;\r\n\t\t\ttext-transform: uppercase;\r\n\t\t}\r\n\t\t&-description {\r\n\t\t\tfont-size: 1.8rem;\r\n\t\t\tfont-weight: 400;\r\n\t\t\tline-height: normal;\r\n\t\t}\r\n\t}\r\n}\r\n",".about-intro {\r\n\tmargin-top: 1.5rem;\r\n\tmargin-bottom: 19.8rem;\r\n\t// .about-intro__inner\r\n\t&__inner {\r\n\t\tposition: relative;\r\n\t\theight: 84.9rem;\r\n\t}\r\n\t// .about-intro__content\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: center;\r\n\t\tflex-direction: column;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\t// .about-intro__title\r\n\t&__title {\r\n\t\ttext-align: center;\r\n\t\twidth: 92.5rem;\r\n\t\tmargin-bottom: 4rem;\r\n\t}\r\n\t// .about-intro__subtitle\r\n\t&__subtitle {\r\n\t\tposition: absolute;\r\n\t\tbottom: 0;\r\n\t\tleft: 50%;\r\n\r\n\t\ttransform: translate(-50%);\r\n\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.6rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\t// .about-intro__pictures\r\n\t&__pictures {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: -1;\r\n\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n\t// .about-intro__img\r\n\t&__img {\r\n\t\tposition: absolute;\r\n\t\tz-index: -1;\r\n\r\n\t\t&--1 {\r\n\t\t\twidth: 18.2rem;\r\n\t\t\theight: 24.6rem;\r\n\r\n\t\t\ttop: 0;\r\n\t\t\tleft: 39.1rem;\r\n\t\t}\r\n\t\t&--2 {\r\n\t\t\twidth: 32.5rem;\r\n\t\t\theight: 19.8rem;\r\n\r\n\t\t\tleft: 50%;\r\n\t\t\tbottom: 10.8rem;\r\n\t\t\ttransform: translateX(-50%);\r\n\t\t}\r\n\t\t&--3 {\r\n\t\t\twidth: 22.6rem;\r\n\t\t\theight: 26.8rem;\r\n\r\n\t\t\tbottom: 0;\r\n\t\t\tleft: 11.2rem;\r\n\t\t}\r\n\t\t&--4 {\r\n\t\t\twidth: 35.6rem;\r\n\t\t\theight: 21.8rem;\r\n\r\n\t\t\tright: -20rem;\r\n\t\t\ttop: 12.4rem;\r\n\t\t}\r\n\t\t&--5 {\r\n\t\t\twidth: 32rem;\r\n\t\t\theight: 21.6rem;\r\n\t\t\tleft: -18.1rem;\r\n\t\t\ttop: 17.5rem;\r\n\r\n\t\t\tclip-path: polygon(74% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 0%);\r\n\t\t}\r\n\t\t&--6 {\r\n\t\t\twidth: 20.6rem;\r\n\t\t\theight: 29.8rem;\r\n\r\n\t\t\tbottom: 6.2rem;\r\n\t\t\tright: 5.5rem;\r\n\r\n\t\t\tclip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\r\n\t\t}\r\n\t\t&--7 {\r\n\t\t\twidth: 35.2rem;\r\n\t\t\theight: 18.6rem;\r\n\r\n\t\t\ttop: 4.8rem;\r\n\t\t\tright: 35.6rem;\r\n\t\t\tclip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\r\n\t\t}\r\n\t}\r\n}\r\n.about-business {\r\n\tmargin-bottom: 20rem;\r\n\t// .about-business__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t// .about-business__content\r\n\t&__content {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t// .about-business__item\r\n\t&__item {\r\n\t\twidth: 52rem;\r\n\t}\r\n\t// .about-business__text\r\n\t&__text {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 500;\r\n\t\tline-height: normal;\r\n\r\n\t\tmargin-bottom: 5rem;\r\n\t\tmin-height: 10.7rem;\r\n\r\n\t\tspan {\r\n\t\t\tcolor: #e7284a;\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\t}\r\n}\r\n.about-advantages {\r\n\tmargin-bottom: 20rem;\r\n\t// .about-advantages__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t// .about-advantages__main\r\n\t&__main {\r\n\t\tposition: relative;\r\n\t}\r\n\t// .about-advantages__item\r\n\t&__item {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tjustify-content: space-between;\r\n\t\tpadding: 2.4rem 0;\r\n\t\tborder-bottom: 0.1rem solid rgba(36, 36, 36, 0.4);\r\n\r\n\t\t&:first-child {\r\n\t\t\tpadding: 0 0 2.4rem 0;\r\n\t\t}\r\n\r\n\t\t&:last-child {\r\n\t\t\tpadding: 2.4rem 0 0 0;\r\n\t\t\tborder-bottom: none;\r\n\t\t\tjustify-content: center;\r\n\t\t\tgap: 14rem;\r\n\t\t}\r\n\t}\r\n\t// .about-advantages__item-wrapper\r\n\t&__item-wrapper {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 12.4rem;\r\n\t}\r\n\t// .about-advantages__img\r\n\t&__img {\r\n\t\twidth: 15rem;\r\n\t\theight: 7.2rem;\r\n\t}\r\n\t// .about-advantages__text\r\n\t&__text {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 2rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\r\n\t\tspan {\r\n\t\t\tcolor: #e7284a;\r\n\t\t}\r\n\t}\r\n\t// .about-advantages__btn\r\n\t&__btn {\r\n\t\tposition: absolute;\r\n\t\ttop: 16.1rem;\r\n\t\tleft: -12.4rem;\r\n\t}\r\n}\r\n.about-feedback {\r\n\t// .about-feedback__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t}\r\n\t// .about-feedback__main\r\n\t&__main {\r\n\t\tdisplay: flex;\r\n\t\tgap: 3.1rem;\r\n\t}\r\n\t// .about-feedback__left\r\n\t&__left {\r\n\t\twidth: 38.2rem;\r\n\t\theight: 22.4rem;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t// .about-feedback__description\r\n\t&__description {\r\n\t\twidth: 75%;\r\n\t}\r\n\t// .about-feedback__right\r\n\t&__right {\r\n\t\tflex: 1 1 auto;\r\n\t}\r\n\t// .about-feedback__form\r\n\t&__form {\r\n\t\tmargin-top: 7.5rem;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.about-intro {\r\n\t\tmargin-top: 3.4rem;\r\n\t\tmargin-bottom: 8.2rem;\r\n\t\t// .about-intro__inner\r\n\t\t&__inner {\r\n\t\t\theight: 116.6rem;\r\n\t\t}\r\n\t\t// .about-intro__title\r\n\t\t&__title {\r\n\t\t\ttext-align: center;\r\n\t\t\twidth: 61.8rem;\r\n\t\t\tmargin-bottom: 4rem;\r\n\t\t}\r\n\t\t// .about-intro__subtitle\r\n\t\t&__subtitle {\r\n\t\t\ttext-align: center;\r\n\t\t\tposition: static;\r\n\t\t\tfont-size: 2.8rem;\r\n\t\t\ttransform: none;\r\n\t\t}\r\n\t\t// .about-intro__img\r\n\t\t&__img {\r\n\t\t\t&--1 {\r\n\t\t\t\twidth: 19.8rem;\r\n\t\t\t\theight: 26.2rem;\r\n\r\n\t\t\t\ttop: 8.6rem;\r\n\t\t\t\tleft: unset;\r\n\t\t\t\tright: 0;\r\n\t\t\t}\r\n\t\t\t&--2 {\r\n\t\t\t\twidth: 26.8rem;\r\n\t\t\t\theight: 16.2rem;\r\n\r\n\t\t\t\tleft: 17.6rem;\r\n\t\t\t\tbottom: 0;\r\n\t\t\t\ttransform: none;\r\n\t\t\t}\r\n\t\t\t&--3 {\r\n\t\t\t\twidth: 19.2rem;\r\n\t\t\t\theight: 22.8rem;\r\n\r\n\t\t\t\tbottom: 19.6rem;\r\n\t\t\t\tleft: -2.8rem;\r\n\t\t\t}\r\n\t\t\t&--6 {\r\n\t\t\t\twidth: 17.2rem;\r\n\t\t\t\theight: 24.8rem;\r\n\r\n\t\t\t\tbottom: 10.6rem;\r\n\t\t\t\tright: -3.2rem;\r\n\r\n\t\t\t\tclip-path: polygon(100% 0%, 100% 87%, 83% 100%, 0% 100%, 0% 10%, 22% 0%);\r\n\t\t\t}\r\n\t\t\t&--7 {\r\n\t\t\t\twidth: 38.2rem;\r\n\t\t\t\theight: 20rem;\r\n\r\n\t\t\t\ttop: 0;\r\n\t\t\t\tright: unset;\r\n\t\t\t\tleft: 0;\r\n\t\t\t\tclip-path: polygon(85% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 0%);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.about-business {\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .about-business__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\t\t// .about-business__content\r\n\t\t&__content {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .about-business__item\r\n\t\t&__item {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t// .about-business__text\r\n\t\t&__text {\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t\twidth: 65rem;\r\n\t\t\tmin-height: unset;\r\n\t\t}\r\n\t}\r\n\t.about-advantages {\r\n\t\tmargin-bottom: 31.8rem;\r\n\t\t// .about-advantages__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\t\t// .about-advantages__item\r\n\t\t&__item {\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\tpadding: 3.2rem 0;\r\n\t\t\tborder-bottom: 0.2rem solid rgba(36, 36, 36, 0.4);\r\n\r\n\t\t\t&:first-child {\r\n\t\t\t\tpadding: 0 0 3.2rem 0;\r\n\t\t\t\tgap: 7.2rem;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 19.4rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(2) {\r\n\t\t\t\tjustify-content: flex-end;\r\n\t\t\t\tgap: 4.8rem;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 25.6rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(3) {\r\n\t\t\t\tjustify-content: flex-start;\r\n\t\t\t\tgap: 4.8rem;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 22.2rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(4) {\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\tgap: unset;\r\n\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 22.8rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:nth-child(5) {\r\n\t\t\t\tjustify-content: flex-end;\r\n\t\t\t\tgap: 7.2rem;\r\n\t\t\t\t.about-advantages__text {\r\n\t\t\t\t\twidth: 23.8rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t&:last-child {\r\n\t\t\t\tpadding: 3.2rem 0 0 0;\r\n\t\t\t\tborder-bottom: none;\r\n\t\t\t\tjustify-content: flex-start;\r\n\t\t\t\twidth: 25.8rem;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .about-advantages__img\r\n\t\t&__img {\r\n\t\t\twidth: 24rem;\r\n\t\t\theight: 11.6rem;\r\n\t\t}\r\n\t\t// .about-advantages__text\r\n\t\t&__text {\r\n\t\t\tfont-size: 3.6rem;\r\n\t\t}\r\n\t\t// .about-advantages__btn\r\n\t\t&__btn {\r\n\t\t\tposition: absolute;\r\n\t\t\ttop: unset;\r\n\t\t\tleft: unset;\r\n\t\t\tbottom: -10.4rem;\r\n\t\t\tright: 9.8rem;\r\n\t\t}\r\n\t}\r\n\t.about-feedback {\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .about-feedback__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t}\r\n\t\t&__title {\r\n\t\t\tfont-weight: 800;\r\n\t\t\twidth: 85%;\r\n\t\t\tline-height: 100%;\r\n\t\t}\r\n\t\t// .about-feedback__main\r\n\t\t&__main {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 6.4rem;\r\n\t\t}\r\n\t\t// .about-feedback__left\r\n\t\t&__left {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: unset;\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 2.4rem;\r\n\t\t}\r\n\t\t// .about-feedback__description\r\n\t\t&__description {\r\n\t\t\twidth: 80%;\r\n\t\t}\r\n\t\t// .about-feedback__right\r\n\t\t&__right {\r\n\t\t\tflex: 0;\r\n\t\t}\r\n\t\t// .about-feedback__form\r\n\t\t&__form {\r\n\t\t\tmargin-top: 0;\r\n\t\t}\r\n\t}\r\n}\r\n",".projects {\r\n\tmargin-top: 5rem;\r\n\tmargin-bottom: 20rem;\r\n\t// .projects__header\r\n\t&__header {\r\n\t\tdisplay: flex;\r\n\t\talign-items: flex-end;\r\n\t\tjustify-content: space-between;\r\n\t\tgap: 1rem;\r\n\r\n\t\tmargin-bottom: 10rem;\r\n\t}\r\n\t// .projects__main\r\n\t&__main {\r\n\t\tcolumn-gap: 3rem;\r\n\t\trow-gap: 10.3rem;\r\n\t}\r\n}\r\n.projects-header {\r\n\t// .projects-header__title\r\n\t&__title {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 800;\r\n\t\tline-height: 100%; /* 80px */\r\n\r\n\t\twidth: 92.5rem;\r\n\t}\r\n}\r\n.category {\r\n\t&-btn {\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 2rem;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t\ttext-transform: uppercase;\r\n\r\n\t\ttransition: color 0.2s ease-out;\r\n\r\n\t\t&.show {\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\tcolor: #fe921f;\r\n\t\t\tsvg {\r\n\t\t\t\tpath {\r\n\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tspan {\r\n\t\t\t\ttransition: transform 0.2s ease-in;\r\n\t\t\t\ttransform: rotate(-180deg);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t&:hover,\r\n\t\t&:focus-visible {\r\n\t\t\ttransition: color 0.2s ease-out;\r\n\t\t\tcolor: #fe921f;\r\n\t\t\tsvg {\r\n\t\t\t\tpath {\r\n\t\t\t\t\ttransition: fill 0.2s ease-out;\r\n\t\t\t\t\tfill: #fe921f;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&-menu {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tbackground-color: #efefef;\r\n\t\tborder: 0.1rem solid #242424;\r\n\r\n\t\topacity: 0;\r\n\t\tvisibility: hidden;\r\n\t\ttransition:\r\n\t\t\topacity 0.2s linear,\r\n\t\t\tvisibility 0.1s linear 0.2s;\r\n\r\n\t\t&.show {\r\n\t\t\topacity: 1;\r\n\t\t\tvisibility: visible;\r\n\t\t\ttransition: opacity 0.2s linear;\r\n\t\t}\r\n\t\t// .category-menu__item\r\n\t\t&__item {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t}\r\n\t\t// .category-menu__text\r\n\t\t&__text {\r\n\t\t\tmargin-left: 1rem;\r\n\t\t}\r\n\t}\r\n}\r\n.projects-category {\r\n\tposition: relative;\r\n\t// .projects-category__btn\r\n\t&__btn {\r\n\t\tdisplay: flex;\r\n\t\talign-items: center;\r\n\t\tgap: 0.8rem;\r\n\r\n\t\tspan {\r\n\t\t\tdisplay: flex;\r\n\t\t\talign-items: center;\r\n\t\t\tjustify-content: center;\r\n\t\t\ttransition: transform 0.2s ease-in;\r\n\r\n\t\t\tsvg {\r\n\t\t\t\twidth: 1.2707rem;\r\n\t\t\t\theight: 0.7061rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t// .projects-category__menu\r\n\t&__menu {\r\n\t\tposition: absolute;\r\n\t\tright: 0;\r\n\t\ttop: 3.2rem;\r\n\t\tz-index: 1;\r\n\r\n\t\tpadding: 1.6rem;\r\n\t\twidth: 24.8rem;\r\n\t\tgap: 0.8rem;\r\n\t}\r\n}\r\n.projects-main {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(4, 38.3rem);\r\n}\r\n.projects-item {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\r\n\t&:hover {\r\n\t\timg {\r\n\t\t\ttransition: transform 0.5s linear;\r\n\t\t\ttransform: scale(105%);\r\n\t\t}\r\n\t}\r\n\r\n\t&--element {\r\n\t\tjustify-content: center;\r\n\t\talign-items: center;\r\n\t}\r\n\t// .projects-item__img\r\n\t&__img {\r\n\t\toverflow: hidden;\r\n\t\theight: 53rem;\r\n\t\tmargin-bottom: 2rem;\r\n\t\timg {\r\n\t\t\ttransition: transform 0.5s linear;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n\t// .projects-item__info\r\n\t&__info {\r\n\t\tgap: 1rem;\r\n\t\tmargin-bottom: 0.8rem;\r\n\t}\r\n\t// .projects-item__description\r\n\t&__description {\r\n\t\toverflow: hidden;\r\n\t\ttext-overflow: ellipsis;\r\n\t\tdisplay: -webkit-box;\r\n\t\t-webkit-line-clamp: 3;\r\n\t\t-webkit-box-orient: vertical;\r\n\t\theight: 7.2rem;\r\n\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Gilroy\";\r\n\t\tfont-size: 1.8rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 600;\r\n\t\tline-height: 2.4rem; /* 133.333% */\r\n\t}\r\n}\r\n.project-info {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\r\n\tfont-family: \"Gilroy\";\r\n\tfont-size: 1.8rem;\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tline-height: normal;\r\n\t// .project-info__name\r\n\t&__name {\r\n\t\tcolor: #e7284a;\r\n\t}\r\n\t// .project-info__date\r\n\t&__date {\r\n\t\tcolor: #242424;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.projects {\r\n\t\tmargin-top: 4rem;\r\n\t\tmargin-bottom: 37.2rem;\r\n\t\t// .projects__header\r\n\t\t&__header {\r\n\t\t\talign-items: flex-start;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: unset;\r\n\t\t\tgap: 6.4rem;\r\n\r\n\t\t\tmargin-bottom: 4.4rem;\r\n\t\t}\r\n\t\t// .projects__main\r\n\t\t&__main {\r\n\t\t\tcolumn-gap: unset;\r\n\t\t\trow-gap: 5.6rem;\r\n\t\t}\r\n\t}\r\n\t.projects-header {\r\n\t\t// .projects-header__title\r\n\t\t&__title {\r\n\t\t\tfont-size: 5.6rem;\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t}\r\n\t.category {\r\n\t\t&-btn {\r\n\t\t\tfont-size: 3.6rem;\r\n\t\t}\r\n\t\t&-menu {\r\n\t\t\tborder: none;\r\n\t\t\tborder-top: 0.2rem solid #c7c7c7;\r\n\t\t\t// .category-menu__text\r\n\t\t\t&__text {\r\n\t\t\t\tmargin-left: 2rem;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t.projects-category {\r\n\t\tposition: static;\r\n\t\t// .projects-category__btn\r\n\t\t&__btn {\r\n\t\t\tgap: 1.6rem;\r\n\r\n\t\t\tspan {\r\n\t\t\t\tsvg {\r\n\t\t\t\t\twidth: 2.4rem;\r\n\t\t\t\t\theight: 1.2rem;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .projects-category__menu\r\n\t\t&__menu {\r\n\t\t\tposition: fixed;\r\n\t\t\ttop: unset;\r\n\t\t\tbottom: 0;\r\n\t\t\tz-index: 1;\r\n\r\n\t\t\tpadding: 6.4rem 3.2rem;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: unset;\r\n\t\t\tgap: 1.6rem;\r\n\t\t}\r\n\t}\r\n\t.projects-main {\r\n\t\tgrid-template-columns: 100%;\r\n\t}\r\n\t.projects-item {\r\n\t\t// .projects-item__img\r\n\t\t&__img {\r\n\t\t\theight: 63.4rem;\r\n\t\t\tmargin-bottom: 4rem;\r\n\t\t}\r\n\t\t// .projects-item__info\r\n\t\t&__info {\r\n\t\t\tgap: 2rem;\r\n\t\t\tmargin-bottom: 1.6rem;\r\n\t\t}\r\n\t\t// .projects-item__description\r\n\t\t&__description {\r\n\t\t\theight: unset;\r\n\t\t\tfont-size: 3.2rem;\r\n\t\t\tline-height: normal; /* 133.333% */\r\n\t\t}\r\n\t}\r\n\t.project-info {\r\n\t\tfont-size: 3.2rem;\r\n\t}\r\n}\r\n",".contacts {\r\n\tmargin-top: 5rem;\r\n\tmargin-bottom: 20rem;\r\n\t// .contacts__inner\r\n\t&__inner {\r\n\t\tposition: relative;\r\n\t}\r\n\t// .contacts__title\r\n\t&__title {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tz-index: 1;\r\n\t}\r\n\t// .contacts__main\r\n\t&__main {\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: column;\r\n\t\tgap: 20rem;\r\n\t}\r\n\t// .contacts__item\r\n\t&__item {\r\n\t\theight: 70.7rem;\r\n\t}\r\n}\r\n.contacts-item {\r\n\tdisplay: flex;\r\n\talign-items: flex-end;\r\n\tjustify-content: space-between;\r\n\tposition: relative;\r\n\r\n\t&:nth-child(even) {\r\n\t\tjustify-content: flex-end;\r\n\t\t.contacts-item__info {\r\n\t\t\ttext-align: right;\r\n\t\t\talign-items: flex-end;\r\n\t\t}\r\n\r\n\t\t.contacts-item__img {\r\n\t\t\tleft: -15rem;\r\n\t\t}\r\n\r\n\t\t.contacts-item__btn {\r\n\t\t\tmargin-left: auto;\r\n\t\t}\r\n\t}\r\n\t// .contacts-item__info\r\n\t&__info {\r\n\t\twidth: 41.3rem;\r\n\r\n\t\tcolor: #242424;\r\n\t\tfont-family: \"Akrobat\";\r\n\t\tfont-size: 3.4rem;\r\n\t\tfont-style: normal;\r\n\t\tfont-weight: 700;\r\n\t\tline-height: normal;\r\n\t}\r\n\t&__address {\r\n\t\tmargin-bottom: 2rem;\r\n\t}\r\n\t&__phone {\r\n\t\tmargin-bottom: 2rem;\r\n\t\t&:hover {\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\t}\r\n\t// .contacts-item__mail\r\n\t&__mail {\r\n\t\tmargin-bottom: 4.8rem;\r\n\t\t&:hover {\r\n\t\t\ttext-decoration: underline;\r\n\t\t}\r\n\t}\r\n\t// .contacts-item__img\r\n\t&__img {\r\n\t\twidth: 108.3rem;\r\n\t\theight: 70.7rem;\r\n\r\n\t\tposition: absolute;\r\n\t\tright: -15rem;\r\n\t\ttop: 0;\r\n\r\n\t\timg {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tobject-fit: cover;\r\n\t\t}\r\n\t}\r\n}\r\n.contacts-feedback {\r\n\tmargin-bottom: 20rem;\r\n\t// .contacts-feedback__inner\r\n\t&__inner {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t}\r\n\t// .contacts-feedback__section\r\n\t&__section {\r\n\t\twidth: 55.3rem;\r\n\t}\r\n\t// .contacts-feedback__description\r\n\t&__description {\r\n\t\twidth: 29.4rem;\r\n\t}\r\n\t// .contacts-feedback__form\r\n\t&__form {\r\n\t\twidth: 79.4rem;\r\n\t\tmargin-top: 13rem;\r\n\t}\r\n}\r\n\r\n@media (max-width: 48em) {\r\n\t.contacts {\r\n\t\tmargin-top: 4rem;\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .contacts__title\r\n\t\t&__title {\r\n\t\t\tposition: static;\r\n\t\t}\r\n\t\t// .contacts__main\r\n\t\t&__main {\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .contacts__item\r\n\t\t&__item {\r\n\t\t\theight: unset;\r\n\t\t\tgap: 4rem;\r\n\t\t}\r\n\t}\r\n\t.contacts-item {\r\n\t\tflex-direction: column;\r\n\t\talign-items: flex-start;\r\n\r\n\t\t&:nth-child(even) {\r\n\t\t\tjustify-content: flex-start;\r\n\t\t\t.contacts-item__info {\r\n\t\t\t\ttext-align: left;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t}\r\n\r\n\t\t\t.contacts-item__img {\r\n\t\t\t\tleft: unset;\r\n\t\t\t}\r\n\r\n\t\t\t.contacts-item__btn {\r\n\t\t\t\tmargin-left: 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\t// .contacts-item__info\r\n\t\t&__info {\r\n\t\t\twidth: 100%;\r\n\t\t\tfont-size: 4.8rem;\r\n\t\t\torder: 2;\r\n\t\t}\r\n\t\t&__title {\r\n\t\t\tmargin-bottom: 2.4rem;\r\n\t\t}\r\n\t\t&__address {\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t}\r\n\t\t&__phone {\r\n\t\t\tmargin-bottom: 3.2rem;\r\n\t\t}\r\n\t\t// .contacts-item__btn\r\n\t\t&__btn {\r\n\t\t}\r\n\t\t// .contacts-item__img\r\n\t\t&__img {\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 43rem;\r\n\r\n\t\t\tposition: static;\r\n\t\t\torder: 1;\r\n\t\t}\r\n\t}\r\n\t.contacts-feedback {\r\n\t\tmargin-bottom: 18rem;\r\n\t\t// .contacts-feedback__inner\r\n\t\t&__inner {\r\n\t\t\tflex-direction: column;\r\n\t\t\tgap: 5.6rem;\r\n\t\t}\r\n\t\t// .contacts-item__mail\r\n\t\t&__mail {\r\n\t\t\tmargin-bottom: 7.2rem;\r\n\t\t}\r\n\t\t// .contacts-feedback__section\r\n\t\t&__section {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\t\t// .contacts-feedback__description\r\n\t\t&__description {\r\n\t\t\twidth: 58.8rem;\r\n\t\t}\r\n\t\t// .contacts-feedback__form\r\n\t\t&__form {\r\n\t\t\twidth: 100%;\r\n\t\t\tmargin-top: 0;\r\n\t\t}\r\n\t}\r\n}\r\n","@import \"style/fonts\";\r\n@import \"style/libs/set\";\r\n@import \"style/style\";\r\n@import \"style/components/header\";\r\n@import \"style/components/footer\";\r\n@import \"style/components/modal\";\r\n@import \"style/pages/home\";\r\n@import \"style/pages/about\";\r\n@import \"style/pages/projects\";\r\n@import \"style/pages/contacts\";\r\n\r\n.mobile {\r\n\tdisplay: none;\r\n}\r\n@media (max-width: 48em) {\r\n\t.desktop {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.mobile {\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _js_components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/components/header */ "./src/js/components/header.js");
/* harmony import */ var _js_components_header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_components_header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/components/footer */ "./src/js/components/footer.js");
/* harmony import */ var _js_components_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_components_footer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/components/form */ "./src/js/components/form.js");
/* harmony import */ var _js_components_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_components_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _js_components_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_components_modal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_pages_home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/pages/home */ "./src/js/pages/home.js");
/* harmony import */ var _js_pages_home__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_pages_home__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _js_pages_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/pages/projects */ "./src/js/pages/projects.js");
/* harmony import */ var _js_pages_projects__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_pages_projects__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");








// import './js/utils/map';

})();

/******/ })()
;
//# sourceMappingURL=main.js.map