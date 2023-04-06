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
  var confirmButton = document.getElementById('confirm-button');
  confirmButton.addEventListener('click', function () {
    this.parentNode.close();
  });
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Thanks for your order!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You have selected the Basic plan for $25."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    id: "confirm-button"
  }, "Confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "proffesional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Proffesional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "500 MB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "25 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "One years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Full support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Thanks for your order!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You have selected the Basic plan for $25."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "premium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "$100"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "2 GB HDD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "5 Subdomain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "20 E-mails"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Two years license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Full support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Thanks for your order!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You have selected the Basic plan for $25."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Confirm")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d781c79f36de0f3515fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BCbEIsMERBQUEsYUFBSSx3QkFBc0IsQ0FBSyxlQUMvQkEsMERBQUEsWUFBRywyQ0FBeUMsQ0FBSSxlQUNoREEsMERBQUEsaUJBQVEsU0FBTyxDQUFTLENBRTNCLENBRUQsQ0FDQSxDQUNDO0FBR1A7QUFFQSxpRUFBZUUsTUFBTTs7Ozs7Ozs7VUN2RnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmljZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZnVuY3Rpb24gUHJpY2VzKCkge1xyXG4gIFxyXG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1idXR0b24nKTtcclxuICBcclxuICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuY2xvc2UoKTtcclxuICB9KTtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXlDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cCh0cnVlKTtcclxuXHJcblxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzcz1cInByaWNlc1wiPlxyXG4gICAgPGgyPlByaWNlczwvaDI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYm94ZXNwcmljZXNcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmFzaWNcIj5cclxuICAgICAgICA8aDM+QmFzaWM8L2gzPlxyXG4gICAgICAgIDxoMT4kMjU8L2gxPlxyXG4gICAgICAgIDxwPjEwMCBNQiBIREQ8L3A+XHJcbiAgICAgICAgPHA+MSBTdWJkb21haW48L3A+XHJcbiAgICAgICAgPHA+MiBFLW1haWxzPC9wPlxyXG4gICAgICAgIDxwPlR3byB5ZWFycyBsaWNlbnNlPC9wPlxyXG4gICAgICAgIDxwPkZ1bGwgc3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgPGgzPlRoYW5rcyBmb3IgeW91ciBvcmRlciE8L2gzPlxyXG4gICAgICAgICAgPHA+WW91IGhhdmUgc2VsZWN0ZWQgdGhlIEJhc2ljIHBsYW4gZm9yICQyNS48L3A+XHJcbiAgICAgICAgICB7LyogPGJ1dHRvbj5Db25maXJtPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmZpcm0tYnV0dG9uXCI+Q29uZmlybTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZmZlc2lvbmFsXCI+XHJcbiAgICAgICAgPGgzPlByb2ZmZXNpb25hbDwvaDM+XHJcbiAgICAgICAgPGgxPiQ1MDwvaDE+XHJcbiAgICAgICAgPHA+NTAwIE1CIEhERDwvcD5cclxuICAgICAgICA8cD4yIFN1YmRvbWFpbjwvcD5cclxuICAgICAgICA8cD4yNSBFLW1haWxzPC9wPlxyXG4gICAgICAgIDxwPk9uZSB5ZWFycyBsaWNlbnNlPC9wPlxyXG4gICAgICAgIDxwPkZ1bGwgc3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgPGgzPlRoYW5rcyBmb3IgeW91ciBvcmRlciE8L2gzPlxyXG4gICAgICAgICAgPHA+WW91IGhhdmUgc2VsZWN0ZWQgdGhlIEJhc2ljIHBsYW4gZm9yICQyNS48L3A+XHJcbiAgICAgICAgICA8YnV0dG9uPkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJlbWl1bVwiPlxyXG4gICAgICAgIDxoMz5QcmVtaXVtPC9oMz5cclxuICAgICAgICA8aDE+JDEwMDwvaDE+XHJcbiAgICAgICAgPHA+MiBHQiBIREQ8L3A+XHJcbiAgICAgICAgPHA+NSBTdWJkb21haW48L3A+XHJcbiAgICAgICAgPHA+MjAgRS1tYWlsczwvcD5cclxuICAgICAgICA8cD5Ud28geWVhcnMgbGljZW5zZTwvcD5cclxuICAgICAgICA8cD5GdWxsIHN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgIDxoMz5UaGFua3MgZm9yIHlvdXIgb3JkZXIhPC9oMz5cclxuICAgICAgICAgIDxwPllvdSBoYXZlIHNlbGVjdGVkIHRoZSBCYXNpYyBwbGFuIGZvciAkMjUuPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbj5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgIFxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbiAgICA8Lz5cclxuXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ3ODFjNzlmMzZkZTBmMzUxNWZhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmljZXMiLCJjb25maXJtQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwiY2xvc2UiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJoYW5kbGVCdXlDbGljayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=