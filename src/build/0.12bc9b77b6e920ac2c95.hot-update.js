"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
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

function PopUp() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showPopup = _useState2[0],
    setShowPopup = _useState2[1];
  function openPopup() {
    setShowPopup(true);
  }
  function closePopup() {
    setShowPopup(false);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: openPopup
  }, "Open Popup"), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "popup",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "This is the popup content."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: closePopup
  }, "Close Popup")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopUp);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44);












var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sections__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PopUp__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b7f16fba26c8703e2cc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMmJjOWI3N2I2ZTkyMGFjMmM5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxLQUFLQSxDQUFBLEVBQUc7RUFDZixJQUFBQyxTQUFBLEdBQWtDRiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUU5QixTQUFTSSxTQUFTQSxDQUFBLEVBQUc7SUFDbkJELFlBQVksQ0FBQyxJQUFJLENBQUM7RUFDcEI7RUFFQSxTQUFTRSxVQUFVQSxDQUFBLEVBQUc7SUFDcEJGLFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDckI7RUFFQSxvQkFDRVAsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQVFXLE9BQU8sRUFBRUg7RUFBVSxHQUFDLFlBQVUsQ0FBUyxFQUM5Q0YsU0FBUyxpQkFDUk4sMERBQUE7SUFBS1ksRUFBRSxFQUFDLE9BQU87SUFBQ0MsS0FBSyxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFRO0VBQUUsZ0JBQzFDZCwwREFBQSxZQUFHLDRCQUEwQixDQUFJLGVBQ2pDQSwwREFBQTtJQUFRVyxPQUFPLEVBQUVGO0VBQVcsR0FBQyxhQUFXLENBQVMsQ0FFcEQsQ0FDRztBQUVWO0FBRUEsaUVBQWVQLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1CO0FBQ047QUFDSztBQUNUO0FBQ0k7QUFDSjtBQUNOO0FBQ1k7QUFDTDtBQUNGO0FBUUE7QUFDVTtBQUd0QyxJQUFNNkIsT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUEsRUFBUztFQUNsQixvQkFDSS9CLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDb0IsK0NBQU0sT0FBRyxlQUNWcEIsMERBQUEsQ0FBQ21CLGlEQUFRLE9BQUcsZUFDWm5CLDBEQUFBLENBQUNzQixrREFBUyxPQUFHLENBQ2Q7QUFFWCxDQUFDO0FBR0QsSUFBTVcsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUVJakMsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0FBLDBEQUFBLENBQUN3Qix5REFBVSxxQkFDUHhCLDBEQUFBLENBQUNpQixtREFBVSxPQUFHLGVBQ2RqQiwwREFBQSxDQUFDMEIscURBQU0scUJBQ1AxQiwwREFBQSxDQUFDeUIsb0RBQUs7SUFBQ1MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFbkMsMERBQUEsQ0FBQytCLE9BQU87RUFBRyxFQUFHLGVBQ3ZDL0IsMERBQUEsQ0FBQ3lCLG9EQUFLO0lBQUNTLElBQUksRUFBQyxTQUFTO0lBQUNDLE9BQU8sZUFBRW5DLDBEQUFBLENBQUN1QiwrQ0FBTTtFQUFHLEVBQUcsQ0FDbkMsQ0FDQSxlQUNidkIsMERBQUEsQ0FBQ0UsOENBQUssT0FBRyxlQUNMRiwwREFBQSxDQUFDcUIsNENBQUcsT0FBRyxlQUNQckIsMERBQUEsQ0FBQ2tCLCtDQUFNLE9BQUcsQ0FDWDtBQUVYLENBQUM7QUFFREYsNkNBQWUsZUFBQ2hCLDBEQUFBLENBQUNpQyxHQUFHLE9BQUUsRUFBRUksUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDbER2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUG9wVXAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBQb3BVcCgpIHtcclxuICBjb25zdCBbc2hvd1BvcHVwLCBzZXRTaG93UG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBmdW5jdGlvbiBvcGVuUG9wdXAoKSB7XHJcbiAgICBzZXRTaG93UG9wdXAodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xyXG4gICAgc2V0U2hvd1BvcHVwKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5Qb3B1cH0+T3BlbiBQb3B1cDwvYnV0dG9uPlxyXG4gICAgICB7c2hvd1BvcHVwICYmIChcclxuICAgICAgICA8ZGl2IGlkPVwicG9wdXBcIiBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBwb3B1cCBjb250ZW50LjwvcD5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2xvc2VQb3B1cH0+Q2xvc2UgUG9wdXA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcFVwOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBNYWluSGVhZGVyIGZyb20gXCIuL01haW5IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIlxyXG5pbXBvcnQgU2VjdGlvbnMgZnJvbSBcIi4vU2VjdGlvbnNcIlxyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiXHJcbmltcG9ydCBUT1AgZnJvbSBcIi4vVE9QXCJcclxuaW1wb3J0IENvbnRhY3RVUyBmcm9tIFwiLi9Db250YWN0VVNcIlxyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL1ByaWNlc1wiO1xyXG5pbXBvcnQgUG9wVXAgZnJvbSBcIi4vUG9wVXBcIjtcclxuaW1wb3J0IHtcclxuICAgIEhhc2hSb3V0ZXIsXHJcbiAgICBSb3V0ZSxcclxuICAgIFJvdXRlcyxcclxuICAgIExpbmssXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgT3V0bGV0XHJcbiAgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICAgICAgPFNlY3Rpb25zIC8+XHJcbiAgICAgICAgICAgIDxDb250YWN0VVMgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxNYWluSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxXcmFwcGVyLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgPC9IYXNoUm91dGVyPiBcclxuICAgICAgICA8UG9wVXAgLz5cclxuICAgICAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YjdmMTZmYmEyNmM4NzAzZTJjY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUG9wVXAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaG93UG9wdXAiLCJzZXRTaG93UG9wdXAiLCJvcGVuUG9wdXAiLCJjbG9zZVBvcHVwIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJpZCIsInN0eWxlIiwiZGlzcGxheSIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiTWFpbkhlYWRlciIsIkZvb3RlciIsIlNlY3Rpb25zIiwiQmFubmVyIiwiVE9QIiwiQ29udGFjdFVTIiwiUHJpY2VzIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJOYXZpZ2F0aW9uIiwiV3JhcHBlciIsIkZyYWdtZW50IiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==