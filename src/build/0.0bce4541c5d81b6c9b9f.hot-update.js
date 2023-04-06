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
  var styles = {
    userProfile: {
      width: '80%',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    userProfileHeader: {
      textAlign: 'center',
      marginBottom: '20px'
    },
    userProfileHeaderH1: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    userProfileBody: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '5px'
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px'
    },
    saveBtn: {
      padding: '10px',
      backgroundColor: '#4285f4',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    saveBtnHover: {
      backgroundColor: '#3367d6'
    }
  };
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
    style: styles.userProfile
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.userProfileHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: styles.userProfileHeaderH1
  }, "Edit your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.userProfileBody
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: styles.label,
    htmlFor: "username"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: styles.input,
    type: "text",
    id: "username",
    value: userName,
    onChange: handleNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: styles.label,
    htmlFor: "useremail"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    style: styles.input,
    type: "email",
    id: "useremail",
    value: userEmail,
    onChange: handleEmailChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: styles.formGroup
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: styles.label,
    htmlFor: "userbio"
  }, "Bio:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    style: styles.input,
    id: "userbio",
    value: userBio,
    onChange: handleBioChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    style: styles.saveBtn,
    onMouseOver: function onMouseOver(e) {
      return e.target.style.backgroundColor = styles.saveBtnHover.backgroundColor;
    },
    onMouseOut: function onMouseOut(e) {
      return e.target.style.backgroundColor = styles.saveBtn.backgroundColor;
    },
    onClick: handleSaveClick
  }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9b5fca84e04acfb619af")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ2tCLEtBQU07SUFBQ2dDLE9BQU8sRUFBQztFQUFTLEdBQUMsTUFBSSxDQUFRLGVBQzFEckQsMERBQUE7SUFBVW9ELEtBQUssRUFBRWpELE1BQU0sQ0FBQ21CLEtBQU07SUFBQ2lDLEVBQUUsRUFBQyxTQUFTO0lBQUNWLEtBQUssRUFBRUwsT0FBUTtJQUFDZ0IsUUFBUSxFQUFFVDtFQUFnQixFQUFHLENBQ3JGLGVBQ04vQywwREFBQTtJQUFRb0QsS0FBSyxFQUFFakQsTUFBTSxDQUFDb0IsT0FBUTtJQUFDa0MsV0FBVyxFQUFFLFNBQUFBLFlBQUFDLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNkLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDNUIsZUFBZSxHQUFHckIsTUFBTSxDQUFDeUIsWUFBWSxDQUFDSixlQUFlO0lBQUEsQ0FBQztJQUFDbUMsVUFBVSxFQUFFLFNBQUFBLFdBQUFELENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNkLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDNUIsZUFBZSxHQUFHckIsTUFBTSxDQUFDb0IsT0FBTyxDQUFDQyxlQUFlO0lBQUEsQ0FBQztJQUFDb0MsT0FBTyxFQUFFWjtFQUFnQixHQUFDLE1BQUksQ0FBUyxDQUM1TyxDQUNGO0FBRVYsQ0FBQztBQUVELGlFQUFlOUMsU0FBUzs7Ozs7Ozs7VUNuR3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgIHVzZXJQcm9maWxlOiB7XHJcbiAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgcGFkZGluZzogJzIwcHgnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2NjYycsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCdcclxuICAgIH0sXHJcbiAgICB1c2VyUHJvZmlsZUhlYWRlcjoge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIHVzZXJQcm9maWxlSGVhZGVySDE6IHtcclxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnXHJcbiAgICB9LFxyXG4gICAgdXNlclByb2ZpbGVCb2R5OiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGdhcDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgZm9ybUdyb3VwOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzVweCdcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgZm9udFNpemU6ICcxNnB4J1xyXG4gICAgfSxcclxuICAgIHNhdmVCdG46IHtcclxuICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAwLjNzJ1xyXG4gICAgfSxcclxuICAgIHNhdmVCdG5Ib3Zlcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzM2N2Q2J1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJ0pvaG4gRG9lJyk7XHJcbiAgY29uc3QgW3VzZXJFbWFpbCwgc2V0VXNlckVtYWlsXSA9IHVzZVN0YXRlKCdqb2huZG9lQGV4YW1wbGUuY29tJyk7XHJcbiAgY29uc3QgW3VzZXJCaW8sIHNldFVzZXJCaW9dID0gdXNlU3RhdGUoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LicpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFVzZXJCaW8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBNYWtlIGEgSFRUUCByZXF1ZXN0IHRvIHNhdmUgdGhlIHVwZGF0ZWQgdXNlciBkYXRhXHJcbiAgICBjb25zb2xlLmxvZygnVXNlciBkYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGVzLnVzZXJQcm9maWxlfT5cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnVzZXJQcm9maWxlSGVhZGVyfT5cclxuICAgICAgICA8aDEgc3R5bGU9e3N0eWxlcy51c2VyUHJvZmlsZUhlYWRlckgxfT5FZGl0IHlvdXIgcHJvZmlsZTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudXNlclByb2ZpbGVCb2R5fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfSBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgc3R5bGU9e3N0eWxlcy5pbnB1dH0gdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdmFsdWU9e3VzZXJOYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfSBodG1sRm9yPVwidXNlcmVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0fSB0eXBlPVwiZW1haWxcIiBpZD1cInVzZXJlbWFpbFwiIHZhbHVlPXt1c2VyRW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZm9ybUdyb3VwfT5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGVzLmxhYmVsfSBodG1sRm9yPVwidXNlcmJpb1wiPkJpbzo8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHN0eWxlPXtzdHlsZXMuaW5wdXR9IGlkPVwidXNlcmJpb1wiIHZhbHVlPXt1c2VyQmlvfSBvbkNoYW5nZT17aGFuZGxlQmlvQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5zYXZlQnRufSBvbk1vdXNlT3Zlcj17ZSA9PiBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZXMuc2F2ZUJ0bkhvdmVyLmJhY2tncm91bmRDb2xvcn0gb25Nb3VzZU91dD17ZSA9PiBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZXMuc2F2ZUJ0bi5iYWNrZ3JvdW5kQ29sb3J9IG9uQ2xpY2s9e2hhbmRsZVNhdmVDbGlja30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWI1ZmNhODRlMDRhY2ZiNjE5YWZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsInN0eWxlcyIsInVzZXJQcm9maWxlIiwid2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwidXNlclByb2ZpbGVIZWFkZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJ1c2VyUHJvZmlsZUhlYWRlckgxIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidXNlclByb2ZpbGVCb2R5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImlucHV0Iiwic2F2ZUJ0biIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInNhdmVCdG5Ib3ZlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXJFbWFpbCIsInNldFVzZXJFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidXNlckJpbyIsInNldFVzZXJCaW8iLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlQmlvQ2hhbmdlIiwiaGFuZGxlU2F2ZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImh0bWxGb3IiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsIm9uTW91c2VPdmVyIiwiZSIsIm9uTW91c2VPdXQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==