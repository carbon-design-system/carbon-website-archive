(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DownToBottom32 = factory());
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
          d: 'M16 19L6 9l1.41-1.41L16 16.17l8.59-8.58L26 9 16 19zM4 23h24v2H4z',
        },
      },
    ],
    name: 'down-to-bottom',
    size: 32,
  };

  return _32;

})));
