nodejs_socket_policy_server
===========================

Unity3D &amp; Flash Socket Policy server for node.js

sudo npm -g install .

sudo npm -g uninstall .

sudo npm config --global set socket-policy-server:host 127.0.0.1

sudo npm config --global set socket-policy-server:port 843

sudo npm config --global set socket-policy-server:timeout 5000

sudo npm config --global set socket-policy-server:log_request_data true

sudo npm config --global set socket-policy-server:log_request_data /var/log/socket-policy-server.log


sudo npm -g start socket-policy-server
sudo npm -g stop socket-policy-server
sudo npm -g restart socket-policy-server

sudo npm -g run-script socket-policy-server status
sudo npm -g run-script socket-policy-server restart
