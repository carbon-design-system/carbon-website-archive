(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextAlignLeft24 = factory());
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
          d: 'M12 6h14v2H12zm0 6h10v2H12zm0 6h14v2H12zm0 6h10v2H12zM6 4h2v24H6z',
        },
      },
    ],
    name: 'text--align--left',
    size: 24,
  };

  return _24;

})));
