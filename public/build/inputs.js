(self["webpackChunk"] = self["webpackChunk"] || []).push([["inputs"],{

/***/ "./assets/scripts/inputs.js":
/*!**********************************!*\
  !*** ./assets/scripts/inputs.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var fields = document.querySelectorAll("input");
function focusField(fields) {
  var _iterator = _createForOfIteratorHelper(fields),
    _step;
  try {
    var _loop = function _loop() {
      var field = _step.value;
      var placeholder = field.placeholder;
      field.addEventListener('focusin', function () {
        field.setAttribute('placeholder', '//');
      });
      field.addEventListener('focusout', function () {
        field.setAttribute('placeholder', placeholder);
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
focusField(fields);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_export_js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_s-6657b7","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-8c241a"], () => (__webpack_exec__("./assets/scripts/inputs.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0FBRWpELFNBQVNDLFVBQVVBLENBQUNILE1BQU0sRUFBRTtFQUFBLElBQUFJLFNBQUEsR0FBQUMsMEJBQUEsQ0FDTkwsTUFBTTtJQUFBTSxLQUFBO0VBQUE7SUFBQSxJQUFBQyxLQUFBLFlBQUFBLE1BQUEsRUFBRTtNQUFBLElBQWpCQyxLQUFLLEdBQUFGLEtBQUEsQ0FBQUcsS0FBQTtNQUNWLElBQUlDLFdBQVcsR0FBR0YsS0FBSyxDQUFDRSxXQUFXO01BQ25DRixLQUFLLENBQUNHLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFXO1FBQ3pDSCxLQUFLLENBQUNJLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDO01BQzNDLENBQUMsQ0FBQztNQUNGSixLQUFLLENBQUNHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFVO1FBQ3pDSCxLQUFLLENBQUNJLFlBQVksQ0FBQyxhQUFhLEVBQUVGLFdBQVcsQ0FBQztNQUNsRCxDQUFDLENBQUM7SUFDTixDQUFDO0lBUkQsS0FBQU4sU0FBQSxDQUFBUyxDQUFBLE1BQUFQLEtBQUEsR0FBQUYsU0FBQSxDQUFBVSxDQUFBLElBQUFDLElBQUE7TUFBQVIsS0FBQTtJQUFBO0VBUUMsU0FBQVMsR0FBQTtJQUFBWixTQUFBLENBQUFhLENBQUEsQ0FBQUQsR0FBQTtFQUFBO0lBQUFaLFNBQUEsQ0FBQWMsQ0FBQTtFQUFBO0FBQ0w7QUFFQWYsVUFBVSxDQUFDSCxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9pbnB1dHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xuXG5mdW5jdGlvbiBmb2N1c0ZpZWxkKGZpZWxkcykge1xuICAgIGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBmaWVsZC5wbGFjZWhvbGRlcjtcbiAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcvLycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mb2N1c0ZpZWxkKGZpZWxkcyk7XG4iXSwibmFtZXMiOlsiZmllbGRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9jdXNGaWVsZCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJfbG9vcCIsImZpZWxkIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRBdHRyaWJ1dGUiLCJzIiwibiIsImRvbmUiLCJlcnIiLCJlIiwiZiJdLCJzb3VyY2VSb290IjoiIn0=