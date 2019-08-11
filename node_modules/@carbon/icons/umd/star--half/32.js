(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.StarHalf32 = factory());
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
        attrs: {
          d: 'M11.45 11.22L1.28 12.7l7.36 7.17L6.9 30l9.1-4.78V2l-4.55 9.22z',
        },
      },
    ],
    name: 'star--half',
    size: 32,
  };

  return _32;

})));
