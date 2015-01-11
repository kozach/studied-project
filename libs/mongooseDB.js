var mongoose = require("mongoose");
var config = require('../config.json');

var uri = config.mongo.uri;

mongoose.connect(uri);
var DB = mongoose.connection

DB.on('connected', function() {
    console.log('Mongoose DB:' + uri + ' connected');
});

// If the connection throws an error
DB.on("error", function(err) {
    console.error('Failed to connect DB ' + uri + ' on startup ', err);
});

// When the connection is disconnected
DB.on('disconnected', function() {
    console.log('Mongoose DB:' + uri + ' disconnected');
});

DB.on("reconnected", function(){
  console.info('Mongoose DB:' + uri + ' reconnected')
})

var gracefulExit = function() {
    DB.close(function() {
        console.log('Mongoose DB:' + uri + ' is disconnected through app termination');
        process.exit(0);
    });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

module.exports = DB;