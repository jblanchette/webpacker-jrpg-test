var J = J || {
	c: null,
	ctx: null,
	frame: 0,
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
	},

	keyEvent: function (type, e) {
		
	},

	mouseEvent: function (type, e) {
		
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