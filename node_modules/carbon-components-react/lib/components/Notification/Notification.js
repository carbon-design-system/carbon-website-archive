"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineNotification = exports.ToastNotification = exports.NotificationTextDetails = exports.NotificationButton = exports.NotificationActionButton = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prefix = _carbonComponents.settings.prefix;

var NotificationActionButton =
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

      var actionButtonClasses = (0, _classnames.default)(className, "".concat(prefix, "--inline-notification__action-button"));
      return _react.default.createElement(_Button.default, _extends({
        className: actionButtonClasses,
        kind: "ghost",
        onClick: onClick,
        size: "small"
      }, other), children);
    }
  }]);

  return NotificationActionButton;
}(_react.Component);

exports.NotificationActionButton = NotificationActionButton;

_defineProperty(NotificationActionButton, "propTypes", {
  /**
   * Specify an optional className to be applied to the notification action button
   */
  className: _propTypes.default.string,

  /**
   * Specify the content of the notification action button.
   */
  children: _propTypes.default.node,

  /**
   * Optionally specify a click handler for the notification action button.
   */
  onClick: _propTypes.default.func
});

var NotificationButton =
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

      var buttonClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--toast-notification__close-button"), notificationType === 'toast'), _defineProperty(_classNames, "".concat(prefix, "--inline-notification__close-button"), notificationType === 'inline'), _classNames), className);
      var iconClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--toast-notification__close-icon"), notificationType === 'toast'), _defineProperty(_classNames2, "".concat(prefix, "--inline-notification__close-icon"), notificationType === 'inline'), _classNames2));

      var NotificationButtonIcon = function () {
        if (Object(IconTag) === IconTag) {
          return _react.default.createElement(IconTag, {
            "aria-label": ariaLabel,
            className: iconClasses,
            name: name
          });
        }

        return null;
      }();

      return _react.default.createElement("button", _extends({}, other, {
        type: type,
        "aria-label": iconDescription,
        title: iconDescription,
        className: buttonClasses
      }), NotificationButtonIcon);
    }
  }]);

  return NotificationButton;
}(_react.Component);

exports.NotificationButton = NotificationButton;

_defineProperty(NotificationButton, "propTypes", {
  /**
   * Specify an optional className to be applied to the notification button
   */
  className: _propTypes.default.string,

  /**
   * Specify a label to be read by screen readers on the notification button
   */
  ariaLabel: _propTypes.default.string,

  /**
   * Optional prop to specify the type of the Button
   */
  type: _propTypes.default.string,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Specify an optional icon for the Button through a string,
   * if something but regular "close" icon is desirable
   */
  name: _propTypes.default.string,

  /**
   * Specify the notification type
   */
  notificationType: _propTypes.default.oneOf(['toast', 'inline'])
});

_defineProperty(NotificationButton, "defaultProps", {
  ariaLabel: 'close notification',
  // TODO: deprecate this prop
  notificationType: 'toast',
  type: 'button',
  iconDescription: 'close icon',
  renderIcon: _iconsReact.Close20
});

var NotificationTextDetails =
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
        return _react.default.createElement("div", _extends({}, other, {
          className: "".concat(prefix, "--toast-notification__details")
        }), _react.default.createElement("h3", {
          className: "".concat(prefix, "--toast-notification__title")
        }, title), _react.default.createElement("div", {
          className: "".concat(prefix, "--toast-notification__subtitle")
        }, subtitle), _react.default.createElement("div", {
          className: "".concat(prefix, "--toast-notification__caption")
        }, caption), this.props.children);
      }

      if (notificationType === 'inline') {
        return _react.default.createElement("div", _extends({}, other, {
          className: "".concat(prefix, "--inline-notification__text-wrapper")
        }), _react.default.createElement("p", {
          className: "".concat(prefix, "--inline-notification__title")
        }, title), _react.default.createElement("div", {
          className: "".concat(prefix, "--inline-notification__subtitle")
        }, subtitle), this.props.children);
      }
    }
  }]);

  return NotificationTextDetails;
}(_react.Component);

exports.NotificationTextDetails = NotificationTextDetails;

_defineProperty(NotificationTextDetails, "propTypes", {
  /**
   * Pass in the children that will be rendered in NotificationTextDetails
   */
  children: _propTypes.default.node,

  /**
   * Specify the title
   */
  title: _propTypes.default.string,

  /**
   * Specify the sub-title
   */
  subtitle: _propTypes.default.node,

  /**
   * Specify the caption
   */
  caption: _propTypes.default.node,

  /**
   * Specify the notification type
   */
  notificationType: _propTypes.default.oneOf(['toast', 'inline'])
});

_defineProperty(NotificationTextDetails, "defaultProps", {
  title: 'title',
  caption: 'caption',
  notificationType: 'toast'
});

