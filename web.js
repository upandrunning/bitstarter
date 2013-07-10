var express = require('express');
var fs = require('fs');

var filereadbits = fs.readFileSync('index.html');

var fileBuffer = new Buffer(filereadbits);
var fileString = fileBuffer.toString();


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  

	response.send(fileString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

