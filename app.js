var express = require('express');
// var mongoose = require('mongoose');
var compression = require('compression');
var bodyParser = require('body-parser');
var config = require('./config.json');
var app = express();
var port = process.env.PORT || config.port;
var beers = require('./routes/beers');

// mongoose.connect(config.mongo.uri);
require('./libs/mongooseDB');

app.use(compression());
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', beers);

app.listen(port);
console.log('Insert beer on port ' + port);
