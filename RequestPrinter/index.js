var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// testing with conan
app.post('/api/products/debug', function(req, res) {
  var body = JSON.stringify(req.body, null, 2)
	console.log("made it here");
	console.log(body);
  var resp = "Thank you, received: "+body
  res.status(200).send(resp);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
