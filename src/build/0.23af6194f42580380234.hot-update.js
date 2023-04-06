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
    "class": "texti"
  }, "Why choose Domain.com?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    "class": "subtexti"
  }, "The total package for starting your website."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7331afa2878b18d0c709")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0EsMERBQUE7SUFBRyxTQUFNO0VBQWdCLEVBQUsseUNBQXFDLENBQUksZUFDMUVBLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHLFNBQU07RUFBVyxFQUFLLGlCQUFhLENBQUksZUFDckNBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUw7RUFBZSxHQUFDLEtBQUcsQ0FBUyxDQUMzQyxFQUNMRixTQUFTLGlCQUNGTiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJaLDBEQUFBLGFBQUksd0JBQXNCLENBQUssZUFDL0JBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUo7RUFBbUIsR0FBQyxTQUFPLENBQVMsQ0FFeEQsQ0FFTCxDQUNBLGVBRU5ULDBEQUFBO0lBQUksU0FBTTtFQUFPLEdBQUMsd0JBQXNCLENBQUssZUFDN0NBLDBEQUFBO0lBQUksU0FBTTtFQUFVLEdBQUMsOENBQTRDLENBQUssQ0FHL0Q7QUFHUDtBQUVBLGlFQUFlRSxNQUFNOzs7Ozs7OztVQy9FckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL1ByaWNlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFByaWNlcygpIHtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXlDbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb25maXJtQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UG9wdXAoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlc1wiPlxyXG4gICAgICAgIDxoMj5QcmljZXM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94ZXNwcmljZXNcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljXCI+XHJcbiAgICAgICAgICAgIDxoMz5CYXNpYzwvaDM+XHJcbiAgICAgICAgICAgIDxoMT4yNTDigqw8L2gxPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tdGltZVwiPjwvaT4gMSBNb250aHMgb2YgbGVzc29uczwvcD5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLWJvb2tcIj48L2k+IExlYXJuIEhUTUwvQ1NTIDwvcD5cclxuICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLWZpbGUtdGV4dFwiPjwvaT4gWW91IGdldCBhIHdvcmxkd2lkZSBhcHByb3ZlZCBsaWNlbnNlPC9wPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gMjQvNyBTdXBwb3J0PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8aDM+Q29uZmlybSBZb3VyIFB1cmNoYXNlITwvaDM+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9mZmVzaW9uYWxcIj5cclxuICAgICAgICA8aDM+UHJvZmZlc2lvbmFsPC9oMz5cclxuICAgICAgICA8aDE+NTAw4oKsPC9oMT5cclxuICAgICAgICA8cD48aSBjbGFzcz1cImljb24tdGltZVwiPjwvaT4gMiBNb250aHMgb2YgbGVzc29uczwvcD5cclxuICAgICAgICA8cD48aSBjbGFzcz1cImljb24tYm9va1wiPjwvaT4gTGVhcm4gSFRNTC9DU1MvSmF2YVNjcmlwdDwvcD5cclxuICAgICAgICA8cD48aSBjbGFzcz1cImljb24tZmlsZS10ZXh0XCI+PC9pPiBZb3UgZ2V0IGEgd29ybGR3aWRlIGFwcHJvdmVkIGxpY2Vuc2U8L3A+XHJcbiAgICAgICAgPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8aDM+Q29uZmlybSBZb3VyIFB1cmNoYXNlITwvaDM+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1DbGlja30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByZW1pdW1cIj5cclxuICAgIDxoMz48aSBjbGFzcz1cImZhcyBmYS1zdGFyXCI+PC9pPiBQcmVtaXVtPC9oMz5cclxuPGgxPjEwMDDigqw8L2gxPlxyXG48cD48aSBjbGFzcz1cImljb24tdGltZVwiPjwvaT4gMyBNb250aHMgb2YgbGVzc29uczwvcD5cclxuPHA+PGkgY2xhc3M9XCJpY29uLWJvb2tcIj48L2k+IExlYXJuIEhUTUwvQ1NTL0phdmFTY3JpcHQvUmVhY3Q8L3A+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi1maWxlLXRleHRcIj48L2k+IFlvdSBnZXQgYSB3b3JsZHdpZGUgYXBwcm92ZWQgbGljZW5zZTwvcD5cclxuPHA+PGkgY2xhc3M9XCJpY29uLXVzZXJcIj48L2k+IDI0LzcgU3VwcG9ydDwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJ1eUNsaWNrfT5CdXk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAge3Nob3dQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgICAgICA8aDM+Q29uZmlybSBZb3VyIFB1cmNoYXNlITwvaDM+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb25maXJtQ2xpY2t9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICBcclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGgyIGNsYXNzPVwidGV4dGlcIj5XaHkgY2hvb3NlIERvbWFpbi5jb20/PC9oMj5cclxuPGgzIGNsYXNzPVwic3VidGV4dGlcIj5UaGUgdG90YWwgcGFja2FnZSBmb3Igc3RhcnRpbmcgeW91ciB3ZWJzaXRlLjwvaDM+XHJcblxyXG5cclxuICAgIDwvPlxyXG5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzMzMWFmYTI4NzhiMThkMGM3MDlcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByaWNlcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImhhbmRsZUJ1eUNsaWNrIiwiaGFuZGxlQ29uZmlybUNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=