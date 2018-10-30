import React, {Component} from "react";
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {name: "Bob"}, //Optional
      messages: [
        {
          id: "01",
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: "02",
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
