(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Stop16 = factory());
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
            'M12 4v8H4V4h8m0-1H4c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1z',
        },
      },
    ],
    name: 'stop',
    size: 16,
  };

  return _16;

})));
