import React from "react";

function Notification({content}) {
  return (
    <div className="notification">
      <span className="notification-content">{content}</span>
    </div>
  );
}
module.exports = Notification;
