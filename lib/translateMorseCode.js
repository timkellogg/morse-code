module.exports = {
	translate: function(raw) {
		var translation = [];

		const valuesTable = {
			a : ". -",
			b : "- ...",
			c : "-.-.",
			d : "-..",
			e : ".",
			f : "..-.",
			g : "--.",
			h : "....",
			i : "..",
			j : ".---",
			k : "-.-",
			l : ".-..",
			m : "--",
			n : "-.",
			o : "---",
			p : ".--.",
			q : "--.-",
			r : ".-.",
			s : "...",
			t : "-",
			u : "..-",
			v : "...-",
			w : ".--",
			x : "-..-",
			y : "-.--",
			z : "--..",
		"?" : "..--..",
		"," : "--..--",
		"@" : ".--.-..",
		"(" : "-.--.-",
		")" : "-.--.-",
		"=" : "-...-",
		":" : "---..."

		}

		raw.split("").forEach(function(letter) {
			if (valuesTable[letter]) {
				translation.push(valuesTable[letter]);
			}
		});
		
		return translation.join("");
	}
}


