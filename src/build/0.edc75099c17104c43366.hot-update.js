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
  }, "Contact")), location.pathname === "/dashboard" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/dashboard",
    onClick: handleLogout
  }, "Logout")), location.pathname === "/dashboard" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/dashboard",
    onClick: handleLogout
  }, "Logout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("33c4bab6eb96bfd3986d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZGM3NTA5OWMxNzEwNGM0MzM2Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3VFO0FBRWpHLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUVwQixJQUFNQyxRQUFRLEdBQUdGLDZEQUFXLEVBQUU7RUFFOUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQzs7SUFFeEM7RUFDRixDQUFDOztFQUNELElBQU1DLFFBQVEsR0FBR0YsWUFBWSxDQUFDRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssTUFBTTtFQUU1RCxvQkFDRWQsMERBQUE7SUFBUWdCLFNBQVMsRUFBQztFQUFhLGdCQUM3QmhCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBTSxnQkFDbkJoQiwwREFBQTtJQUFLaUIsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTmpCLDBEQUFBO0lBQUlnQixTQUFTLEVBQUM7RUFBVyxnQkFDdkJoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQUcsR0FBQyxNQUFJLENBQU8sQ0FBSyxlQUNqQ2xCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDSSxrREFBSTtJQUFDYyxFQUFFLEVBQUM7RUFBUyxHQUFDLFFBQU0sQ0FBTyxDQUFLLGVBQ3pDbEIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUNsQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQU8sQ0FBSyxFQUMxQ1QsUUFBUSxDQUFDVSxRQUFRLEtBQUssWUFBWSxpQkFDekNuQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2MsRUFBRSxFQUFDLFlBQVk7SUFBQ0UsT0FBTyxFQUFFVjtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQy9ELEVBQ0FELFFBQVEsQ0FBQ1UsUUFBUSxLQUFLLFlBQVksaUJBQ2pDbkIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNJLGtEQUFJO0lBQUNjLEVBQUUsRUFBQyxZQUFZO0lBQUNFLE9BQU8sRUFBRVY7RUFBYSxHQUFDLFFBQU0sQ0FBTyxDQUMvRCxDQUVVLGVBQ0xWLDBEQUFBLENBQUNNLG9EQUFNLE9BQUcsQ0FDSDtBQUViO0FBRUEsaUVBQWVFLFVBQVU7Ozs7Ozs7O1VDckN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGUsIFJvdXRlcywgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nZ2VkSW4nLCAndHJ1ZScpO1xyXG5cclxuICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2dvdXQgZnVuY3Rpb25hbGl0eVxyXG4gIH1cclxuICBjb25zdCBsb2dnZWRJbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dnZWRJbicpID09PSAndHJ1ZSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcHJpY2VzXCI+UHJpY2VzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2Fib3V0XCI+QWJvdXQgdXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICA8bGk+PExpbmsgdG89XCIvZGFzaGJvYXJkXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0xpbms+PC9saT5cclxuKX1cclxue2xvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9kYXNoYm9hcmRcIiAmJiAoXHJcbiAgPGxpPjxMaW5rIHRvPVwiL2Rhc2hib2FyZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPjwvbGk+XHJcbil9XHJcblxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzM2M0YmFiNmViOTZiZmQzOTg2ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwidXNlTG9jYXRpb24iLCJNYWluSGVhZGVyIiwibG9jYXRpb24iLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9nZ2VkSW4iLCJnZXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsInRvIiwicGF0aG5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==