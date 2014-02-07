var net = require('net');
var fs = require('fs');
var path = require('path');
var config = require('./config');

var policy = fs.readFileSync(path.join(__dirname, 'socket_policy.xml'));

var command = '<policy-file-request/>';
var commandLength = command.length;

var connectionCount = 0;

var server = net.createServer(function (socket) {

    socket.openedAt = new Date();
    socket.connectionId = ++connectionCount;
    socket.connectionRemoteAddress = socket.remoteAddress; // remember remote ip

    logForConnection(socket, 'connected');

    socket.setTimeout(config.timeout, function () {
        logForConnection(socket, 'timeout');
        socket.destroy();
    });

    socket.on('data', function (data) {
        var message = 'received ';
        if (config.log_request_data) {
            message += escape(data.toString()) + ' - ';
        }

        message += data.toString().length + ' bytes - '
        if (data.toString().slice(0, commandLength) === command) {
            socket.end(policy);
            message += 'OK';
        } else {
            socket.end();
            message += 'BAD';
        }
        socket.destroy();
        logForConnection(socket, message);
    });

    socket.on('close', function () {
        logForConnection(socket, 'closed (handled in ' + (new Date() - socket.openedAt) + 'ms)');
    });

    socket.on('error', function (e) {
        logForConnection(socket, 'error receiving data: ' + e);
        socket.destroy();
    });
});
server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        log("server error, address already in use: " + e);
    } else {
        log("server error: " + e);
    }
});
server.on('close', function () {
    log("socket policy server closing after handling " + connectionCount + " connections");
});
server.listen(config.port, config.host, function () {
    log('socket policy server bound to port ' + config.port + ' on ' + (config.host || 'all IPs'));
});

function logForConnection(socket, message) {
    log(socket.connectionId + ' - ' + socket.connectionRemoteAddress + ' - ' + message);
}

function log(message) {
    var t = (new Date()).toISOString();
    console.log(t + ' - ' + message);
}

function escape(message) {
    return message.replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\x07\x1b\f\t\v/g, '?');
}
