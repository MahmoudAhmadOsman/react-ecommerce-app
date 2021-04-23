import React from "react";

const MessageBox = (props) => {
  return (
    <div className={`alert alert-${props.variant || "danger"}`}>
      {/* Show the content of the message */}
      {props.children}
    </div>
  );
};
export default MessageBox;
