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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Accordion.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleClick = function handleClick() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion-header",
      onClick: handleClick
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, section.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "arrow ".concat(isOpen ? 'open' : '')
    }, "\u25B2")), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("57cdc88a4a6a9c455892")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNzRjMDFhMmUzZWM0ZDI0OGNiOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUV6QixJQUFNRSxRQUFRLEdBQUcsQ0FDZjtFQUNFQyxLQUFLLEVBQUUsV0FBVztFQUNsQkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0VELEtBQUssRUFBRSxXQUFXO0VBQ2xCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLFdBQVc7RUFDbEJDLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDRjtBQUVELElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFDcEIsSUFBQUMsU0FBQSxHQUE0QkwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBcENHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEIsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN4QkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztFQUNwQixDQUFDO0VBRUQsb0JBQ0VULDBEQUFBLGNBQ0dFLFFBQVEsQ0FBQ1csR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSztJQUFBLG9CQUMzQmYsMERBQUE7TUFBS2dCLFNBQVMsRUFBQyxXQUFXO01BQUNDLEdBQUcsRUFBRUY7SUFBTSxnQkFDcENmLDBEQUFBO01BQUtnQixTQUFTLEVBQUMsa0JBQWtCO01BQUNFLE9BQU8sRUFBRVA7SUFBWSxnQkFDckRYLDBEQUFBLGFBQUtjLE9BQU8sQ0FBQ1gsS0FBSyxDQUFNLGVBQ3hCSCwwREFBQTtNQUFNZ0IsU0FBUyxXQUFBRyxNQUFBLENBQVdWLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRTtJQUFHLEdBQUMsUUFBTyxDQUFPLENBQzVELEVBQ0xBLE1BQU0saUJBQ0xULDBEQUFBO01BQUtnQixTQUFTLEVBQUM7SUFBbUIsZ0JBQ2hDaEIsMERBQUEsWUFBSWMsT0FBTyxDQUFDVixPQUFPLENBQUssQ0FFM0IsQ0FDRztFQUFBLENBQ1AsQ0FBQyxDQUNFO0FBRVYsQ0FBQztBQUVELGlFQUFlQyxPQUFPOzs7Ozs7OztVQzVDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL1ByZW1pdW0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9BY2NvcmRpb24uY3NzJztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnU2VjdGlvbiAxJyxcclxuICAgIGNvbnRlbnQ6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LidcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU2VjdGlvbiAyJyxcclxuICAgIGNvbnRlbnQ6ICdQcmFlc2VudCBub24gZXJvcyBlZ2V0IHNlbSBiaWJlbmR1bSBlbGVtZW50dW0uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTZWN0aW9uIDMnLFxyXG4gICAgY29udGVudDogJ0FsaXF1YW0gcnV0cnVtIHRyaXN0aXF1ZSBlbGl0LCBldCBzYWdpdHRpcyBvcmNpIGludGVyZHVtIHZpdGFlLidcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBQcmVtaXVtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgIDxoMj57c2VjdGlvbi50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BhcnJvdyAke2lzT3BlbiA/ICdvcGVuJyA6ICcnfWB9PiYjOTY1MDs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3NlY3Rpb24uY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTdjZGM4OGE0YTZhOWM0NTU4OTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlY3Rpb25zIiwidGl0bGUiLCJjb250ZW50IiwiUHJlbWl1bSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzT3BlbiIsInNldElzT3BlbiIsImhhbmRsZUNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInNlY3Rpb24iLCJpbmRleCIsImNsYXNzTmFtZSIsImtleSIsIm9uQ2xpY2siLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9