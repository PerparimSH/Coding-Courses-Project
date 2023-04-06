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
  }, "Confirm")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    "class": "heading"
  }, "Why choose Domain.com?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    "class": "subhead"
  }, "The total package for starting your website."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "grid-container text-features"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "grid-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "grid-column feature-column icon is-xs-12 is-sm-6 is-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/cs/img/pages/domain-name-search/trusted-source.svg",
    "class": "icon-img",
    role: "presentation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "text-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "title"
  }, "A trusted source"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "subtext"
  }, "Since 2000, we've been focused on helping customers find the best domain name as the building block of their online presence."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "grid-column feature-column icon is-xs-12 is-sm-6 is-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/cs/img/pages/domain-name-search/everything-covered.svg",
    "class": "icon-img",
    role: "presentation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "text-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "title"
  }, "Everything is covered"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "subtext"
  }, "A domain name is just the beginning. We'll help you host, design, and manage your site. We'll even build it for you, if you'd like."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "grid-column feature-column icon is-xs-12 is-sm-6 is-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/static/cs/img/pages/domain-name-search/simple-intuitive.svg",
    "class": "icon-img",
    role: "presentation"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "text-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "title"
  }, "Simple & intuitive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    "class": "subtext"
  }, "We integrate seamlessly with WordPress, WebsiteBuilder, and SiteLock, to name a few. Well help you get online with ease. "))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56c7fdc7443f2ad43cf5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBVSxlQUFBQSwwREFBQTtJQUFTLFNBQU07RUFBMEQsZ0JBQUNBLDBEQUFBO0lBQUtjLEdBQUcsRUFBQyw4REFBOEQ7SUFBQyxTQUFNLFVBQVU7SUFBQ0MsSUFBSSxFQUFDO0VBQWMsRUFBTyxlQUFBZiwwREFBQTtJQUFLLFNBQU07RUFBWSxnQkFBQ0EsMERBQUE7SUFBRyxTQUFNO0VBQU8sR0FBQyxvQkFBc0IsQ0FBSSxlQUFBQSwwREFBQTtJQUFHLFNBQU07RUFBUyxHQUFDLDJIQUF5SCxDQUFJLENBQU0sQ0FBVSxDQUFVLENBQ2p3QyxDQUVIO0FBR1A7QUFFQSxpRUFBZUUsTUFBTTs7Ozs7Ozs7VUNqRnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmljZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQcmljZXMoKSB7XHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQnV5Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZXNcIj5cclxuICAgICAgICA8aDI+UHJpY2VzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveGVzcHJpY2VzXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpY1wiPlxyXG4gICAgICAgICAgICA8aDM+QmFzaWM8L2gzPlxyXG4gICAgICAgICAgICA8aDE+MjUw4oKsPC9oMT5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXRpbWVcIj48L2k+IDEgTW9udGhzIG9mIGxlc3NvbnM8L3A+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1ib29rXCI+PC9pPiBMZWFybiBIVE1ML0NTUyA8L3A+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1maWxlLXRleHRcIj48L2k+IFlvdSBnZXQgYSB3b3JsZHdpZGUgYXBwcm92ZWQgbGljZW5zZTwvcD5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJvZmZlc2lvbmFsXCI+XHJcbiAgICAgICAgPGgzPlByb2ZmZXNpb25hbDwvaDM+XHJcbiAgICAgICAgPGgxPjUwMOKCrDwvaDE+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXRpbWVcIj48L2k+IDIgTW9udGhzIG9mIGxlc3NvbnM8L3A+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLWJvb2tcIj48L2k+IExlYXJuIEhUTUwvQ1NTL0phdmFTY3JpcHQ8L3A+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLWZpbGUtdGV4dFwiPjwvaT4gWW91IGdldCBhIHdvcmxkd2lkZSBhcHByb3ZlZCBsaWNlbnNlPC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcmVtaXVtXCI+XHJcbiAgICA8aDM+PGkgY2xhc3M9XCJmYXMgZmEtc3RhclwiPjwvaT4gUHJlbWl1bTwvaDM+XHJcbjxoMT4xMDAw4oKsPC9oMT5cclxuPHA+PGkgY2xhc3M9XCJpY29uLXRpbWVcIj48L2k+IDMgTW9udGhzIG9mIGxlc3NvbnM8L3A+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi1ib29rXCI+PC9pPiBMZWFybiBIVE1ML0NTUy9KYXZhU2NyaXB0L1JlYWN0PC9wPlxyXG48cD48aSBjbGFzcz1cImljb24tZmlsZS10ZXh0XCI+PC9pPiBZb3UgZ2V0IGEgd29ybGR3aWRlIGFwcHJvdmVkIGxpY2Vuc2U8L3A+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCdXlDbGlja30+QnV5PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgPGgzPkNvbmZpcm0gWW91ciBQdXJjaGFzZSE8L2gzPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgXHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxoMiBjbGFzcz1cImhlYWRpbmdcIj5XaHkgY2hvb3NlIERvbWFpbi5jb20/PC9oMj5cclxuPGgyIGNsYXNzPVwic3ViaGVhZFwiPlRoZSB0b3RhbCBwYWNrYWdlIGZvciBzdGFydGluZyB5b3VyIHdlYnNpdGUuPC9oMj5cclxuPHNlY3Rpb24gY2xhc3M9XCJncmlkLWNvbnRhaW5lciB0ZXh0LWZlYXR1cmVzXCI+XHJcbjxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1yb3dcIj48c2VjdGlvbiBjbGFzcz1cImdyaWQtY29sdW1uIGZlYXR1cmUtY29sdW1uIGljb24gaXMteHMtMTIgaXMtc20tNiBpcy1tZC00XCI+PGltZyBzcmM9XCIvc3RhdGljL2NzL2ltZy9wYWdlcy9kb21haW4tbmFtZS1zZWFyY2gvdHJ1c3RlZC1zb3VyY2Uuc3ZnXCIgY2xhc3M9XCJpY29uLWltZ1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2ltZz48ZGl2IGNsYXNzPVwidGV4dC1ncm91cFwiPjxwIGNsYXNzPVwidGl0bGVcIj5BIHRydXN0ZWQgc291cmNlPC9wPjxwIGNsYXNzPVwic3VidGV4dFwiPlNpbmNlIDIwMDAsIHdlJ3ZlIGJlZW4gZm9jdXNlZCBvbiBoZWxwaW5nIGN1c3RvbWVycyBmaW5kIHRoZSBiZXN0IGRvbWFpbiBuYW1lIGFzIHRoZSBidWlsZGluZyBibG9jayBvZiB0aGVpciBvbmxpbmUgcHJlc2VuY2UuPC9wPjwvZGl2Pjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cImdyaWQtY29sdW1uIGZlYXR1cmUtY29sdW1uIGljb24gaXMteHMtMTIgaXMtc20tNiBpcy1tZC00XCI+PGltZyBzcmM9XCIvc3RhdGljL2NzL2ltZy9wYWdlcy9kb21haW4tbmFtZS1zZWFyY2gvZXZlcnl0aGluZy1jb3ZlcmVkLnN2Z1wiIGNsYXNzPVwiaWNvbi1pbWdcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9pbWc+PGRpdiBjbGFzcz1cInRleHQtZ3JvdXBcIj48cCBjbGFzcz1cInRpdGxlXCI+RXZlcnl0aGluZyBpcyBjb3ZlcmVkPC9wPjxwIGNsYXNzPVwic3VidGV4dFwiPkEgZG9tYWluIG5hbWUgaXMganVzdCB0aGUgYmVnaW5uaW5nLiBXZSdsbCBoZWxwIHlvdSBob3N0LCBkZXNpZ24sIGFuZCBtYW5hZ2UgeW91ciBzaXRlLiBXZSdsbCBldmVuIGJ1aWxkIGl0IGZvciB5b3UsIGlmIHlvdSdkIGxpa2UuPC9wPjwvZGl2Pjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cImdyaWQtY29sdW1uIGZlYXR1cmUtY29sdW1uIGljb24gaXMteHMtMTIgaXMtc20tNiBpcy1tZC00XCI+PGltZyBzcmM9XCIvc3RhdGljL2NzL2ltZy9wYWdlcy9kb21haW4tbmFtZS1zZWFyY2gvc2ltcGxlLWludHVpdGl2ZS5zdmdcIiBjbGFzcz1cImljb24taW1nXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjwvaW1nPjxkaXYgY2xhc3M9XCJ0ZXh0LWdyb3VwXCI+PHAgY2xhc3M9XCJ0aXRsZVwiPlNpbXBsZSAmYW1wOyBpbnR1aXRpdmU8L3A+PHAgY2xhc3M9XCJzdWJ0ZXh0XCI+V2UgaW50ZWdyYXRlIHNlYW1sZXNzbHkgd2l0aCBXb3JkUHJlc3MsIFdlYnNpdGVCdWlsZGVyLCBhbmQgU2l0ZUxvY2ssIHRvIG5hbWUgYSBmZXcuIFdlbGwgaGVscCB5b3UgZ2V0IG9ubGluZSB3aXRoIGVhc2UuIDwvcD48L2Rpdj48L3NlY3Rpb24+PC9zZWN0aW9uPlxyXG48L3NlY3Rpb24+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NmM3ZmRjNzQ0M2YyYWQ0M2NmNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGFuZGxlQnV5Q2xpY2siLCJoYW5kbGVDb25maXJtQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwicm9sZSJdLCJzb3VyY2VSb290IjoiIn0=