function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var IconSkeleton = function IconSkeleton(_ref) {
  var style = _ref.style;
  var props = {
    style: style
  };
  return React.createElement("div", _extends({
    className: "".concat(prefix, "--icon--skeleton")
  }, props));
};

IconSkeleton.propTypes = {
  /**
   * The CSS styles.
   */
  style: PropTypes.object
};
export default IconSkeleton;