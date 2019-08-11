function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ButtonSkeleton = function ButtonSkeleton(_ref) {
  var _classNames;

  var small = _ref.small,
      href = _ref.href;
  var buttonClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), small), _classNames));
  var commonProps = {
    className: buttonClasses
  };
  var button = React.createElement("button", _extends({}, commonProps, {
    type: "button"
  }));
  var anchor = React.createElement("a", _extends({}, commonProps, {
    href: href,
    role: "button"
  })); // eslint-disable-line

  return href ? anchor : button;
};

ButtonSkeleton.propTypes = {
  /**
   * Specify whether the Button should be a small variant
   */
  small: PropTypes.bool,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes.string
};
ButtonSkeleton.defaultProps = {
  small: false
};
export default ButtonSkeleton;