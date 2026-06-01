import { WebSocketServer } from "ws";

const PORT = 8080;
const wss = new WebSocketServer({port: PORT});

// Using Set instead of array (better for add/remove)
const clients = new Set();

wss.on('connection', (ws) => {
    console.log('New client connected');
    clients.add(ws);

    ws.on('message', (message) =>{
        const msg = message.toString();
        console.log(`Received: ${msg}`);

        // Broadcast to all clients
        clients.forEach((client) => {
            if(client.readyState === ws.OPEN){
                client.send(msg);
            }
        });
    });

    ws.on('close', ()=>{
        console.log('Client disconnected');
        client.delete(ws);
    });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);