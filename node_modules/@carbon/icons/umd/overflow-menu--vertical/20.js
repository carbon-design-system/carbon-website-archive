(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.OverflowMenuVertical20 = factory());
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
      { elem: 'circle', attrs: { cx: '16', cy: '6', r: '2' } },
      { elem: 'circle', attrs: { cx: '16', cy: '16', r: '2' } },
      { elem: 'circle', attrs: { cx: '16', cy: '26', r: '2' } },
    ],
    name: 'overflow-menu--vertical',
    size: 20,
  };

  return _20;

})));
