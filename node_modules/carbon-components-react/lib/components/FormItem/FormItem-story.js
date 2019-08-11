"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _FormItem = _interopRequireDefault(require("./FormItem"));

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
(0, _react2.storiesOf)('FormItem', module).add('Default', function () {
  return _react.default.createElement(_FormItem.default, null, _react.default.createElement(_NumberInput.default, {
    id: "number-input-1",
    hideLabel: true
  }));
}, {
  info: {
    text: 'Form item.'
  }
});