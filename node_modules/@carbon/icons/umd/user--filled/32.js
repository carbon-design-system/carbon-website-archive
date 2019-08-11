(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.UserFilled32 = factory());
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
        attrs: {
          d:
            'M6 30h20v-5a7.008 7.008 0 0 0-7-7h-6a7.008 7.008 0 0 0-7 7zM9 9a7 7 0 1 0 7-7 7 7 0 0 0-7 7z',
        },
      },
    ],
    name: 'user--filled',
    size: 32,
  };

  return _32;

})));
