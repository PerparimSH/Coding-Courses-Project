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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    userName = _useState2[0],
    setUserName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    userEmail = _useState4[0],
    setUserEmail = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    userBio = _useState6[0],
    setUserBio = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Load user data from localStorage
    var userData = localStorage.getItem('userData');
    if (userData) {
      var _JSON$parse = JSON.parse(userData),
        name = _JSON$parse.name,
        email = _JSON$parse.email,
        bio = _JSON$parse.bio;
      setUserName(name);
      setUserEmail(email);
      setUserBio(bio);
    }
  }, []);
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
    // Save the updated user data to localStorage
    var userData = JSON.stringify({
      name: userName,
      email: userEmail,
      bio: userBio
    });
    localStorage.setItem('userData', userData);
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
/******/ 	__webpack_require__.h = () => ("4dedae14a43fd1e6440c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBQSxDQUFDO0lBQUM4QyxVQUFVLEVBQUUsU0FBQUEsV0FBQUQsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ2hCLE1BQU0sQ0FBQ1UsS0FBSyxDQUFDdkMsZUFBZSxHQUFHckIsTUFBTSxDQUFDb0IsT0FBTyxDQUFDQyxlQUFlO0lBQUEsQ0FBQztJQUFDK0MsT0FBTyxFQUFFZDtFQUFnQixHQUFDLE1BQUksQ0FBUyxDQUM1TyxDQUNGO0FBRVYsQ0FBQztBQUVELGlFQUFldkQsU0FBUzs7Ozs7Ozs7VUNoSHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRXhlcmNpc2VfNC9qcy9EYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgdXNlclByb2ZpbGU6IHtcclxuICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4J1xyXG4gICAgfSxcclxuICAgIHVzZXJQcm9maWxlSGVhZGVyOiB7XHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgdXNlclByb2ZpbGVIZWFkZXJIMToge1xyXG4gICAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCdcclxuICAgIH0sXHJcbiAgICB1c2VyUHJvZmlsZUJvZHk6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgZ2FwOiAnMjBweCdcclxuICAgIH0sXHJcbiAgICBmb3JtR3JvdXA6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnNXB4J1xyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICBmb250U2l6ZTogJzE2cHgnXHJcbiAgICB9LFxyXG4gICAgc2F2ZUJ0bjoge1xyXG4gICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0Mjg1ZjQnLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuM3MnXHJcbiAgICB9LFxyXG4gICAgc2F2ZUJ0bkhvdmVyOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzY3ZDYnXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJFbWFpbCwgc2V0VXNlckVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlckJpbywgc2V0VXNlckJpb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBMb2FkIHVzZXIgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgY29uc3QgdXNlckRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckRhdGEnKTtcclxuICAgIGlmICh1c2VyRGF0YSkge1xyXG4gICAgICBjb25zdCB7IG5hbWUsIGVtYWlsLCBiaW8gfSA9IEpTT04ucGFyc2UodXNlckRhdGEpO1xyXG4gICAgICBzZXRVc2VyTmFtZShuYW1lKTtcclxuICAgICAgc2V0VXNlckVtYWlsKGVtYWlsKTtcclxuICAgICAgc2V0VXNlckJpbyhiaW8pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VXNlck5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VXNlckVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmlvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyQmlvKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB1c2VyIGRhdGEgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHsgbmFtZTogdXNlck5hbWUsIGVtYWlsOiB1c2VyRW1haWwsIGJpbzogdXNlckJpbyB9KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyRGF0YScsIHVzZXJEYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudXNlclByb2ZpbGV9PlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudXNlclByb2ZpbGVIZWFkZXJ9PlxyXG4gICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLnVzZXJQcm9maWxlSGVhZGVySDF9PkVkaXQgeW91ciBwcm9maWxlPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy51c2VyUHJvZmlsZUJvZHl9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9IGh0bWxGb3I9XCJ1c2VybmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0fSB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9IGh0bWxGb3I9XCJ1c2VyZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHN0eWxlPXtzdHlsZXMuaW5wdXR9IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlcmVtYWlsXCIgdmFsdWU9e3VzZXJFbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5mb3JtR3JvdXB9PlxyXG4gICAgICAgICAgPGxhYmVsIHN0eWxlPXtzdHlsZXMubGFiZWx9IGh0bWxGb3I9XCJ1c2VyYmlvXCI+QmlvOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3N0eWxlcy5pbnB1dH0gaWQ9XCJ1c2VyYmlvXCIgdmFsdWU9e3VzZXJCaW99IG9uQ2hhbmdlPXtoYW5kbGVCaW9DaGFuZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLnNhdmVCdG59IG9uTW91c2VPdmVyPXtlID0+IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0eWxlcy5zYXZlQnRuSG92ZXIuYmFja2dyb3VuZENvbG9yfSBvbk1vdXNlT3V0PXtlID0+IGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0eWxlcy5zYXZlQnRuLmJhY2tncm91bmRDb2xvcn0gb25DbGljaz17aGFuZGxlU2F2ZUNsaWNrfT5TYXZlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZGVkYWUxNGE0M2ZkMWU2NDQwY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFzaGJvYXJkIiwic3R5bGVzIiwidXNlclByb2ZpbGUiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJ1c2VyUHJvZmlsZUhlYWRlciIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsInVzZXJQcm9maWxlSGVhZGVySDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ1c2VyUHJvZmlsZUJvZHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImdhcCIsImZvcm1Hcm91cCIsImxhYmVsIiwiaW5wdXQiLCJzYXZlQnRuIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwic2F2ZUJ0bkhvdmVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJ1c2VyQmlvIiwic2V0VXNlckJpbyIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9KU09OJHBhcnNlIiwiSlNPTiIsInBhcnNlIiwibmFtZSIsImVtYWlsIiwiYmlvIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVFbWFpbENoYW5nZSIsImhhbmRsZUJpb0NoYW5nZSIsImhhbmRsZVNhdmVDbGljayIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwib25Nb3VzZU92ZXIiLCJlIiwib25Nb3VzZU91dCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9