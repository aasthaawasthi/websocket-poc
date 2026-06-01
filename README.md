🚀 WebSocket Real-Time Chat (POC)

A simple Proof of Concept (POC) demonstrating real-time bidirectional communication using WebSockets. This project showcases how clients and servers can maintain a persistent connection and exchange messages instantly.

✨ What Makes This Interesting?
1. ⚡ Instant communication (no polling)
2. 🔄 Persistent connection
3. 📡 True bidirectional data flow
4. 🧠 Built to understand system design concepts

🧠 Architecture Diagram
        ┌──────────────┐
        │   Client 1   │
        └──────┬───────┘
               │
        ┌──────▼───────┐
        │              │
        │  WebSocket   │
        │   Server     │
        │  (Node.js)   │
        │              │
        └──────▲───────┘
               │
        ┌──────┴───────┐
        │   Client 2   │
        └──────────────┘

   🔁 All clients connected via persistent TCP connection
   📢 Server broadcasts messages to all clients

⚙️ How It Works
1. Client → HTTP Request (Handshake)
2. Server → Upgrade to WebSocket
3. Connection becomes persistent (TCP)
4. Client ↔ Server exchange messages anytime
5. Server broadcasts messages to all clients

⚡ Features
1. 🔄 Real-time messaging
2. 🔌 Persistent WebSocket connection
3. 📡 Bidirectional communication (client ↔ server)
4. 👥 Multiple client support (broadcasting)
5. 🧠 Lightweight and easy to understand
6. ⚡ Low latency communication

🛠️ Tech Stack
1. Backend: Node.js + WebSocket (ws library)
2. Frontend: HTML + JavaScript
3. Protocol: WebSockets (over TCP)

📁 Project Structure
websocket-poc/
 ├── server.js        # WebSocket server
 ├── client.html      # Simple frontend client
 └── package.json

⚙️ Setup & Installation
1. Clone the repository:
git clone https://github.com/your-username/websocket-poc.git
cd websocket-poc 

2. Install dependencies:
npm install

3. Start the server:
node server.js

▶️ How to Run
1. Open client.html in your browser
2. Open it in multiple tabs/windows
3. Send messages and see real-time updates

🔍 How It Works
1. Client initiates a WebSocket handshake over HTTP
2. Connection upgrades to WebSocket protocol
3. A persistent TCP connection is established
4. Clients and server exchange messages in real-time
5. Server broadcasts messages to all connected clients

📊 When to Use WebSockets

✅ Use when:
1. Real-time communication required
2. High-frequency updates
3. Bidirectional data flow

❌ Avoid when:
1. Simple request-response works
2. SSE is sufficient (server push only)

📊 Use Cases
1. 💬 Chat applications
2. 🎮 Real-time multiplayer games
3. 📈 Live dashboards (stocks, analytics)
4. 🔔 Notifications & alerts
5. 🤝 Collaborative tools

⚠️ Limitations
1. No authentication implemented
2. No message persistence(no db) (in-memory only)
3. Not optimized for horizontal scaling (single server) 

🚀 Future Improvements
1. Add usernames & user sessions
2. Private messaging support
3. Store messages in database
4. Scale using Redis Pub/Sub
5. Build React frontend

🧠 Learnings
1. Understanding of WebSocket handshake & upgrade mechanism
2. Difference between HTTP, SSE, and WebSockets
3. Handling real-time communication in Node.js
4. Managing multiple client connections

📢 Author

Aastha Awasthi

Software Engineer | Full Stack Developer
Passionate about system design & real-time architectures

⭐ If you found this useful

Give this repo a ⭐ and share your feedback!
