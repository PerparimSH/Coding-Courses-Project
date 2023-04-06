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
    // do something with formValues, such as send an email
  };

  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setFormValues(function (prevValues) {
      return _objectSpread(_objectSpread({}, prevValues), {}, _defineProperty({}, name, value));
    });
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
    value: formValues.name,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Enter Your Email",
    value: formValues.email,
    onChange: handleChange,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "message",
    minLength: 10,
    maxLength: 100,
    placeholder: "Enter Your Message",
    value: formValues.message,
    onChange: handleChange,
    required: true
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
/******/ 	__webpack_require__.h = () => ("1e5945d2f184f411c4c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtJQUFDaUMsR0FBRyxFQUFDO0VBQWlDLEVBQU8sZUFDckVqQywwREFBQSxhQUFJLFlBQVUsQ0FBSyxlQUNuQkEsMERBQUEsWUFBRyxtREFBaUQsQ0FBSSxlQUN4REEsMERBQUEsWUFBRyw4Q0FBNEMsQ0FBSSxDQUMvQyxDQUNGLENBQ0w7QUFFUDtBQUVBLGlFQUFlRSxTQUFTOzs7Ozs7OztVQzNFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0NvbnRhY3RVUy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RVUygpIHtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCBmb3JtVmFsdWVzLCBzdWNoIGFzIHNlbmQgYW4gZW1haWxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcclxuICAgIHNldEZvcm1WYWx1ZXMoKHByZXZWYWx1ZXMpID0+ICh7IC4uLnByZXZWYWx1ZXMsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aHIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWNvbnRhaW5lclwiIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMubmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17MTB9XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezEwMH1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtVmFsdWVzLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbmZvXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1hZ2Utc3R5bGVcIiBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1d5aDNtQUMucG5nXCI+PC9pbWc+XHJcbiAgICAgICAgICA8aDI+Q29udGFjdCBVczwvaDI+XHJcbiAgICAgICAgICA8cD5QbGVhc2UgZmlsbCBvdXQgdGhlIGZvcm0gdG8gZ2V0IGluIHRvdWNoIHdpdGggdXMuPC9wPlxyXG4gICAgICAgICAgPHA+V2Ugd2lsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVTO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZTU5NDVkMmYxODRmNDExYzRjNFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFjdFVTIiwiX3VzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZWYWx1ZXMiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==