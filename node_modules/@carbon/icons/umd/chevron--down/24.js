(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChevronDown24 = factory());
}(this, (function () { 'use strict';

  var _24 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 24,
      height: 24,
    },
    content: [
      {
        elem: 'path',
        attrs: { d: 'M16 22L6 12l1.4-1.4 8.6 8.6 8.6-8.6L26 12z' },
      },
    ],
    name: 'chevron--down',
    size: 24,
  };

  return _24;

})));
