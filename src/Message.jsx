import React, {Component} from "react";

function MessageListItem({user, content}) {
  return (
    <div className="message">
      <span className="message-username">{user}</span>
      <span className="message-content">{content}</span>
    </div>
  );
}

function Message({messages}) {
  const messageItems = messages.map(message => (
    <MessageListItem key={message.id} user={message.username} content={message.content} />
  ));
  return (
    <div>
      {messageItems}
    </div>
  )
}
module.exports = Message;
