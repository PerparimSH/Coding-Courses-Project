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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Basic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "250\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-time"
  }), " 1 Months of lessons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-book"
  }), " Learn HTML/CSS "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-file-text"
  }), " You get a worldwide approved license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-user"
  }), " 24/7 Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Confirm Your Purchase!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleConfirmClick
  }, "Confirm")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "proffesional"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Proffesional"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "500\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-time"
  }), " 2 Months of lessons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-book"
  }), " Learn HTML/CSS/JavaScript"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-file-text"
  }), " You get a worldwide approved license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
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
  }), " Premium"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "1000\u20AC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-time"
  }), " 3 Months of lessons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-book"
  }), " Learn HTML/CSS/JavaScript/React"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-file-text"
  }), " You get a worldwide approved license"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-user"
  }), " 24/7 Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBuyClick
  }, "Buy")), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Confirm Your Purchase!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleConfirmClick
  }, "Confirm")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    "class": "texti"
  }, "Why choose CodersLAB?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "sektori"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "klasa"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divipar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-eur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Installment Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You can split the payment into installments. The amount and number of installments depends on the course and payment plan you choose.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dividyt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-money"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Money Back Guarantee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "If, for any reason, you are unable to complete the program in which you are enrolled, you will receive a refund for the portion of the course that you did not complete.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divitret"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-ok-circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "A Trusted Course"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Since 2000, we have been focused on helping students achieve the best possible result, and securing a high-paying job.")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("32823f0e1451b6f709b0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUHJpY2VzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUHJpY2VzKCkge1xyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BvcHVwKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1DbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzXCI+XHJcbiAgICAgICAgPGgyPlByaWNlczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlc3ByaWNlc1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWNcIj5cclxuICAgICAgICAgICAgPGgzPkJhc2ljPC9oMz5cclxuICAgICAgICAgICAgPGgxPjI1MOKCrDwvaDE+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi10aW1lXCI+PC9pPiAxIE1vbnRocyBvZiBsZXNzb25zPC9wPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tYm9va1wiPjwvaT4gTGVhcm4gSFRNTC9DU1MgPC9wPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tZmlsZS10ZXh0XCI+PC9pPiBZb3UgZ2V0IGEgd29ybGR3aWRlIGFwcHJvdmVkIGxpY2Vuc2U8L3A+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Db25maXJtIFlvdXIgUHVyY2hhc2UhPC9oMz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1DbGlja30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2ZmZXNpb25hbFwiPlxyXG4gICAgICAgIDxoMz5Qcm9mZmVzaW9uYWw8L2gzPlxyXG4gICAgICAgIDxoMT41MDDigqw8L2gxPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi10aW1lXCI+PC9pPiAyIE1vbnRocyBvZiBsZXNzb25zPC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1ib29rXCI+PC9pPiBMZWFybiBIVE1ML0NTUy9KYXZhU2NyaXB0PC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1maWxlLXRleHRcIj48L2k+IFlvdSBnZXQgYSB3b3JsZHdpZGUgYXBwcm92ZWQgbGljZW5zZTwvcD5cclxuICAgICAgICA8cD48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gMjQvNyBTdXBwb3J0PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Db25maXJtIFlvdXIgUHVyY2hhc2UhPC9oMz5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJlbWl1bVwiPlxyXG4gICAgPGgzPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+IFByZW1pdW08L2gzPlxyXG48aDE+MTAwMOKCrDwvaDE+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi10aW1lXCI+PC9pPiAzIE1vbnRocyBvZiBsZXNzb25zPC9wPlxyXG48cD48aSBjbGFzcz1cImljb24tYm9va1wiPjwvaT4gTGVhcm4gSFRNTC9DU1MvSmF2YVNjcmlwdC9SZWFjdDwvcD5cclxuPHA+PGkgY2xhc3M9XCJpY29uLWZpbGUtdGV4dFwiPjwvaT4gWW91IGdldCBhIHdvcmxkd2lkZSBhcHByb3ZlZCBsaWNlbnNlPC9wPlxyXG48cD48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gMjQvNyBTdXBwb3J0PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Db25maXJtIFlvdXIgUHVyY2hhc2UhPC9oMz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1DbGlja30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgIFxyXG48L2Rpdj5cclxuPC9kaXY+XHJcbjxocj48L2hyPlxyXG48aDIgY2xhc3M9XCJ0ZXh0aVwiPldoeSBjaG9vc2UgQ29kZXJzTEFCPzwvaDI+XHJcblxyXG48c2VjdGlvbiBjbGFzc05hbWU9J3Nla3RvcmknPlxyXG4gIDxkaXYgY2xhc3NOYW1lPSdrbGFzYSc+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdmlwYXInPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uLWV1clwiPjwvaT5cclxuPGgxPkluc3RhbGxtZW50IFBheW1lbnQ8L2gxPlxyXG48cD5Zb3UgY2FuIHNwbGl0IHRoZSBwYXltZW50IGludG8gaW5zdGFsbG1lbnRzLiBUaGUgYW1vdW50IGFuZCBudW1iZXIgb2YgaW5zdGFsbG1lbnRzIGRlcGVuZHMgb24gdGhlIGNvdXJzZSBhbmQgcGF5bWVudCBwbGFuIHlvdSBjaG9vc2UuPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdmlkeXQnPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uLW1vbmV5XCI+PC9pPlxyXG48aDE+TW9uZXkgQmFjayBHdWFyYW50ZWU8L2gxPlxyXG48cD5JZiwgZm9yIGFueSByZWFzb24sIHlvdSBhcmUgdW5hYmxlIHRvIGNvbXBsZXRlIHRoZSBwcm9ncmFtIGluIHdoaWNoIHlvdSBhcmUgZW5yb2xsZWQsIHlvdSB3aWxsIHJlY2VpdmUgYSByZWZ1bmQgZm9yIHRoZSBwb3J0aW9uIG9mIHRoZSBjb3Vyc2UgdGhhdCB5b3UgZGlkIG5vdCBjb21wbGV0ZS48L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2aXRyZXQnPlxyXG4gICAgPGkgY2xhc3M9XCJpY29uLW9rLWNpcmNsZVwiPjwvaT5cclxuPGgxPkEgVHJ1c3RlZCBDb3Vyc2U8L2gxPlxyXG48cD5TaW5jZSAyMDAwLCB3ZSBoYXZlIGJlZW4gZm9jdXNlZCBvbiBoZWxwaW5nIHN0dWRlbnRzIGFjaGlldmUgdGhlIGJlc3QgcG9zc2libGUgcmVzdWx0LCBhbmQgc2VjdXJpbmcgYSBoaWdoLXBheWluZyBqb2IuPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMjgyM2YwZTE0NTFiNmY3MDliMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGFuZGxlQnV5Q2xpY2siLCJoYW5kbGVDb25maXJtQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==