(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.LogoFlickr24 = factory());
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
      { elem: 'circle', attrs: { cx: '8', cy: '16', r: '6' } },
      { elem: 'circle', attrs: { cx: '24', cy: '16', r: '6' } },
    ],
    name: 'logo--flickr',
    size: 24,
  };

  return _24;

})));
