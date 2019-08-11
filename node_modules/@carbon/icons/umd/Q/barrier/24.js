(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QBarrier24 = factory());
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
        attrs: { d: 'M15 5h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2zm0 6h2v4h-2z' },
      },
    ],
    name: 'barrier',
    size: 24,
  };

  return _24;

})));
