"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function MainHeader() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem('isLoggedIn') === 'true'),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  var handleLogout = function handleLogout() {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
  };
  var handleLogin = function handleLogin() {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/prices"
  }, "Prices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "#about"
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "#contact"
  }, "Contact")), isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    onClick: handleLogout
  }, "Logout")), !isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
    onClick: handleLogin
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b82f82b7325c4413036")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MDU5NzJiZTY3NmRjNzMxNDc1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ3lEO0FBRWpHLFNBQVNTLFVBQVVBLENBQUEsRUFBRztFQUVwQixJQUFNQyxRQUFRLEdBQUdGLDZEQUFXLEVBQUU7RUFFOUIsSUFBQUcsU0FBQSxHQUFvQ1YsK0NBQVEsQ0FBQ1csWUFBWSxDQUFDQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBQXBGSyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBRWhDLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekJELGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDcEJMLFlBQVksQ0FBQ08sT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7RUFDM0MsQ0FBQztFQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDeEJILGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkJMLFlBQVksQ0FBQ08sT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUM7RUFDMUMsQ0FBQztFQUVELG9CQUNFbkIsMERBQUE7SUFBUXNCLFNBQVMsRUFBQztFQUFhLGdCQUM3QnRCLDBEQUFBO0lBQUtzQixTQUFTLEVBQUM7RUFBTSxnQkFDbkJ0QiwwREFBQTtJQUFLdUIsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTnZCLDBEQUFBO0lBQUlzQixTQUFTLEVBQUM7RUFBVyxnQkFDdkJ0QiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBQztFQUFHLEdBQUMsTUFBSSxDQUFPLENBQUssZUFDakN4QiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBQztFQUFTLEdBQUMsUUFBTSxDQUFPLENBQUssZUFDekN4QiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUN4QiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssRUFDMUNSLFVBQVUsaUJBQ1RoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBQyxHQUFHO0lBQUNDLE9BQU8sRUFBRVA7RUFBYSxHQUFDLFFBQU0sQ0FBTyxDQUN0RCxFQUNBLENBQUNGLFVBQVUsaUJBQ1ZoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0ssa0RBQUk7SUFBQ21CLEVBQUUsRUFBQyxRQUFRO0lBQUNDLE9BQU8sRUFBRUw7RUFBWSxHQUFDLE9BQUssQ0FBTyxDQUN6RCxDQUVFLGVBQ0xwQiwwREFBQSxDQUFDTyxvREFBTSxPQUFHLENBQ0g7QUFFYjtBQUVBLGlFQUFlRSxVQUFVOzs7Ozs7OztVQzFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSGFzaFJvdXRlciwgUm91dGUsIFJvdXRlcywgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG5cclxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNMb2dnZWRJbicpID09PSAndHJ1ZScpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2dlZEluKGZhbHNlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0xvZ2dlZEluJywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHRydWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzTG9nZ2VkSW4nLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcHJpY2VzXCI+UHJpY2VzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2Fib3V0XCI+QWJvdXQgdXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICB7aXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshaXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+TG9naW48L0xpbms+PC9saT5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgPC91bD5cclxuICAgICAgPE91dGxldCAvPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmI4MmY4MmI3MzI1YzQ0MTMwMzZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwidXNlTG9jYXRpb24iLCJNYWluSGVhZGVyIiwibG9jYXRpb24iLCJfdXNlU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJoYW5kbGVMb2dvdXQiLCJzZXRJdGVtIiwiaGFuZGxlTG9naW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwidG8iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==