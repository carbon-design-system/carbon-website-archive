(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextAlignRight32 = factory());
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
          d: 'M6 6h14v2H6zm4 6h10v2H10zm-4 6h14v2H6zm4 6h10v2H10zM24 4h2v24h-2z',
        },
      },
    ],
    name: 'text--align--right',
    size: 32,
  };

  return _32;

})));
