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
/******/ 	__webpack_require__.h = () => ("34e67ecae27b8b232cea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YmM3NTUyYjI1ZWEwMmMyNWRlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNXO0FBQ1Q7QUFFNUMsU0FBU0ssVUFBVUEsQ0FBQSxFQUFHO0VBQ3BCLElBQU1DLFFBQVEsR0FBR0gsNkRBQVcsRUFBRTtFQUM5QixJQUFBSSxXQUFBLEdBQXFDTixpREFBVSxDQUFDRyxxREFBVyxDQUFDO0lBQXBESSxVQUFVLEdBQUFELFdBQUEsQ0FBVkMsVUFBVTtJQUFFQyxZQUFZLEdBQUFGLFdBQUEsQ0FBWkUsWUFBWTtFQUVoQyxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFBLEVBQVM7SUFDOUJELFlBQVksRUFBRTtJQUNkRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0VBQzNDLENBQUM7RUFFRCxvQkFDRVosMERBQUE7SUFBUWMsU0FBUyxFQUFDO0VBQWEsZ0JBQzdCZCwwREFBQTtJQUFLYyxTQUFTLEVBQUM7RUFBTSxnQkFDbkJkLDBEQUFBO0lBQUtlLEdBQUcsRUFBQztFQUE0RCxFQUFHLENBQ3BFLGVBQ05mLDBEQUFBO0lBQUljLFNBQVMsRUFBQztFQUFXLGdCQUN2QmQsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNjLEVBQUUsRUFBQztFQUFHLEdBQUMsTUFBSSxDQUFPLENBQUssZUFDakNoQiwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2MsRUFBRSxFQUFDO0VBQVMsR0FBQyxRQUFNLENBQU8sQ0FBSyxlQUN6Q2hCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDYyxFQUFFLEVBQUM7RUFBUSxHQUFDLFVBQVEsQ0FBTyxDQUFLLGVBQzFDaEIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNjLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssRUFDMUNSLFVBQVUsaUJBQ1RSLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDYyxFQUFFLEVBQUMsWUFBWTtJQUFDQyxPQUFPLEVBQUVQO0VBQWtCLEdBQUMsUUFFbEQsQ0FBTyxDQUVWLEVBQ0EsQ0FBQ0YsVUFBVSxJQUFJRixRQUFRLENBQUNZLFFBQVEsS0FBSyxRQUFRLGlCQUM1Q2xCLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDYyxFQUFFLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBTyxDQUVqQyxDQUNFLENBQ0U7QUFFYjtBQUVBLGlFQUFlWCxVQUFVOzs7Ozs7OztVQ3hDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4vYXV0aENvbnRleHQnO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgY29uc3QgeyBpc0xvZ2dlZEluLCBoYW5kbGVMb2dvdXQgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXRDbGljayA9ICgpID0+IHtcclxuICAgIGhhbmRsZUxvZ291dCgpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzTG9nZ2VkSW4nLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2NvZGVyc2xhYmtvc292YS5jb20vYmxvY2tzL01haW5IZWFkZXIvbG9nb0NMZW4uc3ZnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9wcmljZXNcIj5QcmljZXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjYWJvdXRcIj5BYm91dCB1czwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNjb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgIHtpc0xvZ2dlZEluICYmIChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZGFzaGJvYXJkXCIgb25DbGljaz17aGFuZGxlTG9nb3V0Q2xpY2t9PlxyXG4gICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFpc0xvZ2dlZEluICYmIGxvY2F0aW9uLnBhdGhuYW1lICE9PSAnL2xvZ2luJyAmJiAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNGU2N2VjYWUyN2I4YjIzMmNlYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJBdXRoQ29udGV4dCIsIk1haW5IZWFkZXIiLCJsb2NhdGlvbiIsIl91c2VDb250ZXh0IiwiaXNMb2dnZWRJbiIsImhhbmRsZUxvZ291dCIsImhhbmRsZUxvZ291dENsaWNrIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJ0byIsIm9uQ2xpY2siLCJwYXRobmFtZSJdLCJzb3VyY2VSb290IjoiIn0=