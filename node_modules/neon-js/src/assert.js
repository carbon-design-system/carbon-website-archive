'use strict';

var mainAssert = require('assert');
var Map = require('./map');
var Entity = require('./entity');

module.exports.equal = function (actual, expected) {
	var mapToObject = function (value) {
		if (value instanceof Map) {
			var obj = {};
			value.forEach(function (key, value) {
				obj[key] = mapToObject(value);
			});
			return obj;
		} else if (value instanceof Entity) {
			value.attributes = mapToObject(value.attributes);
			value.value = mapToObject(value.value);
		}

		return value;
	};
	return mainAssert.deepEqual(mapToObject(actual), expected);
};
