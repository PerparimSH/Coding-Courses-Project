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
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, jobTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleEditProfile
  }, "Edit Profile")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("75df50af71ce2af0a795")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iODQ4OWI5NjE5ZWJhZjE5ZDY2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFFeEI7RUFDQSxJQUFBQyxTQUFBLEdBQXdCSCwrQ0FBUSxDQUFDSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUosU0FBQTtJQUE3RUssSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQWdDViwrQ0FBUSxDQUFDLHFCQUFxQixDQUFDO0lBQUFXLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXhERSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBOztFQUU1QjtFQUNBLElBQU1HLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM5QjtJQUNBLElBQU1DLE9BQU8sR0FBR0MsTUFBTSxDQUFDLHNCQUFzQixDQUFDOztJQUU5QztJQUNBLElBQUlELE9BQU8sRUFBRTtNQUNYTixPQUFPLENBQUNNLE9BQU8sQ0FBQztNQUNoQlgsWUFBWSxDQUFDYSxPQUFPLENBQUMsTUFBTSxFQUFFRixPQUFPLENBQUM7SUFDdkM7RUFDRixDQUFDO0VBRUQsb0JBQ0VoQiwwREFBQTtJQUFLb0IsU0FBUyxFQUFDO0VBQVMsZ0JBQ3RCcEIsMERBQUE7SUFBS29CLFNBQVMsRUFBQztFQUFnQixnQkFDN0JwQiwwREFBQTtJQUFLcUIsR0FBRyxFQUFDLDZIQUE2SDtJQUFDQyxHQUFHLEVBQUM7RUFBaUIsRUFBRyxlQUMvSnRCLDBEQUFBO0lBQUlvQixTQUFTLEVBQUM7RUFBVSxHQUFFWCxJQUFJLENBQU0sZUFDcENULDBEQUFBLFlBQUlhLFFBQVEsQ0FBSyxlQUNqQmIsMERBQUE7SUFBUXVCLE9BQU8sRUFBRVI7RUFBa0IsR0FBQyxjQUFZLENBQVMsQ0FDckQsQ0FDRjtBQUVWO0FBRUEsaUVBQWViLFNBQVM7Ozs7Ozs7O1VDaEN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcblxyXG4gIC8vIERlZmluZSBzdGF0ZSB2YXJpYWJsZXMgZm9yIHVzZXIgZGF0YVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSB8fCBcIlBlcnBhcmltIFNoa29kcmFcIik7XHJcbiAgY29uc3QgW2pvYlRpdGxlLCBzZXRKb2JUaXRsZV0gPSB1c2VTdGF0ZShcIkZyb250LWVuZCBEZXZlbG9wZXJcIik7XHJcblxyXG4gIC8vIEV2ZW50IGhhbmRsZXIgZm9yIGVkaXRpbmcgdGhlIHByb2ZpbGVcclxuICBjb25zdCBoYW5kbGVFZGl0UHJvZmlsZSA9ICgpID0+IHtcclxuICAgIC8vIFByb21wdCB0aGUgdXNlciB0byBlbnRlciBhIG5ldyBuYW1lXHJcbiAgICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KFwiRW50ZXIgeW91ciBuZXcgbmFtZTpcIik7XHJcblxyXG4gICAgLy8gSWYgdGhlIHVzZXIgZW50ZXJlZCBhIG5hbWUsIHVwZGF0ZSB0aGUgc3RhdGUgdmFyaWFibGUgYW5kIHNhdmUgaXQgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgaWYgKG5ld05hbWUpIHtcclxuICAgICAgc2V0TmFtZShuZXdOYW1lKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIG5ld05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5jaXR5cG5nLmNvbS9wdWJsaWMvdXBsb2Fkcy9wcmV2aWV3L2Rvd25sb2FkLXByb2ZpbGUtdXNlci1yb3VuZC1vcmFuZ2UtaWNvbi1zeW1ib2wtcG5nLTExNjM5NTk0MzYwa3NmNnRsaHVrZi5wbmdcIiBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiAvPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9J3Byb2ZpbGlpJz57bmFtZX08L2gxPlxyXG4gICAgICAgIDxwPntqb2JUaXRsZX08L3A+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVFZGl0UHJvZmlsZX0+RWRpdCBQcm9maWxlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NWRmNTBhZjcxY2UyYWYwYTc5NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInNldE5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImpvYlRpdGxlIiwic2V0Sm9iVGl0bGUiLCJoYW5kbGVFZGl0UHJvZmlsZSIsIm5ld05hbWUiLCJwcm9tcHQiLCJzZXRJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9