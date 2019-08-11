(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChartLine32 = factory());
}(this, (function () { 'use strict';

  var _32 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 32,
      height: 32,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M4.67 28l6.39-12 7.3 6.49a2 2 0 0 0 1.7.47 2 2 0 0 0 1.42-1.07L27 10.9l-1.82-.9-5.49 11-7.3-6.49a2 2 0 0 0-1.68-.51 2 2 0 0 0-1.42 1L4 25V2H2v26a2 2 0 0 0 2 2h26v-2z',
        },
      },
    ],
    name: 'chart--line',
    size: 32,
  };

  return _32;

})));
