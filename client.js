//client.js
// var Gpio = require('onoff').Gpio;
// var LED = new Gpio(14, 'out');
var sleep = require('sleep');
var io = require('socket.io-client');
var socket = io.connect('http://localhost:3001', {reconnect: true});


// Add a connect listener
socket.on('connect', function (socket) {
    console.log('Connected!');
    this.emit('send-nickname', 'raspberrypi');
});

socket.on('switch-update', (state) => {
  console.log('LED ' + state);
  if (state) {
      //LED.writeSync(1);
      console.log('Encendido');

  } else {
    //LED.writeSync(0)
    console.log('Led apagado')
  }
});

// socket.emit('send-nickname', 'raspberrypi');
