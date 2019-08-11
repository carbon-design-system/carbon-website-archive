'use strict';

require('es5-shim');
require('es5-shim/es5-sham');
require('../weakmap-polyfill');

// Use the `global` in order to run a common test in browser and node
global.assert = require('power-assert');

require('./test');