var useIcon = function useIcon(kindProp) {
  return {
    error: _iconsReact.ErrorFilled20,
    success: _iconsReact.CheckmarkFilled20,
    warning: _iconsReact.WarningFilled20
  }[kindProp];
};

var NotificationIcon = function NotificationIcon(_ref) {
  var notificationType = _ref.notificationType,
      kind = _ref.kind,
      iconDescription = _ref.iconDescription;
  var NotificationIconX = useIcon(kind);
  return !NotificationIconX ? null : _react.default.createElement(NotificationIconX, {
    className: "".concat(prefix, "--").concat(notificationType, "-notification__icon")
  }, _react.default.createElement("title", null, iconDescription));
};

var ToastNotification =
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

      var classes = (0, _classnames.default)("".concat(prefix, "--toast-notification"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "--toast-notification--low-contrast"), lowContrast), _defineProperty(_classNames3, "".concat(prefix, "--toast-notification--").concat(kind), kind), _classNames3), className);
      return _react.default.createElement("div", _extends({}, other, {
        role: role,
        kind: kind,
        className: classes
      }), _react.default.createElement(NotificationIcon, {
        notificationType: notificationType,
        kind: kind,
        iconDescription: iconDescription
      }), _react.default.createElement(NotificationTextDetails, {
        title: title,
        subtitle: subtitle,
        caption: caption,
        notificationType: notificationType
      }, this.props.children), !hideCloseButton && _react.default.createElement(NotificationButton, {
        iconDescription: iconDescription,
        notificationType: notificationType,
        onClick: this.handleCloseButtonClick
      }));
    }
  }]);

  return ToastNotification;
}(_react.Component);

exports.ToastNotification = ToastNotification;

_defineProperty(ToastNotification, "propTypes", {
  /**
   * Pass in the children that will be rendered within the ToastNotification
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: _propTypes.default.string,

  /**
   * Specify what state the notification represents
   */
  kind: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the ToastNotification.
   */
  lowContrast: _propTypes.default.bool,

  /**
   * Specify the title
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: _propTypes.default.node,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Specify the caption
   */
  caption: _propTypes.default.node,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: _propTypes.default.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * By default, this value is "toast". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: _propTypes.default.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: _propTypes.default.bool,

  /**
   * Specify an optional duration the notification should be closed in
   */
  timeout: _propTypes.default.number
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

var InlineNotification =
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

      var classes = (0, _classnames.default)("".concat(prefix, "--inline-notification"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefix, "--inline-notification--low-contrast"), lowContrast), _defineProperty(_classNames4, "".concat(prefix, "--inline-notification--").concat(kind), kind), _classNames4), className);
      return _react.default.createElement("div", _extends({}, other, {
        role: role,
        kind: kind,
        className: classes
      }), _react.default.createElement("div", {
        className: "".concat(prefix, "--inline-notification__details")
      }, _react.default.createElement(NotificationIcon, {
        notificationType: notificationType,
        kind: kind,
        iconDescription: iconDescription
      }), _react.default.createElement(NotificationTextDetails, {
        title: title,
        subtitle: subtitle,
        notificationType: notificationType
      }, this.props.children)), actions, !hideCloseButton && _react.default.createElement(NotificationButton, {
        iconDescription: iconDescription,
        notificationType: notificationType,
        onClick: this.handleCloseButtonClick
      }));
    }
  }]);

  return InlineNotification;
}(_react.Component);

exports.InlineNotification = InlineNotification;

_defineProperty(InlineNotification, "propTypes", {
  /**
   * Pass in the action nodes that will be rendered within the InlineNotification
   */
  actions: _propTypes.default.node,

  /**
   * Pass in the children that will be rendered within the InlineNotification
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the notification box
   */
  className: _propTypes.default.string,

  /**
   * Specify what state the notification represents
   */
  kind: _propTypes.default.oneOf(['error', 'info', 'success', 'warning']).isRequired,

  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
   */
  lowContrast: _propTypes.default.bool,

  /**
   * Specify the title
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Specify the sub-title
   */
  subtitle: _propTypes.default.node,

  /**
   * By default, this value is "alert". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Provide a function that is called when menu is closed
   */
  onCloseButtonClick: _propTypes.default.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * By default, this value is "inline". You can also provide an alternate type
   * if it makes sense for the underlying `<NotificationTextDetails>` and `<NotificationButton>`
   */
  notificationType: _propTypes.default.string,

  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: _propTypes.default.bool
});

_defineProperty(InlineNotification, "defaultProps", {
  role: 'alert',
  notificationType: 'inline',
  iconDescription: 'closes notification',
  onCloseButtonClick: function onCloseButtonClick() {},
  hideCloseButton: false
});