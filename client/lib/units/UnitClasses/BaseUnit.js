var IOHandlers = require("../../input/IOHandlers.js");
var inherits = require("inherits");
var _ = require("lodash");

function BaseUnit() {
	
}

inherits(BaseUnit, IOHandlers);

BaseUnit.prototype.create = function (type, options) {
	var _optionProperties = ["x", "y"];
	
	this.x = 0;
	this.y = 0;
	this.type = type;
	this._options;
	this.animation = null;
	this.state = null;
	this.buffs = [];
	this.debuffs = [];
	this.type = type;
	this._options = _.isObject(options) ? options : {};

	var self = this;
	_.each(options, function(option, index) {
		if (_.contains(_optionProperties, index)) {
			self[index] = option;
		}
	});

	return this;
};

BaseUnit.prototype.walk = function (x, y) {
	console.log("On this day, i walked to ", x, y);
	this.x = x;
	this.y = y;
};



module.exports = BaseUnit;