var _ = require("lodash");
var 	keyEventModule = require("./lib/input/mainKeyEventModule.js")
	, 	mouseEventModule = require("./lib/input/mainMouseEventModule.js")
	,	UnitFactory = require("./lib/units/UnitFactory.js");

var J = {
	c: null,
	ctx: null,
	frame: 0,
	units: {},
	
	init: function () {
		this.c = document.getElementById("main_canvas");
		this.ctx = this.c.getContext("2d");
		this.ctx.font = "20px Georgia";

		var keyEvents = ["keypress", "keydown", "keyup"];
		var mouseEvents = ["mouseup", "mousedown", "mousemove"];

		var self = this;

		_.each(keyEvents, function (e) {
			document.addEventListener(e, _.partial(self.keyEvent, e), false);
		});

		_.each(mouseEvents, function (e) {
			self.c.addEventListener(e, _.partial(self.mouseEvent, e), false);
		});

		var hero = UnitFactory.create("Hero");

		console.log("Hero: ", hero, _.functions(hero));
		hero.walk(0,0);
	},

	keyEvent: function (type, e) {
		keyEventModule.handleEvent(type, e);
	},

	mouseEvent: function (type, e) {
		mouseEventModule.handleEvent(type, e);
	},	

	update: function () {
		this.frame++;
		if (this.frame >= 60) this.frame = 0;
	},

	clear: function () {
		this.ctx.clearRect ( 0, 0, this.c.width, this.c.height );
	},
 
	draw: function () {
		this.clear();
		this.ctx.fillText("Worked:" + this.frame, 100, 100);	
	}
};

var loopRun = (function() {
    var loops = 0, skipTicks = 1000 / 60,
            maxFrameSkip = 10,
            nextGameTick = (new Date).getTime();
    return function() {
        loops = 0;
        while ((new Date).getTime() > nextGameTick) {
            J.update();
            nextGameTick += skipTicks;
        }
        J.draw();
    };
})();
(function() {
    var onEachFrame;
    if (window.webkitRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() {
                cb();
                webkitRequestAnimationFrame(_cb);
            }
            _cb();
        };
    } else if (window.mozRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() {
                cb();
                mozRequestAnimationFrame(_cb);
            }
            _cb();
        };
    } else {
        onEachFrame = function(cb) {
            setInterval(cb, 1000 / 60);
        }
    }
    window.onEachFrame = onEachFrame;
})();

window.onload = function() {
    J.init();
    window.onEachFrame(loopRun);
};