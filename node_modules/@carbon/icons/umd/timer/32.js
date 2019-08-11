(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Timer32 = factory());
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
      { elem: 'path', attrs: { d: 'M15 11h2v9h-2zm-2-9h6v2h-6z' } },
      {
        elem: 'path',
        attrs: {
          d:
            'M28 9l-1.42-1.41-2.25 2.25a10.94 10.94 0 1 0 1.18 1.65zM16 26a9 9 0 1 1 9-9 9 9 0 0 1-9 9z',
        },
      },
    ],
    name: 'timer',
    size: 32,
  };

  return _32;

})));
