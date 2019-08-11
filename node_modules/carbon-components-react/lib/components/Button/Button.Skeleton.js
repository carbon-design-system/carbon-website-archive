"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var ButtonSkeleton = function ButtonSkeleton(_ref) {
  var _classNames;

  var small = _ref.small,
      href = _ref.href;
  var buttonClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), small), _classNames));
  var commonProps = {
    className: buttonClasses
  };

  var button = _react.default.createElement("button", _extends({}, commonProps, {
    type: "button"
  }));

  var anchor = _react.default.createElement("a", _extends({}, commonProps, {
    href: href,
    role: "button"
  })); // eslint-disable-line


  return href ? anchor : button;
};

ButtonSkeleton.propTypes = {
  /**
   * Specify whether the Button should be a small variant
   */
  small: _propTypes.default.bool,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: _propTypes.default.string
};
ButtonSkeleton.defaultProps = {
  small: false
};
var _default = ButtonSkeleton;
exports.default = _default;