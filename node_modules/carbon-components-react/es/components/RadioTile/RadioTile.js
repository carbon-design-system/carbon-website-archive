function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import uid from '../../tools/uniqueId';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { CheckmarkFilled16 as CheckmarkFilled } from '@carbon/icons-react';
import { keys, matches } from '../../internal/keyboard';
var prefix = settings.prefix;

var RadioTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioTile, _React$Component);

  function RadioTile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioTile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "uid", _this.props.id || uid());

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.props.onChange(_this.props.value, _this.props.name, evt);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (matches(evt, [keys.Enter, keys.Space])) {
        evt.preventDefault();

        _this.props.onChange(_this.props.value, _this.props.name, evt);
      }
    });

    return _this;
  }

  _createClass(RadioTile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          iconDescription = _this$props.iconDescription,
          other = _objectWithoutProperties(_this$props, ["children", "className", "iconDescription"]);

      var classes = classNames(className, "".concat(prefix, "--tile"), "".concat(prefix, "--tile--selectable"), _defineProperty({}, "".concat(prefix, "--tile--is-selected"), this.props.checked));
      return React.createElement(React.Fragment, null, React.createElement("input", _extends({}, other, {
        type: "radio",
        className: "".concat(prefix, "--tile-input"),
        onChange: this.handleChange,
        id: this.uid
      })), React.createElement("label", {
        htmlFor: this.uid,
        className: classes,
        tabIndex: this.props.tabIndex,
        onKeyDown: this.handleKeyDown
      }, React.createElement("div", {
        className: "".concat(prefix, "--tile__checkmark")
      }, React.createElement(CheckmarkFilled, {
        "aria-label": iconDescription
      }, iconDescription && React.createElement("title", null, iconDescription))), React.createElement("div", {
        className: "".concat(prefix, "--tile-content")
      }, children)));
    }
  }]);

  return RadioTile;
}(React.Component);

_defineProperty(RadioTile, "propTypes", {
  /**
   * `true` if this tile should be selected.
   */
  checked: PropTypes.bool,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * `true` if the `<input>` should be checked at initialization.
   */
  defaultChecked: PropTypes.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes.string,

  /**
   * The `name` of the `<input>`.
   */
  name: PropTypes.string,

  /**
   * The description of the tile checkmark icon.
   */
  iconDescription: PropTypes.string,

  /**
   * The handler of the massaged `change` event on the `<input>`.
   */
  onChange: PropTypes.func,

  /**
   * The `value` of the `<input>`.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  /**
   * Specify the tab index of the wrapper element
   */
  tabIndex: PropTypes.number
});

_defineProperty(RadioTile, "defaultProps", {
  iconDescription: 'Tile checkmark',
  onChange: function onChange() {},
  tabIndex: 0
});

export { RadioTile as default };