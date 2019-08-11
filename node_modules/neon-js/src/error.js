'use strict';

function NeonError(message, line, column) {
	this.name = this.constructor.name;
	this.message = message + " on line " + line + ", column " + column + ".";
	this.line = line;
	this.column = column;
	this.constructor.prototype.__proto__ = Error.prototype;
	if (typeof Error.captureStackTrace !== "undefined") {
		Error.captureStackTrace(this, this.constructor);
	}
}
module.exports = NeonError;
