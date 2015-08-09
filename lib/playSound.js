var sfx = require('sfx');

module.exports = {
	convert: function(translation) {
		var audioOutput = [];

		translation.split("").forEach(function(sound) {
			if (sound === ".") {
				audioOutput.push(function() { sfx.ping() });
			} else if (sound === '-') {
				audioOutput.push(function() { sfx.blow() });
			} else {
				audioOutput.push(function() { sfx.blow() });
			}
		});

		return audioOutput;
	}
}

