"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["carousel-small"],{

/***/ "./assets/scripts/carousel/carousel-functions.js":
/*!*******************************************************!*\
  !*** ./assets/scripts/carousel/carousel-functions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setHorizontalCarousel: () => (/* binding */ setHorizontalCarousel),
/* harmony export */   setVerticalCarousel: () => (/* binding */ setVerticalCarousel)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);

// CAROUSEL FUNCTIONS

function setVerticalCarousel(slideHeight, carousel, sliderBtns, currentSlide, responseTime) {
  var _loop = function _loop(i) {
    sliderBtns[i].addEventListener("click", function () {
      carousel.scrollTo({
        top: slideHeight * i
      });
      document.querySelector('.' + currentSlide).classList.toggle(currentSlide);
      sliderBtns[i].classList.toggle(currentSlide);
    });
  };
  for (var i = 0; i < sliderBtns.length; i++) {
    _loop(i);
  }
  carousel.addEventListener("scroll", function (e) {
    setTimeout(function () {
      for (var _i = 0; _i < sliderBtns.length; _i++) {
        if (carousel.scrollTop > slideHeight * _i - 1 && carousel.scrollTop < slideHeight * _i + 1) {
          document.querySelector('.' + currentSlide).classList.toggle(currentSlide);
          sliderBtns[_i].classList.toggle(currentSlide);
        }
      }
    }, responseTime);
  });
}
function setHorizontalCarousel(slideWidth, carousel, sliderBtns, currentSlide, responseTime) {
  var _loop2 = function _loop2(i) {
    sliderBtns[i].addEventListener("click", function () {
      carousel.scrollTo({
        left: slideWidth * i
      });
      document.querySelector('.' + currentSlide).classList.toggle(currentSlide);
      sliderBtns[i].classList.toggle(currentSlide);
    });
  };
  for (var i = 0; i < sliderBtns.length; i++) {
    _loop2(i);
  }
  carousel.addEventListener("scroll", function (e) {
    setTimeout(function () {
      for (var _i2 = sliderBtns.length - 1; _i2 >= 0; _i2--) {
        if (carousel.scrollLeft < slideWidth * _i2 + 1 && carousel.scrollLeft > slideWidth * _i2 - 1) {
          document.querySelector('.' + currentSlide).classList.toggle(currentSlide);
          sliderBtns[_i2].classList.toggle(currentSlide);
        }
      }
    }, responseTime);
  });
}

/***/ }),

/***/ "./assets/scripts/carousel/carousel-small.js":
/*!***************************************************!*\
  !*** ./assets/scripts/carousel/carousel-small.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-functions */ "./assets/scripts/carousel/carousel-functions.js");


// SLIDER BTN DETAILED GAME

var slideHeight = document.querySelector("#detailed-game-one").clientHeight + 50;
var carousel = document.querySelector(".carousel");
var sliderBtns = document.querySelectorAll('.slider .slider-btn');
(0,_carousel_functions__WEBPACK_IMPORTED_MODULE_0__.setVerticalCarousel)(slideHeight, carousel, sliderBtns, 'current-slide', 380);

// SLIDER BTN PICTURE

var carouselPicture = document.querySelector("#carousel-pictures");
var sliderPictureBtns = document.querySelectorAll("#slider-pictures .slider-picture-btn");
if (window.matchMedia("(min-width: 1366px)").matches) {
  // DESKTOP - NORMAL SLIDER (VERTICAL)
  var slidePictureHeight = document.querySelector("li.pictures").clientHeight + 24;
  (0,_carousel_functions__WEBPACK_IMPORTED_MODULE_0__.setVerticalCarousel)(slidePictureHeight, carouselPicture, sliderPictureBtns, "current-slide-picture", 180);
} else {
  // MOBILE - HORIZONTAL SLIDER
  var slidePictureWidth = document.querySelector("li.pictures").clientWidth + 24;
  (0,_carousel_functions__WEBPACK_IMPORTED_MODULE_0__.setHorizontalCarousel)(slidePictureWidth, carouselPicture, sliderPictureBtns, "current-slide-picture", 180);
}

/***/ }),

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-bun.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-bun.js ***!
  \*********************************************************/
