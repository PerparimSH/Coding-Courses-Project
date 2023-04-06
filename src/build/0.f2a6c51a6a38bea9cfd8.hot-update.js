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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We integrate seamlessly with WordPress, WebsiteBuilder, and SiteLock, to name a few. We\u2019ll help you get online with ease.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dividyt"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "A domain name is just the beginning. We'll help you host, design, and manage your site. We'll even build it for you, if you'd like.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "divitret"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Since 2000, we've been focused on helping customers find the best domain name as the building block of their online presence.")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6893c4108d3dbb306591")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0EsMERBQUE7SUFBRyxTQUFNO0VBQWdCLEVBQUsseUNBQXFDLENBQUksZUFDMUVBLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHLFNBQU07RUFBVyxFQUFLLGlCQUFhLENBQUksZUFDckNBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUw7RUFBZSxHQUFDLEtBQUcsQ0FBUyxDQUMzQyxFQUNMRixTQUFTLGlCQUNGTiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJaLDBEQUFBLGFBQUksd0JBQXNCLENBQUssZUFDL0JBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUo7RUFBbUIsR0FBQyxTQUFPLENBQVMsQ0FFeEQsQ0FFTCxDQUNBLGVBQ05ULDBEQUFBLFlBQVMsZUFDVEEsMERBQUE7SUFBSSxTQUFNO0VBQU8sR0FBQyx1QkFBcUIsQ0FBSyxlQUU1Q0EsMERBQUE7SUFBU1ksU0FBUyxFQUFDO0VBQVMsZ0JBQzFCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTyxnQkFFcEJaLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFTLGdCQUM1QlosMERBQUEsYUFBSSxNQUFJLENBQUssZUFDYkEsMERBQUEsWUFBRyxnSUFBeUgsQ0FBSSxDQUN0SCxlQUVOQSwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBUyxnQkFDNUJaLDBEQUFBLGFBQUksTUFBSSxDQUFLLGVBQ2JBLDBEQUFBLFlBQUcscUlBQW1JLENBQUksQ0FDaEksZUFFTkEsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVUsZ0JBQzdCWiwwREFBQSxhQUFJLE1BQUksQ0FBSyxlQUNiQSwwREFBQSxZQUFHLCtIQUE2SCxDQUFJLENBQzFILENBRUYsQ0FDRSxDQUVIO0FBR1A7QUFFQSxpRUFBZUUsTUFBTTs7Ozs7Ozs7VUNsR3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmljZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQcmljZXMoKSB7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZXNcIj5cclxuICAgICAgICA8aDI+UHJpY2VzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveGVzcHJpY2VzXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpY1wiPlxyXG4gICAgICAgICAgICA8aDM+QmFzaWM8L2gzPlxyXG4gICAgICAgICAgICA8aDE+MjUw4oKsPC9oMT5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXRpbWVcIj48L2k+IDEgTW9udGhzIG9mIGxlc3NvbnM8L3A+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1ib29rXCI+PC9pPiBMZWFybiBIVE1ML0NTUyA8L3A+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1maWxlLXRleHRcIj48L2k+IFlvdSBnZXQgYSB3b3JsZHdpZGUgYXBwcm92ZWQgbGljZW5zZTwvcD5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZmZlc2lvbmFsXCI+XHJcbiAgICAgICAgPGgzPlByb2ZmZXNpb25hbDwvaDM+XHJcbiAgICAgICAgPGgxPjUwMOKCrDwvaDE+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXRpbWVcIj48L2k+IDIgTW9udGhzIG9mIGxlc3NvbnM8L3A+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLWJvb2tcIj48L2k+IExlYXJuIEhUTUwvQ1NTL0phdmFTY3JpcHQ8L3A+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLWZpbGUtdGV4dFwiPjwvaT4gWW91IGdldCBhIHdvcmxkd2lkZSBhcHByb3ZlZCBsaWNlbnNlPC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmVtaXVtXCI+XHJcbiAgICA8aDM+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4gUHJlbWl1bTwvaDM+XHJcbjxoMT4xMDAw4oKsPC9oMT5cclxuPHA+PGkgY2xhc3M9XCJpY29uLXRpbWVcIj48L2k+IDMgTW9udGhzIG9mIGxlc3NvbnM8L3A+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi1ib29rXCI+PC9pPiBMZWFybiBIVE1ML0NTUy9KYXZhU2NyaXB0L1JlYWN0PC9wPlxyXG48cD48aSBjbGFzcz1cImljb24tZmlsZS10ZXh0XCI+PC9pPiBZb3UgZ2V0IGEgd29ybGR3aWRlIGFwcHJvdmVkIGxpY2Vuc2U8L3A+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuPGhyPjwvaHI+XHJcbjxoMiBjbGFzcz1cInRleHRpXCI+V2h5IGNob29zZSBDb2RlcnNMQUI/PC9oMj5cclxuXHJcbjxzZWN0aW9uIGNsYXNzTmFtZT0nc2VrdG9yaSc+XHJcbiAgPGRpdiBjbGFzc05hbWU9J2tsYXNhJz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZGl2aXBhcic+XHJcbjxoMT50ZXN0PC9oMT5cclxuPHA+V2UgaW50ZWdyYXRlIHNlYW1sZXNzbHkgd2l0aCBXb3JkUHJlc3MsIFdlYnNpdGVCdWlsZGVyLCBhbmQgU2l0ZUxvY2ssIHRvIG5hbWUgYSBmZXcuIFdl4oCZbGwgaGVscCB5b3UgZ2V0IG9ubGluZSB3aXRoIGVhc2UuPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2RpdmlkeXQnPlxyXG48aDE+dGVzdDwvaDE+XHJcbjxwPkEgZG9tYWluIG5hbWUgaXMganVzdCB0aGUgYmVnaW5uaW5nLiBXZSdsbCBoZWxwIHlvdSBob3N0LCBkZXNpZ24sIGFuZCBtYW5hZ2UgeW91ciBzaXRlLiBXZSdsbCBldmVuIGJ1aWxkIGl0IGZvciB5b3UsIGlmIHlvdSdkIGxpa2UuPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2Rpdml0cmV0Jz5cclxuPGgxPnRlc3Q8L2gxPlxyXG48cD5TaW5jZSAyMDAwLCB3ZSd2ZSBiZWVuIGZvY3VzZWQgb24gaGVscGluZyBjdXN0b21lcnMgZmluZCB0aGUgYmVzdCBkb21haW4gbmFtZSBhcyB0aGUgYnVpbGRpbmcgYmxvY2sgb2YgdGhlaXIgb25saW5lIHByZXNlbmNlLjwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjg5M2M0MTA4ZDNkYmIzMDY1OTFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByaWNlcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImhhbmRsZUJ1eUNsaWNrIiwiaGFuZGxlQ29uZmlybUNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=