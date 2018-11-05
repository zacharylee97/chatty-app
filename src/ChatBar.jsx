import React from "react";

function ChatBar({newMessage, newUsername}) {
  const submitMessage = (event) => {
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        newMessage(event.target.value);
        event.target.value = "";
      }
    }
  }
  const submitName = (event) => {
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        newUsername(event.target.value);
      } else {
        newUsername("Anonymous")
      }
    }
  }
  return (
    <footer className="chatbar">
      <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={submitName} />
      <input type="text" name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={submitMessage} />
    </footer>
  );
}

module.exports = ChatBar;
