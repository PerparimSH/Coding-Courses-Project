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
  var handleConfirmClick = function handleConfirmClick() {
    setShowPopup(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Prices"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxesprices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "basic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Basic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "100 MB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "1 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Two years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-user"
  }), " 24/7 Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Confirm Your Purchase!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleConfirmClick
  }, "Confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "proffesional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Proffesional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "500 MB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "25 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "One years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-user"
  }), " 24/7 Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Confirm Your Purchase!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleConfirmClick
  }, "Confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "premium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-star"
  }), " Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-eur"
  }), " 2 GB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-layer-group"
  }), " 5 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-envelope"
  }), " 20 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "fas fa-stopwatch"
  }), " Two years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-user"
  }), " 24/7 Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Confirm Your Purchase!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleConfirmClick
  }, "Confirm")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65cf65e423f87064851e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUcsU0FBTTtFQUFXLEVBQUssaUJBQWEsQ0FBSSxlQUNyQ0EsMERBQUE7SUFBUWEsT0FBTyxFQUFFTDtFQUFlLEdBQUMsS0FBRyxDQUFTLENBQzNDLEVBQ0xGLFNBQVMsaUJBQ0ZOLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFPLGdCQUNwQlosMERBQUEsYUFBSSx3QkFBc0IsQ0FBSyxlQUMvQkEsMERBQUE7SUFBUWEsT0FBTyxFQUFFSjtFQUFtQixHQUFDLFNBQU8sQ0FBUyxDQUV4RCxDQUVMLENBQ0EsQ0FDQztBQUdQO0FBRUEsaUVBQWVQLE1BQU07Ozs7Ozs7O1VDN0VyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUHJpY2VzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUHJpY2VzKCkge1xyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BvcHVwKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1DbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzXCI+XHJcbiAgICAgICAgPGgyPlByaWNlczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlc3ByaWNlc1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWNcIj5cclxuICAgICAgICAgICAgPGgzPkJhc2ljPC9oMz5cclxuICAgICAgICAgICAgPGgxPiQyNTwvaDE+XHJcbiAgICAgICAgICAgIDxwPjEwMCBNQiBIREQ8L3A+XHJcbiAgICAgICAgICAgIDxwPjEgU3ViZG9tYWluPC9wPlxyXG4gICAgICAgICAgICA8cD4yIEUtbWFpbHM8L3A+XHJcbiAgICAgICAgICAgIDxwPlR3byB5ZWFycyBsaWNlbnNlPC9wPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gMjQvNyBTdXBwb3J0PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8aDM+Q29uZmlybSBZb3VyIFB1cmNoYXNlITwvaDM+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9mZmVzaW9uYWxcIj5cclxuICAgICAgICA8aDM+UHJvZmZlc2lvbmFsPC9oMz5cclxuICAgICAgICA8aDE+JDUwPC9oMT5cclxuICAgICAgICA8cD41MDAgTUIgSEREPC9wPlxyXG4gICAgICAgIDxwPjIgU3ViZG9tYWluPC9wPlxyXG4gICAgICAgIDxwPjI1IEUtbWFpbHM8L3A+XHJcbiAgICAgICAgPHA+T25lIHllYXJzIGxpY2Vuc2U8L3A+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8aDM+Q29uZmlybSBZb3VyIFB1cmNoYXNlITwvaDM+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1DbGlja30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByZW1pdW1cIj5cclxuICAgIDxoMz48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPiBQcmVtaXVtPC9oMz5cclxuPGgxPiQxMDA8L2gxPlxyXG48cD48aSBjbGFzcz1cImljb24tZXVyXCI+PC9pPiAyIEdCIEhERDwvcD5cclxuPHA+PGkgY2xhc3M9XCJmYXMgZmEtbGF5ZXItZ3JvdXBcIj48L2k+IDUgU3ViZG9tYWluPC9wPlxyXG48cD48aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT4gMjAgRS1tYWlsczwvcD5cclxuPHA+PGkgY2xhc3M9XCJmYXMgZmEtc3RvcHdhdGNoXCI+PC9pPiBUd28geWVhcnMgbGljZW5zZTwvcD5cclxuPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8aDM+Q29uZmlybSBZb3VyIFB1cmNoYXNlITwvaDM+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICBcclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NWNmNjVlNDIzZjg3MDY0ODUxZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGFuZGxlQnV5Q2xpY2siLCJoYW5kbGVDb25maXJtQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==