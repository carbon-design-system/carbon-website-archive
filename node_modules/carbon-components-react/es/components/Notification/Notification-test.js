function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Close20, ErrorFilled20, CheckmarkFilled20 } from '@carbon/icons-react';
import { NotificationButton, NotificationTextDetails, ToastNotification, InlineNotification } from '../Notification';
import { shallow, mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('NotificationButton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(NotificationButton, {
      className: "some-class"
    }));
    it('renders given className', function () {
      expect(wrapper.hasClass('some-class')).toBe(true);
    });
    it('renders only one Icon', function () {
      var icon = wrapper.find(Close20);
      expect(icon.length).toEqual(1);
    });
    it('supports custom icon', function () {
      var iconButton = mount(React.createElement(NotificationButton, {
        renderIcon: Close20,
        iconDescription: "Close"
      }));
      var originalIcon = mount(React.createElement(Close20, null)).find('svg');
      var icon = iconButton.find('svg');
      expect(icon.find(':not(svg):not(title)').html()).toBe(originalIcon.children().html());
    });
    describe('When notificationType equals "toast"', function () {
      it('button should have correct className by default', function () {
        expect(wrapper.hasClass("".concat(prefix, "--toast-notification__close-button"))).toBe(true);
      });
      it('icon should have correct className by default', function () {
        var icon = wrapper.find(Close20);
        expect(icon.hasClass("".concat(prefix, "--toast-notification__close-icon"))).toBe(true);
      });
    });
    describe('When notificationType equals "inline"', function () {
      it('button should have correct className', function () {
        wrapper.setProps({
          notificationType: 'inline'
        });
        expect(wrapper.hasClass("".concat(prefix, "--inline-notification__close-button"))).toBe(true);
      });
      it('icon should have correct className', function () {
        var icon = wrapper.find(Close20);
        expect(icon.hasClass("".concat(prefix, "--inline-notification__close-icon"))).toBe(true);
      });
    });
  });
});
describe('NotificationTextDetails', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(NotificationTextDetails, null));
    describe('When notificationType equals "toast"', function () {
      it('div shoudld have correct className by default', function () {
        expect(wrapper.hasClass("".concat(prefix, "--toast-notification__details"))).toBe(true);
      });
    });
    describe('When notificationType equals "inline"', function () {
      it('div shoudld have correct className', function () {
        wrapper.setProps({
          notificationType: 'inline'
        });
        expect(wrapper.hasClass("".concat(prefix, "--inline-notification__text-wrapper"))).toBe(true);
      });
    });
  });
});
describe('ToastNotification', function () {
  describe('Renders as expected', function () {
    var toast = shallow(React.createElement(ToastNotification, {
      kind: "error",
      title: "this is a title",
      subtitle: "this is a subtitle",
      caption: "this is a caption"
    }));
    it('renders itself', function () {
      expect(toast.length).toEqual(1);
    });
    it('renders HTML for toast notifications when caption exists', function () {
      expect(toast.hasClass("".concat(prefix, "--toast-notification"))).toBe(true);
    });
    it('adds extra classes via className', function () {
      toast.setProps({
        className: 'extra-class'
      });
      expect(toast.hasClass('extra-class')).toBe(true);
    });
    it('interpolates matching className based on kind prop', function () {
      var kinds = ['error', 'info', 'success', 'warning'];
      kinds.forEach(function (kind) {
        toast.setProps({
          kind: kind
        });
        expect(toast.hasClass("".concat(prefix, "--toast-notification--").concat(kind))).toEqual(true);
      });
    });
    it('has [role="alert"] on wrapping <div>', function () {
      expect(toast.props().role).toEqual('alert');
    });
    it('sets a new kind when passed in via props', function () {
      toast.setProps({
        kind: 'success'
      });
      expect(toast.props().kind).toEqual('success');
    });
    it('can render any node for the subtitle and caption', function () {
      toast.setProps({
        subtitle: React.createElement("button", null),
        caption: React.createElement("button", null)
      });
      expect(toast.length).toEqual(1);
    });
  });
  describe('events and state', function () {
    it('initial open state set to true', function () {
      var mountedToast = mount(React.createElement(ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      expect(mountedToast.state().open).toBe(true);
    });
    it('sets open state to false when close button is clicked', function () {
      var mountedToast = mount(React.createElement(ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      mountedToast.find('button').simulate('click');
      expect(mountedToast.state().open).toEqual(false);
    });
    it('renders null when open state is false', function () {
      var mountedToast = mount(React.createElement(ToastNotification, {
        kind: "error",
        title: "this is a title",
        subtitle: "this is a subtitle",
        caption: "this is a caption"
      }));
      mountedToast.setState({
        open: false
      });
      expect(mountedToast.html()).toBeNull();
    });
  });
});
describe('InlineNotification', function () {
  describe('Renders as expected', function () {
    var inline = mount(React.createElement(InlineNotification, {
      title: "this is a title",
      subtitle: "this is a subtitle",
      kind: "error"
    }));
    it('renders itself', function () {
      expect(inline.length).toEqual(1);
    });
    it('renders success notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'success'
      });
      expect(inline.find(CheckmarkFilled20).length).toBe(1);
    });
    it('renders error notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'error'
      });
      expect(inline.find(ErrorFilled20).length).toBe(1);
    });
    it('renders warning notification with matching kind and <icon name=""> values', function () {
      inline.setProps({
        kind: 'warning'
      });
      expect(inline.find(".".concat(prefix, "--inline-notification__icon")).exists()).toBe(true);
    });
    it('renders HTML for inline notifications when caption does not exist', function () {
      expect(inline.find(".".concat(prefix, "--inline-notification")).exists()).toBe(true);
    });
    it('adds extra classes via className', function () {
      inline.setProps({
        className: 'extra-class'
      });
      expect(inline.find('.extra-class').exists()).toBe(true);
    });
    it('interpolates matching className based on kind prop', function () {
      var kinds = ['error', 'info', 'success', 'warning'];
      kinds.forEach(function (kind) {
        inline.setProps({
          kind: kind
        });
        expect(inline.find(".".concat(prefix, "--inline-notification--").concat(kind)).exists()).toEqual(true);
      });
    });
    it('has [role="alert"] on wrapping <div>', function () {
      expect(inline.props().role).toEqual('alert');
    });
    it('sets a new kind when passed in via props', function () {
      inline.setProps({
        kind: 'success'
      });
      expect(inline.props().kind).toEqual('success');
    });
    it('can render any node for the subtitle', function () {
      inline.setProps({
        subtitle: React.createElement("button", null)
      });
      expect(inline.length).toEqual(1);
    });
  });
  describe('events and state', function () {
    it('initial open state set to true', function () {
      var mountedInline = mount(React.createElement(InlineNotification, {
        title: "this is a title",
        subtitle: "this is a subtitle",
        kind: "error"
      }));
      expect(mountedInline.state().open).toBe(true);
    });
    it('sets open state to false when close button is clicked', function () {
      var mountedInline = mount(React.createElement(InlineNotification, props));
      mountedInline.find('button').simulate('click');
      expect(mountedInline.state().open).toEqual(false);
    });
    it('renders null when open state is false', function () {
      var mountedInline = mount(React.createElement(InlineNotification, {
        title: "this is a title",
        subtitle: "this is a subtitle",
        kind: "error"
      }));
      mountedInline.setState({
        open: false
      });
      expect(mountedInline.html()).toBeNull();
    });
  });
}); // Deprecated

