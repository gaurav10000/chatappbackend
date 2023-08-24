const { Socket } = require('socket.io')

const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors:{
        origin: "*",
    }
})


io.on("connection", (socket) => {
    // console.log(socket)
    console.log("Socket is active to be connected")

    socket.on("chat", (payload) => {
        console.log("payload", payload)
        io.emit("chat", payload)
    })
})

// app.listen("5000", () => {
//     console.log("Server is running at 5000...");
// }) // dont do this


server.listen("5000", () => {
    console.log("Server is listening on port 5000...");
})

