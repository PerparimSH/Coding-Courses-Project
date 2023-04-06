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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MyComponent() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var handleItemClick = function handleItemClick(index) {
    setActiveIndex(index);
  };
  var menuItems = ["Item 1", "Item 2", "Item 3"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, menuItems.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      className: activeIndex === index ? "active" : "",
      onClick: function onClick() {
        return handleItemClick(index);
      }
    }, item));
  })));
}
function MainHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section1"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section2"
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section3"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section4"
  }, "Prices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#section5"
  }, "Packs"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);








var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sections__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1398035af1876d057be2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNzNjMDIzNzM5YjZhNDkxYzZlNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV3QztBQUV4QyxTQUFTRSxXQUFXQSxDQUFBLEVBQUc7RUFDckIsSUFBQUMsU0FBQSxHQUFzQ0YsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0NHLFdBQVcsR0FBQUYsVUFBQTtJQUFFRyxjQUFjLEdBQUFILFVBQUE7RUFFbEMsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUs7SUFDakNGLGNBQWMsQ0FBQ0UsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQztFQUVoRCxvQkFDRVYsMERBQUE7SUFBS1ksU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCWiwwREFBQSxhQUNHVSxTQUFTLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxJQUFJLEVBQUVMLEtBQUs7SUFBQSxvQkFDekJULDBEQUFBO01BQUllLEdBQUcsRUFBRU47SUFBTSxnQkFDYlQsMERBQUE7TUFDRVksU0FBUyxFQUFFTixXQUFXLEtBQUtHLEtBQUssR0FBRyxRQUFRLEdBQUcsRUFBRztNQUNqRE8sT0FBTyxFQUFFLFNBQUFBLFFBQUE7UUFBQSxPQUFNUixlQUFlLENBQUNDLEtBQUssQ0FBQztNQUFBO0lBQUMsR0FFckNLLElBQUksQ0FDSCxDQUNEO0VBQUEsQ0FDTixDQUFDLENBQ0MsQ0FDRDtBQUVWO0FBRUEsU0FBU0csVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCLG9CQUNFakIsMERBQUE7SUFBUVksU0FBUyxFQUFDO0VBQWEsZ0JBQzdCWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBTSxnQkFDbkJaLDBEQUFBO0lBQUtrQixHQUFHLEVBQUM7RUFBNEQsRUFBRyxDQUNwRSxlQUNObEIsMERBQUE7SUFBSVksU0FBUyxFQUFDO0VBQVcsZ0JBQ3ZCWiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFXLEdBQUMsTUFBSSxDQUFJLENBQUssZUFDckNuQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFXLEdBQUMsT0FBSyxDQUFJLENBQUssZUFDdENuQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFXLEdBQUMsU0FBTyxDQUFJLENBQUssZUFDeENuQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFXLEdBQUMsUUFBTSxDQUFJLENBQUssZUFDdkNuQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFXLEdBQUMsT0FBSyxDQUFJLENBQUssQ0FDbkMsQ0FDRTtBQUViO0FBRUEsaUVBQWVGLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaERjO0FBQ047QUFDSztBQUNUO0FBQ0k7QUFDSjtBQUNOO0FBQ1k7QUFFbkMsSUFBTVUsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNpQixtREFBVSxPQUFHLGVBQ2RqQiwwREFBQSxDQUFDd0IsK0NBQU0sT0FBRyxlQUNWeEIsMERBQUEsQ0FBQ3VCLGlEQUFRLE9BQUcsZUFDWnZCLDBEQUFBLENBQUMwQixrREFBUyxPQUFHLGVBQ2IxQiwwREFBQSxDQUFDeUIsNENBQUcsT0FBRyxlQUNQekIsMERBQUEsQ0FBQ3NCLCtDQUFNLE9BQUcsQ0FFWDtBQUVYLENBQUM7QUFFREQsNkNBQWUsZUFBQ3JCLDBEQUFBLENBQUMyQixHQUFHLE9BQUUsRUFBRUcsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDdkJ2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvTWFpbkhlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcclxuICBjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51SXRlbXMgPSBbXCJJdGVtIDFcIiwgXCJJdGVtIDJcIiwgXCJJdGVtIDNcIl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVJbmRleCA9PT0gaW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNYWluSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VjdGlvbjFcIj5Ib21lPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VjdGlvbjJcIj5BYm91dDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb24zXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI3NlY3Rpb240XCI+UHJpY2VzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjc2VjdGlvbjVcIj5QYWNrczwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi9NYWluSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gXCIuL1NlY3Rpb25zXCJcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiXHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCJcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1haW5IZWFkZXIgLz5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbnMgLz5cclxuICAgICAgICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMzk4MDM1YWYxODc2ZDA1N2JlMlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTXlDb21wb25lbnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlSXRlbUNsaWNrIiwiaW5kZXgiLCJtZW51SXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImtleSIsIm9uQ2xpY2siLCJNYWluSGVhZGVyIiwic3JjIiwiaHJlZiIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiRm9vdGVyIiwiU2VjdGlvbnMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJBcHAiLCJGcmFnbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9