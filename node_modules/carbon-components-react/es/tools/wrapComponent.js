function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

var wrapComponent = function wrapComponent(_ref) {
  var name = _ref.name,
      className = _ref.className,
      type = _ref.type;

  var Component = function Component(_ref2) {
    var baseClassName = _ref2.className,
        other = _objectWithoutProperties(_ref2, ["className"]);

    var componentClass = cx(className, baseClassName);
    return React.createElement(type, _objectSpread({}, other, {
      // Prevent Weird quirk where `cx` will evaluate to an empty string, '',
      // and so we have empty `class` attributes in the resulting markup
      // eslint-disable-next-line no-extra-boolean-cast
      className: !!componentClass ? componentClass : undefined
    }));
  };

  Component.displayName = name;
  Component.propTypes = {
    className: PropTypes.string
  };
  return Component;
};

export default wrapComponent;