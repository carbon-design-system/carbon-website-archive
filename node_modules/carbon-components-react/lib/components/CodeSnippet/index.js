"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _CodeSnippet2.default;
  }
});

var _CodeSnippet = require("./CodeSnippet.Skeleton");

Object.keys(_CodeSnippet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CodeSnippet[key];
    }
  });
});

var _CodeSnippet2 = _interopRequireDefault(require("./CodeSnippet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }