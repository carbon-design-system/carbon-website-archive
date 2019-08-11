function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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
import React, { Component } from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { Close20, ErrorFilled20, CheckmarkFilled20, WarningFilled20 } from '@carbon/icons-react';
import Button from '../Button';
var prefix = settings.prefix;
export var NotificationActionButton =
/*#__PURE__*/
function (_Component) {
  _inherits(NotificationActionButton, _Component);

  function NotificationActionButton() {
    _classCallCheck(this, NotificationActionButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotificationActionButton).apply(this, arguments));
  }

  _createClass(NotificationActionButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick,
          other = _objectWithoutProperties(_this$props, ["children", "className", "onClick"]);

      var actionButtonClasses = classNames(className, "".concat(prefix, "--inline-notification__action-button"));
      return React.createElement(Button, _extends({
        className: actionButtonClasses,
        kind: "ghost",
        onClick: onClick,
        size: "small"
      }, other), children);
    }
  }]);

  return NotificationActionButton;
}(Component);

_defineProperty(NotificationActionButton, "propTypes", {
  /**
   * Specify an optional className to be applied to the notification action button
   */
  className: PropTypes.string,

  /**
   * Specify the content of the notification action button.
   */
  children: PropTypes.node,

  /**
   * Optionally specify a click handler for the notification action button.
   */
  onClick: PropTypes.func
});

export var NotificationButton =
/*#__PURE__*/
function (_Component2) {
  _inherits(NotificationButton, _Component2);

  function NotificationButton() {
    _classCallCheck(this, NotificationButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotificationButton).apply(this, arguments));
  }

  _createClass(NotificationButton, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props2 = this.props,
          ariaLabel = _this$props2.ariaLabel,
          className = _this$props2.className,
          iconDescription = _this$props2.iconDescription,
          type = _this$props2.type,
          IconTag = _this$props2.renderIcon,
          name = _this$props2.name,
          notificationType = _this$props2.notificationType,
          other = _objectWithoutProperties(_this$props2, ["ariaLabel", "className", "iconDescription", "type", "renderIcon", "name", "notificationType"]);

      var buttonClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--toast-notification__close-button"), notificationType === 'toast'), _defineProperty(_classNames, "".concat(prefix, "--inline-notification__close-button"), notificationType === 'inline'), _classNames), className);
      var iconClasses = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--toast-notification__close-icon"), notificationType === 'toast'), _defineProperty(_classNames2, "".concat(prefix, "--inline-notification__close-icon"), notificationType === 'inline'), _classNames2));

      var NotificationButtonIcon = function () {
        if (Object(IconTag) === IconTag) {
          return React.createElement(IconTag, {
            "aria-label": ariaLabel,
            className: iconClasses,
            name: name
          });
        }

        return null;
      }();

      return React.createElement("button", _extends({}, other, {
        type: type,
        "aria-label": iconDescription,
        title: iconDescription,
        className: buttonClasses
      }), NotificationButtonIcon);
    }
  }]);

  return NotificationButton;
}(Component);

_defineProperty(NotificationButton, "propTypes", {
  /**
   * Specify an optional className to be applied to the notification button
   */
  className: PropTypes.string,

  /**
   * Specify a label to be read by screen readers on the notification button
   */
  ariaLabel: PropTypes.string,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes.string,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Specify an optional icon for the Button through a string,
   * if something but regular "close" icon is desirable
   */
  name: PropTypes.string,

  /**
   * Specify the notification type
   */
  notificationType: PropTypes.oneOf(['toast', 'inline'])
});

_defineProperty(NotificationButton, "defaultProps", {
  ariaLabel: 'close notification',
  // TODO: deprecate this prop
  notificationType: 'toast',
  type: 'button',
  iconDescription: 'close icon',
  renderIcon: Close20
});

export var NotificationTextDetails =
/*#__PURE__*/
function (_Component3) {
  _inherits(NotificationTextDetails, _Component3);

  function NotificationTextDetails() {
    _classCallCheck(this, NotificationTextDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(NotificationTextDetails).apply(this, arguments));
  }

  _createClass(NotificationTextDetails, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          title = _this$props3.title,
          subtitle = _this$props3.subtitle,
          caption = _this$props3.caption,
          notificationType = _this$props3.notificationType,
          other = _objectWithoutProperties(_this$props3, ["title", "subtitle", "caption", "notificationType"]);

      if (notificationType === 'toast') {
        return React.createElement("div", _extends({}, other, {
          className: "".concat(prefix, "--toast-notification__details")
        }), React.createElement("h3", {
          className: "".concat(prefix, "--toast-notification__title")
        }, title), React.createElement("div", {
          className: "".concat(prefix, "--toast-notification__subtitle")
        }, subtitle), React.createElement("div", {
          className: "".concat(prefix, "--toast-notification__caption")
        }, caption), this.props.children);
      }

      if (notificationType === 'inline') {
        return React.createElement("div", _extends({}, other, {
          className: "".concat(prefix, "--inline-notification__text-wrapper")
        }), React.createElement("p", {
          className: "".concat(prefix, "--inline-notification__title")
        }, title), React.createElement("div", {
          className: "".concat(prefix, "--inline-notification__subtitle")
        }, subtitle), this.props.children);
      }
    }
  }]);

  return NotificationTextDetails;
}(Component);

_defineProperty(NotificationTextDetails, "propTypes", {
  /**
   * Pass in the children that will be rendered in NotificationTextDetails
   */
  children: PropTypes.node,

  /**
   * Specify the title
   */
  title: PropTypes.string,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * Specify the caption
   */
  caption: PropTypes.node,

  /**
   * Specify the notification type
   */
  notificationType: PropTypes.oneOf(['toast', 'inline'])
});

_defineProperty(NotificationTextDetails, "defaultProps", {
  title: 'title',
  caption: 'caption',
  notificationType: 'toast'
});

var useIcon = function useIcon(kindProp) {
  return {
    error: ErrorFilled20,
    success: CheckmarkFilled20,
    warning: WarningFilled20
  }[kindProp];
};

var NotificationIcon = function NotificationIcon(_ref) {
  var notificationType = _ref.notificationType,
      kind = _ref.kind,
      iconDescription = _ref.iconDescription;
  var NotificationIconX = useIcon(kind);
  return !NotificationIconX ? null : React.createElement(NotificationIconX, {
    className: "".concat(prefix, "--").concat(notificationType, "-notification__icon")
  }, React.createElement("title", null, iconDescription));
};

export var ToastNotification =
/*#__PURE__*/
function (_Component4) {
  _inherits(ToastNotification, _Component4);

  function ToastNotification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ToastNotification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ToastNotification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: true
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseButtonClick", function (evt) {
      _this.setState({
        open: false
      });

      _this.props.onCloseButtonClick(evt);
    });

    return _this;
  }

  _createClass(ToastNotification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.timeout) {
        setTimeout(function () {
          _this2.handleCloseButtonClick();
        }, this.props.timeout);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames3;

      if (!this.state.open) {
        return null;
      }

      var _this$props4 = this.props,
          role = _this$props4.role,
          notificationType = _this$props4.notificationType,
          onCloseButtonClick = _this$props4.onCloseButtonClick,
          iconDescription = _this$props4.iconDescription,
          className = _this$props4.className,
          caption = _this$props4.caption,
          subtitle = _this$props4.subtitle,
          title = _this$props4.title,
          kind = _this$props4.kind,
          lowContrast = _this$props4.lowContrast,
          hideCloseButton = _this$props4.hideCloseButton,
          other = _objectWithoutProperties(_this$props4, ["role", "notificationType", "onCloseButtonClick", "iconDescription", "className", "caption", "subtitle", "title", "kind", "lowContrast", "hideCloseButton"]);

      var classes = classNames("".concat(prefix, "--toast-notification"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "--toast-notification--low-contrast"), lowContrast), _defineProperty(_classNames3, "".concat(prefix, "--toast-notification--").concat(kind), kind), _classNames3), className);
      return React.createElement("div", _extends({}, other, {
        role: role,
        kind: kind,
        className: classes
      }), React.createElement(NotificationIcon, {
        notificationType: notificationType,
        kind: kind,
        iconDescription: iconDescription
      }), React.createElement(NotificationTextDetails, {
        title: title,
        subtitle: subtitle,
        caption: caption,
        notificationType: notificationType
      }, this.props.children), !hideCloseButton && React.createElement(NotificationButton, {
        iconDescription: iconDescription,
        notificationType: notificationType,
        onClick: this.handleCloseButtonClick
      }));
    }
  }]);

  return ToastNotification;
}(Component);

_defineProperty(ToastNotification, "propTypes", {
  /**
   * Pass in the children that will be rendered within the ToastNotification
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify what state the notification represents
   */
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the ToastNotification.
   */
  lowContrast: PropTypes.bool,

  /**
   * Specify the title
   */
  title: PropTypes.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Specify the caption
   */
  caption: PropTypes.node,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * By default, this value is "toast". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool,

  /**
   * Specify an optional duration the notification should be closed in
   */
  timeout: PropTypes.number
});

_defineProperty(ToastNotification, "defaultProps", {
  kind: 'error',
  title: 'provide a title',
  caption: 'provide a caption',
  role: 'alert',
  notificationType: 'toast',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false,
  timeout: 0
});

export var InlineNotification =
/*#__PURE__*/
function (_Component5) {
  _inherits(InlineNotification, _Component5);

  function InlineNotification() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, InlineNotification);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(InlineNotification)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      open: true
    });

    _defineProperty(_assertThisInitialized(_this3), "handleCloseButtonClick", function (evt) {
      _this3.setState({
        open: false
      });

      _this3.props.onCloseButtonClick(evt);
    });

    return _this3;
  }

  _createClass(InlineNotification, [{
    key: "render",
    value: function render() {
      var _classNames4;

      if (!this.state.open) {
        return null;
      }

      var _this$props5 = this.props,
          actions = _this$props5.actions,
          role = _this$props5.role,
          notificationType = _this$props5.notificationType,
          onCloseButtonClick = _this$props5.onCloseButtonClick,
          iconDescription = _this$props5.iconDescription,
          className = _this$props5.className,
          subtitle = _this$props5.subtitle,
          title = _this$props5.title,
          kind = _this$props5.kind,
          lowContrast = _this$props5.lowContrast,
          hideCloseButton = _this$props5.hideCloseButton,
          other = _objectWithoutProperties(_this$props5, ["actions", "role", "notificationType", "onCloseButtonClick", "iconDescription", "className", "subtitle", "title", "kind", "lowContrast", "hideCloseButton"]);

      var classes = classNames("".concat(prefix, "--inline-notification"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefix, "--inline-notification--low-contrast"), lowContrast), _defineProperty(_classNames4, "".concat(prefix, "--inline-notification--").concat(kind), kind), _classNames4), className);
      return React.createElement("div", _extends({}, other, {
        role: role,
        kind: kind,
        className: classes
      }), React.createElement("div", {
        className: "".concat(prefix, "--inline-notification__details")
      }, React.createElement(NotificationIcon, {
        notificationType: notificationType,
        kind: kind,
        iconDescription: iconDescription
      }), React.createElement(NotificationTextDetails, {
        title: title,
        subtitle: subtitle,
        notificationType: notificationType
      }, this.props.children)), actions, !hideCloseButton && React.createElement(NotificationButton, {
        iconDescription: iconDescription,
        notificationType: notificationType,
        onClick: this.handleCloseButtonClick
      }));
    }
  }]);

  return InlineNotification;
}(Component);

_defineProperty(InlineNotification, "propTypes", {
  /**
   * Pass in the action nodes that will be rendered within the InlineNotification
   */
  actions: PropTypes.node,

  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: PropTypes.string,

  /**
   * Specify what state the notification represents
   */
  kind: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
   */
  lowContrast: PropTypes.bool,

  /**
   * Specify the title
   */
  title: PropTypes.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: PropTypes.node,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: PropTypes.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * By default, this value is "inline". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: PropTypes.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: PropTypes.bool
});

_defineProperty(InlineNotification, "defaultProps", {
  role: 'alert',
  notificationType: 'inline',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false
});