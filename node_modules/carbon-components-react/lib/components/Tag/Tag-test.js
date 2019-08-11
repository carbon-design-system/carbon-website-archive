"use strict";

var _react = _interopRequireDefault(require("react"));

var _Tag = _interopRequireDefault(require("../Tag"));

var _Tag2 = _interopRequireDefault(require("../Tag/Tag.Skeleton"));

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
describe('Tag', function () {
  describe('Renders as expected', function () {
    it('should render with the appropriate type', function () {
      var tag = (0, _enzyme.shallow)(_react.default.createElement(_Tag.default, {
        type: "beta"
      }));
      expect(tag.hasClass("".concat(prefix, "--tag"))).toEqual(true);
      expect(tag.hasClass("".concat(prefix, "--tag--beta"))).toEqual(true);
    });
  });
  it('should allow for a custom label', function () {
    var tag = (0, _enzyme.shallow)(_react.default.createElement(_Tag.default, {
      type: "beta"
    }, "New Version!"));
    expect(tag.text()).toEqual('New Version!');
  });
  it('should support extra class names', function () {
    var tag = (0, _enzyme.shallow)(_react.default.createElement(_Tag.default, {
      type: "beta",
      className: "extra-class"
    }));
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});
describe('TagSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tag2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--tag"))).toEqual(true);
    });
  });
});