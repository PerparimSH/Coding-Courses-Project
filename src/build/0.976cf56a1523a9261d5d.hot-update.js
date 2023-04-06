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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);


function MainHeader(props) {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
  };
  var check = function check(path) {
    return location.pathname === path;
  };
  var showLogout = check('/dashboard') || check('/') || check('/prices');
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
  }, "Contact")), showLogout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")), !showLogout && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("90e39d5fbe6a8b12ab8b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NzZjZjU2YTE1MjNhOTI2MWQ1ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzhCO0FBRXRFLFNBQVNNLFVBQVVBLENBQUNDLEtBQUssRUFBRTtFQUN6QixJQUFNQyxRQUFRLEdBQUdILDZEQUFXLEVBQUU7RUFFOUIsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QjtFQUFBLENBQ0Q7RUFFRCxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBSUMsSUFBSSxFQUFLO0lBQ3RCLE9BQU9ILFFBQVEsQ0FBQ0ksUUFBUSxLQUFLRCxJQUFJO0VBQ25DLENBQUM7RUFFRCxJQUFNRSxVQUFVLEdBQUdILEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSUEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJQSxLQUFLLENBQUMsU0FBUyxDQUFDO0VBRXhFLG9CQUNFViwwREFBQTtJQUFRZSxTQUFTLEVBQUM7RUFBYSxnQkFDN0JmLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFNLGdCQUNuQmYsMERBQUE7SUFBS2dCLEdBQUcsRUFBQztFQUE0RCxFQUFHLENBQ3BFLGVBQ05oQiwwREFBQTtJQUFJZSxTQUFTLEVBQUM7RUFBVyxnQkFDdkJmLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDZSxFQUFFLEVBQUM7RUFBRyxHQUFDLE1BQUksQ0FBTyxDQUFLLGVBQ2pDakIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNlLEVBQUUsRUFBQztFQUFTLEdBQUMsUUFBTSxDQUFPLENBQUssZUFDekNqQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2UsRUFBRSxFQUFDO0VBQVEsR0FBQyxVQUFRLENBQU8sQ0FBSyxlQUMxQ2pCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDZSxFQUFFLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBTyxDQUFLLEVBQzFDSixVQUFVLGlCQUNUYiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2UsRUFBRSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxFQUFFVDtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQzNELEVBQ0EsQ0FBQ0ksVUFBVSxpQkFDVmIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNlLEVBQUUsRUFBQztFQUFRLEdBQUMsT0FBSyxDQUFPLENBQ25DLENBQ0UsZUFDTGpCLDBEQUFBLENBQUNJLG9EQUFNLE9BQUcsQ0FDSDtBQUViO0FBRUEsaUVBQWVFLFVBQVU7Ozs7Ozs7O1VDdEN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCBPdXRsZXQsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5mdW5jdGlvbiBNYWluSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVjayA9IChwYXRoKSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWUgPT09IHBhdGg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd0xvZ291dCA9IGNoZWNrKCcvZGFzaGJvYXJkJykgfHwgY2hlY2soJy8nKSB8fCBjaGVjaygnL3ByaWNlcycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29kZXJzbGFia29zb3ZhLmNvbS9ibG9ja3MvTWFpbkhlYWRlci9sb2dvQ0xlbi5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3ByaWNlc1wiPlByaWNlczwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNhYm91dFwiPkFib3V0IHVzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAge3Nob3dMb2dvdXQgJiYgKFxyXG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2xvZ2luXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshc2hvd0xvZ291dCAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkwZTM5ZDVmYmU2YThiMTJhYjhiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZUxvY2F0aW9uIiwiTWFpbkhlYWRlciIsInByb3BzIiwibG9jYXRpb24iLCJoYW5kbGVMb2dvdXQiLCJjaGVjayIsInBhdGgiLCJwYXRobmFtZSIsInNob3dMb2dvdXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwidG8iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==