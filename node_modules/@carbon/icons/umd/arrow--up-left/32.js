(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ArrowUpLeft32 = factory());
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
        attrs: { d: 'M22 6v2H9.41L26 24.59 24.59 26 8 9.41V22H6V6h16z' },
      },
    ],
    name: 'arrow--up-left',
    size: 32,
  };

  return _32;

})));
