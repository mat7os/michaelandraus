"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DraggableSection = require("./DraggableSection");

Object.keys(_DraggableSection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _DraggableSection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DraggableSection[key];
    }
  });
});

var _TypeSection = require("./TypeSection");

Object.keys(_TypeSection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TypeSection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeSection[key];
    }
  });
});