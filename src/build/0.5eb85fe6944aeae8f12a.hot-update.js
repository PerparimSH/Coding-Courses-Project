self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ (() => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function MainHeader(props) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  var handleLogin = function handleLogin() {
    setIsLoggedIn(true);
  };
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
  }, "Contact")), isLoggedIn ? /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/logout"
  }, "Logout")) : /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
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
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46);
/* harmony import */ var _Premium__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47);
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
  var handleLoginSuccess = function handleLoginSuccess() {
    // Do something after successful login
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Header__WEBPACK_IMPORTED_MODULE_2___default()), {
    isLoggedIn: isLoggedIn
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
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
/******/ 	__webpack_require__.h = () => ("3fa9d8b2875fee5fe428")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDRywwREFBQSxDQUFDVyxxREFBTSxxQkFDTFgsMERBQUEsQ0FBQ1Usb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRTdCLDBEQUFBLENBQUN3QixPQUFPO0VBQUksRUFBRyxlQUN4Q3hCLDBEQUFBLENBQUNVLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsU0FBUztJQUFDQyxPQUFPLGVBQUU3QiwwREFBQSxDQUFDbUIsK0NBQU07RUFBSSxFQUFHLGVBQzdDbkIsMERBQUEsQ0FBQ1Usb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRTdCLDBEQUFBLENBQUNvQiw4Q0FBSztNQUFDTyxrQkFBa0IsRUFBRUE7SUFBbUI7RUFBSSxFQUFHLGVBQ25GM0IsMERBQUEsQ0FBQ1Usb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxXQUFXO0lBQUNDLE9BQU8sZUFBRTdCLDBEQUFBLENBQUNzQixrREFBUTtFQUFJLEVBQUcsZUFDakR0QiwwREFBQSxDQUFDVSxvREFBSztJQUFDa0IsSUFBSSxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxlQUFFN0IsMERBQUEsQ0FBQ3FCLG1EQUFTO0VBQUksRUFBRyxlQUNuRHJCLDBEQUFBLENBQUNVLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUU3QiwwREFBQSxDQUFDdUIsaURBQU87RUFBSSxFQUFHLENBQ3hDLENBQ0UsZUFDYnZCLDBEQUFBLENBQUNpQiw0Q0FBRyxPQUFHLGVBQ1BqQiwwREFBQSxDQUFDYywrQ0FBTSxPQUFHLENBQ1Q7QUFFUCxDQUFDO0FBRUROLDZDQUFlLGVBQUNSLDBEQUFBLENBQUMwQixHQUFHLE9BQUcsRUFBRUssUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDN0QxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTWFpbkhlYWRlcihwcm9wcykge1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcHJpY2VzXCI+UHJpY2VzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2Fib3V0XCI+QWJvdXQgdXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICB7aXNMb2dnZWRJbiA/IChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dvdXRcIj5Mb2dvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+PC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8T3V0bGV0IC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gIEhhc2hSb3V0ZXIsXHJcbiAgUm91dGUsXHJcbiAgUm91dGVzLFxyXG4gIExpbmssXHJcbiAgTmF2TGluayxcclxuICBPdXRsZXQsXHJcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEFib3V0VVMgZnJvbSBcIi4vQWJvdXRVU1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiO1xyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiO1xyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiO1xyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL1ByaWNlc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBQcmVtaXVtIGZyb20gXCIuL1ByZW1pdW1cIjtcclxuXHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgIDxBYm91dFVTIC8+XHJcbiAgICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgPEhlYWRlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSAvPlxyXG4gICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luIGhhbmRsZUxvZ2luU3VjY2Vzcz17aGFuZGxlTG9naW5TdWNjZXNzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByZW1pdW1cIiBlbGVtZW50PXs8UHJlbWl1bSAvPn0gLz5cclxuICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNmYTlkOGIyODc1ZmVlNWZlNDI4XCIpIl0sIm5hbWVzIjpbIk1haW5IZWFkZXIiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJoYW5kbGVMb2dpbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsIkxpbmsiLCJ0byIsIk91dGxldCIsInVzZUVmZmVjdCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTmF2TGluayIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIkRhc2hib2FyZCIsIlJlZ2lzdGVyIiwiUHJlbWl1bSIsIldyYXBwZXIiLCJGcmFnbWVudCIsIkFwcCIsImhhbmRsZUxvZ2luU3VjY2VzcyIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=