(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ArrowUp16 = factory());
}(this, (function () { 'use strict';

  var _16 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: 16,
      height: 16,
    },
    content: [
      {
        elem: 'path',
        attrs: { d: 'M3.7 6.7l3.8-3.8V15h1V2.9l3.8 3.8.7-.7-5-5-5 5z' },
      },
    ],
    name: 'arrow--up',
    size: 16,
  };

  return _16;

})));
