(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ChevronSortUp16 = factory());
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
      { elem: 'path', attrs: { d: 'M8 2l3.5 3.5-.7.7L8 3.4 5.2 6.2l-.7-.7z' } },
    ],
    name: 'chevron--sort--up',
    size: 16,
  };

  return _16;

})));
