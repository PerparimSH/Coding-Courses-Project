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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);


function MainHeader() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var handleLogout = function handleLogout() {
    localStorage.setItem('loggedIn', 'true');

    // TODO: Implement logout functionality
  };

  var loggedIn = localStorage.getItem('loggedIn') === 'false';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/prices"
  }, "Prices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "#about"
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "#contact"
  }, "Contact")), location.pathname === "/dashboard" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/dashboard",
    onClick: handleLogout
  }, "Logout")), !loggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6f81cd0ee3500ff8fdc5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zM2M0YmFiNmViOTZiZmQzOTg2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VFO0FBRWpHLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUVwQixJQUFNQyxRQUFRLEdBQUdGLDZEQUFXLEVBQUU7RUFFOUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzs7SUFFeEM7RUFDRixDQUFDOztFQUNELElBQU1DLFFBQVEsR0FBR0YsWUFBWSxDQUFDRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssT0FBTztFQUU3RCxvQkFDRWQsMERBQUE7SUFBUWdCLFNBQVMsRUFBQztFQUFhLGdCQUM3QmhCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBTSxnQkFDbkJoQiwwREFBQTtJQUFLaUIsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTmpCLDBEQUFBO0lBQUlnQixTQUFTLEVBQUM7RUFBVyxnQkFDdkJoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQUcsR0FBQyxNQUFJLENBQU8sQ0FBSyxlQUNqQ2xCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYyxFQUFFLEVBQUM7RUFBUyxHQUFDLFFBQU0sQ0FBTyxDQUFLLGVBQ3pDbEIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUNsQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQU8sQ0FBSyxFQUNsRFQsUUFBUSxDQUFDVSxRQUFRLEtBQUssWUFBWSxpQkFDakNuQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDLFlBQVk7SUFBQ0UsT0FBTyxFQUFFVjtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQy9ELEVBRVEsQ0FBQ0csUUFBUSxpQkFDUmIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQztFQUFRLEdBQUMsT0FBSyxDQUFPLENBQ25DLENBRUUsZUFDTGxCLDBEQUFBLENBQUNNLG9EQUFNLE9BQUcsQ0FDSDtBQUViO0FBRUEsaUVBQWVFLFVBQVU7Ozs7Ozs7O1VDdEN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGUsIFJvdXRlcywgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCAndHJ1ZScpO1xyXG5cclxuICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2dvdXQgZnVuY3Rpb25hbGl0eVxyXG4gIH1cclxuICBjb25zdCBsb2dnZWRJbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAnZmFsc2UnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29kZXJzbGFia29zb3ZhLmNvbS9ibG9ja3MvTWFpbkhlYWRlci9sb2dvQ0xlbi5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3ByaWNlc1wiPlByaWNlczwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNhYm91dFwiPkFib3V0IHVzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbntsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZGFzaGJvYXJkXCIgJiYgKFxyXG4gIDxsaT48TGluayB0bz1cIi9kYXNoYm9hcmRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxyXG4pfVxyXG5cclxuICAgICAgICB7IWxvZ2dlZEluICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZmODFjZDBlZTM1MDBmZjhmZGM1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJ1c2VMb2NhdGlvbiIsIk1haW5IZWFkZXIiLCJsb2NhdGlvbiIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2dnZWRJbiIsImdldEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwidG8iLCJwYXRobmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9