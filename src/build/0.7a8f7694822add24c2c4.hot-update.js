self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

function MainHeader() {
  var location = useLocation();
  var handleLogout = function handleLogout() {
    localStorage.removeItem('isLoggedIn'); // remove isLoggedIn flag from localStorage
    // TODO: Implement logout functionality
  };

  // check isLoggedIn flag in localStorage
  var isLoggedIn = localStorage.getItem('isLoggedIn');
  return /*#__PURE__*/React.createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/prices"
  }, "Prices")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "#about"
  }, "About us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "#contact"
  }, "Contact")), isLoggedIn && location.pathname === "/dashboard" && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")), !isLoggedIn && location.pathname !== "/dashboard" && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/React.createElement(Outlet, null));
}

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);












var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Header__WEBPACK_IMPORTED_MODULE_2___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("12d75cbfd6ce85111147")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNlLElBQUksRUFBQyxTQUFTO0lBQUNDLE9BQU8sZUFBRTNCLDBEQUFBLENBQUNvQiwrQ0FBTTtFQUFHLEVBQUcsZUFDNUNwQiwwREFBQSxDQUFDVyxvREFBSztJQUFDZSxJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUUzQiwwREFBQSxDQUFDcUIsOENBQUs7RUFBRyxFQUFHLGVBQzFDckIsMERBQUEsQ0FBQ1csb0RBQUs7SUFBQ2UsSUFBSSxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxlQUFFM0IsMERBQUEsQ0FBQ3NCLG1EQUFTO0VBQUksRUFBRyxDQUM1QyxDQUNBLGVBQ2J0QiwwREFBQSxDQUFDa0IsNENBQUcsT0FBRyxlQUNQbEIsMERBQUEsQ0FBQ2UsK0NBQU0sT0FBRyxDQUNQO0FBRVgsQ0FBQztBQUVETiw2Q0FBZSxlQUFDVCwwREFBQSxDQUFDeUIsR0FBRyxPQUFFLEVBQUVJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ2xEdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNMb2dnZWRJbicpOyAvLyByZW1vdmUgaXNMb2dnZWRJbiBmbGFnIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIGlzTG9nZ2VkSW4gZmxhZyBpbiBsb2NhbFN0b3JhZ2VcclxuICBjb25zdCBpc0xvZ2dlZEluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzTG9nZ2VkSW4nKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2NvZGVyc2xhYmtvc292YS5jb20vYmxvY2tzL01haW5IZWFkZXIvbG9nb0NMZW4uc3ZnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9wcmljZXNcIj5QcmljZXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjYWJvdXRcIj5BYm91dCB1czwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNjb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgIHtpc0xvZ2dlZEluICYmIGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9kYXNoYm9hcmRcIiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFpc0xvZ2dlZEluICYmIGxvY2F0aW9uLnBhdGhuYW1lICE9PSBcIi9kYXNoYm9hcmRcIiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICAgIEhhc2hSb3V0ZXIsXHJcbiAgICBSb3V0ZSxcclxuICAgIFJvdXRlcyxcclxuICAgIExpbmssXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgT3V0bGV0XHJcbiAgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIlxyXG5pbXBvcnQgQWJvdXRVUyBmcm9tIFwiLi9BYm91dFVTXCJcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiXHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCJcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7ICBcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8QWJvdXRVUyAvPlxyXG4gICAgICAgIDxDb250YWN0VVMgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxXcmFwcGVyLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcy8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luLz59IC8+XHJcbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PERhc2hib2FyZCAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgPC9IYXNoUm91dGVyPiBcclxuICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyZDc1Y2JmZDZjZTg1MTExMTQ3XCIpIl0sIm5hbWVzIjpbIk1haW5IZWFkZXIiLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJnZXRJdGVtIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiTGluayIsInRvIiwicGF0aG5hbWUiLCJvbkNsaWNrIiwiT3V0bGV0IiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJOYXZMaW5rIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWJvdXRVUyIsIkJhbm5lciIsIlRPUCIsIkNvbnRhY3RVUyIsIlByaWNlcyIsIkxvZ2luIiwiRGFzaGJvYXJkIiwiV3JhcHBlciIsIkZyYWdtZW50IiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==