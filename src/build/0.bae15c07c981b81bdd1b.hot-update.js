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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
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
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    if (username === 'CodersLAB' && password === 'CodersLAB') {
      setMessage('Successful Login');
      // redirect the user to dashboard after successful login
      history.push('/dashboard');
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
/******/ 	__webpack_require__.h = () => ("e01b34978ed406f61fbc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYWUxNWMwN2M5ODFiODFiZGQxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUU5QyxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLFNBQUEsR0FBZ0NILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFJLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBZ0NSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBQzVCLElBQUFHLFVBQUEsR0FBOEJaLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFhLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQU1HLE9BQU8sR0FBR2YsNERBQVUsRUFBRTtFQUU1QixJQUFNZ0IsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUdDLENBQUMsRUFBSTtJQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFFbEIsSUFBSWIsUUFBUSxLQUFLLFdBQVcsSUFBSUksUUFBUSxLQUFLLFdBQVcsRUFBRTtNQUN4REssVUFBVSxDQUFDLGtCQUFrQixDQUFDO01BQzlCO01BQ0FDLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDTEwsVUFBVSxDQUFDLDhCQUE4QixDQUFDO0lBQzVDO0VBQ0YsQ0FBQztFQUVELG9CQUNFaEIsMERBQUEsY0FDR2UsT0FBTyxpQkFBSWYsMERBQUE7SUFBR3VCLFNBQVMsbUJBQUFDLE1BQUEsQ0FBbUJULE9BQU8sQ0FBQ1UsVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLHdCQUF3QixHQUFHLHNCQUFzQjtFQUFHLEdBQUVWLE9BQU8sQ0FBSyxlQUNoSmYsMERBQUE7SUFBTXVCLFNBQVMsRUFBQyxXQUFXO0lBQUNHLFFBQVEsRUFBRVI7RUFBWSxnQkFDaERsQiwwREFBQSxhQUFJLE9BQUssQ0FBSyxlQUNkQSwwREFBQTtJQUFPMkIsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsU0FBUyxFQUFFLEVBQUc7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFdkIsUUFBUztJQUFDd0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFaLENBQUM7TUFBQSxPQUFJWCxXQUFXLENBQUNXLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDM0g5QiwwREFBQTtJQUFPMkIsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsU0FBUyxFQUFFLEVBQUc7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFbkIsUUFBUztJQUFDb0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFaLENBQUM7TUFBQSxPQUFJUCxXQUFXLENBQUNPLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFDM0g5QiwwREFBQTtJQUFPMkIsSUFBSSxFQUFDLFFBQVE7SUFBQ0csS0FBSyxFQUFDO0VBQU8sRUFBRSxlQUNwQzlCLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHaUMsSUFBSSxFQUFDO0VBQUcsR0FBQyx1QkFBcUIsQ0FBSSxDQUFJLENBQ3ZDLENBQ0g7QUFFVixDQUFDO0FBRUQsaUVBQWU5QixLQUFLOzs7Ozs7OztVQ25DcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAodXNlcm5hbWUgPT09ICdDb2RlcnNMQUInICYmIHBhc3N3b3JkID09PSAnQ29kZXJzTEFCJykge1xyXG4gICAgICBzZXRNZXNzYWdlKCdTdWNjZXNzZnVsIExvZ2luJyk7XHJcbiAgICAgIC8vIHJlZGlyZWN0IHRoZSB1c2VyIHRvIGRhc2hib2FyZCBhZnRlciBzdWNjZXNzZnVsIGxvZ2luXHJcbiAgICAgIGhpc3RvcnkucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0TWVzc2FnZSgnSW52YWxpZCBVc2VybmFtZSBvciBQYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT17YGxvZ2luLW1lc3NhZ2UgJHttZXNzYWdlLnN0YXJ0c1dpdGgoJ1N1Y2Nlc3NmdWwnKSA/ICdsb2dpbi1tZXNzYWdlLS1zdWNjZXNzJyA6ICdsb2dpbi1tZXNzYWdlLS1lcnJvcid9YH0+e21lc3NhZ2V9PC9wPn1cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbnBhZ2UnIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcbiAgICAgICAgPGgyPkxvZ2luPC9oMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInVzZXJuYW1lXCIgbWF4TGVuZ3RoPXsxMH0gcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1heExlbmd0aD17MTB9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiLz5cclxuICAgICAgICA8cD48YSBocmVmPScjJz5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+PC9wPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwMWIzNDk3OGVkNDA2ZjYxZmJjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VIaXN0b3J5IiwiTG9naW4iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhpc3RvcnkiLCJoYW5kbGVMb2dpbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwic3RhcnRzV2l0aCIsIm9uU3VibWl0IiwidHlwZSIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9