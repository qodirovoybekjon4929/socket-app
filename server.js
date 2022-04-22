const express = require('express');
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const port = 3000

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

io.on("connection", (socket) => {
    console.log("connected")

    socket.on('some-route', (msg) => {
        io.emit("some-route", msg)
    })
})

server.listen(port, () => {
    console.log("server is running on port " + port)
})