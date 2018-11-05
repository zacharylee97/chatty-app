import React, {Component} from "react";
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";
import NavBar from "./NavBar.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Anonymous", color: "Black"},
      messages: [],
      users: 0
    };
    this.newMessage = this.newMessage.bind(this);
    this.newUsername = this.newUsername.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }
  newMessage(content) {
    const message = {
      type: "postMessage",
      username: this.state.currentUser.name,
      color: this.state.currentUser.color,
      content: content
    };
    this.socket.send(JSON.stringify(message));
  }
  newUsername(name) {
    const message = {
      type: "postNotification",
      currentName: this.state.currentUser.name,
      newName: name
    }
    this.socket.send(JSON.stringify(message));
  }
  addMessage(newMessage) {
    const messages = this.state.messages.concat(newMessage);
    this.setState({messages: messages});
  }
  addNotification(newNotification) {
    const messages = this.state.messages.concat(newNotification);
    this.setState({messages: messages});
  }
  displayClients(clients) {
    this.setState({users: clients});
  }
  updateUserInfo({id, username, color}) {
    this.setState({currentUser: {id: id, name: username, color: color}});
  }
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.onopen = () => {
      console.log("Connected to server");
    }
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch(message.type) {
        case "numberOfClients":
          this.displayClients(message.numOfClients);
          break;
        case "incomingMessage":
          this.addMessage(message);
          break;
        case "incomingNotification":
          this.addNotification(message);
          break;
        case "incomingUserNotification":
          this.updateUserInfo(message);
          break;
        default:
          throw new Error("Unknown event type " + data.type);
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar users={this.state.users} />
        <MessageList messages={this.state.messages}  />
        <ChatBar user={this.state.currentUser} newMessage={this.newMessage} newUsername={this.newUsername} />
      </div>
    );
  }
}
export default App;
