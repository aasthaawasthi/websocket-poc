import { WebSocketServer, WebSocket } from "ws";
import Redis from 'ioredis';

const PORT = process.env.PORT || 3010;
const SERVER_ID = `Server-${PORT}`;

// Redis setup
const pub = new Redis();
const sub = new Redis();

const wss = new WebSocketServer({ port: PORT });

// Using Set instead of array (better for add/remove)
const clients = new Set();

wss.on('connection', (ws) => {
    console.log(`✅ ${SERVER_ID}: Client connected`);
    clients.add(ws);

    ws.on('message', (message) => {
        const msg = message.toString();
        console.log(`📩 ${SERVER_ID} received: ${msg}`);

        pub.publish("chat", JSON.stringify({
            server: SERVER_ID,
            message: msg
        }));
    });

    ws.on('close', () => {
        console.log(`❌ ${SERVER_ID}: Client disconnected`);
        clients.delete(ws);
    });

    ws.on('error', (err) => {
        console.log(`⚠️ ${SERVER_ID}: Error`, err.message);
    });
});

// Subscribe to Redis
sub.subscribe("chat");

sub.on("message", (_, message) => {
    const data = JSON.parse(message);

    clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(`[${data.server}] ${data.message}`);
        }
    });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);