(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MacOption32 = factory());
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
        attrs: { d: 'M18 5h10v2H18zm-7.4 0H4v2h5.4l9 20H28v-2h-8.4z' },
      },
    ],
    name: 'mac--option',
    size: 32,
  };

  return _32;

})));
