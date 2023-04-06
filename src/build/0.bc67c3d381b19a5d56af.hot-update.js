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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showPopup = _useState4[0],
    setShowPopup = _useState4[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setShowPopup(true);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (showPopup) {
      setTimeout(function () {
        setShowPopup(false);
      }, 5000);
    }
  }, [showPopup]);
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
    placeholder: "Enter Your Message",
    required: true,
    value: formValues.message,
    onChange: handleInputChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "image-style",
    src: "https://i.imgur.com/Wyh3mAC.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please fill out the form to get in touch with us."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "We will get back to you as soon as possible."))), showPopup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "popup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Message sent!")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactUS);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b271018f391be49a4c23")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFDO0VBQVMsR0FBQyxVQUFRLENBQVEsZUFDekMvQiwwREFBQTtJQUFVSyxJQUFJLEVBQUMsU0FBUztJQUFDNEIsV0FBVyxFQUFDLG9CQUFvQjtJQUFDQyxRQUFRO0lBQUNaLEtBQUssRUFBRVosVUFBVSxDQUFDSCxPQUFRO0lBQUM0QixRQUFRLEVBQUVoQjtFQUFrQixFQUFhLENBQ25JLGVBQ05uQiwwREFBQSxZQUFTLGVBQ1RBLDBEQUFBO0lBQVFnQyxJQUFJLEVBQUM7RUFBUSxHQUFDLFFBQU0sQ0FBUyxDQUNoQyxDQUNILGVBQ05oQywwREFBQTtJQUFLNEIsU0FBUyxFQUFDO0VBQW1CLGdCQUNoQzVCLDBEQUFBO0lBQUs0QixTQUFTLEVBQUMsYUFBYTtJQUFDUSxHQUFHLEVBQUM7RUFBaUMsRUFBTyxlQUN6RXBDLDBEQUFBLGFBQUksWUFBVSxDQUFLLGVBQ25CQSwwREFBQSxZQUFHLG1EQUFpRCxDQUFJLGVBQ3hEQSwwREFBQSxZQUFHLDhDQUE0QyxDQUFJLENBQy9DLENBQ0YsRUFFTGMsU0FBUyxpQkFDUmQsMERBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFPLGdCQUNwQjVCLDBEQUFBLFlBQUcsZUFBYSxDQUFJLENBRXZCLENBQ0E7QUFFUDtBQUVBLGlFQUFlRyxTQUFTOzs7Ozs7OztVQzNFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9FeGVyY2lzZV80L2pzL0NvbnRhY3RVUy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdFVTKCkge1xyXG4gIFxyXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgbWVzc2FnZTogJydcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Nob3dQb3B1cCwgc2V0U2hvd1BvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2hvd1BvcHVwKHRydWUpO1xyXG4gICAgc2V0Rm9ybVZhbHVlcyh7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIG1lc3NhZ2U6ICcnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcbiAgICBzZXRGb3JtVmFsdWVzKHsgLi4uZm9ybVZhbHVlcywgW25hbWVdOiB2YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2hvd1BvcHVwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dQb3B1cChmYWxzZSk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgfVxyXG4gIH0sIFtzaG93UG9wdXBdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxocj48L2hyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm0tY29udGFpbmVyXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgTmFtZVwiIHJlcXVpcmVkIHZhbHVlPXtmb3JtVmFsdWVzLm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIiByZXF1aXJlZCB2YWx1ZT17Zm9ybVZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBNZXNzYWdlXCIgcmVxdWlyZWQgdmFsdWU9e2Zvcm1WYWx1ZXMubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbmZvXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlLXN0eWxlXCIgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9XeWgzbUFDLnBuZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgPGgyPkNvbnRhY3QgVXM8L2gyPlxyXG4gICAgICAgICAgPHA+UGxlYXNlIGZpbGwgb3V0IHRoZSBmb3JtIHRvIGdldCBpbiB0b3VjaCB3aXRoIHVzLjwvcD5cclxuICAgICAgICAgIDxwPldlIHdpbGwgZ2V0IGJhY2sgdG8geW91IGFzIHNvb24gYXMgcG9zc2libGUuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtzaG93UG9wdXAgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXBcIj5cclxuICAgICAgICAgIDxwPk1lc3NhZ2Ugc2VudCE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VVM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIyNzEwMThmMzkxYmU0OWE0YzIzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb250YWN0VVMiLCJfdXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZm9ybVZhbHVlcyIsInNldEZvcm1WYWx1ZXMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNob3dQb3B1cCIsInNldFNob3dQb3B1cCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVJbnB1dENoYW5nZSIsIl9ldmVudCR0YXJnZXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJzZXRUaW1lb3V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==