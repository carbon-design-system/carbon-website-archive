(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CaretSort16 = factory());
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
      { elem: 'path', attrs: { d: 'M4.5 6L8 2l3.5 4zm7 4L8 14l-3.5-4z' } },
    ],
    name: 'caret--sort',
    size: 16,
  };

  return _16;

})));
