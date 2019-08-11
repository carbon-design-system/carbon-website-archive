(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Scan24 = factory());
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
        attrs: { d: 'M21 29H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16v2H5v22h16z' },
      },
      {
        elem: 'path',
        attrs: { d: 'M15 9h2v14h-2zm12 0h2v14h-2zm-6 0h2v14h-2z' },
      },
    ],
    name: 'scan',
    size: 24,
  };

  return _24;

})));
