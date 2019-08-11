(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Opacity24 = factory());
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
      {
        elem: 'path',
        attrs: {
          d:
            'M6 6h4v4H6zm4 4h4v4h-4zm4-4h4v4h-4zm8 0h4v4h-4zM6 14h4v4H6zm8 0h4v4h-4zm8 0h4v4h-4zM6 22h4v4H6zm8 0h4v4h-4zm8 0h4v4h-4zm-4-12h4v4h-4zm-8 8h4v4h-4zm8 0h4v4h-4z',
        },
      },
    ],
    name: 'opacity',
    size: 24,
  };

  return _24;

})));
