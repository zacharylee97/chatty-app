import React, {Component} from "react";

function MessageListItem({message}) {
  return (
    <div className="message">
      <span className="message-username">{message.username}</span>
      <span className="message-content">{message.content}</span>
    </div>
  );
}

function Message({messages}) {
  const messageItems = messages.map(message => (
    <MessageListItem key={message.username} message={message} />
  ));
  return (
    <div>
      {messageItems}
    </div>
  )
}
module.exports = Message;
