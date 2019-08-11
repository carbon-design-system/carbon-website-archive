(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Delete16 = factory());
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
      { elem: 'path', attrs: { d: 'M6 6h1v6H6zm3 0h1v6H9z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M2 3v1h1v10c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V4h1V3H2zm2 11V4h8v10H4zM6 1h4v1H6z',
        },
      },
    ],
    name: 'delete',
    size: 16,
  };

  return _16;

})));
