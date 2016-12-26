// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/whoami", function (req, res) {
  var headers = req.headers;
  console.log(headers);
  var ipaddress = headers["x-forwarded-for"];
  var language = headers["accept-language"].split(',')[0];
  var useragent = headers["user-agent"];
  console.log(useragent);
  var start = useragent.indexOf("(")+1;
  var end = useragent.indexOf(")");
  var software = useragent.substring(start, end);
  var result = {}
  result["ipaddress"] = ipaddress;
  result["language"] = language;
  result["software"] = software;
  res.json(result);
});


