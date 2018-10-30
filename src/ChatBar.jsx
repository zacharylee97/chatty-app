import React, {Component} from "react";

function ChatBar({user, addMessage}) {

  const onSubmit = (event) => {
    event.preventDefault();
    const content = event.target.elements.content;
    addMessage(content.value)
    content.value = "";
    }

  return (
    <footer className="chatbar">
      <form className="chatbar" onSubmit={onSubmit}>
        <input type="text" name="user" className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={user.name}/>
        <input type="text" name="content" className="chatbar-message" placeholder="Type a message and hit ENTER" />
        <button type="submit" style={{display: "None"}}></button>
      </form>
    </footer>
  );
}

module.exports = ChatBar;
