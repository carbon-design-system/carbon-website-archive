(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.PageLast20 = factory());
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
        attrs: { d: 'M18 16L8 26l-1.4-1.4 8.6-8.6-8.6-8.6L8 6zm4-12h2v24h-2z' },
      },
    ],
    name: 'page--last',
    size: 20,
  };

  return _20;

})));
