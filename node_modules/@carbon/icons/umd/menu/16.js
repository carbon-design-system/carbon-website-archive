(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Menu16 = factory());
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
      {
        elem: 'path',
        attrs: { d: 'M2 12h12v1H2zm0-3h12v1H2zm0-3h12v1H2zm0-3h12v1H2z' },
      },
    ],
    name: 'menu',
    size: 16,
  };

  return _16;

})));
