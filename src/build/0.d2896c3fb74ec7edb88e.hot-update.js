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
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    if (username === 'CodersLAB' && password === 'CodersLAB') {
      // perform successful login action
      alert('Successful login');
    } else {
      // show alert message for incorrect credentials
      alert('Invalid username or password');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "loginpage",
    onSubmit: handleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
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
  }, "Forgot your password?")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("75abc91c6f288cdfbec4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMjg5NmMzZmI3NGVjN2VkYjg4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLFNBQUEsR0FBZ0NGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBZ0NQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBRTVCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHQyxDQUFDLEVBQUk7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQUlSLFFBQVEsS0FBSyxXQUFXLElBQUlJLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDeEQ7TUFDQUssS0FBSyxDQUFDLGtCQUFrQixDQUFDO0lBQzNCLENBQUMsTUFBTTtNQUNMO01BQ0FBLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztJQUN2QztFQUNGLENBQUM7RUFFRCxvQkFDRWYsMERBQUE7SUFBTWlCLFNBQVMsRUFBQyxXQUFXO0lBQUNDLFFBQVEsRUFBRU47RUFBWSxnQkFDaERaLDBEQUFBLGFBQUksT0FBSyxDQUFLLGVBQ2RBLDBEQUFBO0lBQU9tQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxTQUFTLEVBQUUsRUFBRztJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFDQyxLQUFLLEVBQUVoQixRQUFTO0lBQUNpQixRQUFRLEVBQUUsU0FBQUEsU0FBQVYsQ0FBQztNQUFBLE9BQUlOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDVyxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUV2SHRCLDBEQUFBO0lBQU9tQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxTQUFTLEVBQUUsRUFBRztJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFDQyxLQUFLLEVBQUVaLFFBQVM7SUFBQ2EsUUFBUSxFQUFFLFNBQUFBLFNBQUFWLENBQUM7TUFBQSxPQUFJRixXQUFXLENBQUNFLENBQUMsQ0FBQ1csTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsZUFFM0h0QiwwREFBQTtJQUFPbUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0csS0FBSyxFQUFDO0VBQU8sRUFBRSxlQUNwQ3RCLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFHeUIsSUFBSSxFQUFDO0VBQUcsR0FBQyx1QkFBcUIsQ0FBSSxDQUFJLENBQ3ZDO0FBRVgsQ0FBQztBQUVELGlFQUFldkIsS0FBSzs7Ozs7Ozs7VUM5QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodXNlcm5hbWUgPT09ICdDb2RlcnNMQUInICYmIHBhc3N3b3JkID09PSAnQ29kZXJzTEFCJykge1xyXG4gICAgICAvLyBwZXJmb3JtIHN1Y2Nlc3NmdWwgbG9naW4gYWN0aW9uXHJcbiAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsIGxvZ2luJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzaG93IGFsZXJ0IG1lc3NhZ2UgZm9yIGluY29ycmVjdCBjcmVkZW50aWFsc1xyXG4gICAgICBhbGVydCgnSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbnBhZ2UnIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcbiAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1heExlbmd0aD17MTB9IHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXtlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPiAqL31cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG1heExlbmd0aD17MTB9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICB7LyogPGkgY2xhc3NOYW1lPVwiaWNvbi1sb2NrXCI+PC9pPiAqL31cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxyXG4gICAgICA8cD48YSBocmVmPScjJz5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzVhYmM5MWM2ZjI4OGNkZmJlYzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=