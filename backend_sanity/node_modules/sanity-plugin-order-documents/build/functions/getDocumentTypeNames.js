"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocumentTypeNames = void 0;

var _schema = _interopRequireDefault(require("part:@sanity/base/schema"));

var _data = require("../data");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getDocumentTypeNames = function getDocumentTypeNames() {
  var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _data.DEFAULT_FIELD_VALUE;
  return _schema["default"].getTypeNames().reduce(function (array, typeName) {
    var _schema$get = _schema["default"].get(typeName),
        name = _schema$get.name,
        title = _schema$get.title,
        type = _schema$get.type,
        fields = _schema$get.fields;

    var isDocument = type && type.name === "document";
    var isSanity = name && name.startsWith("sanity.");
    var hasOrderField = fields && fields.filter(function (_ref) {
      var name = _ref.name;
      return name === field;
    }).length > 0;
    var hiddenNumberFields = [];

    if (isDocument && !isSanity && hasOrderField) {
      var _iterator = _createForOfIteratorHelper(fields),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _step.value,
              name = _step$value.name,
              type = _step$value.type;
          var isHidden = type && type.hidden;
          var isNumber = type && type.name === "number";

          if (isHidden && isNumber && array.findIndex(function (field) {
            return field.name === name;
          }) === -1) {
            hiddenNumberFields.push({
              name: name,
              title: type.title
            });
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      array.push({
        name: name,
        title: title || name,
        fields: hiddenNumberFields
      });
    }

    return array;
  }, []);
};

exports.getDocumentTypeNames = getDocumentTypeNames;