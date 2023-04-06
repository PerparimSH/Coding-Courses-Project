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

function Premium(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var toggleAccordion = function toggleAccordion() {
    setIsActive(!isActive);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion-header",
    onClick: toggleAccordion
  }, props.title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "arrow ".concat(isActive ? "up" : "down")
  })), isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "accordion-content"
  }, props.content));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Premium);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6d4f7343ff2fe6f357f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYmMyY2E0YTNlMzEwMjYxMzU1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxPQUFPQSxDQUFDQyxLQUFLLEVBQUU7RUFDdEIsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBeENHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBLEVBQVM7SUFDNUJELFdBQVcsQ0FBQyxDQUFDRCxRQUFRLENBQUM7RUFDeEIsQ0FBQztFQUVELG9CQUNFUCwwREFBQTtJQUFLVyxTQUFTLEVBQUM7RUFBVyxnQkFDeEJYLDBEQUFBO0lBQUtXLFNBQVMsRUFBQyxrQkFBa0I7SUFBQ0MsT0FBTyxFQUFFSDtFQUFnQixHQUN4RE4sS0FBSyxDQUFDVSxLQUFLLGVBQ1piLDBEQUFBO0lBQUdXLFNBQVMsV0FBQUcsTUFBQSxDQUFXUCxRQUFRLEdBQUcsSUFBSSxHQUFHLE1BQU07RUFBRyxFQUFHLENBQ2pELEVBQ0xBLFFBQVEsaUJBQUlQLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFtQixHQUFFUixLQUFLLENBQUNZLE9BQU8sQ0FBTyxDQUNqRTtBQUVWO0FBRUEsaUVBQWViLE9BQU87Ozs7Ozs7O1VDcEJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUHJlbWl1bS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gUHJlbWl1bShwcm9wcykge1xyXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCB0b2dnbGVBY2NvcmRpb24gPSAoKSA9PiB7XHJcbiAgICBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1oZWFkZXJcIiBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PlxyXG4gICAgICAgIHtwcm9wcy50aXRsZX1cclxuICAgICAgICA8aSBjbGFzc05hbWU9e2BhcnJvdyAke2lzQWN0aXZlID8gXCJ1cFwiIDogXCJkb3duXCJ9YH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtpc0FjdGl2ZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbi1jb250ZW50XCI+e3Byb3BzLmNvbnRlbnR9PC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmQ0ZjczNDNmZjJmZTZmMzU3ZjZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByZW1pdW0iLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ0b2dnbGVBY2NvcmRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayIsInRpdGxlIiwiY29uY2F0IiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=