"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.omit"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var TableRow = function TableRow(props) {
  // Remove unnecessary props if provided to this component, these are
  // only useful in `TableExpandRow`
  var className = (0, _classnames.default)(props.className, _defineProperty({}, "".concat(prefix, "--data-table--selected"), props.isSelected));

  var cleanProps = _objectSpread({}, (0, _lodash.default)(props, ['ariaLabel', 'onExpand', 'isExpanded', 'isSelected']), {
    className: className || undefined
  });

  return _react.default.createElement("tr", cleanProps);
};

TableRow.propTypes = {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string
};
var _default = TableRow;
exports.default = _default;