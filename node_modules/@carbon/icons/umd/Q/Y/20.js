(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.QY20 = factory());
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
      { elem: 'path', attrs: { d: 'M20 9h-2l-2 7-2-7h-2l3 9v5h2v-5l3-9z' } },
    ],
    name: 'Y',
    size: 20,
  };

  return _20;

})));
