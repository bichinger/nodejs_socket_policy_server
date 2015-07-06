var config = {};

// Note: all parameters must be set!

// host/ip the server will exclusively bind to
// set null to make server listen on all ip addresses (binds to ip 0.0.0.0)
config.host = process.env.npm_package_config_host || '0.0.0.0';

// TCP port the server will bind to
config.port = process.env.npm_package_config_port;

// time in milliseconds to wait for a newly connected client to send the
// request string. 0 means infinite (not recommended).
config.timeout = process.env.npm_package_config_timeout;

// globally turns logging on/off (affects log_request_data and logfile options)
config.logging = process.env.npm_package_config_logging;

// whether or not to log the actual data the clients send to the server.
// set to true only for debugging purposes!
config.log_request_data = process.env.npm_package_config_log_request_data;

// Path to the logfile
config.logfile = process.env.npm_package_config_logfile;

// Path to the error logfile
config.error_logfile = process.env.npm_package_config_error_logfile;

// Path to the policy XML file
config.policyfile = process.env.npm_package_config_policyfile;

module.exports = config;
