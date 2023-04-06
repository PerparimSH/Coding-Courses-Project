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

var Dashboard = function Dashboard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('John Doe'),
    _useState2 = _slicedToArray(_useState, 2),
    userName = _useState2[0],
    setUserName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('johndoe@example.com'),
    _useState4 = _slicedToArray(_useState3, 2),
    userEmail = _useState4[0],
    setUserEmail = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Lorem ipsum dolor sit amet.'),
    _useState6 = _slicedToArray(_useState5, 2),
    userBio = _useState6[0],
    setUserBio = _useState6[1];
  var handleNameChange = function handleNameChange(event) {
    setUserName(event.target.value);
  };
  var handleEmailChange = function handleEmailChange(event) {
    setUserEmail(event.target.value);
  };
  var handleBioChange = function handleBioChange(event) {
    setUserBio(event.target.value);
  };
  var handleSaveClick = function handleSaveClick() {
    // Make a HTTP request to save the updated user data
    console.log('User data saved successfully!');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile",
    style: {
      backgroundColor: 'lightgray',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      fontSize: '2rem',
      marginBottom: '10px'
    }
  }, "Edit your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile-body",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group",
    style: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "username",
    style: {
      fontWeight: 'bold',
      marginRight: '10px'
    }
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "username",
    value: userName,
    onChange: handleNameChange,
    style: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid gray',
      width: '100%'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group",
    style: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "useremail",
    style: {
      fontWeight: 'bold',
      marginRight: '10px'
    }
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "useremail",
    value: userEmail,
    onChange: handleEmailChange,
    style: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid gray',
      width: '100%'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group",
    style: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "userbio",
    style: {
      fontWeight: 'bold',
      marginRight: '10px'
    }
  }, "Bio:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "userbio",
    value: userBio,
    onChange: handleBioChange,
    style: {
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid gray',
      width: '100%'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "save-btn",
    onClick: handleSaveClick,
    style: {
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: 'blue',
      color: 'white',
      fontWeight: 'bold'
    }
  }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eaf7ba8c031ff452eada")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNO01BQUVhLFlBQVksRUFBRSxLQUFLO01BQUVDLE1BQU0sRUFBRSxNQUFNO01BQUVmLGVBQWUsRUFBRSxNQUFNO01BQUVpQixLQUFLLEVBQUUsT0FBTztNQUFFUixVQUFVLEVBQUU7SUFBTTtFQUFFLEdBQUMsTUFBSSxDQUFTLENBQzVMLENBQ0Y7QUFFVixDQUFDO0FBRUQsaUVBQWVuQyxTQUFTOzs7Ozs7OztVQ2pEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCdKb2huIERvZScpO1xyXG4gIGNvbnN0IFt1c2VyRW1haWwsIHNldFVzZXJFbWFpbF0gPSB1c2VTdGF0ZSgnam9obmRvZUBleGFtcGxlLmNvbScpO1xyXG4gIGNvbnN0IFt1c2VyQmlvLCBzZXRVc2VyQmlvXSA9IHVzZVN0YXRlKCdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC4nKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VXNlck5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VXNlckVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyQmlvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gTWFrZSBhIEhUVFAgcmVxdWVzdCB0byBzYXZlIHRoZSB1cGRhdGVkIHVzZXIgZGF0YVxyXG4gICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YSBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGdyYXknLCBwYWRkaW5nOiAnMjBweCd9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFNpemU6ICcycmVtJywgbWFyZ2luQm90dG9tOiAnMTBweCd9fT5FZGl0IHlvdXIgcHJvZmlsZTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1ib2R5XCIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiAnMjBweCd9fT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJywgbWFyZ2luUmlnaHQ6ICcxMHB4J319Pk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSBzdHlsZT17e3BhZGRpbmc6ICcxMHB4JywgYm9yZGVyUmFkaXVzOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMCUnfX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBzdHlsZT17e3dpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogJzIwcHgnfX0+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJlbWFpbFwiIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnLCBtYXJnaW5SaWdodDogJzEwcHgnfX0+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXJlbWFpbFwiIHZhbHVlPXt1c2VyRW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gc3R5bGU9e3twYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jywgd2lkdGg6ICcxMDAlJ319IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcyMHB4J319PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyYmlvXCIgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpblJpZ2h0OiAnMTBweCd9fT5CaW86PC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInVzZXJiaW9cIiB2YWx1ZT17dXNlckJpb30gb25DaGFuZ2U9e2hhbmRsZUJpb0NoYW5nZX0gc3R5bGU9e3twYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jywgd2lkdGg6ICcxMDAlJ319IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzYXZlLWJ0blwiIG9uQ2xpY2s9e2hhbmRsZVNhdmVDbGlja30gc3R5bGU9e3twYWRkaW5nOiAnMTBweCcsIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlcjogJ25vbmUnLCBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJywgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6ICdib2xkJ319PlNhdmU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVhZjdiYThjMDMxZmY0NTJlYWRhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyTmFtZSIsInNldFVzZXJOYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInVzZXJCaW8iLCJzZXRVc2VyQmlvIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZUJpb0NoYW5nZSIsImhhbmRsZVNhdmVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJ3aWR0aCIsImh0bWxGb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luUmlnaHQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=