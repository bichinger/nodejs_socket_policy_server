var config = {};


// Note: all parameters must be set!

// host/ip the server will exclusively bind to
// set null to make server listen on all ip addresses
config.host = null;

// TCP port the server will bind to
config.port = 843;

// time in milliseconds to wait for a newly connected client to send the
// request string. 0 means infinite (not recommended).
config.timeout = 5000;

// whether or not to log the actual data the clients send to the server.
// set to true only for debugging purposes!
config.log_request_data = true;


// internals, do not touch
module.exports = config;
