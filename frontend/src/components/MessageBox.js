import React from "react";

export default function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "danger"}`}>
      {/* Show the content of the message */}
      {props.children}
    </div>
  );
}
