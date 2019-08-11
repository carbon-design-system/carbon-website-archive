(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CaretRightGlyph = factory());
}(this, (function () { 'use strict';

  var index = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 5 8',
      width: '5',
      height: '8',
    },
    content: [{ elem: 'path', attrs: { d: 'M0 0l5 4-5 4z' } }],
    name: 'caret--right',
  };

  return index;

})));
