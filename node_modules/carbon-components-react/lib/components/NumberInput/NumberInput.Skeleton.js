"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var NumberInputSkeleton = function NumberInputSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
  _react.default.createElement("label", {
    className: "".concat(prefix, "--label ").concat(prefix, "--skeleton"),
    htmlFor: id
  });
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, _react.default.createElement("div", {
    className: "".concat(prefix, "--number ").concat(prefix, "--skeleton")
  }));
};

NumberInputSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: _propTypes.default.bool
};
var _default = NumberInputSkeleton;
exports.default = _default;