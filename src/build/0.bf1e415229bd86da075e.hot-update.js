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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    if (username === 'CodersLAB' && password === 'CodersLAB') {
      setMessage('Successful Login');
    } else {
      setMessage('Invalid Username or Password');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "login-message ".concat(message.startsWith('Successful') ? 'login-message--success' : 'login-message--error')
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
/******/ 	__webpack_require__.h = () => ("7a0c70a475f19929ca3a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iZjFlNDE1MjI5YmQ4NmRhMDc1ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBRWxCLElBQUFDLFNBQUEsR0FBZ0NGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBZ0NQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBOEJYLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHQyxDQUFDLEVBQUk7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBRWxCLElBQUlaLFFBQVEsS0FBSyxXQUFXLElBQUlJLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDeERLLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUVoQyxDQUFDLE1BQU07TUFDTEEsVUFBVSxDQUFDLDhCQUE4QixDQUFDO0lBQzVDO0VBQ0YsQ0FBQztFQUdELG9CQUNFZiwwREFBQSxjQUVHYyxPQUFPLGlCQUFJZCwwREFBQTtJQUFHb0IsU0FBUyxtQkFBQUMsTUFBQSxDQUFtQlAsT0FBTyxDQUFDUSxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsd0JBQXdCLEdBQUcsc0JBQXNCO0VBQUcsR0FBRVIsT0FBTyxDQUFLLGVBRWhKZCwwREFBQTtJQUFNb0IsU0FBUyxFQUFDLFdBQVc7SUFBQ0csUUFBUSxFQUFFUDtFQUFZLGdCQUVoRGhCLDBEQUFBLGFBQUksT0FBSyxDQUFLLGVBRWRBLDBEQUFBO0lBQU93QixJQUFJLEVBQUMsVUFBVTtJQUFDQyxTQUFTLEVBQUUsRUFBRztJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFDQyxLQUFLLEVBQUVyQixRQUFTO0lBQUNzQixRQUFRLEVBQUUsU0FBQUEsU0FBQVgsQ0FBQztNQUFBLE9BQUlWLFdBQVcsQ0FBQ1UsQ0FBQyxDQUFDWSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUMzSDNCLDBEQUFBO0lBQU93QixJQUFJLEVBQUMsVUFBVTtJQUFDQyxTQUFTLEVBQUUsRUFBRztJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFDQyxLQUFLLEVBQUVqQixRQUFTO0lBQUNrQixRQUFRLEVBQUUsU0FBQUEsU0FBQVgsQ0FBQztNQUFBLE9BQUlOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDWSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUUzSDNCLDBEQUFBO0lBQU93QixJQUFJLEVBQUMsUUFBUTtJQUFDRyxLQUFLLEVBQUM7RUFBTyxFQUFFLGVBRXBDM0IsMERBQUEseUJBQUdBLDBEQUFBO0lBQUc4QixJQUFJLEVBQUM7RUFBRyxHQUFDLHVCQUFxQixDQUFJLENBQUksQ0FDdkMsQ0FDSDtBQUdWLENBQUM7QUFFRCxpRUFBZTVCLEtBQUs7Ozs7Ozs7O1VDekNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgPT09ICdDb2RlcnNMQUInICYmIHBhc3N3b3JkID09PSAnQ29kZXJzTEFCJykge1xyXG4gICAgICBzZXRNZXNzYWdlKCdTdWNjZXNzZnVsIExvZ2luJyk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVzc2FnZSgnSW52YWxpZCBVc2VybmFtZSBvciBQYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcblxyXG4gICAgICB7bWVzc2FnZSAmJiA8cCBjbGFzc05hbWU9e2Bsb2dpbi1tZXNzYWdlICR7bWVzc2FnZS5zdGFydHNXaXRoKCdTdWNjZXNzZnVsJykgPyAnbG9naW4tbWVzc2FnZS0tc3VjY2VzcycgOiAnbG9naW4tbWVzc2FnZS0tZXJyb3InfWB9PnttZXNzYWdlfTwvcD59XHJcbiAgICAgIFxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2lucGFnZScgb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICBcclxuICAgICAgICA8aDI+TG9naW48L2gyPlxyXG4gIFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBtYXhMZW5ndGg9ezEwfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF4TGVuZ3RoPXsxMH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxyXG4gIFxyXG4gICAgICAgIDxwPjxhIGhyZWY9JyMnPkZvcmdvdCB5b3VyIHBhc3N3b3JkPzwvYT48L3A+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2EwYzcwYTQ3NWYxOTkyOWNhM2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJzdGFydHNXaXRoIiwib25TdWJtaXQiLCJ0eXBlIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=