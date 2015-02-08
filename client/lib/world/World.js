var Cache = require("../data/Cache.js");
var Map = require("../map/Map.js");
var Overworld = require("../overworld/Overworld.js");

var MapCache = new Cache();
var OverworldCache = new Cache();

function World(id, options) {
	this.id = id;
	this._options = options || {};
	this.map = null;
	this.overworld = null;

}

World.prototype.load = function (mapFile, overworldFile) {
	this.map = MapCache.get(mapFile) || require("./map_files/" + mapFile);
	this.overworld = 
		OverworldCache.get(overworldFile) || require("./overworld_files/" + overworldFile);

	return this;
};

var create = function (id, mapFile, overworldFile, options) {
	var world = new World(id, options);
	return world.load(mapFile,overworldFile);
};

module.exports = {
	create: create
};
