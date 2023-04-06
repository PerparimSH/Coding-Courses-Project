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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      totalVisits: 1000,
      averageTimeOnSite: 5.6,
      conversionRate: 0.23
    }),
    _useState2 = _slicedToArray(_useState, 2),
    userStats = _useState2[0],
    setUserStats = _useState2[1];
  var handleLogout = function handleLogout() {
    console.log('Logout button clicked');

    // Clear the user's session and redirect to the login page
    localStorage.removeItem('userToken'); // remove the user token from local storage
    props.history.push('/login'); // redirect the user to the login page
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome to My Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Total Visits: ", userStats.totalVisits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Average Time on Site: ", userStats.averageTimeOnSite, " minutes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Conversion Rate: ", userStats.conversionRate * 100, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLogout
  }, "Log Out"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9960fd3b71487e892e12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOGFmOWNiNmNkYzU1ZTYyYzM2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUFrQ0gsK0NBQVEsQ0FBQztNQUN6Q0ksV0FBVyxFQUFFLElBQUk7TUFDakJDLGlCQUFpQixFQUFFLEdBQUc7TUFDdEJDLGNBQWMsRUFBRTtJQUNsQixDQUFDLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFMLFNBQUE7SUFKS00sU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQU05QixJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQzs7SUFFcEM7SUFDQUMsWUFBWSxDQUFDQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN0Q2IsS0FBSyxDQUFDYyxPQUFPLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQ2hDLENBQUM7O0VBRUQsb0JBQ0VsQiwwREFBQSwyQkFDRUEsMERBQUEsYUFBSSx1QkFBcUIsQ0FBSyxlQUM5QkEsMERBQUEsWUFBRyxnQkFBYyxFQUFDVSxTQUFTLENBQUNMLFdBQVcsQ0FBSyxlQUM1Q0wsMERBQUEsWUFBRyx3QkFBc0IsRUFBQ1UsU0FBUyxDQUFDSixpQkFBaUIsRUFBQyxVQUFRLENBQUksZUFDbEVOLDBEQUFBLFlBQUcsbUJBQWlCLEVBQUNVLFNBQVMsQ0FBQ0gsY0FBYyxHQUFHLEdBQUcsRUFBQyxHQUFDLENBQUksZUFDekRQLDBEQUFBO0lBQVFvQixPQUFPLEVBQUVSO0VBQWEsR0FBQyxTQUFPLENBQVMsQ0FDM0M7QUFFVjtBQUVBLGlFQUFlVixTQUFTOzs7Ozs7OztVQzVCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZChwcm9wcykge1xyXG4gIGNvbnN0IFt1c2VyU3RhdHMsIHNldFVzZXJTdGF0c10gPSB1c2VTdGF0ZSh7XHJcbiAgICB0b3RhbFZpc2l0czogMTAwMCxcclxuICAgIGF2ZXJhZ2VUaW1lT25TaXRlOiA1LjYsXHJcbiAgICBjb252ZXJzaW9uUmF0ZTogMC4yM1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTG9nb3V0IGJ1dHRvbiBjbGlja2VkJyk7XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHVzZXIncyBzZXNzaW9uIGFuZCByZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJUb2tlbicpOyAvLyByZW1vdmUgdGhlIHVzZXIgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICBwcm9wcy5oaXN0b3J5LnB1c2goJy9sb2dpbicpOyAvLyByZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgbG9naW4gcGFnZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE15IFdlYnNpdGU8L2gxPlxyXG4gICAgICA8cD5Ub3RhbCBWaXNpdHM6IHt1c2VyU3RhdHMudG90YWxWaXNpdHN9PC9wPlxyXG4gICAgICA8cD5BdmVyYWdlIFRpbWUgb24gU2l0ZToge3VzZXJTdGF0cy5hdmVyYWdlVGltZU9uU2l0ZX0gbWludXRlczwvcD5cclxuICAgICAgPHA+Q29udmVyc2lvbiBSYXRlOiB7dXNlclN0YXRzLmNvbnZlcnNpb25SYXRlICogMTAwfSU8L3A+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2cgT3V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5NjBmZDNiNzE0ODdlODkyZTEyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJwcm9wcyIsIl91c2VTdGF0ZSIsInRvdGFsVmlzaXRzIiwiYXZlcmFnZVRpbWVPblNpdGUiLCJjb252ZXJzaW9uUmF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJTdGF0cyIsInNldFVzZXJTdGF0cyIsImhhbmRsZUxvZ291dCIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaGlzdG9yeSIsInB1c2giLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=