(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChevronDownGlyph = factory());
}(this, (function () { 'use strict';

  var index = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 10 6',
      width: '10',
      height: '6',
    },
    content: [{ elem: 'path', attrs: { d: 'M5 6L0 1 .7.3 5 4.6 9.3.3l.7.7z' } }],
    name: 'chevron--down',
  };

  return index;

})));
