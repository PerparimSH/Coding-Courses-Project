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
/******/ 	__webpack_require__.h = () => ("bca89330a9f276fbe289")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YzRmYThiMzU1OWFlNDYzMzU3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUcxQixTQUFTQyxVQUFVQSxDQUFBLEVBQUc7RUFFcEJDLFNBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJQyxDQUFDLEVBQUs7TUFDNUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO01BQ2xCLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztNQUN4REYsR0FBRyxDQUFDRyxPQUFPLENBQUMsVUFBQUMsRUFBRTtRQUFBLE9BQUlBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO01BQUEsRUFBQztNQUNoRFIsQ0FBQyxDQUFDUyxNQUFNLENBQUNGLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBQ0RQLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDbkRBLEVBQUUsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFWixjQUFjLENBQUM7SUFDOUMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxZQUFNO01BQ1g7TUFDQUksUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtRQUNuREEsRUFBRSxDQUFDTSxtQkFBbUIsQ0FBQyxPQUFPLEVBQUViLGNBQWMsQ0FBQztNQUNqRCxDQUFDLENBQUM7SUFDSixDQUFDO0VBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNFSCwwREFBQTtJQUFRa0IsU0FBUyxFQUFDO0VBQWEsZ0JBQzdCbEIsMERBQUE7SUFBS2tCLFNBQVMsRUFBQztFQUFNLGdCQUNuQmxCLDBEQUFBO0lBQUttQixHQUFHLEVBQUM7RUFBNEQsRUFBRyxDQUNwRSxlQUNObkIsMERBQUE7SUFBSWtCLFNBQVMsRUFBQztFQUFXLGdCQUN2QmxCLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHb0IsSUFBSSxFQUFDO0VBQVcsR0FBQyxNQUFJLENBQUksQ0FBSyxlQUNyQ3BCLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHb0IsSUFBSSxFQUFDO0VBQVcsR0FBQyxPQUFLLENBQUksQ0FBSyxlQUN0Q3BCLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHb0IsSUFBSSxFQUFDO0VBQVcsR0FBQyxTQUFPLENBQUksQ0FBSyxlQUN4Q3BCLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHb0IsSUFBSSxFQUFDO0VBQVcsR0FBQyxRQUFNLENBQUksQ0FBSyxlQUN2Q3BCLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHb0IsSUFBSSxFQUFDO0VBQVcsR0FBQyxPQUFLLENBQUksQ0FBSyxDQUNuQyxDQUNFO0FBRWI7QUFFQSxpRUFBZW5CLFVBQVU7Ozs7Ozs7O1VDdkN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvTWFpbkhlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGxpQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBsaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51IGxpIGEnKTtcclxuICAgICAgbGlzLmZvckVhY2gobGkgPT4gbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpLmZvckVhY2gobGkgPT4ge1xyXG4gICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxpQ2xpY2tIYW5kbGVyKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gY2xlYW51cCBmdW5jdGlvbiB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIHdoZW4gY29tcG9uZW50IHVubW91bnRzXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiB1bCBsaScpLmZvckVhY2gobGkgPT4ge1xyXG4gICAgICAgIGxpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlDbGlja0hhbmRsZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VjdGlvbjFcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VjdGlvbjJcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb24zXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb240XCI+UHJpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VjdGlvbjVcIj5QYWNrczwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiY2E4OTMzMGE5ZjI3NmZiZTI4OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIk1haW5IZWFkZXIiLCJ1c2VFZmZlY3QiLCJsaUNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxpcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRhcmdldCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9