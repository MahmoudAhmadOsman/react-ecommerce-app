import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; Copyright. MAO Store { new Date().getFullYear() }. All rights reserved. Developed by
        <a href="http://mahmoudosman.com"> Mahmoud Osman</a>
      </p>
    </footer>
  );
}
