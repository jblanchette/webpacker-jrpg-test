var 	keyEventModule = require("./mainKeyEventModule.js")
	, 	mouseEventModule = require("./mainMouseEventModule.js");

module.exports = function () {
	this.addKeyEvent = function (type, id, handler) {
		keyEventModule.addListener(type, id, handler);
	};

	this.removeKeyEvent = function (type, id, handler) {
		keyEventModule.removeListener(type, id, handler);
	};

	this.addMouseEvent = function (type, id, handler) {
		mouseEventModule.addListener(type, id, handler);
	};

	this.removeMouseEvent = function (type, id, handler) {
		mouseEventModule.removeListener(type, id, handler);
	};
}