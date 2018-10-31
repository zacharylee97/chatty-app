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

//Create function to broadcast messages
wss.broadcast = function broadcast(message) {
  wss.clients.forEach(function each(client) {
    client.send(message);
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  //Broadcast number of clients
  const clients = {
    type: "numberOfClients",
    numOfClients: wss.clients.size
  }
  wss.broadcast(JSON.stringify(clients));

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
          content: content
        }
        wss.broadcast(JSON.stringify(notification));
        break;
      default:
        throw new Error("Unknown event type " + data.type);
    }
  });


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    //Broadcast number of clients
    const clients = {
      type: "numberOfClients",
      numOfClients: wss.clients.size
    }
    wss.broadcast(JSON.stringify(clients));
    console.log('Client disconnected');
  });
});

