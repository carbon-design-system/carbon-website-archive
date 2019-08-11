weakmap-polyfill
================

[![Build Status](https://travis-ci.org/polygonplanet/weakmap-polyfill.svg?branch=master)](https://travis-ci.org/polygonplanet/weakmap-polyfill)


[ECMAScript6 WeakMap](http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects) polyfill.

## Installation

Available on `npm` as **weakmap-polyfill**.

```bash
$ npm install weakmap-polyfill --save
```

This can also be installed with `Bower`.

```bash
$ bower install weakmap-polyfill
```

**WeakMap** will defined in the global scope if native WeakMap is not supported.


```javascript
require('weakmap-polyfill');
var weakMap = new WeakMap();
```

## License

MIT


