"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42);
/* harmony import */ var _Prices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(44);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
var App = function App() {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoggedIn = _useState2[0],
    setIsLoggedIn = _useState2[1];
  var handleLogin = function handleLogin() {
    // TODO: Implement login functionality
    setIsLoggedIn(true);
  };
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
    setIsLoggedIn(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MainHeader, {
    isLoggedIn: isLoggedIn,
    handleLogout: handleLogout
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Home, null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/prices",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Prices__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_9__["default"], {
      handleLogin: handleLogin
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Route, {
    path: "/dashboard",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Dashboard__WEBPACK_IMPORTED_MODULE_10__["default"], null)
  })));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("790468f57eaa4afebec6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZjFkNzRjMTJmOWI4MzNhNzFmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBUUw7QUFDRTtBQUNEO0FBQ0U7QUFDRjtBQUNOO0FBQ1k7QUFDTDtBQUNGO0FBQ1E7QUFHcEMsSUFBTWlCLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQVM7RUFDbEIsb0JBQ0lqQiwwREFBQSxDQUFBQSx1REFBQSxxQkFDQUEsMERBQUEsQ0FBQ1csK0NBQU0sT0FBRyxlQUNWWCwwREFBQSxDQUFDVSxnREFBTyxPQUFHLGVBQ1hWLDBEQUFBLENBQUNhLGtEQUFTLE9BQUcsQ0FDVjtBQUVYLENBQUM7QUFHRCxJQUFNTyxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBRWQsSUFBQUMsU0FBQSxHQUFvQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUE1Q0ksVUFBVSxHQUFBRixVQUFBO0lBQUVHLGFBQWEsR0FBQUgsVUFBQTtFQUVoQyxJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3hCO0lBQ0FELGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDckIsQ0FBQztFQUVELElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekI7SUFDQUYsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN0QixDQUFDO0VBRUQsb0JBQ0UxQiwwREFBQSxDQUFDRSx5REFBVSxxQkFDVEYsMERBQUEsQ0FBQzZCLFVBQVU7SUFBQ0osVUFBVSxFQUFFQSxVQUFXO0lBQUNHLFlBQVksRUFBRUE7RUFBYSxFQUFHLGVBQ2xFNUIsMERBQUEsQ0FBQ0kscURBQU0scUJBQ0xKLDBEQUFBLENBQUNHLG9EQUFLO0lBQUMyQixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUUvQiwwREFBQSxDQUFDZ0MsSUFBSTtFQUFJLEVBQUcsZUFDckNoQywwREFBQSxDQUFDRyxvREFBSztJQUFDMkIsSUFBSSxFQUFDLFNBQVM7SUFBQ0MsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQ2MsK0NBQU07RUFBSSxFQUFHLGVBQzdDZCwwREFBQSxDQUFDRyxvREFBSztJQUFDMkIsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFL0IsMERBQUEsQ0FBQ2UsOENBQUs7TUFBQ1ksV0FBVyxFQUFFQTtJQUFZO0VBQUksRUFBRyxlQUNyRTNCLDBEQUFBLENBQUNHLG9EQUFLO0lBQUMyQixJQUFJLEVBQUMsWUFBWTtJQUFDQyxPQUFPLGVBQUUvQiwwREFBQSxDQUFDZ0IsbURBQVM7RUFBSSxFQUFHLENBQzVDLENBQ0U7QUFFakIsQ0FBQztBQUVIZiw2Q0FBZSxlQUFDRCwwREFBQSxDQUFDb0IsR0FBRyxPQUFFLEVBQUVjLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQzNEdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICAgIEhhc2hSb3V0ZXIsXHJcbiAgICBSb3V0ZSxcclxuICAgIFJvdXRlcyxcclxuICAgIExpbmssXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgT3V0bGV0XHJcbiAgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIlxyXG5pbXBvcnQgQWJvdXRVUyBmcm9tIFwiLi9BYm91dFVTXCJcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiXHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCJcclxuaW1wb3J0IFByaWNlcyBmcm9tIFwiLi9QcmljZXNcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7ICBcclxuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8QWJvdXRVUyAvPlxyXG4gICAgICAgIDxDb250YWN0VVMgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2dpbiBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIHNldElzTG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICAgICAgc2V0SXNMb2dnZWRJbihmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgPE1haW5IZWFkZXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gaGFuZGxlTG9nb3V0PXtoYW5kbGVMb2dvdXR9IC8+XHJcbiAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxyXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJpY2VzXCIgZWxlbWVudD17PFByaWNlcyAvPn0gLz5cclxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PExvZ2luIGhhbmRsZUxvZ2luPXtoYW5kbGVMb2dpbn0gLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kYXNoYm9hcmRcIiBlbGVtZW50PXs8RGFzaGJvYXJkIC8+fSAvPlxyXG4gICAgICAgIDwvUm91dGVzPlxyXG4gICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzkwNDY4ZjU3ZWFhNGFmZWJlYzZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiSGVhZGVyIiwiRm9vdGVyIiwiQWJvdXRVUyIsIkJhbm5lciIsIlRPUCIsIkNvbnRhY3RVUyIsIlByaWNlcyIsIkxvZ2luIiwiRGFzaGJvYXJkIiwiV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIkFwcCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJoYW5kbGVMb2dpbiIsImhhbmRsZUxvZ291dCIsIk1haW5IZWFkZXIiLCJwYXRoIiwiZWxlbWVudCIsIkhvbWUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==