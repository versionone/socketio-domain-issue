var express = require('express');
var app = express();
var domain = require('domain');
var socketio = require('socket.io');

serverDomain = domain.create();

process.on('error', function(req, res, next){
    res.end('Error caught!s')
});

serverDomain.run(function(){
    // listen on the specified port
    var server = app.listen(8080);

    app.get('/quit', function(req, res, next){
        res.end('Im dying!');
    });
});

