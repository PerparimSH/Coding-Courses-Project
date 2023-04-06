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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("name") || "Perparim Shkodra"),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Front-end Developer"),
    _useState4 = _slicedToArray(_useState3, 2),
    jobTitle = _useState4[0],
    setJobTitle = _useState4[1];

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
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, jobTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Welcome ", user.username, "!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleEditProfile
  }, "Edit Profile")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("22aaef1878da32d5fb3e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzc1MjBhMThlMzI5NmQ5OWZkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEIsSUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O0VBRXJEO0VBQ0EsSUFBQUMsU0FBQSxHQUF3QlIsK0NBQVEsQ0FBQ00sWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0VHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUFnQ2IsK0NBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUFBYyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF4REUsUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTs7RUFFNUI7RUFDQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFBLEVBQVM7SUFDOUI7SUFDQSxJQUFNQyxPQUFPLEdBQUdDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQzs7SUFFOUM7SUFDQSxJQUFJRCxPQUFPLEVBQUU7TUFDWE4sT0FBTyxDQUFDTSxPQUFPLENBQUM7TUFDaEJaLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLE1BQU0sRUFBRUYsT0FBTyxDQUFDO0lBQ3ZDO0VBQ0YsQ0FBQztFQUVELG9CQUNFbkIsMERBQUE7SUFBS3VCLFNBQVMsRUFBQztFQUFTLGdCQUN0QnZCLDBEQUFBO0lBQUt1QixTQUFTLEVBQUM7RUFBZ0IsZ0JBQzdCdkIsMERBQUE7SUFBS3dCLEdBQUcsRUFBQyw2SEFBNkg7SUFBQ0MsR0FBRyxFQUFDO0VBQWlCLEVBQUcsZUFDL0p6QiwwREFBQTtJQUFJdUIsU0FBUyxFQUFDO0VBQVUsR0FBRVgsSUFBSSxDQUFNLGVBQ3BDWiwwREFBQSxZQUFJZ0IsUUFBUSxDQUFLLGVBQ2pCaEIsMERBQUEsYUFBSSxVQUFRLEVBQUNJLElBQUksQ0FBQ3NCLFFBQVEsRUFBQyxHQUFDLENBQUssZUFDakMxQiwwREFBQTtJQUFRMkIsT0FBTyxFQUFFVDtFQUFrQixHQUFDLGNBQVksQ0FBUyxDQUNyRCxDQUNGO0FBRVY7QUFFQSxpRUFBZWhCLFNBQVM7Ozs7Ozs7O1VDbkN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG5cclxuICAvLyBEZWZpbmUgc3RhdGUgdmFyaWFibGVzIGZvciB1c2VyIGRhdGFcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIikgfHwgXCJQZXJwYXJpbSBTaGtvZHJhXCIpO1xyXG4gIGNvbnN0IFtqb2JUaXRsZSwgc2V0Sm9iVGl0bGVdID0gdXNlU3RhdGUoXCJGcm9udC1lbmQgRGV2ZWxvcGVyXCIpO1xyXG5cclxuICAvLyBFdmVudCBoYW5kbGVyIGZvciBlZGl0aW5nIHRoZSBwcm9maWxlXHJcbiAgY29uc3QgaGFuZGxlRWRpdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAvLyBQcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBuZXcgbmFtZVxyXG4gICAgY29uc3QgbmV3TmFtZSA9IHByb21wdChcIkVudGVyIHlvdXIgbmV3IG5hbWU6XCIpO1xyXG5cclxuICAgIC8vIElmIHRoZSB1c2VyIGVudGVyZWQgYSBuYW1lLCB1cGRhdGUgdGhlIHN0YXRlIHZhcmlhYmxlIGFuZCBzYXZlIGl0IHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGlmIChuZXdOYW1lKSB7XHJcbiAgICAgIHNldE5hbWUobmV3TmFtZSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibmFtZVwiLCBuZXdOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhlYWRlclwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuY2l0eXBuZy5jb20vcHVibGljL3VwbG9hZHMvcHJldmlldy9kb3dubG9hZC1wcm9maWxlLXVzZXItcm91bmQtb3JhbmdlLWljb24tc3ltYm9sLXBuZy0xMTYzOTU5NDM2MGtzZjZ0bGh1a2YucG5nXCIgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgLz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdwcm9maWxpaSc+e25hbWV9PC9oMT5cclxuICAgICAgICA8cD57am9iVGl0bGV9PC9wPlxyXG4gICAgICAgIDxoMj5XZWxjb21lIHt1c2VyLnVzZXJuYW1lfSE8L2gyPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRWRpdFByb2ZpbGV9PkVkaXQgUHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjJhYWVmMTg3OGRhMzJkNWZiM2VcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsInByb3BzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwiam9iVGl0bGUiLCJzZXRKb2JUaXRsZSIsImhhbmRsZUVkaXRQcm9maWxlIiwibmV3TmFtZSIsInByb21wdCIsInNldEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwidXNlcm5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==