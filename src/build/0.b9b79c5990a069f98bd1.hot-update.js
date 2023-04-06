"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function MainHeader() {
  var location = useLocation();
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
  };

  // Check if the user is logged in
  var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return /*#__PURE__*/React.createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "main-menu"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/prices"
  }, "Prices")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "#about"
  }, "About us")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "#contact"
  }, "Contact")), isLoggedIn && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")), !isLoggedIn && /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/React.createElement(Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("90487638ed837e1c0603")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOWI3OWM1OTkwYTA2OWY5OGJkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxVQUFVQSxDQUFBLEVBQUc7RUFDcEIsSUFBTUMsUUFBUSxHQUFHQyxXQUFXLEVBQUU7RUFFOUIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN6QjtFQUFBLENBQ0Q7O0VBRUQ7RUFDQSxJQUFNQyxVQUFVLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLE1BQU07RUFFaEUsb0JBQ0VDLEtBQUEsQ0FBQUMsYUFBQTtJQUFRQyxTQUFTLEVBQUM7RUFBYSxnQkFDN0JGLEtBQUEsQ0FBQUMsYUFBQTtJQUFLQyxTQUFTLEVBQUM7RUFBTSxnQkFDbkJGLEtBQUEsQ0FBQUMsYUFBQTtJQUFLRSxHQUFHLEVBQUM7RUFBNEQsRUFBRyxDQUNwRSxlQUNOSCxLQUFBLENBQUFDLGFBQUE7SUFBSUMsU0FBUyxFQUFDO0VBQVcsZ0JBQ3ZCRixLQUFBLENBQUFDLGFBQUEsMEJBQUlELEtBQUEsQ0FBQUMsYUFBQSxDQUFDRyxJQUFJO0lBQUNDLEVBQUUsRUFBQztFQUFHLEdBQUMsTUFBSSxDQUFPLENBQUssZUFDakNMLEtBQUEsQ0FBQUMsYUFBQSwwQkFBSUQsS0FBQSxDQUFBQyxhQUFBLENBQUNHLElBQUk7SUFBQ0MsRUFBRSxFQUFDO0VBQVMsR0FBQyxRQUFNLENBQU8sQ0FBSyxlQUN6Q0wsS0FBQSxDQUFBQyxhQUFBLDBCQUFJRCxLQUFBLENBQUFDLGFBQUEsQ0FBQ0csSUFBSTtJQUFDQyxFQUFFLEVBQUM7RUFBUSxHQUFDLFVBQVEsQ0FBTyxDQUFLLGVBQzFDTCxLQUFBLENBQUFDLGFBQUEsMEJBQUlELEtBQUEsQ0FBQUMsYUFBQSxDQUFDRyxJQUFJO0lBQUNDLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssRUFFMUNSLFVBQVUsaUJBQ1RHLEtBQUEsQ0FBQUMsYUFBQSwwQkFBSUQsS0FBQSxDQUFBQyxhQUFBLENBQUNHLElBQUk7SUFBQ0MsRUFBRSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxFQUFFVjtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQzNELEVBRUEsQ0FBQ0MsVUFBVSxpQkFDVkcsS0FBQSxDQUFBQyxhQUFBLDBCQUFJRCxLQUFBLENBQUFDLGFBQUEsQ0FBQ0csSUFBSTtJQUFDQyxFQUFFLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBTyxDQUNuQyxDQUNFLGVBQ0xMLEtBQUEsQ0FBQUMsYUFBQSxDQUFDTSxNQUFNLE9BQUcsQ0FDSDtBQUViO0FBRUEsaUVBQWVkLFVBQVU7Ozs7Ozs7O1VDbEN6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gTWFpbkhlYWRlcigpIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2dvdXQgZnVuY3Rpb25hbGl0eVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgY29uc3QgaXNMb2dnZWRJbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0xvZ2dlZEluJykgPT09ICd0cnVlJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2NvZGVyc2xhYmtvc292YS5jb20vYmxvY2tzL01haW5IZWFkZXIvbG9nb0NMZW4uc3ZnXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9wcmljZXNcIj5QcmljZXM8L0xpbms+PC9saT5cclxuICAgICAgICA8bGk+PExpbmsgdG89XCIjYWJvdXRcIj5BYm91dCB1czwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNjb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgIHsvKiBEaXNwbGF5IHRoZSBsb2dvdXQgYnV0dG9uIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbiAqL31cclxuICAgICAgICB7aXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgey8qIERpc3BsYXkgdGhlIGxvZ2luIGJ1dHRvbiBpZiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluICovfVxyXG4gICAgICAgIHshaXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkwNDg3NjM4ZWQ4MzdlMWMwNjAzXCIpIl0sIm5hbWVzIjpbIk1haW5IZWFkZXIiLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwiaGFuZGxlTG9nb3V0IiwiaXNMb2dnZWRJbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJMaW5rIiwidG8iLCJvbkNsaWNrIiwiT3V0bGV0Il0sInNvdXJjZVJvb3QiOiIifQ==