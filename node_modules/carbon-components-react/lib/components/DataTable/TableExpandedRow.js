"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _carbonComponents = require("carbon-components");

var _TableCell = _interopRequireDefault(require("./TableCell"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var TableExpandedRow = function TableExpandedRow(_ref) {
  var customClassName = _ref.className,
      children = _ref.children,
      colSpan = _ref.colSpan,
      rest = _objectWithoutProperties(_ref, ["className", "children", "colSpan"]);

  var rowRef = (0, _react.useRef)(null);
  var className = (0, _classnames.default)("".concat(prefix, "--expandable-row"), customClassName);

  var toggleParentHoverClass = function toggleParentHoverClass(eventType) {
    if (rowRef && rowRef.current && rowRef.current.previousElementSibling) {
      var parentNode = rowRef.current.previousElementSibling;

      if (eventType === 'enter') {
        parentNode.classList.add("".concat(prefix, "--expandable-row--hover"));
      } else {
        parentNode.classList.remove("".concat(prefix, "--expandable-row--hover"));
      }
    }
  };

  return _react.default.createElement("tr", _extends({
    ref: rowRef,
    onMouseEnter: function onMouseEnter() {
      return toggleParentHoverClass('enter');
    },
    onMouseLeave: function onMouseLeave() {
      return toggleParentHoverClass('leave');
    }
  }, rest, {
    className: className,
    "data-child-row": true
  }), _react.default.createElement(_TableCell.default, {
    colSpan: colSpan
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--child-row-inner-container")
  }, children)));
};

TableExpandedRow.propTypes = {
  /**
   * Pass in the contents for your TableExpandedRow
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * The width of the expanded row's internal cell
   */
  colSpan: _propTypes.default.number.isRequired
};
var _default = TableExpandedRow;
exports.default = _default;