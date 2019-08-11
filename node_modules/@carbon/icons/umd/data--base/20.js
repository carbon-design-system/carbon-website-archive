(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.DataBase20 = factory());
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
            'M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2v6H8V5zM8 19v-6h16v6zm0 8v-6h16v6z',
        },
      },
      { elem: 'circle', attrs: { cx: '11', cy: '8', r: '1' } },
      { elem: 'circle', attrs: { cx: '11', cy: '16', r: '1' } },
      { elem: 'circle', attrs: { cx: '11', cy: '24', r: '1' } },
    ],
    name: 'data--base',
    size: 20,
  };

  return _20;

})));
