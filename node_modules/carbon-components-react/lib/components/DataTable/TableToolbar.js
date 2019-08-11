"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

var TableToolbar = function TableToolbar(_ref) {
  var children = _ref.children;
  return _react.default.createElement("section", {
    "aria-label": "data table toolbar",
    className: "".concat(prefix, "--table-toolbar")
  }, children);
};

var _default = TableToolbar;
exports.default = _default;