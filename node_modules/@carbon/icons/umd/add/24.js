(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Add24 = factory());
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
      { elem: 'path', attrs: { d: 'M17 15V7h-2v8H7v2h8v8h2v-8h8v-2h-8z' } },
    ],
    name: 'add',
    size: 24,
  };

  return _24;

})));
