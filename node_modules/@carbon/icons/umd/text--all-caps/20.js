(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.TextAllCaps20 = factory());
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
        attrs: { d: 'M1 8v2h6v14h2V10h6V8H1zm16 0v2h6v14h2V10h6V8H17z' },
      },
    ],
    name: 'text--all-caps',
    size: 20,
  };

  return _20;

})));
