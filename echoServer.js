var net = require("net");

net.createServer(function(socket) {
console.log("New connection.");
socket.setEncoding("utf8");
socket.write("Hello! You can start typing. Type 'quit' to end connection.\n");

socket.on("data", function(data) {
    console.log("got: ", data.toString());
    if(data.trim().toLowerCase() === "quit") {
        socket.write("Goodbye!");
        return socket.end();
    }
});
socket.on("end", function() {
    console.log("Client connection is terminated.")
});
}).listen(4001, 'host private IP');