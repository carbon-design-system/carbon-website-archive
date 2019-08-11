"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

var SideNavItem = function SideNavItem(_ref) {
  var customClassName = _ref.className,
      children = _ref.children;
  var className = (0, _classnames.default)("".concat(prefix, "--side-nav__item"), customClassName);
  return _react.default.createElement("li", {
    className: className
  }, children);
};

SideNavItem.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: _propTypes.default.node.isRequired
};
var _default = SideNavItem;
exports.default = _default;