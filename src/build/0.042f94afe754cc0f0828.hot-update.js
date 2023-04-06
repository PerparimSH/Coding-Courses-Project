"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 40:
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

function Active() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeItem = _useState2[0],
    setActiveItem = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var mainMenuItems = document.querySelectorAll('.main-menu li a');
    mainMenuItems.forEach(function (item) {
      item.addEventListener('click', handleClick);
    });
    return function () {
      mainMenuItems.forEach(function (item) {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);
  var handleClick = function handleClick(event) {
    event.preventDefault();
    setActiveItem(event.target);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (activeItem) {
      mainMenuItems.forEach(function (item) {
        item.classList.remove('active');
      });
      activeItem.classList.add('active');
    }
  }, [activeItem]);
  return /*#__PURE__*/React.createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Menu Item 1")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Menu Item 2")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Menu Item 3")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Active);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8d115cc89f0aba35796a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNDJmOTRhZmU3NTRjYzBmMDgyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUU1QyxTQUFTRSxNQUFNQSxDQUFBLEVBQUc7RUFDaEIsSUFBQUMsU0FBQSxHQUFvQ0YsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0NHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFFaENKLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU1RLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztJQUVsRUYsYUFBYSxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO01BQzlCQSxJQUFJLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsV0FBVyxDQUFDO0lBQzdDLENBQUMsQ0FBQztJQUVGLE9BQU8sWUFBTTtNQUNYTixhQUFhLENBQUNHLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUs7UUFDOUJBLElBQUksQ0FBQ0csbUJBQW1CLENBQUMsT0FBTyxFQUFFRCxXQUFXLENBQUM7TUFDaEQsQ0FBQyxDQUFDO0lBQ0osQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUUsS0FBSyxFQUFLO0lBQzdCQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtJQUN0QlYsYUFBYSxDQUFDUyxLQUFLLENBQUNFLE1BQU0sQ0FBQztFQUM3QixDQUFDO0VBRURsQixnREFBUyxDQUFDLFlBQU07SUFDZCxJQUFJTSxVQUFVLEVBQUU7TUFDZEUsYUFBYSxDQUFDRyxPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1FBQzlCQSxJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztNQUNqQyxDQUFDLENBQUM7TUFFRmQsVUFBVSxDQUFDYSxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDcEM7RUFDRixDQUFDLEVBQUUsQ0FBQ2YsVUFBVSxDQUFDLENBQUM7RUFFaEIsb0JBQ0VnQixLQUFBLENBQUFDLGFBQUE7SUFBSUMsU0FBUyxFQUFDO0VBQVcsZ0JBQ3ZCRixLQUFBLENBQUFDLGFBQUEsMEJBQ0VELEtBQUEsQ0FBQUMsYUFBQTtJQUFHRSxJQUFJLEVBQUM7RUFBRyxHQUFDLGFBQVcsQ0FBSSxDQUN4QixlQUNMSCxLQUFBLENBQUFDLGFBQUEsMEJBQ0VELEtBQUEsQ0FBQUMsYUFBQTtJQUFHRSxJQUFJLEVBQUM7RUFBRyxHQUFDLGFBQVcsQ0FBSSxDQUN4QixlQUNMSCxLQUFBLENBQUFDLGFBQUEsMEJBQ0VELEtBQUEsQ0FBQUMsYUFBQTtJQUFHRSxJQUFJLEVBQUM7RUFBRyxHQUFDLGFBQVcsQ0FBSSxDQUN4QixDQUNGO0FBRVQ7QUFFQSxpRUFBZXZCLE1BQU07Ozs7Ozs7O1VDakRyQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvQWN0aXZlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEFjdGl2ZSgpIHtcclxuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1haW5NZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51IGxpIGEnKTtcclxuXHJcbiAgICBtYWluTWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIG1haW5NZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0QWN0aXZlSXRlbShldmVudC50YXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlSXRlbSkge1xyXG4gICAgICBtYWluTWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZUl0ZW1dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCI+TWVudSBJdGVtIDE8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8YSBocmVmPVwiI1wiPk1lbnUgSXRlbSAyPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIj5NZW51IEl0ZW0gMzwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWN0aXZlO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZDExNWNjODlmMGFiYTM1Nzk2YVwiKSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFjdGl2ZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwibWFpbk1lbnVJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==