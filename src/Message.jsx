import React, {Component} from "react";

function MessageListItem({user, content}) {
  return (
    <div className="message">
      <span className="message-username">{user}</span>
      <span className="message-content">{content}</span>
    </div>
  );
}

function NotificationListItem({content}) {
  return(
    <div className="notification">
      <span className="notification-content">{content}</span>
    </div>
  )
}

function Message({messages}) {
  const messageItems = messages.map(message => {
    if (message.type === "incomingMessage") {
      return <MessageListItem key={message.id} user={message.username} content={message.content} />
    } else if (message.type === "incomingNotification") {
      return <NotificationListItem key={message.id} content={message.content} />
    }
  });
  return (
    <div>
      {messageItems}
    </div>
  )
}
module.exports = Message;
