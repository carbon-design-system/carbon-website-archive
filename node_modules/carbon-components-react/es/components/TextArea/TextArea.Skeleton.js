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

var TextAreaSkeleton = function TextAreaSkeleton(_ref) {
  var hideLabel = _ref.hideLabel,
      id = _ref.id;
  var label = hideLabel ? null : // eslint-disable-next-line jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control
  React.createElement("label", {
    className: "".concat(prefix, "--label ").concat(prefix, "--skeleton"),
    htmlFor: id
  });
  return React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, label, React.createElement("div", {
    className: "".concat(prefix, "--skeleton ").concat(prefix, "--text-area")
  }));
};

TextAreaSkeleton.propTypes = {
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool
};
export default TextAreaSkeleton;