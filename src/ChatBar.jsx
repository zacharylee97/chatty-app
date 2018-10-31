import React, {Component} from "react";

function ChatBar({user, newMessage, changeUsername}) {
  const submitMessage = (event) => {
    if (event.key === 'Enter') {
      newMessage(event.target.value)
      event.target.value = "";
    }
  }

  return (
    <footer className="chatbar">
      <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" onChange={changeUsername} />
      <input type="text" name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={submitMessage} />
    </footer>
  );
}

module.exports = ChatBar;
