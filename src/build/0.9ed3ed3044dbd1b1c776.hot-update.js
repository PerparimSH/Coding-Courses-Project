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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Dashboard(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('overview'),
    _useState2 = _slicedToArray(_useState, 2),
    activeSection = _useState2[0],
    setActiveSection = _useState2[1];
  var handleSectionChange = function handleSectionChange(newSection) {
    setActiveSection(newSection);
  };
  var handleLogout = function handleLogout() {
    // TODO: Implement logout functionality
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome to the Admin Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout
  }, "Logout")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: activeSection === 'overview' ? 'active' : '',
    onClick: function onClick() {
      return handleSectionChange('overview');
    }
  }, "Overview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: activeSection === 'users' ? 'active' : '',
    onClick: function onClick() {
      return handleSectionChange('users');
    }
  }, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: activeSection === 'settings' ? 'active' : '',
    onClick: function onClick() {
      return handleSectionChange('settings');
    }
  }, "Settings"))), activeSection === 'overview' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Overview Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some content about the overview section goes here.")), activeSection === 'users' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Users Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some content about the users section goes here.")), activeSection === 'settings' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Settings Section"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Some content about the settings section goes here.")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("20a8d569a4ead6ff4c49")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZWQzZWQzMDQ0ZGJkMWIxYzc3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUEwQ0gsK0NBQVEsQ0FBQyxVQUFVLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBdkRHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUV0QyxJQUFNSSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxVQUFVLEVBQUs7SUFDMUNGLGdCQUFnQixDQUFDRSxVQUFVLENBQUM7RUFDOUIsQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDekI7RUFBQSxDQUNEO0VBRUQsb0JBQ0VYLDBEQUFBO0lBQUthLFNBQVMsRUFBQztFQUFXLGdCQUN4QmIsMERBQUEsOEJBQ0VBLDBEQUFBLGFBQUksZ0NBQThCLENBQUssZUFDdkNBLDBEQUFBO0lBQVFjLE9BQU8sRUFBRUg7RUFBYSxHQUFDLFFBQU0sQ0FBUyxDQUN2QyxlQUNUWCwwREFBQSwyQkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQ0VhLFNBQVMsRUFBRU4sYUFBYSxLQUFLLFVBQVUsR0FBRyxRQUFRLEdBQUcsRUFBRztJQUN4RE8sT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNTCxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7SUFBQTtFQUFDLEdBQ2hELFVBRUQsQ0FBSyxlQUNMVCwwREFBQTtJQUNFYSxTQUFTLEVBQUVOLGFBQWEsS0FBSyxPQUFPLEdBQUcsUUFBUSxHQUFHLEVBQUc7SUFDckRPLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUwsbUJBQW1CLENBQUMsT0FBTyxDQUFDO0lBQUE7RUFBQyxHQUM3QyxPQUVELENBQUssZUFDTFQsMERBQUE7SUFDRWEsU0FBUyxFQUFFTixhQUFhLEtBQUssVUFBVSxHQUFHLFFBQVEsR0FBRyxFQUFHO0lBQ3hETyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1MLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztJQUFBO0VBQUMsR0FDaEQsVUFFRCxDQUFLLENBQ0YsQ0FDRCxFQUNMRixhQUFhLEtBQUssVUFBVSxpQkFDM0JQLDBEQUFBLCtCQUNFQSwwREFBQSxhQUFJLGtCQUFnQixDQUFLLGVBQ3pCQSwwREFBQSxZQUFHLG9EQUFrRCxDQUFJLENBRTVELEVBQ0FPLGFBQWEsS0FBSyxPQUFPLGlCQUN4QlAsMERBQUEsK0JBQ0VBLDBEQUFBLGFBQUksZUFBYSxDQUFLLGVBQ3RCQSwwREFBQSxZQUFHLGlEQUErQyxDQUFJLENBRXpELEVBQ0FPLGFBQWEsS0FBSyxVQUFVLGlCQUMzQlAsMERBQUEsK0JBQ0VBLDBEQUFBLGFBQUksa0JBQWdCLENBQUssZUFDekJBLDBEQUFBLFlBQUcsb0RBQWtELENBQUksQ0FFNUQsQ0FDRztBQUVWO0FBRUEsaUVBQWVFLFNBQVM7Ozs7Ozs7O1VDL0R4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgW2FjdGl2ZVNlY3Rpb24sIHNldEFjdGl2ZVNlY3Rpb25dID0gdXNlU3RhdGUoJ292ZXJ2aWV3Jyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlY3Rpb25DaGFuZ2UgPSAobmV3U2VjdGlvbikgPT4ge1xyXG4gICAgc2V0QWN0aXZlU2VjdGlvbihuZXdTZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IEltcGxlbWVudCBsb2dvdXQgZnVuY3Rpb25hbGl0eVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPldlbGNvbWUgdG8gdGhlIEFkbWluIERhc2hib2FyZDwvaDE+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG5hdj5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YWN0aXZlU2VjdGlvbiA9PT0gJ292ZXJ2aWV3JyA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlY3Rpb25DaGFuZ2UoJ292ZXJ2aWV3Jyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIE92ZXJ2aWV3XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVNlY3Rpb24gPT09ICd1c2VycycgPyAnYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTZWN0aW9uQ2hhbmdlKCd1c2VycycpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBVc2Vyc1xyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVTZWN0aW9uID09PSAnc2V0dGluZ3MnID8gJ2FjdGl2ZScgOiAnJ31cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VjdGlvbkNoYW5nZSgnc2V0dGluZ3MnKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICAgIHthY3RpdmVTZWN0aW9uID09PSAnb3ZlcnZpZXcnICYmIChcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxoMj5PdmVydmlldyBTZWN0aW9uPC9oMj5cclxuICAgICAgICAgIDxwPlNvbWUgY29udGVudCBhYm91dCB0aGUgb3ZlcnZpZXcgc2VjdGlvbiBnb2VzIGhlcmUuPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKX1cclxuICAgICAge2FjdGl2ZVNlY3Rpb24gPT09ICd1c2VycycgJiYgKFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPGgyPlVzZXJzIFNlY3Rpb248L2gyPlxyXG4gICAgICAgICAgPHA+U29tZSBjb250ZW50IGFib3V0IHRoZSB1c2VycyBzZWN0aW9uIGdvZXMgaGVyZS48L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApfVxyXG4gICAgICB7YWN0aXZlU2VjdGlvbiA9PT0gJ3NldHRpbmdzJyAmJiAoXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8aDI+U2V0dGluZ3MgU2VjdGlvbjwvaDI+XHJcbiAgICAgICAgICA8cD5Tb21lIGNvbnRlbnQgYWJvdXQgdGhlIHNldHRpbmdzIHNlY3Rpb24gZ29lcyBoZXJlLjwvcD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIwYThkNTY5YTRlYWQ2ZmY0YzQ5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwiaGFuZGxlU2VjdGlvbkNoYW5nZSIsIm5ld1NlY3Rpb24iLCJoYW5kbGVMb2dvdXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=