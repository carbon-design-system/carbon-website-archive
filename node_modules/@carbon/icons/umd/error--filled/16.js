(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ErrorFilled16 = factory());
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
            'M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm2.7 10.5L4.5 5.3l.8-.8 6.2 6.2-.8.8z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d: 'M10.7 11.5L4.5 5.3l.8-.8 6.2 6.2-.8.8z',
          'data-icon-path': 'inner-path',
          opacity: '0',
        },
      },
    ],
    name: 'error--filled',
    size: 16,
  };

  return _16;

})));
