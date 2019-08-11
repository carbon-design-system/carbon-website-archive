(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Txt20 = factory());
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
        attrs: {
          d:
            'M21 11h3v12h2V11h3V9h-8v2zm-1-2h-2l-2 6-2-6h-2l2.75 7L12 23h2l2-6 2 6h2l-2.75-7L20 9zM3 11h3v12h2V11h3V9H3v2z',
        },
      },
    ],
    name: 'TXT',
    size: 20,
  };

  return _20;

})));
