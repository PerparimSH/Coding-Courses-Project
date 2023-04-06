self["webpackHotUpdatees6_react"](0,{

/***/ 43:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\HP\\Desktop\\TEST project\\04_Exercise_4\\js\\Prices.js: Identifier 'React' has already been declared. (2:7)\n\n\u001b[0m \u001b[90m 1 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mReact\u001b[39m \u001b[36mfrom\u001b[39m \u001b[32m'react'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 2 |\u001b[39m \u001b[36mimport\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m,\u001b[39m { useState } \u001b[36mfrom\u001b[39m \u001b[32m'react'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 3 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at ScopeHandler.checkRedeclarationInScope (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:1557:19)\n    at ScopeHandler.declareName (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:1528:12)\n    at JSXParserMixin.declareNameFromIdentifier (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:7535:16)\n    at JSXParserMixin.checkIdentifier (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:7531:12)\n    at JSXParserMixin.checkLVal (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:7470:12)\n    at JSXParserMixin.finishImportSpecifier (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:14073:10)\n    at JSXParserMixin.parseImportSpecifierLocal (C:\\Users\\HP\\Desktop\\TEST project\\node_modules\\@babel\\parser\\lib\\index.js:14070:31)");

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Prices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);












var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sections__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Prices__WEBPACK_IMPORTED_MODULE_8___default()), null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PopUp__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("79e4133ff32b20b092ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42YjI2M2VjZTIxMThjMjkyNGNkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFDSztBQUNUO0FBQ0k7QUFDSjtBQUNOO0FBQ1k7QUFDTDtBQUNGO0FBUUE7QUFDVTtBQUd0QyxJQUFNa0IsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixvQkFDSWxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDTSwrQ0FBTSxPQUFHLGVBQ1ZOLDBEQUFBLENBQUNLLGlEQUFRLE9BQUcsZUFDWkwsMERBQUEsQ0FBQ1Esa0RBQVMsT0FBRyxDQUNkO0FBRVgsQ0FBQztBQUdELElBQU1hLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxvQkFFSXJCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNBQSwwREFBQSxDQUFDVyx5REFBVSxxQkFDUFgsMERBQUEsQ0FBQ0csbURBQVUsT0FBRyxlQUNkSCwwREFBQSxDQUFDYSxxREFBTSxxQkFDUGIsMERBQUEsQ0FBQ1ksb0RBQUs7SUFBQ1UsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFdkIsMERBQUEsQ0FBQ2tCLE9BQU87RUFBRyxFQUFHLGVBQ3ZDbEIsMERBQUEsQ0FBQ1ksb0RBQUs7SUFBQ1UsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFdkIsMERBQUEsQ0FBQ1MsZ0RBQU07RUFBRyxFQUFHLENBQ25DLENBQ0EsZUFDYlQsMERBQUEsQ0FBQ1UsOENBQUssT0FBRyxlQUNMViwwREFBQSxDQUFDTyw0Q0FBRyxPQUFHLGVBQ1BQLDBEQUFBLENBQUNJLCtDQUFNLE9BQUcsQ0FDWDtBQUVYLENBQUM7QUFFREYsNkNBQWUsZUFBQ0YsMERBQUEsQ0FBQ3FCLEdBQUcsT0FBRSxFQUFFSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsRHZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi9NYWluSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gXCIuL1NlY3Rpb25zXCJcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiXHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCJcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIjtcclxuaW1wb3J0IFBvcFVwIGZyb20gXCIuL1BvcFVwXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL05hdmlnYXRpb25cIjtcclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9ucyAvPlxyXG4gICAgICAgICAgICA8Q29udGFjdFVTIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8PlxyXG4gICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8TWFpbkhlYWRlciAvPlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlci8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcmljZXNcIiBlbGVtZW50PXs8UHJpY2VzLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgIDwvSGFzaFJvdXRlcj4gXHJcbiAgICAgICAgPFBvcFVwIC8+XHJcbiAgICAgICAgICAgIDxUT1AgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzllNDEzM2ZmMzJiMjBiMDkyYmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIk1haW5IZWFkZXIiLCJGb290ZXIiLCJTZWN0aW9ucyIsIkJhbm5lciIsIlRPUCIsIkNvbnRhY3RVUyIsIlByaWNlcyIsIlBvcFVwIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJOYXZpZ2F0aW9uIiwiV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkFwcCIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=