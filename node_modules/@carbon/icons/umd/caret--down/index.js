(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CaretDownGlyph = factory());
}(this, (function () { 'use strict';

  var index = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 8 4',
      width: '8',
      height: '4',
    },
    content: [{ elem: 'path', attrs: { d: 'M8 0L4 4 0 0z' } }],
    name: 'caret--down',
  };

  return index;

})));
