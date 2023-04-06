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


function MainHeader(_ref) {
  var isAuthenticated = _ref.isAuthenticated,
    handleLogout = _ref.handleLogout;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://coderslabkosova.com/blocks/MainHeader/logoCLen.svg",
    alt: "Logo"
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
  }, "Contact")), isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/dashboard",
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9185f21fb2f5f2c78af8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMzUzZTFkYTAwNzRjZTc3N2ExOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQzRDO0FBRXRFLFNBQVNLLFVBQVVBLENBQUFDLElBQUEsRUFBb0M7RUFBQSxJQUFqQ0MsZUFBZSxHQUFBRCxJQUFBLENBQWZDLGVBQWU7SUFBRUMsWUFBWSxHQUFBRixJQUFBLENBQVpFLFlBQVk7RUFDakQsSUFBTUMsUUFBUSxHQUFHTCw2REFBVyxFQUFFO0VBRTlCLG9CQUNFSiwwREFBQTtJQUFRVyxTQUFTLEVBQUM7RUFBYSxnQkFDN0JYLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFNLGdCQUNuQlgsMERBQUE7SUFBS1ksR0FBRyxFQUFDLDREQUE0RDtJQUFDQyxHQUFHLEVBQUM7RUFBTSxFQUFHLENBQy9FLGVBQ05iLDBEQUFBO0lBQUlXLFNBQVMsRUFBQztFQUFXLGdCQUN2QlgsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNDLGtEQUFJO0lBQUNhLEVBQUUsRUFBQztFQUFHLEdBQUMsTUFBSSxDQUFPLENBQUssZUFDakNkLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDQyxrREFBSTtJQUFDYSxFQUFFLEVBQUM7RUFBUyxHQUFDLFFBQU0sQ0FBTyxDQUFLLGVBQ3pDZCwwREFBQSwwQkFBSUEsMERBQUEsQ0FBQ0Msa0RBQUk7SUFBQ2EsRUFBRSxFQUFDO0VBQVEsR0FBQyxVQUFRLENBQU8sQ0FBSyxlQUMxQ2QsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNDLGtEQUFJO0lBQUNhLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssRUFDMUNQLGVBQWUsZ0JBQ2RQLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDQyxrREFBSTtJQUFDYSxFQUFFLEVBQUMsWUFBWTtJQUFDQyxPQUFPLEVBQUVQO0VBQWEsR0FBQyxRQUFNLENBQU8sQ0FBSyxnQkFFbkVSLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDQyxrREFBSTtJQUFDYSxFQUFFLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBTyxDQUNuQyxDQUNFLGVBQ0xkLDBEQUFBLENBQUNHLG9EQUFNLE9BQUcsQ0FDSDtBQUViO0FBRUEsaUVBQWVFLFVBQVU7Ozs7Ozs7O1VDM0J6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvSGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gTWFpbkhlYWRlcih7IGlzQXV0aGVudGljYXRlZCwgaGFuZGxlTG9nb3V0IH0pIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jb2RlcnNsYWJrb3NvdmEuY29tL2Jsb2Nrcy9NYWluSGVhZGVyL2xvZ29DTGVuLnN2Z1wiIGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4tbWVudVwiPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiL3ByaWNlc1wiPlByaWNlczwvTGluaz48L2xpPlxyXG4gICAgICAgIDxsaT48TGluayB0bz1cIiNhYm91dFwiPkFib3V0IHVzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgPGxpPjxMaW5rIHRvPVwiI2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcclxuICAgICAgICAgIDxsaT48TGluayB0bz1cIi9kYXNoYm9hcmRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxPdXRsZXQgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXI7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkxODVmMjFmYjJmNWYyYzc4YWY4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJ1c2VMb2NhdGlvbiIsIk1haW5IZWFkZXIiLCJfcmVmIiwiaXNBdXRoZW50aWNhdGVkIiwiaGFuZGxlTG9nb3V0IiwibG9jYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwidG8iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==