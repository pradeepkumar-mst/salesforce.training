var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
	console.log('path = ', path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);