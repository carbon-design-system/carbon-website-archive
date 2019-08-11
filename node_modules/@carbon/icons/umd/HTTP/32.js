(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Http32 = factory());
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
          d:
            'M30 11h-5v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2.002 2.002 0 0 0-2-2zm-3 5v-3h3l.001 3zm-17-3h2v8h2v-8h2v-2h-6v2zm13-2h-6v2h2v8h2v-8h2v-2zM6 11v4H3v-4H1v10h2v-4h3v4h2V11H6z',
        },
      },
    ],
    name: 'HTTP',
    size: 32,
  };

  return _32;

})));
