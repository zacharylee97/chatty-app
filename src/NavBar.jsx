import React, {Component} from "react";

function NavBar({users}) {
  return(
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <h3 className="number-of-users">{users} user(s) online</h3>
    </nav>
  );
}

module.exports = NavBar;
