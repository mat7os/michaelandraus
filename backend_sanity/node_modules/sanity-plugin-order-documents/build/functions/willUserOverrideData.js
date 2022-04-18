"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.willUserOverrideData = void 0;

var _data = require("../data");

// returns true if it looks like using the Order Documents plugin will override existing data (for the given type and field)
var willUserOverrideData = function willUserOverrideData(documents) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _data.DEFAULT_FIELD_VALUE;
  // for speed, test the first 5 entries only
  var iterations = documents.length >= 5 ? 5 : documents.length;

  for (var i = 0; i < iterations; i += 1) {
    var document = documents[i];
    var isFieldBlank = !document[field];
    var isFieldCorrect = document[field] === i;

    if (!isFieldBlank && !isFieldCorrect) {
      return true;
    }
  }

  return false;
};

exports.willUserOverrideData = willUserOverrideData;