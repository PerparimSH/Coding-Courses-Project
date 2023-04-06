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
  title: 'Learn HTML/CSS',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  title: 'Learn JavaScript',
  content: 'Praesent non eros eget sem bibendum elementum.'
}, {
  title: 'Learn React',
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "testeri"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Premium"), sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion-header",
      onClick: function onClick() {
        return handleClick(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, section.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("1cfa4b21424c04eb2296")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMWUzNDAyZjg2YmNjYTFjY2I0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsQ0FDZjtFQUNFQyxLQUFLLEVBQUUsZ0JBQWdCO0VBQ3ZCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0VELEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQ0Y7QUFFRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFDLFNBQUEsR0FBc0NMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsY0FBYyxHQUFBSCxVQUFBO0VBRWxDLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxLQUFLLEVBQUs7SUFDN0JGLGNBQWMsQ0FBQ0QsV0FBVyxLQUFLRyxLQUFLLEdBQUcsSUFBSSxHQUFHQSxLQUFLLENBQUM7RUFDdEQsQ0FBQztFQUVELG9CQUNFWiwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBUyxnQkFDdEJkLDBEQUFBLGFBQUksU0FBTyxDQUFLLEVBQ2ZFLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUosS0FBSztJQUFBLG9CQUMzQlosMERBQUE7TUFBS2MsU0FBUyxFQUFDLFdBQVc7TUFBQ0csR0FBRyxFQUFFTDtJQUFNLGdCQUNwQ1osMERBQUE7TUFBS2MsU0FBUyxFQUFDLGtCQUFrQjtNQUFDSSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtRQUFBLE9BQU1QLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO01BQUE7SUFBQyxnQkFDbEVaLDBEQUFBLGFBQUtnQixPQUFPLENBQUNiLEtBQUssQ0FBTSxlQUN4QkgsMERBQUE7TUFBTWMsU0FBUyxXQUFBSyxNQUFBLENBQVdWLFdBQVcsS0FBS0csS0FBSyxHQUFHLE1BQU0sR0FBRyxFQUFFO0lBQUcsR0FBQyxRQUFPLENBQU8sQ0FDM0UsRUFDTEgsV0FBVyxLQUFLRyxLQUFLLGlCQUNwQlosMERBQUE7TUFBS2MsU0FBUyxFQUFDO0lBQW1CLGdCQUNoQ2QsMERBQUEsWUFBSWdCLE9BQU8sQ0FBQ1osT0FBTyxDQUFLLENBRTNCLENBQ0c7RUFBQSxDQUNQLENBQUMsQ0FDRTtBQUVWLENBQUM7QUFFRCxpRUFBZUMsT0FBTzs7Ozs7Ozs7VUM1Q3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9QcmVtaXVtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3Qgc2VjdGlvbnMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBIVE1ML0NTUycsXHJcbiAgICBjb250ZW50OiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlYXJuIEphdmFTY3JpcHQnLFxyXG4gICAgY29udGVudDogJ1ByYWVzZW50IG5vbiBlcm9zIGVnZXQgc2VtIGJpYmVuZHVtIGVsZW1lbnR1bS4nXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlYXJuIFJlYWN0JyxcclxuICAgIGNvbnRlbnQ6ICdBbGlxdWFtIHJ1dHJ1bSB0cmlzdGlxdWUgZWxpdCwgZXQgc2FnaXR0aXMgb3JjaSBpbnRlcmR1bSB2aXRhZS4nXHJcbiAgfVxyXG5dO1xyXG5cclxuY29uc3QgUHJlbWl1bSA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlSW5kZXgoYWN0aXZlSW5kZXggPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3Rlc3RlcmknPlxyXG4gICAgICA8aDI+UHJlbWl1bTwvaDI+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgIDxoMz57c2VjdGlvbi50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BhcnJvdyAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICdvcGVuJyA6ICcnfWB9PiYjOTY1MDs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3RpdmVJbmRleCA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3NlY3Rpb24uY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWNmYTRiMjE0MjRjMDRlYjIyOTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlY3Rpb25zIiwidGl0bGUiLCJjb250ZW50IiwiUHJlbWl1bSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJoYW5kbGVDbGljayIsImluZGV4IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsInNlY3Rpb24iLCJrZXkiLCJvbkNsaWNrIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==