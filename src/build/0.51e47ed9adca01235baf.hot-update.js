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
  // Initialize state for user profile data
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('John Doe'),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('johndoe@example.com'),
    _useState4 = _slicedToArray(_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('I am a software developer.'),
    _useState6 = _slicedToArray(_useState5, 2),
    bio = _useState6[0],
    setBio = _useState6[1];

  // Function to handle form submission
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    // Save user profile data to database or API
    console.log('User profile updated:', {
      name: name,
      email: email,
      bio: bio
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "UserProfile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "My Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "bio"
  }, "Bio:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "bio",
    name: "bio",
    value: bio,
    onChange: function onChange(event) {
      return setBio(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5dffa04561336fd1b858")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTOzs7Ozs7OztVQ3REeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIHN0YXRlIGZvciB1c2VyIHByb2ZpbGUgZGF0YVxyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCdKb2huIERvZScpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJ2pvaG5kb2VAZXhhbXBsZS5jb20nKTtcclxuICBjb25zdCBbYmlvLCBzZXRCaW9dID0gdXNlU3RhdGUoJ0kgYW0gYSBzb2Z0d2FyZSBkZXZlbG9wZXIuJyk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBTYXZlIHVzZXIgcHJvZmlsZSBkYXRhIHRvIGRhdGFiYXNlIG9yIEFQSVxyXG4gICAgY29uc29sZS5sb2coJ1VzZXIgcHJvZmlsZSB1cGRhdGVkOicsIHsgbmFtZSwgZW1haWwsIGJpbyB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJVc2VyUHJvZmlsZVwiPlxyXG4gICAgICA8aDE+TXkgUHJvZmlsZTwvaDE+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJiaW9cIj5CaW86PC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImJpb1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRCaW8oZXZlbnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWRmZmEwNDU2MTMzNmZkMWI4NThcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJiaW8iLCJzZXRCaW8iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==