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
      setMessage('Successful login');
    } else {
      setMessage('Invalid username or password');
    }
  };
  /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "login-message ".concat(message ? message.startsWith('Successful') ? 'login-message--success' : 'login-message--error' : '')
  }, message);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
/******/ 	__webpack_require__.h = () => ("19927cfd7bdbeec73fa8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42OTRiNGZhN2Q4MGQ5YTQ4Y2M2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBRWxCLElBQUFDLFNBQUEsR0FBZ0NGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBZ0NQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBOEJYLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBRTFCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHQyxDQUFDLEVBQUk7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBRWxCLElBQUlaLFFBQVEsS0FBSyxXQUFXLElBQUlJLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDeERLLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUVoQyxDQUFDLE1BQU07TUFDTEEsVUFBVSxDQUFDLDhCQUE4QixDQUFDO0lBQzVDO0VBQ0YsQ0FBQztFQUVELGFBQUFmLDBEQUFBO0lBQUdvQixTQUFTLG1CQUFBQyxNQUFBLENBQW1CUCxPQUFPLEdBQUlBLE9BQU8sQ0FBQ1EsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLHdCQUF3QixHQUFHLHNCQUFzQixHQUFJLEVBQUU7RUFBRyxHQUN0SVIsT0FBTyxDQUNOO0VBR0Ysb0JBQ0VkLDBEQUFBLGNBQ0djLE9BQU8saUJBQUlkLDBEQUFBLFlBQUljLE9BQU8sQ0FBSyxlQUM1QmQsMERBQUE7SUFBTW9CLFNBQVMsRUFBQyxXQUFXO0lBQUNHLFFBQVEsRUFBRVA7RUFBWSxnQkFFaERoQiwwREFBQSxhQUFJLE9BQUssQ0FBSyxlQUVkQSwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsU0FBUyxFQUFFLEVBQUc7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFckIsUUFBUztJQUFDc0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFYLENBQUM7TUFBQSxPQUFJVixXQUFXLENBQUNVLENBQUMsQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDM0gzQiwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsU0FBUyxFQUFFLEVBQUc7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFakIsUUFBUztJQUFDa0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFYLENBQUM7TUFBQSxPQUFJTixXQUFXLENBQUNNLENBQUMsQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFFM0gzQiwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLFFBQVE7SUFBQ0csS0FBSyxFQUFDO0VBQU8sRUFBRSxlQUVwQzNCLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHOEIsSUFBSSxFQUFDO0VBQUcsR0FBQyx1QkFBcUIsQ0FBSSxDQUFJLENBQ3ZDLENBQ0g7QUFFVixDQUFDO0FBRUQsaUVBQWU1QixLQUFLOzs7Ozs7OztVQzFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHVzZXJuYW1lID09PSAnQ29kZXJzTEFCJyAmJiBwYXNzd29yZCA9PT0gJ0NvZGVyc0xBQicpIHtcclxuICAgICAgc2V0TWVzc2FnZSgnU3VjY2Vzc2Z1bCBsb2dpbicpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldE1lc3NhZ2UoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDxwIGNsYXNzTmFtZT17YGxvZ2luLW1lc3NhZ2UgJHttZXNzYWdlID8gKG1lc3NhZ2Uuc3RhcnRzV2l0aCgnU3VjY2Vzc2Z1bCcpID8gJ2xvZ2luLW1lc3NhZ2UtLXN1Y2Nlc3MnIDogJ2xvZ2luLW1lc3NhZ2UtLWVycm9yJykgOiAnJ31gfT5cclxuICB7bWVzc2FnZX1cclxuPC9wPlxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge21lc3NhZ2UgJiYgPHA+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbnBhZ2UnIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcblxyXG4gICAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBtYXhMZW5ndGg9ezEwfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF4TGVuZ3RoPXsxMH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxyXG5cclxuICAgICAgICA8cD48YSBocmVmPScjJz5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5OTI3Y2ZkN2JkYmVlYzczZmE4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwic3RhcnRzV2l0aCIsIm9uU3VibWl0IiwidHlwZSIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9