(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.StarFilled20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M16 2l-4.55 9.22-10.17 1.47 7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13 7.36-7.17-10.17-1.48z',
        },
      },
    ],
    name: 'star--filled',
    size: 20,
  };

  return _20;

})));
