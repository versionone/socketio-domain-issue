var express = require('express');
var app = express();
var domain = require('domain');

serverDomain = domain.create();

serverDomain.on('error', function(err){
    console.log(err.stack);
});

serverDomain.run(function(){
    var server = app.listen(8080);
    app.use ('/crash', express.static(__dirname + '/static'));

    var io = require('socket.io')(server);
    io.on('connection', function (socket) {
        socket.on('boom', function(data) { throw "OMG"; });
    });
    console.info('Server running...')
});



