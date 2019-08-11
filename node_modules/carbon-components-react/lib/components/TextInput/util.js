"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textInputProps = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var invalidProps = function invalidProps(_ref) {
  var invalid = _ref.invalid,
      errorId = _ref.errorId;
  return {
    'data-invalid': invalid,
    'aria-invalid': invalid,
    'aria-describedby': errorId
  };
};

var textInputProps = function textInputProps(_ref2) {
  var invalid = _ref2.invalid,
      sharedTextInputProps = _ref2.sharedTextInputProps,
      errorId = _ref2.errorId;
  return _objectSpread({}, sharedTextInputProps, invalid ? invalidProps({
    invalid: invalid,
    errorId: errorId
  }) : {});
};

exports.textInputProps = textInputProps;