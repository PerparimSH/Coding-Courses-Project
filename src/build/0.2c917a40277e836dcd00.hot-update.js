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

function Dashboard(props) {
  // Define state variables for user data
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Perparim Shkodra"),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Front-end Developer"),
    _useState4 = _slicedToArray(_useState3, 2),
    jobTitle = _useState4[0],
    setJobTitle = _useState4[1];

  // Event handler for editing the profile
  var handleEditProfile = function handleEditProfile() {
    // Open the profile editing page or modal
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png",
    alt: "Profile Picture"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "profilii"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, jobTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleEditProfile
  }, "Edit Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hi! I'm Perparim, a front-end developer based in XYZ. I have experience with React, Vue, and Angular, and I love building beautiful and functional user interfaces.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "ABC Company - Front-end Developer (2018-2020)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "DEF Agency - UI/UX Designer (2015-2018)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Social Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "social-links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/in/perparim-shkodra/"
  }, "LinkedIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://twitter.com/PerparimShkodra"
  }, "Twitter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/perparimshkodra"
  }, "GitHub"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);












var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45c1d5096a1182174c8b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQUNzQixvREFBSztJQUFDZ0IsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFdkMsMERBQUEsQ0FBQ21DLE9BQU87RUFBRyxFQUFHLGVBQ3ZDbkMsMERBQUEsQ0FBQ3NCLG9EQUFLO0lBQUNnQixJQUFJLEVBQUMsU0FBUztJQUFDQyxPQUFPLGVBQUV2QywwREFBQSxDQUFDaUMsK0NBQU07RUFBRyxFQUFHLGVBQzVDakMsMERBQUEsQ0FBQ3NCLG9EQUFLO0lBQUNnQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUV2QywwREFBQSxDQUFDa0MsOENBQUs7RUFBRyxFQUFHLGVBQzFDbEMsMERBQUEsQ0FBQ3NCLG9EQUFLO0lBQUNnQixJQUFJLEVBQUMsWUFBWTtJQUFDQyxPQUFPLGVBQUV2QywwREFBQSxDQUFDRSxtREFBUztFQUFJLEVBQUcsQ0FDNUMsQ0FDQSxlQUNiRiwwREFBQSxDQUFDK0IsNENBQUcsT0FBRyxlQUNQL0IsMERBQUEsQ0FBQzRCLCtDQUFNLE9BQUcsQ0FDUDtBQUVYLENBQUM7QUFFRFIsNkNBQWUsZUFBQ3BCLDBEQUFBLENBQUNxQyxHQUFHLE9BQUUsRUFBRUksUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDbER2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcblxyXG4gIC8vIERlZmluZSBzdGF0ZSB2YXJpYWJsZXMgZm9yIHVzZXIgZGF0YVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiUGVycGFyaW0gU2hrb2RyYVwiKTtcclxuICBjb25zdCBbam9iVGl0bGUsIHNldEpvYlRpdGxlXSA9IHVzZVN0YXRlKFwiRnJvbnQtZW5kIERldmVsb3BlclwiKTtcclxuXHJcbiAgLy8gRXZlbnQgaGFuZGxlciBmb3IgZWRpdGluZyB0aGUgcHJvZmlsZVxyXG4gIGNvbnN0IGhhbmRsZUVkaXRQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgLy8gT3BlbiB0aGUgcHJvZmlsZSBlZGl0aW5nIHBhZ2Ugb3IgbW9kYWxcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuY2l0eXBuZy5jb20vcHVibGljL3VwbG9hZHMvcHJldmlldy9kb3dubG9hZC1wcm9maWxlLXVzZXItcm91bmQtb3JhbmdlLWljb24tc3ltYm9sLXBuZy0xMTYzOTU5NDM2MGtzZjZ0bGh1a2YucG5nXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdwcm9maWxpaSc+e25hbWV9PC9oMT5cclxuICAgICAgICA8cD57am9iVGl0bGV9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdFByb2ZpbGV9PkVkaXQgUHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyPkFib3V0IE1lPC9oMj5cclxuICAgICAgICAgIDxwPkhpISBJJ20gUGVycGFyaW0sIGEgZnJvbnQtZW5kIGRldmVsb3BlciBiYXNlZCBpbiBYWVouIEkgaGF2ZSBleHBlcmllbmNlIHdpdGggUmVhY3QsIFZ1ZSwgYW5kIEFuZ3VsYXIsIGFuZCBJIGxvdmUgYnVpbGRpbmcgYmVhdXRpZnVsIGFuZCBmdW5jdGlvbmFsIHVzZXIgaW50ZXJmYWNlcy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMj5FeHBlcmllbmNlPC9oMj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPkFCQyBDb21wYW55IC0gRnJvbnQtZW5kIERldmVsb3BlciAoMjAxOC0yMDIwKTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5ERUYgQWdlbmN5IC0gVUkvVVggRGVzaWduZXIgKDIwMTUtMjAxOCk8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyPlNvY2lhbCBNZWRpYTwvaDI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BlcnBhcmltLXNoa29kcmEvXCI+TGlua2VkSW48L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1BlcnBhcmltU2hrb2RyYVwiPlR3aXR0ZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGVycGFyaW1zaGtvZHJhXCI+R2l0SHViPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IEFib3V0VVMgZnJvbSBcIi4vQWJvdXRVU1wiXHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCJcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIlxyXG5pbXBvcnQgQ29udGFjdFVTIGZyb20gXCIuL0NvbnRhY3RVU1wiXHJcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiOyAgXHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPEFib3V0VVMgLz5cclxuICAgICAgICA8Q29udGFjdFVTIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlci8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMvPn0gLz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9sb2dpblwiIGVsZW1lbnQ9ezxMb2dpbi8+fSAvPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgIDwvSGFzaFJvdXRlcj4gXHJcbiAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NWMxZDUwOTZhMTE4MjE3NGM4YlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwiam9iVGl0bGUiLCJzZXRKb2JUaXRsZSIsImhhbmRsZUVkaXRQcm9maWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJocmVmIiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlciIsIkZvb3RlciIsIkFib3V0VVMiLCJCYW5uZXIiLCJUT1AiLCJDb250YWN0VVMiLCJQcmljZXMiLCJMb2dpbiIsIldyYXBwZXIiLCJGcmFnbWVudCIsIkFwcCIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=