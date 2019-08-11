(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.StarFilled16 = factory());
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
            'M8 1L5.7 5.6l-5.1.7 3.7 3.6-.8 5.1L8 12.6l4.6 2.4-.9-5.1 3.7-3.6-5.1-.7L8 1z',
        },
      },
    ],
    name: 'star--filled',
    size: 16,
  };

  return _16;

})));
