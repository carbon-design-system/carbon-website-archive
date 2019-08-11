"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextIndex = void 0;

var _keys = require("./keys");

var _match = require("./match");

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Various utilities to help with a11y work
 */

/**
 * A "ring buffer" function that takes an array and depending on an ArrowRight
 * or ArrowLeft key input loops from last index to first or first index to last.
 *
 * @param {string} key - the left or right arrow keys
 * @param {number} index - the current index in a given array
 * @param {number} arrayLength - the total length of the array
 *
 * @example
 * 	getNextIndex(keyCodes.RIGHT, 0, 4)
 */
var getNextIndex = function getNextIndex(key, index, arrayLength) {
  if ((0, _match.match)(key, _keys.ArrowRight)) {
    return (index + 1) % arrayLength;
  }

  if ((0, _match.match)(key, _keys.ArrowLeft)) {
    return (index + arrayLength - 1) % arrayLength;
  }
};

exports.getNextIndex = getNextIndex;