var IOHandlers = require("../../input/IOHandlers.js");
var inherits = require("inherits");

function BaseUnit(type, options) {
	this.x = 0;
	this.y = 0;
	this.type = type;
	this._options = options || {};
	this.animation = null;
	this.state = null;
	this.buffs = [];
	this.debuffs = [];
	this.type = type;
	this._options = options;
}

inherits(BaseUnit, IOHandlers);

BaseUnit.prototype.walk = function (x, y) {
	console.log("On this day, i walked to ", x, y);
	this.x = x;
	this.y = y;
};



module.exports = BaseUnit;