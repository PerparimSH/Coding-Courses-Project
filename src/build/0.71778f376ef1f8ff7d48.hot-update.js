"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 38:
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "TOP"
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
/******/ 	__webpack_require__.h = () => ("4fb059841c4a29047f6f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MTc3OGYzNzZlZjFmOGZmN2Q0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxHQUFHQSxDQUFBLEVBQUc7RUFDYixJQUFBQyxTQUFBLEdBQTBDSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsREcsYUFBYSxHQUFBRixVQUFBO0lBQUVHLGdCQUFnQixHQUFBSCxVQUFBO0VBRXRDLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDeEJDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO01BQ2RDLEdBQUcsRUFBRSxDQUFDO01BQ05DLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztFQUNKLENBQUM7RUFFRFgsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTVksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztNQUN6QixJQUFNQyxZQUFZLEdBQUdMLE1BQU0sQ0FBQ00sV0FBVztNQUN2QyxJQUFNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxZQUFZO01BQzVELElBQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxlQUFlLENBQUNFLFNBQVMsSUFBSUgsUUFBUSxDQUFDSSxJQUFJLENBQUNELFNBQVM7TUFFL0UsSUFBSUEsU0FBUyxHQUFHTixZQUFZLElBQUlFLGNBQWMsRUFBRTtRQUM5Q1QsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO01BQ3hCLENBQUMsTUFBTTtRQUNMQSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7TUFDekI7SUFDRixDQUFDO0lBRURFLE1BQU0sQ0FBQ2EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFVCxZQUFZLENBQUM7SUFDL0MsT0FBTztNQUFBLE9BQU1KLE1BQU0sQ0FBQ2MsbUJBQW1CLENBQUMsUUFBUSxFQUFFVixZQUFZLENBQUM7SUFBQTtFQUNqRSxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0VkLDBEQUFBO0lBQUswQixTQUFTLEVBQUM7RUFBSyxHQUNqQm5CLGFBQWEsaUJBQ1pQLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVsQjtFQUFZLGdCQUMzQlQsMERBQUE7SUFBRzBCLFNBQVMsRUFBQztFQUFzQixFQUFLLENBRTNDLENBQ0c7QUFFVjtBQUVBLGlFQUFldkIsR0FBRzs7Ozs7Ozs7VUN4Q2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9UT1AuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFRPUCgpIHtcclxuICBjb25zdCBbc2hvd1RvcEJ1dHRvbiwgc2V0U2hvd1RvcEJ1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgdG9wOiAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICBjb25zdCBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0ID49IGRvY3VtZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgc2V0U2hvd1RvcEJ1dHRvbih0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTaG93VG9wQnV0dG9uKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nVE9QJz5cclxuICAgICAge3Nob3dUb3BCdXR0b24gJiYgKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsVG9Ub3B9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jaXJjbGUtYXJyb3ctdXBcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUT1A7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGZiMDU5ODQxYzRhMjkwNDdmNmZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRPUCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3dUb3BCdXR0b24iLCJzZXRTaG93VG9wQnV0dG9uIiwic2Nyb2xsVG9Ub3AiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0Iiwic2Nyb2xsVG9wIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9