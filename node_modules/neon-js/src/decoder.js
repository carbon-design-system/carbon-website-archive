'use strict';

var Map = require("./map");
var Entity = require("./entity");
var NeonError = require('./error');


function Result() {
	this.key = 0;
	this.value = null;
	this.add = function (key, value) {
		if (this.value === null) {
			this.value = new Map();
		}
		return this.value.add(key, value);
	};
}


function decoder(output) {
	if (typeof output === "undefined") {
		output = decoder.MAP;
	}

	/** @var array */
	this.tokens = [];

	/** @var int */
	this.pos = 0;

	this.input = "";


	/**
	 * Decodes a NEON string.
	 * @param  input string
	 * @return mixed
	 */
	this.decode = function (input) {

		if (typeof (input) != "string") {
			throw 'Argument must be a string, ' + typeof input + ' given.';

		} else if (input.substr(0, 3) == "\xEF\xBB\xBF") { // BOM
			input = input.substr(3);
		}
		this.input = "\n" + "" + input.replace(/\r\n/g, "\n"); // \n forces indent detection

		var regexp = new RegExp('(' + "" + decoder.patterns.join(')|(') + "" + ')', 'mig');
		this.tokens = this.split(regexp, this.input);

		var last = this.tokens[this.tokens.length - 1];
		if (this.tokens && !regexp.test(last[0])) {
			this.pos = this.tokens.length - 1;
			this.error();
		}

		this.pos = 0;
		var res = this.parse(null);

		while ((this.tokens[this.pos])) {
			if (this.tokens[this.pos][0][0] === "\n") {
				this.pos++;
			} else {
				this.error();
			}
		}
		var flatten = function (res) {
			if (res instanceof Result) {
				return flatten(res.value);
			} else if (res instanceof Entity) {
				res.attributes = flatten(res.attributes);
				res.value = flatten(res.value);
			} else if (res instanceof Map) {
				if (output === decoder.FORCE_OBJECT) {
					var obj = {};
					res.forEach(function (key, value) {
						obj[key] = flatten(value);
					});
					return obj;
				} else {
					var result = new Map;
					var isList = true;
					var cmp = 0;
					res.forEach(function (key, value) {
						result.set(key, flatten(value));
						if (key !== cmp++) {
							isList = false;
						}
					});
					if (output === decoder.MAP) {
						return result;
					} else {
						return isList ? result.values() : result.toObject();
					}
				}
			}
			return res;

		};
		return flatten(res);

	};


	/**
	 * @param  indent string  indentation (for block-parser)
	 * @param  key mixed
	 * @param  hasKey bool
	 * @return array
	 */
	this.parse = function (indent, defaultValue, key, hasKey) {
		if (typeof key === "undefined") {
			key = null;
		}
		if (typeof defaultValue === "undefined") {
			defaultValue = null;
		}

		if (typeof hasKey === "undefined") {
			hasKey = false;
		}
		var result = new Result();
		result.value = defaultValue;
		var inlineParser = indent === false;
		var value = null;
		var hasValue = false;
		var tokens = this.tokens;
		var count = tokens.length;
		var mainResult = result;

		for (; this.pos < count; this.pos++) {
			var t = tokens[this.pos][0];

			if (t === ',') { // ArrayEntry separator
				if ((!hasKey && !hasValue) || !inlineParser) {
					this.error();
				}
				this.addValue(result, hasKey ? key : null, hasValue ? value : null);
				hasKey = hasValue = false;

			} else if (t === ':' || t === '=') { // KeyValuePair separator
				if (hasValue && (typeof value == "object")) {
					this.error('Unacceptable key');

				} else if (hasKey && key == null && hasValue && !inlineParser) {
					this.pos++;
					this.addValue(result, null, this.parse(indent + "" + '  ', new Map(), value, true));
					var newIndent = (typeof tokens[this.pos] !== "undefined" && typeof tokens[this.pos + 1] !== "undefined") ? tokens[this.pos][0].substr(1) : ''; // not last
					if (newIndent.length > indent.length) {
						this.pos++;
						this.error('Bad indentation');
					} else if (newIndent.length < indent.length) {
						return mainResult; // block parser exit point
					}
					hasKey = hasValue = false;

				} else if (hasKey || !hasValue) {
					this.error();

				} else {
					key = value;
					hasKey = true;
					hasValue = false;
					result = mainResult;
				}

			} else if (t === '-') { // BlockArray bullet
				if (hasKey || hasValue || inlineParser) {
					this.error();
				}
				key = null;
				hasKey = true;

			} else if ((decoder.brackets[t])) { // Opening bracket [ ( {
				if (hasValue) {
					if (t !== '(') {
						this.error();
					}
					this.pos++;
					if (value instanceof Entity && value.value === decoder.CHAIN) {
						value.attributes.value.last().value.attributes = this.parse(false, new Map());
					} else {
						value = new Entity(value, this.parse(false, new Map()));
					}
				} else {
					this.pos++;
					value = this.parse(false, new Map());
				}
				hasValue = true;
				if (tokens[this.pos] === undefined || tokens[this.pos][0] !== decoder.brackets[t]) { // unexpected type of bracket or block-parser
					this.error();
				}

			} else if (t === ']' || t === '}' || t === ')') { // Closing bracket ] ) }
				if (!inlineParser) {
					this.error();
				}
				break;

			} else if (t[0] === "\n") { // Indent
				if (inlineParser) {
					if (hasKey || hasValue) {
						this.addValue(result, hasKey ? key : null, hasValue ? value : null);
						hasKey = hasValue = false;
					}

				} else {
					while (tokens[this.pos + 1] !== undefined && tokens[this.pos + 1][0][0] === "\n") {
						this.pos++; // skip to last indent
					}
					if (tokens[this.pos + 1] === undefined) {
						break;
					}

					newIndent = tokens[this.pos][0].substr(1);
					if (indent === null) { // first iteration
						indent = newIndent;
					}
					var minlen = Math.min(newIndent.length, indent.length);
					if (minlen && newIndent.substr(0, minlen) !== indent.substr(0, minlen)) {
						this.pos++;
						this.error('Invalid combination of tabs and spaces');
					}

					if (newIndent.length > indent.length) { // open new block-array or hash
						if (hasValue || !hasKey) {
							this.pos++;
							this.error('Bad indentation');
						}
						this.addValue(result, key, this.parse(newIndent, new Map));
						newIndent = (tokens[this.pos] !== undefined && tokens[this.pos + 1] !== undefined) ? tokens[this.pos][0].substr(1) : ''; // not last
						if (newIndent.length > indent.length) {
							this.pos++;
							this.error('Bad indentation');
						}
						hasKey = false;

					} else {
						if (hasValue && !hasKey) { // block items must have "key"; NULL key means list item
							break;

						} else if (hasKey) {
							this.addValue(result, key, hasValue ? value : null);
							if (key !== null && !hasValue && newIndent === indent && typeof tokens[this.pos + 1] !== "undefined" && tokens[this.pos + 1][0] === "-") {
								result.value.set(key, new Result);
								result = result.value.get(key);
							}

							hasKey = hasValue = false;
						}
					}

					if (newIndent.length < indent.length) { // close block
						return mainResult; // block parser exit point
					}
				}

			} else if (hasValue) { // Value
				if (value instanceof Entity) { // Entity chaining
					if (value.value !== decoder.CHAIN) {
						var attributes = new Result();
						attributes.add(null, value);
						value = new Entity(decoder.CHAIN, attributes);
					}
					value.attributes.add(null, new Entity(t));
				} else {
					this.error();
				}
			} else { // Value
				if (typeof this.parse.consts == 'undefined')
					this.parse.consts = {
						'true': true, 'True': true, 'TRUE': true, 'yes': true, 'Yes': true, 'YES': true, 'on': true, 'On': true, 'ON': true,
						'false': false, 'False': false, 'FALSE': false, 'no': false, 'No': false, 'NO': false, 'off': false, 'Off': false, 'OFF': false,
						'null': 0, 'Null': 0, 'NULL': 0
					};
				if (t[0] === '"') {
					var self = this;
					value = t.substr(1, t.length - 2).replace(/\\(?:u[0-9a-f]{4}|x[0-9a-f]{2}|.)/gi, function (match) {
						var mapping = {'t': "\t", 'n': "\n", 'r': "\r", 'f': "\x0C", 'b': "\x08", '"': '"', '\\': '\\', '/': '/', '_': "\xc2\xa0"};
						if (mapping[match[1]] !== undefined) {
							return mapping[match[1]];
						} else if (match[1] === 'u' && match.length === 6) {
							return String.fromCharCode(parseInt(match.substr(2), 16));
						} else if (match[1] === 'x' && match.length === 4) {
							return String.fromCharCode(parseInt(match.substr(2), 16));
						} else {
							self.error("Invalid escaping sequence " + match + "");
						}
					});
				} else if (t[0] === "'") {
					value = t.substr(1, t.length - 2);
				} else if (typeof this.parse.consts[t] !== "undefined"
					&& (typeof tokens[this.pos + 1] === "undefined" || (typeof tokens[this.pos + 1] !== "undefined" && tokens[this.pos + 1][0] !== ':' && tokens[this.pos + 1][0] !== '='))) {
					value = this.parse.consts[t] === 0 ? null : this.parse.consts[t];
				} else if (!isNaN(t)) {
					value = t * 1;
				} else if (t.match(/^\d\d\d\d-\d\d?-\d\d?(?:(?:[Tt]| +)\d\d?:\d\d:\d\d(?:\.\d*)? *(?:Z|[-+]\d\d?(?::\d\d)?)?)?$/)) {
					value = new Date(t);
				} else { // literal
					value = t;
				}
				hasValue = true;
			}
		}

		if (inlineParser) {
			if (hasKey || hasValue) {
				this.addValue(result, hasKey ? key : null, hasValue ? value : null);
			}
		} else {
			if (hasValue && !hasKey) { // block items must have "key"
				if (result.value === null || (result.value instanceof Map && result.value.length == 0)) { //if empty
					return value; // simple value parser
				} else {
					this.error();
				}
			} else if (hasKey) {
				this.addValue(result, key, hasValue ? value : null);
			}
		}
		return mainResult;
	};


	this.addValue = function (result, key, value) {
		if (result.add(key, value) === false) {
			this.error("Duplicated key '" + key + "'");
		}
	};


	this.error = function (message) {
		if (typeof message === "undefined") {
			message = "Unexpected '%s'";
		}

		var last = this.tokens[this.pos] !== undefined ? this.tokens[this.pos] : null;
		var offset = last ? last[1] : this.input.length;
		var text = this.input.substr(0, offset);
		var line = text.split("\n").length - 1;
		var col = offset - ("\n" + "" + text).lastIndexOf("\n") + 1;
		var token = last ? last[0].substr(0, 40).replace("\n", '<new line>') : 'end';
		throw new NeonError(message.replace("%s", token), line, col);
	};


	this.split = function (pattern, subject) {
		/*
		 Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io)
		 and Contributors (http://phpjs.org/authors)
		 LICENSE: https://github.com/kvz/phpjs/blob/master/LICENSE.txt
		 */
		var result, ret = [], index = 0, i = 0;

		var _filter = function (str, strindex) {
			if (!str.length) {
				return;
			}
			str = [str, strindex];
			ret.push(str);
		};
		// Exec the pattern and get the result
		while (result = pattern.exec(subject)) {
			// Take the correct portion of the string and filter the match
			_filter(subject.slice(index, result.index), index);
			index = result.index + result[0].length;
			// Convert the regexp result into a normal array
			var resarr = Array.prototype.slice.call(result);
			for (i = 1; i < resarr.length; i++) {
				if (result[i] !== undefined) {
					_filter(result[i], result.index + result[0].indexOf(result[i]));
				}
			}
		}
		// Filter last match
		_filter(subject.slice(index, subject.length), index);
		return ret;
	}

}

decoder.patterns = [
	"'[^'\\n]*'|\"(?:\\\\.|[^\"\\\\\\n])*\"",
	"(?:[^\\x00-\\x20#\"',:=[\\]{}()!`-]|[:-][^\"',\\]})\\s])(?:[^\\x00-\\x20,:=\\]})(]+|:(?![\\s,\\]})]|$)|[\\ \\t]+[^\\x00-\\x20#,:=\\]})(])*",
	"[,:=[\\]{}()-]",
	"?:\\#.*",
	"\\n[\\t\\ ]*",
	"?:[\\t\\ ]+"];

decoder.brackets = {
	'[': ']',
	'{': '}',
	'(': ')'
};
decoder.CHAIN = '!!chain';

decoder.MAP = 'map';
decoder.AUTO = 'auto';
decoder.FORCE_OBJECT = 'object';


module.exports = decoder;
