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
  }, "Confirm")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "text-features"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    "class": "grid-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
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
  }, "We integrate seamlessly with WordPress, WebsiteBuilder, and SiteLock, to name a few. Well help you get online with ease. "))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Prices);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("05f9d0eebbe32aa8a312")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ODUxYzZiMjljMjc5MDUxZDlhNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxNQUFNQSxDQUFBLEVBQUc7RUFDaEIsSUFBQUMsU0FBQSxHQUFrQ0YsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUNHLFNBQVMsR0FBQUYsVUFBQTtJQUFFRyxZQUFZLEdBQUFILFVBQUE7RUFFOUIsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7SUFDM0JELFlBQVksQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1FLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztJQUMvQkYsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUNyQixDQUFDO0VBRUQsb0JBQ0VQLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBUSxnQkFDckJaLDBEQUFBLGFBQUksUUFBTSxDQUFLLGVBQ2ZBLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFhLGdCQUUxQlosMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCWiwwREFBQSxhQUFJLE9BQUssQ0FBSyxlQUNkQSwwREFBQSxhQUFJLFdBQUksQ0FBSyxlQUNiQSwwREFBQSx5QkFBR0EsMERBQUE7SUFBRyxTQUFNO0VBQVcsRUFBSyx3QkFBb0IsQ0FBSSxlQUNwREEsMERBQUEseUJBQUdBLDBEQUFBO0lBQUcsU0FBTTtFQUFXLEVBQUssb0JBQWdCLENBQUksZUFDaERBLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHLFNBQU07RUFBZ0IsRUFBSyx5Q0FBcUMsQ0FBSSxlQUMxRUEsMERBQUEseUJBQUdBLDBEQUFBO0lBQUcsU0FBTTtFQUFXLEVBQUssaUJBQWEsQ0FBSSxlQUM3Q0EsMERBQUE7SUFBUWEsT0FBTyxFQUFFTDtFQUFlLEdBQUMsS0FBRyxDQUFTLENBQ3pDLEVBQ0xGLFNBQVMsaUJBQ1JOLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFPLGdCQUNwQlosMERBQUEsYUFBSSx3QkFBc0IsQ0FBSyxlQUMvQkEsMERBQUE7SUFBUWEsT0FBTyxFQUFFSjtFQUFtQixHQUFDLFNBQU8sQ0FBUyxDQUV4RCxlQUVQVCwwREFBQTtJQUFLLFNBQU07RUFBYyxnQkFDckJBLDBEQUFBLGFBQUksY0FBWSxDQUFLLGVBQ3JCQSwwREFBQSxhQUFJLFdBQUksQ0FBSyxlQUNiQSwwREFBQSx5QkFBR0EsMERBQUE7SUFBRyxTQUFNO0VBQVcsRUFBSyx3QkFBb0IsQ0FBSSxlQUNwREEsMERBQUEseUJBQUdBLDBEQUFBO0lBQUcsU0FBTTtFQUFXLEVBQUssOEJBQTBCLENBQUksZUFDMURBLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHLFNBQU07RUFBZ0IsRUFBSyx5Q0FBcUMsQ0FBSSxlQUMxRUEsMERBQUEseUJBQUdBLDBEQUFBO0lBQUcsU0FBTTtFQUFXLEVBQUssaUJBQWEsQ0FBSSxlQUM3Q0EsMERBQUE7SUFBUWEsT0FBTyxFQUFFTDtFQUFlLEdBQUMsS0FBRyxDQUFTLENBQzNDLEVBQ0xGLFNBQVMsaUJBQ0ZOLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFPLGdCQUNwQlosMERBQUEsYUFBSSx3QkFBc0IsQ0FBSyxlQUNoQ0EsMERBQUE7SUFBUWEsT0FBTyxFQUFFSjtFQUFtQixHQUFDLFNBQU8sQ0FBUyxDQUV2RCxlQUVQVCwwREFBQTtJQUFLLFNBQU07RUFBUyxnQkFDcEJBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBYSxFQUFLLFlBQVEsQ0FBSyxlQUNoREEsMERBQUEsYUFBSSxZQUFLLENBQUssZUFDZEEsMERBQUEseUJBQUdBLDBEQUFBO0lBQUcsU0FBTTtFQUFXLEVBQUssd0JBQW9CLENBQUksZUFDcERBLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHLFNBQU07RUFBVyxFQUFLLG9DQUFnQyxDQUFJLGVBQ2hFQSwwREFBQSx5QkFBR0EsMERBQUE7SUFBRyxTQUFNO0VBQWdCLEVBQUsseUNBQXFDLENBQUksZUFDMUVBLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHLFNBQU07RUFBVyxFQUFLLGlCQUFhLENBQUksZUFDckNBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUw7RUFBZSxHQUFDLEtBQUcsQ0FBUyxDQUMzQyxFQUNMRixTQUFTLGlCQUNGTiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJaLDBEQUFBLGFBQUksd0JBQXNCLENBQUssZUFDL0JBLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUo7RUFBbUIsR0FBQyxTQUFPLENBQVMsQ0FFeEQsQ0FFTCxDQUNBLGVBRU5ULDBEQUFBO0lBQVNjLEVBQUUsRUFBQztFQUFlLGdCQUFDZCwwREFBQTtJQUFTLFNBQU07RUFBZ0IsZ0JBQUNBLDBEQUFBO0lBQUksU0FBTTtFQUFTLEdBQUMsd0JBQXNCLENBQUssZUFBQUEsMERBQUE7SUFBSSxTQUFNO0VBQVMsR0FBQyw4Q0FBNEMsQ0FBSyxlQUFBQSwwREFBQTtJQUFTLFNBQU07RUFBOEIsZ0JBQUNBLDBEQUFBO0lBQVMsU0FBTTtFQUFVLGdCQUFDQSwwREFBQTtJQUFTLFNBQU07RUFBMEQsZ0JBQUNBLDBEQUFBO0lBQUtlLEdBQUcsRUFBQyw0REFBNEQ7SUFBQyxTQUFNLFVBQVU7SUFBQ0MsSUFBSSxFQUFDO0VBQWMsRUFBTyxlQUFBaEIsMERBQUE7SUFBSyxTQUFNO0VBQVksZ0JBQUNBLDBEQUFBO0lBQUcsU0FBTTtFQUFPLEdBQUMsa0JBQWdCLENBQUksZUFBQUEsMERBQUE7SUFBRyxTQUFNO0VBQVMsR0FBQywrSEFBNkgsQ0FBSSxDQUFNLENBQVUsZUFBQUEsMERBQUE7SUFBUyxTQUFNO0VBQTBELGdCQUFDQSwwREFBQTtJQUFLZSxHQUFHLEVBQUMsZ0VBQWdFO0lBQUMsU0FBTSxVQUFVO0lBQUNDLElBQUksRUFBQztFQUFjLEVBQU8sZUFBQWhCLDBEQUFBO0lBQUssU0FBTTtFQUFZLGdCQUFDQSwwREFBQTtJQUFHLFNBQU07RUFBTyxHQUFDLHVCQUFxQixDQUFJLGVBQUFBLDBEQUFBO0lBQUcsU0FBTTtFQUFTLEdBQUMscUlBQW1JLENBQUksQ0FBTSxDQUFVLGVBQUFBLDBEQUFBO0lBQVMsU0FBTTtFQUEwRCxnQkFBQ0EsMERBQUE7SUFBS2UsR0FBRyxFQUFDLDhEQUE4RDtJQUFDLFNBQU0sVUFBVTtJQUFDQyxJQUFJLEVBQUM7RUFBYyxFQUFPLGVBQUFoQiwwREFBQTtJQUFLLFNBQU07RUFBWSxnQkFBQ0EsMERBQUE7SUFBRyxTQUFNO0VBQU8sR0FBQyxvQkFBc0IsQ0FBSSxlQUFBQSwwREFBQTtJQUFHLFNBQU07RUFBUyxHQUFDLDJIQUF5SCxDQUFJLENBQU0sQ0FBVSxDQUFVLENBQVUsQ0FBVSxDQUFVLENBRWhnRDtBQUdQO0FBRUEsaUVBQWVFLE1BQU07Ozs7Ozs7O1VDN0VyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUHJpY2VzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gUHJpY2VzKCkge1xyXG4gIGNvbnN0IFtzaG93UG9wdXAsIHNldFNob3dQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1eUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BvcHVwKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1DbGljayA9ICgpID0+IHtcclxuICAgIHNldFNob3dQb3B1cChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzXCI+XHJcbiAgICAgICAgPGgyPlByaWNlczwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hlc3ByaWNlc1wiPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzaWNcIj5cclxuICAgICAgICAgICAgPGgzPkJhc2ljPC9oMz5cclxuICAgICAgICAgICAgPGgxPjI1MOKCrDwvaDE+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi10aW1lXCI+PC9pPiAxIE1vbnRocyBvZiBsZXNzb25zPC9wPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tYm9va1wiPjwvaT4gTGVhcm4gSFRNTC9DU1MgPC9wPlxyXG4gICAgICAgICAgICA8cD48aSBjbGFzcz1cImljb24tZmlsZS10ZXh0XCI+PC9pPiBZb3UgZ2V0IGEgd29ybGR3aWRlIGFwcHJvdmVkIGxpY2Vuc2U8L3A+XHJcbiAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi11c2VyXCI+PC9pPiAyNC83IFN1cHBvcnQ8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Db25maXJtIFlvdXIgUHVyY2hhc2UhPC9oMz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1DbGlja30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2ZmZXNpb25hbFwiPlxyXG4gICAgICAgIDxoMz5Qcm9mZmVzaW9uYWw8L2gzPlxyXG4gICAgICAgIDxoMT41MDDigqw8L2gxPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi10aW1lXCI+PC9pPiAyIE1vbnRocyBvZiBsZXNzb25zPC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1ib29rXCI+PC9pPiBMZWFybiBIVE1ML0NTUy9KYXZhU2NyaXB0PC9wPlxyXG4gICAgICAgIDxwPjxpIGNsYXNzPVwiaWNvbi1maWxlLXRleHRcIj48L2k+IFlvdSBnZXQgYSB3b3JsZHdpZGUgYXBwcm92ZWQgbGljZW5zZTwvcD5cclxuICAgICAgICA8cD48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gMjQvNyBTdXBwb3J0PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Db25maXJtIFlvdXIgUHVyY2hhc2UhPC9oMz5cclxuICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29uZmlybUNsaWNrfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicHJlbWl1bVwiPlxyXG4gICAgPGgzPjxpIGNsYXNzPVwiZmFzIGZhLXN0YXJcIj48L2k+IFByZW1pdW08L2gzPlxyXG48aDE+MTAwMOKCrDwvaDE+XHJcbjxwPjxpIGNsYXNzPVwiaWNvbi10aW1lXCI+PC9pPiAzIE1vbnRocyBvZiBsZXNzb25zPC9wPlxyXG48cD48aSBjbGFzcz1cImljb24tYm9va1wiPjwvaT4gTGVhcm4gSFRNTC9DU1MvSmF2YVNjcmlwdC9SZWFjdDwvcD5cclxuPHA+PGkgY2xhc3M9XCJpY29uLWZpbGUtdGV4dFwiPjwvaT4gWW91IGdldCBhIHdvcmxkd2lkZSBhcHByb3ZlZCBsaWNlbnNlPC9wPlxyXG48cD48aSBjbGFzcz1cImljb24tdXNlclwiPjwvaT4gMjQvNyBTdXBwb3J0PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQnV5Q2xpY2t9PkJ1eTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5Db25maXJtIFlvdXIgUHVyY2hhc2UhPC9oMz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1DbGlja30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgIFxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48c2VjdGlvbiBpZD1cInRleHQtZmVhdHVyZXNcIj48c2VjdGlvbiBjbGFzcz1cImdyaWQtY29udGFpbmVyXCI+PGgyIGNsYXNzPVwiaGVhZGluZ1wiPldoeSBjaG9vc2UgRG9tYWluLmNvbT88L2gyPjxoMiBjbGFzcz1cInN1YmhlYWRcIj5UaGUgdG90YWwgcGFja2FnZSBmb3Igc3RhcnRpbmcgeW91ciB3ZWJzaXRlLjwvaDI+PHNlY3Rpb24gY2xhc3M9XCJncmlkLWNvbnRhaW5lciB0ZXh0LWZlYXR1cmVzXCI+PHNlY3Rpb24gY2xhc3M9XCJncmlkLXJvd1wiPjxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1jb2x1bW4gZmVhdHVyZS1jb2x1bW4gaWNvbiBpcy14cy0xMiBpcy1zbS02IGlzLW1kLTRcIj48aW1nIHNyYz1cIi9zdGF0aWMvY3MvaW1nL3BhZ2VzL2RvbWFpbi1uYW1lLXNlYXJjaC90cnVzdGVkLXNvdXJjZS5zdmdcIiBjbGFzcz1cImljb24taW1nXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPjwvaW1nPjxkaXYgY2xhc3M9XCJ0ZXh0LWdyb3VwXCI+PHAgY2xhc3M9XCJ0aXRsZVwiPkEgdHJ1c3RlZCBzb3VyY2U8L3A+PHAgY2xhc3M9XCJzdWJ0ZXh0XCI+U2luY2UgMjAwMCwgd2UndmUgYmVlbiBmb2N1c2VkIG9uIGhlbHBpbmcgY3VzdG9tZXJzIGZpbmQgdGhlIGJlc3QgZG9tYWluIG5hbWUgYXMgdGhlIGJ1aWxkaW5nIGJsb2NrIG9mIHRoZWlyIG9ubGluZSBwcmVzZW5jZS48L3A+PC9kaXY+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1jb2x1bW4gZmVhdHVyZS1jb2x1bW4gaWNvbiBpcy14cy0xMiBpcy1zbS02IGlzLW1kLTRcIj48aW1nIHNyYz1cIi9zdGF0aWMvY3MvaW1nL3BhZ2VzL2RvbWFpbi1uYW1lLXNlYXJjaC9ldmVyeXRoaW5nLWNvdmVyZWQuc3ZnXCIgY2xhc3M9XCJpY29uLWltZ1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj48L2ltZz48ZGl2IGNsYXNzPVwidGV4dC1ncm91cFwiPjxwIGNsYXNzPVwidGl0bGVcIj5FdmVyeXRoaW5nIGlzIGNvdmVyZWQ8L3A+PHAgY2xhc3M9XCJzdWJ0ZXh0XCI+QSBkb21haW4gbmFtZSBpcyBqdXN0IHRoZSBiZWdpbm5pbmcuIFdlJ2xsIGhlbHAgeW91IGhvc3QsIGRlc2lnbiwgYW5kIG1hbmFnZSB5b3VyIHNpdGUuIFdlJ2xsIGV2ZW4gYnVpbGQgaXQgZm9yIHlvdSwgaWYgeW91J2QgbGlrZS48L3A+PC9kaXY+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzPVwiZ3JpZC1jb2x1bW4gZmVhdHVyZS1jb2x1bW4gaWNvbiBpcy14cy0xMiBpcy1zbS02IGlzLW1kLTRcIj48aW1nIHNyYz1cIi9zdGF0aWMvY3MvaW1nL3BhZ2VzL2RvbWFpbi1uYW1lLXNlYXJjaC9zaW1wbGUtaW50dWl0aXZlLnN2Z1wiIGNsYXNzPVwiaWNvbi1pbWdcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+PC9pbWc+PGRpdiBjbGFzcz1cInRleHQtZ3JvdXBcIj48cCBjbGFzcz1cInRpdGxlXCI+U2ltcGxlICZhbXA7IGludHVpdGl2ZTwvcD48cCBjbGFzcz1cInN1YnRleHRcIj5XZSBpbnRlZ3JhdGUgc2VhbWxlc3NseSB3aXRoIFdvcmRQcmVzcywgV2Vic2l0ZUJ1aWxkZXIsIGFuZCBTaXRlTG9jaywgdG8gbmFtZSBhIGZldy4gV2VsbCBoZWxwIHlvdSBnZXQgb25saW5lIHdpdGggZWFzZS4gPC9wPjwvZGl2Pjwvc2VjdGlvbj48L3NlY3Rpb24+PC9zZWN0aW9uPjwvc2VjdGlvbj48L3NlY3Rpb24+XHJcblxyXG4gICAgPC8+XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwNWY5ZDBlZWJiZTMyYWE4YTMxMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJpY2VzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1BvcHVwIiwic2V0U2hvd1BvcHVwIiwiaGFuZGxlQnV5Q2xpY2siLCJoYW5kbGVDb25maXJtQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaWQiLCJzcmMiLCJyb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==