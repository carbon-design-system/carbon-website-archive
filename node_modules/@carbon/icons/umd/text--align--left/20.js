(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextAlignLeft20 = factory());
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
          d: 'M12 6h14v2H12zm0 6h10v2H12zm0 6h14v2H12zm0 6h10v2H12zM6 4h2v24H6z',
        },
      },
    ],
    name: 'text--align--left',
    size: 20,
  };

  return _20;

})));
