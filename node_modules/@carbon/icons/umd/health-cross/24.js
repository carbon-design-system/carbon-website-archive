(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.HealthCross24 = factory());
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
        attrs: {
          d:
            'M19 28h-6a2.002 2.002 0 0 1-2-2v-5H6a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h5V6a2.002 2.002 0 0 1 2-2h6a2.002 2.002 0 0 1 2 2v5h5a2.002 2.002 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-5v5a2.003 2.003 0 0 1-2 2zM6 13v6h7v7h6v-7h7v-6h-7V6h-6v7z',
        },
      },
    ],
    name: 'health-cross',
    size: 24,
  };

  return _24;

})));
