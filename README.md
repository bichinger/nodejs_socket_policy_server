# nodejs_socket_policy_server

A simple and fast Unity3D/Flash Socket Policy server for node.js

## Installation

    $ npm install -g nodejs_socket_policy_server

## Configuration

    $ npm config --global set socket-policy-server:host <ip address or blank>

Sets the IP to listen to for serving the socket policy file. Pass a single IP
address to listen only on that IP or leave blank to listen on all IPs. Default
is blank (listen on all IPs).

    $ npm config --global set socket-policy-server:port 843

Set the port to listen on. Default is 843.

    $ npm config --global set socket-policy-server:timeout 5000

Sets the wait time in milliseconds after an incoming connection. The client has
this much time to send its request string or it will be disconnected. Defaults
to 5000.

    $ npm config --global set socket-policy-server:log_request_data false

Indicates if the server should log incoming request strings. Use only for
debugging purposes! Defaults to false.

    $ npm config --global set socket-policy-server:logfile /var/log/socket-policy-server.log

Sets the log file. Defaults to /var/log/socket-policy-server.log.
Note that this file will be overwritten, not appended to!

    $ npm config --global set socket-policy-server:error_logfile /var/log/socket-policy-server-error.log

Sets the error log file. Defaults to /var/log/socket-policy-server-error.log.
Note that this file will be overwritten, not appended to!

## Usage

    $ npm -g start socket-policy-server

Starts the server.

    $ npm -g stop socket-policy-server

Stops the server.

    $ npm -g restart socket-policy-server

Stops, then starts the server.

    $ npm -g run-script socket-policy-server status

Prints out the current status of the server (mainly if it is running or not).

## License
see file LICENSE