"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["carousel-big"],{

/***/ "./assets/scripts/carousel/carousel-big.js":
/*!*************************************************!*\
  !*** ./assets/scripts/carousel/carousel-big.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel-functions */ "./assets/scripts/carousel/carousel-functions.js");

var slideHeight = document.querySelector("li.slide").clientHeight + 50;
var carousel = document.querySelector("ul.carousel");
var sliderBtns = document.querySelectorAll('nav.slider .slider-btn');
(0,_carousel_functions__WEBPACK_IMPORTED_MODULE_0__.setVerticalCarousel)(slideHeight, carousel, sliderBtns, 'current-slide', 500);

/***/ }),

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js"], () => (__webpack_exec__("./assets/scripts/carousel/carousel-big.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsbUJBQU8sQ0FBQyxxRkFBNEI7QUFDeEQsaUJBQWlCLG1CQUFPLENBQUMsNkZBQWdDO0FBQ3pELGlCQUFpQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNuRCw4QkFBOEIsbUJBQU8sQ0FBQyw2R0FBd0M7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7Ozs7Ozs7Ozs7O0FDOUJhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTmE7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDMUMsb0JBQW9CLG1CQUFPLENBQUMsdUZBQTZCOztBQUV6RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzRUFBc0U7QUFDMUU7QUFDQSxDQUFDOzs7Ozs7Ozs7OztBQ1hZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLHVGQUE2Qjs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBLElBQUksb0VBQW9FO0FBQ3hFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUNYWTtBQUNiO0FBQ0EsbUJBQU8sQ0FBQyx1RkFBNkI7QUFDckMsbUJBQU8sQ0FBQyxxRkFBNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9jYXJvdXNlbC9jYXJvdXNlbC1iaWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvY2Fyb3VzZWwvY2Fyb3VzZWwtZnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zbGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLWlzLWJ1bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnNldC1pbnRlcnZhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5zZXQtdGltZW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2V0VmVydGljYWxDYXJvdXNlbCB9IGZyb20gXCIuL2Nhcm91c2VsLWZ1bmN0aW9uc1wiO1xuXG5jb25zdCBzbGlkZUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaS5zbGlkZVwiKS5jbGllbnRIZWlnaHQgKyA1MDtcbmNvbnN0IGNhcm91c2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsLmNhcm91c2VsXCIpO1xuY29uc3Qgc2xpZGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdi5zbGlkZXIgLnNsaWRlci1idG4nKTtcblxuc2V0VmVydGljYWxDYXJvdXNlbChzbGlkZUhlaWdodCwgY2Fyb3VzZWwsIHNsaWRlckJ0bnMsICdjdXJyZW50LXNsaWRlJywgNTAwKTsiLCIvLyBDQVJPVVNFTCBGVU5DVElPTlNcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZlcnRpY2FsQ2Fyb3VzZWwoc2xpZGVIZWlnaHQsIGNhcm91c2VsLCBzbGlkZXJCdG5zLCBjdXJyZW50U2xpZGUsIHJlc3BvbnNlVGltZSkge1xuICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNsaWRlckJ0bnMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgIHNsaWRlckJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNhcm91c2VsLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICB0b3A6IHNsaWRlSGVpZ2h0ICogaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGN1cnJlbnRTbGlkZSkuY2xhc3NMaXN0LnRvZ2dsZShjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgc2xpZGVyQnRuc1tpXS5jbGFzc0xpc3QudG9nZ2xlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBjYXJvdXNlbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHNsaWRlckJ0bnMubGVuZ3RoIDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhcm91c2VsLnNjcm9sbFRvcCA+IHNsaWRlSGVpZ2h0ICogaSAtIDEgJiYgY2Fyb3VzZWwuc2Nyb2xsVG9wIDwgc2xpZGVIZWlnaHQgKiBpICsgMSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGN1cnJlbnRTbGlkZSkuY2xhc3NMaXN0LnRvZ2dsZShjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXJCdG5zW2ldLmNsYXNzTGlzdC50b2dnbGUoY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHJlc3BvbnNlVGltZSk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRIb3Jpem9udGFsQ2Fyb3VzZWwoc2xpZGVXaWR0aCwgY2Fyb3VzZWwsIHNsaWRlckJ0bnMsIGN1cnJlbnRTbGlkZSwgcmVzcG9uc2VUaW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgc2xpZGVyQnRucy5sZW5ndGggOyBpKyspIHtcbiAgICAgICAgc2xpZGVyQnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2Fyb3VzZWwuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHNsaWRlV2lkdGggKiBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3VycmVudFNsaWRlKS5jbGFzc0xpc3QudG9nZ2xlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICBzbGlkZXJCdG5zW2ldLmNsYXNzTGlzdC50b2dnbGUoY3VycmVudFNsaWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2Fyb3VzZWwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gKHNsaWRlckJ0bnMubGVuZ3RoIC0gMSkgOyBpID49IDAgOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2Fyb3VzZWwuc2Nyb2xsTGVmdCA8IHNsaWRlV2lkdGggKiBpICsgMSAmJiBjYXJvdXNlbC5zY3JvbGxMZWZ0ID4gc2xpZGVXaWR0aCAqIGkgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgY3VycmVudFNsaWRlKS5jbGFzc0xpc3QudG9nZ2xlKGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckJ0bnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShjdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgcmVzcG9uc2VUaW1lKTtcbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyhbXS5zbGljZSk7XG4iLCIndXNlIHN0cmljdCc7XG4vKiBnbG9iYWwgQnVuIC0tIEJ1biBjYXNlICovXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBCdW4gPT0gJ2Z1bmN0aW9uJyAmJiBCdW4gJiYgdHlwZW9mIEJ1bi52ZXJzaW9uID09ICdzdHJpbmcnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBhcHBseSA9IEZ1bmN0aW9uUHJvdG90eXBlLmFwcGx5O1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tcmVmbGVjdCAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBSZWZsZWN0ID09ICdvYmplY3QnICYmIFJlZmxlY3QuYXBwbHkgfHwgKE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGFwcGx5KSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoYXBwbHksIGFyZ3VtZW50cyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYXBwbHknKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgRU5HSU5FX0lTX0JVTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtYnVuJyk7XG52YXIgVVNFUl9BR0VOVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xudmFyIGFycmF5U2xpY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2xpY2UnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciBGdW5jdGlvbiA9IGdsb2JhbC5GdW5jdGlvbjtcbi8vIGRpcnR5IElFOS0gYW5kIEJ1biAwLjMuMC0gY2hlY2tzXG52YXIgV1JBUCA9IC9NU0lFIC5cXC4vLnRlc3QoVVNFUl9BR0VOVCkgfHwgRU5HSU5FX0lTX0JVTiAmJiAoZnVuY3Rpb24gKCkge1xuICB2YXIgdmVyc2lvbiA9IGdsb2JhbC5CdW4udmVyc2lvbi5zcGxpdCgnLicpO1xuICByZXR1cm4gdmVyc2lvbi5sZW5ndGggPCAzIHx8IHZlcnNpb25bMF0gPT09ICcwJyAmJiAodmVyc2lvblsxXSA8IDMgfHwgdmVyc2lvblsxXSA9PT0gJzMnICYmIHZlcnNpb25bMl0gPT09ICcwJyk7XG59KSgpO1xuXG4vLyBJRTktIC8gQnVuIDAuMy4wLSBzZXRUaW1lb3V0IC8gc2V0SW50ZXJ2YWwgLyBzZXRJbW1lZGlhdGUgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGltZXJzLWFuZC11c2VyLXByb21wdHMuaHRtbCN0aW1lcnNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9vdmVuLXNoL2J1bi9pc3N1ZXMvMTYzM1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBoYXNUaW1lQXJnKSB7XG4gIHZhciBmaXJzdFBhcmFtSW5kZXggPSBoYXNUaW1lQXJnID8gMiA6IDE7XG4gIHJldHVybiBXUkFQID8gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gdmFsaWRhdGVBcmd1bWVudHNMZW5ndGgoYXJndW1lbnRzLmxlbmd0aCwgMSkgPiBmaXJzdFBhcmFtSW5kZXg7XG4gICAgdmFyIGZuID0gaXNDYWxsYWJsZShoYW5kbGVyKSA/IGhhbmRsZXIgOiBGdW5jdGlvbihoYW5kbGVyKTtcbiAgICB2YXIgcGFyYW1zID0gYm91bmRBcmdzID8gYXJyYXlTbGljZShhcmd1bWVudHMsIGZpcnN0UGFyYW1JbmRleCkgOiBbXTtcbiAgICB2YXIgY2FsbGJhY2sgPSBib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICBhcHBseShmbiwgdGhpcywgcGFyYW1zKTtcbiAgICB9IDogZm47XG4gICAgcmV0dXJuIGhhc1RpbWVBcmcgPyBzY2hlZHVsZXIoY2FsbGJhY2ssIHRpbWVvdXQpIDogc2NoZWR1bGVyKGNhbGxiYWNrKTtcbiAgfSA6IHNjaGVkdWxlcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRJbnRlcnZhbCA9IHNjaGVkdWxlcnNGaXgoZ2xvYmFsLnNldEludGVydmFsLCB0cnVlKTtcblxuLy8gQnVuIC8gSUU5LSBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBnbG9iYWwuc2V0SW50ZXJ2YWwgIT09IHNldEludGVydmFsIH0sIHtcbiAgc2V0SW50ZXJ2YWw6IHNldEludGVydmFsXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzY2hlZHVsZXJzRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NjaGVkdWxlcnMtZml4Jyk7XG5cbnZhciBzZXRUaW1lb3V0ID0gc2NoZWR1bGVyc0ZpeChnbG9iYWwuc2V0VGltZW91dCwgdHJ1ZSk7XG5cbi8vIEJ1biAvIElFOS0gc2V0VGltZW91dCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4kKHsgZ2xvYmFsOiB0cnVlLCBiaW5kOiB0cnVlLCBmb3JjZWQ6IGdsb2JhbC5zZXRUaW1lb3V0ICE9PSBzZXRUaW1lb3V0IH0sIHtcbiAgc2V0VGltZW91dDogc2V0VGltZW91dFxufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgdGhpcyBtb2R1bGUgZnJvbSBgY29yZS1qc0A0YCBzaW5jZSBpdCdzIHNwbGl0IHRvIG1vZHVsZXMgbGlzdGVkIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5zZXQtaW50ZXJ2YWwnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLnNldC10aW1lb3V0Jyk7XG4iXSwibmFtZXMiOlsic2V0VmVydGljYWxDYXJvdXNlbCIsInNsaWRlSGVpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xpZW50SGVpZ2h0IiwiY2Fyb3VzZWwiLCJzbGlkZXJCdG5zIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnRTbGlkZSIsInJlc3BvbnNlVGltZSIsIl9sb29wIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInRvcCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImxlbmd0aCIsImUiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwic2V0SG9yaXpvbnRhbENhcm91c2VsIiwic2xpZGVXaWR0aCIsIl9sb29wMiIsImxlZnQiLCJzY3JvbGxMZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==