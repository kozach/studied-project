var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var config = require('./config.json');
var app = express();
var port = process.env.PORT || config.port;
var sources = require('./routes/sources');

require('./libs/mongooseDB');

app.use(compression());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', sources);

app.listen(port);
console.log('Insert source on port ' + port);
