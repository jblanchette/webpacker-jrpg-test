var JCache = require("../data/Cache.js");
var _ = require("lodash");

module.exports = (function () {

	var UnitCache = new JCache("UnitCache", 1000);
	var lastUnitID = 1;

	var getUnitClass = function (type, options) {
		var unitClass = require("./UnitClasses/" + type + ".js");

		var unit = new unitClass(type, options);

		console.log("Unit class: ", unit);
		return unit;
	};

	var create = function (type, options) {
		var unitClass = getUnitClass(type, options);
		if (UnitCache.add(lastUnitID, unitClass)) {
			lastUnitID++;  
		} else {
			throw new Error("Error creating unit, couldn't add to cache.");
		}
		
		return unitClass;
	};

	var copy = function (id, options) {

	};

	var remove = function (id) {

	};

	return {
		create: create,
		copy: copy,
		remove: remove
	};
})();