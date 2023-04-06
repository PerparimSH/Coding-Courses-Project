"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 41:
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

function TOP() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showTopButton = _useState2[0],
    setShowTopButton = _useState2[1];
  var scrollToTop = function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var windowHeight = window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + windowHeight >= documentHeight) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var buttonContainerStyle = {
    position: 'fixed',
    bottom: '50%',
    right: '50%',
    transform: 'translate(50%, 50%)'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "TOP",
    style: buttonContainerStyle
  }, showTopButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: scrollToTop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-circle-arrow-up"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOP);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1fef58cdc9ae6effc4b8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yYzA1YmZjMjFiZGVkOTQwNDBkMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxHQUFHQSxDQUFBLEVBQUc7RUFDYixJQUFBQyxTQUFBLEdBQTBDSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsREcsYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDeEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO01BQ2RDLEdBQUcsRUFBRSxDQUFDO01BQ05DLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRFgsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztNQUN6QixJQUFNQyxZQUFZLEdBQUdMLE1BQU0sQ0FBQ00sV0FBVztNQUN2QyxJQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxZQUFZO01BQzVELElBQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxlQUFlLENBQUNFLFNBQVMsSUFBSUgsUUFBUSxDQUFDSSxJQUFJLENBQUNELFNBQVM7TUFFL0UsSUFBSUEsU0FBUyxHQUFHTixZQUFZLElBQUlFLGNBQWMsRUFBRTtRQUM5Q1QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQ3hCLENBQUMsTUFBTTtRQUNMQSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7TUFDekI7SUFDRixDQUFDO0lBRURFLE1BQU0sQ0FBQ2EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxZQUFZLENBQUM7SUFDL0MsT0FBTztNQUFBLE9BQU1KLE1BQU0sQ0FBQ2MsbUJBQW1CLENBQUMsUUFBUSxFQUFFVixZQUFZLENBQUM7SUFBQTtFQUNqRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sSUFBTVcsb0JBQW9CLEdBQUc7SUFDM0JDLFFBQVEsRUFBRSxPQUFPO0lBQ2pCQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxLQUFLLEVBQUUsS0FBSztJQUNaQyxTQUFTLEVBQUU7RUFDYixDQUFDO0VBRUQsb0JBQ0U3QiwwREFBQTtJQUFLK0IsU0FBUyxFQUFDLEtBQUs7SUFBQ0MsS0FBSyxFQUFFUDtFQUFxQixHQUM5Q2xCLGFBQWEsaUJBQ1pQLDBEQUFBO0lBQVFpQyxPQUFPLEVBQUV4QjtFQUFZLGdCQUMzQlQsMERBQUE7SUFBRytCLFNBQVMsRUFBQztFQUFzQixFQUFLLENBRTNDLENBQ0c7QUFFVjtBQUVBLGlFQUFlNUIsR0FBRzs7Ozs7Ozs7VUMvQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9UT1AuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFRPUCgpIHtcclxuICBjb25zdCBbc2hvd1RvcEJ1dHRvbiwgc2V0U2hvd1RvcEJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0ID49IGRvY3VtZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0U2hvd1RvcEJ1dHRvbih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTaG93VG9wQnV0dG9uKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lclN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206ICc1MCUnLFxyXG4gICAgcmlnaHQ6ICc1MCUnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDUwJSwgNTAlKScsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdUT1AnIHN0eWxlPXtidXR0b25Db250YWluZXJTdHlsZX0+XHJcbiAgICAgIHtzaG93VG9wQnV0dG9uICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Njcm9sbFRvVG9wfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2lyY2xlLWFycm93LXVwXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVE9QO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZmVmNThjZGM5YWU2ZWZmYzRiOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVE9QIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd1RvcEJ1dHRvbiIsInNldFNob3dUb3BCdXR0b24iLCJzY3JvbGxUb1RvcCIsIndpbmRvdyIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJzY3JvbGxUb3AiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJidXR0b25Db250YWluZXJTdHlsZSIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJ0cmFuc2Zvcm0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==