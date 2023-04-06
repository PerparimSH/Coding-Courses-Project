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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './MainHeader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Home'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  var handleLogin = function handleLogin() {
    // TODO: Implement login functionality
    setIsLoggedIn(true);
  };
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
    setIsLoggedIn(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module './MainHeader'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    isLoggedIn: isLoggedIn,
    onLogout: handleLogout
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module './Home'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onLogin: handleLogin
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_4__["default"], null)
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b881f9eaa883dd3dcc05")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMThiYzA4ZDZiOTMwOTVlZmNhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDcUI7QUFDdkI7QUFDWjtBQUNJO0FBQ0Y7QUFDUTtBQUVwQyxTQUFTVSxHQUFHQSxDQUFBLEVBQUc7RUFFYixJQUFBQyxTQUFBLEdBQW9DViwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBVyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1Q0csVUFBVSxHQUFBRixVQUFBO0lBQUVHLGFBQWEsR0FBQUgsVUFBQTtFQUVoQyxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3hCO0lBQ0FELGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDckIsQ0FBQztFQUVELElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekI7SUFDQUYsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0QixDQUFDO0VBRUQsb0JBQ0VmLDBEQUFBLENBQUNFLHdEQUFVLHFCQUNURiwwREFBQSxDQUFDSywySUFBVTtJQUFDUyxVQUFVLEVBQUVBLFVBQVc7SUFBQ0ssUUFBUSxFQUFFRjtFQUFhLEVBQUcsZUFDOURqQiwwREFBQSxDQUFDSSxvREFBTSxxQkFDTEosMERBQUEsQ0FBQ0csbURBQUs7SUFBQ2lCLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNNLHFJQUFJO0VBQUksRUFBRyxlQUNyQ04sMERBQUEsQ0FBQ0csbURBQUs7SUFBQ2lCLElBQUksRUFBQyxTQUFTO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNPLCtDQUFNO0VBQUksRUFBRyxlQUM3Q1AsMERBQUEsQ0FBQ0csbURBQUs7SUFBQ2lCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXJCLDBEQUFBLENBQUNRLDhDQUFLO01BQUNjLE9BQU8sRUFBRU47SUFBWTtFQUFJLEVBQUcsZUFDakVoQiwwREFBQSxDQUFDRyxtREFBSztJQUFDaUIsSUFBSSxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxlQUFFckIsMERBQUEsQ0FBQ1Msa0RBQVM7RUFBSSxFQUFHLENBQzVDLENBQ0U7QUFFakI7QUFFQSxpRUFBZUMsR0FBRzs7Ozs7Ozs7VUNuQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSAnLi9NYWluSGVhZGVyJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcclxuaW1wb3J0IFByaWNlcyBmcm9tICcuL1ByaWNlcyc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuL0Rhc2hib2FyZCc7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblxyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9naW4gZnVuY3Rpb25hbGl0eVxyXG4gICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2dvdXQgZnVuY3Rpb25hbGl0eVxyXG4gICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgIDxNYWluSGVhZGVyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IG9uTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XHJcbiAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcyAvPn0gLz5cclxuICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiBvbkxvZ2luPXtoYW5kbGVMb2dpbn0gLz59IC8+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PERhc2hib2FyZCAvPn0gLz5cclxuICAgICAgPC9Sb3V0ZXM+XHJcbiAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiODgxZjllYWE4ODNkZDNkY2MwNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTWFpbkhlYWRlciIsIkhvbWUiLCJQcmljZXMiLCJMb2dpbiIsIkRhc2hib2FyZCIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dvdXQiLCJjcmVhdGVFbGVtZW50Iiwib25Mb2dvdXQiLCJwYXRoIiwiZWxlbWVudCIsIm9uTG9naW4iXSwic291cmNlUm9vdCI6IiJ9