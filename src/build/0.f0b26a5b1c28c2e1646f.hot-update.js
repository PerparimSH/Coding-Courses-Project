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

  var loggedIn = localStorage.getItem('loggedIn') === 'true';
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
  }, "Contact")), loggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
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
/******/ 	__webpack_require__.h = () => ("4845cd18f0d1e0d85957")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMGIyNmE1YjFjMjhjMmUxNjQ2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VFO0FBRWpHLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUVwQixJQUFNQyxRQUFRLEdBQUdGLDZEQUFXLEVBQUU7RUFFOUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQzs7SUFFekM7RUFDRixDQUFDOztFQUNELElBQU1DLFFBQVEsR0FBR0YsWUFBWSxDQUFDRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssTUFBTTtFQUU1RCxvQkFDRWQsMERBQUE7SUFBUWdCLFNBQVMsRUFBQztFQUFhLGdCQUM3QmhCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBTSxnQkFDbkJoQiwwREFBQTtJQUFLaUIsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTmpCLDBEQUFBO0lBQUlnQixTQUFTLEVBQUM7RUFBVyxnQkFDdkJoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQUcsR0FBQyxNQUFJLENBQU8sQ0FBSyxlQUNqQ2xCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYyxFQUFFLEVBQUM7RUFBUyxHQUFDLFFBQU0sQ0FBTyxDQUFLLGVBQ3pDbEIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUNsQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQU8sQ0FBSyxFQUMxQ0wsUUFBUSxpQkFDUGIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQyxRQUFRO0lBQUNDLE9BQU8sRUFBRVQ7RUFBYSxHQUFDLFFBQU0sQ0FBTyxDQUMzRCxFQUNBLENBQUNHLFFBQVEsaUJBQ1JiLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYyxFQUFFLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBTyxDQUNuQyxDQUVFLGVBQ0xsQiwwREFBQSxDQUFDTSxvREFBTSxPQUFHLENBQ0g7QUFFYjtBQUVBLGlFQUFlRSxVQUFVOzs7Ozs7OztVQ3JDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMsIExpbmssIE5hdkxpbmssIE91dGxldCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XHJcblxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2dlZEluJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGxvZ291dCBmdW5jdGlvbmFsaXR5XHJcbiAgfVxyXG4gIGNvbnN0IGxvZ2dlZEluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2dlZEluJykgPT09ICd0cnVlJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2NvZGVyc2xhYmtvc292YS5jb20vYmxvY2tzL01haW5IZWFkZXIvbG9nb0NMZW4uc3ZnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9wcmljZXNcIj5QcmljZXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjYWJvdXRcIj5BYm91dCB1czwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNjb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgIHtsb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFsb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ODQ1Y2QxOGYwZDFlMGQ4NTk1N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwidXNlTG9jYXRpb24iLCJNYWluSGVhZGVyIiwibG9jYXRpb24iLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9nZ2VkSW4iLCJnZXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsInRvIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=