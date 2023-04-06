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
  var user = JSON.parse(localStorage.getItem('user'));

  // Define state variables for user data
  // const [name, setName] = useState(localStorage.getItem("name") || "Perparim Shkodra");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Front-end Developer"),
    _useState2 = _slicedToArray(_useState, 2),
    jobTitle = _useState2[0],
    setJobTitle = _useState2[1];

  // // Event handler for editing the profile
  // const handleEditProfile = () => {
  //   // Prompt the user to enter a new name
  //   const newName = prompt("Enter your new name:");

  //   // If the user entered a name, update the state variable and save it to local storage
  //   if (newName) {
  //     setName(newName);
  //     localStorage.setItem("name", newName);
  //   }
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png",
    alt: "Profile Picture"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "profilii"
  }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, jobTitle)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed3a5edb982bf283a5c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OWRmMjQxODA1MmM2ZjI2ZDg3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEIsSUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O0VBRXJEO0VBQ0E7RUFDQSxJQUFBQyxTQUFBLEdBQWdDUiwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXhERyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBOztFQUU1QjtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUEsb0JBQ0VWLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUFTLGdCQUN0QmYsMERBQUE7SUFBS2UsU0FBUyxFQUFDO0VBQWdCLGdCQUM3QmYsMERBQUE7SUFBS2dCLEdBQUcsRUFBQyw2SEFBNkg7SUFBQ0MsR0FBRyxFQUFDO0VBQWlCLEVBQUcsZUFDL0pqQiwwREFBQTtJQUFJZSxTQUFTLEVBQUM7RUFBVSxHQUFFWCxJQUFJLENBQUNjLFFBQVEsQ0FBTSxlQUM3Q2xCLDBEQUFBLFlBQUlZLFFBQVEsQ0FBSyxDQUViLENBQ0Y7QUFFVjtBQUVBLGlFQUFlVixTQUFTOzs7Ozs7OztVQ2xDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykge1xyXG5cclxuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuXHJcbiAgLy8gRGVmaW5lIHN0YXRlIHZhcmlhYmxlcyBmb3IgdXNlciBkYXRhXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpIHx8IFwiUGVycGFyaW0gU2hrb2RyYVwiKTtcclxuICBjb25zdCBbam9iVGl0bGUsIHNldEpvYlRpdGxlXSA9IHVzZVN0YXRlKFwiRnJvbnQtZW5kIERldmVsb3BlclwiKTtcclxuXHJcbiAgLy8gLy8gRXZlbnQgaGFuZGxlciBmb3IgZWRpdGluZyB0aGUgcHJvZmlsZVxyXG4gIC8vIGNvbnN0IGhhbmRsZUVkaXRQcm9maWxlID0gKCkgPT4ge1xyXG4gIC8vICAgLy8gUHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbmV3IG5hbWVcclxuICAvLyAgIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoXCJFbnRlciB5b3VyIG5ldyBuYW1lOlwiKTtcclxuXHJcbiAgLy8gICAvLyBJZiB0aGUgdXNlciBlbnRlcmVkIGEgbmFtZSwgdXBkYXRlIHRoZSBzdGF0ZSB2YXJpYWJsZSBhbmQgc2F2ZSBpdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgLy8gICBpZiAobmV3TmFtZSkge1xyXG4gIC8vICAgICBzZXROYW1lKG5ld05hbWUpO1xyXG4gIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgbmV3TmFtZSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNpdHlwbmcuY29tL3B1YmxpYy91cGxvYWRzL3ByZXZpZXcvZG93bmxvYWQtcHJvZmlsZS11c2VyLXJvdW5kLW9yYW5nZS1pY29uLXN5bWJvbC1wbmctMTE2Mzk1OTQzNjBrc2Y2dGxodWtmLnBuZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ncHJvZmlsaWknPnt1c2VyLnVzZXJuYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+e2pvYlRpdGxlfTwvcD5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFZGl0UHJvZmlsZX0+RWRpdCBQcm9maWxlPC9idXR0b24+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWQzYTVlZGI5ODJiZjI4M2E1YzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsInByb3BzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJqb2JUaXRsZSIsInNldEpvYlRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==