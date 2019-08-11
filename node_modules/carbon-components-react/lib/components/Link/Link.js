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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["children", "className", "href"]);

  var classNames = (0, _classnames.default)("".concat(prefix, "--link"), className);
  return _react.default.createElement("a", _extends({
    href: other.disabled ? null : href,
    className: classNames
  }, other), children);
};

Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: _propTypes.default.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: _propTypes.default.string
};
var _default = Link;
exports.default = _default;