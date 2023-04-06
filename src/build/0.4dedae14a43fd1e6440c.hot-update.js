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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Edit your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "username"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "username",
    value: userName,
    onChange: handleNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "useremail"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "useremail",
    value: userEmail,
    onChange: handleEmailChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "userbio"
  }, "Bio:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "userbio",
    value: userBio,
    onChange: handleBioChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleSaveClick
  }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c878a7245246fdc9e0b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBVyxHQUFDLFFBQU0sQ0FBUSxlQUN6Q3RDLDBEQUFBO0lBQU91QyxJQUFJLEVBQUMsT0FBTztJQUFDQyxFQUFFLEVBQUMsV0FBVztJQUFDWCxLQUFLLEVBQUVsQixTQUFVO0lBQUM4QixRQUFRLEVBQUVYO0VBQWtCLEVBQUcsQ0FDaEYsZUFDTjlCLDBEQUFBLDJCQUNFQSwwREFBQTtJQUFPc0MsT0FBTyxFQUFDO0VBQVMsR0FBQyxNQUFJLENBQVEsZUFDckN0QywwREFBQTtJQUFVd0MsRUFBRSxFQUFDLFNBQVM7SUFBQ1gsS0FBSyxFQUFFZCxPQUFRO0lBQUMwQixRQUFRLEVBQUVWO0VBQWdCLEVBQUcsQ0FDaEUsZUFDTi9CLDBEQUFBO0lBQVEwQyxPQUFPLEVBQUVWO0VBQWdCLEdBQUMsTUFBSSxDQUFTLENBQzNDLENBQ0Y7QUFFVixDQUFDO0FBRUQsaUVBQWU3QixTQUFTOzs7Ozs7OztVQzlEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VyQmlvLCBzZXRVc2VyQmlvXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIExvYWQgdXNlciBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpO1xyXG4gICAgaWYgKHVzZXJEYXRhKSB7XHJcbiAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIGJpbyB9ID0gSlNPTi5wYXJzZSh1c2VyRGF0YSk7XHJcbiAgICAgIHNldFVzZXJOYW1lKG5hbWUpO1xyXG4gICAgICBzZXRVc2VyRW1haWwoZW1haWwpO1xyXG4gICAgICBzZXRVc2VyQmlvKGJpbyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCaW9DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFVzZXJCaW8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIHVzZXIgZGF0YSB0byBsb2NhbFN0b3JhZ2VcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiB1c2VyTmFtZSwgZW1haWw6IHVzZXJFbWFpbCwgYmlvOiB1c2VyQmlvIH0pO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJEYXRhJywgdXNlckRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ1VzZXIgZGF0YSBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPkVkaXQgeW91ciBwcm9maWxlPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgdmFsdWU9e3VzZXJOYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlcmVtYWlsXCIgdmFsdWU9e3VzZXJFbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJiaW9cIj5CaW86PC9sYWJlbD5cclxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInVzZXJiaW9cIiB2YWx1ZT17dXNlckJpb30gb25DaGFuZ2U9e2hhbmRsZUJpb0NoYW5nZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmVDbGlja30+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzg3OGE3MjQ1MjQ2ZmRjOWUwYjJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhc2hib2FyZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXJFbWFpbCIsInNldFVzZXJFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidXNlckJpbyIsInNldFVzZXJCaW8iLCJ1c2VyRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfSlNPTiRwYXJzZSIsIkpTT04iLCJwYXJzZSIsIm5hbWUiLCJlbWFpbCIsImJpbyIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVCaW9DaGFuZ2UiLCJoYW5kbGVTYXZlQ2xpY2siLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==