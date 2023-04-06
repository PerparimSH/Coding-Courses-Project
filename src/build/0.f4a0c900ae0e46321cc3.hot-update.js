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

  // Event handler for editing the profile
  var handleEditProfile = function handleEditProfile() {
    // Prompt the user to enter a new name
    var newName = prompt("Enter your new name:");

    // If the user entered a name, update the state variable and save it to local storage
    if (newName) {
      setName(newName);
      localStorage.setItem("name", newName);
    }
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
  }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, jobTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleEditProfile
  }, "Edit Profile")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("49df2418052c6f26d877")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNGEwYzkwMGFlMGU0NjMyMWNjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEIsSUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O0VBRXJEO0VBQ0E7RUFDQSxJQUFBQyxTQUFBLEdBQWdDUiwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXhERyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBOztFQUU1QjtFQUNBLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM5QjtJQUNBLElBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDOztJQUU5QztJQUNBLElBQUlELE9BQU8sRUFBRTtNQUNYRSxPQUFPLENBQUNGLE9BQU8sQ0FBQztNQUNoQlIsWUFBWSxDQUFDVyxPQUFPLENBQUMsTUFBTSxFQUFFSCxPQUFPLENBQUM7SUFDdkM7RUFDRixDQUFDO0VBRUQsb0JBQ0VmLDBEQUFBO0lBQUtvQixTQUFTLEVBQUM7RUFBUyxnQkFDdEJwQiwwREFBQTtJQUFLb0IsU0FBUyxFQUFDO0VBQWdCLGdCQUM3QnBCLDBEQUFBO0lBQUtxQixHQUFHLEVBQUMsNkhBQTZIO0lBQUNDLEdBQUcsRUFBQztFQUFpQixFQUFHLGVBQy9KdEIsMERBQUE7SUFBSW9CLFNBQVMsRUFBQztFQUFVLEdBQUVoQixJQUFJLENBQUNtQixRQUFRLENBQU0sZUFDN0N2QiwwREFBQSxZQUFJWSxRQUFRLENBQUssZUFDakJaLDBEQUFBO0lBQVF3QixPQUFPLEVBQUVWO0VBQWtCLEdBQUMsY0FBWSxDQUFTLENBQ3JELENBQ0Y7QUFFVjtBQUVBLGlFQUFlWixTQUFTOzs7Ozs7OztVQ2xDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykge1xyXG5cclxuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuXHJcbiAgLy8gRGVmaW5lIHN0YXRlIHZhcmlhYmxlcyBmb3IgdXNlciBkYXRhXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpIHx8IFwiUGVycGFyaW0gU2hrb2RyYVwiKTtcclxuICBjb25zdCBbam9iVGl0bGUsIHNldEpvYlRpdGxlXSA9IHVzZVN0YXRlKFwiRnJvbnQtZW5kIERldmVsb3BlclwiKTtcclxuXHJcbiAgLy8gRXZlbnQgaGFuZGxlciBmb3IgZWRpdGluZyB0aGUgcHJvZmlsZVxyXG4gIGNvbnN0IGhhbmRsZUVkaXRQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgLy8gUHJvbXB0IHRoZSB1c2VyIHRvIGVudGVyIGEgbmV3IG5hbWVcclxuICAgIGNvbnN0IG5ld05hbWUgPSBwcm9tcHQoXCJFbnRlciB5b3VyIG5ldyBuYW1lOlwiKTtcclxuXHJcbiAgICAvLyBJZiB0aGUgdXNlciBlbnRlcmVkIGEgbmFtZSwgdXBkYXRlIHRoZSBzdGF0ZSB2YXJpYWJsZSBhbmQgc2F2ZSBpdCB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICBpZiAobmV3TmFtZSkge1xyXG4gICAgICBzZXROYW1lKG5ld05hbWUpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgbmV3TmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LmNpdHlwbmcuY29tL3B1YmxpYy91cGxvYWRzL3ByZXZpZXcvZG93bmxvYWQtcHJvZmlsZS11c2VyLXJvdW5kLW9yYW5nZS1pY29uLXN5bWJvbC1wbmctMTE2Mzk1OTQzNjBrc2Y2dGxodWtmLnBuZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT0ncHJvZmlsaWknPnt1c2VyLnVzZXJuYW1lfTwvaDE+XHJcbiAgICAgICAgPHA+e2pvYlRpdGxlfTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUVkaXRQcm9maWxlfT5FZGl0IFByb2ZpbGU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ5ZGYyNDE4MDUyYzZmMjZkODc3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJwcm9wcyIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwiam9iVGl0bGUiLCJzZXRKb2JUaXRsZSIsImhhbmRsZUVkaXRQcm9maWxlIiwibmV3TmFtZSIsInByb21wdCIsInNldE5hbWUiLCJzZXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsInVzZXJuYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=