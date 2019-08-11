(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CaretSort20 = factory());
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
      { elem: 'path', attrs: { d: 'M9 12l7-8 7 8H9zm14 8l-7 8-7-8h14z' } },
    ],
    name: 'caret--sort',
    size: 20,
  };

  return _20;

})));
