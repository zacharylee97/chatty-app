import React, {Component} from "react";
import Message from "./Message.jsx";

function MessageList({messages}) {
  return (
  <main className="messages">
    <Message messages={messages} />
  </main>
  );
}
module.exports = MessageList;
