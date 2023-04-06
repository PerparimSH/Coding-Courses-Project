"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 44:
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isPopupOpen = _useState6[0],
    setIsPopupOpen = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    popupMessage = _useState8[0],
    setPopupMessage = _useState8[1];
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    if (username === 'CodersLAB' && password === 'CodersLAB') {
      setPopupMessage('Successful login');
      setIsPopupOpen(true);
    } else {
      setPopupMessage('Invalid username or password');
      setIsPopupOpen(true);
    }
  };
  var closePopup = function closePopup() {
    setIsPopupOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, "Forgot your password?")), isPopupOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, popupMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: closePopup
  }, "Close"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3fce009484840caa90bb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVQsQ0FDSTtBQUVYLENBQUM7QUFFRCxpRUFBZXJCLEtBQUs7Ozs7Ozs7O1VDN0RwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNQb3B1cE9wZW4sIHNldElzUG9wdXBPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcG9wdXBNZXNzYWdlLCBzZXRQb3B1cE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh1c2VybmFtZSA9PT0gJ0NvZGVyc0xBQicgJiYgcGFzc3dvcmQgPT09ICdDb2RlcnNMQUInKSB7XHJcbiAgICAgIHNldFBvcHVwTWVzc2FnZSgnU3VjY2Vzc2Z1bCBsb2dpbicpO1xyXG4gICAgICBzZXRJc1BvcHVwT3Blbih0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBvcHVwTWVzc2FnZSgnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xyXG4gICAgICBzZXRJc1BvcHVwT3Blbih0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZVBvcHVwID0gKCkgPT4ge1xyXG4gICAgc2V0SXNQb3B1cE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2lucGFnZScgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgPGgyPkxvZ2luPC9oMj5cclxuXHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9J3VzZXJuYW1lJ1xyXG4gICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xyXG4gICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgIG1heExlbmd0aD17MTB9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8aW5wdXQgdHlwZT0nc3VibWl0JyB2YWx1ZT0nTG9naW4nIC8+XHJcblxyXG4gICAgICA8cD5cclxuICAgICAgICA8YSBocmVmPScjJz5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+XHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIHtpc1BvcHVwT3BlbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BvcHVwJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwb3B1cC1jb250ZW50Jz5cclxuICAgICAgICAgICAgPGgzPntwb3B1cE1lc3NhZ2V9PC9oMz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZVBvcHVwfT5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZmNlMDA5NDg0ODQwY2FhOTBiYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc1BvcHVwT3BlbiIsInNldElzUG9wdXBPcGVuIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwb3B1cE1lc3NhZ2UiLCJzZXRQb3B1cE1lc3NhZ2UiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlUG9wdXAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9