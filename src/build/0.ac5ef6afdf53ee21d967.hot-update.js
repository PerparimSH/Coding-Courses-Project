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

var Dashboard = function Dashboard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('John Doe'),
    _useState2 = _slicedToArray(_useState, 2),
    userName = _useState2[0],
    setUserName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('johndoe@example.com'),
    _useState4 = _slicedToArray(_useState3, 2),
    userEmail = _useState4[0],
    setUserEmail = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Lorem ipsum dolor sit amet.'),
    _useState6 = _slicedToArray(_useState5, 2),
    userBio = _useState6[0],
    setUserBio = _useState6[1];
  var handleNameChange = function handleNameChange(event) {
    setUserName(event.target.value);
  };
  var handleEmailChange = function handleEmailChange(event) {
    setUserEmail(event.target.value);
  };
  var handleBioChange = function handleBioChange(event) {
    setUserBio(event.target.value);
  };
  var handleSaveClick = function handleSaveClick() {
    // Make a HTTP request to save the updated user data
    console.log('User data saved successfully!');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Edit your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "username"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "username",
    value: userName,
    onChange: handleNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "useremail"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "useremail",
    value: userEmail,
    onChange: handleEmailChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "userbio"
  }, "Bio:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "userbio",
    value: userBio,
    onChange: handleBioChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "save-btn",
    onClick: handleSaveClick
  }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("67ee7a57711bb07535a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Uzs7Ozs7Ozs7VUNqRHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnSm9obiBEb2UnKTtcclxuICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoJ2pvaG5kb2VAZXhhbXBsZS5jb20nKTtcclxuICBjb25zdCBbdXNlckJpbywgc2V0VXNlckJpb10gPSB1c2VTdGF0ZSgnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQuJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFVzZXJOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFVzZXJFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJpb0NoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VXNlckJpbyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVDbGljayA9ICgpID0+IHtcclxuICAgIC8vIE1ha2UgYSBIVFRQIHJlcXVlc3QgdG8gc2F2ZSB0aGUgdXBkYXRlZCB1c2VyIGRhdGFcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+RWRpdCB5b3VyIHByb2ZpbGU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYm9keVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlcmVtYWlsXCIgdmFsdWU9e3VzZXJFbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyYmlvXCI+QmlvOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ1c2VyYmlvXCIgdmFsdWU9e3VzZXJCaW99IG9uQ2hhbmdlPXtoYW5kbGVCaW9DaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzYXZlLWJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNhdmVDbGlja30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjdlZTdhNTc3MTFiYjA3NTM1YTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXJFbWFpbCIsInNldFVzZXJFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidXNlckJpbyIsInNldFVzZXJCaW8iLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlQmlvQ2hhbmdlIiwiaGFuZGxlU2F2ZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==