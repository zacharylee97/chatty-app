import React, {Component} from "react";

function includesImgURL(entry){
  const ImgURLRegularExpression =  /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
  return ImgURLRegularExpression.test(entry);
}

function Message({user, content, color}) {
  if (includesImgURL(content)) {
    const rx = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
    const imgURL = rx.exec(content);
    const newContent = content.replace(imgURL[0], "")
    return (
      <div className="message">
        <span className="message-username" style={{color: color}}>{user}</span>
        <img className="message-image" src={imgURL[0]} />
        <span className="message-content">{newContent}</span>
      </div>
      )
  } else {
    return (
      <div className="message">
        <span className="message-username" style={{color: color}}>{user}</span>
        <span className="message-content">{content}</span>
      </div>
    );
  }
}
module.exports = Message;
