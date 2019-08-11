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
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { Close20 } from '@carbon/icons-react';
import toggleClass from '../../tools/toggleClass';
var prefix = settings.prefix;

var ComposedModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ComposedModal, _Component);

  function ComposedModal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ComposedModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComposedModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "outerModal", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "innerModal", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "button", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "elementOrParentIsFloatingMenu", function (target) {
      var _this$props$selectors = _this.props.selectorsFloatingMenus,
          selectorsFloatingMenus = _this$props$selectors === void 0 ? [".".concat(prefix, "--overflow-menu-options"), ".".concat(prefix, "--tooltip"), '.flatpickr-calendar'] : _this$props$selectors;

      if (target && typeof target.closest === 'function') {
        return selectorsFloatingMenus.some(function (selector) {
          return target.closest(selector);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      // Esc key
      if (evt.which === 27) {
        _this.closeModal();
      }

      _this.props.onKeyDown(evt);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      if (_this.innerModal.current && !_this.innerModal.current.contains(evt.target)) {
        _this.closeModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusModal", function () {
      if (_this.outerModal.current) {
        _this.outerModal.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (evt) {
      // Keyboard trap
      if (_this.innerModal.current && _this.props.open && evt.relatedTarget && !_this.innerModal.current.contains(evt.relatedTarget) && !_this.elementOrParentIsFloatingMenu(evt.relatedTarget)) {
        _this.focusModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function (focusContainerElement) {
      var primaryFocusElement = focusContainerElement.querySelector(_this.props.selectorPrimaryFocus);

      if (primaryFocusElement) {
        primaryFocusElement.focus();
        return;
      }

      if (_this.button.current) {
        _this.button.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function (evt) {
      if (_this.outerModal.current.offsetWidth && _this.outerModal.current.offsetHeight && _this.beingOpen) {
        _this.focusButton(evt.currentTarget);

        _this.beingOpen = false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      var onClose = _this.props.onClose;

      if (!onClose || onClose() !== false) {
        _this.setState({
          open: false
        });
      }
    });

    return _this;
  }

  _createClass(ComposedModal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.beingOpen = true;
      } else if (prevProps.open && !this.props.open) {
        this.beingOpen = false;
      }

      toggleClass(document.body, "".concat(prefix, "--body--with-modal-open"), this.props.open);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      toggleClass(document.body, "".concat(prefix, "--body--with-modal-open"), this.props.open);

      if (!this.props.open) {
        return;
      }

      this.focusButton(this.innerModal.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var open = this.state.open;

      var _this$props = this.props,
          className = _this$props.className,
          containerClassName = _this$props.containerClassName,
          children = _this$props.children,
          danger = _this$props.danger,
          selectorPrimaryFocus = _this$props.selectorPrimaryFocus,
          other = _objectWithoutProperties(_this$props, ["className", "containerClassName", "children", "danger", "selectorPrimaryFocus"]);

      var modalClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--modal"), true), _defineProperty(_classNames, 'is-visible', open), _defineProperty(_classNames, className, className), _defineProperty(_classNames, "".concat(prefix, "--modal--danger"), danger), _classNames));
      var containerClass = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--modal-container"), true), _defineProperty(_classNames2, containerClassName, containerClassName), _classNames2));
      var childrenWithProps = React.Children.toArray(children).map(function (child) {
        switch (child.type) {
          case ModalHeader:
            return React.cloneElement(child, {
              closeModal: _this2.closeModal
            });

          case ModalFooter:
            return React.cloneElement(child, {
              closeModal: _this2.closeModal,
              inputref: _this2.button
            });

          default:
            return child;
        }
      });
      return React.createElement("div", _extends({}, other, {
        role: "presentation",
        ref: this.outerModal,
        onBlur: this.handleBlur,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        onTransitionEnd: open ? this.handleTransitionEnd : undefined,
        className: modalClass,
        tabIndex: -1
      }), React.createElement("div", {
        ref: this.innerModal,
        className: containerClass
      }, childrenWithProps));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var open = _ref.open;
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return ComposedModal;
}(Component);

_defineProperty(ComposedModal, "defaultProps", {
  onKeyDown: function onKeyDown() {},
  selectorPrimaryFocus: '[data-modal-primary-focus]'
});

_defineProperty(ComposedModal, "propTypes", {
  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the modal node
   */
  containerClassName: PropTypes.string,

  /**
   * Specify an optional handler for closing modal.
   * Returning `false` here prevents closing modal.
   */
  onClose: PropTypes.func,

  /**
   * Specify an optional handler for the `onKeyDown` event. Called for all
   * `onKeyDown` events that do not close the modal
   */
  onKeyDown: PropTypes.func,

  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes.bool,

  /**
   * Specify a CSS selector that matches the DOM element that should be
   * focused when the Modal opens
   */
  selectorPrimaryFocus: PropTypes.string
});

export { ComposedModal as default };
export var ModalHeader =
/*#__PURE__*/
function (_Component2) {
  _inherits(ModalHeader, _Component2);

  function ModalHeader() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, ModalHeader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ModalHeader)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this3), "handleCloseButtonClick", function () {
      _this3.props.closeModal();

      _this3.props.buttonOnClick();
    });

    return _this3;
  }

  _createClass(ModalHeader, [{
    key: "render",
    value: function render() {
      var _classNames3, _classNames4, _classNames5, _classNames6, _classNames7;

      var _this$props2 = this.props,
          className = _this$props2.className,
          labelClassName = _this$props2.labelClassName,
          titleClassName = _this$props2.titleClassName,
          closeClassName = _this$props2.closeClassName,
          closeIconClassName = _this$props2.closeIconClassName,
          label = _this$props2.label,
          title = _this$props2.title,
          children = _this$props2.children,
          iconDescription = _this$props2.iconDescription,
          closeModal = _this$props2.closeModal,
          buttonOnClick = _this$props2.buttonOnClick,
          other = _objectWithoutProperties(_this$props2, ["className", "labelClassName", "titleClassName", "closeClassName", "closeIconClassName", "label", "title", "children", "iconDescription", "closeModal", "buttonOnClick"]);

      var headerClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefix, "--modal-header"), true), _defineProperty(_classNames3, className, className), _classNames3));
      var labelClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefix, "--modal-header__label ").concat(prefix, "--type-delta"), true), _defineProperty(_classNames4, labelClassName, labelClassName), _classNames4));
      var titleClass = classNames((_classNames5 = {}, _defineProperty(_classNames5, "".concat(prefix, "--modal-header__heading ").concat(prefix, "--type-beta"), true), _defineProperty(_classNames5, titleClassName, titleClassName), _classNames5));
      var closeClass = classNames((_classNames6 = {}, _defineProperty(_classNames6, "".concat(prefix, "--modal-close"), true), _defineProperty(_classNames6, closeClassName, closeClassName), _classNames6));
      var closeIconClass = classNames((_classNames7 = {}, _defineProperty(_classNames7, "".concat(prefix, "--modal-close__icon"), true), _defineProperty(_classNames7, closeIconClassName, closeIconClassName), _classNames7));
      return React.createElement("div", _extends({
        className: headerClass
      }, other), label && React.createElement("p", {
        className: labelClass
      }, label), title && React.createElement("p", {
        className: titleClass
      }, title), children, React.createElement("button", {
        onClick: this.handleCloseButtonClick,
        className: closeClass,
        title: iconDescription,
        type: "button"
      }, React.createElement(Close20, {
        "aria-label": iconDescription,
        className: closeIconClass
      })));
    }
  }]);

  return ModalHeader;
}(Component);

