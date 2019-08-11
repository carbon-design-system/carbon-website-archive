(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Reset24 = factory());
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
            'M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6 6-6-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10z',
        },
      },
    ],
    name: 'reset',
    size: 24,
  };

  return _24;

})));
