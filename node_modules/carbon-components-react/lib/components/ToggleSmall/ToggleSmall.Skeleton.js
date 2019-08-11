"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var prefix = _carbonComponents.settings.prefix;

var ToggleSmallSkeleton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ToggleSmallSkeleton, _React$Component);

  function ToggleSmallSkeleton() {
    _classCallCheck(this, ToggleSmallSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToggleSmallSkeleton).apply(this, arguments));
  }

  _createClass(ToggleSmallSkeleton, [{
    key: "render",
    value: function render() {
      var id = this.props.id;
      return _react.default.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, _react.default.createElement("input", {
        type: "checkbox",
        id: id,
        className: "".concat(prefix, "--toggle ").concat(prefix, "--toggle--small ").concat(prefix, "--skeleton")
      }), _react.default.createElement("label", {
        className: "".concat(prefix, "--toggle__label ").concat(prefix, "--skeleton"),
        htmlFor: id
      }, _react.default.createElement("span", {
        className: "".concat(prefix, "--toggle__appearance")
      }, _react.default.createElement("svg", {
        className: "".concat(prefix, "--toggle__check"),
        width: "6px",
        height: "5px",
        viewBox: "0 0 6 5"
      }, _react.default.createElement("path", {
        d: "M2.2403 2.7299L4.9245 0 6 1.1117 2.2384 5 0 2.6863 1.0612 1.511z"
      })))));
    }
  }]);

  return ToggleSmallSkeleton;
}(_react.default.Component);

exports.default = ToggleSmallSkeleton;