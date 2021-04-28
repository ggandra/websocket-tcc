const express = require('express');
const server = express();

const serverListening = server.listen(3030);
const io = require('socket.io')(serverListening);

io.on('connection', socket => {
    if (socket.handshake.query.match) {
        console.log('hanshake')
    }
    socket.join(1);
    socket.on('updateLocation', data => {
        socket.to(1).emit('locationReceived', { coordinates: {
            latitude: data.latitude, longitude: data.longitude, courier_id: data.id
        },})
    });
    socket.on('disconnect', data => {
        console.log('disconnected');
    });
 });

