(self["webpackChunk"] = self["webpackChunk"] || []).push([["reviewModal"],{

/***/ "./assets/scripts/reviewModal.js":
/*!***************************************!*\
  !*** ./assets/scripts/reviewModal.js ***!
  \***************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var doc = document.querySelector('#game-played');
  var trigger = document.querySelector('[aria-haspopup="dialog"]');
  var dialog = document.getElementById(trigger.getAttribute('aria-controls'));
  var dismissTrigger = dialog.querySelector('[data-dismiss]');
  var commentBox = document.querySelector('.review-box');

  // Function to display the modal with animation
  var open = function open(dialog, box) {
    box.classList.add("animation-zoom");
    dialog.setAttribute('aria-hidden', false);
    doc.setAttribute('aria-hidden', true);
  };

  // Function to hide the modal and remove animation
  var close = function close(dialog, box) {
    dialog.setAttribute('aria-hidden', true);
    doc.setAttribute('aria-hidden', false);
    box.classList.remove("animation-zoom");
  };

  // Open dialog
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    open(dialog, commentBox);
  });

  // Close dialog when user click on <span X or around the modal
  var dismissDialog = document.getElementById(dismissTrigger.dataset.dismiss);
  dismissTrigger.addEventListener('click', function (event) {
    event.preventDefault();
    close(dismissDialog, commentBox);
  });
  window.addEventListener('click', function (event) {
    if (event.target === dialog) {
      close(dialog, commentBox);
    }
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/scripts/reviewModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3TW9kYWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQUEsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsY0FBYyxDQUFDO0VBQ2xELElBQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDRyxhQUFhLENBQUMsMEJBQTBCLENBQUM7RUFDbEUsSUFBTUUsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGNBQWMsQ0FBQ0YsT0FBTyxDQUFDRyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7RUFDN0UsSUFBTUMsY0FBYyxHQUFHSCxNQUFNLENBQUNGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFNTSxVQUFVLEdBQUdULFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGFBQWEsQ0FBQzs7RUFFeEQ7RUFDQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBYUwsTUFBTSxFQUFFTSxHQUFHLEVBQUU7SUFDaENBLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDbkNSLE1BQU0sQ0FBQ1MsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUM7SUFDekNaLEdBQUcsQ0FBQ1ksWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUM7RUFDekMsQ0FBQzs7RUFFRDtFQUNBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFLQSxDQUFhVixNQUFNLEVBQUVNLEdBQUcsRUFBRTtJQUNqQ04sTUFBTSxDQUFDUyxZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQztJQUN4Q1osR0FBRyxDQUFDWSxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztJQUN0Q0gsR0FBRyxDQUFDQyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztFQUMxQyxDQUFDOztFQUVEO0VBQ0FaLE9BQU8sQ0FBQ0gsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNnQixLQUFLLEVBQUs7SUFDekNBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEJSLElBQUksQ0FBQ0wsTUFBTSxFQUFFSSxVQUFVLENBQUM7RUFDNUIsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTVUsYUFBYSxHQUFHbkIsUUFBUSxDQUFDTSxjQUFjLENBQUNFLGNBQWMsQ0FBQ1ksT0FBTyxDQUFDQyxPQUFPLENBQUM7RUFFN0ViLGNBQWMsQ0FBQ1AsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNnQixLQUFLLEVBQUs7SUFDaERBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEJILEtBQUssQ0FBQ0ksYUFBYSxFQUFFVixVQUFVLENBQUM7RUFDcEMsQ0FBQyxDQUFDO0VBRUZhLE1BQU0sQ0FBQ3JCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDZ0IsS0FBSyxFQUFLO0lBQ3hDLElBQUlBLEtBQUssQ0FBQ00sTUFBTSxLQUFLbEIsTUFBTSxFQUFFO01BQ3pCVSxLQUFLLENBQUNWLE1BQU0sRUFBRUksVUFBVSxDQUFDO0lBQzdCO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcmV2aWV3TW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1wbGF5ZWQnKTtcbiAgICBjb25zdCB0cmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2FyaWEtaGFzcG9wdXA9XCJkaWFsb2dcIl0nKTtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKTtcbiAgICBjb25zdCBkaXNtaXNzVHJpZ2dlciA9IGRpYWxvZy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1kaXNtaXNzXScpO1xuICAgIGNvbnN0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3LWJveCcpO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gZGlzcGxheSB0aGUgbW9kYWwgd2l0aCBhbmltYXRpb25cbiAgICBjb25zdCBvcGVuID0gZnVuY3Rpb24gKGRpYWxvZywgYm94KSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0aW9uLXpvb21cIik7XG4gICAgICAgIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICBkb2Muc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBoaWRlIHRoZSBtb2RhbCBhbmQgcmVtb3ZlIGFuaW1hdGlvblxuICAgIGNvbnN0IGNsb3NlID0gZnVuY3Rpb24gKGRpYWxvZywgYm94KSB7XG4gICAgICAgIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIGRvYy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGlvbi16b29tXCIpO1xuICAgIH07XG5cbiAgICAvLyBPcGVuIGRpYWxvZ1xuICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBvcGVuKGRpYWxvZywgY29tbWVudEJveCk7XG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBkaWFsb2cgd2hlbiB1c2VyIGNsaWNrIG9uIDxzcGFuIFggb3IgYXJvdW5kIHRoZSBtb2RhbFxuICAgIGNvbnN0IGRpc21pc3NEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXNtaXNzVHJpZ2dlci5kYXRhc2V0LmRpc21pc3MpO1xuICAgIFxuICAgIGRpc21pc3NUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY2xvc2UoZGlzbWlzc0RpYWxvZywgY29tbWVudEJveCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZGlhbG9nKSB7XG4gICAgICAgICAgICBjbG9zZShkaWFsb2csIGNvbW1lbnRCb3gpO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidHJpZ2dlciIsImRpYWxvZyIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwiZGlzbWlzc1RyaWdnZXIiLCJjb21tZW50Qm94Iiwib3BlbiIsImJveCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImNsb3NlIiwicmVtb3ZlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpc21pc3NEaWFsb2ciLCJkYXRhc2V0IiwiZGlzbWlzcyIsIndpbmRvdyIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=