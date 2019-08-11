"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ToolbarDivider = exports.ToolbarOption = exports.ToolbarTitle = exports.ToolbarItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ToolbarSearch = _interopRequireDefault(require("../ToolbarSearch"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "className"]);

  var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--toolbar"), className);
  return _react.default.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

Toolbar.propTypes = {
  /**
   * Specify a collection of ToolbarItem's that should render in the Toolbar
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the containing Toolbar node
   */
  className: _propTypes.default.string
};

var ToolbarItem = function ToolbarItem(_ref2) {
  var children = _ref2.children,
      type = _ref2.type,
      placeHolderText = _ref2.placeHolderText;
  var toolbarItem = type === 'search' ? _react.default.createElement(_ToolbarSearch.default, {
    placeHolderText: placeHolderText
  }) : children;
  return toolbarItem;
};

exports.ToolbarItem = ToolbarItem;
ToolbarItem.propTypes = {
  /**
   * Specify the contents of the ToolbarItem
   */
  children: _propTypes.default.node,

  /**
   * Specify the type of the ToolbarItem. The `search` type will render a
   * `ToolbarSearch` component
   */
  type: _propTypes.default.string,

  /**
   * Specify the placeholder text for the ToolbarSearch component. Useful if
   * `type` is set to 'search'
   */
  placeHolderText: _propTypes.default.string
};
ToolbarItem.defaultProps = {
  placeHolderText: 'Provide placeHolderText'
};

var ToolbarTitle = function ToolbarTitle(_ref3) {
  var title = _ref3.title;
  return _react.default.createElement("li", {
    className: "".concat(prefix, "--toolbar-menu__title")
  }, title);
};

exports.ToolbarTitle = ToolbarTitle;
ToolbarTitle.propTypes = {
  /**
   * Specify the title of the Toolbar
   */
  title: _propTypes.default.string
};

var ToolbarOption = function ToolbarOption(_ref4) {
  var children = _ref4.children;
  return _react.default.createElement("li", {
    className: "".concat(prefix, "--toolbar-menu__option")
  }, children);
};

exports.ToolbarOption = ToolbarOption;
ToolbarOption.propTypes = {
  /**
   * Specify the contents of the ToolbarOption
   */
  children: _propTypes.default.node
};

var ToolbarDivider = function ToolbarDivider() {
  return _react.default.createElement("hr", {
    className: "".concat(prefix, "--toolbar-menu__divider")
  });
};

exports.ToolbarDivider = ToolbarDivider;
var _default = Toolbar;
exports.default = _default;