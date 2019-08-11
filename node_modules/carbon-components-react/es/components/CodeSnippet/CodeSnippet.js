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
import React, { Component } from 'react';
import classNames from 'classnames';
import { ChevronDown16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import Copy from '../Copy';
import CopyButton from '../CopyButton';
import uid from '../../tools/uniqueId';
var prefix = settings.prefix;

var CodeSnippet =
/*#__PURE__*/
function (_Component) {
  _inherits(CodeSnippet, _Component);

  function CodeSnippet() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CodeSnippet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CodeSnippet)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      shouldShowMoreLessBtn: false,
      expandedCode: false
    });

    _defineProperty(_assertThisInitialized(_this), "expandCode", function () {
      _this.setState({
        expandedCode: !_this.state.expandedCode
      });
    });

    return _this;
  }

  _createClass(CodeSnippet, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.codeContent) {
        if (this.codeContent.getBoundingClientRect().height > 255) {
          this.setState({
            shouldShowMoreLessBtn: true
          });
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.children !== prevProps.children && this.codeContent) {
        if (this.codeContent.getBoundingClientRect().height > 255) {
          this.setState({
            shouldShowMoreLessBtn: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          children = _this$props.children,
          feedback = _this$props.feedback,
          onClick = _this$props.onClick,
          ariaLabel = _this$props.ariaLabel,
          copyLabel = _this$props.copyLabel,
          copyButtonDescription = _this$props.copyButtonDescription,
          light = _this$props.light,
          showMoreText = _this$props.showMoreText,
          showLessText = _this$props.showLessText,
          other = _objectWithoutProperties(_this$props, ["className", "type", "children", "feedback", "onClick", "ariaLabel", "copyLabel", "copyButtonDescription", "light", "showMoreText", "showLessText"]); // a unique id generated for aria-describedby


      this.uid = uid();
      var codeSnippetClasses = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--snippet"), true), _defineProperty(_classNames, "".concat(prefix, "--snippet--single"), type === 'single'), _defineProperty(_classNames, "".concat(prefix, "--snippet--multi"), type === 'multi'), _defineProperty(_classNames, "".concat(prefix, "--snippet--inline"), type === 'inline'), _defineProperty(_classNames, "".concat(prefix, "--snippet--expand"), this.state.expandedCode), _defineProperty(_classNames, "".concat(prefix, "--snippet--light"), light), _classNames));
      var expandCodeBtnText = this.state.expandedCode ? showLessText : showMoreText;
      var moreLessBtn = React.createElement("button", {
        className: "".concat(prefix, "--btn ").concat(prefix, "--btn--ghost ").concat(prefix, "--btn--sm ").concat(prefix, "--snippet-btn--expand"),
        type: "button",
        onClick: this.expandCode
      }, React.createElement("span", {
        className: "".concat(prefix, "--snippet-btn--text")
      }, expandCodeBtnText), React.createElement(ChevronDown16, {
        "aria-label": expandCodeBtnText,
        className: "".concat(prefix, "--icon-chevron--down ").concat(prefix, "--snippet__icon"),
        name: "chevron--down",
        role: "img"
      }));
      var code = React.createElement("div", {
        role: "textbox",
        tabIndex: 0,
        className: "".concat(prefix, "--snippet-container"),
        "aria-label": ariaLabel || copyLabel || 'code-snippet'
      }, React.createElement("code", null, React.createElement("pre", {
        ref: function ref(codeContent) {
          _this2.codeContent = codeContent;
        }
      }, children)));
      var copy = React.createElement(CopyButton, {
        onClick: onClick,
        feedback: feedback,
        iconDescription: copyButtonDescription
      });

      if (type === 'inline') {
        return React.createElement(Copy, _extends({}, other, {
          onClick: onClick,
          "aria-label": copyLabel || ariaLabel,
          "aria-describedby": this.uid,
          className: codeSnippetClasses,
          feedback: feedback
        }), React.createElement("code", {
          id: this.uid
        }, children));
      }

      if (type === 'single') {
        return React.createElement("div", _extends({}, other, {
          className: codeSnippetClasses
        }), code, copy);
      }

      if (!this.state.shouldShowMoreLessBtn && type === 'multi') {
        return React.createElement("div", _extends({}, other, {
          className: codeSnippetClasses
        }), code, copy);
      }

      if (this.state.shouldShowMoreLessBtn && type === 'multi') {
        return React.createElement("div", _extends({
          className: codeSnippetClasses
        }, other), code, copy, moreLessBtn);
      }
    }
  }]);

  return CodeSnippet;
}(Component);

_defineProperty(CodeSnippet, "propTypes", {
  /**
   * Provide the type of Code Snippet
   */
  type: PropTypes.oneOf(['single', 'inline', 'multi']),

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Provide the content of your CodeSnippet as a string
   */
  children: PropTypes.string,

  /**
   * Specify the string displayed when the snippet is copied
   */
  feedback: PropTypes.string,

  /**
   * Specify the description for the Copy Button
   */
  copyButtonDescription: PropTypes.string,

  /**
   * An optional handler to listen to the `onClick` even fired by the Copy
   * Button
   */
  onClick: PropTypes.func,

  /**
   * Specify a label to be read by screen readers on the containing <textbox>
   * node
   */
  copyLabel: PropTypes.string,

  /**
   * Specify a label to be read by screen readers on the containing <textbox>
   * node
   */
  ariaLabel: PropTypes.string,

  /**
   * Specify a string that is displayed when the Code Snippet text is more
   * than 15 lines
   */
  showMoreText: PropTypes.string,

  /**
   * Specify a string that is displayed when the Code Snippet has been
   * interacted with to show more lines
   */
  showLessText: PropTypes.string,

  /**
   * Specify whether you are using the light variant of the Code Snippet,
   * typically used for inline snippest to display an alternate color
   */
  light: PropTypes.bool
});

_defineProperty(CodeSnippet, "defaultProps", {
  type: 'single',
  showMoreText: 'Show more',
  showLessText: 'Show less'
});

export { CodeSnippet as default };