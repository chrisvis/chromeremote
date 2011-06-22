// Loading required modules
var http = require('http'),
    io = require('socket.io');
 
var SERVER_PORT = process.env.C9_PORT;
 
// Creating HTTP Server
var server = http.createServer();
 
// Starting the server
server.listen(SERVER_PORT);
 
// Attaching Socket.IO to the HTTP Server
var socket = io.listen(server);
 
console.log('Server running on port : ' + SERVER_PORT);