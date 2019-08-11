/*global describe, beforeEach, afterEach, it, assert*/

'use strict';

describe('WeakMap', function() {

  var defineProperty = function(object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  var isEnumerable = (function() {
    var f = function() {};
    defineProperty(f, 'p', 1);
    var keys = Object.keys(f);

    if (keys.indexOf('p') !== -1) {
      return function() {
        // skip
        return false;
      };
    }

    return function(object, key) {
      return Object.keys(object).indexOf(key) !== -1;
    };
  })();

  if (!WeakMap._polyfill) {
    return it('skip test for native implementation', function() {
      assert(true);
    });
  }

  var map;

  beforeEach(function() {
    map = new WeakMap();
  });

  afterEach(function() {
    map = null;
  });

  it('should be a callable constructor', function() {
    assert(typeof WeakMap === 'function');
  });

  it('should have the length property whose value is 0', function() {
    assert(WeakMap.length === 0);
  });

  it('should not be callable without "new"', function() {
    assert.throws(function() { WeakMap(); }, TypeError);
  });

  it('should have prototype methods', function() {
    ['delete', 'get', 'has', 'set'].forEach(function(method) {
      assert(typeof map[method] === 'function');
    });
  });

  it('constructor should be designed to be subclassable', function() {
    if (!Object.setPrototypeOf) {
      // skip
      return;
    }

    var obj = {};

    function MyWeakMap() {
      var instance = new WeakMap();
      instance.set(obj, 1);
      Object.setPrototypeOf(instance, MyWeakMap.prototype);
      return instance;
    }

    Object.setPrototypeOf(MyWeakMap, WeakMap);
    MyWeakMap.prototype = Object.create(WeakMap.prototype, {
      constructor: {
        value: MyWeakMap
      }
    });

    var obj2 = {};
    var myWeakMap = new MyWeakMap();
    myWeakMap.set(obj2, 2);

    assert(myWeakMap.get(obj) === 1);
    assert(myWeakMap.get(obj2) === 2);
  });

  it('should not have [[Enumerable]] props', function() {
    assert(!isEnumerable(WeakMap, 'prototype'));
    assert(!isEnumerable(new WeakMap(), 'prototype'));
  });

  it('should not have an own constructor', function() {
    assert(!isEnumerable(map, 'constructor'));
    assert(map.constructor === WeakMap);
    assert(map instanceof WeakMap);
  });

  it('should have a unique constructor', function() {
    assert(WeakMap.prototype !== Object.prototype);
  });

  it('should have valid methods', function() {
    var obj = {};
    assert(map.has(obj) === false);
    assert(map.get(obj) === void 0);
    assert(map['delete'](obj) === false);
    assert(map.set(obj, 1) === map);
    assert(map.has(obj) === true);
    assert(map.get(obj) === 1);
    assert(map['delete'](obj) === true);
    assert(map.has(obj) === false);
    assert(map.get(obj) === void 0);
    assert(map['delete'](obj) === false);
  });

  it('should be different for each instance', function() {
    var map2 = new WeakMap();
    var obj = {};
    assert(map.set(obj, 1) === map);
    assert(map2.set(obj, 2) === map2);
    assert(map.get(obj) === 1);
    assert(map2.get(obj) === 2);
    assert(map['delete'](obj) === true);
    assert(map.has(obj) === false);
    assert(map2.has(obj) === true);
    assert(map2.get(obj) === 2);
    assert(map2['delete'](obj) === true);
    assert(map2.has(obj) === false);
    assert(map2.get(obj) === void 0);
  });

  describe('#delete()', function() {
    it('should not have enumerable property', function() {
      assert(typeof WeakMap.prototype['delete'] === 'function');
      assert(!isEnumerable(WeakMap.prototype, 'delete'));
    });

    it('should have the length property whose value is 1', function() {
      assert(WeakMap.prototype['delete'].length === 1);
    });

    it('should called from a valid instance', function() {
      assert.throws(function() {
        WeakMap.prototype['delete'].call({});
      }, TypeError);
    });

    it('should return false if the key is not of an object', function() {
      assert(map['delete']() === false);
      assert(map['delete'](null) === false);
      assert(map['delete'](0) === false);
      assert(map['delete']('') === false);
      assert(map['delete'](true) === false);
    });
  });

  describe('#get()', function() {
    it('should not have enumerable property', function() {
      assert(typeof WeakMap.prototype.get === 'function');
      assert(!isEnumerable(WeakMap.prototype, 'get'));
    });

    it('should have the length property whose value is 1', function() {
      assert(WeakMap.prototype.get.length === 1);
    });

    it('should called from a valid instance', function() {
      assert.throws(function() {
        WeakMap.prototype.get.call({});
      }, TypeError);
    });

    it('should return undefined if the key is not of an object', function() {
      assert(map.get() === void 0);
      assert(map.get(null) === void 0);
      assert(map.get(0) === void 0);
      assert(map.get('') === void 0);
      assert(map.get(true) === void 0);
    });
  });

  describe('#has()', function() {
    it('should not have enumerable property', function() {
      assert(typeof WeakMap.prototype.has === 'function');
      assert(!isEnumerable(WeakMap.prototype, 'has'));
    });

    it('should have the length property whose value is 1', function() {
      assert(WeakMap.prototype.has.length === 1);
    });

    it('should called from a valid instance', function() {
      assert.throws(function() {
        WeakMap.prototype.has.call({});
      }, TypeError);
    });

    it('should return false if the key is not of an object', function() {
      assert(map.has() === false);
      assert(map.has(null) === false);
      assert(map.has(0) === false);
      assert(map.has('') === false);
      assert(map.has(true) === false);
    });
  });

  describe('#set()', function() {
    it('should not have enumerable property', function() {
      assert(typeof WeakMap.prototype.set === 'function');
      assert(!isEnumerable(WeakMap.prototype, 'set'));
    });

    it('should have the length property whose value is 2', function() {
      assert(WeakMap.prototype.set.length === 2);
    });

    it('should called from a valid instance', function() {
      assert.throws(function() {
        WeakMap.prototype.set.call({});
      }, TypeError);
    });

    it('should throw TypeError if passed key as primitives', function() {
      assert.throws(function() { map.set(); }, TypeError);
      assert.throws(function() { map.set(null); }, TypeError);
      assert.throws(function() { map.set(0); }, TypeError);
      assert.throws(function() { map.set(''); }, TypeError);
      assert.throws(function() { map.set(true); }, TypeError);
    });

    it('should return own instance', function() {
      assert(map.set({}) === map);
      assert(map.set(function() {}) === map);
    });
  });
});
