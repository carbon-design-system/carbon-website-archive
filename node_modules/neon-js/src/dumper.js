'use strict';

var Map = require('./map');
var Entity = require('./entity');
var Decoder = require('./decoder');

function toText(xvar) {
	if (xvar instanceof Date) {
		return "(date) " + xvar.toJSON();

	} else if (xvar instanceof Entity) {
		var attrs = '';
		if (xvar.attributes !== null && typeof xvar.attributes === "object") {
			attrs = toText(xvar.attributes);
		}
		return "(entity)\n\tname: " + toText(xvar.value)
		+ "\n\tattributes: " + (attrs.indexOf("\n") === -1 ? ("" + attrs) : attrs.replace(/\n/g, "\n\t"));
	}

	if (xvar instanceof Map) {
		var s = "array (" + xvar.length + ")\n";
		xvar.forEach(function (key, val) {
			var value = toText(val);
			s += "\t" + (toText(key) + " => ")
			+ "" + (value.indexOf("\n") === -1 ? ("" + value) : value.replace(/\n/g, "\n\t"))
			+ "" + "\n";
		});
		return s.trim() + "\n";

	} else if (typeof xvar == "string" && isNaN(xvar)
		&& !xvar.match(/[\x00-\x1F]|^\d{4}|^(true|false|yes|no|on|off|null)$/i)
		&& (new RegExp("^" + Decoder.patterns[1] + "$")).exec(xvar) // 1 = literals
	) {
		return '"' + xvar + '" (' + xvar.length + ")";
	} else {
		return JSON.stringify(xvar);
	}
}

module.exports.toText = toText;
