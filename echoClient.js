var net = require('net');

var client = new net.Socket();
client.connect(4001, 'host private IP', function() {
	console.log('Connected');
	client.write("Hi server");
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});