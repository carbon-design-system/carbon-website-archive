"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _createChainableTypeChecker = _interopRequireDefault(require("./tools/createChainableTypeChecker"));

var _getDisplayName = _interopRequireDefault(require("./tools/getDisplayName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * `childrenOf` is used for asserting that the children of a given React
 * component are of a given set of types. Currently, this will work with types
 * that are Stateless Functional and Class-based components
 *
 * This prop validator also supports chaining through `isRequired`
 */
var childrenOf = function childrenOf(expectedChildTypes) {
  // Support both React elements and components by using `type` if it exists
  var expectedDisplayNames = expectedChildTypes.map(function (child) {
    return (0, _getDisplayName.default)(child.type || child);
  }).join(', ');

  var validate = function validate(props, propName, componentName) {
    _react.Children.forEach(props[propName], function (child) {
      if (!child) {
        return;
      }

      var childDisplayName = (0, _getDisplayName.default)(child.type || child);

      if (!expectedChildTypes.includes(child.type)) {
        throw new Error("Invalid prop `children` of type `".concat(childDisplayName, "` ") + "supplied to `".concat(componentName, "`, expected each child to be one ") + "of: `[".concat(expectedDisplayNames, "]`."));
      }
    });
  };

  return (0, _createChainableTypeChecker.default)(validate);
};

var _default = childrenOf;
exports.default = _default;