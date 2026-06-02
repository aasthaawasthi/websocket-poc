# 🚀 Scalable WebSocket Real-Time Chat (POC)

A production-inspired Proof of Concept (POC) demonstrating **real-time bidirectional communication at scale** using WebSockets, multiple Node.js servers, Redis Pub/Sub, and NGINX load balancing.

This project evolves from a basic WebSocket chat into a **horizontally scalable real-time system**, similar to architectures used in real-world applications.

---

## ✨ What Makes This Interesting?

* ⚡ Instant real-time communication (no polling)
* 🔄 Persistent WebSocket connections
* 📡 True bidirectional data flow
* ⚖️ Load balancing across multiple servers
* 🔁 Cross-server communication using Redis Pub/Sub
* 🧠 Designed to understand real-world system design

---

## 🧠 Architecture Diagram

```
        Clients (Browser Tabs)
                │
                ▼
        ┌──────────────────┐
        │     NGINX        │
        │ Load Balancer    │
        └──────┬───────────┘
               │
    ┌──────────┼──────────┐
    ▼          ▼          ▼
Server 1    Server 2    Server 3
(8081)      (8082)      (8083)
    │          │          │
    └──────┬───┴───┬──────┘
           ▼       ▼
        Redis Pub/Sub
```

🔁 Messages are shared across servers via Redis
📢 Each server broadcasts to its connected clients

---

## ⚙️ How It Works

1. Client initiates WebSocket handshake via NGINX
2. NGINX forwards connection to one of the backend servers
3. WebSocket connection is established (persistent TCP)
4. Client sends message → server publishes to Redis
5. Redis broadcasts message to all servers
6. Each server sends message to its connected clients

---

## ⚡ Features

* 💬 Real-time messaging
* 🔌 Persistent WebSocket connections
* ⚖️ Load balancing via NGINX
* 🔁 Cross-server communication (Redis Pub/Sub)
* 👥 Multi-client, multi-server broadcasting
* ⚡ Low latency communication

---

## 🛠️ Tech Stack

* **Backend**: Node.js + ws (WebSocket library)
* **Frontend**: HTML + JavaScript
* **Load Balancer**: NGINX
* **Message Broker**: Redis (Pub/Sub)
* **Protocol**: WebSockets (over TCP)

---

## 📁 Project Structure

```
websocket-poc/
 ├── server.js        # WebSocket server (with Redis Pub/Sub)
 ├── client.html      # Frontend client
 ├── nginx.conf       # Load balancer config
 └── package.json
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/websocket-poc.git
cd websocket-poc
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Start Redis

```bash
redis-server
```

---

### 4️⃣ Start Multiple WebSocket Servers

```bash
PORT=8081 node server.js
PORT=8082 node server.js
PORT=8083 node server.js
```

---

### 5️⃣ Start NGINX

```bash
nginx -c /path/to/nginx.conf
```

---

## ▶️ How to Run

1. Open `client.html` in browser
2. Open multiple tabs/windows
3. Send messages and observe real-time updates
4. Messages will sync across all tabs (even across different servers)

---

## 🔍 What to Observe (Proof of Scaling)

* Different clients connect to different servers
* Messages are received across all clients regardless of server
* Killing one server does not break the system
* Load is distributed across servers

---

## 📊 When to Use WebSockets

✅ Use when:

* Real-time communication is required
* High-frequency updates
* Bidirectional communication needed

❌ Avoid when:

* Simple request-response is enough
* Server push only (SSE is sufficient)

---

## 📊 Use Cases

* 💬 Chat applications
* 🎮 Multiplayer games
* 📈 Live dashboards
* 🔔 Notifications systems
* 🤝 Collaborative tools

---

## ⚠️ Limitations

* ❌ No authentication implemented
* ❌ No message persistence (in-memory + Redis only)
* ❌ No sticky sessions (may affect some use cases)
* ❌ Not fully production hardened

---

## 🚀 Future Improvements

* 🔐 Add authentication (JWT)
* 🧑‍🤝‍🧑 User sessions & identities
* 💌 Private messaging / chat rooms
* 🗄️ Message persistence (DB)
* 🔁 Reconnection + message replay
* 📊 Load testing (k6 / Artillery)
* ⚛️ React frontend

---

## 🧠 Key Learnings

* WebSocket handshake & protocol upgrade
* Persistent vs stateless communication
* Horizontal scaling of WebSocket servers
* Load balancing using NGINX
* Redis Pub/Sub for cross-server messaging
* Real-world system design patterns

---

## 📢 Author

**Aastha Awasthi**
Software Engineer | Full Stack Developer
Passionate about system design & real-time architectures

---

## ⭐ Show Your Support

If you found this project useful, give it a ⭐ and share your feedback!
