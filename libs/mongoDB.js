var mongoose = require("mongoose");
var config = require('../config.json');

var mongoUrl = config.mongo.uri;

var dbConn = mongoose.createConnection(mongoUrl, config.mongo.options)

dbConn.on('connected', function() {
    console.log('Mongoose dbConn:' + mongoUrl + ' connected');
});

// If the connection throws an error
dbConn.on("error", function(err) {
    console.error('Failed to connect dbConn ' + mongoUrl + ' on startup ', err);
});

// When the connection is disconnected
dbConn.on('disconnected', function() {
    console.log('Mongoose dbConn:' + mongoUrl + ' disconnected');
});

dbConn.on("reconnected", function(){
  console.info('Mongoose dbConn:' + mongoUrl + ' reconnected')
})

var gracefulExit = function() {
    dbConn.close(function() {
        console.log('Mongoose dbConn:' + mongoUrl + ' is disconnected through app termination');
        process.exit(0);
    });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

module.exports = dbConn;