var express = require('express'),
    app = express.createServer();

app.use(express.logger());

app.get('/', function(req, res){
    var html = require("fs").readFileSync("./index.html").toString()
    res.send(html);
});

app.listen(3000);
console.log('Express server started on port %s', app.address().port);