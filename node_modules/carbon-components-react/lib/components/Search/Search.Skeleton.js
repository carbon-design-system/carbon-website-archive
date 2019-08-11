"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var SearchSkeleton =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchSkeleton, _Component);

  function SearchSkeleton() {
    _classCallCheck(this, SearchSkeleton);

    return _possibleConstructorReturn(this, _getPrototypeOf(SearchSkeleton).apply(this, arguments));
  }

  _createClass(SearchSkeleton, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          small = _this$props.small,
          id = _this$props.id;
      var searchClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--search--xl"), !small), _defineProperty(_classNames, "".concat(prefix, "--search--sm"), small), _classNames));
      return _react.default.createElement("div", {
        className: searchClasses,
        role: "search"
      },
      /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
      _react.default.createElement("label", {
        htmlFor: id,
        className: "".concat(prefix, "--label")
      }), _react.default.createElement("div", {
        className: "".concat(prefix, "--search-input")
      }));
    }
  }]);

  return SearchSkeleton;
}(_react.Component);

exports.default = SearchSkeleton;

_defineProperty(SearchSkeleton, "propTypes", {
  /**
   * Specify whether the Search should be a small variant
   */
  small: _propTypes.default.bool
});

_defineProperty(SearchSkeleton, "defaultProps", {
  small: false
});