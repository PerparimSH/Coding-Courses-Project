"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem('name') || "Perparim Shkodra"),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Front-end Developer"),
    _useState4 = _slicedToArray(_useState3, 2),
    jobTitle = _useState4[0],
    setJobTitle = _useState4[1];

  // Event handler for editing the profile
  var handleEditProfile = function handleEditProfile() {
    var newName = prompt("Enter your new name:");
    localStorage.setItem('name', newName);
    setName(newName);
  };

  // useEffect hook to initialize the name state variable with the stored value on component mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
    }
  }, []);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hi I'm Perparim,Shkdora a front-end developer based in XYZ. I have experience with React, Vue, and Angular, and I love building beautiful and functional user interfaces.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "ABC Company - Front-end Developer (2018-2020)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "DEF Agency - UI/UX Designer (2015-2018)")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6dc2bfac7a2a14cea79e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yZmQ2OTI5YmQzMGJmMzhmMjQ4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEI7RUFDQSxJQUFBQyxTQUFBLEdBQXdCSiwrQ0FBUSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUosU0FBQTtJQUE3RUssSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQWdDWCwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUFZLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXhERSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBOztFQUU1QjtFQUNBLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM5QixJQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQztJQUM5Q1osWUFBWSxDQUFDYSxPQUFPLENBQUMsTUFBTSxFQUFFRixPQUFPLENBQUM7SUFDckNOLE9BQU8sQ0FBQ00sT0FBTyxDQUFDO0VBQ2xCLENBQUM7O0VBRUQ7RUFDQWYsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTWtCLFVBQVUsR0FBR2QsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9DLElBQUlhLFVBQVUsRUFBRTtNQUNkVCxPQUFPLENBQUNTLFVBQVUsQ0FBQztJQUNyQjtFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRXBCLDBEQUFBO0lBQUtzQixTQUFTLEVBQUM7RUFBUyxnQkFDdEJ0QiwwREFBQTtJQUFLc0IsU0FBUyxFQUFDO0VBQWdCLGdCQUM3QnRCLDBEQUFBO0lBQUt1QixHQUFHLEVBQUMsNkhBQTZIO0lBQUNDLEdBQUcsRUFBQztFQUFpQixFQUFHLGVBQy9KeEIsMERBQUE7SUFBSXNCLFNBQVMsRUFBQztFQUFVLEdBQUVaLElBQUksQ0FBTSxlQUNwQ1YsMERBQUEsWUFBSWMsUUFBUSxDQUFLLGVBQ2pCZCwwREFBQTtJQUFReUIsT0FBTyxFQUFFVDtFQUFrQixHQUFDLGNBQVksQ0FBUyxDQUNyRCxlQUNOaEIsMERBQUE7SUFBS3NCLFNBQVMsRUFBQztFQUFjLGdCQUMzQnRCLDBEQUFBO0lBQUtzQixTQUFTLEVBQUM7RUFBaUIsZ0JBQzlCdEIsMERBQUEsYUFBSSxVQUFRLENBQUssZUFDakJBLDBEQUFBLFlBQUcsMktBQXlLLENBQUksQ0FDNUssZUFDTkEsMERBQUE7SUFBS3NCLFNBQVMsRUFBQztFQUFpQixnQkFDOUJ0QiwwREFBQSxhQUFJLFlBQVUsQ0FBSyxlQUNuQkEsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksK0NBQTZDLENBQUssZUFDdERBLDBEQUFBLGFBQUkseUNBQXVDLENBQUssQ0FDN0MsQ0FDRCxDQUVGLENBQ0Y7QUFFVjtBQUVBLGlFQUFlRyxTQUFTOzs7Ozs7OztVQ2pEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcblxyXG4gIC8vIERlZmluZSBzdGF0ZSB2YXJpYWJsZXMgZm9yIHVzZXIgZGF0YVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykgfHwgXCJQZXJwYXJpbSBTaGtvZHJhXCIpO1xyXG4gIGNvbnN0IFtqb2JUaXRsZSwgc2V0Sm9iVGl0bGVdID0gdXNlU3RhdGUoXCJGcm9udC1lbmQgRGV2ZWxvcGVyXCIpO1xyXG5cclxuICAvLyBFdmVudCBoYW5kbGVyIGZvciBlZGl0aW5nIHRoZSBwcm9maWxlXHJcbiAgY29uc3QgaGFuZGxlRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KFwiRW50ZXIgeW91ciBuZXcgbmFtZTpcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5ld05hbWUpO1xyXG4gICAgc2V0TmFtZShuZXdOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCBob29rIHRvIGluaXRpYWxpemUgdGhlIG5hbWUgc3RhdGUgdmFyaWFibGUgd2l0aCB0aGUgc3RvcmVkIHZhbHVlIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKTtcclxuICAgIGlmIChzdG9yZWROYW1lKSB7XHJcbiAgICAgIHNldE5hbWUoc3RvcmVkTmFtZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNpdHlwbmcuY29tL3B1YmxpYy91cGxvYWRzL3ByZXZpZXcvZG93bmxvYWQtcHJvZmlsZS11c2VyLXJvdW5kLW9yYW5nZS1pY29uLXN5bWJvbC1wbmctMTE2Mzk1OTQzNjBrc2Y2dGxodWtmLnBuZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ncHJvZmlsaWknPntuYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+e2pvYlRpdGxlfTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUVkaXRQcm9maWxlfT5FZGl0IFByb2ZpbGU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1ib2R5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMj5BYm91dCBNZTwvaDI+XHJcbiAgICAgICAgICA8cD5IaSBJJ20gUGVycGFyaW0sU2hrZG9yYSBhIGZyb250LWVuZCBkZXZlbG9wZXIgYmFzZWQgaW4gWFlaLiBJIGhhdmUgZXhwZXJpZW5jZSB3aXRoIFJlYWN0LCBWdWUsIGFuZCBBbmd1bGFyLCBhbmQgSSBsb3ZlIGJ1aWxkaW5nIGJlYXV0aWZ1bCBhbmQgZnVuY3Rpb25hbCB1c2VyIGludGVyZmFjZXMuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDI+RXhwZXJpZW5jZTwvaDI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5BQkMgQ29tcGFueSAtIEZyb250LWVuZCBEZXZlbG9wZXIgKDIwMTgtMjAyMCk8L2xpPlxyXG4gICAgICAgICAgICA8bGk+REVGIEFnZW5jeSAtIFVJL1VYIERlc2lnbmVyICgyMDE1LTIwMTgpPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmRjMmJmYWM3YTJhMTRjZWE3OWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhc2hib2FyZCIsInByb3BzIiwiX3VzZVN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJqb2JUaXRsZSIsInNldEpvYlRpdGxlIiwiaGFuZGxlRWRpdFByb2ZpbGUiLCJuZXdOYW1lIiwicHJvbXB0Iiwic2V0SXRlbSIsInN0b3JlZE5hbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=