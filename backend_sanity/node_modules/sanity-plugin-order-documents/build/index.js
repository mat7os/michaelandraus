"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _OrderDocuments = _interopRequireDefault(require("./components/OrderDocuments"));

require("react-tippy/dist/tippy.css");

function icon() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 100 125"
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "currentColor",
    points: "94.52 91.83 68.76 124.02 43.01 91.83 54.94 91.83 54.94 42.45 82.59 42.45 82.59 91.83 94.52 91.83"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "currentColor",
    points: "56.99 33.17 45.06 33.17 45.06 82.55 17.41 82.55 17.41 33.17 5.48 33.17 31.24 0.98 56.99 33.17"
  }));
}

var _default = {
  title: "Order Documents",
  name: "order-documents",
  icon: icon,
  component: _OrderDocuments["default"]
};
exports["default"] = _default;