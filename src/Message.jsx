import React from "react";

function includesImgURL(entry){
  const ImgURLRegularExpression =  /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
  return ImgURLRegularExpression.test(entry);
}

function messageWithImgURL(user, content, color) {
  const rx = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;
  const imgURL = rx.exec(content);
  const newContent = content.replace(imgURL[0], "")
  return (
    <div className="message">
      <span className="message-username" style={{color: color}}>{user}</span>
      <span className="message-content">
        {newContent}
        <br />
        <img className="message-image" src={imgURL[0]} />
      </span>

    </div>
  )
}

function Message({user, content, color}) {
  if (includesImgURL(content)) {
    return messageWithImgURL(user, content, color)
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
