(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Menu32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      {
        elem: 'path',
        attrs: { d: 'M4 24h24v2H4zm0-12h24v2H4zm0 6h24v2H4zM4 6h24v2H4z' },
      },
    ],
    name: 'menu',
    size: 32,
  };

  return _32;

})));
