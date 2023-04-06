"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MainHeader() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    clickedLinks = _useState2[0],
    setClickedLinks = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // ...

    return function () {
      mainMenuLinks.forEach(function (link) {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [clickedLinks]);

  // ...

  var handleLinkClick = function handleLinkClick(e) {
    e.preventDefault();
    setClickedLinks([].concat(_toConsumableArray(clickedLinks), [e.target.getAttribute('href')]));
  };
  mainMenuLinks.forEach(function (link) {
    link.addEventListener('click', handleLinkClick);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact"
  }, "Contact"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("23f6c51faf7eb2271336")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzRlYjEyMGVjYTU5MzBhODZkOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFFbkQsU0FBU0csVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCLElBQUFDLFNBQUEsR0FBd0NILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBRXBDSCxnREFBUyxDQUFDLFlBQU07SUFDZDs7SUFFQSxPQUFPLFlBQU07TUFDWE8sYUFBYSxDQUFDQyxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO1FBQzVCQSxJQUFJLENBQUNDLG1CQUFtQixDQUFDLE9BQU8sRUFBRUMsZUFBZSxDQUFDO01BQ3BELENBQUMsQ0FBQztJQUNKLENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ04sWUFBWSxDQUFDLENBQUM7O0VBRWxCOztFQUVBLElBQU1NLGVBQWUsR0FBRyxTQUFsQkEsZUFBZUEsQ0FBR0MsQ0FBQyxFQUFJO0lBQzNCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtJQUNsQlAsZUFBZSxJQUFBUSxNQUFBLENBQUFDLGtCQUFBLENBQ1ZWLFlBQVksSUFDZk8sQ0FBQyxDQUFDSSxNQUFNLENBQUNDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FDN0I7RUFDSixDQUFDO0VBRURWLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUM1QkEsSUFBSSxDQUFDUyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVQLGVBQWUsQ0FBQztFQUNqRCxDQUFDLENBQUM7RUFHRixvQkFDRWIsMERBQUE7SUFBS3NCLFNBQVMsRUFBQztFQUFXLGdCQUN4QnRCLDBEQUFBO0lBQUd1QixJQUFJLEVBQUM7RUFBRyxHQUFDLE1BQUksQ0FBSSxlQUNwQnZCLDBEQUFBO0lBQUd1QixJQUFJLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBSSxlQUMxQnZCLDBEQUFBO0lBQUd1QixJQUFJLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBSSxDQUMxQjtBQUVWO0FBRUEsaUVBQWVwQixVQUFVOzs7Ozs7OztVQ3ZDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL01haW5IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE1haW5IZWFkZXIoKSB7XHJcbiAgY29uc3QgW2NsaWNrZWRMaW5rcywgc2V0Q2xpY2tlZExpbmtzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIC4uLlxyXG4gIFxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbWFpbk1lbnVMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVMaW5rQ2xpY2spO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSwgW2NsaWNrZWRMaW5rc10pO1xyXG4gIFxyXG4gIC8vIC4uLlxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUxpbmtDbGljayA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0Q2xpY2tlZExpbmtzKFtcclxuICAgICAgLi4uY2xpY2tlZExpbmtzLFxyXG4gICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG4gICAgXSk7XHJcbiAgfTtcclxuICBcclxuICBtYWluTWVudUxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTGlua0NsaWNrKTtcclxuICB9KTtcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgIDxhIGhyZWY9XCIvXCI+SG9tZTwvYT5cclxuICAgICAgPGEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPlxyXG4gICAgICA8YSBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjNmNmM1MWZhZjdlYjIyNzEzMzZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1haW5IZWFkZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjbGlja2VkTGlua3MiLCJzZXRDbGlja2VkTGlua3MiLCJtYWluTWVudUxpbmtzIiwiZm9yRWFjaCIsImxpbmsiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTGlua0NsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==