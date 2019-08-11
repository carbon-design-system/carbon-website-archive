function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import ComposedModal, { ModalHeader, ModalBody, ModalFooter } from '../ComposedModal';
import Button from '../Button';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
var props = {
  composedModal: function composedModal() {
    var includeOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return {
      open: includeOpen ? boolean('Open (open in <ComposedModal>)', true) : null,
      onKeyDown: action('onKeyDown'),
      danger: boolean('Danger mode (danger)', false),
      selectorPrimaryFocus: text('Primary focus element selector (selectorPrimaryFocus)', '[data-modal-primary-focus]')
    };
  },
  modalHeader: function modalHeader() {
    return {
      label: text('Optional Label (label in <ModalHeader>)', 'Optional Label'),
      title: text('Optional title (title in <ModalHeader>)', 'Example'),
      iconDescription: text('Close icon description (iconDescription in <ModalHeader>)', 'Close'),
      buttonOnClick: action('buttonOnClick')
    };
  },
  modalFooter: function modalFooter() {
    return {
      primaryButtonText: text('Primary button text (primaryButtonText in <ModalFooter>)', 'Save'),
      primaryButtonDisabled: boolean('Primary button disabled (primaryButtonDisabled in <ModalFooter>)', false),
      secondaryButtonText: text('Secondary button text (secondaryButtonText in <ModalFooter>)', ''),
      onRequestClose: action('onRequestClose'),
      onRequestSubmit: action('onRequestSubmit')
    };
  }
};
storiesOf('ComposedModal', module).addDecorator(withKnobs).add('Using Header / Footer Props', function () {
  return React.createElement(ComposedModal, props.composedModal(), React.createElement(ModalHeader, props.modalHeader()), React.createElement(ModalBody, null, React.createElement("p", {
    className: "".concat(prefix, "--modal-content__text}")
  }, "Please see ModalWrapper for more examples and demo of the functionality.")), React.createElement(ModalFooter, props.modalFooter()));
}, {
  info: {
    text: "\n            Composed Modal allows you to create your own modal with just the parts you need. The ComposedModal element provides the state management for open/close, as well as passes the ModalHeader a prop to close the modal (with the close button).\n\n            The interior components - ModalHeader / ModalBody / ModalFooter - are all container elements that will render any children you add in, wrapped in the appropriate CSS classes.\n\n            The Modal Header / Modal Footer come with some built in props to let you accelerate towards standard Carbon modal UI. If there are customizations you need to do, see the next example of just using the interior components as containers.\n          "
  }
}).add('Using child nodes', function () {
  return React.createElement(ComposedModal, props.composedModal(), React.createElement(ModalHeader, props.modalHeader(), React.createElement("h1", null, "Testing")), React.createElement(ModalBody, null, React.createElement("p", null, "Please see ModalWrapper for more examples and demo of the functionality.")), React.createElement(ModalFooter, null, React.createElement(Button, {
    kind: "secondary"
  }, "Cancel"), React.createElement(Button, {
    kind: props.composedModal().danger ? 'danger' : 'primary'
  }, "Save")));
}, {
  info: {
    text: "\n            Alternatively, you can just use the Modal components as wrapper elements and figure the children out yourself. We do suggest for the header you utilize the built in props for label and title though, for the footer it's mostly a composed element so creating the two buttons yourself (using the Button component) is probably the most straight-forward pattern.\n          "
  }
}).add('Example usage with trigger button', function () {
  var ComposedModalExample =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ComposedModalExample, _React$Component);

    function ComposedModalExample() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, ComposedModalExample);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ComposedModalExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        open: false
      });

      _defineProperty(_assertThisInitialized(_this), "toggleModal", function (open) {
        return _this.setState({
          open: open
        });
      });

      return _this;
    }

    _createClass(ComposedModalExample, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var open = this.state.open;
        return React.createElement(React.Fragment, null, React.createElement(Button, {
          onClick: function onClick() {
            return _this2.toggleModal(true);
          }
        }, "Launch composed modal"), React.createElement(ComposedModal, _extends({}, props.composedModal(), {
          open: open,
          onClose: function onClose() {
            return _this2.toggleModal(false);
          }
        }), React.createElement(ModalHeader, props.modalHeader()), React.createElement(ModalBody, null, React.createElement("p", {
          className: "".concat(prefix, "--modal-content__text")
        }, "Please see ModalWrapper for more examples and demo of the functionality.")), React.createElement(ModalFooter, props.modalFooter())));
      }
    }]);

    return ComposedModalExample;
  }(React.Component);

  return React.createElement(ComposedModalExample, null);
}, {
  info: {
    text: "\n            An example ComposedModal with a trigger button\n          "
  }
});