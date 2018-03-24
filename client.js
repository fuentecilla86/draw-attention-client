//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});

// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.on('switchUpdate', (state) => {
  console.log('LED ' + state);
});

socket.emit('send-nickname', 'raspberrypi');
