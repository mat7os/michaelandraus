"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getDocumentTypeNames = require("./getDocumentTypeNames");

Object.keys(_getDocumentTypeNames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getDocumentTypeNames[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getDocumentTypeNames[key];
    }
  });
});

var _setOrder = require("./setOrder");

Object.keys(_setOrder).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _setOrder[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setOrder[key];
    }
  });
});

var _willUserOverrideData = require("./willUserOverrideData");

Object.keys(_willUserOverrideData).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _willUserOverrideData[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _willUserOverrideData[key];
    }
  });
});