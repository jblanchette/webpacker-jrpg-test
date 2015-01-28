var JCache = require("../data/Cache.js");
var _ = require("lodash");

module.exports = (function () {

	var UnitCache = new JCache("UnitCache");
	var lastUnitID = 1;

	var getUnitClass = function (type, options) {
		var unitClass = require("./UnitClasses/" + type + ".js");

		return new unitClass(type, options);
	};

	var create = function (type, options) {
		var unitClass = getUnitClass(type, options);
		if (UnitCache.add(lastUnitID, unitClass)) {
			lastUnitID++;  
		} else {
			throw new Error("Error creating unit, couldn't add to cache.");
		}
		
		return unitClass.create(type, options);
	};

	var copy = function (id, options) {
		var unit = UnitCache.get(id);
		if (unit) {
			return unit.create(unit.type, options);
		} else {
			console.warn("Tried to copy a unit that wasn't in the UnitCache");
			return undefined;
		}
	};

	return {
		getUnitClass: getUnitClass,
		create: create,
		copy: copy
	};
})();