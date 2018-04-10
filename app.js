var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080; // set our port

// viewed at http://localhost:8080
app.get('/', function(req, res) {
	console.log('path = ', path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/thankyou', function(req, res) {
	console.log('path = ', path.join(__dirname + '/thankyou.html'));
    res.sendFile(path.join(__dirname + '/thankyou.html'));
});

app.get('/formpage', function(req, res) {
	console.log('path = ', path.join(__dirname + '/formpage.html'));
    res.sendFile(path.join(__dirname + '/formpage.html'));
});



app.listen(port);
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app