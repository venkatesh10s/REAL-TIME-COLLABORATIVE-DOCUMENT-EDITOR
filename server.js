// server.js - backend with express and socket.io
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('send-changes', (data) => socket.broadcast.emit('receive-changes', data));
});

app.use(express.static('client/build'));

server.listen(3001, () => console.log('Server running on port 3001'));