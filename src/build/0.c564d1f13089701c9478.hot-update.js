self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\HP\\Desktop\\Projekti\\04_Exercise_4\\js\\Carier.js: Unexpected token (6:4)\n\n\u001b[0m \u001b[90m 4 |\u001b[39m   \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 |\u001b[39m     )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m test\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.unexpected (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:3291:16)\n    at JSXParserMixin.parseParenAndDistinguishExpression (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:11505:12)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:11139:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:10870:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:10853:21)\n    at JSXParserMixin.parseMaybeUnary (C:\\Users\\HP\\Desktop\\Projekti\\node_modules\\@babel\\parser\\lib\\index.js:10829:23)");

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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _Carier__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _Carier__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Carier__WEBPACK_IMPORTED_MODULE_10__);












var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Carier__WEBPACK_IMPORTED_MODULE_10___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6ffbd63949a9daeb512f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNTY0ZDFmMTMwODk3MDFjOTQ3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFRTDtBQUNFO0FBQ0Q7QUFDRTtBQUNGO0FBQ047QUFDWTtBQUNMO0FBQ0Y7QUFDRTtBQUc5QixJQUFNa0IsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixvQkFDSWxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNBQSwwREFBQSxDQUFDWSwrQ0FBTSxPQUFHLGVBQ1ZaLDBEQUFBLENBQUNpQixpREFBTSxPQUFHLGVBQ1ZqQiwwREFBQSxDQUFDVyxnREFBTyxPQUFHLGVBQ1hYLDBEQUFBLENBQUNjLGtEQUFTLE9BQUcsQ0FDVjtBQUVYLENBQUM7QUFHRCxJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBRUlyQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDQUEsMERBQUEsQ0FBQ0cseURBQVUscUJBQ1BILDBEQUFBLENBQUNTLCtDQUFNLE9BQUcsZUFDVlQsMERBQUEsQ0FBQ0sscURBQU0scUJBQ1BMLDBEQUFBLENBQUNJLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUV2QiwwREFBQSxDQUFDa0IsT0FBTztFQUFHLEVBQUcsZUFDdkNsQiwwREFBQSxDQUFDSSxvREFBSztJQUFDa0IsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFdkIsMERBQUEsQ0FBQ2UsK0NBQU07RUFBRyxFQUFHLGVBQzVDZiwwREFBQSxDQUFDSSxvREFBSztJQUFDa0IsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFdkIsMERBQUEsQ0FBQ2dCLDhDQUFLO0VBQUcsRUFBRyxDQUNqQyxDQUNBLGVBQ1RoQiwwREFBQSxDQUFDYSw0Q0FBRyxPQUFHLGVBQ1BiLDBEQUFBLENBQUNVLCtDQUFNLE9BQUcsQ0FDWDtBQUVYLENBQUM7QUFFRFIsNkNBQWUsZUFBQ0YsMERBQUEsQ0FBQ3FCLEdBQUcsT0FBRSxFQUFFSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuRHZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiXHJcbmltcG9ydCBBYm91dFVTIGZyb20gXCIuL0Fib3V0VVNcIlxyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiXHJcbmltcG9ydCBUT1AgZnJvbSBcIi4vVE9QXCJcclxuaW1wb3J0IENvbnRhY3RVUyBmcm9tIFwiLi9Db250YWN0VVNcIlxyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL1ByaWNlc1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjsgIFxyXG5pbXBvcnQgQ2FyaWVyIGZyb20gXCIuL0NhcmllclwiO1xyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgIDxDYXJpZXIgLz5cclxuICAgICAgICA8QWJvdXRVUyAvPlxyXG4gICAgICAgIDxDb250YWN0VVMgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcy8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8L0hhc2hSb3V0ZXI+IFxyXG4gICAgICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZmZmJkNjM5NDlhOWRhZWI1MTJmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIkNhcmllciIsIldyYXBwZXIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJBcHAiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9