const express = require('express');
const server = express();

const serverListening = server.listen(3000);
const io = require('socket.io')(serverListening);

let count = 0;
io.on('connection', socket => {
    count ++;
    console.log(count);
    if (socket.handshake.query.match) {
        
    }
    socket.join(1);
    socket.on('updateLocation', data => {
        console.log(data);
        socket.to(1).emit('locationReceived', { coordinates: {
            latitude: '-21.2121147', longitude: '-50.4170587,17z'
        },})
    });
    socket.on('disconnect', data => {
        count --;
        console.log(count);
    });
 });

