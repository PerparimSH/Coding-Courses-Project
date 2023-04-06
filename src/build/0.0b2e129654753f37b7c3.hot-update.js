"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
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

var sections = [{
  title: 'Learn HTML/CSS',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}, {
  title: 'Learn JavaScript',
  content: 'Praesent non eros eget sem bibendum elementum.'
}, {
  title: 'Learn React',
  content: 'Aliquam rutrum tristique elit, et sagittis orci interdum vitae.'
}];
var Premium = function Premium() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  var handleClick = function handleClick(index) {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, sections.map(function (section, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion",
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion-header",
      onClick: function onClick() {
        return handleClick(index);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, section.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "arrow ".concat(activeIndex === index ? 'open' : '')
    }, "\u25B2")), activeIndex === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "accordion-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, section.content)));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Premium);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__.Route, {
    path: "/premium",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Premium__WEBPACK_IMPORTED_MODULE_12__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5973aeeb66d97dbc7593")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNpQywrQ0FBTTtFQUFJLEVBQUcsZUFDN0NqQywwREFBQSxDQUFDc0Isb0RBQUs7SUFBQ21CLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRTFDLDBEQUFBLENBQUNrQyw4Q0FBSztNQUFDTSxrQkFBa0IsRUFBRUE7SUFBbUI7RUFBSSxFQUFHLGVBQ25GeEMsMERBQUEsQ0FBQ3NCLG9EQUFLO0lBQUNtQixJQUFJLEVBQUMsV0FBVztJQUFDQyxPQUFPLGVBQUUxQywwREFBQSxDQUFDb0Msa0RBQVE7RUFBSSxFQUFHLGVBQ2pEcEMsMERBQUEsQ0FBQ3NCLG9EQUFLO0lBQUNtQixJQUFJLEVBQUMsWUFBWTtJQUFDQyxPQUFPLGVBQUUxQywwREFBQSxDQUFDbUMsbURBQVM7RUFBSSxFQUFHLGVBQ25EbkMsMERBQUEsQ0FBQ3NCLG9EQUFLO0lBQUNtQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUUxQywwREFBQSxDQUFDSyxpREFBTztFQUFJLEVBQUcsQ0FFeEMsQ0FDRSxlQUNiTCwwREFBQSxDQUFDK0IsNENBQUcsT0FBRyxlQUNQL0IsMERBQUEsQ0FBQzRCLCtDQUFNLE9BQUcsQ0FDVDtBQUVQLENBQUM7QUFFRFIsNkNBQWUsZUFBQ3BCLDBEQUFBLENBQUN1QyxHQUFHLE9BQUcsRUFBRUssUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDM0QxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvUHJlbWl1bS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHNlY3Rpb25zID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTGVhcm4gSFRNTC9DU1MnLFxyXG4gICAgY29udGVudDogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBKYXZhU2NyaXB0JyxcclxuICAgIGNvbnRlbnQ6ICdQcmFlc2VudCBub24gZXJvcyBlZ2V0IHNlbSBiaWJlbmR1bSBlbGVtZW50dW0uJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdMZWFybiBSZWFjdCcsXHJcbiAgICBjb250ZW50OiAnQWxpcXVhbSBydXRydW0gdHJpc3RpcXVlIGVsaXQsIGV0IHNhZ2l0dGlzIG9yY2kgaW50ZXJkdW0gdml0YWUuJ1xyXG4gIH1cclxuXTtcclxuXHJcbmNvbnN0IFByZW1pdW0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZUluZGV4KGFjdGl2ZUluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25cIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWhlYWRlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgIDxjZW50ZXI+PGgzPntzZWN0aW9uLnRpdGxlfTwvaDM+PC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGFycm93ICR7YWN0aXZlSW5kZXggPT09IGluZGV4ID8gJ29wZW4nIDogJyd9YH0+JiM5NjUwOzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2FjdGl2ZUluZGV4ID09PSBpbmRleCAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8cD57c2VjdGlvbi5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmVtaXVtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgSGFzaFJvdXRlcixcclxuICBSb3V0ZSxcclxuICBSb3V0ZXMsXHJcbiAgTGluayxcclxuICBOYXZMaW5rLFxyXG4gIE91dGxldCxcclxufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgQWJvdXRVUyBmcm9tIFwiLi9BYm91dFVTXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vQmFubmVyXCI7XHJcbmltcG9ydCBUT1AgZnJvbSBcIi4vVE9QXCI7XHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCI7XHJcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuL0Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vUmVnaXN0ZXJcIjtcclxuaW1wb3J0IFByZW1pdW0gZnJvbSBcIi4vUHJlbWl1bVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPEFib3V0VVMgLz5cclxuICAgICAgICA8Q29udGFjdFVTIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICAvLyBEbyBzb21ldGhpbmcgYWZ0ZXIgc3VjY2Vzc2Z1bCBsb2dpblxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlciAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcyAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBlbGVtZW50PXs8TG9naW4gaGFuZGxlTG9naW5TdWNjZXNzPXtoYW5kbGVMb2dpblN1Y2Nlc3N9IC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9yZWdpc3RlclwiIGVsZW1lbnQ9ezxSZWdpc3RlciAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvZGFzaGJvYXJkXCIgZWxlbWVudD17PERhc2hib2FyZCAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJlbWl1bVwiIGVsZW1lbnQ9ezxQcmVtaXVtIC8+fSAvPlxyXG5cclxuICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICA8VE9QIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfTtcclxuICBcclxuICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xyXG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU5NzNhZWViNjZkOTdkYmM3NTkzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzZWN0aW9ucyIsInRpdGxlIiwiY29udGVudCIsIlByZW1pdW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwia2V5Iiwib25DbGljayIsImNvbmNhdCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJIZWFkZXIiLCJGb290ZXIiLCJBYm91dFVTIiwiQmFubmVyIiwiVE9QIiwiQ29udGFjdFVTIiwiUHJpY2VzIiwiTG9naW4iLCJEYXNoYm9hcmQiLCJSZWdpc3RlciIsIldyYXBwZXIiLCJGcmFnbWVudCIsIkFwcCIsImhhbmRsZUxvZ2luU3VjY2VzcyIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=