/**
 * @author  Milos Janda
 * @licence MIT
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tweenFunctions = require('tween-functions');

var _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);

var _detectPassiveEvents = require('detect-passive-events');

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollUp = function (_React$Component) {
    _inherits(ScrollUp, _React$Component);

    function ScrollUp(props) {
        _classCallCheck(this, ScrollUp);

        // set default state
        var _this = _possibleConstructorReturn(this, (ScrollUp.__proto__ || Object.getPrototypeOf(ScrollUp)).call(this, props));

        _this.state = { show: false };

        // default property `data`
        _this.data = {
            startValue: 0,
            currentTime: 0, // store current time of animation
            startTime: null,
            rafId: null
        };

        // bind
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.scrollStep = _this.scrollStep.bind(_this);
        _this.stopScrolling = _this.stopScrolling.bind(_this);
        return _this;
    }

    _createClass(ScrollUp, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.show !== this.state.show;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll(); // initialize state

            // Add all listeners which can start scroll
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener("wheel", this.stopScrolling, _detectPassiveEvents2.default.hasSupport ? { passive: true } : false);
            window.addEventListener("touchstart", this.stopScrolling, _detectPassiveEvents2.default.hasSupport ? { passive: true } : false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Remove all listeners which was registered
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener("wheel", this.stopScrolling, false);
            window.removeEventListener("touchstart", this.stopScrolling, false);
        }

        /**
         * Evaluate show/hide this component, depend on new position
         */

    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            if (window.pageYOffset > this.props.showUnder) {
                if (!this.state.show) {
                    this.setState({ show: true });
                }
            } else {
                if (this.state.show) {
                    this.setState({ show: false });
                }
            }
        }

        /**
         * Handle click on the button
         */

    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.stopScrolling();
            this.data.startValue = window.pageYOffset;
            this.data.currentTime = 0;
            this.data.startTime = null;
            this.data.rafId = window.requestAnimationFrame(this.scrollStep);
        }

        /**
         * Calculate new position
         * and scroll screen to new position or stop scrolling
         * @param timestamp
         */

    }, {
        key: 'scrollStep',
        value: function scrollStep(timestamp) {
            if (!this.data.startTime) {
                this.data.startTime = timestamp;
            }

            this.data.currentTime = timestamp - this.data.startTime;

            var position = _tweenFunctions2.default[this.props.easing](this.data.currentTime, this.data.startValue, this.props.topPosition, this.props.duration);

            if (window.pageYOffset <= this.props.topPosition) {
                this.stopScrolling();
            } else {
                window.scrollTo(window.pageYOffset, position);
                this.data.rafId = window.requestAnimationFrame(this.scrollStep);
            }
        }

        /**
         * Stop Animation Frame
         */

    }, {
        key: 'stopScrolling',
        value: function stopScrolling() {
            window.cancelAnimationFrame(this.data.rafId);
        }

        /**
         * Render component
         */

    }, {
        key: 'render',
        value: function render() {

            var propStyle = this.props.style;
            var element = _react2.default.createElement(
                'div',
                { style: propStyle, onClick: this.handleClick },
                this.props.children
            );

            var style = (0, _objectAssign2.default)({}, ScrollUp.defaultProps.style);
            style = (0, _objectAssign2.default)(style, propStyle);
            style.opacity = this.state.show ? 1 : 0;
            style.visibility = this.state.show ? 'visible' : 'hidden';
            style.transitionProperty = 'opacity, visibility';

            return _react2.default.cloneElement(element, { style: style });
        }
    }]);

    return ScrollUp;
}(_react2.default.Component);

// Set default props


exports.default = ScrollUp;
ScrollUp.defaultProps = {
    duration: 250,
    easing: 'easeOutCubic',
    style: {
        position: 'fixed',
        bottom: 50,
        right: 30,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s'
    },
    topPosition: 0
};

// Set validation property types
ScrollUp.propTypes = {
    topPosition: _propTypes2.default.number,
    showUnder: _propTypes2.default.number.isRequired, // show button under this position,
    easing: _propTypes2.default.oneOf(['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce']),
    duration: _propTypes2.default.number, // seconds
    style: _propTypes2.default.object
};
