function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash.omit';
import cx from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var TableRow = function TableRow(props) {
  // Remove unnecessary props if provided to this component, these are
  // only useful in `TableExpandRow`
  var className = cx(props.className, _defineProperty({}, "".concat(prefix, "--data-table--selected"), props.isSelected));

  var cleanProps = _objectSpread({}, omit(props, ['ariaLabel', 'onExpand', 'isExpanded', 'isSelected']), {
    className: className || undefined
  });

  return React.createElement("tr", cleanProps);
};

TableRow.propTypes = {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string
};
export default TableRow;