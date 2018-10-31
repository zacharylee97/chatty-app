import React, {Component} from "react";

function Message({user, content, color}) {
  return (
    <div className="message">
      <span className="message-username" style={{color: color}}>{user}</span>
      <span className="message-content">{content}</span>
    </div>
  );
}
module.exports = Message;
