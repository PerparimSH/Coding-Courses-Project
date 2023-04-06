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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2612768bcc05e26d50b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xN2I2YTQ3Yzg0ZjlkMGU4YTBmZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEI7RUFDQSxJQUFBQyxTQUFBLEdBQXdCSCwrQ0FBUSxDQUFDLGtCQUFrQixDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBZ0NSLCtDQUFRLENBQUMscUJBQXFCLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBeERFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7O0VBRTVCO0VBQ0EsSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFTO0lBQzlCO0VBQUEsQ0FDRDtFQUVELG9CQUNFYiwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBUyxnQkFDdEJmLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFnQixnQkFDN0JmLDBEQUFBO0lBQUtnQixHQUFHLEVBQUMsNkhBQTZIO0lBQUNDLEdBQUcsRUFBQztFQUFpQixFQUFHLGVBQy9KakIsMERBQUE7SUFBSWUsU0FBUyxFQUFDO0VBQVUsR0FBRVIsSUFBSSxDQUFNLGVBQ3BDUCwwREFBQSxZQUFJVyxRQUFRLENBQUssZUFDakJYLDBEQUFBO0lBQVFrQixPQUFPLEVBQUVMO0VBQWtCLEdBQUMsY0FBWSxDQUFTLENBQ3JELGVBQ05iLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFjLGdCQUMzQmYsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QmYsMERBQUEsYUFBSSxVQUFRLENBQUssZUFDakJBLDBEQUFBLFlBQUcscUtBQW1LLENBQUksQ0FDdEssZUFDTkEsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QmYsMERBQUEsYUFBSSxZQUFVLENBQUssZUFDbkJBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLCtDQUE2QyxDQUFLLGVBQ3REQSwwREFBQSxhQUFJLHlDQUF1QyxDQUFLLENBQzdDLENBQ0QsZUFDTkEsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QmYsMERBQUEsYUFBSSxjQUFZLENBQUssZUFDckJBLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUFjLGdCQUMxQmYsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUdtQixJQUFJLEVBQUM7RUFBK0MsR0FBQyxVQUFRLENBQUksQ0FBSyxlQUM3RW5CLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHbUIsSUFBSSxFQUFDO0VBQXFDLEdBQUMsU0FBTyxDQUFJLENBQUssZUFDbEVuQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFvQyxHQUFDLFFBQU0sQ0FBSSxDQUFLLENBQzdELENBQ0QsQ0FDRixDQUNGO0FBRVY7QUFFQSxpRUFBZWpCLFNBQVM7Ozs7Ozs7O1VDOUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcblxyXG4gIC8vIERlZmluZSBzdGF0ZSB2YXJpYWJsZXMgZm9yIHVzZXIgZGF0YVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiUGVycGFyaW0gU2hrb2RyYVwiKTtcclxuICBjb25zdCBbam9iVGl0bGUsIHNldEpvYlRpdGxlXSA9IHVzZVN0YXRlKFwiRnJvbnQtZW5kIERldmVsb3BlclwiKTtcclxuXHJcbiAgLy8gRXZlbnQgaGFuZGxlciBmb3IgZWRpdGluZyB0aGUgcHJvZmlsZVxyXG4gIGNvbnN0IGhhbmRsZUVkaXRQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgLy8gT3BlbiB0aGUgcHJvZmlsZSBlZGl0aW5nIHBhZ2Ugb3IgbW9kYWxcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuY2l0eXBuZy5jb20vcHVibGljL3VwbG9hZHMvcHJldmlldy9kb3dubG9hZC1wcm9maWxlLXVzZXItcm91bmQtb3JhbmdlLWljb24tc3ltYm9sLXBuZy0xMTYzOTU5NDM2MGtzZjZ0bGh1a2YucG5nXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdwcm9maWxpaSc+e25hbWV9PC9oMT5cclxuICAgICAgICA8cD57am9iVGl0bGV9PC9wPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdFByb2ZpbGV9PkVkaXQgUHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyPkFib3V0IE1lPC9oMj5cclxuICAgICAgICAgIDxwPkhpISBJJ20gUGVycGFyaW0sIGEgZnJvbnQtZW5kIGRldmVsb3BlciBiYXNlZCBpbiBYWVouIEkgaGF2ZSBleHBlcmllbmNlIHdpdGggUmVhY3QsIFZ1ZSwgYW5kIEFuZ3VsYXIsIGFuZCBJIGxvdmUgYnVpbGRpbmcgYmVhdXRpZnVsIGFuZCBmdW5jdGlvbmFsIHVzZXIgaW50ZXJmYWNlcy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMj5FeHBlcmllbmNlPC9oMj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPkFCQyBDb21wYW55IC0gRnJvbnQtZW5kIERldmVsb3BlciAoMjAxOC0yMDIwKTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5ERUYgQWdlbmN5IC0gVUkvVVggRGVzaWduZXIgKDIwMTUtMjAxOCk8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyPlNvY2lhbCBNZWRpYTwvaDI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic29jaWFsLWxpbmtzXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3BlcnBhcmltLXNoa29kcmEvXCI+TGlua2VkSW48L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL1BlcnBhcmltU2hrb2RyYVwiPlR3aXR0ZXI8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcGVycGFyaW1zaGtvZHJhXCI+R2l0SHViPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjI2MTI3NjhiY2MwNWUyNmQ1MGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInNldE5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImpvYlRpdGxlIiwic2V0Sm9iVGl0bGUiLCJoYW5kbGVFZGl0UHJvZmlsZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=