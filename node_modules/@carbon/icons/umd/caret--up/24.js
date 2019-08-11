(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CaretUp24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [{ elem: 'path', attrs: { d: 'M9 20l7-8 7 8H9z' } }],
    name: 'caret--up',
    size: 24,
  };

  return _24;

})));
