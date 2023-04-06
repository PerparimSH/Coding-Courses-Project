"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
var _excluded = ["component", "isAuthenticated"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
    isAuthenticated = _ref.isAuthenticated,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, _extends({}, rest, {
    render: function render(props) {
      return isAuthenticated === true ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/login"
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null),
    isLoggedIn: isLoggedIn
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PrivateRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
/******/ 	__webpack_require__.h = () => ("8bf387e53a2206c95391")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0lBQW1CO0VBQUksRUFBRyxlQUNuRjlDLDBEQUFBLENBQUNDLG9EQUFLO0lBQUNnRCxJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVsRCwwREFBQSxDQUFDaUMsa0RBQVE7RUFBSSxFQUFHLGVBQ2pEakMsMERBQUEsQ0FBQ0csc0RBQVk7SUFBQzhDLElBQUksRUFBQyxZQUFZO0lBQUNDLE9BQU8sZUFBRWxELDBEQUFBLENBQUNnQyxtREFBUyxPQUFJO0lBQUNTLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2xGekMsMERBQUEsQ0FBQ0csc0RBQVk7SUFBQzhDLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRWxELDBEQUFBLENBQUNrQyxpREFBTyxPQUFJO0lBQUNPLFVBQVUsRUFBRUE7RUFBVyxFQUFHLENBQ3ZFLENBQ0UsZUFDYnpDLDBEQUFBLENBQUM0Qiw0Q0FBRyxPQUFHLGVBQ1A1QiwwREFBQSxDQUFDeUIsK0NBQU0sT0FBRyxDQUNUO0FBRVAsQ0FBQztBQUVEUCw2Q0FBZSxlQUFDbEIsMERBQUEsQ0FBQ3FDLEdBQUcsT0FBRyxFQUFFYyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUN2RXhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9Qcml2YXRlUm91dGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBSb3V0ZSwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcblxyXG5jb25zdCBQcml2YXRlUm91dGUgPSAoeyBjb21wb25lbnQ6IENvbXBvbmVudCwgaXNBdXRoZW50aWNhdGVkLCAuLi5yZXN0IH0pID0+IChcclxuICA8Um91dGUgey4uLnJlc3R9IHJlbmRlcj17KHByb3BzKSA9PiAoXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQgPT09IHRydWVcclxuICAgICAgPyA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgOiA8UmVkaXJlY3QgdG89Jy9sb2dpbicgLz5cclxuICApfSAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVJvdXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICBIYXNoUm91dGVyLFxyXG4gIFJvdXRlLFxyXG4gIFJvdXRlcyxcclxuICBMaW5rLFxyXG4gIE5hdkxpbmssXHJcbiAgT3V0bGV0LFxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBBYm91dFVTIGZyb20gXCIuL0Fib3V0VVNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIjtcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIjtcclxuaW1wb3J0IENvbnRhY3RVUyBmcm9tIFwiLi9Db250YWN0VVNcIjtcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xyXG5pbXBvcnQgUHJlbWl1bSBmcm9tIFwiLi9QcmVtaXVtXCI7XHJcbmltcG9ydCBQcml2YXRlUm91dGUgZnJvbSBcIi4vUHJpdmF0ZVJvdXRlXCI7XHJcblxyXG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8QmFubmVyIC8+XHJcbiAgICAgIDxBYm91dFVTIC8+XHJcbiAgICAgIDxDb250YWN0VVMgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkSXNMb2dnZWRJbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2dlZEluJyk7XHJcbiAgICBpZiAoc3RvcmVkSXNMb2dnZWRJbiA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lzTG9nZ2VkSW4nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgPEhlYWRlciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSBoYW5kbGVMb2dvdXQ9e2hhbmRsZUxvZ291dH0gLz5cclxuICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcmljZXNcIiBlbGVtZW50PXs8UHJpY2VzIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW4gaGFuZGxlTG9naW5TdWNjZXNzPXtoYW5kbGVMb2dpblN1Y2Nlc3N9IC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICA8UHJpdmF0ZVJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PERhc2hib2FyZCAvPn0gaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cclxuICAgICAgICAgIDxQcml2YXRlUm91dGUgcGF0aD1cIi9wcmVtaXVtXCIgZWxlbWVudD17PFByZW1pdW0gLz59IGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IC8+XHJcbiAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgPFRPUCAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGJmMzg3ZTUzYTIyMDZjOTUzOTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZSIsIlJlZGlyZWN0IiwiUHJpdmF0ZVJvdXRlIiwiX3JlZiIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsImlzQXV0aGVudGljYXRlZCIsInJlc3QiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJyZW5kZXIiLCJwcm9wcyIsInRvIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdERPTSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIkRhc2hib2FyZCIsIlJlZ2lzdGVyIiwiUHJlbWl1bSIsIldyYXBwZXIiLCJGcmFnbWVudCIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwic3RvcmVkSXNMb2dnZWRJbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVMb2dpblN1Y2Nlc3MiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwicGF0aCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==