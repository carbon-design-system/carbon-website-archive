(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.CheckmarkFilled20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 20 20',
      width: 20,
      height: 20,
    },
    content: [
      {
        elem: 'path',
        attrs: {
          d:
            'M10 1c-4.9 0-9 4.1-9 9s4.1 9 9 9 9-4 9-9-4-9-9-9zM8.7 13.5l-3.2-3.2 1-1 2.2 2.2 4.8-4.8 1 1-5.8 5.8z',
        },
      },
      {
        elem: 'path',
        attrs: {
          d: 'M8.7 13.5l-3.2-3.2 1-1 2.2 2.2 4.8-4.8 1 1-5.8 5.8z',
          'data-icon-path': 'inner-path',
          opacity: '0',
        },
      },
    ],
    name: 'checkmark--filled',
    size: 20,
  };

  return _20;

})));
