import React, {Component} from "react";

function Message({user, content}) {
  return (
    <div className="message">
      <span className="message-username">{user}</span>
      <span className="message-content">{content}</span>
    </div>
  );
}
module.exports = Message;
