"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53485a0bfe8153e1c6d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZjEzMTk3ZDMxNTM5NmYxZTRlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEI7RUFDQSxJQUFBQyxTQUFBLEdBQXdCSCwrQ0FBUSxDQUFDLGtCQUFrQixDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBZ0NSLCtDQUFRLENBQUMscUJBQXFCLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBeERFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7O0VBRTVCO0VBQ0EsSUFBTUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBQSxFQUFTO0lBQzlCO0VBQUEsQ0FDRDtFQUVELG9CQUNFYiwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBUyxnQkFDdEJmLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFnQixnQkFDN0JmLDBEQUFBO0lBQUtnQixHQUFHLEVBQUMsNkhBQTZIO0lBQUNDLEdBQUcsRUFBQztFQUFpQixFQUFHLGVBQy9KakIsMERBQUE7SUFBSWUsU0FBUyxFQUFDO0VBQVUsR0FBRVIsSUFBSSxDQUFNLGVBQ3BDUCwwREFBQSxZQUFJVyxRQUFRLENBQUssZUFDakJYLDBEQUFBO0lBQVFrQixPQUFPLEVBQUVMO0VBQWtCLEdBQUMsY0FBWSxDQUFTLENBQ3JELGVBQ05iLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFjLGdCQUMzQmYsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QmYsMERBQUEsYUFBSSxVQUFRLENBQUssZUFDakJBLDBEQUFBLFlBQUcscUtBQW1LLENBQUksQ0FDdEssZUFDTkEsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QmYsMERBQUEsYUFBSSxZQUFVLENBQUssZUFDbkJBLDBEQUFBLDBCQUNFQSwwREFBQSxhQUFJLCtDQUE2QyxDQUFLLGVBQ3REQSwwREFBQSxhQUFJLHlDQUF1QyxDQUFLLENBQzdDLENBQ0QsZUFDTkEsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWlCLGdCQUM5QmYsMERBQUEsYUFBSSxjQUFZLENBQUssZUFDckJBLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUFjLGdCQUMxQmYsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUdtQixJQUFJLEVBQUM7RUFBK0MsR0FBQyxVQUFRLENBQUksQ0FBSyxlQUM3RW5CLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHbUIsSUFBSSxFQUFDO0VBQXFDLEdBQUMsU0FBTyxDQUFJLENBQUssZUFDbEVuQiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR21CLElBQUksRUFBQztFQUFvQyxHQUFDLFFBQU0sQ0FBSSxDQUFLLENBQzdELENBQ0QsQ0FDRixDQUNGO0FBRVY7Ozs7Ozs7O1VDNUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQocHJvcHMpIHtcclxuXHJcbiAgLy8gRGVmaW5lIHN0YXRlIHZhcmlhYmxlcyBmb3IgdXNlciBkYXRhXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJQZXJwYXJpbSBTaGtvZHJhXCIpO1xyXG4gIGNvbnN0IFtqb2JUaXRsZSwgc2V0Sm9iVGl0bGVdID0gdXNlU3RhdGUoXCJGcm9udC1lbmQgRGV2ZWxvcGVyXCIpO1xyXG5cclxuICAvLyBFdmVudCBoYW5kbGVyIGZvciBlZGl0aW5nIHRoZSBwcm9maWxlXHJcbiAgY29uc3QgaGFuZGxlRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAvLyBPcGVuIHRoZSBwcm9maWxlIGVkaXRpbmcgcGFnZSBvciBtb2RhbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5jaXR5cG5nLmNvbS9wdWJsaWMvdXBsb2Fkcy9wcmV2aWV3L2Rvd25sb2FkLXByb2ZpbGUtdXNlci1yb3VuZC1vcmFuZ2UtaWNvbi1zeW1ib2wtcG5nLTExNjM5NTk0MzYwa3NmNnRsaHVrZi5wbmdcIiBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3Byb2ZpbGlpJz57bmFtZX08L2gxPlxyXG4gICAgICAgIDxwPntqb2JUaXRsZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFZGl0UHJvZmlsZX0+RWRpdCBQcm9maWxlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDI+QWJvdXQgTWU8L2gyPlxyXG4gICAgICAgICAgPHA+SGkhIEknbSBQZXJwYXJpbSwgYSBmcm9udC1lbmQgZGV2ZWxvcGVyIGJhc2VkIGluIFhZWi4gSSBoYXZlIGV4cGVyaWVuY2Ugd2l0aCBSZWFjdCwgVnVlLCBhbmQgQW5ndWxhciwgYW5kIEkgbG92ZSBidWlsZGluZyBiZWF1dGlmdWwgYW5kIGZ1bmN0aW9uYWwgdXNlciBpbnRlcmZhY2VzLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGgyPkV4cGVyaWVuY2U8L2gyPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+QUJDIENvbXBhbnkgLSBGcm9udC1lbmQgRGV2ZWxvcGVyICgyMDE4LTIwMjApPC9saT5cclxuICAgICAgICAgICAgPGxpPkRFRiBBZ2VuY3kgLSBVSS9VWCBEZXNpZ25lciAoMjAxNS0yMDE4KTwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8aDI+U29jaWFsIE1lZGlhPC9oMj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcGVycGFyaW0tc2hrb2RyYS9cIj5MaW5rZWRJbjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vUGVycGFyaW1TaGtvZHJhXCI+VHdpdHRlcjwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wZXJwYXJpbXNoa29kcmFcIj5HaXRIdWI8L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MzQ4NWEwYmZlODE1M2UxYzZkM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwiam9iVGl0bGUiLCJzZXRKb2JUaXRsZSIsImhhbmRsZUVkaXRQcm9maWxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==