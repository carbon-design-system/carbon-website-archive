/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var TableToolbar = function TableToolbar(_ref) {
  var children = _ref.children;
  return React.createElement("section", {
    "aria-label": "data table toolbar",
    className: "".concat(prefix, "--table-toolbar")
  }, children);
};

export default TableToolbar;