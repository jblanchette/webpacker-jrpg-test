var _ = require("lodash");

var listeners = {
	"mousedown": [],
	"mouseup": [],
	"mousemove": []
};

module.exports = {
	addListener: function (type, id, handler) {
		if (!id || !_.isFunction(handler)) {
			throw new Error("invalid mouse handler.  must provide [id, function handler(){}");
		}

		if (_.has(listeners, type)) {
			listeners[type].push({
				id: id,
				handler: handler
			});
		}
	},

	removeHandler: function (type, id) {
		delete listeners[type][id];
	},

	handleEvent: function(type, e) {
		_.each(listeners[type], function (l) {
			l.hanlder(e);
		});
	}
};