const WebSocket = require('ws')
const wss = new WebSocket.Server({
    port:9876
})
    wss.on('connection',function(ws){
        ws.send("hello from the server")
        ws.on('message',function(data){
            ws.send(data.toString())
        })
})

