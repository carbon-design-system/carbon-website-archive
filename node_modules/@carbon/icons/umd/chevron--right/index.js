(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChevronRightGlyph = factory());
}(this, (function () { 'use strict';

  var index = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 6 10',
      width: '6',
      height: '10',
    },
    content: [{ elem: 'path', attrs: { d: 'M6 5l-5 5-.7-.7L4.6 5 .3.7 1 0z' } }],
    name: 'chevron--right',
  };

  return index;

})));
