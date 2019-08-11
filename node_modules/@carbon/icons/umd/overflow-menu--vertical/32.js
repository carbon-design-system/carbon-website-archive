(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OverflowMenuVertical32 = factory());
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
      { elem: 'circle', attrs: { cx: '16', cy: '6', r: '2' } },
      { elem: 'circle', attrs: { cx: '16', cy: '16', r: '2' } },
      { elem: 'circle', attrs: { cx: '16', cy: '26', r: '2' } },
    ],
    name: 'overflow-menu--vertical',
    size: 32,
  };

  return _32;

})));
