"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46);
/* harmony import */ var _Premium__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var Wrapper = function Wrapper() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loggedIn = _useState2[0],
    setLoggedIn = _useState2[1]; // initial login status is false

  var handleLoginSuccess = function handleLoginSuccess() {
    setLoggedIn(true); // update login status to true after successful login
  };

  var handleLogout = function handleLogout() {
    setLoggedIn(false); // update login status to false after logout
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), loggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Premium__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  var handleLoginSuccess = function handleLoginSuccess() {
    setLoggedIn(true); // update login status to true after successful login
  };

  var handleLogout = function handleLogout() {
    setLoggedIn(false); // update login status to false after logout
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleLoginSuccess: handleLoginSuccess
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Register__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/premium",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Premium__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2adc25826024d9b71d41")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDM0UxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gIEhhc2hSb3V0ZXIsXHJcbiAgUm91dGUsXHJcbiAgUm91dGVzLFxyXG4gIExpbmssXHJcbiAgTmF2TGluayxcclxuICBPdXRsZXQsXHJcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEFib3V0VVMgZnJvbSBcIi4vQWJvdXRVU1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiO1xyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiO1xyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiO1xyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL1ByaWNlc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBQcmVtaXVtIGZyb20gXCIuL1ByZW1pdW1cIjtcclxuXHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gaW5pdGlhbCBsb2dpbiBzdGF0dXMgaXMgZmFsc2VcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW5TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkSW4odHJ1ZSk7IC8vIHVwZGF0ZSBsb2dpbiBzdGF0dXMgdG8gdHJ1ZSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkSW4oZmFsc2UpOyAvLyB1cGRhdGUgbG9naW4gc3RhdHVzIHRvIGZhbHNlIGFmdGVyIGxvZ291dFxyXG4gIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8QWJvdXRVUyAvPlxyXG4gICAgICAgIHtsb2dnZWRJbiAmJiAgPFByZW1pdW0gLz4gfVxyXG4gICAgICAgIDxDb250YWN0VVMgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgIHNldExvZ2dlZEluKHRydWUpOyAvLyB1cGRhdGUgbG9naW4gc3RhdHVzIHRvIHRydWUgYWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpblxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgc2V0TG9nZ2VkSW4oZmFsc2UpOyAvLyB1cGRhdGUgbG9naW4gc3RhdHVzIHRvIGZhbHNlIGFmdGVyIGxvZ291dFxyXG4gICAgfTtcclxuICBcclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luIGhhbmRsZUxvZ2luU3VjY2Vzcz17aGFuZGxlTG9naW5TdWNjZXNzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByZW1pdW1cIiBlbGVtZW50PXs8UHJlbWl1bSAvPn0gLz5cclxuXHJcbiAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYWRjMjU4MjYwMjRkOWI3MWQ0MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJIZWFkZXIiLCJGb290ZXIiLCJBYm91dFVTIiwiQmFubmVyIiwiVE9QIiwiQ29udGFjdFVTIiwiUHJpY2VzIiwiTG9naW4iLCJEYXNoYm9hcmQiLCJSZWdpc3RlciIsIlByZW1pdW0iLCJXcmFwcGVyIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwiaGFuZGxlTG9naW5TdWNjZXNzIiwiaGFuZGxlTG9nb3V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==