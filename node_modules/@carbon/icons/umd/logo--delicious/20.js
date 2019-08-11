(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.LogoDelicious20 = factory());
}(this, (function () { 'use strict';

  var _20 = {
    elem: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 32 32',
      width: 20,
      height: 20,
    },
    content: [{ elem: 'path', attrs: { d: 'M4 16h12v12H4zM16 4h12v12H16z' } }],
    name: 'logo--delicious',
    size: 20,
  };

  return _20;

})));
