(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.PageFirst20 = factory());
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
        attrs: { d: 'M14 16L24 6l1.4 1.4-8.6 8.6 8.6 8.6L24 26zM8 4h2v24H8z' },
      },
    ],
    name: 'page--first',
    size: 20,
  };

  return _20;

})));
