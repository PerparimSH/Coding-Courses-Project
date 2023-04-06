"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 43:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Prices() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPopup = _useState2[0],
    setShowPopup = _useState2[1];
  var handleBuyClick = function handleBuyClick() {
    setShowPopup(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "prices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Prices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "boxesprices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "basic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Basic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "100 MB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "1 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Two years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Full support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Confirm Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You have selected the Basic plan for $25."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Confirm"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "proffesional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Proffesional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "500 MB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "25 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "One years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Full support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Buy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "premium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 GB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "5 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "20 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Two years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Full support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Buy"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PopUp__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3dd61a5d546332c01baa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsQ0FBQ2UsbURBQVUsT0FBRyxlQUNkZiwwREFBQSxDQUFDd0IscURBQU0scUJBQ1B4QiwwREFBQSxDQUFDdUIsb0RBQUs7SUFBQ1EsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFaEMsMERBQUEsQ0FBQzZCLE9BQU87RUFBRyxFQUFHLGVBQ3ZDN0IsMERBQUEsQ0FBQ3VCLG9EQUFLO0lBQUNRLElBQUksRUFBQyxTQUFTO0lBQUNDLE9BQU8sZUFBRWhDLDBEQUFBLENBQUNFLCtDQUFNO0VBQUcsRUFBRyxDQUNuQyxDQUNBLGVBQ2JGLDBEQUFBLENBQUNxQiw4Q0FBSyxPQUFHLGVBQ0xyQiwwREFBQSxDQUFDbUIsNENBQUcsT0FBRyxlQUNQbkIsMERBQUEsQ0FBQ2dCLCtDQUFNLE9BQUcsQ0FDWDtBQUVYLENBQUM7QUFFREYsNkNBQWUsZUFBQ2QsMERBQUEsQ0FBQzhCLEdBQUcsT0FBRSxFQUFFSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNsRHZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmljZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByaWNlcygpIHtcclxuXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzPVwicHJpY2VzXCI+XHJcbiAgICA8aDI+UHJpY2VzPC9oMj5cclxuICAgIDxkaXYgY2xhc3M9XCJib3hlc3ByaWNlc1wiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJiYXNpY1wiPlxyXG4gICAgICAgIDxoMz5CYXNpYzwvaDM+XHJcbiAgICAgICAgPGgxPiQyNTwvaDE+XHJcbiAgICAgICAgPHA+MTAwIE1CIEhERDwvcD5cclxuICAgICAgICA8cD4xIFN1YmRvbWFpbjwvcD5cclxuICAgICAgICA8cD4yIEUtbWFpbHM8L3A+XHJcbiAgICAgICAgPHA+VHdvIHllYXJzIGxpY2Vuc2U8L3A+XHJcbiAgICAgICAgPHA+RnVsbCBzdXBwb3J0PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICA8aDM+Q29uZmlybSBQdXJjaGFzZTwvaDM+XHJcbiAgICAgICAgICA8cD5Zb3UgaGF2ZSBzZWxlY3RlZCB0aGUgQmFzaWMgcGxhbiBmb3IgJDI1LjwvcD5cclxuICAgICAgICAgIDxidXR0b24+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2ZmZXNpb25hbFwiPlxyXG4gICAgICAgIDxoMz5Qcm9mZmVzaW9uYWw8L2gzPlxyXG4gICAgICAgIDxoMT4kNTA8L2gxPlxyXG4gICAgICAgIDxwPjUwMCBNQiBIREQ8L3A+XHJcbiAgICAgICAgPHA+MiBTdWJkb21haW48L3A+XHJcbiAgICAgICAgPHA+MjUgRS1tYWlsczwvcD5cclxuICAgICAgICA8cD5PbmUgeWVhcnMgbGljZW5zZTwvcD5cclxuICAgICAgICA8cD5GdWxsIHN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbj5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmVtaXVtXCI+XHJcbiAgICAgICAgPGgzPlByZW1pdW08L2gzPlxyXG4gICAgICAgIDxoMT4kMTAwPC9oMT5cclxuICAgICAgICA8cD4yIEdCIEhERDwvcD5cclxuICAgICAgICA8cD41IFN1YmRvbWFpbjwvcD5cclxuICAgICAgICA8cD4yMCBFLW1haWxzPC9wPlxyXG4gICAgICAgIDxwPlR3byB5ZWFycyBsaWNlbnNlPC9wPlxyXG4gICAgICAgIDxwPkZ1bGwgc3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uPkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgIFxyXG48L2Rpdj5cclxuey8qIDwvZGl2PiAqL31cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IE1haW5IZWFkZXIgZnJvbSBcIi4vTWFpbkhlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiXHJcbmltcG9ydCBTZWN0aW9ucyBmcm9tIFwiLi9TZWN0aW9uc1wiXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIlxyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiXHJcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XHJcbmltcG9ydCBQb3BVcCBmcm9tIFwiLi9Qb3BVcFwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbnMgLz5cclxuICAgICAgICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPE1haW5IZWFkZXIgLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcy8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8L0hhc2hSb3V0ZXI+IFxyXG4gICAgICAgIDxQb3BVcCAvPlxyXG4gICAgICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNkZDYxYTVkNTQ2MzMyYzAxYmFhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJoYW5kbGVCdXlDbGljayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIk1haW5IZWFkZXIiLCJGb290ZXIiLCJTZWN0aW9ucyIsIkJhbm5lciIsIlRPUCIsIkNvbnRhY3RVUyIsIlBvcFVwIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJOYXZpZ2F0aW9uIiwiV3JhcHBlciIsIkFwcCIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=