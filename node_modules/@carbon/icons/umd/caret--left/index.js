(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CaretLeftGlyph = factory());
}(this, (function () { 'use strict';

  var index = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 5 8',
      width: '5',
      height: '8',
    },
    content: [{ elem: 'path', attrs: { d: 'M5 8L0 4l5-4z' } }],
    name: 'caret--left',
  };

  return index;

})));
