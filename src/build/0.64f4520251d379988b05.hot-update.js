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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function MainHeader(props) {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    pathname = _useState2[0],
    setPathname = _useState2[1];
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPathname(location.pathname);
    localStorage.setItem('pathname', location.pathname);
  }, [location.pathname]);
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
  }, "Contact")), pathname === "/dashboard" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")), pathname !== "/dashboard" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("df42ad9cd73627447b05")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NGY0NTIwMjUxZDM3OTk4OGIwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ21CO0FBRXRFLFNBQVNPLFVBQVVBLENBQUNDLEtBQUssRUFBRTtFQUN6QixJQUFNQyxRQUFRLEdBQUdILDZEQUFXLEVBQUU7RUFDOUIsSUFBQUksU0FBQSxHQUFnQ1QsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFFNUIsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QjtFQUFBLENBQ0Q7RUFFRGIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2RZLFdBQVcsQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRLENBQUM7SUFDOUJHLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRVIsUUFBUSxDQUFDSSxRQUFRLENBQUM7RUFDckQsQ0FBQyxFQUFFLENBQUNKLFFBQVEsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7RUFFdkIsb0JBQ0ViLDBEQUFBO0lBQVFtQixTQUFTLEVBQUM7RUFBYSxnQkFDN0JuQiwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQU0sZ0JBQ25CbkIsMERBQUE7SUFBS29CLEdBQUcsRUFBQztFQUE0RCxFQUFHLENBQ3BFLGVBQ05wQiwwREFBQTtJQUFJbUIsU0FBUyxFQUFDO0VBQVcsZ0JBQ3ZCbkIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNHLGtEQUFJO0lBQUNrQixFQUFFLEVBQUM7RUFBRyxHQUFDLE1BQUksQ0FBTyxDQUFLLGVBQ2pDckIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNHLGtEQUFJO0lBQUNrQixFQUFFLEVBQUM7RUFBUyxHQUFDLFFBQU0sQ0FBTyxDQUFLLGVBQ3pDckIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNHLGtEQUFJO0lBQUNrQixFQUFFLEVBQUM7RUFBUSxHQUFDLFVBQVEsQ0FBTyxDQUFLLGVBQzFDckIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNHLGtEQUFJO0lBQUNrQixFQUFFLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBTyxDQUFLLEVBQzFDUixRQUFRLEtBQUssWUFBWSxpQkFDeEJiLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRyxrREFBSTtJQUFDa0IsRUFBRSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxFQUFFUDtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQzNELEVBQ0FGLFFBQVEsS0FBSyxZQUFZLGlCQUN4QmIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNHLGtEQUFJO0lBQUNrQixFQUFFLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBTyxDQUNuQyxDQUNFLGVBQ0xyQiwwREFBQSxDQUFDSyxvREFBTSxPQUFFLENBQ0Y7QUFFYjtBQUVBLGlFQUFlRSxVQUFVOzs7Ozs7OztVQ3RDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCBPdXRsZXQsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5mdW5jdGlvbiBNYWluSGVhZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtwYXRobmFtZSwgc2V0UGF0aG5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYXRobmFtZShsb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGF0aG5hbWUnLCBsb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcHJpY2VzXCI+UHJpY2VzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2Fib3V0XCI+QWJvdXQgdXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICB7cGF0aG5hbWUgPT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7cGF0aG5hbWUgIT09IFwiL2Rhc2hib2FyZFwiICYmIChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPE91dGxldC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZjQyYWQ5Y2Q3MzYyNzQ0N2IwNVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJ1c2VMb2NhdGlvbiIsIk1haW5IZWFkZXIiLCJwcm9wcyIsImxvY2F0aW9uIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGF0aG5hbWUiLCJzZXRQYXRobmFtZSIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwidG8iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==