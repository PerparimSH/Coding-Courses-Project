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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/******/ 	__webpack_require__.h = () => ("30e833a2cae5379d65dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOWZlYjlhMWQ4MGUxODBmNmIyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2xCO0FBUVA7QUFDSTtBQUNBO0FBQ0U7QUFDRjtBQUNOO0FBQ1k7QUFDTjtBQUNGO0FBQ1E7QUFDRjtBQUNGO0FBSWhDLElBQU1xQixPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLG9CQUNFckIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLENBQUNhLCtDQUFNLE9BQUcsZUFDVmIsMERBQUEsQ0FBQ1ksZ0RBQU8sT0FBRyxlQUNYWiwwREFBQSxDQUFDZSxrREFBUyxPQUFHLENBQ1o7QUFFUCxDQUFDO0FBRUQsSUFBTVMsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUVoQixJQUFBQyxTQUFBLEdBQW9DeEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXlCLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVDRyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBRWhDLElBQU1JLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUM3QjtFQUFBLENBQ0Q7RUFFSCxvQkFDRTlCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQSxDQUFDSSx5REFBVSxxQkFDVEosMERBQUEsQ0FBQ1UsK0NBQU07SUFBQ2tCLFVBQVUsRUFBRUE7RUFBVyxFQUFHLGVBQ2xDNUIsMERBQUEsQ0FBQ00scURBQU0scUJBQ0xOLDBEQUFBLENBQUNLLG9EQUFLO0lBQUMwQixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVoQywwREFBQSxDQUFDcUIsT0FBTztFQUFJLEVBQUcsZUFDeENyQiwwREFBQSxDQUFDSyxvREFBSztJQUFDMEIsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFaEMsMERBQUEsQ0FBQ2dCLCtDQUFNO0VBQUksRUFBRyxlQUM3Q2hCLDBEQUFBLENBQUNLLG9EQUFLO0lBQUMwQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUVoQywwREFBQSxDQUFDaUIsOENBQUs7TUFBQ2Esa0JBQWtCLEVBQUVBO0lBQW1CO0VBQUksRUFBRyxlQUNuRjlCLDBEQUFBLENBQUNLLG9EQUFLO0lBQUMwQixJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUVoQywwREFBQSxDQUFDbUIsa0RBQVE7RUFBSSxFQUFHLGVBQ2pEbkIsMERBQUEsQ0FBQ0ssb0RBQUs7SUFBQzBCLElBQUksRUFBQyxZQUFZO0lBQUNDLE9BQU8sZUFBRWhDLDBEQUFBLENBQUNrQixtREFBUztFQUFJLEVBQUcsZUFDbkRsQiwwREFBQSxDQUFDSyxvREFBSztJQUFDMEIsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFaEMsMERBQUEsQ0FBQ29CLGlEQUFPO0VBQUksRUFBRyxDQUN4QyxDQUNFLGVBQ2JwQiwwREFBQSxDQUFDYyw0Q0FBRyxPQUFHLGVBQ1BkLDBEQUFBLENBQUNXLCtDQUFNLE9BQUcsQ0FDVDtBQUVQLENBQUM7QUFFRFIsNkNBQWUsZUFBQ0gsMERBQUEsQ0FBQ3dCLEdBQUcsT0FBRyxFQUFFVSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUM3RDFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICBIYXNoUm91dGVyLFxyXG4gIFJvdXRlLFxyXG4gIFJvdXRlcyxcclxuICBMaW5rLFxyXG4gIE5hdkxpbmssXHJcbiAgT3V0bGV0LFxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBBYm91dFVTIGZyb20gXCIuL0Fib3V0VVNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIjtcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIjtcclxuaW1wb3J0IENvbnRhY3RVUyBmcm9tIFwiLi9Db250YWN0VVNcIjtcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xyXG5pbXBvcnQgUHJlbWl1bSBmcm9tIFwiLi9QcmVtaXVtXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8QWJvdXRVUyAvPlxyXG4gICAgICAgIDxDb250YWN0VVMgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIERvIHNvbWV0aGluZyBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgIDxIZWFkZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gLz5cclxuICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxXcmFwcGVyIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcmljZXNcIiBlbGVtZW50PXs8UHJpY2VzIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbiBoYW5kbGVMb2dpblN1Y2Nlc3M9e2hhbmRsZUxvZ2luU3VjY2Vzc30gLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgZWxlbWVudD17PFJlZ2lzdGVyIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kYXNoYm9hcmRcIiBlbGVtZW50PXs8RGFzaGJvYXJkIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcmVtaXVtXCIgZWxlbWVudD17PFByZW1pdW0gLz59IC8+XHJcbiAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMGU4MzNhMmNhZTUzNzlkNjVkZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIkRhc2hib2FyZCIsIlJlZ2lzdGVyIiwiUHJlbWl1bSIsIldyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsImhhbmRsZUxvZ2luU3VjY2VzcyIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=