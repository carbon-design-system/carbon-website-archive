"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Toggle = _interopRequireDefault(require("../Toggle"));

var _Toggle2 = _interopRequireDefault(require("../Toggle/Toggle.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toggleProps = function toggleProps() {
  var _ref;

  return _ref = {
    className: 'some-class',
    labelText: (0, _addonKnobs.text)('Label for toggle button input (labelText)', '')
  }, _defineProperty(_ref, 'aria-label', (0, _addonKnobs.text)('ARIA label of the toggle (aria-label)', '')), _defineProperty(_ref, "labelA", (0, _addonKnobs.text)('Label for untoggled state (labelA)', 'Off')), _defineProperty(_ref, "labelB", (0, _addonKnobs.text)('Label for toggled state (labelB)', 'On')), _defineProperty(_ref, "disabled", (0, _addonKnobs.boolean)('Disabled (disabled)', false)), _defineProperty(_ref, "onChange", (0, _addonActions.action)('onChange')), _defineProperty(_ref, "onToggle", (0, _addonActions.action)('onToggle')), _ref;
};

(0, _react2.storiesOf)('Toggle', module).addDecorator(_addonKnobs.withKnobs).add('toggled', function () {
  return _react.default.createElement(_Toggle.default, _extends({
    defaultToggled: true
  }, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
}, {
  info: {
    text: "\n            Toggles are controls that are used to quickly switch between two possible states. The example below shows\n            an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n            Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n            prop will only set the value initially. This example has defaultToggled set to true.\n          "
  }
}).add('untoggled', function () {
  return _react.default.createElement(_Toggle.default, _extends({}, toggleProps(), {
    className: "some-class",
    id: "toggle-1"
  }));
}, {
  info: {
    text: "\n            Toggles are controls that are used to quickly switch between two possible states. The example below shows\n            an uncontrolled Toggle component. To use the Toggle component as a controlled component, set the toggled property.\n            Setting the toggled property will allow you to change the value dynamically, whereas setting the defaultToggled\n            prop will only set the value initially. This example has defaultToggled set to false.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement(_Toggle2.default, null);
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});