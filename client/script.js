const url = `ws://localhost:9876/websocket`
const server = new WebSocket(url)
const message =document.getElementById('messages')

const input =document.getElementById('message')

const button =document.getElementById('send')

button.disabled = true
button.addEventListener('click',sendMessage,false)

server.onopen =function(){
    server.send("Hello Hi") 
    server.send("Hey!") 
}
function sendMessage(){
    const text = input.value 
    server.send(text)
}