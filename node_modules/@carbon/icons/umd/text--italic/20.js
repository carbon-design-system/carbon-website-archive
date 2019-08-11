(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextItalic20 = factory());
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
        attrs: { d: 'M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14H25z' },
      },
    ],
    name: 'text--italic',
    size: 20,
  };

  return _20;

})));
