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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Content = function Content(_ref) {
  var customClassName = _ref.className,
      children = _ref.children,
      tagName = _ref.tagName,
      rest = _objectWithoutProperties(_ref, ["className", "children", "tagName"]);

  var className = (0, _classnames.default)("".concat(prefix, "--content"), customClassName);
  return _react.default.createElement(tagName, _objectSpread({}, rest, {
    className: className
  }), children);
};

Content.propTypes = {
  /**
   * Optionally provide a custom class name that is applied to the container
   */
  className: _propTypes.default.string,

  /**
   * Provide children nodes to be rendered in the content container
   */
  children: _propTypes.default.node,

  /**
   * Optionally specify the tag of the content node. Defaults to `main`
   */
  tagName: _propTypes.default.string
};
Content.defaultProps = {
  tagName: 'main'
};
var _default = Content;
exports.default = _default;