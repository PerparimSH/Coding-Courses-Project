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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NameInput = function NameInput(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "username"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "username",
    value: value,
    onChange: onChange
  }));
};
var EmailInput = function EmailInput(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "useremail"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "useremail",
    value: value,
    onChange: onChange
  }));
};
var BioInput = function BioInput(_ref3) {
  var value = _ref3.value,
    onChange = _ref3.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "userbio"
  }, "Bio:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "userbio",
    value: value,
    onChange: onChange
  }));
};
var Dashboard = function Dashboard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Lorem ipsum dolor sit amet.'
    }),
    _useState2 = _slicedToArray(_useState, 2),
    userData = _useState2[0],
    setUserData = _useState2[1];
  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setUserData(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };
  var handleSaveClick = function handleSaveClick() {
    // Make a HTTP request to save the updated user data
    console.log('User data saved successfully!');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Edit your profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "user-profile-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NameInput, {
    value: userData.name,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EmailInput, {
    value: userData.email,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BioInput, {
    value: userData.bio,
    onChange: handleInputChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "save-btn",
    onClick: handleSaveClick
  }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0bce4541c5d81b6c9b9f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLENBQUssQ0FDdEIsZUFDTkEsMERBQUE7SUFBS08sU0FBUyxFQUFDO0VBQW1CLGdCQUNoQ1AsMERBQUEsQ0FBQ0UsU0FBUztJQUFDRSxLQUFLLEVBQUVrQixRQUFRLENBQUNMLElBQUs7SUFBQ1osUUFBUSxFQUFFbUI7RUFBa0IsRUFBRyxlQUNoRXhCLDBEQUFBLENBQUNXLFVBQVU7SUFBQ1AsS0FBSyxFQUFFa0IsUUFBUSxDQUFDSixLQUFNO0lBQUNiLFFBQVEsRUFBRW1CO0VBQWtCLEVBQUcsZUFDbEV4QiwwREFBQSxDQUFDYSxRQUFRO0lBQUNULEtBQUssRUFBRWtCLFFBQVEsQ0FBQ0gsR0FBSTtJQUFDZCxRQUFRLEVBQUVtQjtFQUFrQixFQUFHLGVBQzlEeEIsMERBQUE7SUFBUU8sU0FBUyxFQUFDLFVBQVU7SUFBQzJCLE9BQU8sRUFBRUg7RUFBZ0IsR0FBQyxNQUFJLENBQVMsQ0FDaEUsQ0FDRjtBQUVWLENBQUM7QUFFRCxpRUFBZWhCLFNBQVM7Ozs7Ozs7O1VDN0R4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0V4ZXJjaXNlXzQvanMvRGFzaGJvYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTmFtZUlucHV0ID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBFbWFpbElucHV0ID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcmVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwidXNlcmVtYWlsXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQmlvSW5wdXQgPSAoeyB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyYmlvXCI+QmlvOjwvbGFiZWw+XHJcbiAgICAgIDx0ZXh0YXJlYSBpZD1cInVzZXJiaW9cIiB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnSm9obiBEb2UnLFxyXG4gICAgZW1haWw6ICdqb2huZG9lQGV4YW1wbGUuY29tJyxcclxuICAgIGJpbzogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LidcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHNldFVzZXJEYXRhKHByZXZTdGF0ZSA9PiAoeyAuLi5wcmV2U3RhdGUsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVDbGljayA9ICgpID0+IHtcclxuICAgIC8vIE1ha2UgYSBIVFRQIHJlcXVlc3QgdG8gc2F2ZSB0aGUgdXBkYXRlZCB1c2VyIGRhdGFcclxuICAgIGNvbnNvbGUubG9nKCdVc2VyIGRhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+RWRpdCB5b3VyIHByb2ZpbGU8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtYm9keVwiPlxyXG4gICAgICAgIDxOYW1lSW5wdXQgdmFsdWU9e3VzZXJEYXRhLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICA8RW1haWxJbnB1dCB2YWx1ZT17dXNlckRhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICA8QmlvSW5wdXQgdmFsdWU9e3VzZXJEYXRhLmJpb30gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2F2ZS1idG5cIiBvbkNsaWNrPXtoYW5kbGVTYXZlQ2xpY2t9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYmNlNDU0MWM1ZDgxYjZjOWI5ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmFtZUlucHV0IiwiX3JlZiIsInZhbHVlIiwib25DaGFuZ2UiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIkVtYWlsSW5wdXQiLCJfcmVmMiIsIkJpb0lucHV0IiwiX3JlZjMiLCJEYXNoYm9hcmQiLCJfdXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJiaW8iLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlU2F2ZUNsaWNrIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9