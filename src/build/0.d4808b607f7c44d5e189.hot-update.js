self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

function MainHeader() {
  var location = useLocation();
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
    localStorage.removeItem('isLoggedIn');
  };
  var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
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
/******/ 	__webpack_require__.h = () => ("05896c47b1207f1ab022")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBQyxTQUFTO0lBQUNDLE9BQU8sZUFBRTNCLDBEQUFBLENBQUNvQiwrQ0FBTTtFQUFHLEVBQUcsZUFDNUNwQiwwREFBQSxDQUFDVyxvREFBSztJQUFDZSxJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUUzQiwwREFBQSxDQUFDcUIsOENBQUs7RUFBRyxFQUFHLGVBQzFDckIsMERBQUEsQ0FBQ1csb0RBQUs7SUFBQ2UsSUFBSSxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxlQUFFM0IsMERBQUEsQ0FBQ3NCLG1EQUFTO0VBQUksRUFBRyxDQUM1QyxDQUNBLGVBQ2J0QiwwREFBQSxDQUFDa0IsNENBQUcsT0FBRyxlQUNQbEIsMERBQUEsQ0FBQ2UsK0NBQU0sT0FBRyxDQUNQO0FBRVgsQ0FBQztBQUVETiw2Q0FBZSxlQUFDVCwwREFBQSxDQUFDeUIsR0FBRyxPQUFFLEVBQUVJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ2xEdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc0xvZ2dlZEluJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0xvZ2dlZEluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzTG9nZ2VkSW4nKSA9PT0gJ3RydWUnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY29kZXJzbGFia29zb3ZhLmNvbS9ibG9ja3MvTWFpbkhlYWRlci9sb2dvQ0xlbi5zdmdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3ByaWNlc1wiPlByaWNlczwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNhYm91dFwiPkFib3V0IHVzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAge2lzTG9nZ2VkSW4gJiYgbG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IWlzTG9nZ2VkSW4gJiYgbG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IEFib3V0VVMgZnJvbSBcIi4vQWJvdXRVU1wiXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIlxyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiXHJcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiOyAgXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPEFib3V0VVMgLz5cclxuICAgICAgICA8Q29udGFjdFVTIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlci8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgIDwvSGFzaFJvdXRlcj4gXHJcbiAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNTg5NmM0N2IxMjA3ZjFhYjAyMlwiKSJdLCJuYW1lcyI6WyJNYWluSGVhZGVyIiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJpc0xvZ2dlZEluIiwiZ2V0SXRlbSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsIkxpbmsiLCJ0byIsInBhdGhuYW1lIiwib25DbGljayIsIk91dGxldCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTmF2TGluayIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIkRhc2hib2FyZCIsIldyYXBwZXIiLCJGcmFnbWVudCIsIkFwcCIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=