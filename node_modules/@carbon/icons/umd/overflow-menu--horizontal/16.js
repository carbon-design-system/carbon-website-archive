(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OverflowMenuHorizontal16 = factory());
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
      { elem: 'circle', attrs: { cx: '3', cy: '8', r: '1' } },
      { elem: 'circle', attrs: { cx: '8', cy: '8', r: '1' } },
      { elem: 'circle', attrs: { cx: '13', cy: '8', r: '1' } },
    ],
    name: 'overflow-menu--horizontal',
    size: 16,
  };

  return _16;

})));
