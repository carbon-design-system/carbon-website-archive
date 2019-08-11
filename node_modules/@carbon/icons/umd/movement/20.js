(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Movement20 = factory());
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
            'M24 20l-1.41 1.41L26.17 25H10a4 4 0 0 1 0-8h12a6 6 0 0 0 0-12H5.83l3.58-3.59L8 0 2 6l6 6 1.41-1.41L5.83 7H22a4 4 0 0 1 0 8H10a6 6 0 0 0 0 12h16.17l-3.58 3.59L24 32l6-6z',
        },
      },
    ],
    name: 'movement',
    size: 20,
  };

  return _20;

})));
