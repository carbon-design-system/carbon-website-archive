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
var prefix = settings.prefix;

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
      var searchClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--search--xl"), !small), _defineProperty(_classNames, "".concat(prefix, "--search--sm"), small), _classNames));
      return React.createElement("div", {
        className: searchClasses,
        role: "search"
      },
      /* eslint-disable jsx-a11y/label-has-for,jsx-a11y/label-has-associated-control */
      React.createElement("label", {
        htmlFor: id,
        className: "".concat(prefix, "--label")
      }), React.createElement("div", {
        className: "".concat(prefix, "--search-input")
      }));
    }
  }]);

  return SearchSkeleton;
}(Component);

_defineProperty(SearchSkeleton, "propTypes", {
  /**
   * Specify whether the Search should be a small variant
   */
  small: PropTypes.bool
});

_defineProperty(SearchSkeleton, "defaultProps", {
  small: false
});

export { SearchSkeleton as default };