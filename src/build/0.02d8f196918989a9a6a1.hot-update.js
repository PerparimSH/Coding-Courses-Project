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
// import React from 'react';

// function TOP() {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <div className='TOP TOP-2'>
//     <button onClick={scrollToTop}>Back to Top</button>
//     </div>
//   );
// }
// export default TOP;


function TOP() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showButton = _useState2[0],
    setShowButton = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var handleScroll = function handleScroll() {
    var scrollTop = window.pageYOffset;
    if (scrollTop > 200) {
      // adjust this value depending on when you want the button to show
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  var handleClick = function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "scroll-up-button"
  }, showButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Scroll to top"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TOP);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4f11404b19fdce1a0e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wMmQ4ZjE5NjkxODk4OWE5YTZhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUltRDtBQUNuRCxTQUFTRyxHQUFHQSxDQUFBLEVBQUc7RUFDYixJQUFBQyxTQUFBLEdBQW9DSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1Q0csVUFBVSxHQUFBRixVQUFBO0lBQUVHLGFBQWEsR0FBQUgsVUFBQTtFQUNoQ0gsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2RPLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFQyxZQUFZLENBQUM7SUFDL0MsT0FBTyxZQUFNO01BQ1hGLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsUUFBUSxFQUFFRCxZQUFZLENBQUM7SUFDcEQsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCLElBQU1FLFNBQVMsR0FBR0osTUFBTSxDQUFDSyxXQUFXO0lBQ3BDLElBQUlELFNBQVMsR0FBRyxHQUFHLEVBQUU7TUFBRTtNQUNyQkwsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDLE1BQU07TUFDTEEsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN0QjtFQUNGLENBQUM7RUFDRCxJQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3hCTixNQUFNLENBQUNPLFFBQVEsQ0FBQztNQUFFQyxHQUFHLEVBQUUsQ0FBQztNQUFFQyxRQUFRLEVBQUU7SUFBUyxDQUFDLENBQUM7RUFDakQsQ0FBQztFQUNELG9CQUNFbEIsMERBQUE7SUFBS29CLFNBQVMsRUFBQztFQUFrQixHQUM5QmIsVUFBVSxpQkFBSVAsMERBQUE7SUFBUXFCLE9BQU8sRUFBRU47RUFBWSxHQUFDLGVBQWEsQ0FBUyxDQUMvRDtBQUVWO0FBQ0EsaUVBQWVaLEdBQUc7Ozs7Ozs7O1VDOUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvVE9QLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGZ1bmN0aW9uIFRPUCgpIHtcclxuLy8gICBjb25zdCBzY3JvbGxUb1RvcCA9ICgpID0+IHtcclxuLy8gICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbi8vICAgICAgIHRvcDogMCxcclxuLy8gICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuLy8gICAgIH0pO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nVE9QIFRPUC0yJz5cclxuLy8gICAgIDxidXR0b24gb25DbGljaz17c2Nyb2xsVG9Ub3B9PkJhY2sgdG8gVG9wPC9idXR0b24+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFRPUDtcclxuXHJcblxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmZ1bmN0aW9uIFRPUCgpIHtcclxuICBjb25zdCBbc2hvd0J1dHRvbiwgc2V0U2hvd0J1dHRvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICBpZiAoc2Nyb2xsVG9wID4gMjAwKSB7IC8vIGFkanVzdCB0aGlzIHZhbHVlIGRlcGVuZGluZyBvbiB3aGVuIHlvdSB3YW50IHRoZSBidXR0b24gdG8gc2hvd1xyXG4gICAgICBzZXRTaG93QnV0dG9uKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2hvd0J1dHRvbihmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXVwLWJ1dHRvblwiPlxyXG4gICAgICB7c2hvd0J1dHRvbiAmJiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5TY3JvbGwgdG8gdG9wPC9idXR0b24+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUT1A7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNGYxMTQwNGIxOWZkY2UxYTBlMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVE9QIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2hvd0J1dHRvbiIsInNldFNob3dCdXR0b24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiaGFuZGxlQ2xpY2siLCJzY3JvbGxUbyIsInRvcCIsImJlaGF2aW9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9