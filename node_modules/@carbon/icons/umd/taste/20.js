(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Taste20 = factory());
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
        attrs: {
          d:
            'M4 4v2h4v8a8 8 0 0 0 16 0V6h4V4zm18 10a6 6 0 0 1-12 0V6h5v8h2V6h5zM11 26h2v2h-2zm-4-2h2v2H7zm8 0h2v2h-2zm4 2h2v2h-2zm4-2h2v2h-2z',
        },
      },
    ],
    name: 'taste',
    size: 20,
  };

  return _20;

})));
