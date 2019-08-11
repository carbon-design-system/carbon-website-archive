(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextScale20 = factory());
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
      { elem: 'path', attrs: { d: 'M30 5v3h-8v18h-3V8h-8V5h19z' } },
      { elem: 'path', attrs: { d: 'M7 26V14H2v-2h12v2H9v12H7z' } },
    ],
    name: 'text--scale',
    size: 20,
  };

  return _20;

})));
