'use strict';

function Map() {
	this._items = [];
	this._indexes = {};
	this._key = 0;
	this.length = 0;

	this.set = function (key, value, replace) {
		if (typeof replace === "undefined") {
			replace = true;
		}
		if (key === null) {
			key = this._key++;
		} else {
			var number = parseInt(key * 1);
			if (!isNaN(number) && number >= this._key) {
				this._key = number + 1;
			}
		}
		if (typeof this._indexes[key] === "undefined") {
			this._items[this.length] = {key: key, value: value};
			this._indexes[key] = this.length;
			this.length++;
			return 1;
		} else if (replace) {
			this._items[this._indexes[key]].value = value;
			return 0;
		} else {
			return -1;
		}
	};

	this.add = function (key, value) {
		return this.set(key, value, false) === 1;
	};

	this.get = function (key) {
		if (!this.has(key)) {
			throw new Error("Item with key " + key + " not exists");
		}
		return this._items[this._indexes[key]].value;
	};

	this.last = function () {
		if (this.length === 0) {
			throw new Error("Map has no items");
		}
		return this._items[this.length - 1];
	};

	this.has = function (key) {
		return typeof this._indexes[key] !== "undefined";
	};

	this.remove = function (key) {
		if (!this.has(key)) {
			throw new Error("Item with key " + key + " not exists");
		}
		delete this._items[this._indexes[key]];
		delete this._indexes[key];
		this.length--;
	};

	this.items = function () {
		return this._items;
	};

	this.keys = function () {
		var keys = [];
		for (var i in this._items) {
			keys.push(this._items[i].key);
		}
		return keys;
	};

	this.values = function () {
		var values = [];
		for (var i in this._items) {
			values.push(this._items[i].value);
		}
		return values;
	};

	this.toObject = function (deep) {
		if (typeof deep === "undefined") {
			deep = false;
		}
		var result = {};
		for (var i in this._items) {
			var value = this._items[i].value;
			result[this._items[i].key] = value instanceof Map && deep ? value.toObject(true) : value;
		}

		return result;
	};

	this.forEach = function (callable) {
		for (var i in this._items) {
			callable(this._items[i].key, this._items[i].value);
		}
	};

	this.isList = function () {
		return (function(items) {
			var cmp = 0;
			for(var i in items) {
				if(cmp !== items[i].key) {
					return false;
				}
				cmp = items[i].key + 1;
			}
			return true;
		})(this.items());
	};

}
Map.fromObject = function (obj) {
	var mapInst = new Map;
	for (var key in obj) {
		mapInst.set(key, obj[key]);
	}
	return mapInst;
};

Map.fromArray = function (obj) {
	var mapInst = new Map;
	for (var i in obj) {
		mapInst.set(null, obj[i]);
	}
	return mapInst;
};

module.exports = Map;