/***/ ((module) => {


/* global Bun -- Bun case */
module.exports = typeof Bun == 'function' && Bun && typeof Bun.version == 'string';


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/schedulers-fix.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/schedulers-fix.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var ENGINE_IS_BUN = __webpack_require__(/*! ../internals/engine-is-bun */ "./node_modules/core-js/internals/engine-is-bun.js");
var USER_AGENT = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "./node_modules/core-js/internals/validate-arguments-length.js");

var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && (function () {
  var version = global.Bun.version.split('.');
  return version.length < 3 || version[0] === '0' && (version[1] < 3 || version[1] === '3' && version[2] === '0');
})();

// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function (scheduler, hasTimeArg) {
  var firstParamIndex = hasTimeArg ? 2 : 1;
  return WRAP ? function (handler, timeout /* , ...arguments */) {
    var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
    var fn = isCallable(handler) ? handler : Function(handler);
    var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
    var callback = boundArgs ? function () {
      apply(fn, this, params);
    } : fn;
    return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
  } : scheduler;
};


/***/ }),

/***/ "./node_modules/core-js/internals/validate-arguments-length.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
/***/ ((module) => {


var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw new $TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-interval.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-interval.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setInterval = schedulersFix(global.setInterval, true);

// Bun / IE9- setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
$({ global: true, bind: true, forced: global.setInterval !== setInterval }, {
  setInterval: setInterval
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.set-timeout.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/web.set-timeout.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var schedulersFix = __webpack_require__(/*! ../internals/schedulers-fix */ "./node_modules/core-js/internals/schedulers-fix.js");

var setTimeout = schedulersFix(global.setTimeout, true);

// Bun / IE9- setTimeout additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
$({ global: true, bind: true, forced: global.setTimeout !== setTimeout }, {
  setTimeout: setTimeout
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(/*! ../modules/web.set-interval */ "./node_modules/core-js/modules/web.set-interval.js");
__webpack_require__(/*! ../modules/web.set-timeout */ "./node_modules/core-js/modules/web.set-timeout.js");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js"], () => (__webpack_exec__("./assets/scripts/carousel/carousel-small.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUMxQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNFQUFzRTtBQUMxRTtBQUNBLENBQUM7Ozs7Ozs7Ozs7O0FDWFk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxvRUFBb0U7QUFDeEU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1hZO0FBQ2I7QUFDQSxtQkFBTyxDQUFDLHVGQUE2QjtBQUNyQyxtQkFBTyxDQUFDLHFGQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2Nhcm91c2VsL2Nhcm91c2VsLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jYXJvdXNlbC9jYXJvdXNlbC1zbWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1idW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuc2V0LXRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENBUk9VU0VMIEZVTkNUSU9OU1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0VmVydGljYWxDYXJvdXNlbChzbGlkZUhlaWdodCwgY2Fyb3VzZWwsIHNsaWRlckJ0bnMsIGN1cnJlbnRTbGlkZSwgcmVzcG9uc2VUaW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2xpZGVyQnRucy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgc2xpZGVyQnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2Fyb3VzZWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogc2xpZGVIZWlnaHQgKiBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3VycmVudFNsaWRlKS5jbGFzc0xpc3QudG9nZ2xlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICBzbGlkZXJCdG5zW2ldLmNsYXNzTGlzdC50b2dnbGUoY3VycmVudFNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGNhcm91c2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2xpZGVyQnRucy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2Fyb3VzZWwuc2Nyb2xsVG9wID4gc2xpZGVIZWlnaHQgKiBpIC0gMSAmJiBjYXJvdXNlbC5zY3JvbGxUb3AgPCBzbGlkZUhlaWdodCAqIGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3VycmVudFNsaWRlKS5jbGFzc0xpc3QudG9nZ2xlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckJ0bnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgcmVzcG9uc2VUaW1lKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvcml6b250YWxDYXJvdXNlbChzbGlkZVdpZHRoLCBjYXJvdXNlbCwgc2xpZGVyQnRucywgY3VycmVudFNsaWRlLCByZXNwb25zZVRpbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBzbGlkZXJCdG5zLmxlbmd0aCA7IGkrKykge1xuICAgICAgICBzbGlkZXJCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjYXJvdXNlbC5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgbGVmdDogc2xpZGVXaWR0aCAqIGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjdXJyZW50U2xpZGUpLmNsYXNzTGlzdC50b2dnbGUoY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIHNsaWRlckJ0bnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShjdXJyZW50U2xpZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAoc2xpZGVyQnRucy5sZW5ndGggLSAxKSA7IGkgPj0gMCA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChjYXJvdXNlbC5zY3JvbGxMZWZ0IDwgc2xpZGVXaWR0aCAqIGkgKyAxICYmIGNhcm91c2VsLnNjcm9sbExlZnQgPiBzbGlkZVdpZHRoICogaSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBjdXJyZW50U2xpZGUpLmNsYXNzTGlzdC50b2dnbGUoY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyQnRuc1tpXS5jbGFzc0xpc3QudG9nZ2xlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCByZXNwb25zZVRpbWUpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgc2V0VmVydGljYWxDYXJvdXNlbCwgc2V0SG9yaXpvbnRhbENhcm91c2VsIH0gZnJvbSBcIi4vY2Fyb3VzZWwtZnVuY3Rpb25zXCI7XG5cbi8vIFNMSURFUiBCVE4gREVUQUlMRUQgR0FNRVxuXG5jb25zdCBzbGlkZUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsZWQtZ2FtZS1vbmVcIikuY2xpZW50SGVpZ2h0ICsgNTA7XG5jb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2Fyb3VzZWxcIik7XG5jb25zdCBzbGlkZXJCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlciAuc2xpZGVyLWJ0bicpO1xuXG5zZXRWZXJ0aWNhbENhcm91c2VsKHNsaWRlSGVpZ2h0LCBjYXJvdXNlbCwgc2xpZGVyQnRucywgJ2N1cnJlbnQtc2xpZGUnLCAzODApO1xuXG4vLyBTTElERVIgQlROIFBJQ1RVUkVcblxuY29uc3QgY2Fyb3VzZWxQaWN0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJvdXNlbC1waWN0dXJlc1wiKTtcbmNvbnN0IHNsaWRlclBpY3R1cmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzbGlkZXItcGljdHVyZXMgLnNsaWRlci1waWN0dXJlLWJ0blwiKTtcblxuaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTM2NnB4KVwiKS5tYXRjaGVzKSB7XG5cbiAgICAvLyBERVNLVE9QIC0gTk9STUFMIFNMSURFUiAoVkVSVElDQUwpXG4gICAgY29uc3Qgc2xpZGVQaWN0dXJlSGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLnBpY3R1cmVzXCIpLmNsaWVudEhlaWdodCArIDI0O1xuXG4gICAgc2V0VmVydGljYWxDYXJvdXNlbChzbGlkZVBpY3R1cmVIZWlnaHQsIGNhcm91c2VsUGljdHVyZSwgc2xpZGVyUGljdHVyZUJ0bnMsIFwiY3VycmVudC1zbGlkZS1waWN0dXJlXCIsIDE4MCk7XG5cbn0gZWxzZSB7XG5cbiAgICAvLyBNT0JJTEUgLSBIT1JJWk9OVEFMIFNMSURFUlxuICAgIGNvbnN0IHNsaWRlUGljdHVyZVdpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpLnBpY3R1cmVzXCIpLmNsaWVudFdpZHRoICsgMjQ7XG5cbiAgICBzZXRIb3Jpem9udGFsQ2Fyb3VzZWwoc2xpZGVQaWN0dXJlV2lkdGgsIGNhcm91c2VsUGljdHVyZSwgc2xpZGVyUGljdHVyZUJ0bnMsIFwiY3VycmVudC1zbGlkZS1waWN0dXJlXCIsIDE4MCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoW10uc2xpY2UpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyogZ2xvYmFsIEJ1biAtLSBCdW4gY2FzZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgQnVuID09ICdmdW5jdGlvbicgJiYgQnVuICYmIHR5cGVvZiBCdW4udmVyc2lvbiA9PSAnc3RyaW5nJztcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgYXBwbHkgPSBGdW5jdGlvblByb3RvdHlwZS5hcHBseTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLXJlZmxlY3QgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgUmVmbGVjdCA9PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmFwcGx5IHx8IChOQVRJVkVfQklORCA/IGNhbGwuYmluZChhcHBseSkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGFwcGx5LCBhcmd1bWVudHMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGFwcGx5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWFwcGx5Jyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIEVOR0lORV9JU19CVU4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bicpO1xudmFyIFVTRVJfQUdFTlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcbnZhciBhcnJheVNsaWNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNsaWNlJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgRnVuY3Rpb24gPSBnbG9iYWwuRnVuY3Rpb247XG4vLyBkaXJ0eSBJRTktIGFuZCBCdW4gMC4zLjAtIGNoZWNrc1xudmFyIFdSQVAgPSAvTVNJRSAuXFwuLy50ZXN0KFVTRVJfQUdFTlQpIHx8IEVOR0lORV9JU19CVU4gJiYgKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlcnNpb24gPSBnbG9iYWwuQnVuLnZlcnNpb24uc3BsaXQoJy4nKTtcbiAgcmV0dXJuIHZlcnNpb24ubGVuZ3RoIDwgMyB8fCB2ZXJzaW9uWzBdID09PSAnMCcgJiYgKHZlcnNpb25bMV0gPCAzIHx8IHZlcnNpb25bMV0gPT09ICczJyAmJiB2ZXJzaW9uWzJdID09PSAnMCcpO1xufSkoKTtcblxuLy8gSUU5LSAvIEJ1biAwLjMuMC0gc2V0VGltZW91dCAvIHNldEludGVydmFsIC8gc2V0SW1tZWRpYXRlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3RpbWVycy1hbmQtdXNlci1wcm9tcHRzLmh0bWwjdGltZXJzXG4vLyBodHRwczovL2dpdGh1Yi5jb20vb3Zlbi1zaC9idW4vaXNzdWVzLzE2MzNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaGFzVGltZUFyZykge1xuICB2YXIgZmlyc3RQYXJhbUluZGV4ID0gaGFzVGltZUFyZyA/IDIgOiAxO1xuICByZXR1cm4gV1JBUCA/IGZ1bmN0aW9uIChoYW5kbGVyLCB0aW1lb3V0IC8qICwgLi4uYXJndW1lbnRzICovKSB7XG4gICAgdmFyIGJvdW5kQXJncyA9IHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGFyZ3VtZW50cy5sZW5ndGgsIDEpID4gZmlyc3RQYXJhbUluZGV4O1xuICAgIHZhciBmbiA9IGlzQ2FsbGFibGUoaGFuZGxlcikgPyBoYW5kbGVyIDogRnVuY3Rpb24oaGFuZGxlcik7XG4gICAgdmFyIHBhcmFtcyA9IGJvdW5kQXJncyA/IGFycmF5U2xpY2UoYXJndW1lbnRzLCBmaXJzdFBhcmFtSW5kZXgpIDogW107XG4gICAgdmFyIGNhbGxiYWNrID0gYm91bmRBcmdzID8gZnVuY3Rpb24gKCkge1xuICAgICAgYXBwbHkoZm4sIHRoaXMsIHBhcmFtcyk7XG4gICAgfSA6IGZuO1xuICAgIHJldHVybiBoYXNUaW1lQXJnID8gc2NoZWR1bGVyKGNhbGxiYWNrLCB0aW1lb3V0KSA6IHNjaGVkdWxlcihjYWxsYmFjayk7XG4gIH0gOiBzY2hlZHVsZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhc3NlZCwgcmVxdWlyZWQpIHtcbiAgaWYgKHBhc3NlZCA8IHJlcXVpcmVkKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignTm90IGVub3VnaCBhcmd1bWVudHMnKTtcbiAgcmV0dXJuIHBhc3NlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0SW50ZXJ2YWwgPSBzY2hlZHVsZXJzRml4KGdsb2JhbC5zZXRJbnRlcnZhbCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0aW50ZXJ2YWxcbiQoeyBnbG9iYWw6IHRydWUsIGJpbmQ6IHRydWUsIGZvcmNlZDogZ2xvYmFsLnNldEludGVydmFsICE9PSBzZXRJbnRlcnZhbCB9LCB7XG4gIHNldEludGVydmFsOiBzZXRJbnRlcnZhbFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2NoZWR1bGVyc0ZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zY2hlZHVsZXJzLWZpeCcpO1xuXG52YXIgc2V0VGltZW91dCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldFRpbWVvdXQsIHRydWUpO1xuXG4vLyBCdW4gLyBJRTktIHNldFRpbWVvdXQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCNkb20tc2V0dGltZW91dFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0VGltZW91dCAhPT0gc2V0VGltZW91dCB9LCB7XG4gIHNldFRpbWVvdXQ6IHNldFRpbWVvdXRcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIHRoaXMgbW9kdWxlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBzcGxpdCB0byBtb2R1bGVzIGxpc3RlZCBiZWxvd1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuc2V0LWludGVydmFsJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtdGltZW91dCcpO1xuIl0sIm5hbWVzIjpbInNldFZlcnRpY2FsQ2Fyb3VzZWwiLCJzbGlkZUhlaWdodCIsImNhcm91c2VsIiwic2xpZGVyQnRucyIsImN1cnJlbnRTbGlkZSIsInJlc3BvbnNlVGltZSIsIl9sb29wIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInRvcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxlbmd0aCIsImUiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwic2V0SG9yaXpvbnRhbENhcm91c2VsIiwic2xpZGVXaWR0aCIsIl9sb29wMiIsImxlZnQiLCJzY3JvbGxMZWZ0IiwiY2xpZW50SGVpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsImNhcm91c2VsUGljdHVyZSIsInNsaWRlclBpY3R1cmVCdG5zIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJzbGlkZVBpY3R1cmVIZWlnaHQiLCJzbGlkZVBpY3R1cmVXaWR0aCIsImNsaWVudFdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==