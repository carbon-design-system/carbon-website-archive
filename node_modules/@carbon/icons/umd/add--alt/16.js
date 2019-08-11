(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.AddAlt16 = factory());
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
        attrs: {
          d:
            'M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6m0-1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z',
        },
      },
      { elem: 'path', attrs: { d: 'M11 7.5H8.5V5h-1v2.5H5v1h2.5V11h1V8.5H11z' } },
    ],
    name: 'add--alt',
    size: 16,
  };

  return _16;

})));
