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
      var lis = document.querySelectorAll('nav ul li');
      lis.forEach(function (li) {
        return li.classList.remove('active');
      });
      e.target.classList.add('active');
    };
    document.querySelectorAll('nav ul li').forEach(function (li) {
      li.addEventListener('click', liClickHandler);
    });
    return function () {
      // cleanup function to remove event listeners when component unmounts
      document.querySelectorAll('nav ul li').forEach(function (li) {
        li.removeEventListener('click', liClickHandler);
      });
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Link 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Link 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Link 3")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c148b83395b18a0f2619")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jY2RiODZhMzY4NWJjMWYzOWQ3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUsxQixTQUFTQyxVQUFVQSxDQUFBLEVBQUc7RUFDcEJDLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxDQUFDLEVBQUs7TUFDNUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7TUFDbERGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDLFVBQUFDLEVBQUU7UUFBQSxPQUFJQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUFBLEVBQUM7TUFDaERSLENBQUMsQ0FBQ1MsTUFBTSxDQUFDRixTQUFTLENBQUNHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQztJQUNEUCxRQUFRLENBQUNDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ25EQSxFQUFFLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRVosY0FBYyxDQUFDO0lBQzlDLENBQUMsQ0FBQztJQUNGLE9BQU8sWUFBTTtNQUNYO01BQ0FJLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7UUFDbkRBLEVBQUUsQ0FBQ00sbUJBQW1CLENBQUMsT0FBTyxFQUFFYixjQUFjLENBQUM7TUFDakQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRUgsMERBQUEsMkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLFFBQU0sQ0FBSyxlQUNmQSwwREFBQSxhQUFJLFFBQU0sQ0FBSyxlQUNmQSwwREFBQSxhQUFJLFFBQU0sQ0FBSyxDQUNaLENBQ0Q7QUFFVjtBQUVBLGlFQUFlQyxVQUFVOzs7Ozs7OztVQ25DekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL01haW5IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgbGlDbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpO1xyXG4gICAgICBsaXMuZm9yRWFjaChsaSA9PiBsaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IHVsIGxpJykuZm9yRWFjaChsaSA9PiB7XHJcbiAgICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlDbGlja0hhbmRsZXIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBjbGVhbnVwIGZ1bmN0aW9uIHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IHVsIGxpJykuZm9yRWFjaChsaSA9PiB7XHJcbiAgICAgICAgbGkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaUNsaWNrSGFuZGxlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGk+TGluayAxPC9saT5cclxuICAgICAgICA8bGk+TGluayAyPC9saT5cclxuICAgICAgICA8bGk+TGluayAzPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzE0OGI4MzM5NWIxOGEwZjI2MTlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJNYWluSGVhZGVyIiwidXNlRWZmZWN0IiwibGlDbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsaXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ0YXJnZXQiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9