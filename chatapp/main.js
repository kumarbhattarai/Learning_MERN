const express=require('express')
const path=require('path')
const http=require('http')
const app=express()
const server=http.createServer(app)
const { Server } = require("socket.io");

express.static(path.resolve('./public'))
const io = new Server(server);
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
  });
app.get('/',(req,res)=>{
    res.sendFile('./public/index.html',{root:__dirname})
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})