_defineProperty(ModalHeader, "propTypes", {
  /**
   * Specify an optional className to be applied to the modal header
   */
  className: PropTypes.string,

  /**
   * Specify an optional className to be applied to the modal header label
   */
  labelClassName: PropTypes.string,

  /**
   * Specify an optional className to be applied to the modal heading
   */
  titleClassName: PropTypes.string,

  /**
   * Specify an optional className to be applied to the modal close node
   */
  closeClassName: PropTypes.string,

  /**
   * Specify an optional className to be applied to the modal close icon node
   */
  closeIconClassName: PropTypes.string,

  /**
   * Specify an optional label to be displayed
   */
  label: PropTypes.node,

  /**
   * Specify an optional title to be displayed
   */
  title: PropTypes.node,

  /**
   * Specify the content to be placed in the ModalHeader
   */
  children: PropTypes.node,

  /**
   * Specify a description for the close icon that can be read by screen
   * readers
   */
  iconDescription: PropTypes.string,

  /**
   * Provide an optional function to be called when the modal is closed
   */
  closeModal: PropTypes.func,

  /**
   * Provide an optional function to be called when the close button is
   * clicked
   */
  buttonOnClick: PropTypes.func
});

_defineProperty(ModalHeader, "defaultProps", {
  iconDescription: 'Close the modal',
  buttonOnClick: function buttonOnClick() {}
});

