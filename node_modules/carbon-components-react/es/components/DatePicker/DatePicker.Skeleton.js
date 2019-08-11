/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var DatePickerSkeleton = function DatePickerSkeleton(_ref) {
  var range = _ref.range,
      id = _ref.id;
  var dateInput = React.createElement("div", {
    className: "".concat(prefix, "--date-picker-container")
  },
  /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
  React.createElement("label", {
    className: "".concat(prefix, "--label"),
    htmlFor: id
  }), React.createElement("div", {
    className: "".concat(prefix, "--date-picker__input ").concat(prefix, "--skeleton")
  }));

  if (range) {
    return React.createElement("div", {
      className: "".concat(prefix, "--form-item")
    }, React.createElement("div", {
      className: "".concat(prefix, "--date-picker ").concat(prefix, "--date-picker--range ").concat(prefix, "--skeleton")
    }, dateInput, dateInput));
  }

  return React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, React.createElement("div", {
    className: "".concat(prefix, "--date-picker ").concat(prefix, "--date-picker--short ").concat(prefix, "--date-picker--simple ").concat(prefix, "--skeleton")
  }, dateInput));
};

DatePickerSkeleton.propTypes = {
  /**
   * Specify whether the skeleton should be of range date picker.
   */
  range: PropTypes.bool
};
export default DatePickerSkeleton;