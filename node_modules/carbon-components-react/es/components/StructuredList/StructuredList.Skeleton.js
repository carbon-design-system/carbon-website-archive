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

var StructuredListSkeleton = function StructuredListSkeleton(_ref) {
  var _classNames;

  var rowCount = _ref.rowCount,
      border = _ref.border;
  var StructuredListSkeletonClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--structured-list"), true), _defineProperty(_classNames, "".concat(prefix, "--structured-list--border"), border), _classNames));
  var rows = [];

  for (var i = 0; i < rowCount; i++) {
    rows.push(React.createElement("div", {
      className: "".concat(prefix, "--structured-list-row"),
      key: i
    }, React.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    }), React.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    }), React.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    })));
  }

  return React.createElement("section", {
    className: StructuredListSkeletonClasses
  }, React.createElement("div", {
    className: "".concat(prefix, "--structured-list-thead")
  }, React.createElement("div", {
    className: "".concat(prefix, "--structured-list-row ").concat(prefix, "--structured-list-row--header-row")
  }, React.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, React.createElement("span", null)), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, React.createElement("span", null)), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, React.createElement("span", null)))), React.createElement("div", {
    className: "".concat(prefix, "--structured-list-tbody")
  }, rows));
};

StructuredListSkeleton.propTypes = {
  /**
   * number of table rows
   */
  rowCount: PropTypes.number,

  /**
   * Specify whether a border should be added to your StructuredListSkeleton
   */
  border: PropTypes.bool
};
StructuredListSkeleton.defaultProps = {
  rowCount: 5,
  border: false
};
export default StructuredListSkeleton;