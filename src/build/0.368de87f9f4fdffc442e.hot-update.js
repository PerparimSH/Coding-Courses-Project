"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Navbar.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Navbar() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('home'),
    _useState2 = _slicedToArray(_useState, 2),
    activeLink = _useState2[0],
    setActiveLink = _useState2[1];
  var handleLinkClick = function handleLinkClick(link) {
    setActiveLink(link);
  };
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: activeLink === 'home' ? 'active' : '',
    onClick: function onClick() {
      return handleLinkClick('home');
    }
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: activeLink === 'about' ? 'active' : '',
    onClick: function onClick() {
      return handleLinkClick('about');
    }
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: activeLink === 'contact' ? 'active' : '',
    onClick: function onClick() {
      return handleLinkClick('contact');
    }
  }, "Contact"))));
}

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _MainHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _Sections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _TOP__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _ContactUS__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _Active__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);









var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainHeader__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Sections__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactUS__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TOP__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Active__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9407eb05a0ae5d4b9621")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNjhkZTg3ZjlmNGZkZmZjNDQyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDWDtBQUV0QixTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDaEIsSUFBQUMsU0FBQSxHQUFvQ0YsK0NBQVEsQ0FBQyxNQUFNLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0NHLFVBQVUsR0FBQUYsVUFBQTtJQUFFRyxhQUFhLEdBQUFILFVBQUE7RUFFaEMsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxJQUFJLEVBQUs7SUFDaENGLGFBQWEsQ0FBQ0UsSUFBSSxDQUFDO0VBQ3JCLENBQUM7RUFFRCxvQkFDRUMsS0FBQSxDQUFBQyxhQUFBLDJCQUNFRCxLQUFBLENBQUFDLGFBQUEsMEJBQ0VELEtBQUEsQ0FBQUMsYUFBQSwwQkFDRUQsS0FBQSxDQUFBQyxhQUFBO0lBQ0VDLElBQUksRUFBQyxHQUFHO0lBQ1JDLFNBQVMsRUFBRVAsVUFBVSxLQUFLLE1BQU0sR0FBRyxRQUFRLEdBQUcsRUFBRztJQUNqRFEsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNTixlQUFlLENBQUMsTUFBTSxDQUFDO0lBQUE7RUFBQyxHQUN4QyxNQUVELENBQUksQ0FDRCxlQUNMRSxLQUFBLENBQUFDLGFBQUEsMEJBQ0VELEtBQUEsQ0FBQUMsYUFBQTtJQUNFQyxJQUFJLEVBQUMsR0FBRztJQUNSQyxTQUFTLEVBQUVQLFVBQVUsS0FBSyxPQUFPLEdBQUcsUUFBUSxHQUFHLEVBQUc7SUFDbERRLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTU4sZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUFBO0VBQUMsR0FDekMsT0FFRCxDQUFJLENBQ0QsZUFDTEUsS0FBQSxDQUFBQyxhQUFBLDBCQUNFRCxLQUFBLENBQUFDLGFBQUE7SUFDRUMsSUFBSSxFQUFDLEdBQUc7SUFDUkMsU0FBUyxFQUFFUCxVQUFVLEtBQUssU0FBUyxHQUFHLFFBQVEsR0FBRyxFQUFHO0lBQ3BEUSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1OLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFBQTtFQUFDLEdBQzNDLFNBRUQsQ0FBSSxDQUNELENBQ0YsQ0FDRDtBQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ3VDO0FBQ047QUFDSztBQUNUO0FBQ0k7QUFDSjtBQUNOO0FBQ1k7QUFDTjtBQUU3QixJQUFNZ0IsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJZCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ08sbURBQVUsT0FBRyxlQUNkUCwwREFBQSxDQUFDVSwrQ0FBTSxPQUFHLGVBQ1ZWLDBEQUFBLENBQUNTLGlEQUFRLE9BQUcsZUFDWlQsMERBQUEsQ0FBQ1ksa0RBQVMsT0FBRyxlQUNiWiwwREFBQSxDQUFDVyw0Q0FBRyxPQUFHLGVBQ1BYLDBEQUFBLENBQUNhLCtDQUFNLE9BQUcsZUFDVmIsMERBQUEsQ0FBQ1EsK0NBQU0sT0FBRyxDQUVYO0FBRVgsQ0FBQztBQUVERiw2Q0FBZSxlQUFDTiwwREFBQSxDQUFDYyxHQUFHLE9BQUUsRUFBRUcsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDekJ2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvQWN0aXZlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9OYXZiYXIuY3NzJztcclxuXHJcbmZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICBjb25zdCBbYWN0aXZlTGluaywgc2V0QWN0aXZlTGlua10gPSB1c2VTdGF0ZSgnaG9tZScpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAobGluaykgPT4ge1xyXG4gICAgc2V0QWN0aXZlTGluayhsaW5rKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVMaW5rID09PSAnaG9tZScgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW5rQ2xpY2soJ2hvbWUnKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZUxpbmsgPT09ICdhYm91dCcgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMaW5rQ2xpY2soJ2Fib3V0Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlTGluayA9PT0gJ2NvbnRhY3QnID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTGlua0NsaWNrKCdjb250YWN0Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi9NYWluSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCJcclxuaW1wb3J0IFNlY3Rpb25zIGZyb20gXCIuL1NlY3Rpb25zXCJcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9CYW5uZXJcIlxyXG5pbXBvcnQgVE9QIGZyb20gXCIuL1RPUFwiXHJcbmltcG9ydCBDb250YWN0VVMgZnJvbSBcIi4vQ29udGFjdFVTXCJcclxuaW1wb3J0IEFjdGl2ZSBmcm9tIFwiLi9BY3RpdmVcIlxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWFpbkhlYWRlciAvPlxyXG4gICAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9ucyAvPlxyXG4gICAgICAgICAgICA8Q29udGFjdFVTIC8+XHJcbiAgICAgICAgICAgIDxUT1AgLz5cclxuICAgICAgICAgICAgPEFjdGl2ZSAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTQwN2ViMDVhMGFlNWQ0Yjk2MjFcIikiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJOYXZiYXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhY3RpdmVMaW5rIiwic2V0QWN0aXZlTGluayIsImhhbmRsZUxpbmtDbGljayIsImxpbmsiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiY2xhc3NOYW1lIiwib25DbGljayIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiTWFpbkhlYWRlciIsIkZvb3RlciIsIlNlY3Rpb25zIiwiQmFubmVyIiwiVE9QIiwiQ29udGFjdFVTIiwiQWN0aXZlIiwiQXBwIiwiRnJhZ21lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==