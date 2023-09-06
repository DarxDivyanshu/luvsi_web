// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });

  socket.on('send-signal', (roomId, signalData) => {
    io.to(roomId).emit('receive-signal', signalData);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
