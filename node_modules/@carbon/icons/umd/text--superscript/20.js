(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextSuperscript20 = factory());
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
        attrs: { d: 'M29 17h-6v-6h4V9h-4V7h6v6h-4v2h4v2zM4 7v2h7v16h2V9h7V7H4z' },
      },
    ],
    name: 'text--superscript',
    size: 20,
  };

  return _20;

})));
