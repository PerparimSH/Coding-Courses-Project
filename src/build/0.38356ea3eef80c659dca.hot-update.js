"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
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

var sections = [{
  title: 'Section 1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  title: 'Section 2',
  content: 'Praesent non eros eget sem bibendum elementum.'
}, {
  title: 'Section 3',
  content: 'Aliquam rutrum tristique elit, et sagittis orci interdum vitae.'
}];
var Premium = function Premium() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var handleClick = function handleClick(index) {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion-header",
      onClick: function onClick() {
        return handleClick(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, section.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "arrow ".concat(activeIndex === index ? 'open' : '')
    }, "\u25B2")), activeIndex === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, section.content)));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Premium);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("01d3ab5532c0440e4308")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zODM1NmVhM2VlZjgwYzY1OWRjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsQ0FDZjtFQUNFQyxLQUFLLEVBQUUsV0FBVztFQUNsQkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0VELEtBQUssRUFBRSxXQUFXO0VBQ2xCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLFdBQVc7RUFDbEJDLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDRjtBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFDcEIsSUFBQUMsU0FBQSxHQUFzQ0wsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0NHLFdBQVcsR0FBQUYsVUFBQTtJQUFFRyxjQUFjLEdBQUFILFVBQUE7RUFFbEMsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLEtBQUssRUFBSztJQUM3QkYsY0FBYyxDQUFDRCxXQUFXLEtBQUtHLEtBQUssR0FBRyxJQUFJLEdBQUdBLEtBQUssQ0FBQztFQUN0RCxDQUFDO0VBRUQsb0JBQ0VaLDBEQUFBLGNBQ0dFLFFBQVEsQ0FBQ1ksR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUgsS0FBSztJQUFBLG9CQUMzQlosMERBQUE7TUFBS2dCLFNBQVMsRUFBQyxXQUFXO01BQUNDLEdBQUcsRUFBRUw7SUFBTSxnQkFDcENaLDBEQUFBO01BQUtnQixTQUFTLEVBQUMsa0JBQWtCO01BQUNFLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTVAsV0FBVyxDQUFDQyxLQUFLLENBQUM7TUFBQTtJQUFDLGdCQUNsRVosMERBQUEsYUFBS2UsT0FBTyxDQUFDWixLQUFLLENBQU0sZUFDeEJILDBEQUFBO01BQU1nQixTQUFTLFdBQUFHLE1BQUEsQ0FBV1YsV0FBVyxLQUFLRyxLQUFLLEdBQUcsTUFBTSxHQUFHLEVBQUU7SUFBRyxHQUFDLFFBQU8sQ0FBTyxDQUMzRSxFQUNMSCxXQUFXLEtBQUtHLEtBQUssaUJBQ3BCWiwwREFBQTtNQUFLZ0IsU0FBUyxFQUFDO0lBQW1CLGdCQUNoQ2hCLDBEQUFBLFlBQUllLE9BQU8sQ0FBQ1gsT0FBTyxDQUFLLENBRTNCLENBQ0c7RUFBQSxDQUNQLENBQUMsQ0FDRTtBQUVWLENBQUM7QUFFRCxpRUFBZUMsT0FBTzs7Ozs7Ozs7VUMzQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmVtaXVtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgc2VjdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTZWN0aW9uIDEnLFxyXG4gICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTZWN0aW9uIDInLFxyXG4gICAgY29udGVudDogJ1ByYWVzZW50IG5vbiBlcm9zIGVnZXQgc2VtIGJpYmVuZHVtIGVsZW1lbnR1bS4nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1NlY3Rpb24gMycsXHJcbiAgICBjb250ZW50OiAnQWxpcXVhbSBydXRydW0gdHJpc3RpcXVlIGVsaXQsIGV0IHNhZ2l0dGlzIG9yY2kgaW50ZXJkdW0gdml0YWUuJ1xyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IFByZW1pdW0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgIDxoMj57c2VjdGlvbi50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BhcnJvdyAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICdvcGVuJyA6ICcnfWB9PiYjOTY1MDs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3RpdmVJbmRleCA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3NlY3Rpb24uY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDFkM2FiNTUzMmMwNDQwZTQzMDhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlY3Rpb25zIiwidGl0bGUiLCJjb250ZW50IiwiUHJlbWl1bSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJoYW5kbGVDbGljayIsImluZGV4IiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJrZXkiLCJvbkNsaWNrIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==