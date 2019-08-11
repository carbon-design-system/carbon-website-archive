(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QueryQueue24 = factory());
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
            'M10 6h18v2H10zm0 6h18v2H10zm5 6h13v2H15zm-5 6h18v2H10zM4 14l7 5-7 5V14z',
        },
      },
    ],
    name: 'query-queue',
    size: 24,
  };

  return _24;

})));
