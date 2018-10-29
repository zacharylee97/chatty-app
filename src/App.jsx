import React, {Component} from "react";
const ChatBar = require("./ChatBar.jsx");
const MessageList = require("./MessageList.jsx");

class App extends Component {
  render() {
    return (
      <div>
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}
export default App;
