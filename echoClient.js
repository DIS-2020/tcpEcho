var net = require('net');

var client = new net.Socket();
client.connect(4000, 'host private IP', function() {
	console.log('Connected');
	client.write("Hi server");
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});