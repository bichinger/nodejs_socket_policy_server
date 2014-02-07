var config = {};

// Note: all parameters must be set!

// host/ip the server will exclusively bind to
// set null to make server listen on all ip addresses
config.host = process.env.npm_package_config_host;

// TCP port the server will bind to
config.port = process.env.npm_package_config_port;

// time in milliseconds to wait for a newly connected client to send the
// request string. 0 means infinite (not recommended).
config.timeout = process.env.npm_package_config_timeout;

// whether or not to log the actual data the clients send to the server.
// set to true only for debugging purposes!
config.log_request_data = process.env.npm_package_config_log_request_data;

// Path to the logfile
config.logfile = process.env.npm_package_config_logfile;

module.exports = config;
