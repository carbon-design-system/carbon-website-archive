"use strict";

var _react = _interopRequireDefault(require("react"));

var _CodeSnippet = _interopRequireDefault(require("../CodeSnippet"));

var _CodeSnippet2 = _interopRequireDefault(require("../CodeSnippet/CodeSnippet.Skeleton"));

var _Copy = _interopRequireDefault(require("../Copy"));

var _CopyButton = _interopRequireDefault(require("../CopyButton"));

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
describe('Code Snippet', function () {
  describe('Renders as expected', function () {
    var snippet = (0, _enzyme.shallow)(_react.default.createElement(_CodeSnippet.default, {
      className: "some-class",
      type: "single"
    }, 'node -v'));
    it('should use the appropriate snippet class', function () {
      expect(snippet.hasClass("".concat(prefix, "--snippet"))).toEqual(true);
      expect(snippet.hasClass("".concat(prefix, "--snippet--single"))).toEqual(true);
    });
    it('should render children as expected', function () {
      expect(snippet.find(".".concat(prefix, "--snippet-container")).length).toBe(1);
    });
    it('should all for custom classes to be applied', function () {
      expect(snippet.hasClass('some-class')).toEqual(true);
    });
  });
  describe('Triggers appropriate events', function () {
    it('should call the click handler', function () {
      var onClick = jest.fn();
      var clickWrapper = (0, _enzyme.mount)(_react.default.createElement(_CodeSnippet.default, {
        onClick: onClick
      }));
      clickWrapper.find(_CopyButton.default).simulate('click');
      expect(onClick).toBeCalled();
    });
    it('should call the click handler with type="inline"', function () {
      var onClick = jest.fn();
      var clickWrapper = (0, _enzyme.mount)(_react.default.createElement(_CodeSnippet.default, {
        type: 'inline',
        onClick: onClick
      }));
      clickWrapper.find(_Copy.default).simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
describe('CodeSnippetSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_CodeSnippet2.default, {
      type: "single"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--snippet"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--snippet--single"))).toEqual(true);
    });
  });
});