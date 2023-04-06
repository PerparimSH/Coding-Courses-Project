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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);



function MainHeader() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_authContext__WEBPACK_IMPORTED_MODULE_1__.AuthContext),
    isLoggedIn = _useContext.isLoggedIn,
    handleLogout = _useContext.handleLogout;
  var handleLogoutClick = function handleLogoutClick() {
    handleLogout();
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/prices"
  }, "Prices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "#about"
  }, "About us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "#contact"
  }, "Contact")), isLoggedIn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/dashboard",
    onClick: handleLogoutClick
  }, "Logout")), !isLoggedIn && location.pathname !== '/login' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login"
  }, "Login"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("057752abc239d32134c1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNGU2N2VjYWUyN2I4YjIzMmNlYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNXO0FBQ1Q7QUFFNUMsU0FBU0ssVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCLElBQU1DLFFBQVEsR0FBR0gsNkRBQVcsRUFBRTtFQUM5QixJQUFBSSxXQUFBLEdBQXFDTixpREFBVSxDQUFDRyxxREFBVyxDQUFDO0lBQXBESSxVQUFVLEdBQUFELFdBQUEsQ0FBVkMsVUFBVTtJQUFFQyxZQUFZLEdBQUFGLFdBQUEsQ0FBWkUsWUFBWTtFQUVoQyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFBLEVBQVM7SUFDOUJELFlBQVksRUFBRTtJQUNkRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0VBQzNDLENBQUM7RUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3hCQyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ25CSCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO0VBQzFDLENBQUM7RUFHRCxvQkFDRVosMERBQUE7SUFBUWdCLFNBQVMsRUFBQztFQUFhLGdCQUM3QmhCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBTSxnQkFDbkJoQiwwREFBQTtJQUFLaUIsR0FBRyxFQUFDO0VBQTRELEVBQUcsQ0FDcEUsZUFDTmpCLDBEQUFBO0lBQUlnQixTQUFTLEVBQUM7RUFBVyxnQkFDdkJoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2dCLEVBQUUsRUFBQztFQUFHLEdBQUMsTUFBSSxDQUFPLENBQUssZUFDakNsQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2dCLEVBQUUsRUFBQztFQUFTLEdBQUMsUUFBTSxDQUFPLENBQUssZUFDekNsQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2dCLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFDMUNsQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2dCLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssRUFDMUNWLFVBQVUsaUJBQ1RSLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDZ0IsRUFBRSxFQUFDLFlBQVk7SUFBQ0MsT0FBTyxFQUFFVDtFQUFrQixHQUFDLFFBRWxELENBQU8sQ0FFVixFQUNBLENBQUNGLFVBQVUsSUFBSUYsUUFBUSxDQUFDYyxRQUFRLEtBQUssUUFBUSxpQkFDNUNwQiwwREFBQSwwQkFDRUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2dCLEVBQUUsRUFBQztFQUFRLEdBQUMsT0FBSyxDQUFPLENBRWpDLENBQ0UsQ0FDRTtBQUViO0FBRUEsaUVBQWViLFVBQVU7Ozs7Ozs7O1VDOUN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi9hdXRoQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNYWluSGVhZGVyKCkge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4sIGhhbmRsZUxvZ291dCB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dENsaWNrID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlTG9nb3V0KCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNMb2dnZWRJbicsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9ICgpID0+IHtcclxuICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNMb2dnZWRJbicsIHRydWUpO1xyXG4gIH07XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWFpbi1tZW51XCI+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvcHJpY2VzXCI+UHJpY2VzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2Fib3V0XCI+QWJvdXQgdXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICB7aXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Rhc2hib2FyZFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dENsaWNrfT5cclxuICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshaXNMb2dnZWRJbiAmJiBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJy9sb2dpbicgJiYgKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkhlYWRlcjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDU3NzUyYWJjMjM5ZDMyMTM0YzFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiQXV0aENvbnRleHQiLCJNYWluSGVhZGVyIiwibG9jYXRpb24iLCJfdXNlQ29udGV4dCIsImlzTG9nZ2VkSW4iLCJoYW5kbGVMb2dvdXQiLCJoYW5kbGVMb2dvdXRDbGljayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJoYW5kbGVMb2dpbiIsInNldElzTG9nZ2VkSW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwidG8iLCJvbkNsaWNrIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9