import React, {Component} from "react";

function ChatBar({user, newMessage, changeUsername}) {

  const onSubmit = (event) => {
    event.preventDefault();
    const content = event.target.elements.content;
    newMessage(content.value)
    content.value = "";
    }

  return (
    <footer className="chatbar">
      <form className="chatbar" onSubmit={onSubmit}>
        <input type="text" className="chatbar-username" placeholder="Your Name (Optional)" onChange={changeUsername} />
        <input type="text" name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" />
        <button type="submit" style={{display: "None"}}></button>
      </form>
    </footer>
  );
}

module.exports = ChatBar;
