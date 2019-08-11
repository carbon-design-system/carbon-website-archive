"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prefix = _carbonComponents.settings.prefix;

var IconSkeleton = function IconSkeleton(_ref) {
  var style = _ref.style;
  var props = {
    style: style
  };
  return _react.default.createElement("div", _extends({
    className: "".concat(prefix, "--icon--skeleton")
  }, props));
};

IconSkeleton.propTypes = {
  /**
   * The CSS styles.
   */
  style: _propTypes.default.object
};
var _default = IconSkeleton;
exports.default = _default;