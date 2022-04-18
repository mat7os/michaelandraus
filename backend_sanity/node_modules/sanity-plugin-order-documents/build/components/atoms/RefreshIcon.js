"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function RefreshIcon(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("svg", {
    width: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 125",
    fill: "#999"
  }, /*#__PURE__*/_react["default"].createElement("title", null, title || "Refresh"), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M84.6 15.4C75.8 6.5 63.5 1 50 1 29 1 11.1 14.2 4.1 32.8l11.5 4.3C20.8 23.2 34.2 13.3 50 13.3c10.1 0 19.3 4.1 26 10.8L62.3 37.8H99V1L84.6 15.4zM50 86.8c-10.1 0-19.3-4.1-26-10.8l13.7-13.7H1V99l14.4-14.4C24.2 93.5 36.5 99 50 99c21 0 38.9-13.2 45.9-31.8l-11.5-4.3C79.2 76.8 65.8 86.8 50 86.8z"
  }));
}

var _default = RefreshIcon;
exports["default"] = _default;