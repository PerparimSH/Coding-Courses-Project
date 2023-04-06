"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MainHeader() {
  useEffect(function () {
    var liClickHandler = function liClickHandler(e) {
      e.preventDefault();
      var lis = document.querySelectorAll('.main-menu li a');
      lis.forEach(function (li) {
        return li.classList.remove('active');
      });
      e.target.classList.add('active');
    };
    document.querySelectorAll('.main-menu li a').forEach(function (li) {
      li.addEventListener('click', liClickHandler);
    });
    return function () {
      // cleanup function to remove event listeners when component unmounts
      document.querySelectorAll('.main-menu li a').forEach(function (li) {
        li.removeEventListener('click', liClickHandler);
      });
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section1"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section2"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section3"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section4"
  }, "Prices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section5"
  }, "Packs"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ccdb86a3685bc1f39d7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iY2E4OTMzMGE5ZjI3NmZiZTI4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixTQUFTQyxVQUFVQSxDQUFBLEVBQUc7RUFFcEJDLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxDQUFDLEVBQUs7TUFDNUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztNQUN4REYsR0FBRyxDQUFDRyxPQUFPLENBQUMsVUFBQUMsRUFBRTtRQUFBLE9BQUlBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQUEsRUFBQztNQUNoRFIsQ0FBQyxDQUFDUyxNQUFNLENBQUNGLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBQ0RQLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtNQUN6REEsRUFBRSxDQUFDSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVaLGNBQWMsQ0FBQztJQUM5QyxDQUFDLENBQUM7SUFDRixPQUFPLFlBQU07TUFDWDtNQUNBSSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7UUFDekRBLEVBQUUsQ0FBQ00sbUJBQW1CLENBQUMsT0FBTyxFQUFFYixjQUFjLENBQUM7TUFDakQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRUgsMERBQUE7SUFBUWtCLFNBQVMsRUFBQztFQUFhLGdCQUM3QmxCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBTSxnQkFDbkJsQiwwREFBQTtJQUFLbUIsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTm5CLDBEQUFBO0lBQUlrQixTQUFTLEVBQUM7RUFBVyxnQkFDdkJsQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR29CLElBQUksRUFBQztFQUFXLEdBQUMsTUFBSSxDQUFJLENBQUssZUFDckNwQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR29CLElBQUksRUFBQztFQUFXLEdBQUMsT0FBSyxDQUFJLENBQUssZUFDdENwQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR29CLElBQUksRUFBQztFQUFXLEdBQUMsU0FBTyxDQUFJLENBQUssZUFDeENwQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR29CLElBQUksRUFBQztFQUFXLEdBQUMsUUFBTSxDQUFJLENBQUssZUFDdkNwQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR29CLElBQUksRUFBQztFQUFXLEdBQUMsT0FBSyxDQUFJLENBQUssQ0FDbkMsQ0FDRTtBQUViO0FBRUEsaUVBQWVuQixVQUFVOzs7Ozs7OztVQ3ZDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL01haW5IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBsaUNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgbGlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudSBsaSBhJyk7XHJcbiAgICAgIGxpcy5mb3JFYWNoKGxpID0+IGxpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51IGxpIGEnKS5mb3JFYWNoKGxpID0+IHtcclxuICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaUNsaWNrSGFuZGxlcik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIGNsZWFudXAgZnVuY3Rpb24gdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51IGxpIGEnKS5mb3JFYWNoKGxpID0+IHtcclxuICAgICAgICBsaS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGxpQ2xpY2tIYW5kbGVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29kZXJzbGFia29zb3ZhLmNvbS9ibG9ja3MvTWFpbkhlYWRlci9sb2dvQ0xlbi5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb24xXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb24yXCI+QWJvdXQ8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZWN0aW9uM1wiPkNvbnRhY3Q8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNzZWN0aW9uNFwiPlByaWNlczwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb241XCI+UGFja3M8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2NkYjg2YTM2ODViYzFmMzlkN2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJNYWluSGVhZGVyIiwidXNlRWZmZWN0IiwibGlDbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0YXJnZXQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==