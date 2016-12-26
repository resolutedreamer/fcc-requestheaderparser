var express = require('express');
var app = express();

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

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
