"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonTypes = void 0;

var _propTypes = require("prop-types");

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ButtonTypes = {
  buttonKind: (0, _propTypes.oneOf)(['primary', 'secondary', 'danger', 'ghost', 'danger--primary', 'tertiary'])
};
exports.ButtonTypes = ButtonTypes;