export var ModalBody =
/*#__PURE__*/
function (_Component3) {
  _inherits(ModalBody, _Component3);

  function ModalBody() {
    _classCallCheck(this, ModalBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalBody).apply(this, arguments));
  }

  _createClass(ModalBody, [{
    key: "render",
    value: function render() {
      var _classNames8;

      var _this$props3 = this.props,
          className = _this$props3.className,
          children = _this$props3.children,
          other = _objectWithoutProperties(_this$props3, ["className", "children"]);

      var contentClass = classNames((_classNames8 = {}, _defineProperty(_classNames8, "".concat(prefix, "--modal-content"), true), _defineProperty(_classNames8, className, className), _classNames8));
      return React.createElement("div", _extends({
        className: contentClass
      }, other), children);
    }
  }]);

  return ModalBody;
}(Component);

_defineProperty(ModalBody, "propTypes", {
  /**
   * Specify an optional className to be added to the Modal Body node
   */
  className: PropTypes.string
});

export var ModalFooter =
/*#__PURE__*/
function (_Component4) {
  _inherits(ModalFooter, _Component4);

  function ModalFooter() {
    var _getPrototypeOf4;

    var _this4;

    _classCallCheck(this, ModalFooter);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(ModalFooter)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this4), "handleRequestClose", function (evt) {
      _this4.props.closeModal();

      _this4.props.onRequestClose(evt);
    });

    return _this4;
  }

  _createClass(ModalFooter, [{
    key: "render",
    value: function render() {
      var _classNames9;

      var _this$props4 = this.props,
          className = _this$props4.className,
          primaryClassName = _this$props4.primaryClassName,
          secondaryClassName = _this$props4.secondaryClassName,
          secondaryButtonText = _this$props4.secondaryButtonText,
          primaryButtonText = _this$props4.primaryButtonText,
          primaryButtonDisabled = _this$props4.primaryButtonDisabled,
          closeModal = _this$props4.closeModal,
          onRequestClose = _this$props4.onRequestClose,
          onRequestSubmit = _this$props4.onRequestSubmit,
          children = _this$props4.children,
          danger = _this$props4.danger,
          other = _objectWithoutProperties(_this$props4, ["className", "primaryClassName", "secondaryClassName", "secondaryButtonText", "primaryButtonText", "primaryButtonDisabled", "closeModal", "onRequestClose", "onRequestSubmit", "children", "danger"]);

      var footerClass = classNames((_classNames9 = {}, _defineProperty(_classNames9, "".concat(prefix, "--modal-footer"), true), _defineProperty(_classNames9, className, className), _classNames9));
      var primaryClass = classNames(_defineProperty({}, primaryClassName, primaryClassName));
      var secondaryClass = classNames(_defineProperty({}, secondaryClassName, secondaryClassName));
      return React.createElement("div", _extends({
        className: footerClass
      }, other), secondaryButtonText && React.createElement(Button, {
        className: secondaryClass,
        onClick: this.handleRequestClose,
        kind: "secondary"
      }, secondaryButtonText), primaryButtonText && React.createElement(Button, {
        onClick: onRequestSubmit,
        className: primaryClass,
        disabled: primaryButtonDisabled,
        kind: danger ? 'danger' : 'primary',
        ref: this.props.inputref
      }, primaryButtonText), children);
    }
  }]);

  return ModalFooter;
}(Component);

_defineProperty(ModalFooter, "propTypes", {
  /**
   * Specify a custom className to be applied to the Modal Footer container
   */
  className: PropTypes.string,

  /**
   * Specify a custom className to be applied to the primary button
   */
  primaryClassName: PropTypes.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes.string,

  /**
   * Specify whether the primary button should be disabled
   */
  primaryButtonDisabled: PropTypes.bool,

  /**
   * Specify a custom className to be applied to the secondary button
   */
  secondaryClassName: PropTypes.string,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes.string,

  /**
   * Specify an optional function for when the modal is requesting to be
   * closed
   */
  onRequestClose: PropTypes.func,

  /**
   * Specify an optional function for when the modal is requesting to be
   * submitted
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specify an optional function that is called whenever the modal is closed
   */
  closeModal: PropTypes.func,

  /**
   * Pass in content that will be rendered in the Modal Footer
   */
  children: PropTypes.node
});

_defineProperty(ModalFooter, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {}
});