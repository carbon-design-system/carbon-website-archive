function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import ToggleSmall from '../ToggleSmall';
import ToggleSmallSkeleton from '../ToggleSmall/ToggleSmall.Skeleton';

var toggleProps = function toggleProps() {
  var _ref;

  return _ref = {
    className: 'some-class',
    labelText: text('Label for toggle button input (labelText)', '')
  }, _defineProperty(_ref, 'aria-label', text('ARIA label of the toggle (aria-label)', '')), _defineProperty(_ref, "labelA", text('Label for untoggled state (labelA)', '')), _defineProperty(_ref, "labelB", text('Label for toggled state (labelB)', '')), _defineProperty(_ref, "disabled", boolean('Disabled (disabled)', false)), _defineProperty(_ref, "onChange", action('onChange')), _defineProperty(_ref, "onToggle", action('onToggle')), _ref;
};

storiesOf('ToggleSmall', module).addDecorator(withKnobs).add('toggled', function () {
  return React.createElement(ToggleSmall, _extends({
    defaultToggled: true
  }, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
}, {
  info: {
    text: "\n            Toggles are controls that are used to quickly switch between two possible states. The example below shows\n            an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n            Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n            prop will only set the value initially. This example has defaultToggled set to true. Small toggles may be used\n            when there is not enough space for a regular sized toggle. This issue is most commonly found in tables.\n          "
  }
}).add('untoggled', function () {
  return React.createElement(ToggleSmall, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
}, {
  info: {
    text: "\n            Toggles are controls that are used to quickly switch between two possible states. The example below shows\n            an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n            Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n            prop will only set the value initially. Small toggles may be used when there is not enough space for a regular sized toggle. This issue is most\n            commonly found in tables.\n          "
  }
}).add('skeleton', function () {
  return React.createElement(ToggleSmallSkeleton, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});