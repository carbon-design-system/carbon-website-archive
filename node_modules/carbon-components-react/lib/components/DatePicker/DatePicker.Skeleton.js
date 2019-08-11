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

var DatePickerSkeleton = function DatePickerSkeleton(_ref) {
  var range = _ref.range,
      id = _ref.id;

  var dateInput = _react.default.createElement("div", {
    className: "".concat(prefix, "--date-picker-container")
  },
  /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
  _react.default.createElement("label", {
    className: "".concat(prefix, "--label"),
    htmlFor: id
  }), _react.default.createElement("div", {
    className: "".concat(prefix, "--date-picker__input ").concat(prefix, "--skeleton")
  }));

  if (range) {
    return _react.default.createElement("div", {
      className: "".concat(prefix, "--form-item")
    }, _react.default.createElement("div", {
      className: "".concat(prefix, "--date-picker ").concat(prefix, "--date-picker--range ").concat(prefix, "--skeleton")
    }, dateInput, dateInput));
  }

  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--date-picker ").concat(prefix, "--date-picker--short ").concat(prefix, "--date-picker--simple ").concat(prefix, "--skeleton")
  }, dateInput));
};

DatePickerSkeleton.propTypes = {
  /**
   * Specify whether the skeleton should be of range date picker.
   */
  range: _propTypes.default.bool
};
var _default = DatePickerSkeleton;
exports.default = _default;