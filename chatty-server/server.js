const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
const clients = {};

//Create function to broadcast messages
wss.broadcast = function broadcast(message) {
  wss.clients.forEach(function each(client) {
    client.send(message);
  });
};

//Create function to broadcast number of clients
wss.broadcastClients = () => {
  const numOfClients = {
    type: "numberOfClients",
    numOfClients: wss.clients.size
  }
  wss.broadcast(JSON.stringify(numOfClients));
}

//Create function to randomly generate a hexcode for user color
const generateColor = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let color = [0, 0, 0, 0, 0, 0, 0];

  color = color.map(hexCode => hex[Math.floor(Math.random() * 16)]);
  color[0] = '#';
  return color.join('');
}

const addClient = (ws, username = 'Anonymous') => {
  const clientId = uuidv4();
  ws.clientId = clientId;
  clients[clientId] = { ws, username, color: generateColor() };
}

const updateClient = (ws, username) => {
  clients[ws.clientId].username = username;
}

const removeClient = (ws) => {
  delete clients[ws.clientId];
}

const sendClientColor = ws => {
  const {color} = clients[ws.clientId];
  const message = {
    type: "incomingUserNotification",
    userId: ws.clientId,
    color
  }
  ws.send(JSON.stringify(message));
}

// Set up a callback that will run when a client connects to the server
// when a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', function connection(ws) {
  console.log('Client connected');
  addClient(ws);
  console.log(clients);
  //Broadcast number of clients
  wss.broadcastClients();

  //Broadcast message to all connected clients
  ws.on('message', function incoming(data) {
    const messageInfo = JSON.parse(data);
    switch(messageInfo.type) {
      case "postMessage":
        console.log(`User ${messageInfo.username} said ${messageInfo.content}`);
        const message = {
          id: uuidv4(),
          type: "incomingMessage",
          username: messageInfo.username,
          color: messageInfo.color,
          content: messageInfo.content
        }
        wss.broadcast(JSON.stringify(message));
        break;
      case "postNotification":
        const content = `${messageInfo.currentName} changed their name to ${messageInfo.newName}`;
        console.log(content);
        const notification = {
          id: uuidv4(),
          type: "incomingNotification",
          username: messageInfo.newName,
          content
        }
        updateClient(ws, messageInfo.newName);
        sendClientColor(ws);
        wss.broadcast(JSON.stringify(notification));
        break;
      default:
        throw new Error("Unknown event type " + data.type);
    }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    wss.broadcastClients();
    removeClient(ws);
    console.log('Client disconnected');
  });
});

