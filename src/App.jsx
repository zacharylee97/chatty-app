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
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        },
      ],
    };
    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket('ws://localhost:3001');
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket.onopen = function() {
      console.log("Connected to server")
    }
  }

  addMessage(content) {
    const id = this.state.messages.length + 1;
    const user = this.state.currentUser.name;
    const newMessage = {id: id, username: user, content: content};
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages})
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} addMessage={this.addMessage} />
      </div>
    );
  }
}
export default App;
