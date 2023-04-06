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
/******/ 	__webpack_require__.h = () => ("14cd965f6300c4db7315")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hYjNmOTFmM2ZmZGJiMjhmYTU0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxRQUFRLEdBQUcsQ0FDZjtFQUNFQyxLQUFLLEVBQUUsZ0JBQWdCO0VBQ3ZCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRUQsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QkMsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0VELEtBQUssRUFBRSxhQUFhO0VBQ3BCQyxPQUFPLEVBQUU7QUFDWCxDQUFDLENBQ0Y7QUFFRCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFDLFNBQUEsR0FBc0NMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsY0FBYyxHQUFBSCxVQUFBO0VBRWxDLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxLQUFLLEVBQUs7SUFDN0JGLGNBQWMsQ0FBQ0QsV0FBVyxLQUFLRyxLQUFLLEdBQUcsSUFBSSxHQUFHQSxLQUFLLENBQUM7RUFDdEQsQ0FBQztFQUVELG9CQUNFWiwwREFBQSxjQUNHRSxRQUFRLENBQUNZLEdBQUcsQ0FBQyxVQUFDQyxPQUFPLEVBQUVILEtBQUs7SUFBQSxvQkFDM0JaLDBEQUFBO01BQUtnQixTQUFTLEVBQUMsV0FBVztNQUFDQyxHQUFHLEVBQUVMO0lBQU0sZ0JBQ3BDWiwwREFBQTtNQUFLZ0IsU0FBUyxFQUFDLGtCQUFrQjtNQUFDRSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtRQUFBLE9BQU1QLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO01BQUE7SUFBQyxnQkFDbEVaLDBEQUFBLGFBQUtlLE9BQU8sQ0FBQ1osS0FBSyxDQUFNLGVBQ3hCSCwwREFBQTtNQUFNZ0IsU0FBUyxXQUFBRyxNQUFBLENBQVdWLFdBQVcsS0FBS0csS0FBSyxHQUFHLE1BQU0sR0FBRyxFQUFFO0lBQUcsR0FBQyxRQUFPLENBQU8sQ0FDM0UsRUFDTEgsV0FBVyxLQUFLRyxLQUFLLGlCQUNwQlosMERBQUE7TUFBS2dCLFNBQVMsRUFBQztJQUFtQixnQkFDaENoQiwwREFBQSxZQUFJZSxPQUFPLENBQUNYLE9BQU8sQ0FBSyxDQUUzQixDQUNHO0VBQUEsQ0FDUCxDQUFDLENBQ0U7QUFFVixDQUFDO0FBRUQsaUVBQWVDLE9BQU87Ozs7Ozs7O1VDM0N0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUHJlbWl1bS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTGVhcm4gSFRNTC9DU1MnLFxyXG4gICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBKYXZhU2NyaXB0JyxcclxuICAgIGNvbnRlbnQ6ICdQcmFlc2VudCBub24gZXJvcyBlZ2V0IHNlbSBiaWJlbmR1bSBlbGVtZW50dW0uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBSZWFjdCcsXHJcbiAgICBjb250ZW50OiAnQWxpcXVhbSBydXRydW0gdHJpc3RpcXVlIGVsaXQsIGV0IHNhZ2l0dGlzIG9yY2kgaW50ZXJkdW0gdml0YWUuJ1xyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IFByZW1pdW0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgIDxoMj57c2VjdGlvbi50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2BhcnJvdyAke2FjdGl2ZUluZGV4ID09PSBpbmRleCA/ICdvcGVuJyA6ICcnfWB9PiYjOTY1MDs8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHthY3RpdmVJbmRleCA9PT0gaW5kZXggJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHA+e3NlY3Rpb24uY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTRjZDk2NWY2MzAwYzRkYjczMTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlY3Rpb25zIiwidGl0bGUiLCJjb250ZW50IiwiUHJlbWl1bSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJoYW5kbGVDbGljayIsImluZGV4IiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJrZXkiLCJvbkNsaWNrIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==