"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Dashboard(props) {
  var user = JSON.parse(localStorage.getItem('user'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png",
    alt: "Profile Picture"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "profile-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "profilii"
  }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Front-end Developer"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "about-me"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I'm a passionate web developer who loves to build user-friendly and intuitive interfaces using React."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "As a front-end developer, I am constantly learning and experimenting with new technologies and techniques to build ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "the most user-friendly and visually appealing interfaces. I strive to create responsive, accessible, and performant websites that provide an optimal user experience across all devices and platforms. My passion for front-end development extends beyond just writing code; I enjoy collaborating with designers, UX experts, and other developers to bring ideas to life and solve complex problems. Whether it's implementing complex animations or optimizing site speed, I am always looking for ways to improve my skills and make meaningful contributions to the development community.")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46);
/* harmony import */ var _Premium__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47);














var Wrapper = function Wrapper() {
  var user = JSON.parse(localStorage.getItem('user'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Premium__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  var handleLoginSuccess = function handleLoginSuccess() {
    // Do something after successful login
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleLoginSuccess: handleLoginSuccess
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/register",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Register__WEBPACK_IMPORTED_MODULE_11__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e00404ca8e994d615c4f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxlQUNiRiwwREFBQSxDQUFDeUIsNENBQUcsT0FBRyxlQUNQekIsMERBQUEsQ0FBQ3NCLCtDQUFNLE9BQUcsQ0FDVDtBQUVQLENBQUM7QUFFRFIsNkNBQWUsZUFBQ2QsMERBQUEsQ0FBQ2lDLEdBQUcsT0FBRyxFQUFFSyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUM1RDFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmQocHJvcHMpIHtcclxuICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5jaXR5cG5nLmNvbS9wdWJsaWMvdXBsb2Fkcy9wcmV2aWV3L2Rvd25sb2FkLXByb2ZpbGUtdXNlci1yb3VuZC1vcmFuZ2UtaWNvbi1zeW1ib2wtcG5nLTExNjM5NTk0MzYwa3NmNnRsaHVrZi5wbmdcIiBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1pbmZvXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHJvZmlsaWlcIj57dXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgICAgPHA+RnJvbnQtZW5kIERldmVsb3BlcjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LW1lXCI+XHJcbiAgICAgICAgPGgyPkFib3V0IE1lPC9oMj5cclxuICAgICAgICA8cD5JJ20gYSBwYXNzaW9uYXRlIHdlYiBkZXZlbG9wZXIgd2hvIGxvdmVzIHRvIGJ1aWxkIHVzZXItZnJpZW5kbHkgYW5kIGludHVpdGl2ZSBpbnRlcmZhY2VzIHVzaW5nIFJlYWN0LjwvcD5cclxuICAgICAgICA8cD5BcyBhIGZyb250LWVuZCBkZXZlbG9wZXIsIEkgYW0gY29uc3RhbnRseSBsZWFybmluZyBhbmQgZXhwZXJpbWVudGluZyB3aXRoIG5ldyB0ZWNobm9sb2dpZXMgYW5kIHRlY2huaXF1ZXMgdG8gYnVpbGQgPGJyPjwvYnI+dGhlIG1vc3QgdXNlci1mcmllbmRseSBhbmQgdmlzdWFsbHkgYXBwZWFsaW5nIGludGVyZmFjZXMuIEkgc3RyaXZlIHRvIGNyZWF0ZSByZXNwb25zaXZlLCBhY2Nlc3NpYmxlLCBhbmQgcGVyZm9ybWFudCB3ZWJzaXRlcyB0aGF0IHByb3ZpZGUgYW4gb3B0aW1hbCB1c2VyIGV4cGVyaWVuY2UgYWNyb3NzIGFsbCBkZXZpY2VzIGFuZCBwbGF0Zm9ybXMuIE15IHBhc3Npb24gZm9yIGZyb250LWVuZCBkZXZlbG9wbWVudCBleHRlbmRzIGJleW9uZCBqdXN0IHdyaXRpbmcgY29kZTsgSSBlbmpveSBjb2xsYWJvcmF0aW5nIHdpdGggZGVzaWduZXJzLCBVWCBleHBlcnRzLCBhbmQgb3RoZXIgZGV2ZWxvcGVycyB0byBicmluZyBpZGVhcyB0byBsaWZlIGFuZCBzb2x2ZSBjb21wbGV4IHByb2JsZW1zLiBXaGV0aGVyIGl0J3MgaW1wbGVtZW50aW5nIGNvbXBsZXggYW5pbWF0aW9ucyBvciBvcHRpbWl6aW5nIHNpdGUgc3BlZWQsIEkgYW0gYWx3YXlzIGxvb2tpbmcgZm9yIHdheXMgdG8gaW1wcm92ZSBteSBza2lsbHMgYW5kIG1ha2UgbWVhbmluZ2Z1bCBjb250cmlidXRpb25zIHRvIHRoZSBkZXZlbG9wbWVudCBjb21tdW5pdHkuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICBIYXNoUm91dGVyLFxyXG4gIFJvdXRlLFxyXG4gIFJvdXRlcyxcclxuICBMaW5rLFxyXG4gIE5hdkxpbmssXHJcbiAgT3V0bGV0LFxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBBYm91dFVTIGZyb20gXCIuL0Fib3V0VVNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIjtcclxuaW1wb3J0IFRPUCBmcm9tIFwiLi9UT1BcIjtcclxuaW1wb3J0IENvbnRhY3RVUyBmcm9tIFwiLi9Db250YWN0VVNcIjtcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xyXG5pbXBvcnQgUHJlbWl1bSBmcm9tIFwiLi9QcmVtaXVtXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPEFib3V0VVMgLz5cclxuICAgICAgICB7dXNlciAmJiA8UHJlbWl1bSAvPiB9XHJcbiAgICAgICAgPENvbnRhY3RVUyAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dpblN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gRG8gc29tZXRoaW5nIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW5cclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ByaWNlc1wiIGVsZW1lbnQ9ezxQcmljZXMgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luIGhhbmRsZUxvZ2luU3VjY2Vzcz17aGFuZGxlTG9naW5TdWNjZXNzfSAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcmVnaXN0ZXJcIiBlbGVtZW50PXs8UmVnaXN0ZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmQgLz59IC8+XHJcbiAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgICAgPFRPUCAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuICAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMDA0MDRjYThlOTk0ZDYxNWM0ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ1c2VybmFtZSIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJIZWFkZXIiLCJGb290ZXIiLCJBYm91dFVTIiwiQmFubmVyIiwiVE9QIiwiQ29udGFjdFVTIiwiUHJpY2VzIiwiTG9naW4iLCJSZWdpc3RlciIsIlByZW1pdW0iLCJXcmFwcGVyIiwiRnJhZ21lbnQiLCJBcHAiLCJoYW5kbGVMb2dpblN1Y2Nlc3MiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9