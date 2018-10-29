import React, {Component} from "react";
const Message = require("./Message.jsx");

function MessageList(props) {
  return (
  <main className="messages">
    <Message />
  </main>
  );
}
module.exports = MessageList;
