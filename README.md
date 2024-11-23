# EvergreenTalks – Real-Time Chat Application

EvergreenTalks is a real-time chat application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with **Socket.io** for real-time messaging. This platform enables users to connect, communicate, and engage in lively discussions via individual and group chats.

---

## 🎯 Features

### 💬 Real-Time Messaging
- **Socket.io Integration**: Enables real-time message exchange between users, making the communication instant and seamless.
- **Message History**: Each chat room retains its message history, including timestamps, for users to access previous conversations.
- **Private and Group Chats**: Users can engage in one-on-one messaging or join group chats for multi-user conversations.
- **Online User Status**: Displays the list of users who are currently online and available to chat.
- **Message Notifications**: New messages trigger a sound notification to alert users instantly about incoming messages.

### 🔐 Authentication
- **JWT-based Authentication**: Users register and log in securely using **JWT** (JSON Web Tokens), ensuring authenticated communication.
- **Password Hashing**: **Bcrypt** is used to hash passwords before storing them for enhanced security.
- **Email Validation**: **Express Validator** is used for ensuring proper format for email and password during registration and login.

### 🔍 Search Functionality
- **Search Users**: Users can search for other users by username to start private chats or invite them to group chats.
- **Search Messages**: Search within chat rooms for specific messages or keywords to quickly locate past conversations.

---

## 📸 Screenshots

### Chat Room
![Chat Room](Frontend/public/chatroom.png)

### Authentication Page
![Authentication Page](Frontend/public/authentication.png)

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Socket.io-client
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Real-Time Messaging**: Socket.io

---

## 📂 Folder Structure

root/
├── frontend/               # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # Context for managing global state (User, Messages, Rooms)
│   │   ├── utils/          # Utility functions for messaging
│   │   └── App.js          # Main application entry point
│   ├── node_modules/       # Modules for the frontend
│   ├── package.json        # Frontend project dependencies
│   └── package-lock.json   # Frontend dependencies lock file
├── backend/                # Backend API
│   ├── models/             # MongoDB models (User, Message, Room)
│   ├── routes/             # API routes for registration, login, etc.
│   ├── middleware/         # JWT and error handling middleware
│   ├── index.js            # Main server entry point
│   ├── db.js               # MongoDB database connection
│   ├── node_modules/       # Modules for the backend
├── package.json            # Backend project dependencies
└── package-lock.json       # Backend dependencies lock file
├── README.md               # Project documentation

## 🚀 Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SidRai-247/Evergreen-Talks.git
   cd Evergreen-Talks

2. **Navigate to the backend directory**:
   ```bash
   cd backend

3. **Install backend dependencies:**:
   ```bash
   npm install

4. **Start the backend server:**:
   ```bash
   nodemon server.js

5. **Navigate to the frontend directory:**:
   ```bash
   cd ../frontend

6. **Install Frontend dependencies:**:
   ```bash
   npm install

7. **Run the frontend application:**:
   ```bash
   npm run dev


