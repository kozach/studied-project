var mongoose = require("mongoose");
var config = require('../config.json');

var mongoUrl = config.mongo.uri;
var mainConn = mongoose.createConnection(mongoUrl, config.mongo.options)

mainConn.on('connected', function() {
    console.log('Mongoose mainConn:' + mongoUrl + ' connected');
});

// If the connection throws an error
mainConn.on("error", function(err) {
    console.error('Failed to connect mainConn ' + mongoUrl + ' on startup ', err);
});

// When the connection is disconnected
mainConn.on('disconnected', function() {
    console.log('Mongoose mainConn:' + mongoUrl + ' disconnected');
});

mainConn.on("reconnected", function(){
  console.info('Mongoose mainConn:' + mongoUrl + ' reconnected')
})

var gracefulExit = function() {
    mainConn.close(function() {
        console.log('Mongoose mainConn:' + mongoUrl + ' is disconnected through app termination');
        process.exit(0);
    });
}

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

module.exports = mainConn;