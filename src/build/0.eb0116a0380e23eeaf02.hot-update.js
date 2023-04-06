self["webpackHotUpdatees6_react"](0,{

/***/ 48:
/***/ (() => {



/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(35);
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
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48);
/* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_PrivateRoute__WEBPACK_IMPORTED_MODULE_13__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (storedIsLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  var handleLoginSuccess = function handleLoginSuccess() {
    setIsLoggedIn(true);
  };
  var handleLogout = function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isLoggedIn: isLoggedIn,
    handleLogout: handleLogout
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleLoginSuccess: handleLoginSuccess
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Register__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_PrivateRoute__WEBPACK_IMPORTED_MODULE_13___default()), {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    isLoggedIn: isLoggedIn
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_PrivateRoute__WEBPACK_IMPORTED_MODULE_13___default()), {
    path: "/premium",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Premium__WEBPACK_IMPORTED_MODULE_12__["default"], null),
    isLoggedIn: isLoggedIn
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("41fc1f7af72df1ed364c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBZSxlQUFDSCwwREFBQSxDQUFDeUIsR0FBRyxPQUFHLEVBQUVlLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ3ZFeEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gIEhhc2hSb3V0ZXIsXHJcbiAgUm91dGUsXHJcbiAgUm91dGVzLFxyXG4gIExpbmssXHJcbiAgTmF2TGluayxcclxuICBPdXRsZXQsXHJcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEFib3V0VVMgZnJvbSBcIi4vQWJvdXRVU1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiO1xyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiO1xyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiO1xyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL1ByaWNlc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBQcmVtaXVtIGZyb20gXCIuL1ByZW1pdW1cIjtcclxuaW1wb3J0IFByaXZhdGVSb3V0ZSBmcm9tIFwiLi9Qcml2YXRlUm91dGVcIjtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgPEFib3V0VVMgLz5cclxuICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRJc0xvZ2dlZEluID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzTG9nZ2VkSW4nKTtcclxuICAgIGlmIChzdG9yZWRJc0xvZ2dlZEluID09PSAndHJ1ZScpIHtcclxuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luU3VjY2VzcyA9ICgpID0+IHtcclxuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNMb2dnZWRJbicpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICA8SGVhZGVyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IGhhbmRsZUxvZ291dD17aGFuZGxlTG9nb3V0fSAvPlxyXG4gICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlciAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiBoYW5kbGVMb2dpblN1Y2Nlc3M9e2hhbmRsZUxvZ2luU3VjY2Vzc30gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlciAvPn0gLz5cclxuICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi9kYXNoYm9hcmRcIiBlbGVtZW50PXs8RGFzaGJvYXJkIC8+fSBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSAvPlxyXG4gICAgICAgICAgPFByaXZhdGVSb3V0ZSBwYXRoPVwiL3ByZW1pdW1cIiBlbGVtZW50PXs8UHJlbWl1bSAvPn0gaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cclxuICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgPC9IYXNoUm91dGVyPlxyXG4gICAgICA8VE9QIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0MWZjMWY3YWY3MmRmMWVkMzY0Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIkRhc2hib2FyZCIsIlJlZ2lzdGVyIiwiUHJlbWl1bSIsIlByaXZhdGVSb3V0ZSIsIldyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInN0b3JlZElzTG9nZ2VkSW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlTG9naW5TdWNjZXNzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=