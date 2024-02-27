(self["webpackChunk"] = self["webpackChunk"] || []).push([["toggle"],{

/***/ "./assets/scripts/toggle.js":
/*!**********************************!*\
  !*** ./assets/scripts/toggle.js ***!
  \**********************************/
/***/ (() => {

function toggleInput(toggleSelector, inputSelector, formSelector) {
  var isVisibleToggle = document.querySelector(toggleSelector);
  var isVisibleInput = document.querySelector(inputSelector);
  var form = document.querySelector(formSelector);
  isVisibleToggle.addEventListener('click', function () {
    isVisibleToggle.classList.toggle('checked');
    if (isVisibleToggle.classList.contains('checked')) {
      isVisibleInput.setAttribute('value', 1);
    } else {
      isVisibleInput.setAttribute('value', 0);
    }
    form.submit();
  });
}
toggleInput('#toggle input.switch', 'input.isVisible', 'form');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/scripts/toggle.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBV0EsQ0FBQ0MsY0FBYyxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFDaEU7RUFDSSxJQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDTCxjQUFjLENBQUM7RUFDOUQsSUFBTU0sY0FBYyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQ0osYUFBYSxDQUFDO0VBQzVELElBQU1NLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUNILFlBQVksQ0FBQztFQUVqREMsZUFBZSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBVztJQUNqREwsZUFBZSxDQUFDTSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFFM0MsSUFBSVAsZUFBZSxDQUFDTSxTQUFTLENBQUNFLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUMvQ0wsY0FBYyxDQUFDTSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDLE1BQ0k7TUFDRE4sY0FBYyxDQUFDTSxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzQztJQUVBTCxJQUFJLENBQUNNLE1BQU0sQ0FBQyxDQUFDO0VBQ2pCLENBQUMsQ0FBQztBQUNOO0FBRUFkLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy90b2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9nZ2xlSW5wdXQodG9nZ2xlU2VsZWN0b3IsIGlucHV0U2VsZWN0b3IsIGZvcm1TZWxlY3RvcilcbntcbiAgICBjb25zdCBpc1Zpc2libGVUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRvZ2dsZVNlbGVjdG9yKTtcbiAgICBjb25zdCBpc1Zpc2libGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXRTZWxlY3Rvcik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybVNlbGVjdG9yKTtcblxuICAgIGlzVmlzaWJsZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpc1Zpc2libGVUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzVmlzaWJsZVRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgaXNWaXNpYmxlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaXNWaXNpYmxlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICB9KVxufVxuXG50b2dnbGVJbnB1dCgnI3RvZ2dsZSBpbnB1dC5zd2l0Y2gnLCAnaW5wdXQuaXNWaXNpYmxlJywgJ2Zvcm0nKTtcbiJdLCJuYW1lcyI6WyJ0b2dnbGVJbnB1dCIsInRvZ2dsZVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsImlzVmlzaWJsZVRvZ2dsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzVmlzaWJsZUlucHV0IiwiZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInNldEF0dHJpYnV0ZSIsInN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=