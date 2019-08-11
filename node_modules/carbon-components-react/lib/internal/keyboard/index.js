"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "match", {
  enumerable: true,
  get: function get() {
    return _match.match;
  }
});
Object.defineProperty(exports, "matches", {
  enumerable: true,
  get: function get() {
    return _match.matches;
  }
});
Object.defineProperty(exports, "getCharacterFor", {
  enumerable: true,
  get: function get() {
    return _match.getCharacterFor;
  }
});
Object.defineProperty(exports, "getNextIndex", {
  enumerable: true,
  get: function get() {
    return _navigation.getNextIndex;
  }
});
exports.keys = void 0;

var _keys = _interopRequireWildcard(require("./keys"));

exports.keys = _keys;

var _match = require("./match");

var _navigation = require("./navigation");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }