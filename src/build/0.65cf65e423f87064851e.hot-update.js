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
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "24/7 Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("d3be69bfe6aa3e79bb64")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUcsU0FBTTtFQUFXLEVBQUssS0FBQyxlQUFBQSwwREFBQSxZQUFTLGdCQUFZLENBQUksZUFDOUNBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUw7RUFBZSxHQUFDLEtBQUcsQ0FBUyxDQUMzQyxFQUNMRixTQUFTLGlCQUNGTiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJaLDBEQUFBLGFBQUksd0JBQXNCLENBQUssZUFDL0JBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUo7RUFBbUIsR0FBQyxTQUFPLENBQVMsQ0FFeEQsQ0FFTCxDQUNBLENBQ0M7QUFHUDtBQUVBLGlFQUFlUCxNQUFNOzs7Ozs7OztVQzdFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL1ByaWNlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFByaWNlcygpIHtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXlDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb25maXJtQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UG9wdXAoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlc1wiPlxyXG4gICAgICAgIDxoMj5QcmljZXM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94ZXNwcmljZXNcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljXCI+XHJcbiAgICAgICAgICAgIDxoMz5CYXNpYzwvaDM+XHJcbiAgICAgICAgICAgIDxoMT4kMjU8L2gxPlxyXG4gICAgICAgICAgICA8cD4xMDAgTUIgSEREPC9wPlxyXG4gICAgICAgICAgICA8cD4xIFN1YmRvbWFpbjwvcD5cclxuICAgICAgICAgICAgPHA+MiBFLW1haWxzPC9wPlxyXG4gICAgICAgICAgICA8cD5Ud28geWVhcnMgbGljZW5zZTwvcD5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZmZlc2lvbmFsXCI+XHJcbiAgICAgICAgPGgzPlByb2ZmZXNpb25hbDwvaDM+XHJcbiAgICAgICAgPGgxPiQ1MDwvaDE+XHJcbiAgICAgICAgPHA+NTAwIE1CIEhERDwvcD5cclxuICAgICAgICA8cD4yIFN1YmRvbWFpbjwvcD5cclxuICAgICAgICA8cD4yNSBFLW1haWxzPC9wPlxyXG4gICAgICAgIDxwPk9uZSB5ZWFycyBsaWNlbnNlPC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmVtaXVtXCI+XHJcbiAgICA8aDM+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4gUHJlbWl1bTwvaDM+XHJcbjxoMT4kMTAwPC9oMT5cclxuPHA+PGkgY2xhc3M9XCJpY29uLWV1clwiPjwvaT4gMiBHQiBIREQ8L3A+XHJcbjxwPjxpIGNsYXNzPVwiZmFzIGZhLWxheWVyLWdyb3VwXCI+PC9pPiA1IFN1YmRvbWFpbjwvcD5cclxuPHA+PGkgY2xhc3M9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+IDIwIEUtbWFpbHM8L3A+XHJcbjxwPjxpIGNsYXNzPVwiZmFzIGZhLXN0b3B3YXRjaFwiPjwvaT4gVHdvIHllYXJzIGxpY2Vuc2U8L3A+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiA8YnI+PC9icj4yNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDNiZTY5YmZlNmFhM2U3OWJiNjRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByaWNlcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImhhbmRsZUJ1eUNsaWNrIiwiaGFuZGxlQ29uZmlybUNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=