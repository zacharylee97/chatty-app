import React, {Component} from "react";

function ChatBar({user}) {
  return (
  <footer className="chatbar">
    <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={user.name}/>
    <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
  </footer>
  );
}
module.exports = ChatBar;
