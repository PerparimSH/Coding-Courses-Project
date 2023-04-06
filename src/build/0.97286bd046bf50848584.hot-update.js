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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem('name') || "Perparim Shkodra"),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];

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
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Front-end Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "changeprofile",
    onClick: handleEditProfile
  }, "Edit Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hi I'm Perparim,Shkdora a front-end developer. I have experience with React, JavaScript, CSS & HTML, and I love building beautiful and functional websites.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Experience"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "ABC Company - Front-end Developer (2018-2020)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "DEF Agency - UI/UX Designer (2015-2018)")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51e47ed9adca01235baf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NzI4NmJkMDQ2YmY1MDg0ODU4NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEI7RUFDQSxJQUFBQyxTQUFBLEdBQXdCSiwrQ0FBUSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUosU0FBQTtJQUE3RUssSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTs7RUFFcEI7RUFDQSxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFBLEVBQVM7SUFDOUIsSUFBTUMsT0FBTyxHQUFHQyxNQUFNLENBQUMsc0JBQXNCLENBQUM7SUFDOUNSLFlBQVksQ0FBQ1MsT0FBTyxDQUFDLE1BQU0sRUFBRUYsT0FBTyxDQUFDO0lBQ3JDRixPQUFPLENBQUNFLE9BQU8sQ0FBQztFQUNsQixDQUFDOztFQUVEO0VBQ0FYLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQU1jLFVBQVUsR0FBR1YsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQy9DLElBQUlTLFVBQVUsRUFBRTtNQUNkTCxPQUFPLENBQUNLLFVBQVUsQ0FBQztJQUNyQjtFQUNGLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDRWhCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBUyxnQkFDdEJsQiwwREFBQTtJQUFLa0IsU0FBUyxFQUFDO0VBQWdCLGdCQUM3QmxCLDBEQUFBO0lBQUttQixHQUFHLEVBQUMsNkhBQTZIO0lBQUNDLEdBQUcsRUFBQztFQUFpQixFQUFHLGVBQy9KcEIsMERBQUE7SUFBSWtCLFNBQVMsRUFBQztFQUFVLEdBQUVSLElBQUksQ0FBTSxlQUNwQ1YsMERBQUEsWUFBRyxxQkFBbUIsQ0FBSSxlQUMxQkEsMERBQUE7SUFBUWtCLFNBQVMsRUFBQyxlQUFlO0lBQUNHLE9BQU8sRUFBRVQ7RUFBa0IsR0FBQyxjQUFZLENBQVMsQ0FDL0UsZUFDTlosMERBQUE7SUFBS2tCLFNBQVMsRUFBQztFQUFjLGdCQUMzQmxCLDBEQUFBO0lBQUtrQixTQUFTLEVBQUM7RUFBaUIsZ0JBQzlCbEIsMERBQUEsYUFBSSxVQUFRLENBQUssZUFDakJBLDBEQUFBLFlBQUcsNkpBQTJKLENBQUksQ0FDOUosZUFDTkEsMERBQUE7SUFBS2tCLFNBQVMsRUFBQztFQUFpQixnQkFDOUJsQiwwREFBQSxhQUFJLFlBQVUsQ0FBSyxlQUNuQkEsMERBQUEsMEJBQ0VBLDBEQUFBLGFBQUksK0NBQTZDLENBQUssZUFDdERBLDBEQUFBLGFBQUkseUNBQXVDLENBQUssQ0FDN0MsQ0FDRCxDQUVGLENBQ0Y7QUFFVjtBQUVBLGlFQUFlRyxTQUFTOzs7Ozs7OztVQ2hEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcblxyXG4gIC8vIERlZmluZSBzdGF0ZSB2YXJpYWJsZXMgZm9yIHVzZXIgZGF0YVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykgfHwgXCJQZXJwYXJpbSBTaGtvZHJhXCIpO1xyXG5cclxuICAvLyBFdmVudCBoYW5kbGVyIGZvciBlZGl0aW5nIHRoZSBwcm9maWxlXHJcbiAgY29uc3QgaGFuZGxlRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KFwiRW50ZXIgeW91ciBuZXcgbmFtZTpcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5ld05hbWUpO1xyXG4gICAgc2V0TmFtZShuZXdOYW1lKTtcclxuICB9XHJcblxyXG4gIC8vIHVzZUVmZmVjdCBob29rIHRvIGluaXRpYWxpemUgdGhlIG5hbWUgc3RhdGUgdmFyaWFibGUgd2l0aCB0aGUgc3RvcmVkIHZhbHVlIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWROYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKTtcclxuICAgIGlmIChzdG9yZWROYW1lKSB7XHJcbiAgICAgIHNldE5hbWUoc3RvcmVkTmFtZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNpdHlwbmcuY29tL3B1YmxpYy91cGxvYWRzL3ByZXZpZXcvZG93bmxvYWQtcHJvZmlsZS11c2VyLXJvdW5kLW9yYW5nZS1pY29uLXN5bWJvbC1wbmctMTE2Mzk1OTQzNjBrc2Y2dGxodWtmLnBuZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ncHJvZmlsaWknPntuYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+RnJvbnQtZW5kIERldmVsb3BlcjwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2hhbmdlcHJvZmlsZScgb25DbGljaz17aGFuZGxlRWRpdFByb2ZpbGV9PkVkaXQgUHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyPkFib3V0IE1lPC9oMj5cclxuICAgICAgICAgIDxwPkhpIEknbSBQZXJwYXJpbSxTaGtkb3JhIGEgZnJvbnQtZW5kIGRldmVsb3Blci4gSSBoYXZlIGV4cGVyaWVuY2Ugd2l0aCBSZWFjdCwgSmF2YVNjcmlwdCwgQ1NTICYgSFRNTCwgYW5kIEkgbG92ZSBidWlsZGluZyBiZWF1dGlmdWwgYW5kIGZ1bmN0aW9uYWwgd2Vic2l0ZXMuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDI+RXhwZXJpZW5jZTwvaDI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaT5BQkMgQ29tcGFueSAtIEZyb250LWVuZCBEZXZlbG9wZXIgKDIwMTgtMjAyMCk8L2xpPlxyXG4gICAgICAgICAgICA8bGk+REVGIEFnZW5jeSAtIFVJL1VYIERlc2lnbmVyICgyMDE1LTIwMTgpPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTFlNDdlZDlhZGNhMDEyMzViYWZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhc2hib2FyZCIsInByb3BzIiwiX3VzZVN0YXRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiaGFuZGxlRWRpdFByb2ZpbGUiLCJuZXdOYW1lIiwicHJvbXB0Iiwic2V0SXRlbSIsInN0b3JlZE5hbWUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=