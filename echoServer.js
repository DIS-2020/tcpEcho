var net = require("net");

net.createServer(function(socket) {
console.log("New connection.");
socket.setEncoding("utf8");
socket.write("Hello Client!");

socket.on("data", function(data) {
    socket.write(data.toString())
    console.log("got: ", data.toString());
});
socket.on("end", function() {
    console.log("Client connection is terminated.")
});
}).listen(4000, "host private IP");