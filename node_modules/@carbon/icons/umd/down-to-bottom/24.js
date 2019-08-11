(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DownToBottom24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d: 'M16 19L6 9l1.41-1.41L16 16.17l8.59-8.58L26 9 16 19zM4 23h24v2H4z',
        },
      },
    ],
    name: 'down-to-bottom',
    size: 24,
  };

  return _24;

})));
