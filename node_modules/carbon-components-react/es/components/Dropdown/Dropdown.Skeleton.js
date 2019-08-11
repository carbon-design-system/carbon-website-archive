function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var DropdownSkeleton = function DropdownSkeleton(_ref) {
  var _classNames;

  var inline = _ref.inline;
  var wrapperClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--dropdown-v2"), true), _defineProperty(_classNames, "".concat(prefix, "--list-box"), true), _defineProperty(_classNames, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames, "".concat(prefix, "--list-box--inline"), inline), _classNames));
  return React.createElement("div", {
    className: wrapperClasses
  }, React.createElement("div", {
    role: "button",
    className: "".concat(prefix, "--list-box__field")
  }, React.createElement("span", {
    className: "".concat(prefix, "--list-box__label")
  })));
};

DropdownSkeleton.propTypes = {
  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes.bool
};
DropdownSkeleton.defaultProps = {
  inline: false
};
export default DropdownSkeleton;