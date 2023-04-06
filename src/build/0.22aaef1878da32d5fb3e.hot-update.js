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
    localStorage.removeItem('user');

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
/******/ 	__webpack_require__.h = () => ("439479d3f26e949d9826")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMmFhZWYxODc4ZGEzMmQ1ZmIzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzhCO0FBR3RFLFNBQVNNLFVBQVVBLENBQUNDLEtBQUssRUFBRTtFQUV6QixJQUFNQyxRQUFRLEdBQUdILDZEQUFXLEVBQUU7RUFFOUIsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QkMsWUFBWSxDQUFDQyxVQUFVLENBQUMsTUFBTSxDQUFDOztJQUUvQjtFQUNGLENBQUM7O0VBR0Qsb0JBQ0VYLDBEQUFBO0lBQVFhLFNBQVMsRUFBQztFQUFhLGdCQUM3QmIsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQU0sZ0JBQ25CYiwwREFBQTtJQUFLYyxHQUFHLEVBQUM7RUFBNEQsRUFBRyxDQUNwRSxlQUNOZCwwREFBQTtJQUFJYSxTQUFTLEVBQUM7RUFBVyxnQkFDdkJiLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDYSxFQUFFLEVBQUM7RUFBRyxHQUFDLE1BQUksQ0FBTyxDQUFLLGVBQ2pDZiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2EsRUFBRSxFQUFDO0VBQVMsR0FBQyxRQUFNLENBQU8sQ0FBSyxlQUN6Q2YsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNhLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUNmLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDYSxFQUFFLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBTyxDQUFLLEVBQzFDUCxRQUFRLENBQUNRLFFBQVEsS0FBSyxZQUFZLGlCQUNqQ2hCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDYSxFQUFFLEVBQUMsUUFBUTtJQUFDRSxPQUFPLEVBQUVSO0VBQWEsR0FBQyxRQUFNLENBQU8sQ0FDM0QsRUFDQUQsUUFBUSxDQUFDUSxRQUFRLEtBQUssWUFBWSxpQkFDakNoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2EsRUFBRSxFQUFDO0VBQVEsR0FBQyxPQUFLLENBQU8sQ0FDbkMsQ0FDRSxlQUNMZiwwREFBQSxDQUFDSSxvREFBTSxPQUFFLENBQ0Y7QUFFYjtBQUVBLGlFQUFlRSxVQUFVOzs7Ozs7OztVQ3JDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuXHJcbmZ1bmN0aW9uIE1haW5IZWFkZXIocHJvcHMpIHtcclxuICBcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcblxyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGxvZ291dCBmdW5jdGlvbmFsaXR5XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2NvZGVyc2xhYmtvc292YS5jb20vYmxvY2tzL01haW5IZWFkZXIvbG9nb0NMZW4uc3ZnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9wcmljZXNcIj5QcmljZXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjYWJvdXRcIj5BYm91dCB1czwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNjb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvZGFzaGJvYXJkXCIgJiYgKFxyXG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2xvZ2luXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvZGFzaGJvYXJkXCIgJiYgKFxyXG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+PC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8T3V0bGV0Lz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzOTQ3OWQzZjI2ZTk0OWQ5ODI2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZUxvY2F0aW9uIiwiTWFpbkhlYWRlciIsInByb3BzIiwibG9jYXRpb24iLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsInRvIiwicGF0aG5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==