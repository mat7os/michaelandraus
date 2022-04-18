"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _QuestionIcon = require("./QuestionIcon");

Object.keys(_QuestionIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _QuestionIcon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _QuestionIcon[key];
    }
  });
});

var _RefreshIcon = require("./RefreshIcon");

Object.keys(_RefreshIcon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _RefreshIcon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _RefreshIcon[key];
    }
  });
});