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
  var handleLogin = function handleLogin(e) {
    e.preventDefault();

    // Fetch user data from JSON database file
    fetch('db.json').then(function (response) {
      return response.json();
    }).then(function (data) {
      // Find matching user in database
      var user = data.find(function (user) {
        return user.username === username && user.password === password;
      });

      // If user found, login successful
      if (user) {
        setMessage('Successful Login');
        window.location.href = '#/dashboard';
      } else {
        setMessage('Invalid Username or Password');
      }
    })["catch"](function (error) {
      setMessage('Error: ' + error.message);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "login-message ".concat(message.startsWith('Successful') ? 'login-message--success' : 'login-message--error')
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "loginpage",
    onSubmit: handleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "username",
    maxLength: 20,
    placeholder: "Username",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    maxLength: 20,
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
/******/ 	__webpack_require__.h = () => ("af2d4f95101d2c7eff20")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsUUFBUTtJQUFDRyxLQUFLLEVBQUM7RUFBTyxFQUFFLGVBQ3BDdEMsMERBQUEseUJBQUdBLDBEQUFBO0lBQUc0QixJQUFJLEVBQUM7RUFBRyxHQUFDLHVCQUFxQixDQUFJLENBQUksQ0FDdkMsQ0FDSDtBQUVWLENBQUM7QUFFRCxpRUFBZTFCLEtBQUs7Ozs7Ozs7O1VDNUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gRmV0Y2ggdXNlciBkYXRhIGZyb20gSlNPTiBkYXRhYmFzZSBmaWxlXHJcbiAgICBmZXRjaCgnZGIuanNvbicpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgLy8gRmluZCBtYXRjaGluZyB1c2VyIGluIGRhdGFiYXNlXHJcbiAgICAgICAgY29uc3QgdXNlciA9IGRhdGEuZmluZCh1c2VyID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIHVzZXIucGFzc3dvcmQgPT09IHBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdXNlciBmb3VuZCwgbG9naW4gc3VjY2Vzc2Z1bFxyXG4gICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICBzZXRNZXNzYWdlKCdTdWNjZXNzZnVsIExvZ2luJyk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL2Rhc2hib2FyZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldE1lc3NhZ2UoJ0ludmFsaWQgVXNlcm5hbWUgb3IgUGFzc3dvcmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgc2V0TWVzc2FnZSgnRXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPXtgbG9naW4tbWVzc2FnZSAke21lc3NhZ2Uuc3RhcnRzV2l0aCgnU3VjY2Vzc2Z1bCcpID8gJ2xvZ2luLW1lc3NhZ2UtLXN1Y2Nlc3MnIDogJ2xvZ2luLW1lc3NhZ2UtLWVycm9yJ31gfT57bWVzc2FnZX08L3A+fVxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2lucGFnZScgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgICA8aDI+TG9naW48L2gyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBtYXhMZW5ndGg9ezIwfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF4TGVuZ3RoPXsyMH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxyXG4gICAgICAgIDxwPjxhIGhyZWY9JyMnPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWYyZDRmOTUxMDFkMmM3ZWZmMjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ1c2VyIiwiZmluZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvbmNhdCIsInN0YXJ0c1dpdGgiLCJvblN1Ym1pdCIsInR5cGUiLCJtYXhMZW5ndGgiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9