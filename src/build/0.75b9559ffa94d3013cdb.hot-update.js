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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-user"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    maxLength: 10,
    placeholder: "Password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-lock"
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
/******/ 	__webpack_require__.h = () => ("d2896c3fb74ec7edb88e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NWI5NTU5ZmZhOTRkMzAxM2NkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLFNBQUEsR0FBZ0NGLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXJDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBZ0NQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXJDRSxRQUFRLEdBQUFELFVBQUE7SUFBRUUsV0FBVyxHQUFBRixVQUFBO0VBRTVCLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFHQyxDQUFDLEVBQUk7SUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQUlSLFFBQVEsS0FBSyxXQUFXLElBQUlJLFFBQVEsS0FBSyxXQUFXLEVBQUU7TUFDeEQ7TUFDQUssS0FBSyxDQUFDLGtCQUFrQixDQUFDO0lBQzNCLENBQUMsTUFBTTtNQUNMO01BQ0FBLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztJQUN2QztFQUNGLENBQUM7RUFFRCxvQkFDRWYsMERBQUE7SUFBTWlCLFNBQVMsRUFBQyxXQUFXO0lBQUNDLFFBQVEsRUFBRU47RUFBWSxnQkFDaERaLDBEQUFBLGFBQUksT0FBSyxDQUFLLGVBQ2RBLDBEQUFBO0lBQU9tQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxTQUFTLEVBQUUsRUFBRztJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFDQyxLQUFLLEVBQUVoQixRQUFTO0lBQUNpQixRQUFRLEVBQUUsU0FBQUEsU0FBQVYsQ0FBQztNQUFBLE9BQUlOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDVyxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUN2SHRCLDBEQUFBO0lBQUdpQixTQUFTLEVBQUM7RUFBVyxFQUFLLGVBQzdCakIsMERBQUE7SUFBT21CLElBQUksRUFBQyxVQUFVO0lBQUNDLFNBQVMsRUFBRSxFQUFHO0lBQUNDLFdBQVcsRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRVosUUFBUztJQUFDYSxRQUFRLEVBQUUsU0FBQUEsU0FBQVYsQ0FBQztNQUFBLE9BQUlGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDVyxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRSxlQUMzSHRCLDBEQUFBO0lBQUdpQixTQUFTLEVBQUM7RUFBVyxFQUFLLGVBQzdCakIsMERBQUE7SUFBT21CLElBQUksRUFBQyxRQUFRO0lBQUNHLEtBQUssRUFBQztFQUFPLEVBQUUsZUFDcEN0QiwwREFBQSx5QkFBR0EsMERBQUE7SUFBR3lCLElBQUksRUFBQztFQUFHLEdBQUMsdUJBQXFCLENBQUksQ0FBSSxDQUN2QztBQUVYLENBQUM7QUFFRCxpRUFBZXZCLEtBQUs7Ozs7Ozs7O1VDOUJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHVzZXJuYW1lID09PSAnQ29kZXJzTEFCJyAmJiBwYXNzd29yZCA9PT0gJ0NvZGVyc0xBQicpIHtcclxuICAgICAgLy8gcGVyZm9ybSBzdWNjZXNzZnVsIGxvZ2luIGFjdGlvblxyXG4gICAgICBhbGVydCgnU3VjY2Vzc2Z1bCBsb2dpbicpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gc2hvdyBhbGVydCBtZXNzYWdlIGZvciBpbmNvcnJlY3QgY3JlZGVudGlhbHNcclxuICAgICAgYWxlcnQoJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nbG9naW5wYWdlJyBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxyXG4gICAgICA8aDI+TG9naW48L2gyPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBtYXhMZW5ndGg9ezEwfSBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbWF4TGVuZ3RoPXsxMH0gcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbG9ja1wiPjwvaT5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIvPlxyXG4gICAgICA8cD48YSBocmVmPScjJz5Gb3Jnb3QgeW91ciBwYXNzd29yZD88L2E+PC9wPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDI4OTZjM2ZiNzRlYzdlZGI4OGVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwibWF4TGVuZ3RoIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=