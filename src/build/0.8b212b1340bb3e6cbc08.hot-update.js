"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 41:
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

var Login = function Login() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isLoggedIn = _useState8[0],
    setIsLoggedIn = _useState8[1];
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    if (username === 'CodersLAB' && password === 'CodersLAB') {
      setMessage('Successful Login');
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid Username or Password');
    }
  };
  var handleLogout = function handleLogout(e) {
    e.preventDefault();
    setMessage('');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "login-message ".concat(message.startsWith('Successful') ? 'login-message--success' : 'login-message--error')
  }, message), isLoggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "You are logged in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "loginpage",
    onSubmit: handleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "username",
    maxLength: 10,
    placeholder: "Username",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    maxLength: 10,
    placeholder: "Password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Login"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Forgot your password?"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("17c4e89e06c50c326339")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDM0hqQywwREFBQTtJQUFPOEIsSUFBSSxFQUFDLFFBQVE7SUFBQ0csS0FBSyxFQUFDO0VBQU8sRUFBRSxlQUNwQ2pDLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHb0MsSUFBSSxFQUFDO0VBQUcsR0FBQyx1QkFBcUIsQ0FBSSxDQUFJLENBRS9DLENBQ0c7QUFFVixDQUFDO0FBRUQsaUVBQWVsQyxLQUFLOzs7Ozs7OztVQ2pEcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgPT09ICdDb2RlcnNMQUInICYmIHBhc3N3b3JkID09PSAnQ29kZXJzTEFCJykge1xyXG4gICAgICBzZXRNZXNzYWdlKCdTdWNjZXNzZnVsIExvZ2luJyk7XHJcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRNZXNzYWdlKCdJbnZhbGlkIFVzZXJuYW1lIG9yIFBhc3N3b3JkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xyXG4gICAgc2V0VXNlcm5hbWUoJycpO1xyXG4gICAgc2V0UGFzc3dvcmQoJycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT17YGxvZ2luLW1lc3NhZ2UgJHttZXNzYWdlLnN0YXJ0c1dpdGgoJ1N1Y2Nlc3NmdWwnKSA/ICdsb2dpbi1tZXNzYWdlLS1zdWNjZXNzJyA6ICdsb2dpbi1tZXNzYWdlLS1lcnJvcid9YH0+e21lc3NhZ2V9PC9wPn1cclxuICAgICAge2lzTG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwPllvdSBhcmUgbG9nZ2VkIGluPC9wPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbG9naW5wYWdlJyBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxyXG4gICAgICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBtYXhMZW5ndGg9ezEwfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBtYXhMZW5ndGg9ezEwfSBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiLz5cclxuICAgICAgICAgIDxwPjxhIGhyZWY9JyMnPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT48L3A+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxN2M0ZTg5ZTA2YzUwYzMyNjMzOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxvZ291dCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJzdGFydHNXaXRoIiwib25DbGljayIsIm9uU3VibWl0IiwidHlwZSIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9