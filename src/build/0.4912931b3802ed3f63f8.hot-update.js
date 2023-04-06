"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ContactUS() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form-container",
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Enter Your Name",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Enter Your Email",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "message",
    minLength: 10,
    maxLength: 30,
    placeholder: "Enter Your Message",
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "class": "image-style",
    src: "https://i.imgur.com/vx8OVQu.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please fill out the form to get in touch with us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We will get back to you as soon as possible."))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUS);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);











var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sections__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("072113dacee260e0afae")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwrQ0FBTSxPQUFHLENBQ1g7QUFFWCxDQUFDO0FBRURGLDZDQUFlLGVBQUNmLDBEQUFBLENBQUM4QixHQUFHLE9BQUUsRUFBRUksUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDaER2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvQ29udGFjdFVTLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RVUygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxocj48L2hyPlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWNvbnRhaW5lclwiIGlkPVwiY29udGFjdFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XHJcbiAgICA8Zm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIG1pbkxlbmd0aD17MTB9IG1heExlbmd0aD17MzB9IHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCIgcmVxdWlyZWQgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT4gICBcclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbmZvXCI+XHJcbiAgPGltZyBjbGFzcz1cImltYWdlLXN0eWxlXCIgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS92eDhPVlF1LnBuZ1wiPjwvaW1nPlxyXG4gICAgPGgyPkNvbnRhY3QgVXM8L2gyPlxyXG4gICAgPHA+UGxlYXNlIGZpbGwgb3V0IHRoZSBmb3JtIHRvIGdldCBpbiB0b3VjaCB3aXRoIHVzLjwvcD5cclxuICAgIDxwPldlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuPC9wPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVUztcclxuXHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBNYWluSGVhZGVyIGZyb20gXCIuL01haW5IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIlxyXG5pbXBvcnQgU2VjdGlvbnMgZnJvbSBcIi4vU2VjdGlvbnNcIlxyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuL0Jhbm5lclwiXHJcbmltcG9ydCBUT1AgZnJvbSBcIi4vVE9QXCJcclxuaW1wb3J0IENvbnRhY3RVUyBmcm9tIFwiLi9Db250YWN0VVNcIlxyXG5pbXBvcnQgUHJpY2VzIGZyb20gXCIuL1ByaWNlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgICAgICA8U2VjdGlvbnMgLz5cclxuICAgICAgICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPE1haW5IZWFkZXIgLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcy8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8L0hhc2hSb3V0ZXI+IFxyXG4gICAgICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA3MjExM2RhY2VlMjYwZTBhZmFlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFjdFVTIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJodG1sRm9yIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwic3JjIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJNYWluSGVhZGVyIiwiRm9vdGVyIiwiU2VjdGlvbnMiLCJCYW5uZXIiLCJUT1AiLCJQcmljZXMiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIk5hdmlnYXRpb24iLCJXcmFwcGVyIiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==