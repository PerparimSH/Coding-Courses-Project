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


function MainHeader(props) {
  var isLoggedIn = props.isLoggedIn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/prices"
  }, "Prices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "#about"
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "#contact"
  }, "Contact")), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/dashboard"
  }, "Dashboard")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, "Login"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
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
/******/ 	__webpack_require__.h = () => ("44c6665480719f8a32af")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssQ0FBQyxDQUFDOzs7Ozs7OztVQ2xEdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgSGFzaFJvdXRlcixcclxuICBSb3V0ZSxcclxuICBSb3V0ZXMsXHJcbiAgTGluayxcclxuICBOYXZMaW5rLFxyXG4gIE91dGxldFxyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSBwcm9wcy5pc0xvZ2dlZEluO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29kZXJzbGFia29zb3ZhLmNvbS9ibG9ja3MvTWFpbkhlYWRlci9sb2dvQ0xlbi5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3ByaWNlc1wiPlByaWNlczwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNhYm91dFwiPkFib3V0IHVzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvZGFzaGJvYXJkXCI+RGFzaGJvYXJkPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IEFib3V0VVMgZnJvbSBcIi4vQWJvdXRVU1wiXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIlxyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiXHJcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiOyAgXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPEFib3V0VVMgLz5cclxuICAgICAgICA8Q29udGFjdFVTIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlci8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgIDwvSGFzaFJvdXRlcj4gXHJcbiAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NGM2NjY1NDgwNzE5ZjhhMzJhZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiTWFpbkhlYWRlciIsInByb3BzIiwiaXNMb2dnZWRJbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJ0byIsIlJlYWN0RE9NIiwiSGVhZGVyIiwiRm9vdGVyIiwiQWJvdXRVUyIsIkJhbm5lciIsIlRPUCIsIkNvbnRhY3RVUyIsIlByaWNlcyIsIkxvZ2luIiwiRGFzaGJvYXJkIiwiV3JhcHBlciIsIkZyYWdtZW50IiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==