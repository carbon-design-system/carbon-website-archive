/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CodeSnippet from '../CodeSnippet';
import CodeSnippetSkeleton from '../CodeSnippet/CodeSnippet.Skeleton';
import Copy from '../Copy';
import CopyButton from '../CopyButton';
import { shallow, mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('Code Snippet', function () {
  describe('Renders as expected', function () {
    var snippet = shallow(React.createElement(CodeSnippet, {
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
      var clickWrapper = mount(React.createElement(CodeSnippet, {
        onClick: onClick
      }));
      clickWrapper.find(CopyButton).simulate('click');
      expect(onClick).toBeCalled();
    });
    it('should call the click handler with type="inline"', function () {
      var onClick = jest.fn();
      var clickWrapper = mount(React.createElement(CodeSnippet, {
        type: 'inline',
        onClick: onClick
      }));
      clickWrapper.find(Copy).simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});
describe('CodeSnippetSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(CodeSnippetSkeleton, {
      type: "single"
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--snippet"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--snippet--single"))).toEqual(true);
    });
  });
});