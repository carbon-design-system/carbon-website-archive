(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Maximize16 = factory());
}(this, (function () { 'use strict';

  var _16 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: 16,
      height: 16,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M10 1v1h3.3L8.5 6.8l.7.7L14 2.7V6h1V1zM7.5 9.2l-.7-.7L2 13.3V10H1v5h5v-1H2.7z',
        },
      },
    ],
    name: 'maximize',
    size: 16,
  };

  return _16;

})));
