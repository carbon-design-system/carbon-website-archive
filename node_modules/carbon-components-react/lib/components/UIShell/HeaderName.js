"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Link = _interopRequireWildcard(require("./Link"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var selectorPrefix = _carbonComponents.settings.prefix;

var HeaderName = function HeaderName(_ref) {
  var children = _ref.children,
      customClassName = _ref.className,
      prefix = _ref.prefix,
      href = _ref.href,
      rest = _objectWithoutProperties(_ref, ["children", "className", "prefix", "href"]);

  var className = (0, _classnames.default)("".concat(selectorPrefix, "--header__name"), customClassName);
  return _react.default.createElement(_Link.default, _extends({}, rest, {
    className: className,
    href: href
  }), prefix && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("span", {
    className: "".concat(selectorPrefix, "--header__name--prefix")
  }, prefix), "\xA0"), children);
};

HeaderName.propTypes = _objectSpread({}, _Link.LinkPropTypes, {
  /**
   * Pass in children that are either a string or can be read as a string by
   * screen readers
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: _propTypes.default.string,

  /**
   * Optionally specify a prefix to your header name. Useful for companies, for
   * example: IBM [Product Name] versus solely [Product Name]
   */
  prefix: _propTypes.default.string,

  /**
   * Provide an href for the name to link to
   */
  href: _propTypes.default.string
});
HeaderName.defaultProps = {
  prefix: 'IBM'
};
var _default = HeaderName;
exports.default = _default;