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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var DropdownSkeleton = function DropdownSkeleton(_ref) {
  var _classNames;

  var inline = _ref.inline;
  var wrapperClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--dropdown-v2"), true), _defineProperty(_classNames, "".concat(prefix, "--list-box"), true), _defineProperty(_classNames, "".concat(prefix, "--form-item"), true), _defineProperty(_classNames, "".concat(prefix, "--list-box--inline"), inline), _classNames));
  return _react.default.createElement("div", {
    className: wrapperClasses
  }, _react.default.createElement("div", {
    role: "button",
    className: "".concat(prefix, "--list-box__field")
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--list-box__label")
  })));
};

DropdownSkeleton.propTypes = {
  /**
   * Specify whether you want the inline version of this control
   */
  inline: _propTypes.default.bool
};
DropdownSkeleton.defaultProps = {
  inline: false
};
var _default = DropdownSkeleton;
exports.default = _default;