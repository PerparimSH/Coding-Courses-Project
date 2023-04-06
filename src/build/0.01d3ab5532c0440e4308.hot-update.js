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
/******/ 	__webpack_require__.h = () => ("ab3f91f3ffdbb28fa544")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMWQzYWI1NTMyYzA0NDBlNDMwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsQ0FDZjtFQUNFQyxLQUFLLEVBQUUsZ0JBQWdCO0VBQ3ZCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLFdBQVc7RUFDbEJDLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFRCxLQUFLLEVBQUUsV0FBVztFQUNsQkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUNGO0FBRUQsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNwQixJQUFBQyxTQUFBLEdBQXNDTCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBTSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE3Q0csV0FBVyxHQUFBRixVQUFBO0lBQUVHLGNBQWMsR0FBQUgsVUFBQTtFQUVsQyxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUMsS0FBSyxFQUFLO0lBQzdCRixjQUFjLENBQUNELFdBQVcsS0FBS0csS0FBSyxHQUFHLElBQUksR0FBR0EsS0FBSyxDQUFDO0VBQ3RELENBQUM7RUFFRCxvQkFDRVosMERBQUEsY0FDR0UsUUFBUSxDQUFDWSxHQUFHLENBQUMsVUFBQ0MsT0FBTyxFQUFFSCxLQUFLO0lBQUEsb0JBQzNCWiwwREFBQTtNQUFLZ0IsU0FBUyxFQUFDLFdBQVc7TUFBQ0MsR0FBRyxFQUFFTDtJQUFNLGdCQUNwQ1osMERBQUE7TUFBS2dCLFNBQVMsRUFBQyxrQkFBa0I7TUFBQ0UsT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNUCxXQUFXLENBQUNDLEtBQUssQ0FBQztNQUFBO0lBQUMsZ0JBQ2xFWiwwREFBQSxhQUFLZSxPQUFPLENBQUNaLEtBQUssQ0FBTSxlQUN4QkgsMERBQUE7TUFBTWdCLFNBQVMsV0FBQUcsTUFBQSxDQUFXVixXQUFXLEtBQUtHLEtBQUssR0FBRyxNQUFNLEdBQUcsRUFBRTtJQUFHLEdBQUMsUUFBTyxDQUFPLENBQzNFLEVBQ0xILFdBQVcsS0FBS0csS0FBSyxpQkFDcEJaLDBEQUFBO01BQUtnQixTQUFTLEVBQUM7SUFBbUIsZ0JBQ2hDaEIsMERBQUEsWUFBSWUsT0FBTyxDQUFDWCxPQUFPLENBQUssQ0FFM0IsQ0FDRztFQUFBLENBQ1AsQ0FBQyxDQUNFO0FBRVYsQ0FBQztBQUVELGlFQUFlQyxPQUFPOzs7Ozs7OztVQzNDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL1ByZW1pdW0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBzZWN0aW9ucyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0xlYXJuIEhUTUwvQ1NTJyxcclxuICAgIGNvbnRlbnQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU2VjdGlvbiAyJyxcclxuICAgIGNvbnRlbnQ6ICdQcmFlc2VudCBub24gZXJvcyBlZ2V0IHNlbSBiaWJlbmR1bSBlbGVtZW50dW0uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTZWN0aW9uIDMnLFxyXG4gICAgY29udGVudDogJ0FsaXF1YW0gcnV0cnVtIHRyaXN0aXF1ZSBlbGl0LCBldCBzYWdpdHRpcyBvcmNpIGludGVyZHVtIHZpdGFlLidcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBQcmVtaXVtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJbmRleCwgc2V0QWN0aXZlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRBY3RpdmVJbmRleChhY3RpdmVJbmRleCA9PT0gaW5kZXggPyBudWxsIDogaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICA8aDI+e3NlY3Rpb24udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYXJyb3cgJHthY3RpdmVJbmRleCA9PT0gaW5kZXggPyAnb3BlbicgOiAnJ31gfT4mIzk2NTA7PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7YWN0aXZlSW5kZXggPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxwPntzZWN0aW9uLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZW1pdW07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFiM2Y5MWYzZmZkYmIyOGZhNTQ0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzZWN0aW9ucyIsInRpdGxlIiwiY29udGVudCIsIlByZW1pdW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwia2V5Iiwib25DbGljayIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=