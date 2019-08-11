'use strict';

module.exports = function (value, attrs) {

	this.value = null;
	this.attributes = null;

	if (typeof value === "undefined") {
		value = null;
	}

	if (typeof attrs === "undefined") {
		attrs = null;
	}

	this.value = value;
	this.attributes = attrs;
};
