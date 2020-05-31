const express = require('express');
const server = express();

const serverListening = server.listen(3000);
const io = require('socket.io')(serverListening);

let count = 0;
io.on('connection', socket => {
    count ++;
    console.log(count);
    if (socket.handshake.query.match) {
        console.log('socket connection');
    }
    socket.on('updateLocation', data => {
        console.log(data);
        socket.broadcast.emit('broadcast', 'hello everyone');
    });
    socket.on('disconnect', data => {
        count --;
        console.log(count);
    });
 });

