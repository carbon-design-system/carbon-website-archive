(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OverflowMenuHorizontal24 = factory());
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
      { elem: 'circle', attrs: { cx: '6', cy: '16', r: '2' } },
      { elem: 'circle', attrs: { cx: '16', cy: '16', r: '2' } },
      { elem: 'circle', attrs: { cx: '26', cy: '16', r: '2' } },
    ],
    name: 'overflow-menu--horizontal',
    size: 24,
  };

  return _24;

})));
