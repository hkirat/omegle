import { Socket } from "socket.io";
import http from "http";

const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(http);

const io = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('a user connected');
});


server.listen(3000, () => {
    console.log('listening on *:3000');
  });