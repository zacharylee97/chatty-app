import React, {Component} from "react";
import Message from "./Message.jsx";
import Notification from "./Notification.jsx"

function MessageList({messages}) {
  const messageItems = messages.map(({type, id, username, content, color}) => {
    if (type === "incomingMessage") {
      return <Message key={id} user={username} content={content} color={color} />
    } else if (type === "incomingNotification") {
      return <Notification key={id} content={content} />
    }
  });
  return (
    <main className="messages">
      {messageItems}
    </main>
  );
}
module.exports = MessageList;
