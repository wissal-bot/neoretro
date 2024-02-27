(self["webpackChunk"] = self["webpackChunk"] || []).push([["pictureModal"],{

/***/ "./assets/scripts/pictureModal.js":
/*!****************************************!*\
  !*** ./assets/scripts/pictureModal.js ***!
  \****************************************/
/***/ (() => {

// Get the modal
var modal = document.getElementById("picture-modal");

// Get the images and insert it inside the modal
var img = document.querySelectorAll("li.pictures > img");
var modalImg = document.getElementById("img-modal");
var _loop = function _loop(i) {
  img[i].addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = img[i].src;
  });
};
for (var i = 0; i < img.length; i++) {
  _loop(i);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user click around the modal, close the modal
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/scripts/pictureModal.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZU1vZGFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQzs7QUFFdEQ7QUFDQSxJQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7QUFDMUQsSUFBTUMsUUFBUSxHQUFHSixRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7QUFBQyxJQUFBSSxLQUFBLFlBQUFBLE1BQUFDLENBQUEsRUFDZjtFQUNuQ0osR0FBRyxDQUFDSSxDQUFDLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDbkNSLEtBQUssQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsT0FBTztJQUM3QkwsUUFBUSxDQUFDTSxHQUFHLEdBQUdSLEdBQUcsQ0FBQ0ksQ0FBQyxDQUFDLENBQUNJLEdBQUc7RUFDN0IsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUxELEtBQUssSUFBSUosQ0FBQyxHQUFHLENBQUMsRUFBR0EsQ0FBQyxHQUFHSixHQUFHLENBQUNTLE1BQU0sRUFBR0wsQ0FBQyxFQUFFO0VBQUFELEtBQUEsQ0FBQUMsQ0FBQTtBQUFBOztBQU9yQztBQUNBLElBQU1NLElBQUksR0FBR1osUUFBUSxDQUFDYSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXhEO0FBQ0FELElBQUksQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDakNSLEtBQUssQ0FBQ1MsS0FBSyxDQUFDQyxPQUFPLEdBQUcsTUFBTTtBQUNoQyxDQUFDLENBQUM7O0FBRUY7QUFDQUssTUFBTSxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ1EsS0FBSyxFQUFLO0VBQ3hDLElBQUlBLEtBQUssQ0FBQ0MsTUFBTSxLQUFLakIsS0FBSyxFQUFFO0lBQ3hCQSxLQUFLLENBQUNTLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07RUFDaEM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9waWN0dXJlTW9kYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0IHRoZSBtb2RhbFxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY3R1cmUtbW9kYWxcIik7XG5cbi8vIEdldCB0aGUgaW1hZ2VzIGFuZCBpbnNlcnQgaXQgaW5zaWRlIHRoZSBtb2RhbFxuY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpLnBpY3R1cmVzID4gaW1nXCIpO1xuY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZy1tb2RhbFwiKTtcbmZvciAobGV0IGkgPSAwIDsgaSA8IGltZy5sZW5ndGggOyBpKyspIHtcbiAgICBpbWdbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbW9kYWxJbWcuc3JjID0gaW1nW2ldLnNyYztcbiAgICB9KTtcbn1cblxuLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbmNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrIGFyb3VuZCB0aGUgbW9kYWwsIGNsb3NlIHRoZSBtb2RhbFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1vZGFsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImltZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbEltZyIsIl9sb29wIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJzcmMiLCJsZW5ndGgiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIndpbmRvdyIsImV2ZW50IiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==