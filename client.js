//client.js
var Gpio = require('onoff').Gpio;
var LED = new Gpio(14, 'out');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3000', {reconnect: true});


// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
});

socket.on('switchUpdate', (state) => {
  console.log('LED ' + state);
  if (state) {
    LED.writeSync(1);
  } else {
    LED.writeSync(0);
  }
});

socket.emit('send-nickname', 'raspberrypi');
