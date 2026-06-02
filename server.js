import { WebSocketServer, WebSocket } from "ws";
import Redis from 'ioredis';

const PORT = process.env.PORT || 3010;

// Redis setup
const pub = new Redis();
const sub = new Redis();

const wss = new WebSocketServer({ port: PORT });

// Using Set instead of array (better for add/remove)
const clients = new Set();

wss.on('connection', (ws) => {
    console.log(`✅ Client connected on ${PORT}`);
    clients.add(ws);

    ws.on('message', (message) => {
        const msg = message.toString();

        // Publish to redis
        pub.publish("chat", msg);
    });

    ws.on('close', () => {
        clients.delete(ws);
        console.log('Client disconnected');
    });
});

// Subscribe to Redis
sub.subscribe("chat");

sub.on("message", (_, message) => {
    // Broadcast to all clients connected to THIS server
    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);