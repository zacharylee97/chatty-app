# Chatty App

Chatty App is a single-page app built with ReactJS that allows users to send and receive messages in real-time. Messages can include text or an image URL, which will be dispayed in the chat log. Users can also change their username, which will assign a random colour to their username. A notification will be sent to all users when a user changes their username. The number of users is displayed in the navbar at the top.

## Final Product

!["Screenshot of Chatty page"](https://github.com/zacharylee97/chatty-app/blob/master/docs/chatty.png?raw=true)

## React Dependencies

- react
- react-dom
- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server


## Server Dependencies

- express
- ws
- uuid

## Getting Started

1. Install dependencies using the `npm install` command in the chatty-app and chatty-server directories.
2. Start the web server using the `npm start` command from the chatty-server directory. The server will be served at <http://localhost:3001/>.
3. Start the web client using the `npm start` command from the chatty-app directory. The app will be served at <http://localhost:3000/>.
4. Go to <http://localhost:3000/> in your browser.