import React, {Component} from "react";
import Message from "./Message.jsx";
import Notification from "./Notification.jsx"

function MessageList({messages}) {
  const messageItems = messages.map(message => {
    if (message.type === "incomingMessage") {
      return <Message key={message.id} user={message.username} content={message.content} />
    } else if (message.type === "incomingNotification") {
      return <Notification key={message.id} content={message.content} />
    }
  });
  return (
    <main className="messages">
      {messageItems}
    </main>
  );
}
module.exports = MessageList;
