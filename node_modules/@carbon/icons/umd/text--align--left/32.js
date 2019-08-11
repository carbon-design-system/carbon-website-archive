(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextAlignLeft32 = factory());
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
          d: 'M12 6h14v2H12zm0 6h10v2H12zm0 6h14v2H12zm0 6h10v2H12zM6 4h2v24H6z',
        },
      },
    ],
    name: 'text--align--left',
    size: 32,
  };

  return _32;

})));
