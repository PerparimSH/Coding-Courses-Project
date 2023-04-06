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
    var confirmButton = document.getElementById('confirm-button');
    confirmButton.addEventListener('click', function () {
      this.parentNode.close();
    });
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
/******/ 	__webpack_require__.h = () => ("4f801919dd0131d8b9bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3BCbEIsMERBQUEsYUFBSSx3QkFBc0IsQ0FBSyxlQUMvQkEsMERBQUEsWUFBRywyQ0FBeUMsQ0FBSSxlQUNoREEsMERBQUEsaUJBQVEsU0FBTyxDQUFTLENBRTNCLENBRUQsQ0FDQSxDQUNDO0FBR1A7QUFFQSxpRUFBZUUsTUFBTTs7Ozs7Ozs7VUN2RnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmljZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByaWNlcygpIHtcclxuXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWJ1dHRvbicpO1xyXG5cclxuICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnBhcmVudE5vZGUuY2xvc2UoKTtcclxuICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmljZXNcIj5cclxuICAgIDxoMj5QcmljZXM8L2gyPlxyXG4gICAgPGRpdiBjbGFzcz1cImJveGVzcHJpY2VzXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJhc2ljXCI+XHJcbiAgICAgICAgPGgzPkJhc2ljPC9oMz5cclxuICAgICAgICA8aDE+JDI1PC9oMT5cclxuICAgICAgICA8cD4xMDAgTUIgSEREPC9wPlxyXG4gICAgICAgIDxwPjEgU3ViZG9tYWluPC9wPlxyXG4gICAgICAgIDxwPjIgRS1tYWlsczwvcD5cclxuICAgICAgICA8cD5Ud28geWVhcnMgbGljZW5zZTwvcD5cclxuICAgICAgICA8cD5GdWxsIHN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgIDxoMz5UaGFua3MgZm9yIHlvdXIgb3JkZXIhPC9oMz5cclxuICAgICAgICAgIDxwPllvdSBoYXZlIHNlbGVjdGVkIHRoZSBCYXNpYyBwbGFuIGZvciAkMjUuPC9wPlxyXG4gICAgICAgICAgey8qIDxidXR0b24+Q29uZmlybTwvYnV0dG9uPiAqL31cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJjb25maXJtLWJ1dHRvblwiPkNvbmZpcm08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2ZmZXNpb25hbFwiPlxyXG4gICAgICAgIDxoMz5Qcm9mZmVzaW9uYWw8L2gzPlxyXG4gICAgICAgIDxoMT4kNTA8L2gxPlxyXG4gICAgICAgIDxwPjUwMCBNQiBIREQ8L3A+XHJcbiAgICAgICAgPHA+MiBTdWJkb21haW48L3A+XHJcbiAgICAgICAgPHA+MjUgRS1tYWlsczwvcD5cclxuICAgICAgICA8cD5PbmUgeWVhcnMgbGljZW5zZTwvcD5cclxuICAgICAgICA8cD5GdWxsIHN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgIDxoMz5UaGFua3MgZm9yIHlvdXIgb3JkZXIhPC9oMz5cclxuICAgICAgICAgIDxwPllvdSBoYXZlIHNlbGVjdGVkIHRoZSBCYXNpYyBwbGFuIGZvciAkMjUuPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbj5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByZW1pdW1cIj5cclxuICAgICAgICA8aDM+UHJlbWl1bTwvaDM+XHJcbiAgICAgICAgPGgxPiQxMDA8L2gxPlxyXG4gICAgICAgIDxwPjIgR0IgSEREPC9wPlxyXG4gICAgICAgIDxwPjUgU3ViZG9tYWluPC9wPlxyXG4gICAgICAgIDxwPjIwIEUtbWFpbHM8L3A+XHJcbiAgICAgICAgPHA+VHdvIHllYXJzIGxpY2Vuc2U8L3A+XHJcbiAgICAgICAgPHA+RnVsbCBzdXBwb3J0PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICA8aDM+VGhhbmtzIGZvciB5b3VyIG9yZGVyITwvaDM+XHJcbiAgICAgICAgICA8cD5Zb3UgaGF2ZSBzZWxlY3RlZCB0aGUgQmFzaWMgcGxhbiBmb3IgJDI1LjwvcD5cclxuICAgICAgICAgIDxidXR0b24+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICBcclxuPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZjgwMTkxOWRkMDEzMWQ4YjliZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGFuZGxlQnV5Q2xpY2siLCJjb25maXJtQnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJlbnROb2RlIiwiY2xvc2UiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9