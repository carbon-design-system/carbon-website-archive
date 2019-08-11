(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ArrowUp20 = factory());
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
          d: 'M16 4L6 14l1.41 1.41L15 7.83V30h2V7.83l7.59 7.58L26 14 16 4z',
        },
      },
    ],
    name: 'arrow--up',
    size: 20,
  };

  return _20;

})));
