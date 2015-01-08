var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var router = express.Router();
var app = express();
var config = require('./config.json');
var dbConn = require('./libs/mongoDB');

app.set('port', (process.env.PORT || config.port));
app.use(compression());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(methodOverride());

// router.get('/', function(req, res) {
//     res.send('This is not implemented now');
// });

// router.post('/', function(req, res) {
//     res.send('This is not implemented now');
// });

// router.get('/:id', function(req, res) {
//     res.send('This is not implemented now');
// });

// router.put('/:id', function (req, res){
//     res.send('This is not implemented now');
// });

// router.delete('/:id', function (req, res){
//     res.send('This is not implemented now');
// });

// app.use('/api/studied', router);

routes = require('./routes/tshirt')(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});