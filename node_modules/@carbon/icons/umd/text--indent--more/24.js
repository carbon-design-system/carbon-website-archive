(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextIndentMore24 = factory());
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
            'M20 6h10v2H20zm0 6h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zM14 4h2v24h-2zM3.85 22.5l-1.41-1.38L8.73 15 2.44 8.88 3.85 7.5l7.71 7.5-7.71 7.5z',
        },
      },
    ],
    name: 'text--indent--more',
    size: 24,
  };

  return _24;

})));
