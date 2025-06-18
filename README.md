# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

"COMPANY": CODETECH IT SOLUTIONS

"NAME": S VENKATESH

"INTERN ID": CT04DF1907

"DOMAIN": FULL STACK DEVELOPER

"DURATION": 4 WEEKS

"MENTOR": NEELA SANTOSH KUMAR

# Task 3 – Real-Time Collaborative Document Editor

## Description

This project is part of my internship at CodeTech, and it focuses on building a real-time collaborative document editor. The idea is to allow multiple users to edit the same text editor at the same time, and the changes should be visible to everyone instantly. This is something similar to what we see in Google Docs, but in a very basic and beginner-friendly form.
To make this possible, I’ve used a combination of *Node.js* and *Socket.IO* for the backend and *React* for the frontend. Whenever one user types something, that content is shared with all other connected users using sockets, and they’ll see the change immediately in their editor. It’s a small but powerful demonstration of real-time communication using WebSockets.

## How it Works

When you open the app, you’ll see a text editor box on the screen. If you open it in another browser tab or even on another device (on the same network), and type something, the other screen will update automatically with what you typed. This is done using *Socket.IO*, which lets us send and receive data instantly without refreshing the page.

There are two socket events in use:
- send-changes: Sent from the client when the user types something.
- receive-changes: Received by all other clients so their editor can update.

This whole communication is handled by the backend server which listens for these events and sends the data to all connected clients except the one who sent it.

## Folder and File Structure

To keep the project clean and understandable, I have only included the necessary files. Many of the default files from the React app (like App.js, logo.svg, etc.) were removed since we don’t need them.

# Here is the structure of the project:

Task3CollaborativeEditor/
├── server.js              # Backend server with socket logic
├── package.json           # Backend dependencies
├── client/
│   ├── package.json       # Frontend dependencies
│   ├── public/
│   │   └── index.html     # Main HTML for React
│   ├── src/
│   │   ├── index.js       # Renders the TextEditor component
│   │   ├── TextEditor.js  # Main collaborative editor logic
│   │   └── TextEditor.css # Styling for the editor

This structure keeps the backend and frontend separate and easy to manage.

## How to Run the Project

To test this project on your local system, follow these steps:

### 1. Start the Backend Server

Go to the root project folder and run:
bash
npm install
node server.js

This will start the backend on *http://localhost:3001*

### 2. Start the Frontend React App

Now go to the client folder:
bash
cd client
npm install
npm start

This will open the frontend in your browser at *http://localhost:3000*

Make sure both frontend and backend are running at the same time. Now open http://localhost:3000 in two browser windows and type in one — you’ll see the same content show up in the other window in real-time.

## What I Learned

Through this task, I learned how WebSocket-based communication works and how powerful real-time apps can be. I also got a better understanding of how frontend and backend work together in a full-stack application. Socket.IO made it easy to build the connection between the client and server, and React helped me design the editor in a simple, clean way.

One of the biggest lessons was how to structure a project cleanly. Initially, the React app had too many files that were not needed. So, I removed everything that wasn’t necessary and kept only what’s required for this editor to run. That made the project smaller and easier to understand.

## Final Note

This project might look small, but it gave me great confidence in using sockets, and it opened my interest in real-time systems. It was an interesting challenge, and I’m happy with how it turned out.

All the required files are included and tested. You can directly run it and see the output. I hope this makes it easy for the reviewer to understand what the project does, how it works, and how to run it.

## final output
