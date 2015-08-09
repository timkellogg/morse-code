var express    = require('express'),
    jade       = require('jade'),
    bodyParser = require('body-parser'),
    morseCode  = require('./lib/translateMorseCode'),
    playSound  = require('./lib/playSound'),
    app        = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.set('view engine', 'jade');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/translation', function(req, res) {
	var untranslated = req.query.input_text
	var translated = morseCode.translate(untranslated);
	playSound.convert();
	res.render('translation', { output: translated });
});

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Node listening at http://%s:%s', host, port);
});
