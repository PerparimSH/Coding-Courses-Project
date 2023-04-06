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
    localStorage.setItem('loggedIn', 'false');

    // TODO: Implement logout functionality
  };

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
    to: "/login",
    onClick: handleLogout
  }, "Logout")), location.pathname !== "/dashboard" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f77aa0d69b02e2cb2fbe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNjcwYzg2YzJjMDQ5MTlkODA5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VFO0FBRWpHLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUVwQixJQUFNQyxRQUFRLEdBQUdGLDZEQUFXLEVBQUU7RUFFOUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQzs7SUFFekM7RUFDRixDQUFDOztFQUVELG9CQUNFWiwwREFBQTtJQUFRYyxTQUFTLEVBQUM7RUFBYSxnQkFDN0JkLDBEQUFBO0lBQUtjLFNBQVMsRUFBQztFQUFNLGdCQUNuQmQsMERBQUE7SUFBS2UsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTmYsMERBQUE7SUFBSWMsU0FBUyxFQUFDO0VBQVcsZ0JBQ3ZCZCwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ1ksRUFBRSxFQUFDO0VBQUcsR0FBQyxNQUFJLENBQU8sQ0FBSyxlQUNqQ2hCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDWSxFQUFFLEVBQUM7RUFBUyxHQUFDLFFBQU0sQ0FBTyxDQUFLLGVBQ3pDaEIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNZLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUNoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ1ksRUFBRSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQU8sQ0FBSyxFQUMxQ1AsUUFBUSxDQUFDUSxRQUFRLEtBQUssWUFBWSxpQkFDakNqQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ1ksRUFBRSxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFUjtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQzNELEVBQ0FELFFBQVEsQ0FBQ1EsUUFBUSxLQUFLLFlBQVksaUJBQ2pDakIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNZLEVBQUUsRUFBQztFQUFRLEdBQUMsT0FBSyxDQUFPLENBQ25DLENBRUUsZUFDTGhCLDBEQUFBLENBQUNNLG9EQUFNLE9BQUcsQ0FDSDtBQUViO0FBRUEsaUVBQWVFLFVBQVU7Ozs7Ozs7O1VDcEN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGUsIFJvdXRlcywgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcHJpY2VzXCI+UHJpY2VzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2Fib3V0XCI+QWJvdXQgdXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY3N2FhMGQ2OWIwMmUyY2IyZmJlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJ1c2VMb2NhdGlvbiIsIk1haW5IZWFkZXIiLCJsb2NhdGlvbiIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwidG8iLCJwYXRobmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9