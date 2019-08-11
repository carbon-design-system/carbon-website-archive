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

var StructuredListSkeleton = function StructuredListSkeleton(_ref) {
  var _classNames;

  var rowCount = _ref.rowCount,
      border = _ref.border;
  var StructuredListSkeletonClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--structured-list"), true), _defineProperty(_classNames, "".concat(prefix, "--structured-list--border"), border), _classNames));
  var rows = [];

  for (var i = 0; i < rowCount; i++) {
    rows.push(_react.default.createElement("div", {
      className: "".concat(prefix, "--structured-list-row"),
      key: i
    }, _react.default.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    }), _react.default.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    }), _react.default.createElement("div", {
      className: "".concat(prefix, "--structured-list-td")
    })));
  }

  return _react.default.createElement("section", {
    className: StructuredListSkeletonClasses
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--structured-list-thead")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--structured-list-row ").concat(prefix, "--structured-list-row--header-row")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, _react.default.createElement("span", null)), _react.default.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, _react.default.createElement("span", null)), _react.default.createElement("div", {
    className: "".concat(prefix, "--structured-list-th")
  }, _react.default.createElement("span", null)))), _react.default.createElement("div", {
    className: "".concat(prefix, "--structured-list-tbody")
  }, rows));
};

StructuredListSkeleton.propTypes = {
  /**
   * number of table rows
   */
  rowCount: _propTypes.default.number,

  /**
   * Specify whether a border should be added to your StructuredListSkeleton
   */
  border: _propTypes.default.bool
};
StructuredListSkeleton.defaultProps = {
  rowCount: 5,
  border: false
};
var _default = StructuredListSkeleton;
exports.default = _default;