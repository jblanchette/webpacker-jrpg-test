var _ = require("lodash");

// @todo maybe make this a factory and be able to access
//       any cache by its ID ?
function JCache(id) {
	this._id = id;
	this._entries = {};
}

JCache.prototype.add = function (key, value) {
	if (!_.has(this._entries, key)) {
		this._entries[key] = value;
		return true;
	} else {
		return false;
	}
};

JCache.prototype.addOrUpdate = function (key, value) {
	this._entries[key] = value;
	return true;
};

JCache.prototype.get = function (key) {
	if(this.hasEntry(key)) {
		return this._entries[key];
	} else {
		return undefined;
	}
};

JCache.prototype.hasEntry = function (key) {
	return _.has(this._entries, key);
};

JCache.prototype.remove = function (key) {
	delete this._entries[key];
};


module.exports = JCache;