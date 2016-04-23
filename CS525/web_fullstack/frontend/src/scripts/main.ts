//import io = require("socket.io-client");

var socket = io();
socket.emit("test", "ray wang");
socket.on("test", function(msg:string) {
    console.log(msg);
});
