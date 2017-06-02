var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// testing with conan
app.post('/api/products/debug', function(req, res) {
	console.log("made it here");
	console.log(req.body);
  res.sendStatus(503)
	//res.send(req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
