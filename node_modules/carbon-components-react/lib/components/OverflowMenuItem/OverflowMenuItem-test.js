"use strict";

var _react = _interopRequireDefault(require("react"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _enzyme = require("enzyme");

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

var shallowRender = function shallowRender(props) {
  return (0, _enzyme.shallow)(_react.default.createElement(_OverflowMenuItem.default, props));
};

describe('OverflowMenuItem', function () {
  describe('Renders as expected', function () {
    it('should render a button and text as expected', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        onSelect: function onSelect() {}
      });
      var button = wrapper.find('button');
      expect(button.length).toEqual(1);
      expect(button.text()).toEqual('testing');
      expect(wrapper.type()).toEqual('li');
    });
    it('should have the correct classes', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        onSelect: function onSelect() {}
      });
      var button = wrapper.find('button');
      expect(button.hasClass("".concat(prefix, "--overflow-menu-options__btn"))).toEqual(true);
    });
    it('should have the correct class when hasDivider is true', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        onSelect: function onSelect() {},
        hasDivider: true
      });
      expect(wrapper.hasClass("".concat(prefix, "--overflow-menu--divider"))).toEqual(true);
    });
    it('renders an anchor when passed href', function () {
      var wrapper = shallowRender({
        itemText: 'testing',
        href: 'testing'
      });
      expect(wrapper.find('a').length).toBe(1);
    });
  });
});