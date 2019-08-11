/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Tag from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
import { shallow } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('Tag', function () {
  describe('Renders as expected', function () {
    it('should render with the appropriate type', function () {
      var tag = shallow(React.createElement(Tag, {
        type: "beta"
      }));
      expect(tag.hasClass("".concat(prefix, "--tag"))).toEqual(true);
      expect(tag.hasClass("".concat(prefix, "--tag--beta"))).toEqual(true);
    });
  });
  it('should allow for a custom label', function () {
    var tag = shallow(React.createElement(Tag, {
      type: "beta"
    }, "New Version!"));
    expect(tag.text()).toEqual('New Version!');
  });
  it('should support extra class names', function () {
    var tag = shallow(React.createElement(Tag, {
      type: "beta",
      className: "extra-class"
    }));
    expect(tag.hasClass('extra-class')).toEqual(true);
  });
});
describe('TagSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(TagSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--tag"))).toEqual(true);
    });
  });
});