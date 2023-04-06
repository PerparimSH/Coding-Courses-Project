"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 42:
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

function ContactUS() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: '',
      email: '',
      message: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formValues = _useState2[0],
    setFormValues = _useState2[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    alert('Message sent!');
    setFormValues({
      name: '',
      email: '',
      message: ''
    });
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setFormValues(_objectSpread(_objectSpread({}, formValues), {}, _defineProperty({}, name, value)));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form-container",
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "name",
    placeholder: "Enter Your Name",
    required: true,
    value: formValues.name,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Enter Your Email",
    required: true,
    value: formValues.email,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "message",
    minLength: 10,
    maxLength: 100,
    placeholder: "Enter Your Message",
    required: true,
    value: formValues.message,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    "class": "image-style",
    src: "https://i.imgur.com/Wyh3mAC.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please fill out the form to get in touch with us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We will get back to you as soon as possible."))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUS);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c476bf4ebf3da499f5ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0IsMERBQUE7SUFBS3VCLFNBQVMsRUFBQztFQUFtQixnQkFDaEN2QiwwREFBQTtJQUFLLFNBQU0sYUFBYTtJQUFDaUMsR0FBRyxFQUFDO0VBQWlDLEVBQU8sZUFDckVqQywwREFBQSxhQUFJLFlBQVUsQ0FBSyxlQUNuQkEsMERBQUEsWUFBRyxtREFBaUQsQ0FBSSxlQUN4REEsMERBQUEsWUFBRyw4Q0FBNEMsQ0FBSSxDQUMvQyxDQUNGLENBQ0w7QUFFTDtBQUVBLGlFQUFlRSxTQUFTOzs7Ozs7OztVQzFEeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0NvbnRhY3RVUy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RVUygpIHtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFsZXJ0KCdNZXNzYWdlIHNlbnQhJyk7XHJcbiAgICBzZXRGb3JtVmFsdWVzKHtcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgbWVzc2FnZTogJydcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHNldEZvcm1WYWx1ZXMoeyAuLi5mb3JtVmFsdWVzLCBbbmFtZV06IHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8aHI+PC9ocj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1jb250YWluZXJcIiBpZD1cImNvbnRhY3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5hbWVcIiByZXF1aXJlZCB2YWx1ZT17Zm9ybVZhbHVlcy5uYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbFwiIHJlcXVpcmVkIHZhbHVlPXtmb3JtVmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIG1pbkxlbmd0aD17MTB9IG1heExlbmd0aD17MTAwfSBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTWVzc2FnZVwiIHJlcXVpcmVkIHZhbHVlPXtmb3JtVmFsdWVzLm1lc3NhZ2V9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPiAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5mb1wiPlxyXG4gICAgICAgIDxpbWcgY2xhc3M9XCJpbWFnZS1zdHlsZVwiIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vV3loM21BQy5wbmdcIj48L2ltZz5cclxuICAgICAgICA8aDI+Q29udGFjdCBVczwvaDI+XHJcbiAgICAgICAgPHA+UGxlYXNlIGZpbGwgb3V0IHRoZSBmb3JtIHRvIGdldCBpbiB0b3VjaCB3aXRoIHVzLjwvcD5cclxuICAgICAgICA8cD5XZSB3aWxsIGdldCBiYWNrIHRvIHlvdSBhcyBzb29uIGFzIHBvc3NpYmxlLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VVM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM0NzZiZjRlYmYzZGE0OTlmNWNlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0VVMiLCJfdXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJpZCIsIm9uU3VibWl0IiwiaHRtbEZvciIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwib25DaGFuZ2UiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9