var props = {
  kind: 'success',
  title: 'title',
  subtitle: 'subtitle',
  iconDescription: 'description'
};
describe('events and state', function () {
  it('initial open state set to true', function () {
    var mountedToast = mount(React.createElement(ToastNotification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(InlineNotification, props));
    expect(mountedToast.state().open).toBe(true);
    expect(mountedInline.state().open).toBe(true);
  });
  it('sets open state to false when close button is clicked', function () {
    var mountedToast = mount(React.createElement(ToastNotification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(InlineNotification, props));
    mountedToast.find('button').simulate('click');
    mountedInline.find('button').simulate('click');
    expect(mountedToast.state().open).toEqual(false);
    expect(mountedInline.state().open).toEqual(false);
  });
  it('close button is not shown if hideCloseButton prop set', function () {
    var mountedToast = mount(React.createElement(ToastNotification, _extends({}, props, {
      hideCloseButton: true
    })));
    expect(mountedToast.find('button')).toHaveLength(0);
  });
  it('renders null when open state is false', function () {
    var mountedToast = mount(React.createElement(ToastNotification, _extends({}, props, {
      caption: "caption"
    })));
    var mountedInline = mount(React.createElement(InlineNotification, props));
    mountedToast.setState({
      open: false
    });
    mountedInline.setState({
      open: false
    });
    expect(mountedToast.html()).toBeNull();
    expect(mountedInline.html()).toBeNull();
  });
});