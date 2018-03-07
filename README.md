# nodejs_socket_policy_server

A simple and fast Unity3D/Flash Socket Policy server for node.js. For more
information about socket policy files have a look at [Loading Data in Flash/Flex/Air](http://help.adobe.com/en_US/as3/dev/WS5b3ccc516d4fbf351e63e3d118a9b90204-7c60.html) or [Unity 3D Security Sandbox](https://docs.unity3d.com/462/Documentation/Manual/SecuritySandbox.html).

## Installation

    $ npm install -g socket-policy-server

## Configuration

    $ npm config --global set socket-policy-server:host <ip address or blank>

Sets the IP to listen to for serving the socket policy file. Pass a single IP
address to listen only on that IP or leave blank to listen on all IPs. Default
is blank (listen on all IPs, which is equivalent to IP 0.0.0.0).

    $ npm config --global set socket-policy-server:port 843

Set the port to listen on. Default is 843.

    $ npm config --global set socket-policy-server:timeout 5000

Sets the wait time in milliseconds after an incoming connection. The client has
this much time to send its request string or it will be disconnected. Defaults
to 5000.

    $ npm config --global set logging true/false

Globally turns logging on/off (affects log_request_data and logfile options).

    $ npm config --global set socket-policy-server:log_request_data false

Indicates if the server should log incoming request strings. Use only for
debugging purposes! Defaults to false.

    $ npm config --global set socket-policy-server:logfile /var/log/socket-policy-server.log

Sets the log file. Defaults to /var/log/socket-policy-server.log.
Note that this file will be overwritten, not appended to!

    $ npm config --global set socket-policy-server:error_logfile /var/log/socket-policy-server-error.log

Sets the error log file. Defaults to /var/log/socket-policy-server-error.log.
Note that this file will be overwritten, not appended to!

    $ npm config --global set socket-policy-server:policyfile socket_policy.xml

Sets the socket policy file that will be sent out. Defaults to socket_policy.xml
(relative path). The [embedded socket policy file](https://github.com/bichinger/nodejs_socket_policy_server/blob/master/socket_policy.xml) only grants access to
ports 80 and 443. If you need to change that, create your own file and set its
path with this configuration option.

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
