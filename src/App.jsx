import React, {Component} from "react";
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [],
    };
    this.newMessage = this.newMessage.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket('ws://localhost:3001');
  }

  newMessage(content) {
    const id = this.state.messages.length + 1;
    const user = this.state.currentUser.name;
    const message = {
      type: "sendMessage",
      content: content,
      username: user
    };
    this.socket.send(JSON.stringify(message));
  }

  addMessage(newMessage) {
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages});
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket.onopen = () => {
      console.log("Connected to server");
    }
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch(message.type) {
        case "sendMessage":
          this.addMessage(message);
      }
    }
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUser} newMessage={this.newMessage} />
      </div>
    );
  }
}
export default App;
